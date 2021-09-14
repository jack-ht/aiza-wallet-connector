import { ReactNode } from "react";
import { Theme, Strings } from "../constants";
export declare const Web3ConfigProvider: ({ rpcUrl, networkId, children, theme, strings, }: {
    theme?: Partial<{
        modalWrapper: string;
        dialogOverlay: string;
        modalText: string;
        modalContent: string;
        walletOptionsWrapper: string;
        walletOption: string;
        walletOptionsList: string;
        walletError: string;
        injectedIcon: string;
        metamaskIcon: string;
        walletConnectIcon: string;
        modalConnectWalletButtonStyle: string;
    }> | undefined;
    strings?: Partial<{
        CONNECT_WALLET: string;
        CONNECT_WALLET_ARIA_LABEL: string;
        CONNECT_WALLET_BUTTON_TEXT: string;
        CONNECTED_BUTTON_TEXT: string;
        DISCONNECT_WALLET_BUTTON_TEXT: string;
    }> | undefined;
    rpcUrl?: string | undefined;
    networkId: number;
    children: ReactNode;
}) => JSX.Element;
