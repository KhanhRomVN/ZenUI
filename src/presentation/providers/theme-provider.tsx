import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  applyPresetTheme: (preset: any) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  applyPresetTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem(storageKey) as Theme;
    return stored || defaultTheme;
  });

  // Load saved preset theme on mount
  useEffect(() => {
    const savedPreset = localStorage.getItem(`${storageKey}-preset`);
    if (savedPreset) {
      try {
        const preset = JSON.parse(savedPreset);
        applyCSSVariables(preset);
      } catch (e) {
        console.error("Failed to load saved preset theme", e);
      }
    } else {
      // Apply Default Dark theme on first load
      const defaultDarkPreset = {
        name: "Default Dark",
        primary: "#3686ff",
        background: "#0a0a0a",
        textPrimary: "#ececec",
        textSecondary: "#a8a8a8",
        border: "#353535",
        borderHover: "#418dfe",
        borderFocus: "#418dfe",
        cardBackground: "#242424",
        inputBackground: "#1e1e1e",
        dialogBackground: "#1e1e1e",
        dropdownBackground: "#1e1e1e",
        dropdownItemHover: "#2d2d2d",
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
      };
      applyCSSVariables(defaultDarkPreset);
      localStorage.setItem(
        `${storageKey}-preset`,
        JSON.stringify(defaultDarkPreset)
      );
    }
  }, []);

  const applyCSSVariables = (preset: any) => {
    const root = window.document.documentElement;
    const cssVarMap: Record<string, string> = {
      primary: "--primary",
      background: "--background",
      textPrimary: "--text-primary",
      textSecondary: "--text-secondary",
      border: "--border",
      borderHover: "--border-hover",
      borderFocus: "--border-focus",
      cardBackground: "--card-background",
      inputBackground: "--input-background",
      dialogBackground: "--dialog-background",
      dropdownBackground: "--dropdown-background",
      dropdownItemHover: "--dropdown-item-hover",
      sidebarBackground: "--sidebar-background",
      sidebarItemHover: "--sidebar-item-hover",
      sidebarItemFocus: "--sidebar-item-focus",
      buttonBg: "--button-bg",
      buttonBgHover: "--button-bg-hover",
      buttonText: "--button-text",
      buttonBorder: "--button-border",
      buttonBorderHover: "--button-border-hover",
      buttonSecondBg: "--button-second-bg",
      buttonSecondBgHover: "--button-second-bg-hover",
      bookmarkItemBg: "--bookmark-item-bg",
      bookmarkItemText: "--bookmark-item-text",
      drawerBackground: "--drawer-background",
      clockGradientFrom: "--clock-gradient-from",
      clockGradientTo: "--clock-gradient-to",
    };
    Object.entries(preset).forEach(([key, value]) => {
      const cssVar = cssVarMap[key];
      if (cssVar && value) {
        root.style.setProperty(cssVar, value as string);
      }
    });
  };

  const applyPresetTheme = (preset: any) => {
    applyCSSVariables(preset);
    // Save preset with name for CodeBlock theme detection
    const presetWithName = {
      ...preset,
      name: preset.name, // Ensure name is saved
    };
    localStorage.setItem(
      `${storageKey}-preset`,
      JSON.stringify(presetWithName)
    );

    // Dispatch custom event to notify CodeBlock components
    window.dispatchEvent(
      new CustomEvent("theme-preset-changed", {
        detail: { presetName: preset.name },
      })
    );
  };

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
    applyPresetTheme,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
