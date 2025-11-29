import { useState, useEffect, useRef } from "react";
import Editor, { OnMount, OnChange } from "@monaco-editor/react";
import { Copy, Check } from "lucide-react";
import { CodeBlockProps } from "./CodeBlock.types";
import {
  parseSize,
  getPresetDimensions,
  getMonacoLanguage,
  copyToClipboard,
  getDefaultMonacoOptions,
  getContainerStyle,
  countLines,
} from "./CodeBlock.utils";

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language,
  theme = "vs-dark",
  height,
  width,
  size = "md",
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
  const editorRef = useRef<any>(null);
  const monacoRef = useRef<any>(null);

  // Get dimensions
  const dimensions = size
    ? getPresetDimensions(size)
    : { width: "100%", height: "400px" };
  const finalWidth = parseSize(width, dimensions.width || "100%");

  // Calculate height based on line count
  const lineCount = countLines(currentCode);
  const maxLines = 20; // Maximum 20 lines

  let finalHeight: string;
  if (height) {
    finalHeight = parseSize(height, "400px");
  } else {
    const lineHeight = 19;
    const editorTopPadding = 4;
    const editorBottomPadding = 4;
    const displayLines = Math.max(1, Math.min(lineCount, maxLines));
    const editorHeight =
      displayLines * lineHeight + editorTopPadding + editorBottomPadding;
    finalHeight = `${Math.ceil(editorHeight)}px`;

    if (debug) {
      console.group("🔍 [Height Calculation]");
      console.log("📊 lineCount:", lineCount);
      console.log("📏 lineHeight:", lineHeight);
      console.log("🔼 editorTopPadding:", editorTopPadding);
      console.log("🔽 editorBottomPadding:", editorBottomPadding);
      console.log("✨ displayLines:", displayLines);
      console.log(
        "🧮 Formula:",
        `${displayLines} × ${lineHeight} + ${editorTopPadding} + ${editorBottomPadding}`
      );
      console.log("📦 editorHeight:", editorHeight);
      console.log("📦 finalHeight:", finalHeight);
      console.log(
        "ℹ️ Note: Toolbar is rendered separately, not included in editor height"
      );
      console.groupEnd();
    }
  }

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
      }
    }
  }, [headerMode, currentTabId, tabs]);

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
    if (editorRef.current) {
      setTimeout(() => {
        editorRef.current?.layout();
      }, 0);
    }
  }, [currentCode, lineCount]);

  // Handle editor mount
  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;

    if (debug) {
      setTimeout(() => {
        const editorDom = editor.getDomNode();
        if (!editorDom) return;

        console.group("🎨 [Monaco Editor DOM Analysis]");

        console.log("📦 Editor DOM:");
        console.log("  - offsetHeight:", editorDom.offsetHeight);
        console.log("  - scrollHeight:", editorDom.scrollHeight);
        console.log("  - clientHeight:", editorDom.clientHeight);

        const viewLines = editorDom.querySelector(".view-lines");
        if (viewLines) {
          console.log("📏 View Lines:");
          console.log(
            "  - offsetHeight:",
            (viewLines as HTMLElement).offsetHeight
          );
          console.log(
            "  - scrollHeight:",
            (viewLines as HTMLElement).scrollHeight
          );

          const lines = viewLines.querySelectorAll(".view-line");
          console.log("  - Line count:", lines.length);
          if (lines.length > 0) {
            const firstLine = lines[0] as HTMLElement;
            console.log("  - First line height:", firstLine.offsetHeight);
          }
        }

        const linesContent = editorDom.querySelector(".lines-content");
        if (linesContent) {
          const style = window.getComputedStyle(linesContent as Element);
          console.log("📝 Lines Content:");
          console.log("  - paddingTop:", style.paddingTop);
          console.log("  - paddingBottom:", style.paddingBottom);
          console.log("  - height:", style.height);
        }

        const overflowGuard = editorDom.querySelector(".overflow-guard");
        if (overflowGuard) {
          console.log("🛡️ Overflow Guard:");
          console.log(
            "  - offsetHeight:",
            (overflowGuard as HTMLElement).offsetHeight
          );
        }

        const viewportWrapper = editorDom.querySelector(
          ".monaco-scrollable-element"
        );
        if (viewportWrapper) {
          console.log("📺 Viewport Wrapper:");
          console.log(
            "  - offsetHeight:",
            (viewportWrapper as HTMLElement).offsetHeight
          );
        }

        console.groupEnd();
      }, 500);
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
    }),
    ...monacoOptions,
  };

  // Container style
  const containerStyle = getContainerStyle({
    backgroundColor,
    borderRadius,
    opacity,
    padding,
    margin,
    border,
    shadow,
  });

  return (
    <div
      className={className}
      style={{
        ...containerStyle,
        width: finalWidth,
      }}
    >
      {/* Header/Toolbar */}
      {showToolbar && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.5rem 0.75rem",
            backgroundColor:
              toolbarBackgroundColor ||
              (theme === "vs-dark" ? "#1e1e1e" : "#ffffff"),
            borderBottom: "1px solid rgba(128, 128, 128, 0.2)",
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
                  color: theme === "vs-dark" ? "#ffffff" : "#000000",
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
                  color: theme === "vs-dark" ? "#ffffff" : "#000000",
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
                          ? "rgba(255, 255, 255, 0.1)"
                          : "transparent",
                      color: theme === "vs-dark" ? "#ffffff" : "#000000",
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
                    color={theme === "vs-dark" ? "#ffffff" : "#000000"}
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
              console.group("📦 [Container Measurements]");
              console.log("🎯 Container (wrapper div):");
              console.log("  - offsetHeight:", el.offsetHeight);
              console.log("  - scrollHeight:", el.scrollHeight);
              console.log("  - clientHeight:", el.clientHeight);
              console.log("  - set height:", finalHeight);
              console.log(
                "  - computed height:",
                window.getComputedStyle(el).height
              );

              console.log("⚠️ Analysis:");
              const wastedSpace = el.clientHeight - el.scrollHeight;
              console.log("  - Wasted space:", wastedSpace, "px");
              console.log(
                "  - Has scrollbar:",
                el.scrollHeight > el.clientHeight
              );

              if (wastedSpace > 0) {
                console.log(
                  "💡 Solution: Giảm calculatedHeight xuống",
                  wastedSpace,
                  "px"
                );
                console.log(
                  "💡 Hoặc giảm editorTopPadding/editorBottomPadding"
                );
              } else if (wastedSpace < 0) {
                console.log(
                  "💡 Solution: Tăng calculatedHeight lên",
                  Math.abs(wastedSpace),
                  "px"
                );
              } else {
                console.log("✅ Height calculation is perfect!");
              }

              console.groupEnd();
            }, 600);
          }
        }}
        style={{
          height: finalHeight,
          overflow: lineCount > maxLines ? "auto" : "hidden",
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
              backgroundColor: theme === "vs-dark" ? "#1e1e1e" : "#ffffff",
            }}
          >
            {loadingComponent || (
              <div
                style={{
                  fontSize: "0.875rem",
                  color: theme === "vs-dark" ? "#ffffff" : "#000000",
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
            theme={theme}
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
                  backgroundColor: theme === "vs-dark" ? "#1e1e1e" : "#ffffff",
                }}
              >
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: theme === "vs-dark" ? "#ffffff" : "#000000",
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
