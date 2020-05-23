import React, { ReactElement, useState } from 'react';
import Measure, { BoundingRect } from 'react-measure';

export type MeasureBoxProps = {
  children: ReactElement;
  resizable?: 'both' | 'horizontal' | 'vertical';
  color?: string;
  height?: string;
  width?: string;
  className?: string
}

export default function MeasureBox(props: MeasureBoxProps) {
  const [dimentions, setDimentions] = useState<BoundingRect>();
  return (
    <div className={props.className}>
      <Measure
        bounds
        onResize={(contentRect) => setDimentions(contentRect.bounds)}
      >
        {({ measureRef }) => (
          <div
            ref={measureRef}
            style={{
              resize: props.resizable,
              overflow: 'auto',
              border: '2px solid',
              borderColor: props.color || 'darkorange',
              width: props.width || '200px',
              height: props.height || '150px',
              position: 'relative',
              zIndex: 1000,
            }}
          >
            {props.children}
          </div>
        )}
      </Measure>
      <span
        style={{
          textTransform: 'lowercase',
          display: 'inline-block',
          backgroundColor: props.color || 'darkorange',
          color: 'white',
          padding: '5px',
        }}
      >
        Width: {dimentions?.width} Height: {dimentions?.height}
      </span>
    </div>
  );
}
