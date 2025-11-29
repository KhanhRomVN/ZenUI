import { ReactNode } from "react";

/**
 * Các ngôn ngữ lập trình được hỗ trợ
 */
export type CodeBlockLanguage =
  | "javascript"
  | "typescript"
  | "python"
  | "java"
  | "csharp"
  | "cpp"
  | "c"
  | "go"
  | "rust"
  | "php"
  | "ruby"
  | "swift"
  | "kotlin"
  | "scala"
  | "html"
  | "css"
  | "scss"
  | "less"
  | "json"
  | "xml"
  | "yaml"
  | "markdown"
  | "sql"
  | "shell"
  | "bash"
  | "powershell"
  | "dockerfile"
  | "plaintext";

/**
 * Theme của code block
 */
export type CodeBlockTheme = "vs-dark" | "vs-light" | "hc-black" | "hc-light";

/**
 * Kích thước của code block (scale percentage)
 * 100 = 100% (mặc định), 120 = 120% (phóng to 1.2x), 80 = 80% (thu nhỏ 0.8x)
 */
export type CodeBlockSize = number;

/**
 * Interface định nghĩa spacing
 */
export interface CodeBlockSpacing {
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
  all?: string | number;
}

/**
 * Interface định nghĩa border
 */
export interface CodeBlockBorder {
  width?: CodeBlockSpacing;
  style?: "solid" | "dashed" | "dotted" | "double" | "none";
  color?: string;
  radius?: CodeBlockSpacing;
}

/**
 * Interface định nghĩa shadow
 */
export interface CodeBlockShadow {
  color?: string;
  offsetX?: string | number;
  offsetY?: string | number;
  blur?: string | number;
  spread?: string | number;
  inset?: boolean;
}

/**
 * Interface định nghĩa toolbar actions
 */
export interface CodeBlockToolbarAction {
  icon: ReactNode;
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

/**
 * Props chính của CodeBlock component
 */
export interface CodeBlockProps {
  // ==================== CORE PROPS (BẮT BUỘC) ====================

  /** Code content */
  code: string;
  /** Ngôn ngữ lập trình */
  language: CodeBlockLanguage;

  // ==================== BASIC CONFIGURATION ====================

  /** Theme của editor - built-in themes */
  theme?: CodeBlockTheme;

  /** Path to folder containing theme JSON files (e.g., "/themes" or "./themes") */
  themesFolder?: string;
  /** Chiều rộng của code block */
  width?: string | number;
  /** Kích thước scale (100 = 100%, 120 = 120%, etc.) */
  size?: CodeBlockSize;
  /** Tiêu đề của code block */
  title?: string;
  /** Custom class name */
  className?: string;

  // ==================== HEADER CONFIGURATION ====================

  /** Header display mode */
  headerMode?: CodeBlockHeaderMode;
  /** Icon/emoji/SVG ở góc trái header */
  headerIcon?: React.ReactNode;
  /** File path (khi headerMode = "path") */
  filePath?: string;
  /** Tabs (khi headerMode = "tabs") */
  tabs?: CodeBlockTab[];
  /** Active tab id (khi headerMode = "tabs") */
  activeTabId?: string;
  /** Callback khi chuyển tab */
  onTabChange?: (tabId: string) => void;

  // ==================== EDITOR BEHAVIOR ====================

  /** Cho phép chỉnh sửa code */
  editable?: boolean;
  /** Hiển thị line numbers */
  showLineNumbers?: boolean;
  /** Hiển thị gutter (vùng chứa line numbers) */
  showGutter?: boolean;
  /** Hiển thị line highlight khi focus */
  showLineHighlight?: boolean;
  /** Hiển thị minimap */
  showMinimap?: boolean;
  /** Word wrap */
  wordWrap?: "on" | "off" | "wordWrapColumn" | "bounded";
  /** Font size */
  fontSize?: number;
  /** Font family */
  fontFamily?: string;
  /** Tab size */
  tabSize?: number;
  /** Insert spaces instead of tabs */
  insertSpaces?: boolean;
  /** Read only mode */
  readOnly?: boolean;
  /** Auto focus khi mount */
  autoFocus?: boolean;
  /** Highlight active line */
  highlightActiveLine?: boolean;

  // ==================== TOOLBAR & ACTIONS ====================

  /** Hiển thị toolbar */
  showToolbar?: boolean;
  /** Hiển thị nút copy */
  showCopyButton?: boolean;
  /** Hiển thị language tag */
  showLanguageTag?: boolean;
  /** Custom toolbar actions */
  toolbarActions?: CodeBlockToolbarAction[];
  /** Callback khi copy thành công */
  onCopy?: () => void;
  /** Callback khi code thay đổi */
  onChange?: (value: string) => void;

  // ==================== STYLING ====================

  /** Padding bên trong code block */
  padding?: CodeBlockSpacing;
  /** Margin bên ngoài code block */
  margin?: CodeBlockSpacing;
  /** Border styling */
  border?: CodeBlockBorder;
  /** Shadow styling */
  shadow?: CodeBlockShadow | CodeBlockShadow[];
  /** Background color */
  backgroundColor?: string;
  /** Màu nền của toolbar */
  toolbarBackgroundColor?: string;
  /** Border radius của code block */
  borderRadius?: string | number;
  /** Opacity */
  opacity?: number;

  // ==================== ADVANCED OPTIONS ====================

  /** Monaco editor options (override defaults) */
  monacoOptions?: any;
  /** Line decorations */
  lineDecorations?: Array<{
    line: number;
    className?: string;
    backgroundColor?: string;
  }>;
  /** Scroll to line khi mount */
  scrollToLine?: number;
  /** Đánh dấu các dòng */
  highlightedLines?: number[];
  /** Loading state */
  loading?: boolean;
  /** Custom loading component */
  loadingComponent?: ReactNode;

  // ==================== DEBUG ====================

  /** Enable debug logs (default: false) */
  debug?: boolean;
}

/**
 * Interface cho internal state của CodeBlock
 */
export interface CodeBlockState {
  /** Code hiện tại */
  currentCode: string;
  /** Đã copy hay chưa */
  copied: boolean;
  /** Editor instance */
  editor: any;
  /** Monaco instance */
  monaco: any;
}

/**
 * Interface cho toolbar config
 */
export interface CodeBlockToolbarConfig {
  show: boolean;
  backgroundColor?: string;
  showCopyButton: boolean;
  showLanguageTag: boolean;
  customActions?: CodeBlockToolbarAction[];
}

/**
 * Header display mode
 */
export type CodeBlockHeaderMode = "tabs" | "path" | "none";

/**
 * Interface cho tab item
 */
export interface CodeBlockTab {
  id: string;
  label: string;
  content: string;
  language: CodeBlockLanguage;
}

/**
 * Interface cho custom theme JSON
 */
export interface CodeBlockThemeData {
  name: string;
  type: "vs" | "vs-dark" | "hc-black" | "hc-light";
  colors: {
    "editor.background": string;
    "editor.foreground": string;
    "editor.lineHighlightBackground"?: string;
    "editorLineNumber.foreground"?: string;
    "editorLineNumber.activeForeground"?: string;
    "editorGutter.background"?: string;
    "editor.selectionBackground"?: string;
    "editor.inactiveSelectionBackground"?: string;
    [key: string]: string | undefined;
  };
  tokenColors: Array<{
    scope?: string | string[];
    settings: {
      foreground?: string;
      background?: string;
      fontStyle?: string;
    };
  }>;
}
