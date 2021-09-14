"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWalletButton = void 0;
const core_1 = require("@web3-react/core");
const useThemeConfig_1 = require("./useThemeConfig");
const address_1 = require("../utils/address");
const useWalletModalState_1 = require("./useWalletModalState");
const useWalletButton = () => {
    const { active, account, deactivate } = (0, core_1.useWeb3React)();
    const { getString } = (0, useThemeConfig_1.useThemeConfig)();
    const { openWallet } = (0, useWalletModalState_1.useWalletModalState)();
    const addressShortened = account ? (0, address_1.shortenAddress)(account) : undefined;
    const actionText = !account
        ? getString("CONNECT_WALLET_BUTTON_TEXT")
        : getString("DISCONNECT_WALLET_BUTTON_TEXT");
    return {
        active,
        openModal: () => openWallet(),
        buttonAction: () => {
            active ? deactivate() : openWallet();
        },
        connectedInfo: active
            ? `${getString("CONNECTED_BUTTON_TEXT")} ${addressShortened}`
            : undefined,
        account: account
            ? {
                address: account,
                addressShortened,
            }
            : undefined,
        actionText,
    };
};
exports.useWalletButton = useWalletButton;
