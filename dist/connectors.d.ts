import { AbstractConnector } from "@web3-react/abstract-connector";
import { ConnectorType, Web3ConfigurationContextType } from "./types";
export declare function getConnectorType(connector: AbstractConnector): ConnectorType;
export declare function fetchLastConnectorType(connectors: NonNullable<Web3ConfigurationContextType["connectors"]>): AbstractConnector | undefined;
export declare function setLastConnectorType(connector?: AbstractConnector): void;
