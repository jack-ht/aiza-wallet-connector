"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useThemeConfig = void 0;
const react_1 = require("react");
const css_1 = require("@emotion/css");
const config_1 = require("../config");
function useThemeConfig() {
    const mediaContext = (0, react_1.useContext)(config_1.Web3ConfigurationContext);
    const getStyles = (themeKey) => {
        if (!(themeKey in mediaContext.theme)) {
            throw new Error(`"${String(themeKey)}" not found in [${Object.keys(mediaContext.theme).join(", ")}]`);
        }
        const styles = mediaContext.theme[themeKey];
        return {
            className: `aiza-wallet-${themeKey} ${(0, css_1.css)(styles)}`,
        };
    };
    const getString = (stringName) => {
        return mediaContext.strings[stringName];
    };
    return { getString, getStyles };
}
exports.useThemeConfig = useThemeConfig;
