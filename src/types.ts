export type AnimationShapeType = {
  x?: string;
  y?: string;
  scale?: number;
  duration?: number;
  ease?: string;
};

export type AnimationType =
  | 'blocks'
  | 'wave'
  | 'float'
  | 'bounce'
  | 'throw'
  | 'diagonal';
