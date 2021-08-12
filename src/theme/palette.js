import { colors } from "@material-ui/core";

const white = "#FFFFFF";
const black = "#000000";

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: colors.indigo[900],
    main: colors.indigo[500],
    light: colors.indigo[100],
  },
  secondary: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue.A400,
    light: colors.blue.A400,
  },
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
  title: {
    subtitleColor: "#444444",
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
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
    default: "#F4F6F8",
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
  charts: {
    line: "linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))",
    radarStroke: "#bdbdbd",
  },
  border: {
    simple: "2px solid #eee",
    strong: "1px solid #c9c9c9",
    sidebar: ".3rem solid #2930FF",
    divider: "1px solid #CACBFF",
    light: "1px solid #DDDDDD",
    radio: "1px solid #E0DFDF",
    radioSelected: "1px solid #2930FF",
    simpleLight: "2px solid #E5E5E5",
  },
  boxShadow: {
    default: "0 0 black",
    strong: "1px 2px 5px 0px rgba(0,0,0,0.75)",
    error: "0 0 0 rgb(255,18,8)",
  },
  iconRating: {
    default: "#2930FF",
    empty: "rgba(41, 48, 255, 0.4)",
    mediumGrey: "rgba(0,0,0,0.6)",
  },
  scroll: {
    thumbActive: "#9a9a9a",
    thumbHover: "#4c4c4c",
    boxShadow: "0 0 2px 1px rgba(0, 0, 0, 0.2)",
    firefoxColor: "#707070 #fff",
    light: "#75768F",
  },
  btnIcon: {
    color: "#19E2D6",
    backgroundLight: "rgba(41, 48, 255, 0.15)",
    backgroundDisabled: "rgba(41, 48, 255, 0.05)",
    light: "#C4C4C4",
  },
  borderTab: "1px solid #C4C4C4",
  backgroundTab: "rgba(41, 48, 255, 0.15)",
  linearProgress: {
    complete: "#19E2D6",
    incomplete: "#ECECEC",
    text: "rgba(0, 0, 0, 0.56)",
    completeLight: "rgba(25, 226, 214, 0.34)",
  },
  input: {
    focused: "#3F51B5",
    disabled: "#bdbdbd",
    borderControl: "#263238",
    options: "#f4f4f4",
  },
  tooltip: {
    border: "#e0e0e0",
  },
};

export const bgColor = {
  infoHexa: "#CCEBFF",
  successHexa: "#A7FFD9",
  warningHexa: "#FFFFCA",
  errorHexa: "#FFC7C1",
  noDataHexa: "#19E2D6",
};
export const iconColor = {
  infoHexa: "#1F24BF",
  successHexa: "#00711E",
  warningHexa: "#8A6500",
  errorHexa: "#850013",
};

export const HEAT_MAP_COLORS_RANGE = {
  critic: "#AE0000",
  low: "#E64A38",
  medium: "#FF7D49",
  normal: "#EFD756",
  excellent: "#2E9B68",
  great: "#66D19F",
};

export const CRITIC_COLORS_RANGE = {
  CRITIC: "#AE0000",
  LOW: "#E64A38",
  MEDIUM: "#FF7D49",
  NORMAL: "#EFD756",
  EXCELENT: "#43B982",
};

export const LINEAL_GRAPHICS = {
  LINE_COLOR: "#8D29FF",
  BG_COLOR: "#DAB9FE",
  DOT_COLOR: "#8D29FF",
  SELECTED_DOT_COLOR: "#8D29FF",
};

export const TABLE = {
  BG_THEAD: "#F5F6FA",
  TEXT_THEAD: "#050620",
  TCELL_BORDER: "#E5E5E5",
  ODD: "#EDF0F5",
  DIVIDER: "#C4C4C4",
};

export const BODY = {
  BG_MAIN: "#F0F0F7",
};

export const STATE_COLORS = {
  SUCCESS: "#219653",
  INFO: "#2F80ED",
  GREY: "#828282",
  ERROR: "#EB5757",
};

export const NINEBOX_COLORS = {
  lightBlue: "#2D9CDB",
  orange: "#F2994A",
  lightGreen: "#27AE60",
  lighterBlue: "#56CCF2",
  lightRed: "#F27777",
  lighterGreen: "#6FCF97",
};

export const SIGN_IN_COLORS = {
  titles: white,
  blue: "#2930FF",
  grayBackground: "#E5E5E5",
  divider: "#C4C4C4",
};

export const RECOMMENDATIONS_SECTION = {
  accordionBackground: "rgba(41,48,255,0.15)",
};

export const ENGAGEMENT = {
  DEFAULT: "#8D29FF",
  UNSATISFIED: "#E64A38",
  NEUTRAL: "#EFD756",
  SATISFIED: "#43B982",
  SATISFIED_LIGHT: "#68D4A2",
  NEUTRAL_LIGHT: "#FBEA8E",
  UNSATISFIED_LIGHT: "#FA7E6F",
  BLUE: "#1F24BF",
  neutral_purple: "#B881F6",
  unsatisfied_purple: "#DBC2F9",
};

export const PIE_GRAPHICS_COLOR = {
  GREEN: "#27AE60",
  RED: "#EB5757",
  BLUE: "#2F80ED",
  ORANGE: "#F2994A",
};

export const TOP_BAR = {
  lightBlue: "#CACBFF",
  background: "#2930FF",
};

export const TABLE_TOOLBAR = {
  background: "#FCC2C4",
};

export const CARD_RESULT = {
  purple: "rgba(141, 41, 255, 0.15)",
  blue: "rgba(41, 48, 255, 0.15)",
  green: "rgba(25, 226, 214, 0.15)",
  purpleCard: "#8D29FF",
  blueCard: "#2930FF",
  greenCard: "#19E2D6",
  default: "rgba(255, 255, 255, 0.45)",
  colorResult: "#151522",
};