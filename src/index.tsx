import React, { useEffect, useState, useRef, FC, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  DEFAULT_ANIMATION,
  DEFAULT_INTERVAL,
  DEFAULT_INTESECTION_OBSERVER_ROOT_MARGIN,
  DEFAULT_TAG,
  DEFAULT_THRESHOLD,
  DEFAULT_TYPE,
  PREDEFINED_ANIMATIONS,
  WHITE_SPACE_CODE,
  DEFAULT_DURATION,
} from './constants';
import { concatFragments } from './helpers';
import {
  AnimatedFragment,
  StyledWrapper,
} from './styles/AnimatedFragment.styled';
import { AnimatedTextProps } from './types';

const renderWords = (
  arrayToRender: string[],
  includeWhiteSpaces: boolean
): ReactNode =>
  arrayToRender.map((fragment, index) =>
    fragment !== WHITE_SPACE_CODE ? (
      <AnimatedFragment
        key={index}
        dangerouslySetInnerHTML={{ __html: fragment }}
      />
    ) : (
      (includeWhiteSpaces && (
        <AnimatedFragment
          key={`${index}&nbsp;`}
          dangerouslySetInnerHTML={{ __html: '&nbsp;' }}
        />
      )) ||
      WHITE_SPACE_CODE
    )
  );

const renderChars = (
  arrayToRender: string[],
  interval: number,
  includeWhiteSpaces: boolean
): ReactNode => {
  let fullIndex = -1;

  return arrayToRender.map((fragment, index) => {
    const chars =
      fragment !== WHITE_SPACE_CODE ? Array.from(fragment) : [WHITE_SPACE_CODE];

    if (chars[0] !== WHITE_SPACE_CODE)
      return (
        <span key={index}>
          {chars.map((char, charIndex) => {
            fullIndex += 1;

            return (
              <AnimatedFragment
                key={charIndex}
                dangerouslySetInnerHTML={{ __html: char }}
                style={{ animationDelay: `${interval * fullIndex}s` }}
              />
            );
          })}
        </span>
      );

    return includeWhiteSpaces ? (
      <AnimatedFragment
        key={`${index}&nbsp;`}
        dangerouslySetInnerHTML={{ __html: '&nbsp;' }}
        style={{ animationDelay: `${interval * fullIndex}s` }}
      />
    ) : (
      WHITE_SPACE_CODE
    );
  });
};

const AnimatedText: FC<AnimatedTextProps> = ({
  children = '',
  type = DEFAULT_TYPE,
  interval,
  duration,
  animation = DEFAULT_ANIMATION,
  animationType = DEFAULT_TYPE,
  tag = DEFAULT_TAG,
  includeWhiteSpaces = false,
  rootMargin,
  threshold,
  ...props
}) => {
  const [arrayToRender, setArrayToRender] = useState<string[]>([]);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const wrapperRef = useRef(null);

  const animationOptions = PREDEFINED_ANIMATIONS?.[animationType] ?? animation;

  useEffect(() => {
    if (typeof children !== 'string' && typeof children !== 'number') {
      console.error(
        "Only string (ReactText) is currently allowed as react-animated-text-content component's child. Please, change to proper type."
      );
      return;
    }

    const concatedChildren = concatFragments(children);
    setArrayToRender(concatedChildren);

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          setShouldAnimate(true);
          if (wrapperRef.current) observer.unobserve(wrapperRef.current);
        });
      },
      {
        rootMargin: rootMargin || DEFAULT_INTESECTION_OBSERVER_ROOT_MARGIN,
        threshold: threshold || DEFAULT_THRESHOLD,
      }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => {
      setArrayToRender([]);
      setShouldAnimate(false);
    };
  }, [children, type]);

  const uid = uuidv4();

  return (
    <StyledWrapper
      as={tag}
      count={type === 'words' ? arrayToRender.length : 0}
      interval={interval || (animationOptions?.interval ?? DEFAULT_INTERVAL)}
      duration={duration || (animationOptions?.duration ?? DEFAULT_DURATION)}
      ref={wrapperRef}
      shouldAnimate={shouldAnimate}
      uid={uid}
      animation={animationOptions}
      data-testid="animated-text"
      {...props}
    >
      {type === 'words'
        ? renderWords(arrayToRender, includeWhiteSpaces)
        : renderChars(
            arrayToRender,
            interval || (animationOptions?.interval ?? DEFAULT_INTERVAL),
            includeWhiteSpaces
          )}
    </StyledWrapper>
  );
};

export default AnimatedText;
