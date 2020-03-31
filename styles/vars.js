export const colors = {
    accent: '#ff5252',
    background: '#0a6159',
    border: '#dcdcdc',
    grey: {
        100: '#F5F7FA',
        200: '#E4E7EB',
        300: '#CBD2D9',
        400: '#9AA5B1',
        500: '#7B8794',
        600: '#616E7C',
        700: '#52606D',
        800: '#3E4C59',
        900: '#323F4B',
        1000: '#1F2933'
    },
    light: '#606060',
    text: '#101010'
};

export const spacing = {
    extralarge: '2.5em',
    extrasmall: '0.5em',
    xxs: '0.25em',
    large: '2em',
    normal: '1.5em',
    small: '1em'
};

export const breakpoints = {
    xl: '1200px',
    l: '992px',
    m: '768px',
    s: '600px'
};

export const mediaQuery = {
    xl: `@media (min-width: ${breakpoints.xl})`,
    l: `@media (min-width: ${breakpoints.l})`,
    m: `@media (min-width: ${breakpoints.m})`,
    s: `@media (min-width: ${breakpoints.s})`
};
