import { Theme, lightTheme } from "@rainbow-me/rainbowkit";
import merge from "lodash.merge";

export const wagmiTheme = merge(lightTheme(), {
  colors: {
    accentColor: "#5BB5A2",
    connectButtonBackground: "#5BB5A2",
    connectButtonText: "#fff",
    closeButtonBackground: "#5bb5a2",
    closeButton: "#fff",
  },
  fonts: {
    body: [
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
  },
  radii: {
    connectButton: "10px",
  },
  shadows: {
    connectButton: "0",
  },
} as Theme);
