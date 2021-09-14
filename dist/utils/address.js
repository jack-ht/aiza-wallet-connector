"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortenAddress = void 0;
const address_1 = require("@ethersproject/address");
function shortenAddress(address, chars = 4) {
    const isValid = (0, address_1.isAddress)(address);
    if (!isValid) {
        console.error(`Invalid 'address' parameter '${address}'.`);
        return "";
    }
    const parsed = (0, address_1.getAddress)(address);
    return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`;
}
exports.shortenAddress = shortenAddress;
