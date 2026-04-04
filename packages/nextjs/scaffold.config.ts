import * as chains from "viem/chains";
export const scaffoldConfig = {
  targetNetworks: [chains.arbitrum],
  pollingInterval: 30000,
  alchemyApiKey: "oKsh3787S7u_6uX7AofXf77K_Sjw7mXf",
  walletConnectProjectId: "3a8170812b53d739d9f453005a610537",
  onlyLocalBurnerWallet: false,
};
export default scaffoldConfig;
