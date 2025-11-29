import { useState, useEffect, useRef } from "react";
import Editor, { OnMount, OnChange } from "@monaco-editor/react";
import { Copy, Check } from "lucide-react";
import { CodeBlockProps } from "./CodeBlock.types";
import {
  parseSize,
  getPresetDimensions,
  getMonacoLanguage,
  getLanguageDisplayName,
  copyToClipboard,
  getDefaultMonacoOptions,
  getContainerStyle,
  countLines,
  getCodeHeight,
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
  expandConfig,
}) => {
  const [copied, setCopied] = useState(false);
  const [currentCode, setCurrentCode] = useState(code);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTabId, setCurrentTabId] = useState(activeTabId || tabs[0]?.id);
  const editorRef = useRef<any>(null);
  const monacoRef = useRef<any>(null);

  // Get dimensions
  const dimensions = size
    ? getPresetDimensions(size)
    : { width: "100%", height: "400px" };
  const finalWidth = parseSize(width, dimensions.width || "100%");

  // Calculate height based on expand config
  const lineCount = countLines(currentCode);
  const shouldShowExpandButton =
    expandConfig?.enabled && lineCount > (expandConfig?.collapsedLines || 10);

  let finalHeight: string;
  if (expandConfig?.enabled && !height) {
    finalHeight = getCodeHeight(lineCount, isExpanded, expandConfig);
  } else if (height) {
    finalHeight = parseSize(height, "400px");
  } else {
    // Auto height based on line count
    const lineHeight = 19;
    const editorPadding = 16; // top 8px + bottom 8px
    const calculatedHeight = lineCount * lineHeight + editorPadding;
    finalHeight = `${calculatedHeight}px`;
  }

  // Update code when prop changes
  // Handle tab change
  const handleTabChange = (tabId: string) => {
    setCurrentTabId(tabId);
    const tab = tabs.find((t) => t.id === tabId);
    if (tab) {
      setCurrentCode(tab.content);
      onTabChange?.(tabId);
    }
  };

  // Handle expand/collapse
  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
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

  // Handle editor mount
  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;

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
        style={{
          height: finalHeight,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Action Buttons Row */}
        <div
          style={{
            position: "absolute",
            top: "0.5rem",
            right: "0.5rem",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          {/* Expand/Collapse Text + Button */}
          {shouldShowExpandButton && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 0.75rem",
                background: "rgba(0, 0, 0, 0.5)",
                borderRadius: "4px",
                backdropFilter: "blur(4px)",
              }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  color: theme === "vs-dark" ? "#ffffff" : "#000000",
                }}
              >
                {isExpanded ? "Thu gọn" : "Mở rộng"}
              </span>
              <button
                onClick={handleToggleExpand}
                title={isExpanded ? "Thu gọn" : "Mở rộng"}
                style={{
                  padding: "0.25rem",
                  border: "none",
                  background: "transparent",
                  color: theme === "vs-dark" ? "#ffffff" : "#000000",
                  cursor: "pointer",
                  fontSize: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  transition: "all 0.2s",
                }}
              >
                {isExpanded ? "↑" : "↓"}
              </button>
            </div>
          )}
        </div>
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
