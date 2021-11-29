import { ReactText } from 'react';
import { WHITE_SPACE_CODE } from '.';

export const splitChildrenToFragments = (children: ReactText) =>
  children.toString().split(' ');

export const concatFragments = (children: ReactText) => {
  const splittedChildren = splitChildrenToFragments(children);

  return ([] as string[])
    .concat(
      ...splittedChildren.map((word, index) =>
        index !== 0 ? [WHITE_SPACE_CODE, word] : [word]
      )
    )
    .map((word) => (word === ' ' ? WHITE_SPACE_CODE : word));
};
