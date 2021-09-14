"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLibraryByNetwork = void 0;
const providers_1 = require("@ethersproject/providers");
const getLibraryByNetwork = (networkId) => (provider) => {
    const library = new providers_1.Web3Provider(provider, networkId);
    library.pollingInterval = 15000;
    return library;
};
exports.getLibraryByNetwork = getLibraryByNetwork;
