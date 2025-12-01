import { useState } from "react";
import { Input } from "../../../../components/package/input";
import { CodeBlock } from "../../../../components/package/codeblock";
import {
  FileCode,
  Search,
  Mail,
  Eye,
  User,
  X,
  ChevronDown,
} from "lucide-react";
import RightPanel from "../RightPanel";
import { Combobox } from "../../../../components/package/combobox";

const InputSection = () => {
  const [searchValue, setSearchValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [tags, setTags] = useState(["React", "TypeScript"]);
  const [comboboxOpen, setComboboxOpen] = useState(false);

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
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "400px" }}>
      <Input
        placeholder="Basic input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      
      <Input
        leftIcon={<Search size={16} />}
        placeholder="Search..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      
      <Input
        leftIcon={<Mail size={16} />}
        placeholder="Email address"
        type="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}`;

  const sizeExampleCode = `import { Input } from "@khanhromvn/zenui";

function SizeExample() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "400px" }}>
      <Input
        size={80}
        placeholder="Small (80%)"
      />
      
      <Input
        size={100}
        placeholder="Default (100%)"
      />
      
      <Input
        size={120}
        placeholder="Large (120%)"
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
          <div className="bg-card-background border border-border-default rounded-md p-8 mb-6 space-y-4">
            <Input
              placeholder="Basic input"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              className="bg-input-background border border-input-border hover:border-input-borderHover focus:border-input-borderFocus"
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

          {/* Combobox Type */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Combobox Input
            </h3>
            <p className="text-text-secondary mb-4">
              Searchable dropdown with autocomplete functionality. Perfect for
              selecting from large lists of options.
            </p>

            <div className="bg-card-background border border-border-default rounded-md p-8 mb-6 space-y-4">
              <Input
                type="combobox"
                placeholder="Search countries..."
                leftIcon={<Search size={16} />}
                rightIcon={[
                  searchValue && (
                    <X size={16} onClick={() => setSearchValue("")} />
                  ),
                  <ChevronDown size={16} />,
                ].filter(Boolean)}
                value={searchValue}
                popoverOpen={comboboxOpen}
                onChange={(e) => setSearchValue(e.target.value)}
                onPopoverOpenChange={setComboboxOpen}
                className="bg-input-background border border-input-border hover:border-input-borderHover focus:border-input-borderFocus"
                popoverContent={
                  <Combobox
                    searchQuery={searchValue}
                    options={[
                      { value: "us", label: "United States" },
                      { value: "uk", label: "United Kingdom" },
                      { value: "ca", label: "Canada" },
                      { value: "au", label: "Australia" },
                      { value: "de", label: "Germany" },
                      { value: "fr", label: "France" },
                      { value: "jp", label: "Japan" },
                      { value: "kr", label: "South Korea" },
                      { value: "vn", label: "Vietnam" },
                      { value: "th", label: "Thailand" },
                    ]}
                    value={searchValue}
                    onChange={(value, option) => {
                      setSearchValue(option.label);
                      setComboboxOpen(false);
                      console.log("Selected:", value);
                    }}
                    searchable
                    backgroundClassName="bg-dropdown-background"
                    borderClassName="border-dropdown-border"
                    itemHoverClassName="bg-dropdown-itemHover"
                  />
                }
              />
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
