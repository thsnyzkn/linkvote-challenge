import { theme } from "@chakra-ui/core";

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    black: "#000000",
    primary: "#ECECEC",
    secondary: "#F7F7F7",
  },
};

export default customTheme;
