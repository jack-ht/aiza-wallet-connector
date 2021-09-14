"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUPPORTED_WALLETS = void 0;
exports.SUPPORTED_WALLETS = {
    INJECTED: {
        connectorKey: "injectedConnector",
        name: "Injected",
        iconStyle: "injectedIcon",
        description: "Injected web3 provider.",
    },
    METAMASK: {
        connectorKey: "injectedConnector",
        name: "Meta Mask",
        iconStyle: "metamaskIcon",
        description: "Easy-to-use browser extension.",
    },
    WALLET_CONNECT: {
        connectorKey: "walletConnectConnector",
        name: "WalletConnect",
        iconStyle: "walletConnectIcon",
        description: "Connect to Trust Wallet, Rainbow Wallet and more...",
        mobile: true,
    },
};
