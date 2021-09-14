import { Theme } from "../constants";
import { Web3ConfigurationContextType } from "../types";
declare type ConnectorsType = NonNullable<Web3ConfigurationContextType["connectors"]>;
export interface WalletInfo {
    connectorKey: keyof ConnectorsType;
    name: string;
    iconStyle: keyof typeof Theme;
    description: string;
    mobile?: true;
    mobileOnly?: true;
}
export declare const SUPPORTED_WALLETS: {
    [key: string]: WalletInfo;
};
export {};
