import { getDefaultWallets } from "@rainbow-me/rainbowkit";

import { chain, configureChains, createClient } from "wagmi";

import { alchemyProvider } from "wagmi/providers/alchemy";

import { publicProvider } from "wagmi/providers/public";

export const { chains, provider } = configureChains(
  [chain.goerli],
  [
    publicProvider(),
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_GOERLI_RPC_LINK }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Openplay: Transparent Raffle System",
  chains,
});

export const wagmiClient = createClient({
  connectors,
  provider,
});
