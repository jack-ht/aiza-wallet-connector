"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletOptions = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const wallets_1 = require("../utils/wallets");
const core_1 = require("@web3-react/core");
const constants_1 = require("../constants");
const react_device_detect_1 = require("react-device-detect");
const walletconnect_connector_1 = require("@web3-react/walletconnect-connector");
const WalletOption_1 = require("./WalletOption");
const injected_connector_1 = require("@web3-react/injected-connector");
const config_1 = require("../config");
const useThemeConfig_1 = require("../hooks/useThemeConfig");
const useWalletModalState_1 = require("../hooks/useWalletModalState");
const WalletOptions = () => {
    var _a;
    const { deactivate, error, active, activate } = (0, core_1.useWeb3React)();
    const { getStyles } = (0, useThemeConfig_1.useThemeConfig)();
    const { closeModal, modalWalletOpen } = (0, useWalletModalState_1.useWalletModalState)();
    const { connectors, networkId } = (0, react_1.useContext)(config_1.Web3ConfigurationContext);
    (0, react_1.useEffect)(() => {
        if (active && modalWalletOpen) {
            closeModal();
        }
    }, [active, modalWalletOpen, closeModal]);
    // @ts-ignore
    const hasWeb3 = constants_1.isClientSide && !!(window === null || window === void 0 ? void 0 : window.web3);
    // @ts-ignore
    const hasInjected = constants_1.isClientSide && !!(window === null || window === void 0 ? void 0 : window.ethereum);
    // @ts-ignore
    const isMetaMask = constants_1.isClientSide && !!((_a = window === null || window === void 0 ? void 0 : window.ethereum) === null || _a === void 0 ? void 0 : _a.isMetaMask);
    const handleActivate = (0, react_1.useCallback)(async (connector, onError, throwErrors) => {
        var _a, _b;
        if (connector instanceof walletconnect_connector_1.WalletConnectConnector &&
            ((_b = (_a = connector.walletConnectProvider) === null || _a === void 0 ? void 0 : _a.wc) === null || _b === void 0 ? void 0 : _b.uri)) {
            connector.walletConnectProvider = undefined;
        }
        await activate(connector, onError, throwErrors);
        return Promise.resolve();
    }, [activate]);
    const walletOptions = (0, react_1.useMemo)(() => {
        const options = Object.values(wallets_1.SUPPORTED_WALLETS);
        if (react_device_detect_1.isMobile) {
            return !hasWeb3 && !hasInjected ? options.filter((o) => o.mobile) : [];
        }
        if (!hasInjected) {
            return options.filter((o) => !o.mobileOnly && o.connectorKey !== "injectedConnector");
        }
        if (isMetaMask) {
            return options.filter((o) => o.name !== "Injected" && !o.mobileOnly);
        }
        return options.filter((o) => !o.mobileOnly);
    }, [hasInjected, hasWeb3, isMetaMask]);
    const renderWalletOptions = (0, react_1.useMemo)(() => walletOptions.map((option, idx) => {
        const { name, connectorKey, iconStyle } = option;
        if (!connectorKey ||
            !connectors ||
            connectors[connectorKey] === undefined) {
            return null;
        }
        return ((0, jsx_runtime_1.jsx)(WalletOption_1.WalletOption, Object.assign({ iconStylesKey: iconStyle, onClick: () => 
            // null check not working to fix type above, manually do it here
            handleActivate(connectors[connectorKey]) }, { children: name }), idx));
    }), [handleActivate, walletOptions]);
    (0, react_1.useEffect)(() => {
        if (error && !active) {
            deactivate();
        }
        // reset modal state on next mount vs. preserve bad state
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({}, getStyles("walletOptionsList"), { children: [renderWalletOptions, error && ((0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("walletError"), { children: error instanceof core_1.UnsupportedChainIdError
                    ? `Your wallet is connected to the wrong network, please connect it to ${networkId === 1 ? "mainnet" : "the rinkeby testnet"}`
                    : error instanceof injected_connector_1.UserRejectedRequestError ||
                        error instanceof walletconnect_connector_1.UserRejectedRequestError
                        ? "Looks like you didn't approve your wallet, if this was an accident please try again."
                        : (error === null || error === void 0 ? void 0 : error.message) || "There was an error connecting to your wallet" }), void 0))] }), void 0));
};
exports.WalletOptions = WalletOptions;
