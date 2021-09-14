import React from "react";
import { Theme } from "../constants";
interface WalletOptionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    as?: React.ElementType;
    onClick?: () => void;
    href?: string;
    target?: string;
    rel?: string;
    iconStylesKey: keyof typeof Theme;
}
export declare const WalletOption: React.FC<WalletOptionProps>;
export {};
