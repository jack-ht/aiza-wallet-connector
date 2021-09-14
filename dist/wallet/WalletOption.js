"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletOption = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useThemeConfig_1 = require("../hooks/useThemeConfig");
const WalletOption = ({ children, iconStylesKey, as, ...props }) => {
    const { getStyles } = (0, useThemeConfig_1.useThemeConfig)();
    const Component = as || "button";
    return ((0, jsx_runtime_1.jsxs)(Component, Object.assign({}, getStyles("walletOption"), props, { children: [children, (0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles(iconStylesKey)), void 0)] }), void 0));
};
exports.WalletOption = WalletOption;
