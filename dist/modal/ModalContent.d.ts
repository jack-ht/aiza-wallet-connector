import { DialogContentProps } from "@reach/dialog";
import { ReactNode } from "react";
export interface ModalContentProps extends DialogContentProps {
    className?: string;
    title?: string;
    size?: "small" | "normal";
    ariaLabel?: string;
    canClose?: boolean;
}
export declare const ModalContent: ({ title, ariaLabel, children, }: {
    title: string;
    ariaLabel: string;
    children: ReactNode;
}) => JSX.Element;
