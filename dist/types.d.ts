import { ElementType, ReactText } from 'react';
export interface AnimationShapeType {
    x?: string;
    y?: string;
    scale?: number;
    ease?: string;
}
export declare type AnimationType = 'blocks' | 'wave' | 'float' | 'bounce' | 'throw' | 'diagonal' | 'rifle' | 'lights';
export interface AnimatedTextProps {
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
export interface ExtendedAnimationShapeType extends AnimationShapeType {
    duration?: number;
    interval?: number;
}
