import "@fontsource/poppins";

import type { AppProps } from "next/app";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";

import theme from "../themes/lightTheme";
import createEmotionCache from "../cache/createEmotionCache";
import NextNProgress from "nextjs-progressbar";

const clientSideCache = createEmotionCache();

function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <CacheProvider value={clientSideCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NextNProgress
          color="#5BB5A2"
          startPosition={0.3}
          stopDelayMs={200}
          height={5}
          showOnShallow={true}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
