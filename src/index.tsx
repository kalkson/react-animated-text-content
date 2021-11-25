import React, {
  useEffect,
  useState,
  useRef,
  FC,
  ReactText,
  ReactNode,
} from 'react';
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
} from './constants';
import {
  AnimatedFragment,
  StyledWrapper,
} from './styles/AnimatedFragment.styled';
import { AnimationShapeType, AnimationType } from './types';

interface Props {
  type?: 'chars' | 'words';
  children?: ReactText;
  interval?: number;
  animation?: AnimationShapeType;
  animationType?: AnimationType;
  tag?:
    | 'span'
    | 'div'
    | 'p'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'strong'
    | 'blackquote'
    | 'code'
    | 'li'
    | 'dt'
    | 'dd'
    | 'mark'
    | 'ins'
    | 'del'
    | 'sup'
    | 'sub'
    | 'small'
    | 'i'
    | 'b'
    | 'em';
}

const renderWords = (arrayToRender: string[]): ReactNode =>
  arrayToRender.map((fragment, index) => (
    <AnimatedFragment
      key={index}
      dangerouslySetInnerHTML={{ __html: fragment }}
    />
  ));

const renderChars = (arrayToRender: string[], interval: number): ReactNode => {
  let fullIndex = -1;

  return arrayToRender.map((fragment, index) => {
    const chars =
      fragment !== WHITE_SPACE_CODE ? Array.from(fragment) : [WHITE_SPACE_CODE];

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
  });
};

const AnimatedText: FC<Props> = ({
  children = '',
  interval = DEFAULT_INTERVAL,
  type = DEFAULT_TYPE,
  animation = DEFAULT_ANIMATION,
  animationType = DEFAULT_TYPE,
  tag = DEFAULT_TAG,
  ...props
}) => {
  const [arrayToRender, setArrayToRender] = useState<string[]>([]);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const wrapperRef = useRef(null);

  const animationOptions = PREDEFINED_ANIMATIONS?.[animationType] ?? animation;

  useEffect(() => {
    if (typeof children !== 'string' && typeof children !== 'number') {
      console.error(
        "Only string (ReactText) is currently allowed as AnimatedText component's child. Please, change to proper type."
      );
      return;
    }

    const splittedChildren: string[] = children.toString().split(' ');

    const mappedChildren = ([] as string[])
      .concat(
        ...splittedChildren.map((word, index) =>
          index !== splittedChildren.length - 1
            ? [word, WHITE_SPACE_CODE]
            : [word]
        )
      )
      .map((word) => (word === ' ' ? WHITE_SPACE_CODE : word));

    setArrayToRender(mappedChildren);

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          setShouldAnimate(true);
          if (wrapperRef.current) observer.unobserve(wrapperRef.current);
        });
      },
      {
        rootMargin: DEFAULT_INTESECTION_OBSERVER_ROOT_MARGIN,
        threshold: DEFAULT_THRESHOLD,
      }
    );

    if (wrapperRef.current) observer.observe(wrapperRef.current);

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
      interval={interval}
      ref={wrapperRef}
      shouldAnimate={shouldAnimate}
      uid={uid}
      animation={animationOptions}
      {...props}
    >
      {type === 'words'
        ? renderWords(arrayToRender)
        : renderChars(arrayToRender, interval)}
    </StyledWrapper>
  );
};

export default AnimatedText;
