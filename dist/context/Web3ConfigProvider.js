"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Web3ConfigProvider = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const config_1 = require("../config");
const injected_connector_1 = require("@web3-react/injected-connector");
const walletconnect_connector_1 = require("@web3-react/walletconnect-connector");
const react_1 = require("react");
const constants_1 = require("../constants");
const WalletModalOpenContext_1 = require("./WalletModalOpenContext");
const ConnectWalletModal_1 = require("../wallet/ConnectWalletModal");
const core_1 = require("@web3-react/core");
const getLibrary_1 = require("../utils/getLibrary");
const Web3ReactManager_1 = (0, tslib_1.__importDefault)(require("./Web3ReactManager"));
const Web3ConfigProvider = ({ rpcUrl, networkId, children, theme = {}, strings = {}, }) => {
    const injectedConnector = new injected_connector_1.InjectedConnector({
        supportedChainIds: [networkId],
    });
    const walletConnectConnector = rpcUrl
        ? new walletconnect_connector_1.WalletConnectConnector({
            rpc: { [networkId]: rpcUrl },
            qrcode: true,
        })
        : undefined;
    const config = {
        networkId: networkId,
        rpcUrl: rpcUrl,
        connectors: {
            injectedConnector,
            walletConnectConnector,
        },
        theme: Object.assign({}, constants_1.Theme, theme),
        strings: Object.assign({}, constants_1.Strings, strings),
    };
    const [openModalName, setOpenModalName] = (0, react_1.useState)(null);
    const getLibrary = (0, react_1.useMemo)(() => (0, getLibrary_1.getLibraryByNetwork)(networkId), [networkId]);
    return ((0, jsx_runtime_1.jsx)(WalletModalOpenContext_1.WalletModalOpenContext.Provider, Object.assign({ value: { openModalName, setOpenModalName } }, { children: (0, jsx_runtime_1.jsx)(core_1.Web3ReactProvider, Object.assign({ getLibrary: getLibrary }, { children: (0, jsx_runtime_1.jsx)(config_1.Web3ConfigurationContext.Provider, Object.assign({ value: config }, { children: (0, jsx_runtime_1.jsx)(Web3ReactManager_1.default, { children: (0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(ConnectWalletModal_1.ConnectWalletModal, {}, void 0), children] }, void 0) }, void 0) }), void 0) }), void 0) }), void 0));
};
exports.Web3ConfigProvider = Web3ConfigProvider;
