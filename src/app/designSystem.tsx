import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  colors: {
    color: {
      primary: "#330693",
      secondary: "#8A53FF",
      gray: "#20292E",
      white: "#FFFFFF",
    },
  },

  font: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
    mono: "Poppins, sans-serif",
  },

  fontSizes: {
    normal: "1rem",
  },

  fontWeights: {
    small: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },

  lineHeights: {
    normal: "normal",
  },
});
