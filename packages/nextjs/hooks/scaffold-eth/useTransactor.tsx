import { usePublicClient, useWalletClient } from "wagmi";
import { getPublicClient, getWalletClient } from "@wagmi/core";
import { notification } from "~~/utils/scaffold-eth";

export const useTransactor = () => {
  const publicClient = usePublicClient() as any;
  const { data: walletClient } = useWalletClient();

  const transactor = async (tx: any) => {
    try {
      if (!walletClient) {
        notification.error("Wallet not connected");
        return;
      }
      const hash = await walletClient.sendTransaction(tx);
      return hash;
    } catch (error) {
      console.error(error);
    }
  };

  return transactor;
};
