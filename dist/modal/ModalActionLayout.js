"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalActionLayout = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useThemeConfig_1 = require("../hooks/useThemeConfig");
const ModalOverlay_1 = require("./ModalOverlay");
const ModalContent_1 = require("./ModalContent");
const core_1 = require("@web3-react/core");
const react_1 = require("react");
const useWalletModalState_1 = require("../hooks/useWalletModalState");
const ModalActionLayout = ({ children, error, modalTitle, modalName, modalDescription, }) => {
    const { getString, getStyles } = (0, useThemeConfig_1.useThemeConfig)();
    const { openWallet, modalWalletOpen } = (0, useWalletModalState_1.useWalletModalState)();
    const { account } = (0, core_1.useWeb3React)();
    const openConnectWallet = (0, react_1.useCallback)((evt) => {
        evt.preventDefault();
        openWallet();
    }, []);
    return ((0, jsx_runtime_1.jsx)(ModalOverlay_1.ModalOverlay, Object.assign({ modalName: modalName, canClose: true }, { children: account || modalWalletOpen ? ((0, jsx_runtime_1.jsx)(ModalContent_1.ModalContent, Object.assign({ title: modalTitle, ariaLabel: modalDescription }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({}, getStyles("modalText"), { children: [children, error && ((0, jsx_runtime_1.jsxs)("p", Object.assign({ className: "error" }, { children: [(0, jsx_runtime_1.jsx)("br", {}, void 0), error] }), void 0))] }), void 0) }), void 0)) : ((0, jsx_runtime_1.jsx)(ModalContent_1.ModalContent, Object.assign({ title: getString("CONNECT_WALLET"), ariaLabel: getString("CONNECT_WALLET") }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({}, getStyles("modalText"), { children: ["Please", (0, jsx_runtime_1.jsx)("a", Object.assign({ href: "#", onClick: openConnectWallet }, { children: "connect your wallet" }), void 0), "to cotinue"] }), void 0) }), void 0)) }), void 0));
};
exports.ModalActionLayout = ModalActionLayout;
