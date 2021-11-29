import styled, { css } from 'styled-components';
import { AnimationShapeType } from '..';

export const AnimatedFragment = styled.span<{
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
  duration: number;
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
      transform: translateX(0) translateY(0) scale(1);
    }
  }

  & > span {
    display: inline-block;
  }

  & ${AnimatedFragment} {
    text-decoration: inherit;
    vertical-align: inherit;

    animation: ${({ animation: { ease }, duration }) =>
      `${duration}s ${ease ?? 'ease-in-out'} forwards;`};

    animation-name: ${({ shouldAnimate, uid }) =>
      shouldAnimate ? `fragmentletter-${uid}` : ''};
  }

  ${({ count = 0, interval }) => {
    let styles = '';

    for (let i = 0; i < count; i += 1) {
      styles += `${AnimatedFragment}:nth-of-type(${i + 1}) {
            animation-delay: ${(interval || 0.04) * i}s;
          }`;
    }

    return css`
      ${styles}
    `;
  }}
`;
