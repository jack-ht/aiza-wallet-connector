"use strict";
/*
 * Thanks Uniswap ❤️🦄
 * https://github.com/Uniswap/uniswap-interface/blob/main/src/hooks/web3.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInactiveListener = void 0;
const react_1 = require("react");
const core_1 = require("@web3-react/core");
const config_1 = require("../config");
function useInactiveListener(suppress = false) {
    const { active, error, activate } = (0, core_1.useWeb3React)();
    const { connectors } = (0, react_1.useContext)(config_1.Web3ConfigurationContext);
    (0, react_1.useEffect)(() => {
        if (!connectors || !("ethereum" in window)) {
            return;
        }
        // @ts-ignore
        const ethereum = window.ethereum;
        if (ethereum && ethereum.on && !active && !error && !suppress) {
            const handleChainChanged = () => {
                activate(connectors.injectedConnector, undefined, true).catch((error) => {
                    console.error("Failed to activate after chain changed", error);
                });
            };
            const handleAccountsChanged = (accounts) => {
                if (accounts.length > 0) {
                    activate(connectors.injectedConnector, undefined, true).catch((error) => {
                        console.error("Failed to activate after accounts changed", error);
                    });
                }
            };
            ethereum.on("chainChanged", handleChainChanged);
            ethereum.on("accountsChanged", handleAccountsChanged);
            return () => {
                if (ethereum.removeListener) {
                    ethereum.removeListener("chainChanged", handleChainChanged);
                    ethereum.removeListener("accountsChanged", handleAccountsChanged);
                }
            };
        }
        else {
            return undefined;
        }
    }, [active, error, suppress, activate, connectors]);
}
exports.useInactiveListener = useInactiveListener;
