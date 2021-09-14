"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEagerConnect = void 0;
const react_1 = require("react");
const core_1 = require("@web3-react/core");
const injected_connector_1 = require("@web3-react/injected-connector");
const react_device_detect_1 = require("react-device-detect");
const config_1 = require("../config");
const constants_1 = require("../constants");
const connectors_1 = require("../connectors");
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
function useEagerConnect() {
    const { activate, active } = (0, core_1.useWeb3React)();
    const { connectors } = (0, react_1.useContext)(config_1.Web3ConfigurationContext);
    const [tried, setTried] = (0, react_1.useState)(false);
    const attemptEagerInjected = (0, react_1.useCallback)(async () => {
        if (!connectors) {
            return;
        }
        const isAuthorized = await connectors.injectedConnector.isAuthorized();
        if (isAuthorized) {
            activate(connectors.injectedConnector, undefined, true).catch(() => {
                setTried(true);
            });
        }
        else {
            // @ts-ignore
            if (react_device_detect_1.isMobile && window.ethereum) {
                activate(connectors.injectedConnector, undefined, true).catch(() => {
                    setTried(true);
                });
            }
            else {
                setTried(true);
            }
        }
    }, [activate]);
    const attemptEagerDefault = (0, react_1.useCallback)((connector) => {
        return activate(connector, undefined, true).catch(() => {
            setTried(true);
        });
    }, [activate]);
    const attemptEager = (0, react_1.useCallback)((connector) => {
        if (connector instanceof injected_connector_1.InjectedConnector) {
            return attemptEagerInjected();
        }
        return attemptEagerDefault(connector);
    }, [attemptEagerDefault, attemptEagerInjected]);
    (0, react_1.useEffect)(() => {
        if (!constants_1.isClientSide || tried || !connectors) {
            return;
        }
        delay(500).then(() => {
            const connector = (0, connectors_1.fetchLastConnectorType)(connectors);
            if (connector) {
                attemptEager(connector).catch(() => setTried(true));
            }
        });
        setTried(true);
    }, [activate, attemptEager, tried]);
    (0, react_1.useEffect)(() => {
        if (!tried && active) {
            setTried(true);
        }
    }, [tried, active]);
    return tried;
}
exports.useEagerConnect = useEagerConnect;
