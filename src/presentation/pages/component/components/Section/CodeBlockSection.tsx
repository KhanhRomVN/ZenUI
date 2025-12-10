import { CodeBlock } from "../../../../components/package/components/codeblock";
import { FileCode, Play, Download } from "lucide-react";
import RightPanel from "../RightPanel";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  HeaderCell,
} from "../../../../components/package/components/table";

const CodeBlockSection = () => {
  // Navigation sections for right panel
  const navigationSections = [
    { id: "about", label: "About" },
    { id: "install", label: "Install" },
    { id: "usage", label: "Usage" },
    { id: "examples", label: "Examples" },
    { id: "props", label: "Props" },
  ];

  const npmInstallCode = `npm install @khanhromvn/zenui`;

  const yarnInstallCode = `yarn add @khanhromvn/zenui`;

  const basicUsageCode = `import { CodeBlock } from "@khanhromvn/zenui";

function MyComponent() {
  return (
    <CodeBlock
       
      code={\`console.log("Hello World");\`}
      language="javascript"
      theme="vs-dark"
      showLineNumbers={true}
      readOnly={true}
    />
  );
}`;

  const exampleCode = `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test the function
console.log(fibonacci(10)); // Output: 55`;

  const tabsExampleCode = `import { CodeBlock } from "@khanhromvn/zenui";

function TabsExample() {
  return (
    <CodeBlock
       
      code=""
      language="javascript"
      theme="vs-dark"
      headerMode="tabs"
      headerIcon={<FileCode size={16} />}
      tabs={[
        {
          id: "js",
          label: "JavaScript",
          content: "console.log('Hello from JS');",
          language: "javascript",
        },
        {
          id: "ts",
          label: "TypeScript",
          content: "const message: string = 'Hello TS';",
          language: "typescript",
        },
      ]}
      activeTabId="js"
    />
  );
}`;

  const expandExampleCode = `import { CodeBlock } from "@khanhromvn/zenui";

function ExpandExample() {
  return (
    <CodeBlock
      code={longCodeContent}
       
      language="python"
      theme="vs-dark"
      expandConfig={{
        enabled: true,
        collapsedLines: 10,
        expandedLines: 30,
      }}
    />
  );
}`;

  return (
    <>
      <div className="max-w-4xl mx-auto">
        {/* ABOUT SECTION */}
        <section id="about" className="mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-3">
            Code Block
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            A powerful and feature-rich code editor component powered by Monaco
            Editor. Perfect for displaying code snippets, building online code
            editors, or creating interactive coding tutorials with syntax
            highlighting, multiple themes, and extensive customization options.
          </p>
        </section>

        {/* INSTALL SECTION */}
        <section id="install" className="mb-12">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Installation
          </h2>
          <CodeBlock
            code={npmInstallCode}
            language="bash"
            theme="vs-dark"
            showLineNumbers={false}
            showGutter={false}
            showLineHighlight={false}
            readOnly={true}
            headerMode="tabs"
            headerIcon={<FileCode size={16} />}
            tabs={[
              {
                id: "npm",
                label: "npm",
                content: npmInstallCode,
                language: "bash",
              },
              {
                id: "yarn",
                label: "yarn",
                content: yarnInstallCode,
                language: "bash",
              },
            ]}
            activeTabId="npm"
          />
        </section>

        {/* USAGE SECTION */}
        <section id="usage" className="mb-12">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Basic Usage
          </h2>
          <p className="text-text-secondary mb-6">
            Here's a simple example to get you started with the CodeBlock
            component.
          </p>

          {/* Code Example */}
          <CodeBlock
            code={basicUsageCode}
            language="typescript"
            theme="vs-dark"
            readOnly={true}
            headerMode="path"
            headerIcon={<FileCode size={16} />}
            filePath="src/components/BasicExample.tsx"
            showLineNumbers={true}
            showGutter={true}
            showLineHighlight={false}
          />

          {/* Live Demo */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Live Demo
            </h3>
            <CodeBlock
              code={exampleCode}
              language="javascript"
              theme="vs-dark"
              showLineNumbers={true}
              readOnly={true}
            />
          </div>
        </section>

        {/* EXAMPLES SECTION */}
        <section id="examples" className="mb-12">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Advanced Examples
          </h2>

          {/* Tabs Example */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              With Tabs
            </h3>
            <p className="text-text-secondary mb-4">
              Display multiple code snippets in tabs for easy comparison.
            </p>

            <CodeBlock
              code=""
              language="javascript"
              theme="vs-dark"
              headerMode="tabs"
              headerIcon={<FileCode size={16} />}
              tabs={[
                {
                  id: "js",
                  label: "JavaScript",
                  content: `console.log("Hello from JavaScript!");\n\nfunction greet(name) {\n  return \`Hello, \${name}!\`;\n}\n\ngreet("World");`,
                  language: "javascript",
                },
                {
                  id: "ts",
                  label: "TypeScript",
                  content: `const message: string = "Hello TypeScript";\n\ninterface User {\n  name: string;\n  age: number;\n}\n\nconst user: User = {\n  name: "Alice",\n  age: 25\n};`,
                  language: "typescript",
                },
                {
                  id: "py",
                  label: "Python",
                  content: `def greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("World"))`,
                  language: "python",
                },
              ]}
              activeTabId="js"
            />

            <div className="mt-4">
              <CodeBlock
                code={tabsExampleCode}
                language="typescript"
                theme="vs-dark"
                readOnly={true}
                headerMode="path"
                headerIcon={<FileCode size={16} />}
                filePath="src/components/TabsExample.tsx"
                showLineNumbers={true}
              />
            </div>
          </div>

          {/* Expand/Collapse Example */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              With Expand/Collapse
            </h3>
            <p className="text-text-secondary mb-4">
              Automatically collapse long code and allow users to expand it.
            </p>

            <CodeBlock
              code={`# Python Example - Data Processing

def process_data(data):
    """Process raw data and return cleaned results"""
    result = []
    
    for item in data:
        if item is not None:
            cleaned = item.strip().lower()
            result.append(cleaned)
    
    return result

# Example usage
raw_data = ["  Hello  ", "WORLD", None, "  Python  "]
processed = process_data(raw_data)
print(processed)

# Advanced filtering
def filter_by_length(items, min_length=3):
    return [item for item in items if len(item) >= min_length]

filtered = filter_by_length(processed)
print(filtered)`}
              language="python"
              theme="vs-dark"
              readOnly={true}
            />

            <div className="mt-4">
              <CodeBlock
                code={expandExampleCode}
                language="typescript"
                theme="vs-dark"
                readOnly={true}
                headerMode="path"
                headerIcon={<FileCode size={16} />}
                filePath="src/components/ExpandExample.tsx"
                showLineNumbers={true}
              />
            </div>
          </div>

          {/* Custom Toolbar Actions */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              With Custom Toolbar Actions
            </h3>
            <p className="text-text-secondary mb-4">
              Add custom buttons to the toolbar for running code or downloading
              files.
            </p>

            <CodeBlock
              code={`function calculateSum(a, b) {\n  return a + b;\n}\n\nconst result = calculateSum(5, 3);\nconsole.log(result); // Output: 8`}
              language="javascript"
              theme="vs-dark"
              readOnly={true}
              showLineNumbers={true}
              toolbarActions={[
                {
                  icon: <Play size={16} />,
                  label: "Run Code",
                  onClick: () => alert("Running code..."),
                },
                {
                  icon: <Download size={16} />,
                  label: "Download",
                  onClick: () => alert("Downloading..."),
                },
              ]}
            />
          </div>
        </section>

        {/* PROPS SECTION */}
        <section id="props" className="mb-12">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Props
          </h2>
          <p className="text-text-secondary mb-6">
            Complete list of props available for the CodeBlock component.
          </p>

          <div className="border border-table-border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-table-headerBg">
                  <HeaderCell showVerticalDivider showHorizontalDivider>
                    Prop
                  </HeaderCell>
                  <HeaderCell showVerticalDivider showHorizontalDivider>
                    Type
                  </HeaderCell>
                  <HeaderCell showVerticalDivider showHorizontalDivider>
                    Default
                  </HeaderCell>
                  <HeaderCell showVerticalDivider showHorizontalDivider>
                    Description
                  </HeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody className="bg-table-bodyBg">
                {/* CORE PROPS */}
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">code*</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">string</span>
                  </TableCell>
                  <TableCell showVerticalDivider>-</TableCell>
                  <TableCell showVerticalDivider>
                    Code content to display
                  </TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">language*</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">CodeBlockLanguage</span>
                  </TableCell>
                  <TableCell showVerticalDivider>-</TableCell>
                  <TableCell showVerticalDivider>
                    Programming language (javascript, typescript, python, etc.)
                  </TableCell>
                </TableRow>

                {/* BASIC CONFIGURATION */}
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">theme</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">
                      "vs-dark" | "vs-light" | "hc-black" | "hc-light"
                    </span>
                  </TableCell>
                  <TableCell showVerticalDivider>"vs-dark"</TableCell>
                  <TableCell showVerticalDivider>Editor theme</TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">width</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">string | number</span>
                  </TableCell>
                  <TableCell showVerticalDivider>"100%"</TableCell>
                  <TableCell showVerticalDivider>Width of code block</TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">size</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">number</span>
                  </TableCell>
                  <TableCell showVerticalDivider>100</TableCell>
                  <TableCell showVerticalDivider>
                    Scale percentage (100 = 100%, 120 = 120%)
                  </TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">title</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">string</span>
                  </TableCell>
                  <TableCell showVerticalDivider>-</TableCell>
                  <TableCell showVerticalDivider>Title of code block</TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">className</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">string</span>
                  </TableCell>
                  <TableCell showVerticalDivider>""</TableCell>
                  <TableCell showVerticalDivider>Custom CSS classes</TableCell>
                </TableRow>

                {/* HEADER CONFIGURATION */}
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">headerMode</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">
                      "tabs" | "path" | "none"
                    </span>
                  </TableCell>
                  <TableCell showVerticalDivider>"none"</TableCell>
                  <TableCell showVerticalDivider>Header display mode</TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">headerIcon</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">ReactNode</span>
                  </TableCell>
                  <TableCell showVerticalDivider>-</TableCell>
                  <TableCell showVerticalDivider>Icon in header</TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">filePath</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">string</span>
                  </TableCell>
                  <TableCell showVerticalDivider>-</TableCell>
                  <TableCell showVerticalDivider>
                    File path (when headerMode="path")
                  </TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">tabs</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">CodeBlockTab[]</span>
                  </TableCell>
                  <TableCell showVerticalDivider>[]</TableCell>
                  <TableCell showVerticalDivider>
                    Tabs array (when headerMode="tabs")
                  </TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">activeTabId</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">string</span>
                  </TableCell>
                  <TableCell showVerticalDivider>-</TableCell>
                  <TableCell showVerticalDivider>
                    Active tab ID (when headerMode="tabs")
                  </TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">onTabChange</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">
                      (tabId: string) =&gt; void
                    </span>
                  </TableCell>
                  <TableCell showVerticalDivider>-</TableCell>
                  <TableCell showVerticalDivider>
                    Callback when tab changes
                  </TableCell>
                </TableRow>

                {/* EDITOR BEHAVIOR */}
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">editable</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">boolean</span>
                  </TableCell>
                  <TableCell showVerticalDivider>false</TableCell>
                  <TableCell showVerticalDivider>Allow editing code</TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">showLineNumbers</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">boolean</span>
                  </TableCell>
                  <TableCell showVerticalDivider>true</TableCell>
                  <TableCell showVerticalDivider>Show line numbers</TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">showGutter</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">boolean</span>
                  </TableCell>
                  <TableCell showVerticalDivider>true</TableCell>
                  <TableCell showVerticalDivider>
                    Show gutter (line numbers area)
                  </TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">showLineHighlight</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">boolean</span>
                  </TableCell>
                  <TableCell showVerticalDivider>true</TableCell>
                  <TableCell showVerticalDivider>
                    Highlight current line
                  </TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">showMinimap</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">boolean</span>
                  </TableCell>
                  <TableCell showVerticalDivider>false</TableCell>
                  <TableCell showVerticalDivider>Show minimap</TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">wordWrap</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">
                      "on" | "off" | "wordWrapColumn" | "bounded"
                    </span>
                  </TableCell>
                  <TableCell showVerticalDivider>"off"</TableCell>
                  <TableCell showVerticalDivider>Word wrap mode</TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">fontSize</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">number</span>
                  </TableCell>
                  <TableCell showVerticalDivider>14</TableCell>
                  <TableCell showVerticalDivider>Font size</TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">fontFamily</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">string</span>
                  </TableCell>
                  <TableCell showVerticalDivider>-</TableCell>
                  <TableCell showVerticalDivider>Font family</TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">tabSize</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">number</span>
                  </TableCell>
                  <TableCell showVerticalDivider>2</TableCell>
                  <TableCell showVerticalDivider>Tab size</TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">insertSpaces</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">boolean</span>
                  </TableCell>
                  <TableCell showVerticalDivider>true</TableCell>
                  <TableCell showVerticalDivider>
                    Insert spaces instead of tabs
                  </TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">readOnly</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">boolean</span>
                  </TableCell>
                  <TableCell showVerticalDivider>false</TableCell>
                  <TableCell showVerticalDivider>Read-only mode</TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">autoFocus</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">boolean</span>
                  </TableCell>
                  <TableCell showVerticalDivider>false</TableCell>
                  <TableCell showVerticalDivider>
                    Auto focus when mounted
                  </TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">
                      highlightActiveLine
                    </span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">boolean</span>
                  </TableCell>
                  <TableCell showVerticalDivider>true</TableCell>
                  <TableCell showVerticalDivider>
                    Highlight active line
                  </TableCell>
                </TableRow>

                {/* TOOLBAR & ACTIONS */}
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">showToolbar</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">boolean</span>
                  </TableCell>
                  <TableCell showVerticalDivider>true</TableCell>
                  <TableCell showVerticalDivider>Show toolbar</TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">showCopyButton</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">boolean</span>
                  </TableCell>
                  <TableCell showVerticalDivider>true</TableCell>
                  <TableCell showVerticalDivider>Show copy button</TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">showLanguageTag</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">boolean</span>
                  </TableCell>
                  <TableCell showVerticalDivider>true</TableCell>
                  <TableCell showVerticalDivider>Show language tag</TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">toolbarActions</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">
                      CodeBlockToolbarAction[]
                    </span>
                  </TableCell>
                  <TableCell showVerticalDivider>[]</TableCell>
                  <TableCell showVerticalDivider>
                    Custom toolbar actions
                  </TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">onCopy</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">() =&gt; void</span>
                  </TableCell>
                  <TableCell showVerticalDivider>-</TableCell>
                  <TableCell showVerticalDivider>
                    Callback when copy succeeds
                  </TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">onChange</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">
                      (value: string) =&gt; void
                    </span>
                  </TableCell>
                  <TableCell showVerticalDivider>-</TableCell>
                  <TableCell showVerticalDivider>
                    Callback when code changes
                  </TableCell>
                </TableRow>
                {/* STYLING */}
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">padding</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">CodeBlockSpacing</span>
                  </TableCell>
                  <TableCell showVerticalDivider>-</TableCell>
                  <TableCell showVerticalDivider>
                    Padding configuration
                  </TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">margin</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">CodeBlockSpacing</span>
                  </TableCell>
                  <TableCell showVerticalDivider>-</TableCell>
                  <TableCell showVerticalDivider>
                    Margin configuration
                  </TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">border</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">CodeBlockBorder</span>
                  </TableCell>
                  <TableCell showVerticalDivider>-</TableCell>
                  <TableCell showVerticalDivider>
                    Border configuration
                  </TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">shadow</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">
                      CodeBlockShadow | CodeBlockShadow[]
                    </span>
                  </TableCell>
                  <TableCell showVerticalDivider>-</TableCell>
                  <TableCell showVerticalDivider>
                    Shadow configuration
                  </TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">backgroundColor</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">string</span>
                  </TableCell>
                  <TableCell showVerticalDivider>-</TableCell>
                  <TableCell showVerticalDivider>Background color</TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">
                      toolbarBackgroundColor
                    </span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">string</span>
                  </TableCell>
                  <TableCell showVerticalDivider>-</TableCell>
                  <TableCell showVerticalDivider>
                    Toolbar background color
                  </TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">borderRadius</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">string | number</span>
                  </TableCell>
                  <TableCell showVerticalDivider>8</TableCell>
                  <TableCell showVerticalDivider>Border radius</TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">opacity</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">number</span>
                  </TableCell>
                  <TableCell showVerticalDivider>-</TableCell>
                  <TableCell showVerticalDivider>Opacity (0-1)</TableCell>
                </TableRow>

                {/* ADVANCED OPTIONS */}
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">monacoOptions</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">any</span>
                  </TableCell>
                  <TableCell showVerticalDivider>-</TableCell>
                  <TableCell showVerticalDivider>
                    Monaco editor options (override defaults)
                  </TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">lineDecorations</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">
                      Array&lt;&#123;line, className?,
                      backgroundColor?&#125;&gt;
                    </span>
                  </TableCell>
                  <TableCell showVerticalDivider>-</TableCell>
                  <TableCell showVerticalDivider>Line decorations</TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">scrollToLine</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">number</span>
                  </TableCell>
                  <TableCell showVerticalDivider>-</TableCell>
                  <TableCell showVerticalDivider>
                    Scroll to line on mount
                  </TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">highlightedLines</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">number[]</span>
                  </TableCell>
                  <TableCell showVerticalDivider>-</TableCell>
                  <TableCell showVerticalDivider>Lines to highlight</TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">loading</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">boolean</span>
                  </TableCell>
                  <TableCell showVerticalDivider>false</TableCell>
                  <TableCell showVerticalDivider>Loading state</TableCell>
                </TableRow>
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">loadingComponent</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">ReactNode</span>
                  </TableCell>
                  <TableCell showVerticalDivider>-</TableCell>
                  <TableCell showVerticalDivider>
                    Custom loading component
                  </TableCell>
                </TableRow>

                {/* DEBUG */}
                <TableRow
                  showHorizontalDivider
                  className="hover:bg-table-hoverItemBodyBg"
                >
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">debug</span>
                  </TableCell>
                  <TableCell showVerticalDivider>
                    <span className="font-mono text-xs">boolean</span>
                  </TableCell>
                  <TableCell showVerticalDivider>false</TableCell>
                  <TableCell showVerticalDivider>Enable debug logs</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>
      </div>

      {/* Right Panel Navigation */}
      <RightPanel sections={navigationSections} />
    </>
  );
};

export default CodeBlockSection;
