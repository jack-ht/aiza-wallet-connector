export declare const useWalletButton: () => {
    active: boolean;
    openModal: () => void;
    buttonAction: () => void;
    connectedInfo: string | undefined;
    account: {
        address: string;
        addressShortened: string | undefined;
    } | undefined;
    actionText: string;
};
