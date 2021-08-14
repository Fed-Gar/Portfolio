import { colors } from "@material-ui/core";

const white = "#FFFFFF";
const black = "#000000";

export default {
  black,
  white,
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400],
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400],
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400],
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    primary: 'rgb(219, 230, 253)',
    secondary: 'rgb(255, 211, 105)',
    link: "#2930FF",
    linkHover: "#4a50f1",
    subtitle: "#050620",
    darkPurple: "#170130",
    disabled: "#ccc",
    iconDisabled: "#A3A3A3",
    darkBlue: "#021947",
    secondaryTitle: "#333333",
    secondaryParagraph: "#75768F",
    results: "#44546A",
    transparent: "transparent",
    theadSubtitleText: "#828282",
  },
  background: {
    default: "rgb(34, 40, 49)",
    paper: white,
    lightGrey: "#EEE",
    lightPurple: "rgba(141, 41, 255, 0.25)",
    darkGrey: "#707070",
    lightBlack: "rgba(0, 0, 0, 0.87)",
    purple: "#8D29FF",
    light: "#F0F0F7",
    grey: colors.grey[50],
    head: "#FAFAFA",
    inputTags: "#AFB1FF",
    iconTags: "#4a4ed0",
    filterButton: "#E1E2FF",
    empty: "#9C9C9C",
    mediumGrey: "#C4C4C4",
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200],
};