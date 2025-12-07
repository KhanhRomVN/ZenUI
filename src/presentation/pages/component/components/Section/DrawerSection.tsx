import { useState } from "react";
import { Drawer } from "../../../../components/package/components/drawer";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "../../../../components/package/components/card";
import { CodeBlock } from "../../../../components/package/components/codeblock";
import { Input } from "../../../../components/package/components/input";
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
} from "../../../../components/package/components/dropdown";
import {
  FileCode,
  X,
  Settings,
  User,
  Bell,
  Mail,
  Lock,
  Globe,
  ChevronDown,
} from "lucide-react";
import RightPanel from "../RightPanel";

const DrawerSection = () => {
  const [isBasicOpen, setIsBasicOpen] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isTopOpen, setIsTopOpen] = useState(false);

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

  const basicUsageCode = `import { useState } from "react";
import { Drawer } from "@khanhromvn/zenui";

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        Open Drawer
      </button>

      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        direction="right"
      >
        <div className="p-6">
          <h2>Your Content Here</h2>
          <p>This is a simple drawer wrapper.</p>
        </div>
      </Drawer>
    </div>
  );
}`;

  const cardExampleCode = `import { useState } from "react";
import { Drawer, Card, CardHeader, CardBody, Input, Dropdown, DropdownTrigger, DropdownContent, DropdownItem } from "@khanhromvn/zenui";
import { X, User, Mail, Lock, ChevronDown } from "lucide-react";

function SettingsDrawerExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Open Settings
      </button>

      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        direction="right"
        width={480}
        className="p-6 bg-drawer-background"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-text-primary">Settings</h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-card-background rounded-lg"
          >
            <X size={20} className="text-text-primary" />
          </button>
        </div>

        {/* Content with Cards, Inputs, and Dropdowns */}
        <div className="space-y-4">
          <Card>
            <CardHeader title="Profile Settings" />
            <CardBody>
              <div className="space-y-4">
                <Input
                  placeholder="Enter your name"
                  defaultValue="John Doe"
                  leftIcon={<User size={18} />}
                  size="md"
                />
                <Input
                  placeholder="your.email@example.com"
                  leftIcon={<Mail size={18} />}
                  size="md"
                />
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader title="Preferences" />
            <CardBody>
              <Dropdown>
                <DropdownTrigger>
                  <button className="w-full px-4 py-2 bg-input-background border rounded-lg flex items-center justify-between">
                    <span>English</span>
                    <ChevronDown size={16} />
                  </button>
                </DropdownTrigger>
                <DropdownContent>
                  <DropdownItem>English</DropdownItem>
                  <DropdownItem>Tiếng Việt</DropdownItem>
                </DropdownContent>
              </Dropdown>
            </CardBody>
          </Card>
        </div>
      </Drawer>
    </>
  );
}`;

  const customStyleCode = `<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  direction="left"
  width="500px"
  className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 shadow-2xl"
  overlayClassName="bg-black/70 backdrop-blur-sm"
>
  <div className="space-y-6">
    <h1 className="text-3xl font-bold text-purple-900">
      Custom Styled Drawer
    </h1>
    <p className="text-gray-700">
      Use className to apply any Tailwind classes!
    </p>
  </div>
</Drawer>`;

  return (
    <>
      <div className="max-w-4xl mx-auto">
        {/* ABOUT SECTION */}
        <section id="about" className="mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-3">Drawer</h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            A minimal and flexible drawer component that acts as a simple
            wrapper. The Drawer provides positioning, animation, and overlay
            functionality while giving you complete control over the content
            inside.
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
            The Drawer is a simple wrapper - you control all the content inside.
          </p>

          {/* Live Demo */}
          <div className="bg-card-background border border-border-default rounded-lg p-8 mb-6 flex items-center justify-center">
            <button
              onClick={() => setIsBasicOpen(true)}
              className="px-6 py-3 bg-button-bg hover:bg-button-bgHover text-button-bgText rounded-lg transition-colors font-medium"
            >
              Open Basic Drawer
            </button>
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

          {/* Basic Drawer */}
          <Drawer
            isOpen={isBasicOpen}
            onClose={() => setIsBasicOpen(false)}
            direction="right"
            width={400}
            className="bg-drawer-background"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-text-primary">
                  Basic Drawer
                </h2>
                <button
                  onClick={() => setIsBasicOpen(false)}
                  className="p-2 hover:bg-card-background rounded-lg transition-colors"
                >
                  <X size={20} className="text-text-primary" />
                </button>
              </div>
              <div className="space-y-4">
                <p className="text-text-secondary">
                  This is a simple drawer with custom content. You have full
                  control over what goes inside!
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-text-secondary">
                    ✓ Minimal wrapper design
                  </p>
                  <p className="text-sm text-text-secondary">
                    ✓ Full content control
                  </p>
                  <p className="text-sm text-text-secondary">
                    ✓ Smooth animations
                  </p>
                  <p className="text-sm text-text-secondary">
                    ✓ Customizable styling
                  </p>
                </div>
              </div>
            </div>
          </Drawer>
        </section>

        {/* EXAMPLES SECTION */}
        <section id="examples" className="mb-12">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Examples
          </h2>

          {/* Example 1: With Card Components */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-text-primary mb-3">
              Using Card Components
            </h3>
            <p className="text-text-secondary mb-4">
              You can use any components inside the Drawer, including Card
              components.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 flex items-center justify-center">
              <button
                onClick={() => setIsCardOpen(true)}
                className="px-6 py-3 bg-button-bg hover:bg-button-bgHover text-button-bgText rounded-lg transition-colors font-medium flex items-center gap-2"
              >
                <Settings size={20} />
                Open Settings
              </button>
            </div>

            <CodeBlock
              code={cardExampleCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/CardDrawerExample.tsx"
              showLineNumbers={true}
              showGutter={true}
            />

            <Drawer
              isOpen={isCardOpen}
              onClose={() => setIsCardOpen(false)}
              direction="right"
              width={480}
              className="p-6 bg-drawer-background"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-text-primary">
                  Settings
                </h2>
                <button
                  onClick={() => setIsCardOpen(false)}
                  className="p-2 hover:bg-card-background rounded-lg transition-colors"
                >
                  <X size={20} className="text-text-primary" />
                </button>
              </div>

              <div className="space-y-4">
                {/* Profile Card with Input */}
                <Card>
                  <CardHeader title="Profile Settings" />
                  <CardBody>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1">
                          Full Name
                        </label>
                        <Input
                          placeholder="Enter your name"
                          defaultValue="John Doe"
                          leftIcon={<User size={18} />}
                          size="md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1">
                          Email
                        </label>
                        <Input
                          type="text"
                          placeholder="your.email@example.com"
                          defaultValue="john@example.com"
                          leftIcon={<Mail size={18} />}
                          size="md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1">
                          Password
                        </label>
                        <Input
                          type="password"
                          placeholder="••••••••"
                          leftIcon={<Lock size={18} />}
                          size="md"
                        />
                      </div>
                    </div>
                  </CardBody>
                </Card>

                {/* Preferences Card with Dropdown */}
                <Card>
                  <CardHeader title="Preferences" />
                  <CardBody>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          Language
                        </label>
                        <Dropdown>
                          <DropdownTrigger>
                            <button className="w-full px-4 py-2 bg-input-background border border-input-border-default hover:border-input-border-hover rounded-lg flex items-center justify-between text-text-primary">
                              <span>English</span>
                              <ChevronDown
                                size={16}
                                className="text-text-secondary"
                              />
                            </button>
                          </DropdownTrigger>
                          <DropdownContent className="bg-dropdown-background border border-dropdown-border hover:border-dropdown-borderHover">
                            <DropdownItem className="hover:bg-dropdown-itemHover">
                              English
                            </DropdownItem>
                            <DropdownItem className="hover:bg-dropdown-itemHover">
                              Tiếng Việt
                            </DropdownItem>
                            <DropdownItem className="hover:bg-dropdown-itemHover">
                              日本語
                            </DropdownItem>
                            <DropdownItem className="hover:bg-dropdown-itemHover">
                              한국어
                            </DropdownItem>
                          </DropdownContent>
                        </Dropdown>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                {/* Notifications Card */}
                <Card>
                  <CardHeader title="Notifications" />
                  <CardBody>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Bell size={18} className="text-text-secondary" />
                          <span className="text-text-primary">
                            Email notifications
                          </span>
                        </div>
                        <input
                          type="checkbox"
                          defaultChecked
                          className="w-4 h-4"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Bell size={18} className="text-text-secondary" />
                          <span className="text-text-primary">
                            Push notifications
                          </span>
                        </div>
                        <input type="checkbox" className="w-4 h-4" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Mail size={18} className="text-text-secondary" />
                          <span className="text-text-primary">Newsletter</span>
                        </div>
                        <input
                          type="checkbox"
                          defaultChecked
                          className="w-4 h-4"
                        />
                      </div>
                    </div>
                  </CardBody>
                </Card>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  <button className="flex-1 px-4 py-2 bg-button-bg text-button-bgText rounded-lg hover:bg-button-bgHover transition-colors">
                    Save Changes
                  </button>
                  <button
                    onClick={() => setIsCardOpen(false)}
                    className="flex-1 px-4 py-2 bg-button-secondBg text-text-primary rounded-lg hover:bg-button-secondBgHover transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Drawer>
          </div>

          {/* Example 2: Different Directions */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-text-primary mb-3">
              Different Directions
            </h3>
            <p className="text-text-secondary mb-4">
              Drawers can slide from any edge: left, right, top, or bottom.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 flex items-center justify-center gap-4">
              <button
                onClick={() => setIsLeftOpen(true)}
                className="px-6 py-3 bg-button-bg hover:bg-button-bgHover text-button-bgText rounded-lg transition-colors font-medium"
              >
                Open Left
              </button>
              <button
                onClick={() => setIsTopOpen(true)}
                className="px-6 py-3 bg-button-secondBg hover:bg-button-secondBgHover text-text-primary rounded-lg transition-colors font-medium"
              >
                Open Top
              </button>
            </div>

            <Drawer
              isOpen={isLeftOpen}
              onClose={() => setIsLeftOpen(false)}
              direction="left"
              width={350}
              className="p-6 bg-drawer-background"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-text-primary">
                  Left Drawer
                </h2>
                <button
                  onClick={() => setIsLeftOpen(false)}
                  className="p-2 hover:bg-card-background rounded-lg transition-colors"
                >
                  <X size={20} className="text-text-primary" />
                </button>
              </div>
              <p className="text-text-secondary">
                This drawer slides in from the left side!
              </p>
            </Drawer>

            <Drawer
              isOpen={isTopOpen}
              onClose={() => setIsTopOpen(false)}
              direction="top"
              height={300}
              className="p-6 bg-drawer-background"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-text-primary">
                  Top Drawer
                </h2>
                <button
                  onClick={() => setIsTopOpen(false)}
                  className="p-2 hover:bg-card-background rounded-lg transition-colors"
                >
                  <X size={20} className="text-text-primary" />
                </button>
              </div>
              <p className="text-text-secondary">
                This drawer slides in from the top!
              </p>
            </Drawer>
          </div>

          {/* Example 3: Custom Styling */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-text-primary mb-3">
              Custom Styling
            </h3>
            <p className="text-text-secondary mb-4">
              Use the className prop to apply any Tailwind classes for custom
              styling.
            </p>

            <CodeBlock
              code={customStyleCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              showLineNumbers={true}
              showGutter={true}
            />
          </div>
        </section>

        {/* PROPS SECTION */}
        <section id="props" className="mb-12">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Props
          </h2>
          <p className="text-text-secondary mb-6">
            Complete list of props available for the simplified Drawer
            component.
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
                      isOpen*
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Controls the open/closed state
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      onClose*
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      () =&gt; void
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Callback when drawer closes
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      children*
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      ReactNode
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Content to display inside drawer
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      direction
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      "left" | "right" | "top" | "bottom"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"right"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Direction from which drawer slides in
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
                      Custom classes for drawer wrapper
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      overlayClassName
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">""</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Custom classes for overlay
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      width
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string | number
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"400px"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Width for left/right drawers
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      height
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string | number
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"400px"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Height for top/bottom drawers
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      animationType
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      "slide" | "scale" | "fade" | "bounce" | "elastic"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"slide"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Animation type for drawer entrance/exit
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      closeOnOverlayClick
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">true</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Close drawer when clicking overlay
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

export default DrawerSection;
