import { createCss } from '@stitches/react';

export const { styled, css, global, keyframes, theme } = createCss({
  theme: {},
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)'
  }
});
