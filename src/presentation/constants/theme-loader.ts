import DefaultDark from "./themes/DefaultDark.json";
import DefaultLight from "./themes/DefaultLight.json";
import IndigoLight from "./themes/IndigoLight.json";
import MidnightDark from "./themes/MidnightDark.json";

export interface ThemeConfig {
  name: string;
  monaco: {
    base: string;
    inherit: boolean;
    rules: Array<{
      foreground?: string;
      background?: string;
      fontStyle?: string;
      token: string;
    }>;
    colors: {
      [key: string]: string;
    };
  };
  tailwind: {
    primary: string;
    background: string;
    textPrimary: string;
    textSecondary: string;
    border: string;
    borderHover: string;
    borderFocus: string;
    cardBackground: string;
    inputBackground: string;
    inputBorderDefault: string;
    inputBorderHover: string;
    inputBorderFocus: string;
    dialogBackground: string;
    dropdownBackground: string;
    dropdownItemHover: string;
    dropdownBorder: string;
    dropdownBorderHover: string;
    sidebarBackground: string;
    sidebarItemHover: string;
    sidebarItemFocus: string;
    buttonBg: string;
    buttonBgHover: string;
    buttonText: string;
    buttonBorder: string;
    buttonBorderHover: string;
    buttonSecondBg: string;
    buttonSecondBgHover: string;
    bookmarkItemBg: string;
    bookmarkItemText: string;
    drawerBackground: string;
    clockGradientFrom: string;
    clockGradientTo: string;
    cardShadow: string;
    dialogShadow: string;
    dropdownShadow: string;
    tableHeaderBg: string;
    tableRowBg: string;
    tableRowHoverBg: string;
    tableRowFocusBg: string;
    tableFooterBg: string;
    tableBorder: string;
    tabBackground: string;
    tabBorder: string;
    tabHoverBorder: string;
    tabItemBackground: string;
    tabItemHoverBg: string;
    tabItemFocusBg: string;
    tabItemBorder: string;
    tabItemHoverBorder: string;
    tabItemFocusBorder: string;
  };
}

// Type assertion to ensure JSON files match ThemeConfig
const themes = {
  DefaultDark: DefaultDark as ThemeConfig,
  DefaultLight: DefaultLight as ThemeConfig,
  IndigoLight: IndigoLight as ThemeConfig,
  MidnightDark: MidnightDark as ThemeConfig,
};

export const PRESET_THEMES: Record<"light" | "dark", ThemeConfig[]> = {
  light: [themes.DefaultLight, themes.IndigoLight],
  dark: [themes.DefaultDark, themes.MidnightDark],
};

export type PresetThemeType = ThemeConfig;
