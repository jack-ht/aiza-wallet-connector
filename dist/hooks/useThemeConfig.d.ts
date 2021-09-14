import { Theme, Strings } from "../constants";
declare type ThemeType = typeof Theme;
export declare function useThemeConfig(): {
    getString: (stringName: keyof typeof Strings) => string;
    getStyles: (themeKey: keyof ThemeType) => any;
};
export {};
