import { useState } from "react";
import { Dropdown } from "../../../../components/package/dropdown";
import { Button } from "../../../../components/package/button";
import { CodeBlock } from "../../../../components/package/codeblock";
import {
  FileCode,
  User,
  Settings,
  LogOut,
  ChevronDown,
  Plus,
  Edit,
  Trash2,
} from "lucide-react";
import RightPanel from "../RightPanel";

const DropdownSection = () => {
  const [selectedItem, setSelectedItem] = useState<string>("No selection");

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

  const basicUsageCode = `import { Dropdown } from "@khanhromvn/zenui";
import { ChevronDown } from "lucide-react";

function MyComponent() {
  const menuItems = [
    {
      label: "Profile",
      onClick: () => console.log("Profile clicked"),
    },
    {
      label: "Settings",
      onClick: () => console.log("Settings clicked"),
    },
    {
      type: "divider",
    },
    {
      label: "Logout",
      onClick: () => console.log("Logout clicked"),
    },
  ];

  return (
    <Dropdown
      items={menuItems}
      onSelect={(item, index) => console.log("Selected:", item.label)}
    >
      <button className="dropdown-trigger">
        <span>Menu</span>
        <ChevronDown size={16} />
      </button>
    </Dropdown>
  );
}`;

  const withIconsCode = `import { Dropdown } from "@khanhromvn/zenui";
import { User, Settings, LogOut, ChevronDown } from "lucide-react";

function IconExample() {
  const menuItems = [
    {
      label: "Profile",
      icon: <User size={16} />,
      onClick: () => console.log("Profile clicked"),
    },
    {
      label: "Settings",
      icon: <Settings size={16} />,
      onClick: () => console.log("Settings clicked"),
    },
    {
      type: "divider",
    },
    {
      label: "Logout",
      icon: <LogOut size={16} />,
      onClick: () => console.log("Logout clicked"),
    },
  ];

  return (
    <Dropdown items={menuItems}>
      <button className="dropdown-trigger">
        <span>User Menu</span>
        <ChevronDown size={16} />
      </button>
    </Dropdown>
  );
}`;

  const triggerCode = `import { Dropdown, Button } from "@khanhromvn/zenui";
import { Plus, ChevronDown } from "lucide-react";

function TriggerExample() {
  const menuItems = [
    {
      label: "New Project",
      onClick: () => console.log("New project"),
    },
    {
      label: "Import",
      onClick: () => console.log("Import"),
    },
    {
      label: "Export",
      onClick: () => console.log("Export"),
    },
  ];

  return (
    <div className="flex gap-4">
      {/* Click Trigger */}
      <Dropdown
        items={menuItems}
        trigger="click"
      >
        <Button
          icon={<Plus size={16} />}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Create New
        </Button>
      </Dropdown>

      {/* Hover Trigger */}
      <Dropdown
        items={menuItems}
        trigger="hover"
      >
        <Button
          icon={<ChevronDown size={16} />}
          iconPosition="right"
          className="bg-gray-600 hover:bg-gray-700 text-white"
        >
          Hover Me
        </Button>
      </Dropdown>
    </div>
  );
}`;

  const placementCode = `import { Dropdown, Button } from "@khanhromvn/zenui";

function PlacementExample() {
  const menuItems = [
    { label: "Option 1", onClick: () => {} },
    { label: "Option 2", onClick: () => {} },
  ];

  return (
    <div className="flex gap-4 flex-wrap">
      <Dropdown
        items={menuItems}
        placement="bottom"
      >
        <Button className="bg-button-bg">Bottom</Button>
      </Dropdown>

      <Dropdown
        items={menuItems}
        placement="bottom-left"
      >
        <Button className="bg-button-bg">Bottom Left</Button>
      </Dropdown>

      <Dropdown
        items={menuItems}
        placement="bottom-right"
      >
        <Button className="bg-button-bg">Bottom Right</Button>
      </Dropdown>

      <Dropdown
        items={menuItems}
        placement="top"
      >
        <Button className="bg-button-bg">Top</Button>
      </Dropdown>
    </div>
  );
}`;

  const basicMenu = [
    {
      label: "Profile",
      onClick: () => setSelectedItem("Profile"),
    },
    {
      label: "Settings",
      onClick: () => setSelectedItem("Settings"),
    },
    {
      type: "divider",
    },
    {
      label: "Logout",
      onClick: () => setSelectedItem("Logout"),
    },
  ];

  const iconMenu = [
    {
      label: "Profile",
      icon: <User size={16} />,
      onClick: () => setSelectedItem("Profile"),
    },
    {
      label: "Settings",
      icon: <Settings size={16} />,
      onClick: () => setSelectedItem("Settings"),
    },
    {
      type: "divider",
    },
    {
      label: "Logout",
      icon: <LogOut size={16} />,
      onClick: () => setSelectedItem("Logout"),
    },
  ];

  const actionMenu = [
    {
      label: "Create",
      icon: <Plus size={16} />,
      onClick: () => setSelectedItem("Create"),
    },
    {
      label: "Edit",
      icon: <Edit size={16} />,
      onClick: () => setSelectedItem("Edit"),
    },
    {
      type: "divider",
    },
    {
      label: "Delete",
      icon: <Trash2 size={16} />,
      onClick: () => setSelectedItem("Delete"),
    },
  ];

  return (
    <>
      <div className="max-w-4xl mx-auto">
        {/* ABOUT SECTION */}
        <section id="about" className="mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-3">
            Dropdown
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            A flexible dropdown component that displays a menu of options when
            triggered. Perfect for navigation menus, action menus, and context
            menus with support for icons, dividers, disabled items, and various
            trigger behaviors.
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
            Here's a simple example to get you started with the Dropdown
            component.
          </p>

          {/* Live Demo */}
          <div className="bg-card-background border border-border-default rounded-lg p-8 mb-6 flex items-center gap-4">
            <Dropdown
              items={basicMenu}
              onSelect={(item, index) =>
                item.label && setSelectedItem(item.label)
              }
            >
              <button className="dropdown-trigger flex items-center gap-2 px-4 py-2 border border-border-default rounded-lg hover:bg-gray-50">
                <span>Basic Menu</span>
                <ChevronDown size={16} />
              </button>
            </Dropdown>
            <span className="text-text-secondary">
              Selected: {selectedItem}
            </span>
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

          {/* With Icons */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              With Icons
            </h3>
            <p className="text-text-secondary mb-4">
              Enhance dropdown items with icons for better visual recognition.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <Dropdown
                items={iconMenu}
                onSelect={(item, index) =>
                  item.label && setSelectedItem(item.label)
                }
              >
                <button className="dropdown-trigger flex items-center gap-2 px-4 py-2 border border-border-default rounded-lg hover:bg-gray-50">
                  <User size={16} />
                  <span>User Menu</span>
                  <ChevronDown size={16} />
                </button>
              </Dropdown>
            </div>

            <CodeBlock
              code={withIconsCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/IconExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Trigger Types */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Trigger Types
            </h3>
            <p className="text-text-secondary mb-4">
              Choose between click and hover triggers based on your use case.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 flex gap-4 flex-wrap">
              <Dropdown
                items={actionMenu}
                trigger="click"
                onSelect={(item, index) =>
                  item.label && setSelectedItem(item.label)
                }
              >
                <Button
                  icon={<Plus size={16} />}
                  className="bg-blue-600 hover:bg-blue-700 text-white border-blue-700"
                >
                  Click Trigger
                </Button>
              </Dropdown>

              <Dropdown
                items={actionMenu}
                trigger="hover"
                onSelect={(item, index) =>
                  item.label && setSelectedItem(item.label)
                }
              >
                <Button
                  icon={<ChevronDown size={16} />}
                  iconPosition="right"
                  className="bg-gray-600 hover:bg-gray-700 text-white border-gray-700"
                >
                  Hover Trigger
                </Button>
              </Dropdown>
            </div>

            <CodeBlock
              code={triggerCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/TriggerExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Placement */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Menu Placement
            </h3>
            <p className="text-text-secondary mb-4">
              Control where the dropdown menu appears relative to the trigger.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 flex gap-4 flex-wrap">
              <Dropdown
                items={basicMenu}
                placement="bottom"
                onSelect={(item, index) =>
                  item.label && setSelectedItem(item.label)
                }
              >
                <Button className="bg-button-bg hover:bg-button-bgHover text-button-bgText border border-button-border">
                  Bottom
                </Button>
              </Dropdown>

              <Dropdown
                items={basicMenu}
                placement="bottom-left"
                onSelect={(item, index) =>
                  item.label && setSelectedItem(item.label)
                }
              >
                <Button className="bg-button-bg hover:bg-button-bgHover text-button-bgText border border-button-border">
                  Bottom Left
                </Button>
              </Dropdown>

              <Dropdown
                items={basicMenu}
                placement="bottom-right"
                onSelect={(item, index) =>
                  item.label && setSelectedItem(item.label)
                }
              >
                <Button className="bg-button-bg hover:bg-button-bgHover text-button-bgText border border-button-border">
                  Bottom Right
                </Button>
              </Dropdown>

              <Dropdown
                items={basicMenu}
                placement="top"
                onSelect={(item, index) =>
                  item.label && setSelectedItem(item.label)
                }
              >
                <Button className="bg-button-bg hover:bg-button-bgHover text-button-bgText border border-button-border">
                  Top
                </Button>
              </Dropdown>
            </div>

            <CodeBlock
              code={placementCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/PlacementExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Disabled Items */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Disabled Items
            </h3>
            <p className="text-text-secondary mb-4">
              Disable specific items in the dropdown menu.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <Dropdown
                items={[
                  {
                    label: "Enabled Item",
                    onClick: () => setSelectedItem("Enabled Item"),
                  },
                  {
                    label: "Disabled Item",
                    disabled: true,
                    onClick: () => setSelectedItem("This won't fire"),
                  },
                  {
                    type: "divider",
                  },
                  {
                    label: "Another Enabled",
                    onClick: () => setSelectedItem("Another Enabled"),
                  },
                ]}
                onSelect={(item, index) =>
                  item.label && !item.disabled && setSelectedItem(item.label)
                }
              >
                <button className="dropdown-trigger flex items-center gap-2 px-4 py-2 border border-border-default rounded-lg hover:bg-gray-50">
                  <span>With Disabled Items</span>
                  <ChevronDown size={16} />
                </button>
              </Dropdown>
            </div>

            <CodeBlock
              code={`import { Dropdown } from "@khanhromvn/zenui";

function DisabledExample() {
  const menuItems = [
    {
      label: "Enabled Item",
      onClick: () => console.log("Enabled clicked"),
    },
    {
      label: "Disabled Item",
      disabled: true,
      onClick: () => console.log("This won't fire"),
    },
    {
      type: "divider",
    },
    {
      label: "Another Enabled",
      onClick: () => console.log("Another enabled"),
    },
  ];

  return (
    <Dropdown items={menuItems}>
      <button className="dropdown-trigger">
        <span>With Disabled Items</span>
      </button>
    </Dropdown>
  );
}`}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/DisabledExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Size Variants */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Size Variants
            </h3>
            <p className="text-text-secondary mb-4">
              Control dropdown size using percentage scale.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 flex gap-4 items-center flex-wrap">
              <Dropdown
                items={basicMenu}
                size={80}
                onSelect={(item, index) =>
                  item.label && setSelectedItem(item.label)
                }
              >
                <button className="dropdown-trigger flex items-center gap-2 px-3 py-1 border border-border-default rounded text-sm">
                  <span>Small</span>
                  <ChevronDown size={14} />
                </button>
              </Dropdown>

              <Dropdown
                items={basicMenu}
                size={100}
                onSelect={(item, index) =>
                  item.label && setSelectedItem(item.label)
                }
              >
                <button className="dropdown-trigger flex items-center gap-2 px-4 py-2 border border-border-default rounded">
                  <span>Default</span>
                  <ChevronDown size={16} />
                </button>
              </Dropdown>

              <Dropdown
                items={basicMenu}
                size={120}
                onSelect={(item, index) =>
                  item.label && setSelectedItem(item.label)
                }
              >
                <button className="dropdown-trigger flex items-center gap-2 px-5 py-2 border border-border-default rounded text-lg">
                  <span>Large</span>
                  <ChevronDown size={18} />
                </button>
              </Dropdown>
            </div>

            <CodeBlock
              code={`import { Dropdown } from "@khanhromvn/zenui";

function SizeExample() {
  const menuItems = [
    { label: "Option 1", onClick: () => {} },
    { label: "Option 2", onClick: () => {} },
  ];

  return (
    <div className="flex gap-4 items-center">
      <Dropdown items={menuItems} size={80}>
        <button className="dropdown-trigger">Small</button>
      </Dropdown>

      <Dropdown items={menuItems} size={100}>
        <button className="dropdown-trigger">Default</button>
      </Dropdown>

      <Dropdown items={menuItems} size={120}>
        <button className="dropdown-trigger">Large</button>
      </Dropdown>
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
            Complete list of props available for the Dropdown component.
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
                      items
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      DropdownItem[]
                    </td>
                    <td className="px-6 py-4 text-text-secondary">[]</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Array of dropdown items
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      trigger
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      "click" | "hover"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"click"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Dropdown trigger type
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      placement
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      DropdownPlacement
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"bottom"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Menu placement position
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
                      Dropdown size (percentage scale)
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
                      Disable dropdown
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      children
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      ReactNode
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Custom trigger content
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      onSelect
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      (item: DropdownItem, index: number) =&gt; void
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Item selection callback
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
                      style
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      CSSProperties
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Custom styles
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-text-primary mt-8 mb-4">
            DropdownItem
          </h3>
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
                      type
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      "item" | "divider"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"item"</td>
                    <td className="px-6 py-4 text-text-secondary">Item type</td>
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
                      Item label text
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      icon
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      ReactNode
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">Item icon</td>
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
                      Disable the item
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      onClick
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      () =&gt; void
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Click handler
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      data
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      any
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Custom data
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

export default DropdownSection;
