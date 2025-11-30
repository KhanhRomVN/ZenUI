import { useState } from "react";
import { MenuBar } from "../../../../components/package/menubar";
import { CodeBlock } from "../../../../components/package/codeblock";
import {
  FileCode,
  Settings,
  User,
  FileText,
  Search,
  Mail,
  Heart,
  Star,
} from "lucide-react";
import RightPanel from "../RightPanel";

const MenuBarSection = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

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

  const basicUsageCode = `import { MenuBar } from "@khanhromvn/zenui";
import { Settings, User, FileText } from "lucide-react";

function MyComponent() {
  const menuItems = [
    {
      id: "file",
      label: "File",
      items: [
        { id: "new", label: "New File", onClick: () => console.log("New File") },
        { id: "open", label: "Open File" },
        { id: "save", label: "Save" },
      ]
    },
    {
      id: "edit",
      label: "Edit",
      items: [
        { id: "undo", label: "Undo" },
        { id: "redo", label: "Redo" },
      ]
    },
    {
      id: "view",
      label: "View",
      items: [
        { id: "zoom-in", label: "Zoom In" },
        { id: "zoom-out", label: "Zoom Out" },
      ]
    }
  ];

  return (
    <MenuBar 
      items={menuItems}
      onItemClick={(item) => console.log("Clicked:", item.label)}
    />
  );
}`;

  const horizontalMenuItems = [
    {
      id: "file",
      label: "File",
      items: [
        {
          id: "new",
          label: "New File",
          onClick: () => alert("New File clicked"),
        },
        { id: "open", label: "Open File" },
        { id: "save", label: "Save" },
        { id: "save-as", label: "Save As..." },
        { id: "divider", label: "---" },
        {
          id: "export",
          label: "Export",
          items: [
            { id: "export-pdf", label: "Export as PDF" },
            { id: "export-png", label: "Export as PNG" },
            { id: "export-svg", label: "Export as SVG" },
          ],
        },
        { id: "exit", label: "Exit" },
      ],
    },
    {
      id: "edit",
      label: "Edit",
      items: [
        { id: "undo", label: "Undo", shortcut: "Ctrl+Z" },
        { id: "redo", label: "Redo", shortcut: "Ctrl+Y" },
        { id: "divider1", label: "---" },
        { id: "cut", label: "Cut", shortcut: "Ctrl+X" },
        { id: "copy", label: "Copy", shortcut: "Ctrl+C" },
        { id: "paste", label: "Paste", shortcut: "Ctrl+V" },
      ],
    },
    {
      id: "view",
      label: "View",
      items: [
        { id: "zoom-in", label: "Zoom In", shortcut: "Ctrl++" },
        { id: "zoom-out", label: "Zoom Out", shortcut: "Ctrl+-" },
        { id: "reset-zoom", label: "Reset Zoom", shortcut: "Ctrl+0" },
      ],
    },
    {
      id: "help",
      label: "Help",
      items: [
        { id: "docs", label: "Documentation" },
        { id: "about", label: "About" },
      ],
    },
  ];

  const verticalMenuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <Settings size={16} />,
    },
    {
      id: "profile",
      label: "Profile",
      icon: <User size={16} />,
      items: [
        { id: "edit-profile", label: "Edit Profile" },
        { id: "change-password", label: "Change Password" },
        { id: "privacy", label: "Privacy Settings" },
      ],
    },
    {
      id: "documents",
      label: "Documents",
      icon: <FileText size={16} />,
      items: [
        { id: "all-docs", label: "All Documents" },
        { id: "recent", label: "Recent Files" },
        { id: "shared", label: "Shared with Me" },
      ],
    },
    {
      id: "settings",
      label: "Settings",
      icon: <Settings size={16} />,
      items: [
        { id: "general", label: "General Settings" },
        { id: "notifications", label: "Notifications" },
        { id: "appearance", label: "Appearance" },
      ],
    },
  ];

  const iconMenuItems = [
    {
      id: "search",
      label: "Search",
      icon: <Search size={16} />,
    },
    {
      id: "mail",
      label: "Mail",
      icon: <Mail size={16} />,
      badge: "5",
    },
    {
      id: "favorites",
      label: "Favorites",
      icon: <Heart size={16} />,
      items: [
        { id: "starred", label: "Starred Items", icon: <Star size={14} /> },
        { id: "recent", label: "Recently Viewed" },
      ],
    },
    {
      id: "more",
      label: "More",
      icon: "⋯",
      items: [
        { id: "help", label: "Help & Support" },
        { id: "feedback", label: "Send Feedback" },
      ],
    },
  ];

  const handleMenuClick = (item: any) => {
    setActiveMenu(item.id);
    console.log("Menu item clicked:", item.label);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto">
        {/* ABOUT SECTION */}
        <section id="about" className="mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-3">MenuBar</h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            A flexible and accessible menu bar component with support for nested
            submenus, icons, keyboard shortcuts, and multiple orientations.
            Perfect for application menus, navigation systems, and complex menu
            structures.
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
            Create a standard horizontal menu bar with nested submenus.
          </p>

          {/* Live Demo */}
          <div className="bg-card-background border border-border-default rounded-lg p-8 mb-6">
            <MenuBar
              items={horizontalMenuItems}
              onItemClick={handleMenuClick}
              activeItem={activeMenu || undefined}
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

          {/* Vertical Menu */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Vertical Menu
            </h3>
            <p className="text-text-secondary mb-4">
              Perfect for sidebar navigation with icons and nested menus.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 flex gap-8">
              <MenuBar
                items={verticalMenuItems}
                orientation="vertical"
                onItemClick={handleMenuClick}
                activeItem={activeMenu || undefined}
              />
              <div className="flex-1">
                <p className="text-text-secondary text-sm">
                  Vertical menus are ideal for application sidebars and
                  navigation panels. They provide clear hierarchy and easy
                  access to nested menu items.
                </p>
              </div>
            </div>

            <CodeBlock
              code={`import { MenuBar } from "@khanhromvn/zenui";
import { Settings, User, FileText } from "lucide-react";

function VerticalMenuExample() {
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <Settings size={16} />
    },
    {
      id: "profile",
      label: "Profile",
      icon: <User size={16} />,
      items: [
        { id: "edit-profile", label: "Edit Profile" },
        { id: "change-password", label: "Change Password" }
      ]
    },
    {
      id: "documents",
      label: "Documents",
      icon: <FileText size={16} />,
      items: [
        { id: "all-docs", label: "All Documents" },
        { id: "recent", label: "Recent Files" }
      ]
    }
  ];

  return (
    <MenuBar 
      items={menuItems}
      orientation="vertical"
      onItemClick={(item) => console.log(item.label)}
    />
  );
}`}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/VerticalMenuExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Menu with Icons */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Menu with Icons and Badges
            </h3>
            <p className="text-text-secondary mb-4">
              Enhance menus with icons, badges, and visual indicators.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <MenuBar
                items={iconMenuItems}
                onItemClick={handleMenuClick}
                activeItem={activeMenu || undefined}
              />
            </div>

            <CodeBlock
              code={`import { MenuBar } from "@khanhromvn/zenui";
import { Search, Mail, Heart, Star } from "lucide-react";

function IconMenuExample() {
  const menuItems = [
    {
      id: "search",
      label: "Search",
      icon: <Search size={16} />
    },
    {
      id: "mail",
      label: "Mail",
      icon: <Mail size={16} />,
      badge: "5"
    },
    {
      id: "favorites",
      label: "Favorites",
      icon: <Heart size={16} />,
      items: [
        { id: "starred", label: "Starred Items", icon: <Star size={14} /> },
        { id: "recent", label: "Recently Viewed" }
      ]
    }
  ];

  return (
    <MenuBar 
      items={menuItems}
      onItemClick={(item) => console.log(item.label)}
    />
  );
}`}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/IconMenuExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Size Variants */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Size Variants
            </h3>
            <p className="text-text-secondary mb-4">
              Control menu size using percentage scale from 50% to 200%.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 space-y-4">
              <div>
                <p className="text-sm text-text-secondary mb-2">Small (80%)</p>
                <MenuBar
                  items={horizontalMenuItems.slice(0, 3)}
                  size={80}
                  onItemClick={handleMenuClick}
                />
              </div>
              <div>
                <p className="text-sm text-text-secondary mb-2">
                  Default (100%)
                </p>
                <MenuBar
                  items={horizontalMenuItems.slice(0, 3)}
                  size={100}
                  onItemClick={handleMenuClick}
                />
              </div>
              <div>
                <p className="text-sm text-text-secondary mb-2">Large (120%)</p>
                <MenuBar
                  items={horizontalMenuItems.slice(0, 3)}
                  size={120}
                  onItemClick={handleMenuClick}
                />
              </div>
            </div>

            <CodeBlock
              code={`import { MenuBar } from "@khanhromvn/zenui";

function SizeExample() {
  const menuItems = [
    // ... your menu items
  ];

  return (
    <div className="space-y-4">
      <MenuBar items={menuItems} size={80} />
      <MenuBar items={menuItems} size={100} />
      <MenuBar items={menuItems} size={120} />
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
            Complete list of props available for the MenuBar component.
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
                      MenuItem[]
                    </td>
                    <td className="px-6 py-4 text-text-secondary">[]</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Array of menu items
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
                      Menu size (percentage scale: 50-200)
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
                      Menu orientation
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      onItemClick
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      (item, event, parentItem) =&gt; void
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Click event handler
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      activeItem
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Currently active item ID
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

export default MenuBarSection;
