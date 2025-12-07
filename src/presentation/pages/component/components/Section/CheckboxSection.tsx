import { useState } from "react";
import { Checkbox } from "../../../../components/package/components/checkbox";
import { CodeBlock } from "../../../../components/package/components/codeblock";
import { FileCode } from "lucide-react";
import RightPanel from "../RightPanel";

const CheckboxSection = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(false);
  const [indeterminate, setIndeterminate] = useState(true);
  const [loading, setLoading] = useState(false);

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

  const basicUsageCode = `import { Checkbox } from "@khanhromvn/zenui";
import { useState } from "react";

function MyComponent() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <Checkbox
        checked={checked}
        onChange={setChecked}
        label="Basic Checkbox"
      />
      
      <Checkbox
        checked={true}
        label="Checked by default"
      />
      
      <Checkbox
        disabled={true}
        label="Disabled checkbox"
      />
    </div>
  );
}`;

  const sizeExampleCode = `import { Checkbox } from "@khanhromvn/zenui";

function SizeExample() {
  return (
    <div className="flex flex-col gap-4">
      <Checkbox
        size={80}
        label="Small Checkbox (80%)"
      />
      
      <Checkbox
        size={100}
        label="Default Checkbox (100%)"
      />
      
      <Checkbox
        size={120}
        label="Large Checkbox (120%)"
      />
      
      <Checkbox
        size={150}
        label="Extra Large Checkbox (150%)"
      />
    </div>
  );
}`;

  const stateExampleCode = `import { Checkbox } from "@khanhromvn/zenui";
import { useState } from "react";

function StateExample() {
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setChecked(true);
    }, 2000);
  };

  return (
    <div className="flex flex-col gap-4">
      <Checkbox
        checked={checked}
        onChange={setChecked}
        label="Controlled Checkbox"
      />
      
      <Checkbox
        indeterminate={indeterminate}
        label="Indeterminate State"
      />
      
      <Checkbox
        loading={loading}
        onChange={handleLoadingClick}
        label="Loading Checkbox"
      />
      
      <Checkbox
        disabled={true}
        checked={true}
        label="Disabled Checked"
      />
    </div>
  );
}`;

  const labelExampleCode = `import { Checkbox } from "@khanhromvn/zenui";

function LabelExample() {
  return (
    <div className="flex flex-col gap-4">
      <Checkbox
        label="Right side label (default)"
      />
      
      <Checkbox
        labelPosition="left"
        label="Left side label"
      />
      
      <Checkbox
        label={
          <div>
            <span className="font-semibold">Custom label</span>
            <span className="text-text-secondary text-sm"> with additional content</span>
          </div>
        }
      />
      
      <Checkbox
        label="No label provided"
      />
    </div>
  );
}`;

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setChecked3(true);
    }, 2000);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto">
        {/* ABOUT SECTION */}
        <section id="about" className="mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-3">
            Checkbox
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            A versatile checkbox component with support for standard checked
            states, indeterminate states, loading indicators, and flexible label
            positioning. Perfect for forms, settings, and selection interfaces
            with smooth animations and accessibility features.
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
            Here's a simple example to get you started with the Checkbox
            component.
          </p>

          {/* Live Demo */}
          <div className="bg-card-background border border-border-default rounded-lg p-8 mb-6">
            <div className="flex flex-col gap-4">
              <Checkbox
                checked={checked1}
                onChange={setChecked1}
                label="Basic Checkbox"
              />

              <Checkbox checked={true} label="Checked by default" />

              <Checkbox disabled={true} label="Disabled checkbox" />
            </div>
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

          {/* Size Variants */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Size Variants
            </h3>
            <p className="text-text-secondary mb-4">
              Control checkbox size using percentage scale from 50% to 200%.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <div className="flex flex-col gap-4">
                <Checkbox size={80} label="Small Checkbox (80%)" />

                <Checkbox size={100} label="Default Checkbox (100%)" />

                <Checkbox size={120} label="Large Checkbox (120%)" />

                <Checkbox size={150} label="Extra Large Checkbox (150%)" />
              </div>
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

          {/* State Variants */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              State Variants
            </h3>
            <p className="text-text-secondary mb-4">
              Handle different states including checked, indeterminate, loading,
              and disabled.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <div className="flex flex-col gap-4">
                <Checkbox
                  checked={checked2}
                  onChange={setChecked2}
                  label="Controlled Checkbox"
                />

                <Checkbox
                  indeterminate={indeterminate}
                  label="Indeterminate State"
                />

                <Checkbox
                  loading={loading}
                  checked={checked3}
                  onChange={handleLoadingDemo}
                  label="Loading Checkbox"
                />

                <Checkbox
                  disabled={true}
                  checked={true}
                  label="Disabled Checked"
                />
              </div>
            </div>

            <CodeBlock
              code={stateExampleCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/StateExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Label Positions */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Label Positions
            </h3>
            <p className="text-text-secondary mb-4">
              Customize label position and content with flexible options.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <div className="flex flex-col gap-4">
                <Checkbox label="Right side label (default)" />

                <Checkbox labelPosition="left" label="Left side label" />

                <Checkbox
                  label={
                    <div>
                      <span className="font-semibold">Custom label</span>
                      <span className="text-text-secondary text-sm">
                        {" "}
                        with additional content
                      </span>
                    </div>
                  }
                />

                <Checkbox />
              </div>
            </div>

            <CodeBlock
              code={labelExampleCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/LabelExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Checkbox Group Example */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Checkbox Group
            </h3>
            <p className="text-text-secondary mb-4">
              Create checkbox groups for multiple selection scenarios.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-text-primary mb-3">
                  Select your interests:
                </h4>
                <Checkbox label="Technology" />
                <Checkbox label="Design" />
                <Checkbox label="Business" />
                <Checkbox label="Art" />
                <Checkbox label="Science" />
              </div>
            </div>

            <CodeBlock
              code={`import { Checkbox } from "@khanhromvn/zenui";

function CheckboxGroupExample() {
  return (
    <div className="space-y-3">
      <h4 className="font-semibold text-text-primary mb-3">Select your interests:</h4>
      <Checkbox label="Technology" />
      <Checkbox label="Design" />
      <Checkbox label="Business" />
      <Checkbox label="Art" />
      <Checkbox label="Science" />
    </div>
  );
}`}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/CheckboxGroupExample.tsx"
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
            Complete list of props available for the Checkbox component.
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
                      size
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      number
                    </td>
                    <td className="px-6 py-4 text-text-secondary">100</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Checkbox size (percentage scale: 50-200)
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      checked
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">false</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Checked state
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      indeterminate
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">false</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Indeterminate state
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      label
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string | ReactNode
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Checkbox label
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      labelPosition
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      "left" | "right"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"right"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Label position
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
                      loading
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">false</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Loading state
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
                      onChange
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      (checked: boolean) =&gt; void
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Change event handler
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

export default CheckboxSection;
