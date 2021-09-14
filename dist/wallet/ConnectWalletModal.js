"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectWalletModal = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useThemeConfig_1 = require("../hooks/useThemeConfig");
const WalletOptions_1 = require("./WalletOptions");
const ModalActionLayout_1 = require("../modal/ModalActionLayout");
const WalletModalOpenContext_1 = require("../context/WalletModalOpenContext");
const ConnectWalletModal = () => {
    const { getString, getStyles } = (0, useThemeConfig_1.useThemeConfig)();
    return ((0, jsx_runtime_1.jsx)(ModalActionLayout_1.ModalActionLayout, Object.assign({ modalName: WalletModalOpenContext_1.WALLET_MODAL_NAME, modalTitle: getString("CONNECT_WALLET"), modalDescription: getString("CONNECT_WALLET_ARIA_LABEL") }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("walletOptionsWrapper"), { children: (0, jsx_runtime_1.jsx)(WalletOptions_1.WalletOptions, {}, void 0) }), void 0) }), void 0));
};
exports.ConnectWalletModal = ConnectWalletModal;
