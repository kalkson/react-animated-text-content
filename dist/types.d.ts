import { ElementType, ReactText } from 'react';
export declare type AnimationShapeType = {
    x?: string;
    y?: string;
    scale?: number;
    duration?: number;
    ease?: string;
};
export declare type AnimationType = 'blocks' | 'wave' | 'float' | 'bounce' | 'throw' | 'diagonal';
export interface AnimatedTextProps {
    type?: 'chars' | 'words';
    children?: ReactText;
    interval?: number;
    animation?: AnimationShapeType;
    animationType?: AnimationType;
    tag?: ElementType;
    className?: string;
    includeWhiteSpaces?: boolean;
    threshold?: number;
    rootMargin?: string;
}
