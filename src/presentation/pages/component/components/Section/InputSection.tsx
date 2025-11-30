import { useState } from "react";
import { Input } from "../../../../components/package/input";
import { CodeBlock } from "../../../../components/package/codeblock";
import { FileCode, Search, Mail, Eye, User } from "lucide-react";
import RightPanel from "../RightPanel";

const InputSection = () => {
  const [searchValue, setSearchValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

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

  const basicUsageCode = `import { Input } from "@khanhromvn/zenui";
import { Search, Mail } from "lucide-react";

function MyComponent() {
  const [value, setValue] = useState("");

  return (
    <div className="space-y-4 max-w-md">
      <Input
        placeholder="Basic input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border-border-default"
      />
      
      <Input
        icon={<Search size={16} />}
        placeholder="Search..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border-border-default"
      />
      
      <Input
        icon={<Mail size={16} />}
        iconPosition="right"
        placeholder="Email address"
        type="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border-border-default"
      />
    </div>
  );
}`;

  const variantExampleCode = `import { Input } from "@khanhromvn/zenui";

function VariantExample() {
  return (
    <div className="space-y-4 max-w-md">
      <Input
        variant="outline"
        placeholder="Outline variant"
        className="border-border-default"
      />
      
      <Input
        variant="filled"
        placeholder="Filled variant"
        className="bg-input-background"
      />
      
      <Input
        variant="underline"
        placeholder="Underline variant"
        className="border-b-border-default"
      />
    </div>
  );
}`;

  const sizeExampleCode = `import { Input } from "@khanhromvn/zenui";

function SizeExample() {
  return (
    <div className="space-y-4 max-w-md">
      <Input
        size={80}
        placeholder="Small (80%)"
        className="border-border-default"
      />
      
      <Input
        size={100}
        placeholder="Default (100%)"
        className="border-border-default"
      />
      
      <Input
        size={120}
        placeholder="Large (120%)"
        className="border-border-default"
      />
    </div>
  );
}`;

  const featureExampleCode = `import { Input } from "@khanhromvn/zenui";
import { useState } from "react";

function FeatureExample() {
  const [password, setPassword] = useState("");
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-4 max-w-md">
      <Input
        type="password"
        placeholder="Password with toggle"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        showPasswordToggle={true}
        className="border-border-default"
      />
      
      <Input
        icon={<Search size={16} />}
        placeholder="Search with clear"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        showClearButton={true}
        className="border-border-default"
      />
      
      <Input
        placeholder="Disabled input"
        disabled={true}
        className="border-border-default"
      />
      
      <Input
        placeholder="Loading input"
        loading={true}
        className="border-border-default"
      />
    </div>
  );
}`;

  return (
    <>
      <div className="max-w-4xl mx-auto">
        {/* ABOUT SECTION */}
        <section id="about" className="mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-3">Input</h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            A versatile and customizable input component with support for icons,
            validation states, clear buttons, password visibility toggles, and
            multiple variants. Perfect for forms, search interfaces, and data
            entry across your application.
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
            Here's a simple example to get you started with the Input component.
          </p>

          {/* Live Demo */}
          <div className="bg-card-background border border-border-default rounded-lg p-8 mb-6 space-y-4 max-w-md">
            <Input
              placeholder="Basic input"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              className="border-border-default"
            />

            <Input
              icon={<Search size={16} />}
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="border-border-default"
            />

            <Input
              icon={<Mail size={16} />}
              iconPosition="right"
              placeholder="Email address"
              type="email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              className="border-border-default"
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

          {/* Variants */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Input Variants
            </h3>
            <p className="text-text-secondary mb-4">
              Choose from different input variants to match your design system.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 space-y-4 max-w-md">
              <Input
                variant="outline"
                placeholder="Outline variant"
                className="border-border-default"
              />

              <Input
                variant="filled"
                placeholder="Filled variant"
                className="bg-input-background"
              />

              <Input
                variant="underline"
                placeholder="Underline variant"
                className="border-b-border-default"
              />
            </div>

            <CodeBlock
              code={variantExampleCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/VariantExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Sizes */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Size Variants
            </h3>
            <p className="text-text-secondary mb-4">
              Control input size using percentage scale from 50% to 200%.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 space-y-4 max-w-md">
              <Input
                size={80}
                placeholder="Small (80%)"
                className="border-border-default"
              />

              <Input
                size={100}
                placeholder="Default (100%)"
                className="border-border-default"
              />

              <Input
                size={120}
                placeholder="Large (120%)"
                className="border-border-default"
              />
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

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Advanced Features
            </h3>
            <p className="text-text-secondary mb-4">
              Explore advanced features like password toggle, clear buttons, and
              states.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 space-y-4 max-w-md">
              <Input
                type="password"
                placeholder="Password with toggle"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                showPasswordToggle={true}
                className="border-border-default"
              />

              <Input
                icon={<Search size={16} />}
                placeholder="Search with clear"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                showClearButton={true}
                className="border-border-default"
              />

              <Input
                placeholder="Disabled input"
                disabled={true}
                className="border-border-default"
              />

              <Input
                placeholder="Loading input"
                loading={true}
                className="border-border-default"
              />
            </div>

            <CodeBlock
              code={featureExampleCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/FeatureExample.tsx"
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
            Complete list of props available for the Input component.
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
                      Input size (percentage scale: 50-200)
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      variant
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      "outline" | "filled" | "underline"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"outline"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Input variant style
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      type
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"text"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Input type (text, password, email, etc.)
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
                      value
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Input value
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
                      icon
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      LucideIcon | ReactNode
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Icon element
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      iconPosition
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      "left" | "right"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"left"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Icon position
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      showClearButton
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">false</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Show clear button when input has value
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      showPasswordToggle
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">false</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Show password visibility toggle (for type="password")
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
                      (e: ChangeEvent) =&gt; void
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Change event handler
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      onClear
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      () =&gt; void
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Clear button click handler
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

export default InputSection;
