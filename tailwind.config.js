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
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};