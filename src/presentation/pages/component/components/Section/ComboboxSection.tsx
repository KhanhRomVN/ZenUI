import { useState } from "react";
import { Combobox } from "../../../../components/package/combobox";
import { CodeBlock } from "../../../../components/package/codeblock";
import { FileCode, User, Mail, MapPin, Users } from "lucide-react";
import RightPanel from "../RightPanel";

const ComboboxSection = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [loading, setLoading] = useState(false);

  // Navigation sections for right panel
  const navigationSections = [
    { id: "about", label: "About" },
    { id: "install", label: "Install" },
    { id: "usage", label: "Usage" },
    { id: "examples", label: "Examples" },
    { id: "props", label: "Props" },
  ];

  // Sample data
  const countries = [
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
    { value: "au", label: "Australia" },
    { value: "de", label: "Germany" },
    { value: "fr", label: "France" },
    { value: "jp", label: "Japan" },
    { value: "kr", label: "South Korea" },
  ];

  const users = [
    { value: "1", label: "John Doe", icon: <User size={16} /> },
    { value: "2", label: "Jane Smith", icon: <User size={16} /> },
    { value: "3", label: "Bob Johnson", icon: <User size={16} /> },
    { value: "4", label: "Alice Brown", icon: <User size={16} /> },
    { value: "5", label: "Charlie Wilson", icon: <User size={16} /> },
  ];

  const npmInstallCode = `npm install @khanhromvn/zenui`;

  const yarnInstallCode = `yarn add @khanhromvn/zenui`;

  const basicUsageCode = `import { Combobox } from "@khanhromvn/zenui";

function MyComponent() {
  const countries = [
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
    // ... more options
  ];

  return (
    <Combobox
      options={countries}
      placeholder="Select a country"
      onChange={(value, option) => console.log("Selected:", value, option)}
    />
  );
}`;

  const sizeExampleCode = `import { Combobox } from "@khanhromvn/zenui";

function SizeExample() {
  return (
    <div className="space-y-4">
      <Combobox
        size="sm"
        options={countries}
        placeholder="Small combobox"
      />
      <Combobox
        size="md"
        options={countries}
        placeholder="Medium combobox (default)"
      />
      <Combobox
        size="lg"
        options={countries}
        placeholder="Large combobox"
      />
    </div>
  );
}`;

  const variantExampleCode = `import { Combobox } from "@khanhromvn/zenui";

function VariantExample() {
  return (
    <div className="space-y-4">
      <Combobox
        variant="outline"
        options={countries}
        placeholder="Outline variant"
      />
      <Combobox
        variant="filled"
        options={countries}
        placeholder="Filled variant"
      />
      <Combobox
        variant="underline"
        options={countries}
        placeholder="Underline variant"
      />
    </div>
  );
}`;

  const stateExampleCode = `import { Combobox } from "@khanhromvn/zenui";
import { useState } from "react";

function StateExample() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="space-y-4">
      <Combobox
        disabled={true}
        options={countries}
        placeholder="Disabled combobox"
      />
      <Combobox
        loading={loading}
        options={countries}
        placeholder="Loading combobox"
      />
      <Combobox
        error={true}
        errorMessage="Please select a valid option"
        options={countries}
        placeholder="Error state"
      />
      <Combobox
        success={true}
        options={countries}
        placeholder="Success state"
      />
    </div>
  );
}`;

  const handleAsyncSearch = (query: string) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto">
        {/* ABOUT SECTION */}
        <section id="about" className="mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-3">
            Combobox
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            A powerful and accessible combobox component that combines a text
            input with a dropdown list. Perfect for selecting options from a
            large list with search and filtering capabilities.
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
            Here's a simple example to get you started with the Combobox
            component.
          </p>

          {/* Live Demo */}
          <div className="bg-card-background border border-border-default rounded-lg p-8 mb-6">
            <div className="max-w-md mx-auto">
              <Combobox
                options={countries}
                placeholder="Select a country"
                onChange={(value, option) => {
                  setSelectedValue(value);
                  console.log("Selected:", value, option);
                }}
              />
              {selectedValue && (
                <p className="mt-2 text-sm text-text-secondary">
                  Selected: {selectedValue}
                </p>
              )}
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
              Choose from small, medium, and large size variants.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <div className="max-w-md mx-auto space-y-4">
                <Combobox
                  size="sm"
                  options={countries}
                  placeholder="Small combobox"
                />
                <Combobox
                  size="md"
                  options={countries}
                  placeholder="Medium combobox (default)"
                />
                <Combobox
                  size="lg"
                  options={countries}
                  placeholder="Large combobox"
                />
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

          {/* Style Variants */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Style Variants
            </h3>
            <p className="text-text-secondary mb-4">
              Different visual styles to match your design system.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <div className="max-w-md mx-auto space-y-4">
                <Combobox
                  variant="outline"
                  options={countries}
                  placeholder="Outline variant"
                />
                <Combobox
                  variant="filled"
                  options={countries}
                  placeholder="Filled variant"
                />
                <Combobox
                  variant="underline"
                  options={countries}
                  placeholder="Underline variant"
                />
              </div>
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

          {/* Different States */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Different States
            </h3>
            <p className="text-text-secondary mb-4">
              Handle various states like disabled, loading, error, and success.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <div className="max-w-md mx-auto space-y-4">
                <Combobox
                  disabled={true}
                  options={countries}
                  placeholder="Disabled combobox"
                />
                <Combobox
                  loading={loading}
                  options={countries}
                  placeholder="Loading combobox"
                />
                <Combobox
                  error={true}
                  errorMessage="Please select a valid option"
                  options={countries}
                  placeholder="Error state"
                />
                <Combobox
                  success={true}
                  options={countries}
                  placeholder="Success state"
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

          {/* With Icons */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              With Icons
            </h3>
            <p className="text-text-secondary mb-4">
              Add icons to options for better visual context.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <div className="max-w-md mx-auto">
                <Combobox
                  options={users}
                  placeholder="Select a user"
                  renderOption={(option) => (
                    <div className="flex items-center">
                      {option.icon}
                      <span className="ml-2">{option.label}</span>
                    </div>
                  )}
                />
              </div>
            </div>

            <CodeBlock
              code={`import { Combobox } from "@khanhromvn/zenui";
import { User } from "lucide-react";

function IconExample() {
  const users = [
    { value: "1", label: "John Doe", icon: <User size={16} /> },
    { value: "2", label: "Jane Smith", icon: <User size={16} /> },
    // ... more users
  ];

  return (
    <Combobox
      options={users}
      placeholder="Select a user"
      renderOption={(option) => (
        <div className="flex items-center">
          {option.icon}
          <span className="ml-2">{option.label}</span>
        </div>
      )}
    />
  );
}`}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/IconExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Async Search */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Async Search
            </h3>
            <p className="text-text-secondary mb-4">
              Implement async search for large datasets or API calls.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <div className="max-w-md mx-auto">
                <Combobox
                  options={countries}
                  placeholder="Search countries..."
                  onSearch={handleAsyncSearch}
                  loading={loading}
                  searchable={true}
                />
              </div>
            </div>

            <CodeBlock
              code={`import { Combobox } from "@khanhromvn/zenui";
import { useState } from "react";

function AsyncExample() {
  const [loading, setLoading] = useState(false);

  const handleSearch = (query: string) => {
    setLoading(true);
    // Make API call here
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <Combobox
      options={countries}
      placeholder="Search countries..."
      onSearch={handleSearch}
      loading={loading}
      searchable={true}
    />
  );
}`}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/AsyncExample.tsx"
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
            Complete list of props available for the Combobox component.
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
                      options*
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      ComboboxOption[]
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Array of options
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
                      Selected value
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      placeholder
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">
                      "Select an option"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">
                      Placeholder text
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
                      error
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">false</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Error state
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      errorMessage
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Error message text
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      size
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      "sm" | "md" | "lg"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"md"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Size variant
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
                      Style variant
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      clearable
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">true</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Show clear button
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      searchable
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">true</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Enable search functionality
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      onChange
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      (value: string, option: ComboboxOption) =&gt; void
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Change event handler
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      onSearch
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      (query: string) =&gt; void
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Search event handler
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      renderOption
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      (option: ComboboxOption) =&gt; ReactNode
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Custom option renderer
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

export default ComboboxSection;
