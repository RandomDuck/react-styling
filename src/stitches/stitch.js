import { createStitches } from '@stitches/react';
export const { styled, createTheme } = createStitches({theme: {
  colors: {
    buttonBg: '#ffffff',
    buttonHover: '#888888',
    textColor: '#000000',
    background: '#aaaaaa'
  }
}});

export const dark = createTheme({
  colors: {
    buttonBg: '#888888',
    buttonHover: '#555555',
    textColor: '#ffffff',
    background: '#222222'
  }
});
