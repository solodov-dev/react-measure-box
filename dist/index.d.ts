import { ReactElement } from 'react';
export declare type MeasureBoxProps = {
    children: ReactElement;
    resizable?: 'both' | 'horizontal' | 'vertical';
    color?: string;
    height?: string;
    width?: string;
    className?: string;
};
export default function MeasureBox(props: MeasureBoxProps): JSX.Element;
