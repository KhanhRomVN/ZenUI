import { useState } from "react";
import { Breadcrumb } from "../../../../components/package/breadcumb";
import { CodeBlock } from "../../../../components/package/codeblock";
import { FileCode, Folder, FileText, Settings } from "lucide-react";
import RightPanel from "../RightPanel";

const BreadcrumbSection = () => {
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

  const basicUsageCode = `import { Breadcrumb } from "@khanhromvn/zenui";

function MyComponent() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Documents", href: "/documents" },
    { label: "Projects", href: "/documents/projects" },
    { label: "zenui.pdf" },
  ];

  return (
    <Breadcrumb 
      items={breadcrumbItems}
      showHomeIcon={true}
      separator="chevron"
    />
  );
}`;

  const separatorExampleCode = `import { Breadcrumb } from "@khanhromvn/zenui";

function SeparatorExample() {
  const items = [
    { label: "Home", href: "/" },
    { label: "Users", href: "/users" },
    { label: "Profile" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb items={items} separator="chevron" />
      <Breadcrumb items={items} separator="slash" />
      <Breadcrumb items={items} separator="arrow" />
    </div>
  );
}`;

  const sizeExampleCode = `import { Breadcrumb } from "@khanhromvn/zenui";

function SizeExample() {
  const items = [
    { label: "Home", href: "/" },
    { label: "Components", href: "/components" },
    { label: "Breadcrumb" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb items={items} size={80} />
      <Breadcrumb items={items} size={100} />
      <Breadcrumb items={items} size={120} />
      <Breadcrumb items={items} size={150} />
    </div>
  );
}`;

  const clickHandlerExampleCode = `import { Breadcrumb } from "@khanhromvn/zenui";

function ClickHandlerExample() {
  const items = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Electronics", href: "/products/electronics" },
    { label: "Smartphones" },
  ];

  const handleItemClick = (item, index) => {
    console.log('Clicked:', item.label, 'at index:', index);
    // Handle navigation or other actions
  };

  return (
    <Breadcrumb 
      items={items}
      onItemClick={handleItemClick}
      showHomeIcon={true}
    />
  );
}`;

  // Example breadcrumb items
  const basicItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "documents", label: "Documents", href: "/documents" },
    { id: "projects", label: "Projects", href: "/documents/projects" },
    { id: "zenui", label: "zenui.pdf" },
  ];

  const ecommerceItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "shop", label: "Shop", href: "/shop" },
    { id: "electronics", label: "Electronics", href: "/shop/electronics" },
    { id: "phones", label: "Smartphones", href: "/shop/electronics/phones" },
    { id: "iphone", label: "iPhone 15 Pro" },
  ];

  const settingsItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "settings", label: "Settings", href: "/settings" },
    { id: "account", label: "Account", href: "/settings/account" },
    { id: "security", label: "Security", href: "/settings/account/security" },
    { id: "2fa", label: "Two-Factor Authentication" },
  ];

  const [clickLog, setClickLog] = useState<string[]>([]);

  const handleItemClick = (item: any, index: number) => {
    const log = `Clicked: "${item.label}" at index ${index}`;
    setClickLog((prev) => [log, ...prev.slice(0, 4)]);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto">
        {/* ABOUT SECTION */}
        <section id="about" className="mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-3">
            Breadcrumb
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            A navigation component that shows the current page's location within
            a hierarchy. Perfect for websites with deep navigation structures,
            helping users understand their current context and navigate back to
            parent sections easily.
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
            Here's a simple example to get you started with the Breadcrumb
            component.
          </p>

          {/* Live Demo */}
          <div className="bg-card-background border border-border-default rounded-lg p-8 mb-6">
            <Breadcrumb
              items={basicItems}
              showHomeIcon={true}
              separator="chevron"
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

          {/* Separator Types */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Separator Types
            </h3>
            <p className="text-text-secondary mb-4">
              Choose from different separator icons: chevron, slash, or arrow.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 flex flex-col gap-4">
              <Breadcrumb items={basicItems} separator="chevron" />
              <Breadcrumb items={basicItems} separator="slash" />
              <Breadcrumb items={basicItems} separator="arrow" />
            </div>

            <CodeBlock
              code={separatorExampleCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/SeparatorExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Size Variants */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Size Variants
            </h3>
            <p className="text-text-secondary mb-4">
              Control breadcrumb size using percentage scale from 50% to 200%.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 flex flex-col gap-4">
              <Breadcrumb items={basicItems} size={80} />
              <Breadcrumb items={basicItems} size={100} />
              <Breadcrumb items={basicItems} size={120} />
              <Breadcrumb items={basicItems} size={150} />
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

          {/* Real-world Examples */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Real-world Usage
            </h3>
            <p className="text-text-secondary mb-4">
              Common use cases for breadcrumbs in different applications.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 flex flex-col gap-6">
              {/* E-commerce Example */}
              <div>
                <h4 className="text-sm font-medium text-text-secondary mb-2">
                  E-commerce Website
                </h4>
                <Breadcrumb
                  items={ecommerceItems}
                  showHomeIcon={true}
                  separator="chevron"
                />
              </div>

              {/* Settings Example */}
              <div>
                <h4 className="text-sm font-medium text-text-secondary mb-2">
                  Settings Navigation
                </h4>
                <Breadcrumb
                  items={settingsItems}
                  showHomeIcon={true}
                  separator="slash"
                />
              </div>

              {/* Without Home Icon */}
              <div>
                <h4 className="text-sm font-medium text-text-secondary mb-2">
                  Without Home Icon
                </h4>
                <Breadcrumb
                  items={basicItems}
                  showHomeIcon={false}
                  separator="chevron"
                />
              </div>
            </div>

            <CodeBlock
              code={`import { Breadcrumb } from "@khanhromvn/zenui";

function RealWorldExample() {
  const ecommerceItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Electronics", href: "/shop/electronics" },
    { label: "Smartphones", href: "/shop/electronics/phones" },
    { label: "iPhone 15 Pro" },
  ];

  const settingsItems = [
    { label: "Home", href: "/" },
    { label: "Settings", href: "/settings" },
    { label: "Account", href: "/settings/account" },
    { label: "Security", href: "/settings/account/security" },
    { label: "Two-Factor Authentication" },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* E-commerce Example */}
      <div>
        <h4 className="text-sm font-medium text-text-secondary mb-2">
          E-commerce Website
        </h4>
        <Breadcrumb 
          items={ecommerceItems}
          showHomeIcon={true}
          separator="chevron"
        />
      </div>

      {/* Settings Example */}
      <div>
        <h4 className="text-sm font-medium text-text-secondary mb-2">
          Settings Navigation
        </h4>
        <Breadcrumb 
          items={settingsItems}
          showHomeIcon={true}
          separator="slash"
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
              filePath="src/components/RealWorldExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Click Handler */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Click Handler
            </h3>
            <p className="text-text-secondary mb-4">
              Handle click events on breadcrumb items for custom navigation.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <Breadcrumb
                items={basicItems}
                showHomeIcon={true}
                onItemClick={handleItemClick}
              />

              {/* Click Log */}
              {clickLog.length > 0 && (
                <div className="mt-4 p-3 bg-input-background rounded border border-border-default">
                  <h5 className="text-sm font-medium text-text-primary mb-2">
                    Click Log:
                  </h5>
                  <div className="space-y-1">
                    {clickLog.map((log, index) => (
                      <div
                        key={index}
                        className="text-xs text-text-secondary font-mono"
                      >
                        {log}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <CodeBlock
              code={clickHandlerExampleCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/ClickHandlerExample.tsx"
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
            Complete list of props available for the Breadcrumb component.
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
                      BreadcrumbItem[]
                    </td>
                    <td className="px-6 py-4 text-text-secondary">[]</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Breadcrumb items array
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
                      Breadcrumb size (percentage scale: 50-200)
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      separator
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      "chevron" | "slash" | "arrow"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"chevron"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Separator icon type
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      showHomeIcon
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">false</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Show home icon
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      homeHref
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"/"</td>
                    <td className="px-6 py-4 text-text-secondary">Home URL</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      onItemClick
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      (item: BreadcrumbItem, index: number) =&gt; void
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Click event handler
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

          {/* BreadcrumbItem Type */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              BreadcrumbItem Type
            </h3>
            <div className="bg-card-background border border-border-default rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-input-background">
                    <tr>
                      <th className="px-6 py-4 text-left text-text-primary font-semibold">
                        Property
                      </th>
                      <th className="px-6 py-4 text-left text-text-primary font-semibold">
                        Type
                      </th>
                      <th className="px-6 py-4 text-left text-text-primary font-semibold">
                        Required
                      </th>
                      <th className="px-6 py-4 text-left text-text-primary font-semibold">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-default">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-text-primary font-mono text-xs">
                        id
                      </td>
                      <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                        string
                      </td>
                      <td className="px-6 py-4 text-text-secondary">
                        Optional
                      </td>
                      <td className="px-6 py-4 text-text-secondary">
                        Unique identifier
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-text-primary font-mono text-xs">
                        label
                      </td>
                      <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                        string
                      </td>
                      <td className="px-6 py-4 text-text-secondary">
                        Required
                      </td>
                      <td className="px-6 py-4 text-text-secondary">
                        Display text
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-text-primary font-mono text-xs">
                        href
                      </td>
                      <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                        string
                      </td>
                      <td className="px-6 py-4 text-text-secondary">
                        Optional
                      </td>
                      <td className="px-6 py-4 text-text-secondary">
                        Link URL (omit for current page)
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-text-primary font-mono text-xs">
                        icon
                      </td>
                      <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                        ReactNode
                      </td>
                      <td className="px-6 py-4 text-text-secondary">
                        Optional
                      </td>
                      <td className="px-6 py-4 text-text-secondary">
                        Custom icon
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

export default BreadcrumbSection;
