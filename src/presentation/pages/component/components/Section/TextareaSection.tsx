import { useState } from "react";
import { Textarea } from "../../../../components/package/components/textarea";
import { CodeBlock } from "../../../../components/package/components/codeblock";
import { FileCode } from "lucide-react";
import RightPanel from "../RightPanel";

const TextareaSection = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");

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

  const basicUsageCode = `import { Textarea } from "@khanhromvn/zenui";
import { useState } from "react";

function MyComponent() {
  const [text, setText] = useState("");

  return (
    <Textarea
      value={text}
      onChange={setText}
      label="Description"
      placeholder="Enter your description..."
      rows={4}
    />
  );
}`;

  const autoResizeCode = `import { Textarea } from "@khanhromvn/zenui";
import { useState } from "react";

function AutoResizeExample() {
  const [text, setText] = useState("");

  return (
    <Textarea
      value={text}
      onChange={setText}
      label="Auto-resize Textarea"
      placeholder="Type to see auto-resize in action..."
      autoResize={true}
      minHeight="80px"
      maxHeight="300px"
    />
  );
}`;

  const characterCountCode = `import { Textarea } from "@khanhromvn/zenui";
import { useState } from "react";

function CharacterCountExample() {
  const [text, setText] = useState("");

  return (
    <Textarea
      value={text}
      onChange={setText}
      label="Tweet"
      placeholder="What's happening?"
      maxLength={280}
      showCount={true}
      helperText="Share your thoughts"
    />
  );
}`;

  const validationCode = `import { Textarea } from "@khanhromvn/zenui";
import { useState } from "react";

function ValidationExample() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleChange = (value: string) => {
    setText(value);
    if (value.length < 10) {
      setError("Description must be at least 10 characters");
    } else {
      setError("");
    }
  };

  return (
    <Textarea
      value={text}
      onChange={handleChange}
      label="Description"
      placeholder="Enter description..."
      error={error}
      required={true}
    />
  );
}`;

  return (
    <>
      <div className="max-w-4xl mx-auto">
        {/* ABOUT SECTION */}
        <section id="about" className="mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-3">
            Textarea
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            A versatile textarea component with auto-resize, character counting,
            validation, and rich styling options. Perfect for forms, comments,
            descriptions, and any multi-line text input needs.
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
            Here's a simple example to get you started with the Textarea
            component.
          </p>

          {/* Live Demo */}
          <div className="bg-card-background border border-border-default rounded-lg p-8 mb-6">
            <Textarea
              value={text1}
              onChange={setText1}
              label="Description"
              placeholder="Enter your description..."
              rows={4}
            />
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

          {/* Auto Resize */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Auto Resize
            </h3>
            <p className="text-text-secondary mb-4">
              Textarea automatically adjusts its height based on content.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <Textarea
                value={text2}
                onChange={setText2}
                label="Auto-resize Textarea"
                placeholder="Type to see auto-resize in action..."
                autoResize={true}
                minHeight="80px"
                maxHeight="300px"
              />
            </div>

            <CodeBlock
              code={autoResizeCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/AutoResizeExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Character Count */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Character Count & Limit
            </h3>
            <p className="text-text-secondary mb-4">
              Display character count with optional maximum length limit.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <Textarea
                value={text3}
                onChange={setText3}
                label="Tweet"
                placeholder="What's happening?"
                maxLength={280}
                showCount={true}
                helperText="Share your thoughts"
              />
            </div>

            <CodeBlock
              code={characterCountCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/CharacterCountExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Validation */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Validation & Error States
            </h3>
            <p className="text-text-secondary mb-4">
              Display validation errors and required field indicators.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <Textarea
                value={text4}
                onChange={(value) => {
                  setText4(value);
                }}
                label="Description"
                placeholder="Enter description..."
                error={
                  text4.length > 0 && text4.length < 10
                    ? "Description must be at least 10 characters"
                    : ""
                }
                required={true}
                helperText="Minimum 10 characters required"
              />
            </div>

            <CodeBlock
              code={validationCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/ValidationExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* States */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Different States
            </h3>
            <p className="text-text-secondary mb-4">
              Disabled and read-only states for various use cases.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <div className="flex flex-col gap-6">
                <Textarea
                  value="This textarea is disabled"
                  label="Disabled"
                  disabled={true}
                  rows={2}
                />

                <Textarea
                  value="This textarea is read-only. You can select and copy the text but cannot edit it."
                  label="Read-only"
                  readOnly={true}
                  rows={2}
                />

                <Textarea
                  label="No Resize"
                  placeholder="This textarea cannot be resized"
                  resize="none"
                  rows={3}
                />
              </div>
            </div>

            <CodeBlock
              code={`import { Textarea } from "@khanhromvn/zenui";

function StatesExample() {
  return (
    <div className="flex flex-col gap-6">
      <Textarea
        value="This textarea is disabled"
        label="Disabled"
        disabled={true}
        rows={2}
      />

      <Textarea
        value="This textarea is read-only"
        label="Read-only"
        readOnly={true}
        rows={2}
      />

      <Textarea
        label="No Resize"
        placeholder="Cannot be resized"
        resize="none"
        rows={3}
      />
    </div>
  );
}`}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/StatesExample.tsx"
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
            Complete list of props available for the Textarea component.
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
                      value
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">""</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Current value of the textarea
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
                      Callback when value changes
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      label
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Label for the textarea
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      placeholder
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Placeholder text
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      error
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Error message to display
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      helperText
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Helper text below textarea
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      maxLength
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      number
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Maximum character length
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      showCount
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">false</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Show character count
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      autoResize
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">false</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Auto resize based on content
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      minHeight
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"80px"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Min height for auto-resize
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      maxHeight
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"300px"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Max height for auto-resize
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      rows
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      number
                    </td>
                    <td className="px-6 py-4 text-text-secondary">4</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Number of rows
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      disabled
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">false</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Disabled state
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
                      Read-only state
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      required
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">false</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Required field
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      resize
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      "none" | "both" | "horizontal" | "vertical"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">
                      "vertical"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">
                      Resize behavior
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
                      Custom CSS class
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

export default TextareaSection;
