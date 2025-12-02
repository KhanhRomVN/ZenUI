import { useState } from "react";
import { Tab, TabItem } from "../../../../components/package/tab";
import { CodeBlock } from "../../../../components/package/codeblock";
import { FileCode, Home, User, Settings, Bell, Mail } from "lucide-react";
import RightPanel from "../RightPanel";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [controlledTab, setControlledTab] = useState("profile");

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

  const basicUsageCode = `import { Tab, TabItem } from "@khanhromvn/zenui";
import { Home, User, Settings } from "lucide-react";

function MyComponent() {
  return (
    <Tab defaultActive="home" width="full">
      <TabItem id="home" icon={<Home size={16} />}>
        Home
      </TabItem>
      <TabItem id="profile" icon={<User size={16} />}>
        Profile
      </TabItem>
      <TabItem id="settings" icon={<Settings size={16} />}>
        Settings
      </TabItem>
    </Tab>
  );
}`;

  const controlledExampleCode = `import { Tab, TabItem } from "@khanhromvn/zenui";

function ControlledExample() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <Tab 
      active={activeTab} 
      onActiveChange={setActiveTab}
      width="full"
    >
      <TabItem id="home">
        Home
      </TabItem>
      <TabItem id="profile">
        Profile
      </TabItem>
      <TabItem id="settings">
        Settings
      </TabItem>
    </Tab>
  );
}`;

  const customStylesCode = `import { Tab, TabItem } from "@khanhromvn/zenui";

function CustomStylesExample() {
  return (
    <Tab width="full" className="bg-gray-50 p-1 rounded-lg">
      <TabItem 
        id="home"
        className="rounded-md"
        hoverClassName="hover:bg-white hover:shadow-sm"
        activeClassName="bg-white shadow-sm text-purple-600 border-purple-600"
      >
        Home
      </TabItem>
      <TabItem 
        id="profile"
        className="rounded-md"
        hoverClassName="hover:bg-white hover:shadow-sm"
        activeClassName="bg-white shadow-sm text-purple-600 border-purple-600"
      >
        Profile
      </TabItem>
    </Tab>
  );
}`;

  return (
    <>
      <div className="max-w-4xl mx-auto">
        {/* ABOUT SECTION */}
        <section id="about" className="mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-3">Tab</h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            A flexible and customizable tab component with support for icons,
            custom styling for different states, controlled/uncontrolled modes,
            and various alignment options. Perfect for navigation, content
            switching, and organization across your application.
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
            Here's a simple example to get you started with the Tab component.
          </p>

          {/* Live Demo */}
          <div className="bg-card-background border border-border-default rounded-md p-8 mb-6">
            <Tab
              defaultActive="home"
              width="full"
              className="bg-tab-background border-b border-tab-border"
            >
              <TabItem
                id="home"
                icon={<Home size={16} />}
                className="border-b-2 border-tab-item-border"
                hoverClassName="hover:bg-tab-item-hoverBg hover:border-tab-item-hoverBorder"
                activeClassName="bg-tab-item-focusBg border-tab-item-focusBorder text-primary"
              >
                Home
              </TabItem>
              <TabItem
                id="profile"
                icon={<User size={16} />}
                className="border-b-2 border-tab-item-border"
                hoverClassName="hover:bg-tab-item-hoverBg hover:border-tab-item-hoverBorder"
                activeClassName="bg-tab-item-focusBg border-tab-item-focusBorder text-primary"
              >
                Profile
              </TabItem>
              <TabItem
                id="settings"
                icon={<Settings size={16} />}
                className="border-b-2 border-tab-item-border"
                hoverClassName="hover:bg-tab-item-hoverBg hover:border-tab-item-hoverBorder"
                activeClassName="bg-tab-item-focusBg border-tab-item-focusBorder text-primary"
              >
                Settings
              </TabItem>
              <TabItem
                id="notifications"
                icon={<Bell size={16} />}
                className="border-b-2 border-tab-item-border"
                hoverClassName="hover:bg-tab-item-hoverBg hover:border-tab-item-hoverBorder"
                activeClassName="bg-tab-item-focusBg border-tab-item-focusBorder text-primary"
              >
                Notifications
              </TabItem>
            </Tab>
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

          {/* Controlled Example */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Controlled Tabs
            </h3>
            <p className="text-text-secondary mb-4">
              Control the active tab externally with controlled props.
            </p>

            <div className="bg-card-background border border-border-default rounded-md p-8 mb-6">
              <div className="mb-4">
                <Tab
                  active={controlledTab}
                  onActiveChange={setControlledTab}
                  width="full"
                >
                  <TabItem id="profile">Profile</TabItem>
                  <TabItem id="messages">Messages</TabItem>
                  <TabItem id="account">Account</TabItem>
                </Tab>
              </div>
              <p className="text-sm text-text-secondary">
                Active tab: {controlledTab}
              </p>
            </div>

            <CodeBlock
              code={controlledExampleCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/ControlledExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Custom Styles */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Custom Styling
            </h3>
            <p className="text-text-secondary mb-4">
              Customize the appearance of each state (default, hover, active)
              with className props.
            </p>

            <div className="bg-card-background border border-border-default rounded-md p-8 mb-6">
              <Tab width="full" className="bg-gray-50 p-1 rounded-lg">
                <TabItem
                  id="dashboard"
                  className="rounded-md"
                  hoverClassName="hover:bg-white hover:shadow-sm"
                  activeClassName="bg-white shadow-sm text-purple-600 border-purple-600"
                >
                  Dashboard
                </TabItem>
                <TabItem
                  id="analytics"
                  className="rounded-md"
                  hoverClassName="hover:bg-white hover:shadow-sm"
                  activeClassName="bg-white shadow-sm text-purple-600 border-purple-600"
                >
                  Analytics
                </TabItem>
                <TabItem
                  id="reports"
                  className="rounded-md"
                  hoverClassName="hover:bg-white hover:shadow-sm"
                  activeClassName="bg-white shadow-sm text-purple-600 border-purple-600"
                >
                  Reports
                </TabItem>
              </Tab>
            </div>

            <CodeBlock
              code={customStylesCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/CustomStylesExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Width Modes */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Width Modes
            </h3>
            <p className="text-text-secondary mb-4">
              Choose between full-width (fills parent) or fit-width
              (content-based) tabs.
            </p>

            <div className="bg-card-background border border-border-default rounded-md p-8 mb-6 space-y-6">
              <div>
                <p className="text-sm font-medium text-text-primary mb-2">
                  Full Width
                </p>
                <Tab width="full">
                  <TabItem id="tab1" icon={<Mail size={16} />}>
                    Inbox
                  </TabItem>
                  <TabItem id="tab2" icon={<Bell size={16} />}>
                    Alerts
                  </TabItem>
                  <TabItem id="tab3" icon={<Settings size={16} />}>
                    Config
                  </TabItem>
                </Tab>
              </div>

              <div>
                <p className="text-sm font-medium text-text-primary mb-2">
                  Fit Width
                </p>
                <Tab width="fit">
                  <TabItem id="tab4">Short Tab</TabItem>
                  <TabItem id="tab5">Medium Tab</TabItem>
                  <TabItem id="tab6">Longer Tab Name</TabItem>
                </Tab>
              </div>
            </div>
          </div>

          {/* Alignment Options */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Alignment Options
            </h3>
            <p className="text-text-secondary mb-4">
              Align tabs to left, center, right, or distribute with
              space-between.
            </p>

            <div className="bg-card-background border border-border-default rounded-md p-8 mb-6 space-y-6">
              <div>
                <p className="text-sm font-medium text-text-primary mb-2">
                  Left Aligned
                </p>
                <Tab align="left" width="full">
                  <TabItem id="left1">Tab 1</TabItem>
                  <TabItem id="left2">Tab 2</TabItem>
                </Tab>
              </div>

              <div>
                <p className="text-sm font-medium text-text-primary mb-2">
                  Center Aligned
                </p>
                <Tab align="center" width="full">
                  <TabItem id="center1">Tab 1</TabItem>
                  <TabItem id="center2">Tab 2</TabItem>
                </Tab>
              </div>

              <div>
                <p className="text-sm font-medium text-text-primary mb-2">
                  Right Aligned
                </p>
                <Tab align="right" width="full">
                  <TabItem id="right1">Tab 1</TabItem>
                  <TabItem id="right2">Tab 2</TabItem>
                </Tab>
              </div>

              <div>
                <p className="text-sm font-medium text-text-primary mb-2">
                  Space Between
                </p>
                <Tab align="space-between" width="full">
                  <TabItem id="space1">First</TabItem>
                  <TabItem id="space2">Middle</TabItem>
                  <TabItem id="space3">Last</TabItem>
                </Tab>
              </div>
            </div>
          </div>

          {/* Disabled State */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Disabled State
            </h3>
            <p className="text-text-secondary mb-4">
              Disable individual tab items to prevent user interaction.
            </p>

            <div className="bg-card-background border border-border-default rounded-md p-8 mb-6">
              <Tab width="full">
                <TabItem id="enabled" icon={<Home size={16} />}>
                  Enabled Tab
                </TabItem>
                <TabItem id="disabled" disabled icon={<User size={16} />}>
                  Disabled Tab
                </TabItem>
                <TabItem id="another" icon={<Settings size={16} />}>
                  Another Tab
                </TabItem>
              </Tab>
            </div>
          </div>

          {/* Style Variants */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Style Variants
            </h3>
            <p className="text-text-secondary mb-4">
              Different styling approaches for tabs to match your design system.
            </p>

            <div className="bg-card-background border border-border-default rounded-md p-8 mb-6 space-y-8">
              {/* Border Top & Bottom */}
              <div>
                <p className="text-sm font-medium text-text-primary mb-3">
                  Border Top & Bottom
                </p>
                <Tab width="full">
                  <TabItem
                    id="border1"
                    icon={<Home size={16} />}
                    className="border-t-2 border-b-2 border-transparent"
                    hoverClassName="hover:border-t-gray-300 hover:border-b-gray-300"
                    activeClassName="border-t-blue-600 border-b-blue-600 text-blue-600"
                  >
                    Home
                  </TabItem>
                  <TabItem
                    id="border2"
                    icon={<User size={16} />}
                    className="border-t-2 border-b-2 border-transparent"
                    hoverClassName="hover:border-t-gray-300 hover:border-b-gray-300"
                    activeClassName="border-t-blue-600 border-b-blue-600 text-blue-600"
                  >
                    Profile
                  </TabItem>
                  <TabItem
                    id="border3"
                    icon={<Settings size={16} />}
                    className="border-t-2 border-b-2 border-transparent"
                    hoverClassName="hover:border-t-gray-300 hover:border-b-gray-300"
                    activeClassName="border-t-blue-600 border-b-blue-600 text-blue-600"
                  >
                    Settings
                  </TabItem>
                </Tab>
              </div>

              {/* Card Style (Background Only) */}
              <div>
                <p className="text-sm font-medium text-text-primary mb-3">
                  Card Style (Background)
                </p>
                <Tab width="full" className="bg-gray-100 p-1 rounded-lg">
                  <TabItem
                    id="card1"
                    icon={<Mail size={16} />}
                    className="rounded-md border-0"
                    hoverClassName="hover:bg-gray-200"
                    activeClassName="bg-white shadow-md text-blue-600 border-0"
                  >
                    Inbox
                  </TabItem>
                  <TabItem
                    id="card2"
                    icon={<Bell size={16} />}
                    className="rounded-md border-0"
                    hoverClassName="hover:bg-gray-200"
                    activeClassName="bg-white shadow-md text-blue-600 border-0"
                  >
                    Notifications
                  </TabItem>
                  <TabItem
                    id="card3"
                    icon={<Settings size={16} />}
                    className="rounded-md border-0"
                    hoverClassName="hover:bg-gray-200"
                    activeClassName="bg-white shadow-md text-blue-600 border-0"
                  >
                    Settings
                  </TabItem>
                </Tab>
              </div>

              {/* Border Style (Border Only) */}
              <div>
                <p className="text-sm font-medium text-text-primary mb-3">
                  Border Style
                </p>
                <Tab width="full">
                  <TabItem
                    id="outline1"
                    icon={<Home size={16} />}
                    className="rounded-md border border-transparent"
                    hoverClassName="hover:border-gray-300"
                    activeClassName="border-blue-600 text-blue-600"
                  >
                    Dashboard
                  </TabItem>
                  <TabItem
                    id="outline2"
                    icon={<User size={16} />}
                    className="rounded-md border border-transparent"
                    hoverClassName="hover:border-gray-300"
                    activeClassName="border-blue-600 text-blue-600"
                  >
                    Team
                  </TabItem>
                  <TabItem
                    id="outline3"
                    icon={<Settings size={16} />}
                    className="rounded-md border border-transparent"
                    hoverClassName="hover:border-gray-300"
                    activeClassName="border-blue-600 text-blue-600"
                  >
                    Settings
                  </TabItem>
                </Tab>
              </div>
            </div>
          </div>
        </section>

        {/* PROPS SECTION */}
        <section id="props" className="mb-12">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Props
          </h2>
          <p className="text-text-secondary mb-6">
            Complete list of props available for Tab components.
          </p>

          {/* Tab Props */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Tab Props
            </h3>
            <div className="bg-card-background border border-border-default rounded-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-table-headerBg">
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
                    <tr className="hover:bg-table-rowHoverBg">
                      <td className="px-6 py-4 text-text-primary font-mono text-xs">
                        defaultActive
                      </td>
                      <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                        string
                      </td>
                      <td className="px-6 py-4 text-text-secondary">""</td>
                      <td className="px-6 py-4 text-text-secondary">
                        Default active tab ID (uncontrolled)
                      </td>
                    </tr>
                    <tr className="hover:bg-table-rowHoverBg">
                      <td className="px-6 py-4 text-text-primary font-mono text-xs">
                        active
                      </td>
                      <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                        string
                      </td>
                      <td className="px-6 py-4 text-text-secondary">-</td>
                      <td className="px-6 py-4 text-text-secondary">
                        Controlled active tab
                      </td>
                    </tr>
                    <tr className="hover:bg-table-rowHoverBg">
                      <td className="px-6 py-4 text-text-primary font-mono text-xs">
                        onActiveChange
                      </td>
                      <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                        (tabId: string) =&gt; void
                      </td>
                      <td className="px-6 py-4 text-text-secondary">-</td>
                      <td className="px-6 py-4 text-text-secondary">
                        Active tab change callback
                      </td>
                    </tr>
                    <tr className="hover:bg-table-rowHoverBg">
                      <td className="px-6 py-4 text-text-primary font-mono text-xs">
                        width
                      </td>
                      <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                        "full" | "fit"
                      </td>
                      <td className="px-6 py-4 text-text-secondary">"full"</td>
                      <td className="px-6 py-4 text-text-secondary">
                        Width mode
                      </td>
                    </tr>
                    <tr className="hover:bg-table-rowHoverBg">
                      <td className="px-6 py-4 text-text-primary font-mono text-xs">
                        align
                      </td>
                      <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                        "left" | "center" | "right" | "space-between"
                      </td>
                      <td className="px-6 py-4 text-text-secondary">"left"</td>
                      <td className="px-6 py-4 text-text-secondary">
                        Alignment of tabs
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* TabItem Props */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              TabItem Props
            </h3>
            <div className="bg-card-background border border-border-default rounded-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-table-headerBg">
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
                    <tr className="hover:bg-table-rowHoverBg">
                      <td className="px-6 py-4 text-text-primary font-mono text-xs">
                        id
                      </td>
                      <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                        string
                      </td>
                      <td className="px-6 py-4 text-text-secondary">-</td>
                      <td className="px-6 py-4 text-text-secondary">
                        Unique tab identifier (required)
                      </td>
                    </tr>
                    <tr className="hover:bg-table-rowHoverBg">
                      <td className="px-6 py-4 text-text-primary font-mono text-xs">
                        className
                      </td>
                      <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                        string
                      </td>
                      <td className="px-6 py-4 text-text-secondary">""</td>
                      <td className="px-6 py-4 text-text-secondary">
                        Default state className
                      </td>
                    </tr>
                    <tr className="hover:bg-table-rowHoverBg">
                      <td className="px-6 py-4 text-text-primary font-mono text-xs">
                        hoverClassName
                      </td>
                      <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                        string
                      </td>
                      <td className="px-6 py-4 text-text-secondary">""</td>
                      <td className="px-6 py-4 text-text-secondary">
                        Hover state className
                      </td>
                    </tr>
                    <tr className="hover:bg-table-rowHoverBg">
                      <td className="px-6 py-4 text-text-primary font-mono text-xs">
                        activeClassName
                      </td>
                      <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                        string
                      </td>
                      <td className="px-6 py-4 text-text-secondary">""</td>
                      <td className="px-6 py-4 text-text-secondary">
                        Active/focused state className
                      </td>
                    </tr>
                    <tr className="hover:bg-table-rowHoverBg">
                      <td className="px-6 py-4 text-text-primary font-mono text-xs">
                        icon
                      </td>
                      <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                        ReactNode
                      </td>
                      <td className="px-6 py-4 text-text-secondary">-</td>
                      <td className="px-6 py-4 text-text-secondary">
                        Icon element
                      </td>
                    </tr>
                    <tr className="hover:bg-table-rowHoverBg">
                      <td className="px-6 py-4 text-text-primary font-mono text-xs">
                        iconPosition
                      </td>
                      <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                        "left" | "right"
                      </td>
                      <td className="px-6 py-4 text-text-secondary">"left"</td>
                      <td className="px-6 py-4 text-text-secondary">
                        Icon position relative to text
                      </td>
                    </tr>
                    <tr className="hover:bg-table-rowHoverBg">
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
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Right Panel Navigation */}
      <RightPanel sections={navigationSections} />
    </>
  );
};

export default TabSection;
