"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalOverlay = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const dialog_1 = require("@reach/dialog");
const WalletModalOpenContext_1 = require("../context/WalletModalOpenContext");
const useThemeConfig_1 = require("../hooks/useThemeConfig");
const constants_1 = require("../constants");
const ModalOverlay = ({ children, canClose, modalName, }) => {
    const { openModalName, setOpenModalName } = (0, react_1.useContext)(WalletModalOpenContext_1.WalletModalOpenContext);
    const { getStyles } = (0, useThemeConfig_1.useThemeConfig)();
    const handleOnDismiss = (0, react_1.useCallback)(() => {
        if (canClose && setOpenModalName) {
            setOpenModalName(null);
        }
    }, [canClose, setOpenModalName]);
    const onEscape = (0, react_1.useCallback)((e) => {
        if (!canClose) {
            return;
        }
        if (e.key === "Escape") {
            return setOpenModalName(null);
        }
    }, [canClose, setOpenModalName]);
    (0, react_1.useEffect)(() => {
        if (!constants_1.isClientSide) {
            return;
        }
        window.document.addEventListener("keydown", onEscape, true);
        return () => {
            window.document.removeEventListener("keydown", onEscape, true);
        };
    });
    return openModalName === modalName ? ((0, jsx_runtime_1.jsx)(dialog_1.DialogOverlay, Object.assign({ onDismiss: handleOnDismiss }, getStyles("dialogOverlay"), { children: children }), void 0)) : ((0, jsx_runtime_1.jsx)(react_1.Fragment, {}, void 0));
};
exports.ModalOverlay = ModalOverlay;
