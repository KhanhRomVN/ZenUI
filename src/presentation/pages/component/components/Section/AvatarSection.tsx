import { useState } from "react";
import { Avatar } from "../../../../components/package/components/avatar";
import { CodeBlock } from "../../../../components/package/components/codeblock";
import {
  FileCode,
  User,
  Settings,
  Check,
  Clock,
  X,
  Phone,
  Mail,
} from "lucide-react";
import RightPanel from "../RightPanel";

const AvatarSection = () => {
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

  const basicUsageCode = `import { Avatar } from "@khanhromvn/zenui";
import { Check, Clock, Mail } from "lucide-react";

function MyComponent() {
  return (
    <div className="flex gap-4 items-center justify-center flex-wrap">
      {/* Image Avatar */}
      <Avatar 
        src="/path/to/image.jpg"
        name="John Doe"
        size={40}
      />
      
      {/* Name Avatar with dot icon */}
      <Avatar 
        name="Jane Smith"
        size={48}
        dotIcon={<Check size={8} color="#fff" />}
        dotBgColor="#10B981"
      />
      
      {/* Icon Avatar */}
      <Avatar 
        icon={<Mail size={20} color="#fff" />}
        size={40}
        dotIcon={<Clock size={6} color="#fff" />}
        dotBgColor="#F59E0B"
      />
    </div>
  );
}`;

  const sizeExampleCode = `import { Avatar } from "@khanhromvn/zenui";

function SizeExample() {
  return (
    <div className="flex gap-4 items-center justify-center flex-wrap">
      <Avatar name="Small" size={24} />
      <Avatar name="Default" size={32} />
      <Avatar name="Medium" size={48} />
      <Avatar name="Large" size={64} />
      <Avatar name="XLarge" size={96} />
    </div>
  );
}`;

  const iconExampleCode = `import { Avatar } from "@khanhromvn/zenui";
import { Check, X, Clock, Phone } from "lucide-react";

function IconExample() {
  return (
    <div className="flex gap-4 items-center justify-center flex-wrap">
      <Avatar 
        name="Online User" 
        dotIcon={<Check size={8} color="#fff" />}
        dotBgColor="#10B981"
      />
      <Avatar 
        name="Offline User" 
        dotIcon={<X size={8} color="#fff" />}
        dotBgColor="#6B7280"
      />
      <Avatar 
        name="Away User" 
        dotIcon={<Clock size={8} color="#fff" />}
        dotBgColor="#F59E0B"
      />
      <Avatar 
        name="Busy User" 
        dotIcon={<Phone size={8} color="#fff" />}
        dotBgColor="#EF4444"
      />
      <Avatar name="No Icon" />
    </div>
  );
}`;

  const shapeExampleCode = `import { Avatar } from "@khanhromvn/zenui";

function ShapeExample() {
  return (
    <div className="flex gap-4 items-center justify-center flex-wrap">
      <Avatar name="Circle" shape="circle" />
      <Avatar name="Square" shape="square" />
      <Avatar name="Rounded" shape="rounded" />
    </div>
  );
}`;

  const fallbackExampleCode = `import { Avatar } from "@khanhromvn/zenui";

function FallbackExample() {
  return (
    <div className="flex gap-4 items-center justify-center flex-wrap">
      {/* Icon Fallback */}
      <Avatar fallbackType="icon" />
      
      {/* Initials Fallback */}
      <Avatar name="John Doe" fallbackType="initials" />
      <Avatar name="Alice Bob Johnson" fallbackType="initials" />
      <Avatar name="Single" fallbackType="initials" />
      
      {/* Image with error handling */}
      <Avatar 
        src="/invalid-path.jpg"
        name="Error Handler"
        fallbackType="initials"
      />
    </div>
  );
}`;

  const iconAvatarExampleCode = `import { Avatar } from "@khanhromvn/zenui";
import { Mail, Phone, User, Settings } from "lucide-react";

function IconAvatarExample() {
  return (
    <div className="flex gap-4 items-center justify-center flex-wrap">
      <Avatar 
        icon={<Mail size={20} color="#fff" />}
        size={40}
      />
      <Avatar 
        icon={<Phone size={24} color="#fff" />}
        size={48}
        dotIcon={<Check size={8} color="#fff" />}
        dotBgColor="#10B981"
      />
      <Avatar 
        icon={<User size={28} color="#fff" />}
        size={56}
      />
      <Avatar 
        icon={<Settings size={32} color="#fff" />}
        size={64}
      />
    </div>
  );
}`;

  const interactiveExampleCode = `import { Avatar } from "@khanhromvn/zenui";
import { useState } from "react";

function InteractiveExample() {
  const [clickCount, setClickCount] = useState(0);

  const handleAvatarClick = () => {
    setClickCount(prev => prev + 1);
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <Avatar 
        name="Click Me"
        size={64}
        onClick={handleAvatarClick}
        className="cursor-pointer transition-transform hover:scale-110"
      />
      <p className="text-text-secondary">
        Clicked {clickCount} times
      </p>
    </div>
  );
}`;

  return (
    <>
      <div className="max-w-4xl mx-auto">
        {/* ABOUT SECTION */}
        <section id="about" className="mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-3">Avatar</h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            A versatile avatar component for displaying user profiles, with
            support for images, fallback initials, status indicators, and
            multiple shapes. Perfect for user interfaces, chat applications, and
            social features.
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
            Here's a simple example to get you started with the Avatar
            component.
          </p>

          {/* Live Demo */}
          <div className="bg-card-background border border-border-default rounded-lg p-8 mb-6 flex gap-6 items-center justify-center flex-wrap">
            <Avatar
              src="src/presentation/components/package/components/avatar/avatar.jpeg"
              size={40}
            />
            <Avatar
              name="Jane Smith"
              size={48}
              dotIcon={<Check size={8} color="#fff" />}
              dotBgColor="#10B981"
            />
            <Avatar name="Alice Johnson" fallbackType="initials" size={32} />
            <Avatar icon={<Mail size={20} color="#fff" />} size={40} />
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
              Control avatar size from 16px to 200px with consistent scaling.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 flex gap-6 items-center justify-center flex-wrap">
              <Avatar name="Small" size={24} />
              <Avatar name="Default" size={32} />
              <Avatar name="Medium" size={48} />
              <Avatar name="Large" size={64} />
              <Avatar name="XLarge" size={96} />
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

          {/* Icon Dot */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Icon Dot
            </h3>
            <p className="text-text-secondary mb-4">
              Add custom icons to avatar with customizable background colors.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 flex gap-6 items-center justify-center flex-wrap">
              <Avatar
                name="Online User"
                dotIcon={<Check size={8} color="#fff" />}
                dotBgColor="#10B981"
              />
              <Avatar
                name="Offline User"
                dotIcon={<X size={8} color="#fff" />}
                dotBgColor="#6B7280"
              />
              <Avatar
                name="Away User"
                dotIcon={<Clock size={8} color="#fff" />}
                dotBgColor="#F59E0B"
              />
              <Avatar
                name="Busy User"
                dotIcon={<Phone size={8} color="#fff" />}
                dotBgColor="#EF4444"
              />
              <Avatar name="No Icon" />
            </div>

            <CodeBlock
              code={iconExampleCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/IconExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Shape Variants */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Shape Variants
            </h3>
            <p className="text-text-secondary mb-4">
              Choose from circle, square, or rounded shapes.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 flex gap-6 items-center justify-center flex-wrap">
              <Avatar name="Circle" shape="circle" />
              <Avatar name="Square" shape="square" />
              <Avatar name="Rounded" shape="rounded" />
            </div>

            <CodeBlock
              code={shapeExampleCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/ShapeExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Fallback Types */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Fallback Options
            </h3>
            <p className="text-text-secondary mb-4">
              Graceful fallbacks when images fail to load or aren't provided.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 flex gap-6 items-center justify-center flex-wrap">
              {/* Icon Fallback */}
              <Avatar fallbackType="icon" />

              {/* Initials Fallback */}
              <Avatar name="John Doe" fallbackType="initials" />
              <Avatar name="Alice Bob Johnson" fallbackType="initials" />
              <Avatar name="Single" fallbackType="initials" />

              {/* Image with error handling */}
              <Avatar
                src="/invalid-path.jpg"
                name="Error Handler"
                fallbackType="initials"
              />
            </div>

            <CodeBlock
              code={fallbackExampleCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/FallbackExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Icon Avatar */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Icon Avatar
            </h3>
            <p className="text-text-secondary mb-4">
              Use icons directly as avatar content instead of images or
              initials.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 flex gap-6 items-center justify-center flex-wrap">
              <Avatar icon={<Mail size={20} color="#fff" />} size={40} />
              <Avatar
                icon={<Phone size={24} color="#fff" />}
                size={48}
                dotIcon={<Check size={8} color="#fff" />}
                dotBgColor="#10B981"
              />
              <Avatar icon={<User size={28} color="#fff" />} size={56} />
              <Avatar icon={<Settings size={32} color="#fff" />} size={64} />
            </div>

            <CodeBlock
              code={iconAvatarExampleCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/IconAvatarExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Interactive Avatar */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Interactive Avatar
            </h3>
            <p className="text-text-secondary mb-4">
              Make avatars clickable with hover effects and click handlers.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 flex gap-6 items-center justify-center flex-wrap">
              <Avatar
                name="Click Me"
                size={64}
                onClick={() => alert("Avatar clicked!")}
                className="cursor-pointer transition-transform hover:scale-110"
              />
              <Avatar
                name="Hover Me"
                dotIcon={<Check size={8} color="#fff" />}
                dotBgColor="#10B981"
                onClick={() => console.log("Avatar clicked")}
                className="cursor-pointer transition-all hover:shadow-lg hover:border-2 hover:border-blue-500"
              />
            </div>

            <CodeBlock
              code={interactiveExampleCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/InteractiveExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Group Avatars */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Avatar Group
            </h3>
            <p className="text-text-secondary mb-4">
              Display multiple avatars together with automatic stacking.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <div className="flex -space-x-3 mb-6">
                <Avatar name="User 1" size={40} />
                <Avatar name="User 2" size={40} />
                <Avatar name="User 3" size={40} />
                <Avatar name="User 4" size={40} />
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600">
                  +2
                </div>
              </div>

              <div className="flex -space-x-4">
                <Avatar
                  name="Team A"
                  size={56}
                  dotIcon={<Check size={10} color="#fff" />}
                  dotBgColor="#10B981"
                />
                <Avatar
                  name="Team B"
                  size={56}
                  dotIcon={<Clock size={10} color="#fff" />}
                  dotBgColor="#F59E0B"
                />
                <Avatar
                  name="Team C"
                  size={56}
                  dotIcon={<Phone size={10} color="#fff" />}
                  dotBgColor="#EF4444"
                />
              </div>
            </div>

            <CodeBlock
              code={`import { Avatar } from "@khanhromvn/zenui";

function GroupExample() {
  return (
    <div className="flex -space-x-3">
      <Avatar name="User 1" size={40} />
      <Avatar name="User 2" size={40} />
      <Avatar name="User 3" size={40} />
      <Avatar name="User 4" size={40} />
      <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600">
        +2
      </div>
    </div>
  );
}`}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/GroupExample.tsx"
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
            Complete list of props available for the Avatar component.
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
                    <td className="px-6 py-4 text-text-secondary">40</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Avatar size in pixels (16-200)
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      src
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Image URL source
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      alt
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Alt text for image
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      name
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Name for initials fallback
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
                    <td className="px-6 py-4 text-text-secondary">
                      Icon to display as main avatar content (replaces
                      image/initials)
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      dotIcon
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      ReactNode
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Icon to display in dot indicator (status icon)
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      dotBgColor
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"#10B981"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Background color of icon dot
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      shape
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      "circle" | "square" | "rounded"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"circle"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Avatar shape
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      fallbackType
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      "icon" | "initials"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"icon"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Fallback type when image fails
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
                      onClick
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      (e: MouseEvent) =&gt; void
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Click event handler
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

export default AvatarSection;
