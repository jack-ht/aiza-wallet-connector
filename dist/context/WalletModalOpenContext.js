"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletModalOpenContext = exports.WALLET_MODAL_NAME = void 0;
const react_1 = require("react");
exports.WALLET_MODAL_NAME = "WALLET";
exports.WalletModalOpenContext = (0, react_1.createContext)({
    openModalName: null,
    setOpenModalName: (_modalName) => {
        throw new Error("Open Modal Context Not Setup");
    },
});
