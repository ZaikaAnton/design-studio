import { css } from 'styled-components';

// import { BREAKPOINTS } from './constants';

interface Colors {
  Primary90: string;
  Primary60: string;
  Primary30: string;
  White: string;
  Error: string;
  Warning: string;
  Success: string;
  Overlay: string;
  coolGray10: string;
  coolGray20: string;
  coolGray30: string;
  coolGray40: string;
  coolGray50: string;
  Gray: string;
  coolGray70: string;
  coolGray80: string;
  coolGray90: string;
  Black: string;
}

interface Fonts {
  primary: string;
}

// type Breakpoints = typeof BREAKPOINTS;

export interface TypographyCustom {
  h1: ReturnType<typeof css>;
  h2: ReturnType<typeof css>;
  h3: ReturnType<typeof css>;
  h4: ReturnType<typeof css>;
  h5: ReturnType<typeof css>;
  h6: ReturnType<typeof css>;
  subtitleM: ReturnType<typeof css>;
  subtitleS: ReturnType<typeof css>;
  bodyL: ReturnType<typeof css>;
  bodyM: ReturnType<typeof css>;
  bodyS: ReturnType<typeof css>;
  bodyXS: ReturnType<typeof css>;
  bodyXXS: ReturnType<typeof css>;
  customXXL: ReturnType<typeof css>;
  customTextXL: ReturnType<typeof css>;
  caption: ReturnType<typeof css>;
  buttonL: ReturnType<typeof css>;
  buttonM: ReturnType<typeof css>;
  buttonS: ReturnType<typeof css>;
  menuTabs: ReturnType<typeof css>;
  captionOther: ReturnType<typeof css>;
}

export interface Theme {
  colors: Colors;
  spacing: (multiplier: number, multiplier2?: number) => string;
  typography: TypographyCustom;
  fonts: Fonts;
//   breakpoints: Breakpoints;
}

export const theme: Theme = {
  colors: {
    Primary90: '#003D87',
    Primary60: '#0F62FE',
    Primary30: '#A6C8FF',
    White: '#ffffff',
    Error: '#DA1E28',
    Warning: '#F1C21B',
    Success: '#25A249',
    Overlay: '#12161980',
    coolGray10: '#f2f4f8',
    coolGray20: '#dde1e6',
    coolGray30: '#c1c7cd',
    coolGray40: '#a2a9b0',
    coolGray50: '#878d96',
    Gray: '#697077',
    coolGray70: '#4d5358',
    coolGray80: '#343a3f',
    coolGray90: '#21272a',
    Black: '#121619',
  },
  spacing: (multiplier: number, multiplier2?: number) =>
    multiplier2 ? `${multiplier * 8}px ${multiplier2 * 8}px` : `${multiplier * 8}px `,
  typography: {
    h1: css`
      font-weight: 700;
      font-size: 54px;
      line-height: 110%;
      letter-spacing: 0px;
    `,
    h2: css`
      font-weight: 700;
      font-size: 42px;
      line-height: 110%;
      letter-spacing: 0px;
    `,
    h3: css`
      font-weight: 700;
      font-size: 32px;
      line-height: 110%;
      letter-spacing: 0px;
    `,
    h4: css`
      font-weight: 700;
      font-size: 24px;
      line-height: 110%;
      letter-spacing: 0px;
    `,
    h5: css`
      font-weight: 700;
      font-size: 20px;
      line-height: 110%;
      letter-spacing: 0px;
    `,
    h6: css`
      font-weight: 700;
      font-size: 18px;
      line-height: 110%;
      letter-spacing: 0px;
    `,
    subtitleM: css`
      font-weight: 500;
      font-size: 16px;
      line-height: 110%;
      letter-spacing: 0px;
    `,
    customXXL: css`
      font-weight: 400;
      font-size: 25px;
      line-height: 110%;
      letter-spacing: 0px;
    `,
    customTextXL: css`
      font-weight: 400;
      font-size: 19px;
      line-height: 25.2px;
    `,
    subtitleS: css`
      font-weight: 500;
      font-size: 14px;
      line-height: 110%;
      letter-spacing: 0px;
    `,
    bodyL: css`
      font-weight: 400;
      font-size: 18px;
      line-height: 140%;
      letter-spacing: 0px;
    `,
    bodyM: css`
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      letter-spacing: 0px;
    `,
    bodyS: css`
      font-weight: 400;
      font-size: 14px;
      line-height: 140%;
      letter-spacing: 0px;
    `,
    bodyXS: css`
      font-weight: 400;
      font-size: 12px;
      line-height: 140%;
      letter-spacing: 0px;
    `,
    bodyXXS: css`
      font-weight: 400;
      font-size: 10px;
      line-height: 140%;
      letter-spacing: 0px;
    `,
    caption: css`
      font-weight: 700;
      font-size: 20px;
      line-height: 100%;
      letter-spacing: 1px;
    `,
    buttonL: css`
      font-weight: 500;
      font-size: 20px;
      line-height: 100%;
      letter-spacing: 0.5px;
    `,
    buttonM: css`
      font-weight: 500;
      font-size: 16px;
      line-height: 100%;
      letter-spacing: 0.5px;
    `,
    buttonS: css`
      font-weight: 500;
      font-size: 14px;
      line-height: 100%;
      letter-spacing: 0.5px;
    `,
    menuTabs: css`
      font-weight: 500;
      font-size: 16px;
      line-height: 100%;
      letter-spacing: 0px;
    `,
    captionOther: css`
      font-weight: 700;
      font-size: 20px;
      line-height: 20px;
      letter-spacing: 1px;
    `,
  },
  fonts: {
    primary: "'Inconsolata', monospace",
  },
//   breakpoints: {
//     ...BREAKPOINTS,
//   },
};