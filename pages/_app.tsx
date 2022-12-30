import "@fontsource/poppins";
import "@rainbow-me/rainbowkit/styles.css";

import type { AppProps } from "next/app";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";

import theme from "../themes/lightTheme";
import createEmotionCache from "../cache/createEmotionCache";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { wagmiTheme } from "../themes/wagmiTheme";
import { chains, wagmiClient } from "../wagmi/gettingStart";
const clientSideCache = createEmotionCache();

function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider theme={wagmiTheme} chains={chains}>
        <CacheProvider value={clientSideCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
