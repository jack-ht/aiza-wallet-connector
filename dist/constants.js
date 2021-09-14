"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Strings = exports.Theme = exports.isClientSide = exports.LAST_CONNECTOR_KEY = void 0;
const css_1 = require("@emotion/css");
exports.LAST_CONNECTOR_KEY = "LAST_CONNECTOR";
exports.isClientSide = typeof window !== "undefined";
exports.Theme = {
    modalWrapper: (0, css_1.css) ``,
    dialogOverlay: (0, css_1.css) `
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0;
    margin: 0;
    z-index: 99999999;
    overflow: auto;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    text-align: center;
  `,
    modalText: (0, css_1.css) `
    pointer-events: auto;
    padding: 20px;
  `,
    modalContent: (0, css_1.css) `
    pointer-events: none;
    display: flex;
    flex: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.05), 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 0;
    overflow-x: hidden;
  `,
    walletOptionsWrapper: (0, css_1.css) ``,
    walletOption: (0, css_1.css) `
    position: relative;
    width: 100%;
    padding: 24px 48px;
    margin-bottom: 20px;
    cursor: pointer;
    &:last-child {
      margin-bottom: 0;
    }
    color: orange;
    border-radius: 4px;
    font-weight: bold;
  `,
    walletOptionsList: (0, css_1.css) `
    padding: 32px 128px;
    background: white;
    border-radius: 8px;
  `,
    walletError: (0, css_1.css) `
    color: var(--punk-pink) !important;
    width: 100%;
    text-align: center;
  `,
    injectedIcon: (0, css_1.css) ``,
    metamaskIcon: (0, css_1.css) ``,
    walletConnectIcon: (0, css_1.css) ``,
    modalConnectWalletButtonStyle: (0, css_1.css) ``,
};
exports.Strings = {
    CONNECT_WALLET: "connect wallet",
    CONNECT_WALLET_ARIA_LABEL: "connect wallet modal",
    CONNECT_WALLET_BUTTON_TEXT: "Connect Wallet",
    CONNECTED_BUTTON_TEXT: "Connected to ",
    DISCONNECT_WALLET_BUTTON_TEXT: "Disconnect Wallet",
};
