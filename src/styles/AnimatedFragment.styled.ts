import styled, { css } from 'styled-components';

import { AnimationShapeType } from '../types';

export const AnimatedFragment = styled.div<{
  count?: number;
  interval?: number;
}>`
  position: relative;
  display: inline-block;
  visibility: hidden;
`;

export const StyledWrapper = styled.div<{
  uid: string;
  count: number;
  interval: number;
  shouldAnimate: boolean;
  animation: AnimationShapeType;
}>`
  @keyframes fragmentletter-${({ uid }) => uid} {
    0% {
      opacity: 0;
      visibility: hidden;
      transform: translateX(${({ animation: { x } }) => x ?? 0})
        translateY(${({ animation: { y } }) => y ?? 0})
        scale(${({ animation: { scale } }) => scale ?? 1});
    }
    100% {
      oapcity: 1;
      visibility: visible;
      transform: translateY(0) translateX(0) scale(1);
    }
  }

  font-size: 2rem;
  margin-bottom: 1000px;
  margin-top: 200px;

  & > span {
    display: inline-block;
  }

  & ${AnimatedFragment} {
    animation: ${({ animation: { duration, ease } }) =>
      `${duration ?? 0.4}s ${ease ?? 'ease-in-out'} forwards;`};

    animation-name: ${({ shouldAnimate, uid }) =>
      shouldAnimate ? `fragmentletter-${uid}` : ''};
  }

  ${({ count = 0, interval }) => {
    let styles = '';

    for (let i = 0; i < count; i += 1) {
      styles += `${AnimatedFragment}:nth-of-type(${i + 1}) {
            animation-delay: ${interval * i}s;
          }`;
    }

    return css`
      ${styles}
    `;
  }}
`;
