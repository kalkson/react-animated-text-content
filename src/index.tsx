import React, {
  ElementType,
  ReactText,
  useEffect,
  useState,
  useRef,
  FC,
  ReactNode,
} from 'react';

import { v4 as uuidv4 } from 'uuid';
import { concatFragments } from './helpers';
import {
  AnimatedFragment,
  StyledWrapper,
} from './styles/AnimatedFragment.styled';

export interface AnimationShapeType {
  x?: string;
  y?: string;
  scale?: number;
  ease?: string;
}

type AnimationType =
  | 'blocks'
  | 'wave'
  | 'float'
  | 'bounce'
  | 'throw'
  | 'diagonal'
  | 'rifle'
  | 'lights';

interface AnimatedTextProps {
  type?: 'chars' | 'words';
  children?: ReactText;
  interval?: number;
  duration?: number;
  animation?: AnimationShapeType;
  animationType?: AnimationType;
  tag?: ElementType;
  className?: string;
  includeWhiteSpaces?: boolean;
  threshold?: number;
  rootMargin?: string;
}

interface ExtendedAnimationShapeType extends AnimationShapeType {
  duration?: number;
  interval?: number;
}

const PREDEFINED_ANIMATIONS: Record<AnimationType, ExtendedAnimationShapeType> =
  {
    blocks: {
      y: '60px',
      interval: 0.07,
      duration: 0.7,
    },
    wave: {
      y: '40px',
      interval: 0.04,
      duration: 0.4,
      ease: 'ease-in-out',
    },
    float: {
      x: '200px',
      ease: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      duration: 1.2,
      interval: 0.1,
    },
    bounce: { y: '200px', ease: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' },
    throw: {
      y: '200px',
      scale: 2,
      interval: 0.07,
    },
    diagonal: {
      x: '200px',
      y: '-200px',
      ease: 'cubic-bezier(0.68, -4.55, 0.265, 1.55)',
    },
    rifle: {
      y: '100px',
      x: '-500px',
      ease: 'ease-in',
      duration: 0.3,
      interval: 0.03,
    },
    lights: {
      y: '-20px',
      ease: 'ease-out',
      duration: 1,
      interval: 0.4,
    },
  };

export const WHITE_SPACE_CODE = ' ';
const DEFAULT_INTERVAL = 0.04;
const DEFAULT_DURATION = 0.4;
const DEFAULT_TYPE = 'words';
const DEFAULT_ANIMATION = {
  y: '-30px',
};
const DEFAULT_TAG = 'div';
const DEFAULT_INTESECTION_OBSERVER_ROOT_MARGIN = '20%';
const DEFAULT_THRESHOLD = 0;

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
