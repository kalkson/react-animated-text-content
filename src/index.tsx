import React, { useEffect, useState, useRef, FC, ReactText } from 'react';
import styled, { css } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { PREDEFINED_ANIMATIONS } from './constants';

const AnimatedSpan = styled.span<{
  uid: string;
  y?: string;
  x?: string;
  count?: number;
  duration?: number;
  ease?: string;
  interval?: number;
  scale?: number;
}>`
  @keyframes fragmentletter-${({ uid }) => uid} {
    0% {
      opacity: 0;
      visibility: hidden;
      transform: translateY(${({ y }) => y ?? 0})
        translateX(${({ x }) => x ?? 0}) scale(${({ scale }) => scale ?? 1});
    }
    100% {
      oapcity: 1;
      visibility: visible;
      transform: translateY(0) translateX(0) scale(1);
    }
  }

  position: relative;
  display: inline-block;
  visibility: hidden;
  animation: fragmentletter-${({ uid }) => uid} ${({ duration }) =>
      duration ?? 0.4}s ${({ ease }) => ease ?? 'ease-in-out'} forwards;
`;

const StyledWrapper = styled.p<{
  count: number;
  interval: number;
}>`
  font-size: 2rem;
  margin-bottom: 1000px;
  margin-top: 200px;

  & > span {
    display: inline-block;
  }

  ${({ count, interval }) => {
    if (!count) return;
    let styles = '';

    for (let i = 0; i < count; i++) {
      styles += `${AnimatedSpan}:nth-of-type(${i + 1}) {
          animation-delay: ${interval * i}s;
        }`;
    }

    return css`
      ${styles}
    `;
  }}
`;

type AnimationType =
  | 'block'
  | 'wave'
  | 'float'
  | 'bounce'
  | 'throw'
  | 'diagonal';

type AnimationShapeType = {
  x?: string;
  y?: string;
  duration?: number;
  ease: 'string';
};

interface Props {
  type: 'chars' | 'words';
  children?: ReactText;
  interval?: number;
  animation?: AnimationShapeType;
  animationType?: AnimationType;
}

const AnimatedText: FC<Props> = ({
  children,
  interval = 0.04,
  type = 'chars',
  animation = {
    y: '-30px',
  },
  animationType = null,
}) => {
  const [arrayToRender, setArrayToRender] = useState<string[]>([]);
  const [shouldRender, setShouldRender] = useState(false);
  const wrapperRef = useRef(null);

  const { x, y, scale, ease, duration } = animationType
    ? PREDEFINED_ANIMATIONS?.[animationType]
    : animation;

  let fullIndex = -1;

  useEffect(() => {
    if (typeof children !== 'string' && typeof children !== 'number') {
      console.error(
        "Only string (ReactText) is currently allowed as AnimatedText component's child. Please, change to proper type."
      );
      return;
    }

    const splittedChildren: string[] = children.toString().split(' ');

    const mappedChildren: string[] = []
      .concat(
        ...splittedChildren.map((word: string, index: number): any =>
          index !== splittedChildren.length - 1 ? [word, '&nbsp;'] : [word]
        )
      )
      .map((word) => (word === ' ' ? '&nbsp;' : word)) as string[];

    setArrayToRender(mappedChildren);

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (entry.isIntersecting === true) {
            setShouldRender(true);
            if (wrapperRef.current) observer.unobserve(wrapperRef.current);
          }
        });
      },
      {
        rootMargin: '-300px',
        threshold: 1.0,
      }
    );

    if (wrapperRef.current) observer.observe(wrapperRef.current);

    return () => {
      setArrayToRender([]);
      setShouldRender(false);
    };
  }, [children, type]);

  const uid = uuidv4();

  return (
    <StyledWrapper
      count={type === 'words' ? arrayToRender.length : 0}
      interval={interval}
      ref={wrapperRef}
    >
      {type === 'words' &&
        shouldRender &&
        arrayToRender.map((fragment, index) => {
          return (
            <AnimatedSpan
              x={x}
              y={y}
              scale={scale}
              ease={ease}
              duration={duration}
              key={index}
              dangerouslySetInnerHTML={{ __html: fragment }}
              uid={uid}
            />
          );
        })}

      {type === 'chars' &&
        shouldRender &&
        arrayToRender.map((fragment, index) => {
          const chars =
            fragment !== '&nbsp;' ? Array.from(fragment) : ['&nbsp;'];
          return (
            <span key={index}>
              {chars.map((char, charIndex) => {
                fullIndex++;
                return (
                  <AnimatedSpan
                    x={x}
                    y={y}
                    scale={scale}
                    ease={ease}
                    duration={duration}
                    key={charIndex}
                    dangerouslySetInnerHTML={{ __html: char }}
                    style={{ animationDelay: `${interval * fullIndex}s` }}
                    uid={uid}
                  />
                );
              })}
            </span>
          );
        })}
    </StyledWrapper>
  );
};

export default AnimatedText;
