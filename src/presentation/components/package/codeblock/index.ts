export { default as CodeBlock } from "./CodeBlock";
export type {
  CodeBlockProps,
  CodeBlockLanguage,
  CodeBlockTheme,
  CodeBlockSize,
  CodeBlockSpacing,
  CodeBlockBorder,
  CodeBlockShadow,
  CodeBlockToolbarAction,
  CodeBlockState,
  CodeBlockToolbarConfig,
  CodeBlockHeaderMode,
  CodeBlockTab,
} from "./CodeBlock.types";
export {
  parseSize,
  parseSpacing,
  parseBorder,
  parseShadow,
  getScaleFromSize,
  getMonacoLanguage,
  getLanguageDisplayName,
  copyToClipboard,
  getDefaultMonacoOptions,
  getContainerStyle,
  countLines,
} from "./CodeBlock.utils";
