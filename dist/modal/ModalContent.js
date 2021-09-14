"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalContent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const dialog_1 = require("@reach/dialog");
const useThemeConfig_1 = require("../hooks/useThemeConfig");
const ModalContent = ({ title, ariaLabel, children, }) => {
    const { getStyles } = (0, useThemeConfig_1.useThemeConfig)();
    return ((0, jsx_runtime_1.jsx)(dialog_1.DialogContent, Object.assign({ "aria-label": ariaLabel, title: title }, getStyles("modalContent"), { children: children }), void 0));
};
exports.ModalContent = ModalContent;
