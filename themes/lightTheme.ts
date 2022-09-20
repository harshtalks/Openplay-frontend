import { createTheme } from "@mui/material/styles";
import shadows, { Shadows } from "@mui/material/styles/shadows";

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f8f9fa",
      paper: "#dee2e6",
    },
    text: {
      primary: "#000",
      secondary: "#818890",
    },
    primary: {
      main: "#5BB5A2",
    },
    secondary: {
      main: "#485563",
    },
  },
  typography: {
    fontFamily: [
      "Poppins",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    button: {
      textTransform: "none",
      fontWeight: "700",
    },
  },
  shadows: shadows.map(() => "None") as Shadows,
});

export default theme;
