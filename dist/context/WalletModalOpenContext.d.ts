/// <reference types="react" />
export declare const WALLET_MODAL_NAME = "WALLET";
declare type ModalNameType = string | null;
export declare const WalletModalOpenContext: import("react").Context<{
    openModalName: ModalNameType;
    setOpenModalName: (modalName: ModalNameType) => void;
}>;
export {};
