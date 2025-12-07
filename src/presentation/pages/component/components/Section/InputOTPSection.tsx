import { useState } from "react";
import { InputOTP } from "../../../../components/package/components/input-otp";
import { CodeBlock } from "../../../../components/package/components/codeblock";
import { FileCode, Shield } from "lucide-react";
import RightPanel from "../RightPanel";

const InputOTPSection = () => {
  const [otpValue, setOtpValue] = useState("");
  const [completedValue, setCompletedValue] = useState("");

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

  const basicUsageCode = `import { InputOTP } from "@khanhromvn/zenui";
import { useState } from "react";

function MyComponent() {
  const [otp, setOtp] = useState("");

  const handleComplete = (value: string) => {
    console.log("OTP completed:", value);
    // Handle OTP verification here
  };

  return (
    <div className="space-y-4">
      <InputOTP
        length={6}
        value={otp}
        onChange={setOtp}
        onComplete={handleComplete}
        className="justify-center"
      />
      
      <p className="text-center text-text-secondary">
        {otp.length === 6 ? "OTP Complete!" : "Enter 6-digit code"}
      </p>
    </div>
  );
}`;

  const variantExampleCode = `import { InputOTP } from "@khanhromvn/zenui";

function VariantExample() {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-text-secondary mb-2">
          Outline Variant
        </label>
        <InputOTP
          length={4}
          variant="outline"
          className="justify-center"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-text-secondary mb-2">
          Filled Variant
        </label>
        <InputOTP
          length={4}
          variant="filled"
          className="justify-center"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-text-secondary mb-2">
          Underline Variant
        </label>
        <InputOTP
          length={4}
          variant="underline"
          className="justify-center"
        />
      </div>
    </div>
  );
}`;

  const sizeExampleCode = `import { InputOTP } from "@khanhromvn/zenui";

function SizeExample() {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-text-secondary mb-2">
          Small (80%)
        </label>
        <InputOTP
          length={4}
          size={80}
          className="justify-center"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-text-secondary mb-2">
          Default (100%)
        </label>
        <InputOTP
          length={4}
          size={100}
          className="justify-center"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-text-secondary mb-2">
          Large (120%)
        </label>
        <InputOTP
          length={4}
          size={120}
          className="justify-center"
        />
      </div>
    </div>
  );
}`;

  const featureExampleCode = `import { InputOTP } from "@khanhromvn/zenui";

function FeatureExample() {
  const handleComplete = (value: string) => {
    // Verify OTP logic here
    alert(\`Verifying OTP: \${value}\`);
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-text-secondary mb-2">
          4-digit PIN
        </label>
        <InputOTP
          length={4}
          type="password"
          onComplete={handleComplete}
          className="justify-center"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-text-secondary mb-2">
          8-digit Code (Disabled)
        </label>
        <InputOTP
          length={8}
          disabled={true}
          className="justify-center"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-text-secondary mb-2">
          Loading State
        </label>
        <InputOTP
          length={6}
          loading={true}
          className="justify-center"
        />
      </div>
    </div>
  );
}`;

  const handleComplete = (value: string) => {
    setCompletedValue(value);
    console.log("OTP completed:", value);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto">
        {/* ABOUT SECTION */}
        <section id="about" className="mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-3">
            Input OTP
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            A secure and user-friendly One-Time Password (OTP) input component
            with auto-focus, paste support, and keyboard navigation. Perfect for
            verification codes, PIN entry, and authentication flows in your
            application.
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
            Here's a simple example to get you started with the InputOTP
            component.
          </p>

          {/* Live Demo */}
          <div className="bg-card-background border border-border-default rounded-lg p-8 mb-6 space-y-4">
            <InputOTP
              length={6}
              value={otpValue}
              onChange={setOtpValue}
              onComplete={handleComplete}
              className="justify-center"
            />

            <div className="text-center space-y-2">
              <p className="text-text-secondary">
                {otpValue.length === 6 ? "OTP Complete!" : "Enter 6-digit code"}
              </p>
              {completedValue && (
                <p className="text-green-600 font-medium">
                  Last completed: {completedValue}
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

          {/* Variants */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              OTP Variants
            </h3>
            <p className="text-text-secondary mb-4">
              Choose from different input variants to match your design system.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 space-y-6">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Outline Variant
                </label>
                <InputOTP
                  length={4}
                  variant="outline"
                  className="justify-center"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Filled Variant
                </label>
                <InputOTP
                  length={4}
                  variant="filled"
                  className="justify-center"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Underline Variant
                </label>
                <InputOTP
                  length={4}
                  variant="underline"
                  className="justify-center"
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

          {/* Sizes */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Size Variants
            </h3>
            <p className="text-text-secondary mb-4">
              Control OTP input size using percentage scale from 50% to 200%.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 space-y-6">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Small (80%)
                </label>
                <InputOTP length={4} size={80} className="justify-center" />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Default (100%)
                </label>
                <InputOTP length={4} size={100} className="justify-center" />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Large (120%)
                </label>
                <InputOTP length={4} size={120} className="justify-center" />
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

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Advanced Features
            </h3>
            <p className="text-text-secondary mb-4">
              Explore different OTP lengths, types, and states.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 space-y-6">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  4-digit PIN (Password type)
                </label>
                <InputOTP
                  length={4}
                  type="password"
                  onComplete={handleComplete}
                  className="justify-center"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  8-digit Code (Disabled)
                </label>
                <InputOTP
                  length={8}
                  disabled={true}
                  className="justify-center"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Loading State
                </label>
                <InputOTP
                  length={6}
                  loading={true}
                  className="justify-center"
                />
              </div>
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
            Complete list of props available for the InputOTP component.
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
                      length
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      number
                    </td>
                    <td className="px-6 py-4 text-text-secondary">6</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Number of OTP inputs (1-10)
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
                      "text" | "password" | "number"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"text"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Input type
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
                      autoFocus
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">true</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Auto focus first input
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
                      (value: string) =&gt; void
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Change event handler
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      onComplete
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      (value: string) =&gt; void
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Complete event handler (when all inputs are filled)
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

export default InputOTPSection;
