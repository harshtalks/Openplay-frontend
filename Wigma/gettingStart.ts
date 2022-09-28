import { getDefaultWallets } from "@rainbow-me/rainbowkit";

import { chain, configureChains, createClient } from "wagmi";

import { alchemyProvider } from "wagmi/providers/alchemy";

import { publicProvider } from "wagmi/providers/public";

export const { chains, provider } = configureChains(
  [chain.goerli],
  [alchemyProvider({ apiKey: process.env.GOERLI_RPC_URL }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Openplay: Transparent Raffle System",
  chains,
});

export const wagmiClient = createClient({
  connectors,
  provider,
});
