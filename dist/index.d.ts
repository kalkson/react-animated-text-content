import { ElementType, ReactText, FC } from 'react';
export interface AnimationShapeType {
    x?: string;
    y?: string;
    scale?: number;
    ease?: string;
}
declare type AnimationType = 'blocks' | 'wave' | 'float' | 'bounce' | 'throw' | 'diagonal' | 'rifle' | 'lights';
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
export declare const WHITE_SPACE_CODE = " ";
declare const AnimatedText: FC<AnimatedTextProps>;
export default AnimatedText;
