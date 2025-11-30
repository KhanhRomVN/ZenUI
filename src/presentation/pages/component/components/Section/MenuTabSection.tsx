import { useState } from "react";
import { MenuTab } from "../../../../components/package/menutab";
import { CodeBlock } from "../../../../components/package/codeblock";
import { FileCode, Settings, User, Bell, Mail, Heart } from "lucide-react";
import RightPanel from "../RightPanel";

const MenuTabSection = () => {
  const [activeTab, setActiveTab] = useState("profile");

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

  const basicUsageCode = `import { MenuTab } from "@khanhromvn/zenui";
import { useState } from "react";

function MyComponent() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      content: <div>Dashboard Content</div>
    },
    {
      id: "profile",
      label: "Profile",
      content: <div>Profile Settings</div>
    },
    {
      id: "settings",
      label: "Settings",
      content: <div>Application Settings</div>
    }
  ];

  return (
    <MenuTab 
      items={tabItems}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );
}`;

  const defaultTabItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      content: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Dashboard Overview</h3>
          <p className="text-text-secondary">
            Welcome to your dashboard. Here you can see an overview of your
            activity and recent updates.
          </p>
        </div>
      ),
    },
    {
      id: "profile",
      label: "Profile",
      content: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Profile Settings</h3>
          <p className="text-text-secondary">
            Manage your profile information, privacy settings, and account
            preferences.
          </p>
        </div>
      ),
    },
    {
      id: "settings",
      label: "Settings",
      content: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Application Settings</h3>
          <p className="text-text-secondary">
            Configure application preferences, notifications, and display
            options.
          </p>
        </div>
      ),
    },
    {
      id: "notifications",
      label: "Notifications",
      content: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Notification Center</h3>
          <p className="text-text-secondary">
            Manage your notification preferences and view recent alerts.
          </p>
        </div>
      ),
    },
  ];

  const pillsTabItems = [
    {
      id: "all",
      label: "All Items",
      badge: "12",
      content: <div className="p-4">Showing all items (12)</div>,
    },
    {
      id: "favorites",
      label: "Favorites",
      icon: <Heart size={14} />,
      content: <div className="p-4">Your favorite items</div>,
    },
    {
      id: "archived",
      label: "Archived",
      content: <div className="p-4">Archived items</div>,
    },
    {
      id: "trash",
      label: "Trash",
      disabled: true,
      content: <div className="p-4">Trashed items</div>,
    },
  ];

  const iconTabItems = [
    {
      id: "profile",
      label: "Profile",
      icon: <User size={16} />,
      content: <div className="p-4">User profile settings and information</div>,
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: <Bell size={16} />,
      badge: "3",
      content: <div className="p-4">Notification preferences and settings</div>,
    },
    {
      id: "messages",
      label: "Messages",
      icon: <Mail size={16} />,
      badge: "7",
      content: <div className="p-4">Your messages and conversations</div>,
    },
    {
      id: "settings",
      label: "Settings",
      icon: <Settings size={16} />,
      content: <div className="p-4">Application configuration</div>,
    },
  ];

  const verticalTabItems = [
    {
      id: "account",
      label: "Account Settings",
      content: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Account Settings</h3>
          <p className="text-text-secondary">
            Manage your account information, security settings, and login
            preferences.
          </p>
        </div>
      ),
    },
    {
      id: "privacy",
      label: "Privacy & Security",
      content: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Privacy & Security</h3>
          <p className="text-text-secondary">
            Control your privacy settings and security options.
          </p>
        </div>
      ),
    },
    {
      id: "notifications",
      label: "Notifications",
      content: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Notifications</h3>
          <p className="text-text-secondary">
            Configure how and when you receive notifications.
          </p>
        </div>
      ),
    },
    {
      id: "appearance",
      label: "Appearance",
      content: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Appearance</h3>
          <p className="text-text-secondary">
            Customize the look and feel of the application.
          </p>
        </div>
      ),
    },
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    console.log("Tab changed to:", tabId);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto">
        {/* ABOUT SECTION */}
        <section id="about" className="mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-3">MenuTab</h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            A versatile tab component with multiple variants, icons, badges, and
            flexible content areas. Perfect for organizing content into logical
            sections, settings panels, and navigation interfaces with smooth
            transitions.
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
            Create a standard tab interface with content areas.
          </p>

          {/* Live Demo */}
          <div className="bg-card-background border border-border-default rounded-lg p-6 mb-6">
            <MenuTab
              items={defaultTabItems}
              activeTab={activeTab}
              onTabChange={handleTabChange}
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

          {/* Pills Variant */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Pills Variant
            </h3>
            <p className="text-text-secondary mb-4">
              Rounded pill-style tabs with badges and icons.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-6 mb-4">
              <MenuTab
                items={pillsTabItems}
                activeTab={activeTab}
                onTabChange={handleTabChange}
                variant="pills"
              />
            </div>

            <CodeBlock
              code={`import { MenuTab } from "@khanhromvn/zenui";
import { Heart } from "lucide-react";

function PillsExample() {
  const [activeTab, setActiveTab] = useState("all");

  const tabItems = [
    {
      id: "all",
      label: "All Items",
      badge: "12",
      content: <div>Showing all items</div>
    },
    {
      id: "favorites",
      label: "Favorites",
      icon: <Heart size={14} />,
      content: <div>Your favorite items</div>
    },
    {
      id: "archived",
      label: "Archived",
      content: <div>Archived items</div>
    }
  ];

  return (
    <MenuTab 
      items={tabItems}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      variant="pills"
    />
  );
}`}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/PillsExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Tabs with Icons */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Tabs with Icons and Badges
            </h3>
            <p className="text-text-secondary mb-4">
              Enhance tabs with icons and visual indicators like badges.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-6 mb-4">
              <MenuTab
                items={iconTabItems}
                activeTab={activeTab}
                onTabChange={handleTabChange}
              />
            </div>

            <CodeBlock
              code={`import { MenuTab } from "@khanhromvn/zenui";
import { User, Bell, Mail, Settings } from "lucide-react";

function IconTabsExample() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabItems = [
    {
      id: "profile",
      label: "Profile",
      icon: <User size={16} />,
      content: <div>Profile content</div>
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: <Bell size={16} />,
      badge: "3",
      content: <div>Notifications content</div>
    },
    {
      id: "messages",
      label: "Messages",
      icon: <Mail size={16} />,
      badge: "7",
      content: <div>Messages content</div>
    }
  ];

  return (
    <MenuTab 
      items={tabItems}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );
}`}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/IconTabsExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Vertical Tabs */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Vertical Tabs
            </h3>
            <p className="text-text-secondary mb-4">
              Perfect for sidebar navigation and settings panels.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-6 mb-4">
              <div className="flex gap-8">
                <div className="w-64">
                  <MenuTab
                    items={verticalTabItems}
                    activeTab={activeTab}
                    onTabChange={handleTabChange}
                    orientation="vertical"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-text-secondary text-sm">
                    Vertical tabs are ideal for settings panels and sidebar
                    navigation where you have multiple related sections that
                    need clear visual hierarchy.
                  </p>
                </div>
              </div>
            </div>

            <CodeBlock
              code={`import { MenuTab } from "@khanhromvn/zenui";

function VerticalTabsExample() {
  const [activeTab, setActiveTab] = useState("account");

  const tabItems = [
    {
      id: "account",
      label: "Account Settings",
      content: <div>Account settings content</div>
    },
    {
      id: "privacy",
      label: "Privacy & Security",
      content: <div>Privacy settings content</div>
    },
    {
      id: "notifications",
      label: "Notifications",
      content: <div>Notification settings content</div>
    }
  ];

  return (
    <div className="flex gap-8">
      <div className="w-64">
        <MenuTab 
          items={tabItems}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          orientation="vertical"
        />
      </div>
      <div className="flex-1">
        {/* Main content area */}
      </div>
    </div>
  );
}`}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/VerticalTabsExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Underline Variant */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Underline Variant
            </h3>
            <p className="text-text-secondary mb-4">
              Clean underline-style tabs for minimalist interfaces.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-6 mb-4">
              <MenuTab
                items={defaultTabItems.slice(0, 3)}
                activeTab={activeTab}
                onTabChange={handleTabChange}
                variant="underline"
              />
            </div>

            <CodeBlock
              code={`import { MenuTab } from "@khanhromvn/zenui";

function UnderlineTabsExample() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const tabItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      content: <div>Dashboard content</div>
    },
    {
      id: "analytics",
      label: "Analytics",
      content: <div>Analytics content</div>
    },
    {
      id: "reports",
      label: "Reports",
      content: <div>Reports content</div>
    }
  ];

  return (
    <MenuTab 
      items={tabItems}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      variant="underline"
    />
  );
}`}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/UnderlineTabsExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Size Variants */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Size Variants
            </h3>
            <p className="text-text-secondary mb-4">
              Control tab size using percentage scale from 50% to 200%.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-6 mb-4 space-y-6">
              <div>
                <p className="text-sm text-text-secondary mb-2">Small (80%)</p>
                <MenuTab
                  items={defaultTabItems.slice(0, 3)}
                  activeTab={activeTab}
                  onTabChange={handleTabChange}
                  size={80}
                />
              </div>
              <div>
                <p className="text-sm text-text-secondary mb-2">
                  Default (100%)
                </p>
                <MenuTab
                  items={defaultTabItems.slice(0, 3)}
                  activeTab={activeTab}
                  onTabChange={handleTabChange}
                  size={100}
                />
              </div>
              <div>
                <p className="text-sm text-text-secondary mb-2">Large (120%)</p>
                <MenuTab
                  items={defaultTabItems.slice(0, 3)}
                  activeTab={activeTab}
                  onTabChange={handleTabChange}
                  size={120}
                />
              </div>
            </div>

            <CodeBlock
              code={`import { MenuTab } from "@khanhromvn/zenui";

function SizeExample() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const tabItems = [
    // ... your tab items
  ];

  return (
    <div className="space-y-6">
      <MenuTab items={tabItems} activeTab={activeTab} size={80} />
      <MenuTab items={tabItems} activeTab={activeTab} size={100} />
      <MenuTab items={tabItems} activeTab={activeTab} size={120} />
    </div>
  );
}`}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/SizeExample.tsx"
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
            Complete list of props available for the MenuTab component.
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
                      items*
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      TabItem[]
                    </td>
                    <td className="px-6 py-4 text-text-secondary">[]</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Array of tab items
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      activeTab
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Currently active tab ID
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      onTabChange
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      (tabId, event) =&gt; void
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Tab change event handler
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
                      Tab size (percentage scale: 50-200)
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      variant
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      "default" | "pills" | "underline" | "cards"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"default"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Visual variant of tabs
                    </td>
                  </tr>
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
                      Tab orientation
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

export default MenuTabSection;
