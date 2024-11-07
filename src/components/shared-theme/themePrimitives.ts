import { createTheme, alpha, PaletteMode, Shadows } from '@mui/material/styles';

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    highlighted: true;
  }
}
declare module '@mui/material/styles/createPalette' {
  interface ColorRange {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

  interface PaletteColor extends ColorRange { }

  interface Palette {
    baseShadow: string;
  }
}

const defaultTheme = createTheme();

const customShadows: Shadows = [...defaultTheme.shadows];

export const brand = {
  50: "rgb(242, 229, 255)",
  100: "rgb(235, 214, 255)",
  200: "rgb(204, 153, 255)",
  300: "rgb(166, 77, 255)",
  400: "rgb(122, 2, 242)",
  500: "rgb(107, 2, 212)",
  600: "rgb(140, 28, 253)",
  700: "rgb(89, 0, 179)",
  800: "rgb(41, 0, 82)",
  900: "rgb(54, 0, 107)"
};

export const gray = {
  50: "rgb(246, 245, 250)",
  100: "rgb(238, 235, 244)",
  200: "rgb(222, 218, 231)",
  300: "rgb(201, 194, 214)",
  400: "rgb(160, 148, 184)",
  500: "rgb(100, 86, 129)",
  600: "rgb(83, 71, 107)",
  700: "rgb(59, 51, 77)",
  800: "rgb(14, 11, 20)",
  900: "rgb(7, 5, 10)"
};

export const green = {
  50: "rgb(254, 246, 246)",
  100: "rgb(251, 228, 228)",
  200: "rgb(247, 197, 197)",
  300: "rgb(232, 161, 161)",
  400: "rgb(188, 82, 82)",
  500: "rgb(122, 31, 31)",
  600: "rgb(108, 19, 19)",
  700: "rgb(71, 10, 10)",
  800: "rgb(47, 4, 4)",
  900: "rgb(29, 2, 2)"
};

export const orange = {
  50: "rgb(251, 255, 240)",
  100: "rgb(241, 253, 206)",
  200: "rgb(228, 252, 156)",
  300: "rgb(206, 246, 85)",
  400: "rgb(148, 194, 10)",
  500: "rgb(129, 170, 9)",
  600: "rgb(93, 122, 6)",
  700: "rgb(75, 99, 3)",
  800: "rgb(60, 80, 2)",
  900: "rgb(45, 59, 2)"
};

export const red = {
  50: "rgb(240, 255, 240)",
  100: "rgb(206, 253, 206)",
  200: "rgb(156, 252, 156)",
  300: "rgb(85, 246, 85)",
  400: "rgb(10, 194, 10)",
  500: "rgb(8, 145, 8)",
  600: "rgb(6, 122, 6)",
  700: "rgb(3, 89, 3)",
  800: "rgb(2, 60, 2)",
  900: "rgb(1, 30, 1)"
};

export const getDesignTokens = (mode: PaletteMode) => {
  customShadows[1] =
    'rgba(10, 13, 31, 0.7) 0px 4px 16px 0px, rgba(18, 21, 43, 0.8) 0px 8px 16px -5px'


  return {
    palette: {
      mode,
      primary: {

        contrastText: brand[50],
        light: brand[300],
        main: brand[400],
        dark: brand[700],

      },
      info: {

        contrastText: brand[300],
        light: brand[500],
        main: brand[700],
        dark: brand[900],
      },
      warning: {

        light: orange[400],
        main: orange[500],
        dark: orange[700],
      },
      error: {

        light: red[400],
        main: red[500],
        dark: red[700],

      },
      success: {

        light: green[400],
        main: green[500],
        dark: green[700],
      },
      grey: {
        ...gray,
      },
      divider: alpha(gray[700], 0.6) ,
      background: {
        default: gray[900], paper: 'rgb(10, 13, 31)'
      },
      text: {
        primary: 'rgb(255, 255, 255)', secondary: gray[400]
      },
      action: {

        hover: alpha(gray[600], 0.2),
        selected: alpha(gray[600], 0.3),

      },
    },
    typography: {
      fontFamily: ['"Inter", "sans-serif"'].join(','),
      h1: {
        fontSize: defaultTheme.typography.pxToRem(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5,
      },
      h2: {
        fontSize: defaultTheme.typography.pxToRem(36),
        fontWeight: 600,
        lineHeight: 1.2,
      },
      h3: {
        fontSize: defaultTheme.typography.pxToRem(30),
        lineHeight: 1.2,
      },
      h4: {
        fontSize: defaultTheme.typography.pxToRem(24),
        fontWeight: 600,
        lineHeight: 1.5,
      },
      h5: {
        fontSize: defaultTheme.typography.pxToRem(20),
        fontWeight: 600,
      },
      h6: {
        fontSize: defaultTheme.typography.pxToRem(18),
        fontWeight: 600,
      },
      subtitle1: {
        fontSize: defaultTheme.typography.pxToRem(18),
      },
      subtitle2: {
        fontSize: defaultTheme.typography.pxToRem(14),
        fontWeight: 500,
      },
      body1: {
        fontSize: defaultTheme.typography.pxToRem(14),
      },
      body2: {
        fontSize: defaultTheme.typography.pxToRem(14),
        fontWeight: 400,
      },
      caption: {
        fontSize: defaultTheme.typography.pxToRem(12),
        fontWeight: 400,
      },
    },
    shape: {
      borderRadius: 8,
    },
    shadows: customShadows,
  };
};

export const colorSchemes = {
  light: {
    palette: {
      primary: {
        light: brand[200],
        main: brand[400],
        dark: brand[700],
        contrastText: brand[50],
      },
      info: {
        light: brand[100],
        main: brand[300],
        dark: brand[600],
        contrastText: gray[50],
      },
      warning: {
        light: orange[300],
        main: orange[400],
        dark: orange[800],
      },
      error: {
        light: red[300],
        main: red[400],
        dark: red[800],
      },
      success: {
        light: green[300],
        main: green[400],
        dark: green[800],
      },
      grey: {
        ...gray,
      },
      divider: alpha(gray[300], 0.4),
      background: {
        default: 'rgb(252, 252, 252)',
        paper: 'rgb(239, 243, 250)',
      },

      text: {
        primary: gray[800],
        secondary: gray[600],
        warning: orange[400],
      },
      action: {
        hover: alpha(gray[200], 0.2),
        selected: `${alpha(gray[200], 0.3)}`,
      },
      baseShadow:
        'rgba(10, 13, 31, 0.07) 0px 4px 16px 0px, rgba(18, 21, 43, 0.07) 0px 8px 16px -5px'
    }
    ,
  },
  dark: {
    palette: {
      primary: {
        contrastText: brand[50],
        light: brand[300],
        main: brand[400],
        dark: brand[700],
      },
      info: {
        contrastText: brand[300],
        light: brand[500],
        main: brand[700],
        dark: brand[900],
      },
      warning: {
        light: orange[400],
        main: orange[500],
        dark: orange[700],
      },
      error: {
        light: red[400],
        main: red[500],
        dark: red[700],
      },
      success: {
        light: green[400],
        main: green[500],
        dark: green[700],
      },
      grey: {
        ...gray,
      },
      divider: alpha(gray[700], 0.6),
      background: {
        default: gray[900],
        paper: 'rgb(10, 13, 31)',
      },

      text: {
        primary: 'rgb(255, 255, 255)',
        secondary: gray[400],
      },
      action: {
        hover: alpha(gray[600], 0.2),
        selected: alpha(gray[600], 0.3),
      },
      baseShadow:
        'rgba(10, 13, 31, 0.7) 0px 4px 16px 0px, rgba(18, 21, 43, 0.8) 0px 8px 16px -5px',
    }
  },
};

export const typography = {
  fontFamily: ['"Inter", "sans-serif"'].join(','),
  h1: {
    fontSize: defaultTheme.typography.pxToRem(48),
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: -0.5,
  },
  h2: {
    fontSize: defaultTheme.typography.pxToRem(36),
    fontWeight: 600,
    lineHeight: 1.2,
  },
  h3: {
    fontSize: defaultTheme.typography.pxToRem(30),
    lineHeight: 1.2,
  },
  h4: {
    fontSize: defaultTheme.typography.pxToRem(24),
    fontWeight: 600,
    lineHeight: 1.5,
  },
  h5: {
    fontSize: defaultTheme.typography.pxToRem(20),
    fontWeight: 600,
  },
  h6: {
    fontSize: defaultTheme.typography.pxToRem(18),
    fontWeight: 600,
  },
  subtitle1: {
    fontSize: defaultTheme.typography.pxToRem(18),
  },
  subtitle2: {
    fontSize: defaultTheme.typography.pxToRem(14),
    fontWeight: 500,
  },
  body1: {
    fontSize: defaultTheme.typography.pxToRem(14),
  },
  body2: {
    fontSize: defaultTheme.typography.pxToRem(14),
    fontWeight: 400,
  },
  caption: {
    fontSize: defaultTheme.typography.pxToRem(12),
    fontWeight: 400,
  },
};

export const shape = {
  borderRadius: 8,
};

// @ts-ignore
const defaultShadows: Shadows = [
  'none',
  'var(--template-palette-baseShadow)',
  ...defaultTheme.shadows.slice(2),
];
export const shadows = defaultShadows;
