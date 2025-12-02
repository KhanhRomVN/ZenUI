import { useState } from "react";
import { Divider } from "../../../../components/package/divider";
import { CodeBlock } from "../../../../components/package/codeblock";
import { FileCode } from "lucide-react";
import RightPanel from "../RightPanel";

const DividerSection = () => {
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

  const basicUsageCode = `import { Divider } from "@khanhromvn/zenui";

function MyComponent() {
  return (
    <div>
      <p>Content above</p>
      <Divider />
      <p>Content below</p>
    </div>
  );
}`;

  const styleExampleCode = `import { Divider } from "@khanhromvn/zenui";

function StyleExample() {
  return (
    <div className="space-y-4">
      {/* Solid divider (mặc định) */}
      <Divider style="solid" />
      
      {/* Dashed divider */}
      <Divider style="dashed" />
      
      {/* Dotted divider */}
      <Divider style="dotted" />
    </div>
  );
}`;

  const thicknessExampleCode = `import { Divider } from "@khanhromvn/zenui";

function ThicknessExample() {
  return (
    <div className="space-y-4">
      {/* Thin */}
      <Divider thickness="thin" />
      
      {/* Medium (mặc định) */}
      <Divider thickness="medium" />
      
      {/* Thick */}
      <Divider thickness="thick" />
      
      {/* Custom thickness (pixels) */}
      <Divider thickness={5} />
    </div>
  );
}`;

  const lengthAlignCode = `import { Divider } from "@khanhromvn/zenui";

function LengthAlignExample() {
  return (
    <div className="space-y-6">
      {/* 50% chiều dài, căn giữa */}
      <Divider length={50} align="center" />
      
      {/* 70% chiều dài, căn trái */}
      <Divider length={70} align="start" />
      
      {/* 60% chiều dài, căn phải */}
      <Divider length={60} align="end" />
    </div>
  );
}`;

  const verticalExampleCode = `import { Divider } from "@khanhromvn/zenui";

function VerticalExample() {
  return (
    <div className="flex items-center gap-4" style={{ height: "200px" }}>
      <p>Left content</p>
      
      {/* Divider dọc */}
      <Divider 
        orientation="vertical" 
        length={80}
        align="center"
      />
      
      <p>Right content</p>
    </div>
  );
}`;

  const customColorCode = `import { Divider } from "@khanhromvn/zenui";

function CustomColorExample() {
  return (
    <div className="space-y-4">
      {/* Màu đỏ */}
      <Divider className="border-red-500" />
      
      {/* Màu xanh dương */}
      <Divider className="border-blue-500" />
      
      {/* Màu xanh lá */}
      <Divider className="border-green-500" />
      
      {/* Custom với opacity */}
      <Divider className="border-purple-500 opacity-50" />
    </div>
  );
}`;

  return (
    <>
      <div className="max-w-4xl mx-auto">
        {/* ABOUT SECTION */}
        <section id="about" className="mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-3">Divider</h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Component phân cách linh hoạt với hỗ trợ nhiều kiểu hiển thị (solid,
            dashed, dotted), tùy chỉnh độ dày, chiều dài và căn chỉnh. Hoàn hảo
            cho việc tách biệt nội dung trong giao diện của bạn.
          </p>
        </section>

        {/* INSTALL SECTION */}
        <section id="install" className="mb-12">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Cài đặt
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
            Cách sử dụng cơ bản
          </h2>
          <p className="text-text-secondary mb-6">
            Ví dụ đơn giản để bắt đầu với component Divider.
          </p>

          {/* Live Demo */}
          <div className="bg-card-background border border-border-default rounded-md p-8 mb-6">
            <p className="text-text-primary mb-4">Nội dung phía trên</p>
            <Divider />
            <p className="text-text-primary mt-4">Nội dung phía dưới</p>
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
            Các ví dụ nâng cao
          </h2>

          {/* Style Variants */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Kiểu hiển thị
            </h3>
            <p className="text-text-secondary mb-4">
              Divider hỗ trợ 3 kiểu hiển thị: solid (liền), dashed (gạch ngang),
              và dotted (chấm).
            </p>

            <div className="bg-card-background border border-border-default rounded-md p-8 mb-6 space-y-6">
              <div>
                <p className="text-sm text-text-secondary mb-2">
                  Solid (Mặc định)
                </p>
                <Divider style="solid" />
              </div>

              <div>
                <p className="text-sm text-text-secondary mb-2">Dashed</p>
                <Divider style="dashed" />
              </div>

              <div>
                <p className="text-sm text-text-secondary mb-2">Dotted</p>
                <Divider style="dotted" />
              </div>
            </div>

            <CodeBlock
              code={styleExampleCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/StyleExample.tsx"
              showLineNumbers={true}
              showGutter={true}
              showLineHighlight={false}
            />
          </div>

          {/* Thickness Variants */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Độ dày
            </h3>
            <p className="text-text-secondary mb-4">
              Tùy chỉnh độ dày của divider với các giá trị định sẵn hoặc số
              pixel tùy chỉnh.
            </p>

            <div className="bg-card-background border border-border-default rounded-md p-8 mb-6 space-y-6">
              <div>
                <p className="text-sm text-text-secondary mb-2">Thin</p>
                <Divider thickness="thin" />
              </div>

              <div>
                <p className="text-sm text-text-secondary mb-2">
                  Medium (Mặc định)
                </p>
                <Divider thickness="medium" />
              </div>

              <div>
                <p className="text-sm text-text-secondary mb-2">Thick</p>
                <Divider thickness="thick" />
              </div>

              <div>
                <p className="text-sm text-text-secondary mb-2">Custom (5px)</p>
                <Divider thickness={5} />
              </div>
            </div>

            <CodeBlock
              code={thicknessExampleCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/ThicknessExample.tsx"
              showLineNumbers={true}
              showGutter={true}
              showLineHighlight={false}
            />
          </div>

          {/* Length and Align */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Chiều dài và căn chỉnh
            </h3>
            <p className="text-text-secondary mb-4">
              Điều chỉnh độ dài (theo phần trăm) và vị trí căn chỉnh của
              divider.
            </p>

            <div className="bg-card-background border border-border-default rounded-md p-8 mb-6 space-y-6">
              <div>
                <p className="text-sm text-text-secondary mb-2">50% - Center</p>
                <Divider length={50} align="center" />
              </div>

              <div>
                <p className="text-sm text-text-secondary mb-2">70% - Start</p>
                <Divider length={70} align="start" />
              </div>

              <div>
                <p className="text-sm text-text-secondary mb-2">60% - End</p>
                <Divider length={60} align="end" />
              </div>
            </div>

            <CodeBlock
              code={lengthAlignCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/LengthAlignExample.tsx"
              showLineNumbers={true}
              showGutter={true}
              showLineHighlight={false}
            />
          </div>

          {/* Vertical Divider */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Divider dọc
            </h3>
            <p className="text-text-secondary mb-4">
              Sử dụng divider theo chiều dọc để phân cách nội dung ngang.
            </p>

            <div className="bg-card-background border border-border-default rounded-md p-8 mb-6">
              <div
                className="flex items-center gap-4"
                style={{ height: "200px" }}
              >
                <div className="flex-1">
                  <h4 className="font-semibold text-text-primary mb-2">
                    Nội dung bên trái
                  </h4>
                  <p className="text-sm text-text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>

                <Divider orientation="vertical" length={80} align="center" />

                <div className="flex-1">
                  <h4 className="font-semibold text-text-primary mb-2">
                    Nội dung bên phải
                  </h4>
                  <p className="text-sm text-text-secondary">
                    Sed do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
              </div>
            </div>

            <CodeBlock
              code={verticalExampleCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/VerticalExample.tsx"
              showLineNumbers={true}
              showGutter={true}
              showLineHighlight={false}
            />
          </div>

          {/* Custom Colors */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Tùy chỉnh màu sắc
            </h3>
            <p className="text-text-secondary mb-4">
              Sử dụng className để thay đổi màu sắc của divider.
            </p>

            <div className="bg-card-background border border-border-default rounded-md p-8 mb-6 space-y-6">
              <div>
                <p className="text-sm text-text-secondary mb-2">Red</p>
                <Divider className="border-red-500" />
              </div>

              <div>
                <p className="text-sm text-text-secondary mb-2">Blue</p>
                <Divider className="border-blue-500" />
              </div>

              <div>
                <p className="text-sm text-text-secondary mb-2">Green</p>
                <Divider className="border-green-500" />
              </div>

              <div>
                <p className="text-sm text-text-secondary mb-2">
                  Purple with Opacity
                </p>
                <Divider className="border-purple-500 opacity-50" />
              </div>
            </div>

            <CodeBlock
              code={customColorCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/CustomColorExample.tsx"
              showLineNumbers={true}
              showGutter={true}
              showLineHighlight={false}
            />
          </div>
        </section>

        {/* PROPS SECTION */}
        <section id="props" className="mb-12">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Props API
          </h2>
          <div className="bg-card-background border border-border-default rounded-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-table-header">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                    Prop
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                    Default
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                    Mô tả
                  </th>
                </tr>
              </thead>
              <tbody className="bg-card-background divide-y divide-border-default">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">
                    orientation
                  </td>
                  <td className="px-6 py-4 text-sm text-text-secondary">
                    "horizontal" | "vertical"
                  </td>
                  <td className="px-6 py-4 text-sm text-text-secondary">
                    "horizontal"
                  </td>
                  <td className="px-6 py-4 text-sm text-text-secondary">
                    Hướng của divider
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">
                    style
                  </td>
                  <td className="px-6 py-4 text-sm text-text-secondary">
                    "solid" | "dashed" | "dotted"
                  </td>
                  <td className="px-6 py-4 text-sm text-text-secondary">
                    "solid"
                  </td>
                  <td className="px-6 py-4 text-sm text-text-secondary">
                    Kiểu hiển thị của divider
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">
                    thickness
                  </td>
                  <td className="px-6 py-4 text-sm text-text-secondary">
                    "thin" | "medium" | "thick" | number
                  </td>
                  <td className="px-6 py-4 text-sm text-text-secondary">
                    "medium"
                  </td>
                  <td className="px-6 py-4 text-sm text-text-secondary">
                    Độ dày của divider (có thể dùng px tùy chỉnh)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">
                    align
                  </td>
                  <td className="px-6 py-4 text-sm text-text-secondary">
                    "start" | "center" | "end"
                  </td>
                  <td className="px-6 py-4 text-sm text-text-secondary">
                    "center"
                  </td>
                  <td className="px-6 py-4 text-sm text-text-secondary">
                    Căn chỉnh divider (trái/giữa/phải cho ngang, trên/giữa/dưới
                    cho dọc)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">
                    length
                  </td>
                  <td className="px-6 py-4 text-sm text-text-secondary">
                    number (0-100)
                  </td>
                  <td className="px-6 py-4 text-sm text-text-secondary">100</td>
                  <td className="px-6 py-4 text-sm text-text-secondary">
                    Độ dài của divider theo % so với container cha
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">
                    className
                  </td>
                  <td className="px-6 py-4 text-sm text-text-secondary">
                    string
                  </td>
                  <td className="px-6 py-4 text-sm text-text-secondary">""</td>
                  <td className="px-6 py-4 text-sm text-text-secondary">
                    Class tùy chỉnh cho màu sắc và styling (ví dụ:
                    "border-red-500")
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* Right Panel Navigation */}
      <RightPanel sections={navigationSections} />
    </>
  );
};

export default DividerSection;
