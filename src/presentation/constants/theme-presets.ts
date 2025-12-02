import { ReactNode } from "react";

export interface PresetThemeType {
  name: string;
  primary: string;
  background: string;
  textPrimary?: string;
  textSecondary?: string;
  border?: string;
  borderHover?: string;
  borderFocus?: string;
  cardBackground: string;
  inputBackground?: string;
  inputBorderDefault?: string;
  inputBorderHover?: string;
  inputBorderFocus?: string;
  dialogBackground?: string;
  dropdownBackground?: string;
  dropdownItemHover?: string;
  dropdownBorder?: string;
  dropdownBorderHover?: string;
  sidebarBackground?: string;
  sidebarItemHover?: string;
  sidebarItemFocus?: string;
  buttonBg?: string;
  buttonBgHover?: string;
  buttonText?: string;
  buttonBorder?: string;
  buttonBorderHover?: string;
  buttonSecondBg?: string;
  buttonSecondBgHover?: string;
  bookmarkItemBg?: string;
  bookmarkItemText?: string;
  drawerBackground?: string;
  clockGradientFrom?: string;
  clockGradientTo?: string;
  cardShadow?: string;
  dialogShadow?: string;
  dropdownShadow?: string;
  // Table variables
  tableHeaderBg?: string;
  tableRowBg?: string;
  tableRowHoverBg?: string;
  tableRowFocusBg?: string;
  tableFooterBg?: string;
  tableBorder?: string;
  icon?: ReactNode;
  description?: string;
}

export const PRESET_THEMES: Record<"light" | "dark", PresetThemeType[]> = {
  light: [
    {
      name: "DefaultLight",
      primary: "#3686ff",
      background: "#ffffff",
      textPrimary: "#0f172a",
      textSecondary: "#475569",
      border: "#e2e8f0",
      borderHover: "#cbd5e1",
      borderFocus: "#cbd5e1",
      cardBackground: "#ffffff",
      inputBackground: "#ffffff",
      inputBorderDefault: "#e2e8f0",
      inputBorderHover: "#cbd5e1",
      inputBorderFocus: "#3686ff",
      dialogBackground: "#ffffff",
      dropdownBackground: "#ffffff",
      dropdownItemHover: "#f8fafc",
      dropdownBorder: "#e2e8f0",
      dropdownBorderHover: "#cbd5e1",
      sidebarBackground: "#f9fafb",
      sidebarItemHover: "#f3f4f6",
      sidebarItemFocus: "#e5e7eb",
      buttonBg: "#3686ff",
      buttonBgHover: "#1d4ed8",
      buttonText: "#ffffff",
      buttonBorder: "#2563eb",
      buttonBorderHover: "#1e40af",
      buttonSecondBg: "#d4d4d4",
      buttonSecondBgHover: "#b6b6b6",
      bookmarkItemBg: "#f1f5f9",
      bookmarkItemText: "#0f172a",
      drawerBackground: "#ffffff",
      clockGradientFrom: "#3686ff",
      clockGradientTo: "#1d4ed8",
      cardShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
      dialogShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      dropdownShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
      // Table variables for DefaultLight
      tableHeaderBg: "#f8fafc",
      tableRowBg: "#ffffff",
      tableRowHoverBg: "#f3f4f6",
      tableRowFocusBg: "#e0e7ff",
      tableFooterBg: "#f8fafc",
      tableBorder: "#e2e8f0",
    },
    {
      name: "IndigoLight",
      primary: "#4f46e5",
      background: "#eef2ff",
      textPrimary: "#3730a3",
      textSecondary: "#4338ca",
      border: "#c7d2fe",
      borderHover: "#a5b4fc",
      borderFocus: "#a5b4fc",
      cardBackground: "#ffffff",
      inputBackground: "#ffffff",
      inputBorderDefault: "#c7d2fe",
      inputBorderHover: "#a5b4fc",
      inputBorderFocus: "#4f46e5",
      dialogBackground: "#ffffff",
      dropdownBackground: "#ffffff",
      dropdownItemHover: "#e0e7ff",
      dropdownBorder: "#c7d2fe",
      dropdownBorderHover: "#a5b4fc",
      sidebarBackground: "#e0e7ff",
      sidebarItemHover: "#c7d2fe",
      sidebarItemFocus: "#a5b4fc",
      buttonBg: "#4f46e5",
      buttonBgHover: "#4338ca",
      buttonText: "#ffffff",
      buttonBorder: "#4338ca",
      buttonBorderHover: "#3730a3",
      buttonSecondBg: "#e0e7ff",
      buttonSecondBgHover: "#c7d2fe",
      bookmarkItemBg: "#e0e7ff",
      bookmarkItemText: "#3730a3",
      drawerBackground: "#ffffff",
      clockGradientFrom: "#4f46e5",
      clockGradientTo: "#4338ca",
      cardShadow: "0 1px 3px 0 rgba(79, 70, 229, 0.1)",
      dialogShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.25)",
      dropdownShadow: "0 10px 15px -3px rgba(79, 70, 229, 0.1)",
      // Table variables for IndigoLight
      tableHeaderBg: "#e0e7ff",
      tableRowBg: "#ffffff",
      tableRowHoverBg: "#ede9fe",
      tableRowFocusBg: "#ddd6fe",
      tableFooterBg: "#e0e7ff",
      tableBorder: "#c7d2fe",
    },
  ],
  dark: [
    {
      name: "DefaultDark",
      primary: "#3686ff",
      background: "#0a0a0a",
      textPrimary: "#ececec",
      textSecondary: "#a8a8a8",
      border: "#353535",
      borderHover: "#418dfe",
      borderFocus: "#418dfe",
      cardBackground: "#242424",
      inputBackground: "#1e1e1e",
      inputBorderDefault: "#3f3f3f",
      inputBorderHover: "#418dfe",
      inputBorderFocus: "#3686ff",
      dialogBackground: "#1e1e1e",
      dropdownBackground: "#1e1e1e",
      dropdownItemHover: "#2d2d2d",
      dropdownBorder: "#3f3f3f",
      dropdownBorderHover: "#418dfe",
      sidebarBackground: "#131313",
      sidebarItemHover: "#1e1e1e",
      sidebarItemFocus: "#333333",
      buttonBg: "#3686ff",
      buttonBgHover: "#418dfe",
      buttonText: "#ffffff",
      buttonBorder: "#418dfe",
      buttonBorderHover: "#5aa3ff",
      buttonSecondBg: "#1e1e1e",
      buttonSecondBgHover: "#343434",
      bookmarkItemBg: "#1e293b",
      bookmarkItemText: "#e2e8f0",
      drawerBackground: "#1e1e1e",
      clockGradientFrom: "#3686ff",
      clockGradientTo: "#418dfe",
      cardShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.3)",
      dialogShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
      dropdownShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
      // Table variables for DefaultDark
      tableHeaderBg: "#1a1a1a",
      tableRowBg: "#242424",
      tableRowHoverBg: "#2d2d2d",
      tableRowFocusBg: "#333333",
      tableFooterBg: "#1a1a1a",
      tableBorder: "#353535",
    },
    {
      name: "MidnightDark",
      primary: "#6366f1",
      background: "#020617",
      textPrimary: "#e2e8f0",
      textSecondary: "#94a3b8",
      border: "#1e293b",
      borderHover: "#6366f1",
      borderFocus: "#6366f1",
      cardBackground: "#0f172a",
      inputBackground: "#1e293b",
      inputBorderDefault: "#1e293b",
      inputBorderHover: "#6366f1",
      inputBorderFocus: "#6366f1",
      dialogBackground: "#0f172a",
      dropdownBackground: "#1e293b",
      dropdownItemHover: "#090c0f",
      dropdownBorder: "#1e293b",
      dropdownBorderHover: "#6366f1",
      sidebarBackground: "#0b0e2a",
      sidebarItemHover: "#0f172a",
      sidebarItemFocus: "#1e293b",
      buttonBg: "#6366f1",
      buttonBgHover: "#4f46e5",
      buttonText: "#ffffff",
      buttonBorder: "#4f46e5",
      buttonBorderHover: "#4338ca",
      buttonSecondBg: "#1e293b",
      buttonSecondBgHover: "#334155",
      bookmarkItemBg: "#1e293b",
      bookmarkItemText: "#e2e8f0",
      drawerBackground: "#0f172a",
      clockGradientFrom: "#6366f1",
      clockGradientTo: "#4f46e5",
      cardShadow: "0 1px 3px 0 rgba(99, 102, 241, 0.1)",
      dialogShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.25)",
      dropdownShadow: "0 10px 15px -3px rgba(99, 102, 241, 0.1)",
      // Table variables for MidnightDark
      tableHeaderBg: "#0f172a",
      tableRowBg: "#1e293b",
      tableRowHoverBg: "#334155",
      tableRowFocusBg: "#475569",
      tableFooterBg: "#0f172a",
      tableBorder: "#1e293b",
    },
  ],
};
