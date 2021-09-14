export declare const useWalletModalState: () => {
    openWallet: () => void;
    openModalByName: (name: string) => void;
    closeModal: () => void;
    openModalName: string | null;
    modalWalletOpen: boolean;
};
