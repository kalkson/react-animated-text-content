import { FC, ReactText } from 'react';
import { AnimationShapeType, AnimationType } from './types';
interface Props {
    type?: 'chars' | 'words';
    children?: ReactText;
    interval?: number;
    animation?: AnimationShapeType;
    animationType?: AnimationType;
    tag?: 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'strong' | 'blackquote' | 'code' | 'li' | 'dt' | 'dd' | 'mark' | 'ins' | 'del' | 'sup' | 'sub' | 'small' | 'i' | 'b' | 'em';
}
declare const AnimatedText: FC<Props>;
export default AnimatedText;
