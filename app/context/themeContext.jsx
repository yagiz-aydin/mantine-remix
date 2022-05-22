import { MantineProvider } from '@mantine/core';

const ThemeContext = ({ children }) => {

  // Mantine Theme => https://mantine.dev/theming/mantine-provider/#theme-object
  const themeStyle =  {
    // Defines color scheme for all components, defaults to "light"
    colorScheme: 'dark',// | 'light',
  
    // Controls focus ring styles:
    // auto – display focus ring only when user navigates with keyboard (default)
    // always – display focus ring when user navigates with keyboard and mouse
    // never – focus ring is always hidden (not recommended)
    focusRing: 'auto', //| 'always' | 'never',
  
    // Default border-radius used for most elements
    defaultRadius: 'md', // 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  
    // White and black colors, defaults to '#fff' and '#000'
    white: '#e5e5e5',
    black: '#fca311',
  
    // Object of arrays with 10 colors
    colors: ["#000","#14213d","#fca311","#e5e5e5","#fff"],
  
    // Key of theme.colors
    // primaryColor: "#14213d",
  
    // font-family and line-height used in most components
    fontFamily: 'Nanum Gothic',
    lineHeight: 1,
  
    // Timing function used for animations, defaults to 'ease'
    transitionTimingFunction: 'ease',
  
    /* Down bellow not! used on example 

    // Monospace font-family, used in Code, Kbd and Prism components
    fontFamilyMonospace: string;
  
    // Sizes for corresponding properties
    fontSizes: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>;
    radius: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>;
    spacing: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>;
  
    // Values used for box-shadow
    shadows: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', string>;
  
    // Breakpoints used in some components to add responsive styles
    breakpoints: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>;
  
    // h1-h6 styles, used in Title and TypographyStylesProvider components
    headings: {
      fontFamily: CSSProperties['fontFamily'];
      fontWeight: CSSProperties['fontWeight'];
      sizes: {
        h1: { fontSize: CSSProperties['fontSize']; lineHeight: CSSProperties['lineHeight'] };
        h2: { fontSize: CSSProperties['fontSize']; lineHeight: CSSProperties['lineHeight'] };
        h3: { fontSize: CSSProperties['fontSize']; lineHeight: CSSProperties['lineHeight'] };
        h4: { fontSize: CSSProperties['fontSize']; lineHeight: CSSProperties['lineHeight'] };
        h5: { fontSize: CSSProperties['fontSize']; lineHeight: CSSProperties['lineHeight'] };
        h6: { fontSize: CSSProperties['fontSize']; lineHeight: CSSProperties['lineHeight'] };
      };
    };
  
    // theme functions, see in theme functions guide
    fn: MantineThemeFunctions;
  
    // Left to right or right to left direction, see RTL Support guide to learn more
    dir: 'ltr' | 'rtl';
  
    // Default loader used in Loader and LoadingOverlay components
    loader: 'oval' | 'bars' | 'dots';
  
    // Default date format used in DatePicker and DateRangePicker components
    dateFormat: string;
  
    // Add your own custom properties on Mantine theme
    other: Record<string, any>;
  
    // Default dates formatting locale used in every @mantine/dates component
    datesLocale: string; */
  }
  return (
    <MantineProvider theme={themeStyle} withGlobalStyles withNormalizeCSS>
        {children}
    </MantineProvider>
  );
}

export default ThemeContext;