export const scaffoldConfig = {
  targetNetworks: [
    {
      id: 42161,
      name: "arbitrum",
      nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
      rpcUrls: {
        default: { http: ["https://arb1.arbitrum.io/rpc"] },
        public: { http: ["https://arb1.arbitrum.io/rpc"] },
      },
    },
  ],
  pollingInterval: 30000,
  alchemyApiKey: "oKsh3787S7u_6uX7AofXf77K_Sjw7mXf",
  walletConnectProjectId: "3a8170812b53d739d9f453005a610537",
  onlyLocalBurnerWallet: false,
};

export default scaffoldConfig;
