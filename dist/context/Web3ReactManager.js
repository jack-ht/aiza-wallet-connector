"use strict";
/*
 * Thanks Uniswap ❤️🦄
 * https://github.com/Uniswap/uniswap-interface/blob/main/src/components/Web3ReactManager/index.tsx
 */
Object.defineProperty(exports, "__esModule", { value: true });
const useEagerConnect_1 = require("../hooks/useEagerConnect");
const useInactiveListener_1 = require("../hooks/useInactiveListener");
const Web3ReactManager = ({ children }) => {
    const triedEager = (0, useEagerConnect_1.useEagerConnect)();
    (0, useInactiveListener_1.useInactiveListener)(!triedEager);
    return children;
};
exports.default = Web3ReactManager;
