import { useState } from "react";
import {
  Accordion,
  AccordionList,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../../../components/package/accordion";
import { CodeBlock } from "../../../../components/package/codeblock";
import { Button } from "../../../../components/package/button";
import { Badge } from "../../../../components/package/badge";
import { Input } from "../../../../components/package/input";
import { Tab, TabItem } from "../../../../components/package/tab";
import {
  FileCode,
  Plus,
  AlertCircle,
  CheckCircle,
  Settings,
  User,
  Mail,
  Lock,
  Bell,
  Shield,
  CreditCard,
  FileText,
  Download,
  Upload,
  Trash2,
  Edit,
  Star,
  Zap,
  Search,
  Calendar,
  X,
  Filter,
  RefreshCw,
  MessageSquare,
  Info,
  Play,
  Pause,
  Volume2,
  List,
  Grid,
  Layout,
  Sparkles,
  Rocket,
  Home,
  Smartphone,
  Key,
  Monitor,
} from "lucide-react";
import RightPanel from "../RightPanel";

const AccordionSection = () => {
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

  const basicUsageCode = `import {
  Accordion,
  AccordionList,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@khanhromvn/zenui";

function MyComponent() {
  return (
    <Accordion type="single" collapsible>
      <AccordionList className="bg-card-background border border-border-default rounded-lg">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Getting Started
          </AccordionTrigger>
          <AccordionContent>
            <p>Welcome to the accordion component!</p>
          </AccordionContent>
        </AccordionItem>
      </AccordionList>
    </Accordion>
  );
}`;

  // State cho các ví dụ interactive
  const [activeTab, setActiveTab] = useState("tab1");
  const [searchValue, setSearchValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <div className="max-w-4xl mx-auto">
        {/* ABOUT SECTION */}
        <section id="about" className="mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-3">
            Accordion
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            A flexible and accessible accordion component that allows users to
            show and hide content sections. Perfect for FAQs, settings panels,
            and content organization with support for single or multiple open
            items, custom icons, and extensive styling options.
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
            Here's a simple example to get you started with the Accordion
            component.
          </p>

          {/* Live Demo */}
          <div className="bg-card-background border border-border-default rounded-md p-8 mb-6">
            <Accordion type="single" collapsible>
              <AccordionList className="bg-card-background border border-border-default rounded-lg">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Getting Started</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Welcome to the accordion component! This is a basic
                      example showing how to use the accordion.
                    </p>
                    <p>
                      The content area can contain any React components, text,
                      or HTML elements.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Installation Guide</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Install the package using npm or yarn:
                    </p>
                    <code className="block bg-gray-800 text-gray-100 px-3 py-2 rounded text-sm mb-2">
                      npm install @khanhromvn/zenui
                    </code>
                    <code className="block bg-gray-800 text-gray-100 px-3 py-2 rounded text-sm">
                      yarn add @khanhromvn/zenui
                    </code>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>API Reference</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Check the props section for complete API documentation and
                      all available options.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </AccordionList>
            </Accordion>
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

          {/* Example 1: Accordion với Button Components */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              1. Accordion với Button Components
            </h3>
            <p className="text-text-secondary mb-4">
              Sử dụng các Button components bên trong Accordion để tạo hành động
              tương tác.
            </p>

            <div className="bg-card-background border border-border-default rounded-md p-8 mb-6">
              <Accordion type="single" collapsible>
                <AccordionList className="bg-card-background border border-border-default rounded-lg">
                  <AccordionItem value="buttons-1">
                    <AccordionTrigger className="hover:bg-dropdown-itemHover text-text-primary font-semibold">
                      <div className="flex items-center gap-3">
                        <Zap size={18} className="text-yellow-500" />
                        Action Buttons
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 p-4">
                        <div className="flex flex-wrap gap-3">
                          <Button
                            size={100}
                            icon={<Play size={16} />}
                            className="bg-green-600 hover:bg-green-700 text-white border border-green-700"
                          >
                            Start Process
                          </Button>
                          <Button
                            size={100}
                            icon={<Pause size={16} />}
                            className="bg-yellow-600 hover:bg-yellow-700 text-white border border-yellow-700"
                          >
                            Pause
                          </Button>
                          <Button
                            size={100}
                            icon={<StopCircle size={16} />}
                            className="bg-red-600 hover:bg-red-700 text-white border border-red-700"
                          >
                            Stop
                          </Button>
                          <Button
                            size={100}
                            icon={<RefreshCw size={16} />}
                            className="bg-blue-600 hover:bg-blue-700 text-white border border-blue-700"
                          >
                            Restart
                          </Button>
                        </div>

                        <div className="flex flex-wrap gap-3">
                          <Button
                            size={80}
                            icon={<Download size={16} />}
                            className="bg-button-bg hover:bg-button-bgHover text-button-bgText border border-button-border"
                          >
                            Download
                          </Button>
                          <Button
                            size={80}
                            icon={<Upload size={16} />}
                            className="bg-button-secondBg hover:bg-button-secondBgHover text-text-primary border border-button-border"
                          >
                            Upload
                          </Button>
                          <Button
                            size={80}
                            icon={<Edit size={16} />}
                            className="bg-purple-600 hover:bg-purple-700 text-white border border-purple-700"
                          >
                            Edit
                          </Button>
                          <Button
                            size={80}
                            icon={<Trash2 size={16} />}
                            className="bg-red-600 hover:bg-red-700 text-white border border-red-700"
                          >
                            Delete
                          </Button>
                        </div>

                        <div className="flex flex-wrap gap-3">
                          <Button
                            size={120}
                            width="fit"
                            icon={<Rocket size={16} />}
                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
                          >
                            Launch Project
                          </Button>
                          <Button
                            size={120}
                            width="fit"
                            icon={<Sparkles size={16} />}
                            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0"
                          >
                            Upgrade Plan
                          </Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </AccordionList>
              </Accordion>
            </div>
          </div>

          {/* Example 2: Accordion với Input Components */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              2. Accordion với Input Components
            </h3>
            <p className="text-text-secondary mb-4">
              Tích hợp các Input components để tạo form bên trong Accordion.
            </p>

            <div className="bg-card-background border border-border-default rounded-md p-8 mb-6">
              <Accordion type="single" collapsible>
                <AccordionList className="bg-card-background border border-border-default rounded-lg">
                  <AccordionItem value="inputs-1">
                    <AccordionTrigger className="hover:bg-dropdown-itemHover text-text-primary font-semibold">
                      <div className="flex items-center gap-3">
                        <Settings size={18} className="text-primary" />
                        Form Settings
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-6 p-4">
                        <div>
                          <label className="block text-sm font-medium text-text-primary mb-2">
                            Search Input
                          </label>
                          <Input
                            leftIcon={<Search size={16} />}
                            placeholder="Search settings..."
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            rightIcon={[
                              searchValue && (
                                <X
                                  size={16}
                                  onClick={() => setSearchValue("")}
                                />
                              ),
                            ].filter(Boolean)}
                            className="bg-input-background border border-input-border hover:border-input-borderHover focus:border-input-borderFocus"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-text-primary mb-2">
                            Email Input
                          </label>
                          <Input
                            leftIcon={<Mail size={16} />}
                            placeholder="Enter your email"
                            value={emailValue}
                            onChange={(e) => setEmailValue(e.target.value)}
                            className="bg-input-background border border-input-border hover:border-input-borderHover focus:border-input-borderFocus"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-text-primary mb-2">
                            Password Input
                          </label>
                          <Input
                            leftIcon={<Lock size={16} />}
                            placeholder="Enter your password"
                            type="password"
                            value={passwordValue}
                            onChange={(e) => setPasswordValue(e.target.value)}
                            className="bg-input-background border border-input-border hover:border-input-borderHover focus:border-input-borderFocus"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-text-primary mb-2">
                            Calendar Input
                          </label>
                          <Input
                            leftIcon={<Calendar size={16} />}
                            placeholder="Select date"
                            type="calendar"
                            className="bg-input-background border border-input-border hover:border-input-borderHover focus:border-input-borderFocus"
                          />
                        </div>

                        <div className="flex gap-3">
                          <Button
                            size={100}
                            width="full"
                            className="bg-button-bg hover:bg-button-bgHover text-button-bgText border border-button-border"
                          >
                            Save Changes
                          </Button>
                          <Button
                            size={100}
                            width="full"
                            className="bg-button-secondBg hover:bg-button-secondBgHover text-text-primary border border-button-border"
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </AccordionList>
              </Accordion>
            </div>
          </div>

          {/* Example 3: Accordion với Badge Components */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              3. Accordion với Badge Components
            </h3>
            <p className="text-text-secondary mb-4">
              Sử dụng Badge components để hiển thị trạng thái và phân loại.
            </p>

            <div className="bg-card-background border border-border-default rounded-md p-8 mb-6">
              <Accordion type="multiple">
                <AccordionList className="bg-card-background border border-border-default rounded-lg">
                  <AccordionItem value="badges-1">
                    <AccordionTrigger className="hover:bg-dropdown-itemHover text-text-primary font-semibold">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-3">
                          <Tag size={18} />
                          Badge Variants
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="primary" size={90}>
                            New
                          </Badge>
                          <Badge variant="success" size={90} dot>
                            Active
                          </Badge>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="p-4 space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-text-primary mb-2">
                            Badge Display
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="default" size={100}>
                              Default
                            </Badge>
                            <Badge variant="primary" size={100} dot>
                              Primary
                            </Badge>
                            <Badge variant="secondary" size={100}>
                              Secondary
                            </Badge>
                            <Badge variant="success" size={100} dot>
                              Success
                            </Badge>
                            <Badge variant="warning" size={100}>
                              Warning
                            </Badge>
                            <Badge variant="error" size={100} dot>
                              Error
                            </Badge>
                            <Badge variant="outline" size={100}>
                              Outline
                            </Badge>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium text-text-primary mb-2">
                            Badge Sizes
                          </h4>
                          <div className="flex flex-wrap items-center gap-3">
                            <Badge variant="primary" size={70}>
                              Small (70%)
                            </Badge>
                            <Badge variant="primary" size={100}>
                              Default (100%)
                            </Badge>
                            <Badge variant="primary" size={130}>
                              Large (130%)
                            </Badge>
                            <Badge variant="primary" size={160}>
                              XL (160%)
                            </Badge>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium text-text-primary mb-2">
                            Badge với Icons
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            <Badge
                              variant="primary"
                              size={100}
                              className="flex items-center gap-1"
                            >
                              <Star size={12} /> Featured
                            </Badge>
                            <Badge
                              variant="success"
                              size={100}
                              className="flex items-center gap-1"
                            >
                              <CheckCircle size={12} /> Verified
                            </Badge>
                            <Badge
                              variant="warning"
                              size={100}
                              className="flex items-center gap-1"
                            >
                              <AlertCircle size={12} /> Pending
                            </Badge>
                            <Badge
                              variant="error"
                              size={100}
                              className="flex items-center gap-1"
                            >
                              <X size={12} /> Rejected
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="badges-2">
                    <AccordionTrigger className="hover:bg-dropdown-itemHover text-text-primary font-semibold">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-3">
                          <Filter size={18} />
                          Filter Tags
                        </div>
                        <Badge variant="outline" size={90}>
                          5 tags
                        </Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="p-4">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge
                            variant="primary"
                            size={100}
                            className="cursor-pointer hover:opacity-80"
                          >
                            React
                          </Badge>
                          <Badge
                            variant="secondary"
                            size={100}
                            className="cursor-pointer hover:opacity-80"
                          >
                            TypeScript
                          </Badge>
                          <Badge
                            variant="success"
                            size={100}
                            className="cursor-pointer hover:opacity-80"
                          >
                            Tailwind
                          </Badge>
                          <Badge
                            variant="warning"
                            size={100}
                            className="cursor-pointer hover:opacity-80"
                          >
                            Node.js
                          </Badge>
                          <Badge
                            variant="error"
                            size={100}
                            className="cursor-pointer hover:opacity-80"
                          >
                            MongoDB
                          </Badge>
                          <Badge
                            variant="outline"
                            size={100}
                            className="cursor-pointer hover:opacity-80"
                          >
                            GraphQL
                          </Badge>
                          <Badge
                            variant="primary"
                            size={100}
                            dot
                            className="cursor-pointer hover:opacity-80"
                          >
                            Docker
                          </Badge>
                          <Badge
                            variant="success"
                            size={100}
                            dot
                            className="cursor-pointer hover:opacity-80"
                          >
                            AWS
                          </Badge>
                        </div>
                        <Button
                          size={80}
                          icon={<X size={14} />}
                          className="bg-button-secondBg hover:bg-button-secondBgHover text-text-primary border border-button-border"
                        >
                          Clear All Filters
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </AccordionList>
              </Accordion>
            </div>
          </div>

          {/* Example 4: Accordion với Tab Components */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              4. Accordion với Tab Components
            </h3>
            <p className="text-text-secondary mb-4">
              Tích hợp Tab components để tạo navigation bên trong Accordion.
            </p>

            <div className="bg-card-background border border-border-default rounded-md p-8 mb-6">
              <Accordion type="single" collapsible>
                <AccordionList className="bg-card-background border border-border-default rounded-lg">
                  <AccordionItem value="tabs-1">
                    <AccordionTrigger className="hover:bg-dropdown-itemHover text-text-primary font-semibold">
                      <div className="flex items-center gap-3">
                        <Layout size={18} />
                        Tab Navigation
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="p-4 space-y-6">
                        <div>
                          <h4 className="text-sm font-medium text-text-primary mb-3">
                            Basic Tabs
                          </h4>
                          <Tab defaultActive="tab1" width="full">
                            <TabItem
                              id="tab1"
                              icon={<Home size={16} />}
                              className="border-b-2 border-transparent"
                              hoverClassName="hover:bg-gray-100 hover:border-gray-300"
                              activeClassName="border-primary text-primary"
                            >
                              Home
                            </TabItem>
                            <TabItem
                              id="tab2"
                              icon={<User size={16} />}
                              className="border-b-2 border-transparent"
                              hoverClassName="hover:bg-gray-100 hover:border-gray-300"
                              activeClassName="border-primary text-primary"
                            >
                              Profile
                            </TabItem>
                            <TabItem
                              id="tab3"
                              icon={<Settings size={16} />}
                              className="border-b-2 border-transparent"
                              hoverClassName="hover:bg-gray-100 hover:border-gray-300"
                              activeClassName="border-primary text-primary"
                            >
                              Settings
                            </TabItem>
                          </Tab>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium text-text-primary mb-3">
                            Pill Style Tabs
                          </h4>
                          <Tab
                            width="full"
                            className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg"
                          >
                            <TabItem
                              id="view1"
                              icon={<Grid size={16} />}
                              className="rounded-md border-0"
                              hoverClassName="hover:bg-white/50 dark:hover:bg-gray-700/50"
                              activeClassName="bg-white dark:bg-gray-900 shadow-sm text-primary"
                            >
                              Grid
                            </TabItem>
                            <TabItem
                              id="view2"
                              icon={<List size={16} />}
                              className="rounded-md border-0"
                              hoverClassName="hover:bg-white/50 dark:hover:bg-gray-700/50"
                              activeClassName="bg-white dark:bg-gray-900 shadow-sm text-primary"
                            >
                              List
                            </TabItem>
                            <TabItem
                              id="view3"
                              icon={<Calendar size={16} />}
                              className="rounded-md border-0"
                              hoverClassName="hover:bg-white/50 dark:hover:bg-gray-700/50"
                              activeClassName="bg-white dark:bg-gray-900 shadow-sm text-primary"
                            >
                              Calendar
                            </TabItem>
                          </Tab>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium text-text-primary mb-3">
                            Vertical Border Tabs
                          </h4>
                          <Tab width="full" className="border-l-0">
                            <TabItem
                              id="info1"
                              icon={<Info size={16} />}
                              className="border-l-4 border-transparent"
                              hoverClassName="hover:bg-gray-100 hover:border-l-gray-300"
                              activeClassName="border-l-primary bg-blue-50 text-primary"
                            >
                              Information
                            </TabItem>
                            <TabItem
                              id="info2"
                              icon={<FileText size={16} />}
                              className="border-l-4 border-transparent"
                              hoverClassName="hover:bg-gray-100 hover:border-l-gray-300"
                              activeClassName="border-l-primary bg-blue-50 text-primary"
                            >
                              Documents
                            </TabItem>
                            <TabItem
                              id="info3"
                              icon={<History size={16} />}
                              className="border-l-4 border-transparent"
                              hoverClassName="hover:bg-gray-100 hover:border-l-gray-300"
                              activeClassName="border-l-primary bg-blue-50 text-primary"
                            >
                              History
                            </TabItem>
                          </Tab>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </AccordionList>
              </Accordion>
            </div>
          </div>

          {/* Example 5: Accordion phức tạp với nhiều components */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              5. Dashboard Settings (Accordion phức tạp)
            </h3>
            <p className="text-text-secondary mb-4">
              Một ví dụ thực tế với sự kết hợp của nhiều components.
            </p>

            <div className="bg-card-background border border-border-default rounded-md p-8 mb-6">
              <Accordion type="multiple" collapsible>
                <AccordionList className="bg-card-background border border-border-default rounded-lg">
                  {/* Profile Settings */}
                  <AccordionItem value="dashboard-profile">
                    <AccordionTrigger className="hover:bg-dropdown-itemHover text-text-primary font-semibold">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <User size={18} className="text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold">
                              Profile Settings
                            </div>
                            <div className="text-xs text-text-secondary">
                              Manage your personal information
                            </div>
                          </div>
                        </div>
                        <Badge variant="success" size={80} dot>
                          Updated
                        </Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="p-6 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-text-primary mb-2">
                              Full Name
                            </label>
                            <Input
                              leftIcon={<User size={16} />}
                              placeholder="John Doe"
                              className="bg-input-background border border-input-border hover:border-input-borderHover focus:border-input-borderFocus"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-text-primary mb-2">
                              Email Address
                            </label>
                            <Input
                              leftIcon={<Mail size={16} />}
                              placeholder="john@example.com"
                              className="bg-input-background border border-input-border hover:border-input-borderHover focus:border-input-borderFocus"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-text-primary mb-2">
                            Bio
                          </label>
                          <textarea
                            className="w-full h-32 px-3 py-2 bg-input-background border border-input-border hover:border-input-borderHover focus:border-input-borderFocus rounded-md resize-none"
                            placeholder="Tell us about yourself..."
                          />
                        </div>

                        <div className="flex gap-3">
                          <Button
                            size={100}
                            className="bg-button-bg hover:bg-button-bgHover text-button-bgText border border-button-border"
                          >
                            Save Changes
                          </Button>
                          <Button
                            size={100}
                            className="bg-button-secondBg hover:bg-button-secondBgHover text-text-primary border border-button-border"
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Security Settings */}
                  <AccordionItem value="dashboard-security">
                    <AccordionTrigger className="hover:bg-dropdown-itemHover text-text-primary font-semibold">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center">
                            <Shield size={18} className="text-green-500" />
                          </div>
                          <div>
                            <div className="font-semibold">Security</div>
                            <div className="text-xs text-text-secondary">
                              Password, 2FA, and sessions
                            </div>
                          </div>
                        </div>
                        <Badge variant="warning" size={80}>
                          2FA Off
                        </Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="p-6 space-y-6">
                        <div>
                          <h4 className="text-sm font-medium text-text-primary mb-4">
                            Password
                          </h4>
                          <div className="space-y-4">
                            <Input
                              leftIcon={<Lock size={16} />}
                              placeholder="Current password"
                              type="password"
                              className="bg-input-background border border-input-border hover:border-input-borderHover focus:border-input-borderFocus"
                            />
                            <Input
                              leftIcon={<Key size={16} />}
                              placeholder="New password"
                              type="password"
                              className="bg-input-background border border-input-border hover:border-input-borderHover focus:border-input-borderFocus"
                            />
                            <Input
                              leftIcon={<Key size={16} />}
                              placeholder="Confirm new password"
                              type="password"
                              className="bg-input-background border border-input-border hover:border-input-borderHover focus:border-input-borderFocus"
                            />
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium text-text-primary mb-4">
                            Two-Factor Authentication
                          </h4>
                          <div className="flex items-center justify-between p-4 bg-card-background border border-border-default rounded-lg">
                            <div className="flex items-center gap-3">
                              <Smartphone size={20} className="text-primary" />
                              <div>
                                <div className="font-medium text-text-primary">
                                  Authenticator App
                                </div>
                                <div className="text-sm text-text-secondary">
                                  Use an app like Google Authenticator
                                </div>
                              </div>
                            </div>
                            <Button
                              size={80}
                              className="bg-button-bg hover:bg-button-bgHover text-button-bgText border border-button-border"
                            >
                              Enable
                            </Button>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium text-text-primary mb-4">
                            Active Sessions
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-card-background border border-border-default rounded-lg">
                              <div className="flex items-center gap-3">
                                <Monitor
                                  size={16}
                                  className="text-text-secondary"
                                />
                                <div>
                                  <div className="font-medium text-text-primary">
                                    Chrome on Windows
                                  </div>
                                  <div className="text-xs text-text-secondary">
                                    Last active: 2 hours ago
                                  </div>
                                </div>
                              </div>
                              <Badge variant="success" size={70} dot>
                                Current
                              </Badge>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-card-background border border-border-default rounded-lg">
                              <div className="flex items-center gap-3">
                                <Smartphone
                                  size={16}
                                  className="text-text-secondary"
                                />
                                <div>
                                  <div className="font-medium text-text-primary">
                                    Safari on iPhone
                                  </div>
                                  <div className="text-xs text-text-secondary">
                                    Last active: 3 days ago
                                  </div>
                                </div>
                              </div>
                              <Button
                                size={70}
                                icon={<LogOut size={14} />}
                                className="bg-red-100 hover:bg-red-200 text-red-700 border border-red-300"
                              >
                                Revoke
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Notification Settings */}
                  <AccordionItem value="dashboard-notifications">
                    <AccordionTrigger className="hover:bg-dropdown-itemHover text-text-primary font-semibold">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-purple-500/10 rounded-full flex items-center justify-center">
                            <Bell size={18} className="text-purple-500" />
                          </div>
                          <div>
                            <div className="font-semibold">Notifications</div>
                            <div className="text-xs text-text-secondary">
                              Email, push, and SMS alerts
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="primary" size={70}>
                            3 New
                          </Badge>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="p-6">
                        <Tab
                          defaultActive="email"
                          width="full"
                          className="mb-6"
                        >
                          <TabItem
                            id="email"
                            icon={<Mail size={16} />}
                            className="border-b-2 border-transparent"
                            hoverClassName="hover:bg-gray-100 hover:border-gray-300"
                            activeClassName="border-primary text-primary"
                          >
                            Email
                          </TabItem>
                          <TabItem
                            id="push"
                            icon={<Bell size={16} />}
                            className="border-b-2 border-transparent"
                            hoverClassName="hover:bg-gray-100 hover:border-gray-300"
                            activeClassName="border-primary text-primary"
                          >
                            Push
                          </TabItem>
                          <TabItem
                            id="sms"
                            icon={<MessageSquare size={16} />}
                            className="border-b-2 border-transparent"
                            hoverClassName="hover:bg-gray-100 hover:border-gray-300"
                            activeClassName="border-primary text-primary"
                          >
                            SMS
                          </TabItem>
                        </Tab>

                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-3 bg-card-background border border-border-default rounded-lg">
                            <div>
                              <div className="font-medium text-text-primary">
                                New Messages
                              </div>
                              <div className="text-sm text-text-secondary">
                                Get notified when you receive new messages
                              </div>
                            </div>
                            <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between p-3 bg-card-background border border-border-default rounded-lg">
                            <div>
                              <div className="font-medium text-text-primary">
                                Mention Notifications
                              </div>
                              <div className="text-sm text-text-secondary">
                                Get notified when someone mentions you
                              </div>
                            </div>
                            <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between p-3 bg-card-background border border-border-default rounded-lg">
                            <div>
                              <div className="font-medium text-text-primary">
                                System Updates
                              </div>
                              <div className="text-sm text-text-secondary">
                                Important updates about the system
                              </div>
                            </div>
                            <div className="w-12 h-6 bg-gray-300 rounded-full relative cursor-pointer">
                              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between p-3 bg-card-background border border-border-default rounded-lg">
                            <div>
                              <div className="font-medium text-text-primary">
                                Marketing Emails
                              </div>
                              <div className="text-sm text-text-secondary">
                                Receive emails about new features and offers
                              </div>
                            </div>
                            <div className="w-12 h-6 bg-gray-300 rounded-full relative cursor-pointer">
                              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-border-default">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-medium text-text-primary">
                                Notification Sound
                              </div>
                              <div className="text-sm text-text-secondary">
                                Choose a sound for notifications
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <Button
                                size={70}
                                icon={<Volume2 size={14} />}
                                className="bg-button-secondBg hover:bg-button-secondBgHover text-text-primary border border-button-border"
                              >
                                Test
                              </Button>
                              <select className="px-3 py-1.5 bg-input-background border border-border-default rounded-md text-text-primary text-sm">
                                <option>Default</option>
                                <option>Chime</option>
                                <option>Bell</option>
                                <option>Alert</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Billing Settings */}
                  <AccordionItem value="dashboard-billing">
                    <AccordionTrigger className="hover:bg-dropdown-itemHover text-text-primary font-semibold">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center">
                            <CreditCard size={18} className="text-blue-500" />
                          </div>
                          <div>
                            <div className="font-semibold">Billing</div>
                            <div className="text-xs text-text-secondary">
                              Plans, payment methods, and invoices
                            </div>
                          </div>
                        </div>
                        <Badge variant="primary" size={80}>
                          Pro Plan
                        </Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="p-6 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="p-4 bg-card-background border border-border-default rounded-lg">
                            <div className="text-sm text-text-secondary mb-1">
                              Current Plan
                            </div>
                            <div className="text-xl font-bold text-text-primary mb-2">
                              Pro
                            </div>
                            <div className="text-sm text-text-secondary">
                              $29/month
                            </div>
                          </div>
                          <div className="p-4 bg-card-background border border-border-default rounded-lg">
                            <div className="text-sm text-text-secondary mb-1">
                              Next Billing
                            </div>
                            <div className="text-xl font-bold text-text-primary mb-2">
                              Dec 15, 2024
                            </div>
                            <div className="text-sm text-text-secondary">
                              Auto-renewal
                            </div>
                          </div>
                          <div className="p-4 bg-card-background border border-border-default rounded-lg">
                            <div className="text-sm text-text-secondary mb-1">
                              Storage Used
                            </div>
                            <div className="text-xl font-bold text-text-primary mb-2">
                              45.2 GB
                            </div>
                            <div className="text-sm text-text-secondary">
                              of 100 GB
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium text-text-primary mb-4">
                            Payment Methods
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-card-background border border-border-default rounded-lg">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-6 bg-blue-500 rounded flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">
                                    VISA
                                  </span>
                                </div>
                                <div>
                                  <div className="font-medium text-text-primary">
                                    •••• 4242
                                  </div>
                                  <div className="text-xs text-text-secondary">
                                    Expires 12/25
                                  </div>
                                </div>
                              </div>
                              <Badge variant="success" size={70} dot>
                                Default
                              </Badge>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-card-background border border-border-default rounded-lg">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-6 bg-red-500 rounded flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">
                                    MC
                                  </span>
                                </div>
                                <div>
                                  <div className="font-medium text-text-primary">
                                    •••• 5555
                                  </div>
                                  <div className="text-xs text-text-secondary">
                                    Expires 10/24
                                  </div>
                                </div>
                              </div>
                              <Button
                                size={70}
                                className="bg-button-secondBg hover:bg-button-secondBgHover text-text-primary border border-button-border"
                              >
                                Make Default
                              </Button>
                            </div>
                          </div>
                          <Button
                            size={80}
                            icon={<Plus size={14} />}
                            className="mt-3 bg-button-bg hover:bg-button-bgHover text-button-bgText border border-button-border"
                          >
                            Add Payment Method
                          </Button>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium text-text-primary mb-4">
                            Recent Invoices
                          </h4>
                          <div className="space-y-2">
                            {[
                              {
                                id: "INV-001",
                                date: "Nov 15, 2024",
                                amount: "$29.00",
                                status: "Paid",
                              },
                              {
                                id: "INV-002",
                                date: "Oct 15, 2024",
                                amount: "$29.00",
                                status: "Paid",
                              },
                              {
                                id: "INV-003",
                                date: "Sep 15, 2024",
                                amount: "$29.00",
                                status: "Paid",
                              },
                            ].map((invoice) => (
                              <div
                                key={invoice.id}
                                className="flex items-center justify-between p-3 bg-card-background border border-border-default rounded-lg"
                              >
                                <div>
                                  <div className="font-medium text-text-primary">
                                    {invoice.id}
                                  </div>
                                  <div className="text-sm text-text-secondary">
                                    {invoice.date}
                                  </div>
                                </div>
                                <div className="flex items-center gap-4">
                                  <div className="text-text-primary font-medium">
                                    {invoice.amount}
                                  </div>
                                  <Badge
                                    variant="success"
                                    size={70}
                                    className="capitalize"
                                  >
                                    {invoice.status}
                                  </Badge>
                                  <Button
                                    size={60}
                                    icon={<Download size={12} />}
                                    className="bg-button-secondBg hover:bg-button-secondBgHover text-text-primary border border-button-border"
                                  >
                                    Download
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </AccordionList>
              </Accordion>
            </div>
          </div>
        </section>

        {/* PROPS SECTION */}
        <section id="props" className="mb-12">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Props
          </h2>
          <p className="text-text-secondary mb-6">
            Complete list of props available for Accordion components.
          </p>

          {/* Accordion Props */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Accordion Props
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
                        type
                      </td>
                      <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                        "single" | "multiple"
                      </td>
                      <td className="px-6 py-4 text-text-secondary">
                        "single"
                      </td>
                      <td className="px-6 py-4 text-text-secondary">
                        Allow single or multiple items open
                      </td>
                    </tr>
                    <tr className="hover:bg-table-rowHoverBg">
                      <td className="px-6 py-4 text-text-primary font-mono text-xs">
                        collapsible
                      </td>
                      <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                        boolean
                      </td>
                      <td className="px-6 py-4 text-text-secondary">true</td>
                      <td className="px-6 py-4 text-text-secondary">
                        Allow items to be closed
                      </td>
                    </tr>
                    <tr className="hover:bg-table-rowHoverBg">
                      <td className="px-6 py-4 text-text-primary font-mono text-xs">
                        className
                      </td>
                      <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                        string
                      </td>
                      <td className="px-6 py-4 text-text-secondary">-</td>
                      <td className="px-6 py-4 text-text-secondary">
                        Custom CSS classes
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* AccordionItem Props */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              AccordionItem Props
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
                        value
                      </td>
                      <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                        string
                      </td>
                      <td className="px-6 py-4 text-text-secondary">-</td>
                      <td className="px-6 py-4 text-text-secondary">
                        Unique identifier for the item
                      </td>
                    </tr>
                    <tr className="hover:bg-table-rowHoverBg">
                      <td className="px-6 py-4 text-text-primary font-mono text-xs">
                        className
                      </td>
                      <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                        string
                      </td>
                      <td className="px-6 py-4 text-text-secondary">-</td>
                      <td className="px-6 py-4 text-text-secondary">
                        Custom CSS classes
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* AccordionTrigger Props */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              AccordionTrigger Props
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
                        icon
                      </td>
                      <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                        ReactNode
                      </td>
                      <td className="px-6 py-4 text-text-secondary">
                        ChevronDown
                      </td>
                      <td className="px-6 py-4 text-text-secondary">
                        Custom icon component
                      </td>
                    </tr>
                    <tr className="hover:bg-table-rowHoverBg">
                      <td className="px-6 py-4 text-text-primary font-mono text-xs">
                        iconPosition
                      </td>
                      <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                        "left" | "right"
                      </td>
                      <td className="px-6 py-4 text-text-secondary">"right"</td>
                      <td className="px-6 py-4 text-text-secondary">
                        Position of the icon
                      </td>
                    </tr>
                    <tr className="hover:bg-table-rowHoverBg">
                      <td className="px-6 py-4 text-text-primary font-mono text-xs">
                        className
                      </td>
                      <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                        string
                      </td>
                      <td className="px-6 py-4 text-text-secondary">-</td>
                      <td className="px-6 py-4 text-text-secondary">
                        Custom CSS classes
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* AccordionContent Props */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              AccordionContent Props
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
                        className
                      </td>
                      <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                        string
                      </td>
                      <td className="px-6 py-4 text-text-secondary">-</td>
                      <td className="px-6 py-4 text-text-secondary">
                        Custom CSS classes
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

// Thêm các icon components còn thiếu
const StopCircle = ({ size }: { size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <rect x="8" y="8" width="8" height="8" />
  </svg>
);

const History = ({ size }: { size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <path d="M12 7v5l4 2" />
  </svg>
);

const LogOut = ({ size }: { size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

const Tag = ({ size }: { size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
    <path d="M7 7h.01" />
  </svg>
);

export default AccordionSection;
