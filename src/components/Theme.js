import { createTheming } from 'react-color-theme';

export const [ThemeProvider, useTheme, themes] = createTheming(
  {
    background: 'var(--clr-lightgrey)',
    cardBackground: 'var(--clr-white)',
    text: 'var(--clr-vdarkbluelight)',
  },
  {
    light: {
      background: 'var(--clr-lightgrey)',
      cardBackground: 'var(--clr-white)',
      text: 'var(--clr-vdarkbluelight)',
    },
    dark: {
      background: 'var(--clr-vdarkblue)',
      cardBackground: 'var(--clr-darkblue)',
      text: 'var(--clr-white)',
    },
  }
);