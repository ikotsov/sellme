const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

export const baseColors = {
  primary: "#fc5c65",
  secondary: "#4ecdc4",
  black: "#000",
  white: "#fff",
  grey: {
    dark: "#0c0c0c",
    medium: "#6e6969",
    light: "#f8f4f4",
  },
  danger: "#ff5252",
  yellow: "#ffe66d",
};

export default {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
};
