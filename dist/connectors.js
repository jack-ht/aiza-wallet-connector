"use strict";
/*
 * Thanks Uniswap ❤️🦄
 * https://github.com/Uniswap/uniswap-interface/blob/master/src/connectors/index.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.setLastConnectorType = exports.fetchLastConnectorType = exports.getConnectorType = void 0;
const walletconnect_connector_1 = require("@web3-react/walletconnect-connector");
const types_1 = require("./types");
const constants_1 = require("./constants");
function getConnectorType(connector) {
    if (connector instanceof walletconnect_connector_1.WalletConnectConnector) {
        return types_1.ConnectorType.WALLETCONNECT;
    }
    return types_1.ConnectorType.INJECTED;
}
exports.getConnectorType = getConnectorType;
function fetchLastConnectorType(connectors) {
    const last = sessionStorage.getItem(constants_1.LAST_CONNECTOR_KEY);
    if (last === types_1.ConnectorType.WALLETCONNECT) {
        return connectors.walletConnectConnector;
    }
    return connectors.injectedConnector;
}
exports.fetchLastConnectorType = fetchLastConnectorType;
function setLastConnectorType(connector) {
    const connectorType = connector ? getConnectorType(connector) : undefined;
    if (!connectorType) {
        sessionStorage.removeItem(constants_1.LAST_CONNECTOR_KEY);
        return;
    }
    return sessionStorage.setItem(constants_1.LAST_CONNECTOR_KEY, connectorType);
}
exports.setLastConnectorType = setLastConnectorType;
