"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWeb3Wallet = void 0;
const core_1 = require("@web3-react/core");
const useWeb3Wallet = () => {
    return (0, core_1.useWeb3React)();
};
exports.useWeb3Wallet = useWeb3Wallet;
