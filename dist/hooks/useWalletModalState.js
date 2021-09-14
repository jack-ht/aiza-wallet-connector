"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWalletModalState = void 0;
const react_1 = require("react");
const WalletModalOpenContext_1 = require("../context/WalletModalOpenContext");
const useWalletModalState = () => {
    const openContext = (0, react_1.useContext)(WalletModalOpenContext_1.WalletModalOpenContext);
    return {
        openWallet: () => {
            openContext.setOpenModalName(WalletModalOpenContext_1.WALLET_MODAL_NAME);
        },
        openModalByName: (name) => {
            openContext.setOpenModalName(name);
        },
        closeModal: () => {
            openContext.setOpenModalName(null);
        },
        openModalName: openContext.openModalName,
        modalWalletOpen: openContext.openModalName === WalletModalOpenContext_1.WALLET_MODAL_NAME,
    };
};
exports.useWalletModalState = useWalletModalState;
