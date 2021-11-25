import { FC, ReactText, ElementType } from 'react';
import { AnimationShapeType, AnimationType } from './types';
interface Props {
    type?: 'chars' | 'words';
    children?: ReactText;
    interval?: number;
    animation?: AnimationShapeType;
    animationType?: AnimationType;
    tag?: ElementType;
    className: string;
}
declare const AnimatedText: FC<Props>;
export default AnimatedText;
