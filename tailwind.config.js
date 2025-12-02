/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  safelist: [
    "bg-card-background",
    "bg-input-background",
    "bg-dialog-background",
    "bg-dropdown-background",
    "bg-sidebar-background",
    "bg-drawer-background",
    // Table safelist
    "bg-table-headerBg",
    "bg-table-rowBg",
    "bg-table-rowHoverBg",
    "bg-table-rowFocusBg",
    "bg-table-footerBg",
    "border-table-border",
    "hover:bg-table-rowHoverBg",
    // Tab safelist
    "bg-tab-background",
    "border-tab-border",
    "hover:border-tab-hoverBorder",
    // TabItem safelist
    "bg-tab-item-background",
    "hover:bg-tab-item-hoverBg",
    "focus:bg-tab-item-focusBg",
    "border-tab-item-border",
    "hover:border-tab-item-hoverBorder",
    "focus:border-tab-item-focusBorder",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        background: "var(--background)",
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
        },
        border: {
          default: "var(--border)",
          hover: "var(--border-hover)",
          focus: "var(--border-focus)",
        },
        card: {
          background: "var(--card-background)",
        },
        input: {
          background: "var(--input-background)",
          border: {
            default: "var(--input-border-default)",
            hover: "var(--input-border-hover)",
            focus: "var(--input-border-focus)",
          },
        },
        dialog: {
          background: "var(--dialog-background)",
        },
        dropdown: {
          background: "var(--dropdown-background)",
          border: "var(--dropdown-border)",
          itemHover: "var(--dropdown-item-hover)",
          borderHover: "var(--dropdown-border-hover)",
        },
        sidebar: {
          background: "var(--sidebar-background)",
          itemHover: "var(--sidebar-item-hover)",
          itemFocus: "var(--sidebar-item-focus)",
        },
        button: {
          bg: "var(--button-bg)",
          bgHover: "var(--button-bg-hover)",
          bgText: "var(--button-text)",
          border: "var(--button-border)",
          borderHover: "var(--button-border-hover)",
          secondBg: "var(--button-second-bg)",
          secondBgHover: "var(--button-second-bg-hover)",
        },
        drawer: {
          background: "var(--drawer-background)",
        },
        // Table colors
        table: {
          headerBg: "var(--table-header-bg)",
          rowBg: "var(--table-row-bg)",
          rowHoverBg: "var(--table-row-hover-bg)",
          rowFocusBg: "var(--table-row-focus-bg)",
          footerBg: "var(--table-footer-bg)",
          border: "var(--table-border)",
        },
        // Tab colors
        tab: {
          background: "var(--tab-background)",
          border: "var(--tab-border)",
          hoverBorder: "var(--tab-hover-border)",
        },
        // TabItem colors
        "tab-item": {
          background: "var(--tab-item-background)",
          hoverBg: "var(--tab-item-hover-bg)",
          focusBg: "var(--tab-item-focus-bg)",
          border: "var(--tab-item-border)",
          hoverBorder: "var(--tab-item-hover-border)",
          focusBorder: "var(--tab-item-focus-border)",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};