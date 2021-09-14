"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Web3ConfigurationContext = void 0;
const react_1 = require("react");
const constants_1 = require("./constants");
exports.Web3ConfigurationContext = (0, react_1.createContext)({
    networkId: undefined,
    rpcUrl: undefined,
    connectors: undefined,
    theme: constants_1.Theme,
    strings: constants_1.Strings,
});
