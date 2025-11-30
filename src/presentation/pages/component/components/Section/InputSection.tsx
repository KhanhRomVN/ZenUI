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
          <div className="bg-card-background border border-border-default rounded-lg p-8 mb-6 space-y-4 ">
            <Input
              placeholder="Basic input"
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
          {/* Combobox Type */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Combobox Input
            </h3>
            <p className="text-text-secondary mb-4">
              Searchable dropdown with autocomplete functionality. Perfect for
              selecting from large lists of options.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 space-y-4">
              <Input
                type="combobox"
                placeholder="Search countries..."
                leftIcon={<Search size={16} />}
                comboboxOptions={[
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
                onChange={(e) => {
                  setSearchValue(e.target.value);
                  console.log("Selected:", e.target.value);
                }}
              />
            </div>

            <CodeBlock
              code={`import { Input } from "@khanhromvn/zenui";
import { Search } from "lucide-react";

function ComboboxExample() {
  return (
    <div className="space-y-4 max-w-md">
      <Input
        type="combobox"
        placeholder="Search countries..."
        comboboxOptions={[
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
        onChange={(e) => console.log("Selected:", e.target.value)}
      />
      
      <Input
        type="combobox"
        placeholder="Select a programming language..."
        leftIcon={<Search size={16} />}
        comboboxOptions={[
          { value: "javascript", label: "JavaScript" },
          { value: "typescript", label: "TypeScript" },
          { value: "python", label: "Python" },
          { value: "java", label: "Java" },
          { value: "csharp", label: "C#" },
          { value: "go", label: "Go" },
          { value: "rust", label: "Rust" },
          { value: "kotlin", label: "Kotlin" },
        ]}
        onChange={(e) => console.log("Selected:", e.target.value)}
      />
    </div>
  );
}`}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/ComboboxExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Combobox Advanced - All Features */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Combobox Advanced - All Features
            </h3>
            <p className="text-text-secondary mb-4">
              Complete showcase of combobox capabilities: create new options,
              custom icons, disabled items, rich content formatting, and custom
              empty states. This example demonstrates all available features in
              a single powerful input.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Advanced Team Member Selector
                </label>
                <Input
                  type="combobox"
                  placeholder="Search or invite team members..."
                  leftIcon={<User size={16} />}
                  comboboxOptions={[
                    {
                      value: "john",
                      label: "John Doe - Developer",
                      icon: (
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-semibold">
                          JD
                        </div>
                      ),
                    },
                    {
                      value: "jane",
                      label: "Jane Smith - Designer",
                      icon: (
                        <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-semibold">
                          JS
                        </div>
                      ),
                    },
                    {
                      value: "bob",
                      label: "Bob Johnson - Manager",
                      icon: (
                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-semibold">
                          BJ
                        </div>
                      ),
                      disabled: true,
                    },
                    {
                      value: "alice",
                      label: "Alice Wong - Product Owner",
                      icon: (
                        <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white text-xs font-semibold">
                          AW
                        </div>
                      ),
                    },
                    {
                      value: "david",
                      label: "David Chen - QA Engineer",
                      icon: (
                        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-semibold">
                          DC
                        </div>
                      ),
                      disabled: true,
                    },
                    {
                      value: "emma",
                      label: "Emma Wilson - UX Researcher",
                      icon: (
                        <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-semibold">
                          EW
                        </div>
                      ),
                    },
                  ]}
                  comboboxCreatable={true}
                  comboboxCreateMessage='✉️ Invite "%s" to join the team'
                  comboboxEmptyMessage="🔍 No team members found. Type to invite new members!"
                  onComboboxCreate={(value) => {
                    console.log("Sending invitation to:", value);
                    alert(`Invitation sent to: ${value}`);
                  }}
                  onChange={(e) => {
                    console.log("Selected member:", e.target.value);
                  }}
                />
                <p className="text-xs text-text-tertiary mt-2">
                  💡 Features: Search, create new options, custom avatars,
                  disabled states, and rich formatting
                </p>
              </div>
            </div>

            <CodeBlock
              code={`import { Input } from "@khanhromvn/zenui";
import { User } from "lucide-react";
import { useState } from "react";

function ComboboxAdvancedExample() {
  const [selectedMember, setSelectedMember] = useState("");

  const handleInvite = (email: string) => {
    console.log("Sending invitation to:", email);
    // API call to send invitation
    alert(\`Invitation sent to: \${email}\`);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMember(e.target.value);
    console.log("Selected member:", e.target.value);
  };

  return (
    <div className="max-w-md">
      <label className="block text-sm font-medium mb-2">
        Advanced Team Member Selector
      </label>
      <Input
        type="combobox"
        placeholder="Search or invite team members..."
        leftIcon={<User size={16} />}
        comboboxOptions={[
          {
            value: "john",
            label: "John Doe - Developer",
            icon: (
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-semibold">
                JD
              </div>
            ),
          },
          {
            value: "jane",
            label: "Jane Smith - Designer",
            icon: (
              <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-semibold">
                JS
              </div>
            ),
          },
          {
            value: "bob",
            label: "Bob Johnson - Manager",
            icon: (
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-semibold">
                BJ
              </div>
            ),
            disabled: true, // Currently unavailable
          },
          {
            value: "alice",
            label: "Alice Wong - Product Owner",
            icon: (
              <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white text-xs font-semibold">
                AW
              </div>
            ),
          },
          {
            value: "david",
            label: "David Chen - QA Engineer",
            icon: (
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-semibold">
                DC
              </div>
            ),
            disabled: true, // On vacation
          },
          {
            value: "emma",
            label: "Emma Wilson - UX Researcher",
            icon: (
              <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-semibold">
                EW
              </div>
            ),
          },
        ]}
        comboboxCreatable={true}
        comboboxCreateMessage='✉️ Invite "%s" to join the team'
        comboboxEmptyMessage="🔍 No team members found. Type to invite new members!"
        onComboboxCreate={handleInvite}
        onChange={handleSelect}
      />
      <p className="text-xs text-gray-500 mt-2">
        💡 Features: Search, create new options, custom avatars, disabled
        states, and rich formatting
      </p>
    </div>
  );
}

export default ComboboxAdvancedExample;`}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/ComboboxAdvancedExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Calendar Type */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Calendar Input
            </h3>
            <p className="text-text-secondary mb-4">
              Date and time picker with calendar view. Supports date-only,
              time-only, or datetime modes with customizable formats.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Date and Time
                </label>
                <Input
                  type="calendar"
                  placeholder="Select date and time..."
                  datePickerProps={{
                    mode: "datetime",
                    dateFormat: "MM/dd/yyyy",
                    timeFormat: "HH:mm",
                    showTimePicker: true,
                  }}
                  onChange={(e) =>
                    console.log("Selected datetime:", e.target.value)
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Date Only
                </label>
                <Input
                  type="calendar"
                  placeholder="Select date..."
                  datePickerProps={{
                    mode: "date",
                    dateFormat: "MM/dd/yyyy",
                  }}
                  onChange={(e) =>
                    console.log("Selected date:", e.target.value)
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Time Only
                </label>
                <Input
                  type="calendar"
                  placeholder="Select time..."
                  datePickerProps={{
                    mode: "time",
                    timeFormat: "HH:mm",
                  }}
                  onChange={(e) =>
                    console.log("Selected time:", e.target.value)
                  }
                />
              </div>
            </div>

            <CodeBlock
              code={`import { Input } from "@khanhromvn/zenui";

function CalendarExample() {
  return (
    <div className="space-y-4 max-w-md">
      {/* Date and Time */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Date and Time
        </label>
        <Input
          type="calendar"
          placeholder="Select date and time..."
          datePickerProps={{
            mode: "datetime",
            dateFormat: "MM/dd/yyyy",
            timeFormat: "HH:mm",
            showTimePicker: true,
          }}
          onChange={(e) => console.log("Selected datetime:", e.target.value)}
        />
      </div>

      {/* Date Only */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Date Only
        </label>
        <Input
          type="calendar"
          placeholder="Select date..."
          datePickerProps={{
            mode: "date",
            dateFormat: "MM/dd/yyyy",
          }}
          onChange={(e) => console.log("Selected date:", e.target.value)}
        />
      </div>

      {/* Time Only */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Time Only
        </label>
        <Input
          type="calendar"
          placeholder="Select time..."
          datePickerProps={{
            mode: "time",
            timeFormat: "HH:mm",
          }}
          onChange={(e) => console.log("Selected time:", e.target.value)}
        />
      </div>
    </div>
  );
}`}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/CalendarExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Left and Right Icons */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Left and Right Icons
            </h3>
            <p className="text-text-secondary mb-4">
              Add icons to the left or right side of the input. Right side
              supports multiple icons for various actions.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 space-y-4">
              <Input
                placeholder="Input with left icon"
                leftIcon={<Search size={16} />}
              />

              <Input
                placeholder="Input with right icon"
                rightIcon={<Eye size={16} />}
              />

              <Input
                placeholder="Input with multiple right icons"
                leftIcon={<Mail size={16} />}
                rightIcon={[
                  <Eye key="eye" size={16} />,
                  <Search key="search" size={16} />,
                ]}
              />
            </div>

            <CodeBlock
              code={`import { Input } from "@khanhromvn/zenui";
import { Search, Eye, Mail } from "lucide-react";

function IconExamples() {
  return (
    <div className="space-y-4 max-w-md">
      <Input
        placeholder="Input with left icon"
        leftIcon={<Search size={16} />}
      />
      
      <Input
        placeholder="Input with right icon"
        rightIcon={<Eye size={16} />}
      />
      
      <Input
        placeholder="Input with multiple right icons"
        leftIcon={<Mail size={16} />}
        rightIcon={[
          <Eye key="eye" size={16} />,
          <Search key="search" size={16} />,
        ]}
      />
    </div>
  );
}`}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/IconExamples.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Helper Box */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Helper Box for Validation
            </h3>
            <p className="text-text-secondary mb-4">
              Display validation hints below the input with dynamic
              valid/invalid states. Perfect for password requirements or form
              validation.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <Input
                type="password"
                placeholder="Enter password"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                helperBox={[
                  {
                    id: "length",
                    label: "At least 8 characters",
                    isValid: passwordValue.length >= 8,
                  },
                  {
                    id: "uppercase",
                    label: "Contains uppercase letter",
                    isValid: /[A-Z]/.test(passwordValue),
                  },
                  {
                    id: "number",
                    label: "Contains number",
                    isValid: /[0-9]/.test(passwordValue),
                  },
                  {
                    id: "special",
                    label: "Contains special character",
                    isValid: /[!@#$%^&*]/.test(passwordValue),
                  },
                ]}
              />
            </div>

            <CodeBlock
              code={`import { Input } from "@khanhromvn/zenui";
import { useState } from "react";

function HelperBoxExample() {
  const [password, setPassword] = useState("");
  
  const helperItems = [
    { 
      id: "length", 
      label: "At least 8 characters", 
      isValid: password.length >= 8 
    },
    { 
      id: "uppercase", 
      label: "Contains uppercase letter", 
      isValid: /[A-Z]/.test(password) 
    },
    { 
      id: "number", 
      label: "Contains number", 
      isValid: /[0-9]/.test(password) 
    },
    { 
      id: "special", 
      label: "Contains special character", 
      isValid: /[!@#$%^&*]/.test(password) 
    },
  ];

  return (
    <Input
      type="password"
      placeholder="Enter password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      helperBox={helperItems}
    />
  );
}`}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/HelperBoxExample.tsx"
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

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 space-y-4">
              <Input size={80} placeholder="Small (80%)" />

              <Input size={100} placeholder="Default (100%)" />

              <Input size={120} placeholder="Large (120%)" />
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

          {/* Loading and Disabled States */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Loading and Disabled States
            </h3>
            <p className="text-text-secondary mb-4">
              Handle loading and disabled states with appropriate visual
              feedback.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 space-y-4">
              <Input
                placeholder="Loading input"
                loading={true}
                leftIcon={<Search size={16} />}
              />

              <Input placeholder="Disabled input" disabled={true} />
            </div>

            <CodeBlock
              code={`import { Input } from "@khanhromvn/zenui";
import { Search } from "lucide-react";

function StateExample() {
  return (
    <div className="space-y-4 max-w-md">
      <Input
        placeholder="Loading input"
        loading={true}
        leftIcon={<Search size={16} />}
      />
      
      <Input
        placeholder="Disabled input"
        disabled={true}
      />
    </div>
  );
}`}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/StateExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Dropdown Selector with Icon */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Dropdown Selector Advanced
            </h3>
            <p className="text-text-secondary mb-4">
              Use dropdown selector for country codes, currency selection, or
              any predefined options.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 space-y-4">
              <div className="flex gap-2">
                <Input
                  type="dropdown_selector"
                  placeholder="+84"
                  dropdownOptions={[
                    { value: "+1", label: "+1" },
                    { value: "+84", label: "+84" },
                    { value: "+44", label: "+44" },
                  ]}
                  className="max-w-[100px]"
                />
                <Input
                  type="tel"
                  placeholder="Phone number"
                  className="flex-1"
                />
              </div>
            </div>

            <CodeBlock
              code={`import { Input } from "@khanhromvn/zenui";

function PhoneInputExample() {
  return (
    <div className="flex gap-2">
      <Input
        type="dropdown_selector"
        placeholder="+84"
        dropdownOptions={[
          { value: "+1", label: "+1" },
          { value: "+84", label: "+84" },
          { value: "+44", label: "+44" },
        ]}
        className="max-w-[100px]"
      />
      <Input
        type="tel"
        placeholder="Phone number"
        className="flex-1"
      />
    </div>
  );
}`}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/PhoneInputExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Multi Text Tags */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Multi Text Tags
            </h3>
            <p className="text-text-secondary mb-4">
              Create tags or multiple values input. Type and press Enter, comma,
              or Tab to add items. Press Backspace to remove.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <Input
                type="multi_text"
                placeholder="Add tags (press Enter)..."
                multiTextSeparator=","
                multiTextValues={["React", "TypeScript"]}
                onMultiTextChange={(values) => {
                  console.log("Current tags:", values);
                }}
              />
            </div>

            <CodeBlock
              code={`import { Input } from "@khanhromvn/zenui";
import { useState } from "react";

function MultiTextExample() {
  const [tags, setTags] = useState<string[]>(["React", "TypeScript"]);

  return (
    <Input
      type="multi_text"
      placeholder="Add tags (press Enter)..."
      multiTextSeparator=","
      multiTextValues={tags}
      onMultiTextChange={(values) => {
        setTags(values);
        console.log("Current tags:", values);
      }}
    />
  );
}`}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/MultiTextExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Combined Example */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Complete Form Example
            </h3>
            <p className="text-text-secondary mb-4">
              A complete form using various input types and features together.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    leftIcon={<Mail size={16} />}
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Password
                  </label>
                  <Input
                    type="password"
                    placeholder="Create a password"
                    value={passwordValue}
                    onChange={(e) => setPasswordValue(e.target.value)}
                    rightIcon={<Eye size={16} />}
                    helperBox={[
                      {
                        id: "length",
                        label: "At least 8 characters",
                        isValid: passwordValue.length >= 8,
                      },
                      {
                        id: "uppercase",
                        label: "Contains uppercase",
                        isValid: /[A-Z]/.test(passwordValue),
                      },
                    ]}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Phone Number
                  </label>
                  <div className="flex gap-2">
                    <Input
                      type="dropdown_selector"
                      placeholder="+84"
                      dropdownOptions={[
                        { value: "+1", label: "+1" },
                        { value: "+84", label: "+84" },
                      ]}
                      className="max-w-[100px]"
                    />
                    <Input
                      type="tel"
                      placeholder="Phone number"
                      className="flex-1"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Skills
                  </label>
                  <Input
                    type="multi_text"
                    placeholder="Add your skills..."
                    multiTextSeparator=","
                    onMultiTextChange={(values) => console.log(values)}
                  />
                </div>
              </div>
            </div>

            <CodeBlock
              code={`import { Input } from "@khanhromvn/zenui";
import { Mail, Eye } from "lucide-react";
import { useState } from "react";

function CompleteFormExample() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="space-y-4 max-w-md">
      <div>
        <label className="block text-sm font-medium mb-2">
          Email Address
        </label>
        <Input
          type="email"
          placeholder="Enter your email"
          leftIcon={<Mail size={16} />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Password
        </label>
        <Input
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          rightIcon={<Eye size={16} />}
          helperBox={[
            {
              id: "length",
              label: "At least 8 characters",
              isValid: password.length >= 8,
            },
            {
              id: "uppercase",
              label: "Contains uppercase",
              isValid: /[A-Z]/.test(password),
            },
          ]}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Phone Number
        </label>
        <div className="flex gap-2">
          <Input
            type="dropdown_selector"
            placeholder="+84"
            dropdownOptions={[
              { value: "+1", label: "+1" },
              { value: "+84", label: "+84" },
            ]}
            className="max-w-[100px]"
          />
          <Input
            type="tel"
            placeholder="Phone number"
            className="flex-1"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Skills
        </label>
        <Input
          type="multi_text"
          placeholder="Add your skills..."
          multiTextSeparator=","
          onMultiTextChange={(values) => console.log(values)}
        />
      </div>
    </div>
  );
}`}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/CompleteFormExample.tsx"
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
