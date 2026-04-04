import { chains } from "@@/utils/scaffold-eth";

export type ScaffoldConfig = {
  targetNetworks: readonly chains.Chain[];
  pollingInterval: number;
  alchemyApiKey: string;
  walletConnectProjectId: string;
  onlyLocalBurnerWallet: boolean;
};

const scaffoldConfig = {
  targetNetworks: [chains.arbitrum],

  pollingInterval: 30000,

  alchemyApiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || "oKsh3787S7u_6uX7AofXf77K_Sjw7mXf",
  walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "3a8170812b53d739d9f453005a610537",

  onlyLocalBurnerWallet: false,
} as const satisfies ScaffoldConfig;

export default scaffoldConfig;
