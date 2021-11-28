import { AnimationShapeType } from '../types';
export declare const AnimatedFragment: import("styled-components").StyledComponent<"span", any, {
    count?: number | undefined;
    interval?: number | undefined;
}, never>;
export declare const StyledWrapper: import("styled-components").StyledComponent<"div", any, {
    uid: string;
    count: number;
    interval: number;
    duration: number;
    shouldAnimate: boolean;
    animation: AnimationShapeType;
}, never>;
