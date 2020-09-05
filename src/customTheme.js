import { theme } from "@chakra-ui/core";

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    black: "#000000",
    primary: {
      50: "#F7F7F7",
      100: "#DBDBDB",
      200: "#BFBFBF",
      300: "#A4A4A4",
      400: "#898989",
      500: "#707070",
      600: "#585858",
      700: "#404040",
      800: "#2A2A2A",
      900: "#161616",
    },
  },
};

export default customTheme;
