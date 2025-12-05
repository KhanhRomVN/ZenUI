import { useState, useEffect, useRef } from "react";
import Editor, { OnMount, OnChange, useMonaco } from "@monaco-editor/react";
import { Copy, Check } from "lucide-react";
import { CodeBlockProps } from "./CodeBlock.types";
import {
  parseSize,
  getScaleFromSize,
  getMonacoLanguage,
  copyToClipboard,
  getDefaultMonacoOptions,
  getContainerStyle,
  countLines,
  getBuiltInThemes,
} from "./CodeBlock.utils";

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language,
  theme = "vs-dark",
  width,
  size = 100,
  title,
  className = "",
  editable = false,
  showLineNumbers = true,
  showGutter = true,
  showLineHighlight = true,
  showMinimap = false,
  wordWrap = "off",
  fontSize = 14,
  fontFamily,
  tabSize = 2,
  insertSpaces = true,
  readOnly = false,
  autoFocus = false,
  highlightActiveLine = true,
  showToolbar = true,
  showCopyButton = true,
  showLanguageTag = true,
  toolbarActions = [],
  onCopy,
  onChange,
  padding,
  margin,
  border,
  shadow,
  backgroundColor,
  toolbarBackgroundColor,
  borderRadius = 8,
  opacity,
  monacoOptions = {},
  lineDecorations = [],
  scrollToLine,
  highlightedLines = [],
  loading = false,
  loadingComponent,
  headerMode = "none",
  headerIcon,
  filePath,
  tabs = [],
  activeTabId,
  onTabChange,
  debug = false,
}) => {
  const [copied, setCopied] = useState(false);
  const [currentCode, setCurrentCode] = useState(code);
  const [currentTabId, setCurrentTabId] = useState(activeTabId || tabs[0]?.id);
  const [customTheme, setCustomTheme] = useState<string | null>(null);
  const [isLoadingTheme, setIsLoadingTheme] = useState(false);
  const [customThemeError, setCustomThemeError] = useState<string | null>(null);
  const [themeColors, setThemeColors] = useState<any>(null);
  const editorRef = useRef<any>(null);
  const monacoRef = useRef<any>(null);
  const monaco = useMonaco();

  // Get scale from size
  const scale = getScaleFromSize(size);
  const finalWidth = parseSize(width, "100%");

  // Calculate height based on line count
  const lineCount = countLines(currentCode);
  const maxLines = 20; // Maximum 20 lines before scrolling

  const lineHeight = 19;
  const editorTopPadding = 4;
  const editorBottomPadding = 4;
  const displayLines = Math.min(lineCount, maxLines);
  const calculatedHeight =
    displayLines * lineHeight + editorTopPadding + editorBottomPadding;
  const minHeight = lineHeight + editorTopPadding + editorBottomPadding; // Minimum = 1 line height
  const editorHeight = Math.max(minHeight, calculatedHeight);
  const finalHeight = `${Math.ceil(editorHeight)}px`;

  // Handle tab change
  const handleTabChange = (tabId: string) => {
    setCurrentTabId(tabId);
    const tab = tabs.find((t) => t.id === tabId);
    if (tab) {
      setCurrentCode(tab.content);
      onTabChange?.(tabId);
    }
  };

  // Update current code when tabs change
  useEffect(() => {
    if (headerMode === "tabs" && currentTabId) {
      const tab = tabs.find((t) => t.id === currentTabId);
      if (tab) {
        setCurrentCode(tab.content);
        // Force theme update after content changes
        if (editorRef.current && monaco) {
          setTimeout(() => {
            const currentTheme = customTheme || theme;
            monaco.editor.setTheme(currentTheme);
            editorRef.current?.layout();
            // Force re-render to update toolbar colors
            editorRef.current?.trigger(
              "source",
              "editor.action.formatDocument",
              {}
            );
          }, 50);
        }
      }
    }
  }, [headerMode, currentTabId, tabs, monaco, customTheme, theme]);

  // Get current language
  const getCurrentLanguage = () => {
    if (headerMode === "tabs" && currentTabId) {
      const tab = tabs.find((t) => t.id === currentTabId);
      return tab?.language || language;
    }
    return language;
  };

  useEffect(() => {
    setCurrentCode(code);
  }, [code]);

  // Force layout update when code changes
  useEffect(() => {
    if (editorRef.current && monaco) {
      setTimeout(() => {
        const currentTheme = customTheme || theme;
        monaco.editor.setTheme(currentTheme);
        editorRef.current?.layout();
      }, 0);
    }
  }, [currentCode, lineCount, monaco, customTheme, theme]);

  // Maintain theme when copied state changes
  useEffect(() => {
    if (editorRef.current && monaco && (customTheme || theme)) {
      const currentTheme = customTheme || theme;
      monaco.editor.setTheme(currentTheme);
    }
  }, [copied, monaco, customTheme, theme]);

  // Get current preset theme from localStorage
  const getPresetThemeName = (): string | null => {
    try {
      const savedPreset = localStorage.getItem("vite-ui-theme-preset");
      if (savedPreset) {
        const preset = JSON.parse(savedPreset);
        // Return name without spaces (e.g., "MidnightDark" not "Midnight Dark")
        return preset.name || null;
      }
    } catch (e) {
      console.error("Failed to get preset theme", e);
    }
    return null;
  };

  useEffect(() => {
    if (!monaco) return;

    const loadCustomTheme = async () => {
      setIsLoadingTheme(true);
      setCustomThemeError(null);

      try {
        let themeData;
        let themeName: string;

        const presetName = getPresetThemeName();

        if (debug) {
          console.log(
            "📦 Loading built-in theme:",
            presetName || "none (will use first available)"
          );
        }

        // Get all built-in themes dynamically
        const builtInThemes = getBuiltInThemes();
        const themeLoader = presetName
          ? builtInThemes[`./themes/${presetName}.json`]
          : null;

        if (themeLoader && presetName) {
          // Theme found - load it
          themeData = await themeLoader();
          themeName = presetName;
        } else {
          // Theme not found - fallback to first available theme
          if (debug) {
            console.warn(
              `⚠️ Theme "${presetName}" not found, falling back to first available theme`
            );
          }

          const availableThemes = Object.keys(builtInThemes);
          if (availableThemes.length > 0) {
            const firstThemePath = availableThemes[0];
            const firstThemeLoader = builtInThemes[firstThemePath];
            themeData = await firstThemeLoader();
            // Extract theme name from path: "./themes/MyTheme.json" -> "MyTheme"
            themeName = firstThemePath
              .replace("./themes/", "")
              .replace(".json", "");
          } else {
            throw new Error("No built-in themes available");
          }
        }

        monaco.editor.defineTheme(themeName, themeData.default as any);
        setCustomTheme(themeName);
        setThemeColors(themeData.default.colors);

        // Force apply theme to existing editor instance
        if (editorRef.current) {
          monaco.editor.setTheme(themeName);
        }

        if (debug) {
          console.log(`✅ Built-in theme loaded: ${themeName}`);
        }
      } catch (error) {
        console.error("❌ Error loading theme:", error);
        setCustomTheme(null);
        setCustomThemeError(
          error instanceof Error ? error.message : "Unknown error"
        );

        // Final fallback to built-in Monaco theme
        setCustomTheme(theme);

        if (debug) {
          console.warn(`⚠️ Falling back to built-in Monaco theme: ${theme}`);
        }
      } finally {
        setIsLoadingTheme(false);
      }
    };

    loadCustomTheme();

    // Listen for theme preset changes
    const handleThemeChange = (event: Event) => {
      const customEvent = event as CustomEvent;
      if (debug) {
        console.log(
          "🔄 Theme changed, reloading:",
          customEvent.detail?.presetName
        );
      }
      loadCustomTheme();
    };

    window.addEventListener("theme-preset-changed", handleThemeChange);

    return () => {
      window.removeEventListener("theme-preset-changed", handleThemeChange);
    };
  }, [monaco, theme, debug]);

  // Handle editor mount
  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;

    if (debug) {
      console.log("🎨 Editor mounted with theme:", customTheme || theme);
    }

    // Auto focus if needed
    if (autoFocus) {
      editor.focus();
    }

    // Scroll to specific line
    if (scrollToLine) {
      editor.revealLineInCenter(scrollToLine);
      editor.setPosition({ lineNumber: scrollToLine, column: 1 });
    }

    // Apply line decorations
    if (lineDecorations.length > 0) {
      const decorations = lineDecorations.map((dec) => ({
        range: new monaco.Range(dec.line, 1, dec.line, 1),
        options: {
          isWholeLine: true,
          className: dec.className || "line-decoration",
          linesDecorationsClassName: dec.className || "line-decoration",
          ...(dec.backgroundColor && {
            backgroundColor: dec.backgroundColor,
          }),
        },
      }));
      editor.deltaDecorations([], decorations);
    }

    // Highlight specific lines
    if (highlightedLines.length > 0) {
      const decorations = highlightedLines.map((line) => ({
        range: new monaco.Range(line, 1, line, 1),
        options: {
          isWholeLine: true,
          className: "highlighted-line",
          linesDecorationsClassName: "highlighted-line-decoration",
        },
      }));
      editor.deltaDecorations([], decorations);
    }
  };

  // Handle code change
  const handleEditorChange: OnChange = (value) => {
    const newValue = value || "";
    setCurrentCode(newValue);
    onChange?.(newValue);
  };

  // Handle copy
  const handleCopy = async () => {
    const success = await copyToClipboard(currentCode);
    if (success) {
      setCopied(true);
      onCopy?.();
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Build Monaco options
  const editorOptions = {
    ...getDefaultMonacoOptions({
      showMinimap,
      showLineNumbers,
      showGutter,
      showLineHighlight,
      wordWrap,
      fontSize,
      fontFamily,
      tabSize,
      insertSpaces,
      readOnly,
      editable,
      highlightActiveLine,
      theme,
    }),
    ...monacoOptions,
  };

  // Container style
  const containerStyle = getContainerStyle({
    borderRadius,
    opacity,
    padding,
    margin,
    border,
    shadow,
  });

  // Debug logs for component render
  if (debug) {
    console.group("🔧 CodeBlock - Render Debug");
    console.log("📊 Props:", {
      className,
      theme,
      customTheme,
    });
    console.log("🎨 Container style:", containerStyle);
    console.groupEnd();
  }

  return (
    <div
      className={className}
      style={{
        ...containerStyle,
        width: finalWidth,
        transform: `scale(${scale})`,
        transformOrigin: "top left",
      }}
    >
      {/* Header/Toolbar */}
      {showToolbar && (
        <div
          key={`toolbar-${currentTabId}-${customTheme || theme}`}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.5rem 0.75rem",
            backgroundColor:
              toolbarBackgroundColor ||
              themeColors?.["editor.background"] ||
              (theme === "vs-dark" ? "#1e1e1e" : "#ffffff"),
            borderBottom: `1px solid ${
              themeColors?.["editorWidget.border"] || "rgba(128, 128, 128, 0.2)"
            }`,
          }}
        >
          {/* Left side: Icon + Title/Path + Tabs */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
          >
            {/* Header Icon */}
            {headerIcon && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {headerIcon}
              </div>
            )}

            {/* Title or File Path */}
            {headerMode === "path" && filePath && (
              <span
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  color:
                    themeColors?.["editor.foreground"] ||
                    (theme === "vs-dark" ? "#ffffff" : "#000000"),
                  fontFamily: "monospace",
                }}
              >
                {filePath}
              </span>
            )}

            {headerMode === "none" && title && (
              <span
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color:
                    themeColors?.["editor.foreground"] ||
                    (theme === "vs-dark" ? "#ffffff" : "#000000"),
                }}
              >
                {title}
              </span>
            )}

            {/* Tabs (inline with header) */}
            {headerMode === "tabs" && tabs.length > 0 && (
              <div
                style={{
                  display: "flex",
                  gap: "0.25rem",
                  alignItems: "center",
                }}
              >
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    style={{
                      padding: "0.375rem 0.75rem",
                      border: "none",
                      background:
                        currentTabId === tab.id
                          ? themeColors?.["tab.activeBackground"] ||
                            "rgba(255, 255, 255, 0.1)"
                          : "transparent",
                      color:
                        themeColors?.["editor.foreground"] ||
                        (theme === "vs-dark" ? "#ffffff" : "#000000"),
                      cursor: "pointer",
                      fontSize: "0.8125rem",
                      fontWeight: currentTabId === tab.id ? 600 : 400,
                      borderRadius: "4px",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      if (currentTabId !== tab.id) {
                        e.currentTarget.style.backgroundColor =
                          "rgba(255, 255, 255, 0.05)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (currentTabId !== tab.id) {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right side: Copy button + Custom actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {/* Copy button */}
            {showCopyButton && (
              <button
                onClick={handleCopy}
                title={copied ? "Đã copy!" : "Copy code"}
                style={{
                  padding: "0.375rem",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {copied ? (
                  <Check size={16} color="#10b981" />
                ) : (
                  <Copy
                    size={16}
                    color={
                      themeColors?.["editor.foreground"] ||
                      (theme === "vs-dark" ? "#ffffff" : "#000000")
                    }
                  />
                )}
              </button>
            )}

            {/* Custom toolbar actions */}
            {toolbarActions.map((action, index) => (
              <button
                key={index}
                onClick={action.onClick}
                disabled={action.disabled}
                title={action.label}
                style={{
                  padding: "0.375rem",
                  border: "none",
                  background: "transparent",
                  cursor: action.disabled ? "not-allowed" : "pointer",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background-color 0.2s",
                  opacity: action.disabled ? 0.5 : 1,
                }}
                onMouseEnter={(e) => {
                  if (!action.disabled) {
                    e.currentTarget.style.backgroundColor =
                      "rgba(255, 255, 255, 0.1)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {action.icon}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Editor */}
      <div
        ref={(el) => {
          if (el && debug) {
            setTimeout(() => {
              const wastedSpace = el.clientHeight - el.scrollHeight;
              console.groupEnd();
            }, 600);
          }
        }}
        style={{
          height: finalHeight,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {loading ? (
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:
                themeColors?.["editor.background"] ||
                (theme === "vs-dark" ? "#1e1e1e" : "#ffffff"),
            }}
          >
            {loadingComponent || (
              <div
                style={{
                  fontSize: "0.875rem",
                  color:
                    themeColors?.["editor.foreground"] ||
                    (theme === "vs-dark" ? "#ffffff" : "#000000"),
                }}
              >
                Đang tải editor...
              </div>
            )}
          </div>
        ) : (
          <Editor
            height="100%"
            defaultLanguage={getMonacoLanguage(getCurrentLanguage())}
            language={getMonacoLanguage(getCurrentLanguage())}
            value={currentCode}
            theme={customTheme || theme}
            options={editorOptions}
            onMount={handleEditorDidMount}
            onChange={handleEditorChange}
            loading={
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor:
                    themeColors?.["editor.background"] ||
                    (theme === "vs-dark" ? "#1e1e1e" : "#ffffff"),
                }}
              >
                <div
                  style={{
                    fontSize: "0.875rem",
                    color:
                      themeColors?.["editor.foreground"] ||
                      (theme === "vs-dark" ? "#ffffff" : "#000000"),
                  }}
                >
                  Đang tải Monaco Editor...
                </div>
              </div>
            }
          />
        )}
      </div>

      {/* Custom CSS cho highlighted lines */}
      <style>{`
        .highlighted-line {
          background-color: rgba(255, 255, 0, 0.1) !important;
        }
        .highlighted-line-decoration {
          background-color: rgba(255, 255, 0, 0.3) !important;
          width: 3px !important;
        }
        .line-decoration {
          background-color: rgba(255, 0, 0, 0.1) !important;
        }
        .monaco-editor .margin {
          padding-left: 8px !important;
        }
        .monaco-editor .margin .line-numbers {
          padding-right: 8px !important;
        }
        .monaco-editor .lines-content {
          padding-left: 16px !important;
        }
      `}</style>
    </div>
  );
};

export default CodeBlock;
