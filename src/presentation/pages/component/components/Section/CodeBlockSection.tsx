import { useState } from "react";
import { CodeBlock } from "../../../../components/package/codeblock";
import { FileCode, Play, Download } from "lucide-react";
import RightPanel from "../RightPanel";

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

          <div className="bg-card-background border border-border-default rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-input-background">
                  <tr>
                    <th className="px-6 py-4 text-left text-text-primary font-semibold">
                      Prop
                    </th>
                    <th className="px-6 py-4 text-left text-text-primary font-semibold">
                      Type
                    </th>
                    <th className="px-6 py-4 text-left text-text-primary font-semibold">
                      Default
                    </th>
                    <th className="px-6 py-4 text-left text-text-primary font-semibold">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-default">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      code*
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Code content to display
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      language*
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      CodeBlockLanguage
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Programming language
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      theme
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      "vs-dark" | "vs-light" | "hc-black" | "hc-light"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"vs-dark"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Editor theme
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      width
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string | number
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"100%"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Width of code block
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      showLineNumbers
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">true</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Show line numbers
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      readOnly
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">false</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Read-only mode
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      editable
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">false</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Allow editing code
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      showCopyButton
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">true</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Show copy button
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      headerMode
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      "tabs" | "path" | "none"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"none"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Header display mode
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      headerIcon
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      ReactNode
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Icon in header
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      filePath
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      File path (when headerMode="path")
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      tabs
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      CodeBlockTab[]
                    </td>
                    <td className="px-6 py-4 text-text-secondary">[]</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Tabs (when headerMode="tabs")
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      expandConfig
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      CodeBlockExpandConfig
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Expand/collapse configuration
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      toolbarActions
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      CodeBlockToolbarAction[]
                    </td>
                    <td className="px-6 py-4 text-text-secondary">[]</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Custom toolbar actions
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      onChange
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      (value: string) =&gt; void
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Callback when code changes
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      {/* Right Panel Navigation */}
      <RightPanel sections={navigationSections} />
    </>
  );
};

export default CodeBlockSection;
