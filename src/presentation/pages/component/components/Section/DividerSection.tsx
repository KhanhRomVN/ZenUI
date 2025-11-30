import { Divider } from "../../../../components/package/divider";
import { CodeBlock } from "../../../../components/package/codeblock";
import { FileCode } from "lucide-react";
import RightPanel from "../RightPanel";

const DividerSection = () => {
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

  const basicUsageCode = `import { Divider } from "@khanhromvn/zenui";

function MyComponent() {
  return (
    <div>
      <p>Content above</p>
      <Divider />
      <p>Content below</p>
    </div>
  );
}`;

  const withTextCode = `import { Divider } from "@khanhromvn/zenui";

function TextExample() {
  return (
    <div>
      <p>Content above</p>
      <Divider text="Section Title" />
      <p>Content below</p>
    </div>
  );
}`;

  const verticalCode = `import { Divider } from "@khanhromvn/zenui";

function VerticalExample() {
  return (
    <div style={{ display: 'flex', height: '100px' }}>
      <p>Left content</p>
      <Divider orientation="vertical" />
      <p>Right content</p>
    </div>
  );
}`;

  return (
    <>
      <div className="max-w-4xl mx-auto">
        {/* ABOUT SECTION */}
        <section id="about" className="mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-3">Divider</h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            A flexible divider component to separate content with horizontal or
            vertical lines. Perfect for creating visual separation between
            sections, list items, or content groups with support for text,
            different styles, and customizable appearance.
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
            Here's a simple example to get you started with the Divider
            component.
          </p>

          {/* Live Demo */}
          <div className="bg-card-background border border-border-default rounded-lg p-8 mb-6">
            <p>Content above the divider</p>
            <Divider />
            <p>Content below the divider</p>
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

          {/* With Text */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              With Text
            </h3>
            <p className="text-text-secondary mb-4">
              Add text in the middle of the divider to create sections with
              titles.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <p>Content above</p>
              <Divider text="Section Title" />
              <p>Content below</p>
            </div>

            <CodeBlock
              code={withTextCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/TextExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Vertical Divider */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Vertical Divider
            </h3>
            <p className="text-text-secondary mb-4">
              Use vertical dividers in flex containers to separate content
              horizontally.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <div
                style={{
                  display: "flex",
                  height: "100px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p>Left content</p>
                <Divider orientation="vertical" />
                <p>Right content</p>
              </div>
            </div>

            <CodeBlock
              code={verticalCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/VerticalExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Variant Styles */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Line Variants
            </h3>
            <p className="text-text-secondary mb-4">
              Choose from different line styles: solid, dashed, or dotted.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 flex flex-col gap-4">
              <Divider variant="solid" text="Solid" />
              <Divider variant="dashed" text="Dashed" />
              <Divider variant="dotted" text="Dotted" />
            </div>

            <CodeBlock
              code={`import { Divider } from "@khanhromvn/zenui";

function VariantExample() {
  return (
    <div>
      <Divider variant="solid" text="Solid" />
      <Divider variant="dashed" text="Dashed" />
      <Divider variant="dotted" text="Dotted" />
    </div>
  );
}`}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/VariantExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Text Alignment */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Text Alignment
            </h3>
            <p className="text-text-secondary mb-4">
              Control the alignment of the text in horizontal dividers.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 flex flex-col gap-4">
              <Divider text="Left Aligned" textPosition="left" />
              <Divider text="Center Aligned" textPosition="center" />
              <Divider text="Right Aligned" textPosition="right" />
            </div>

            <CodeBlock
              code={`import { Divider } from "@khanhromvn/zenui";

function AlignmentExample() {
  return (
    <div>
      <Divider text="Left Aligned" textPosition="left" />
      <Divider text="Center Aligned" textPosition="center" />
      <Divider text="Right Aligned" textPosition="right" />
    </div>
  );
}`}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/AlignmentExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Custom Styling */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Custom Styling
            </h3>
            <p className="text-text-secondary mb-4">
              Customize the divider with different colors, sizes, and styles.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 flex flex-col gap-4">
              <Divider size={2} color="#3b82f6" text="Blue Thick" />
              <Divider
                size={1}
                color="#ef4444"
                variant="dashed"
                text="Red Dashed"
              />
              <Divider
                size={3}
                color="#10b981"
                variant="dotted"
                text="Green Dotted"
              />
            </div>

            <CodeBlock
              code={`import { Divider } from "@khanhromvn/zenui";

function CustomExample() {
  return (
    <div>
      <Divider size={2} color="#3b82f6" text="Blue Thick" />
      <Divider size={1} color="#ef4444" variant="dashed" text="Red Dashed" />
      <Divider size={3} color="#10b981" variant="dotted" text="Green Dotted" />
    </div>
  );
}`}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/CustomExample.tsx"
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
            Complete list of props available for the Divider component.
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
                      orientation
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      "horizontal" | "vertical"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">
                      "horizontal"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">
                      Divider orientation
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      variant
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      "solid" | "dashed" | "dotted"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"solid"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Line style variant
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      size
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      number
                    </td>
                    <td className="px-6 py-4 text-text-secondary">1</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Line thickness in pixels
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      color
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">
                      "border-default"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">
                      Line color
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      text
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      ReactNode
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Text content (horizontal only)
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      textPosition
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      "left" | "center" | "right"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"center"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Text alignment (horizontal only)
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
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      style
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      CSSProperties
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Custom styles
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

export default DividerSection;
