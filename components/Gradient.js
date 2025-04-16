import cn from 'classnames';

import gradients from './gradients.module.css';

export function Gradient({ width = 1000, height = 200, opacity, pink, blue, conic, gray, className, small }) {
  return (
    <span
      className={cn(
        'absolute',
        gradients.glow,
        {
          [gradients.glowPink]: pink,
          [gradients.glowBlue]: blue,
          [gradients.glowConic]: conic,
          [gradients.glowSmall]: small,
          [gradients.glowGray]: gray,
        },
        className,
      )}
      style={{
        width: width,
        height: height,
        opacity: opacity,
        borderRadius: '100%',
      }}
    />
  );
}
