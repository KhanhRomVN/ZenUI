import { useState } from "react";
import { Badge } from "../../../../components/package/components/badge";
import { CodeBlock } from "../../../../components/package/components/codeblock";
import { FileCode, Bell, CheckCircle, AlertTriangle } from "lucide-react";
import RightPanel from "../RightPanel";

const BadgeSection = () => {
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

  const basicUsageCode = `import { Badge } from "@khanhromvn/zenui";

function MyComponent() {
  return (
    <div className="flex gap-4 items-center flex-wrap">
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}`;

  const dotExampleCode = `import { Badge } from "@khanhromvn/zenui";
import { Bell, CheckCircle, AlertTriangle } from "lucide-react";

function DotExample() {
  return (
    <div className="flex gap-4 items-center flex-wrap">
      <Badge variant="default" dot>
        Default
      </Badge>
      <Badge variant="primary" dot>
        Primary
      </Badge>
      <Badge variant="success" dot>
        Success
      </Badge>
      <Badge variant="warning" dot dotColor="#f59e0b">
        Custom Dot
      </Badge>
      <Badge variant="error" dot>
        <AlertTriangle size={12} />
        With Icon
      </Badge>
    </div>
  );
}`;

  const sizeExampleCode = `import { Badge } from "@khanhromvn/zenui";

function SizeExample() {
  return (
    <div className="flex gap-4 items-center flex-wrap">
      <Badge size={80} variant="primary">
        Small (80%)
      </Badge>
      <Badge size={100} variant="primary">
        Default (100%)
      </Badge>
      <Badge size={120} variant="primary">
        Large (120%)
      </Badge>
      <Badge size={150} variant="primary">
        Extra Large (150%)
      </Badge>
    </div>
  );
}`;

  return (
    <>
      <div className="max-w-4xl mx-auto">
        {/* ABOUT SECTION */}
        <section id="about" className="mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-3">Badge</h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            A flexible badge component for displaying status, categories, or
            counts. Supports multiple variants, sizes, and dot indicators for
            various use cases like notifications, labels, and status markers.
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
            Here's a simple example to get you started with the Badge component.
          </p>

          {/* Live Demo */}
          <div className="bg-card-background border border-border-default rounded-lg p-8 mb-6 flex gap-4 items-center flex-wrap">
            <Badge variant="default">Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>

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
        </section>

        {/* EXAMPLES SECTION */}
        <section id="examples" className="mb-12">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Advanced Examples
          </h2>

          {/* Dot Indicator */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Dot Indicator
            </h3>
            <p className="text-text-secondary mb-4">
              Add dot indicators to badges for status visualization.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 flex gap-4 items-center flex-wrap">
              <Badge variant="default" dot>
                Default
              </Badge>
              <Badge variant="primary" dot>
                Primary
              </Badge>
              <Badge variant="success" dot>
                Success
              </Badge>
              <Badge variant="warning" dot dotColor="#f59e0b">
                Custom Dot
              </Badge>
              <Badge variant="error" dot>
                <AlertTriangle size={12} />
                With Icon
              </Badge>
            </div>

            <CodeBlock
              code={dotExampleCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/DotExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Size Variants */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Size Variants
            </h3>
            <p className="text-text-secondary mb-4">
              Control badge size using percentage scale from 50% to 200%.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 flex gap-4 items-center flex-wrap">
              <Badge size={80} variant="primary">
                Small (80%)
              </Badge>
              <Badge size={100} variant="primary">
                Default (100%)
              </Badge>
              <Badge size={120} variant="primary">
                Large (120%)
              </Badge>
              <Badge size={150} variant="primary">
                Extra Large (150%)
              </Badge>
            </div>

            <CodeBlock
              code={sizeExampleCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/SizeExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Usage with Avatars */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Real-world Usage
            </h3>
            <p className="text-text-secondary mb-4">
              Common use cases for badges in applications.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 flex flex-col gap-6">
              {/* Notification Badges */}
              <div className="flex gap-6 items-center flex-wrap">
                <div className="flex items-center gap-2">
                  <Bell size={20} />
                  <Badge variant="error" dot>
                    Notifications
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <Badge variant="success">Active</Badge>
                </div>
                <Badge variant="outline">Category: Technology</Badge>
              </div>

              {/* Status Indicators */}
              <div className="flex gap-4 items-center flex-wrap">
                <Badge variant="success">Completed</Badge>
                <Badge variant="warning">Pending</Badge>
                <Badge variant="error">Failed</Badge>
                <Badge variant="default">Draft</Badge>
              </div>

              {/* Count Badges */}
              <div className="flex gap-4 items-center flex-wrap">
                <Badge variant="primary">42 Messages</Badge>
                <Badge variant="secondary">7 Updates</Badge>
                <Badge variant="outline">99+</Badge>
              </div>
            </div>

            <CodeBlock
              code={`import { Badge } from "@khanhromvn/zenui";
import { Bell, CheckCircle } from "lucide-react";

function RealWorldExample() {
  return (
    <div className="flex flex-col gap-6">
      {/* Notification Badges */}
      <div className="flex gap-6 items-center flex-wrap">
        <div className="flex items-center gap-2">
          <Bell size={20} />
          <Badge variant="error" dot>
            Notifications
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle size={20} />
          <Badge variant="success">Active</Badge>
        </div>
        <Badge variant="outline">Category: Technology</Badge>
      </div>

      {/* Status Indicators */}
      <div className="flex gap-4 items-center flex-wrap">
        <Badge variant="success">Completed</Badge>
        <Badge variant="warning">Pending</Badge>
        <Badge variant="error">Failed</Badge>
        <Badge variant="default">Draft</Badge>
      </div>

      {/* Count Badges */}
      <div className="flex gap-4 items-center flex-wrap">
        <Badge variant="primary">42 Messages</Badge>
        <Badge variant="secondary">7 Updates</Badge>
        <Badge variant="outline">99+</Badge>
      </div>
    </div>
  );
}`}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/RealWorldExample.tsx"
              showLineNumbers={true}
            />
          </div>
        </section>

        {/* PROPS SECTION */}
        <section id="props" className="mb-12">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Props
          </h2>
          <p className="text-text-secondary mb-6">
            Complete list of props available for the Badge component.
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
                      children
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      ReactNode
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Badge content
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      variant
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      "default" | "primary" | "secondary" | "success" |
                      "warning" | "error" | "outline"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"default"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Badge variant style
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      size
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      number
                    </td>
                    <td className="px-6 py-4 text-text-secondary">100</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Badge size (percentage scale: 50-200)
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      dot
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">false</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Show dot indicator
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      dotColor
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Custom dot color
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      className
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">""</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Custom CSS classes
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

export default BadgeSection;
