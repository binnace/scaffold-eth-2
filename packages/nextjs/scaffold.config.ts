export type ScaffoldConfig = {
  targetNetworks: readonly any[];
  pollingInterval: number;
  alchemyApiKey: string;
  walletConnectProjectId: string;
  onlyLocalBurnerWallet: boolean;
};

const scaffoldConfig = {
  targetNetworks: [
    {
      id: 42161,
      name: "Arbitrum One",
      network: "arbitrum",
      nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
      rpcUrls: {
        default: { http: ["https://arb1.arbitrum.io/rpc"] },
        public: { http: ["https://arb1.arbitrum.io/rpc"] },
      },
      blockExplorers: {
        default: { name: "Arbiscan", url: "https://arbiscan.io" },
      },
    }
  ],
  pollingInterval: 30000,
  alchemyApiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || "oKsh3787S7u_6uX7AofXf77K_Sjw7mXf",
  walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "3a8170812b53d739d9f453005a610537",
  onlyLocalBurnerWallet: false,
} as const satisfies ScaffoldConfig;

export default scaffoldConfig;
