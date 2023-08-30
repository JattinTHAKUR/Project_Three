import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    dark: {
        50: '#f7fafc',
        100: '#edf2f7',
        200: '#e2e8f0',
        300: '#cbd5e0',
        400: '#a0aec0',
        500: '#718096',
        600: '#4a5568',
        700: '#2d3748',
        800: '#1a202c', // Dark grey color
        900: '#171923',
    },
  },
});

export default customTheme;
