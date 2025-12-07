import { useState } from "react";
import { Pagination } from "../../../../components/package/components/pagination";
import { CodeBlock } from "../../../../components/package/components/codeblock";
import { FileCode } from "lucide-react";
import RightPanel from "../RightPanel";

const PaginationSection = () => {
  // State for pagination examples
  const [classicPage, setClassicPage] = useState(5);
  const [minimalDotsPage, setMinimalDotsPage] = useState(5);
  const [pillPage, setPillPage] = useState(5);
  const [cardPage, setCardPage] = useState(5);
  const [compactPage, setCompactPage] = useState(5);
  const [dropdownPage, setDropdownPage] = useState(5);
  const [progressPage, setProgressPage] = useState(5);
  const [sliderPage, setSliderPage] = useState(5);

  // Navigation sections for right panel
  const navigationSections = [
    { id: "about", label: "About" },
    { id: "install", label: "Install" },
    { id: "usage", label: "Usage" },
    { id: "variants", label: "Variants" },
    { id: "props", label: "Props" },
  ];

  const npmInstallCode = `npm install @khanhromvn/zenui`;
  const yarnInstallCode = `yarn add @khanhromvn/zenui`;

  const basicUsageCode = `import { Pagination } from "@khanhromvn/zenui";
import { useState } from "react";

function BasicPaginationExample() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 100;
  const itemsPerPage = 10;

  return (
    <Pagination
      totalItems={totalItems}
      itemsPerPage={itemsPerPage}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      variant="classic"
    />
  );
}`;

  const classicCode = `import { Pagination } from "@khanhromvn/zenui";
import { useState } from "react";

function ClassicExample() {
  const [currentPage, setCurrentPage] = useState(5);

  return (
    <Pagination
      totalItems={100}
      itemsPerPage={10}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      variant="classic"
    />
  );
}`;

  const minimalDotsCode = `import { Pagination } from "@khanhromvn/zenui";
import { useState } from "react";

function MinimalDotsExample() {
  const [currentPage, setCurrentPage] = useState(5);

  return (
    <Pagination
      totalItems={100}
      itemsPerPage={10}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      variant="minimal-dots"
    />
  );
}`;

  const pillCode = `import { Pagination } from "@khanhromvn/zenui";
import { useState } from "react";

function PillExample() {
  const [currentPage, setCurrentPage] = useState(5);

  return (
    <Pagination
      totalItems={100}
      itemsPerPage={10}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      variant="pill"
    />
  );
}`;

  const cardCode = `import { Pagination } from "@khanhromvn/zenui";
import { useState } from "react";

function CardExample() {
  const [currentPage, setCurrentPage] = useState(5);

  return (
    <Pagination
      totalItems={100}
      itemsPerPage={10}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      variant="card"
    />
  );
}`;

  const compactCode = `import { Pagination } from "@khanhromvn/zenui";
import { useState } from "react";

function CompactExample() {
  const [currentPage, setCurrentPage] = useState(5);

  return (
    <Pagination
      totalItems={100}
      itemsPerPage={10}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      variant="compact"
    />
  );
}`;

  const dropdownCode = `import { Pagination } from "@khanhromvn/zenui";
import { useState } from "react";

function DropdownExample() {
  const [currentPage, setCurrentPage] = useState(5);

  return (
    <Pagination
      totalItems={100}
      itemsPerPage={10}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      variant="dropdown"
    />
  );
}`;

  const progressCode = `import { Pagination } from "@khanhromvn/zenui";
import { useState } from "react";

function ProgressExample() {
  const [currentPage, setCurrentPage] = useState(5);

  return (
    <Pagination
      totalItems={100}
      itemsPerPage={10}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      variant="progress"
    />
  );
}`;

  const sliderCode = `import { Pagination } from "@khanhromvn/zenui";
import { useState } from "react";

function SliderExample() {
  const [currentPage, setCurrentPage] = useState(5);

  return (
    <Pagination
      totalItems={100}
      itemsPerPage={10}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      variant="slider"
    />
  );
}`;

  return (
    <>
      <div className="max-w-4xl mx-auto">
        {/* ABOUT SECTION */}
        <section id="about" className="mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-3">
            Pagination
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            A comprehensive pagination component with 8 distinct UI variants to
            match any design style. From classic outlined buttons to modern
            progress bars and interactive sliders, choose the perfect pagination
            style for your application. Each variant is fully responsive and
            theme-aware.
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
            Here's a simple example to get you started with the Pagination
            component.
          </p>

          {/* Live Demo */}
          <div className="bg-card-background border border-border-default rounded-lg p-8 mb-6">
            <Pagination
              totalItems={100}
              itemsPerPage={10}
              currentPage={classicPage}
              onPageChange={setClassicPage}
              variant="classic"
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

        {/* VARIANTS SECTION */}
        <section id="variants" className="mb-12">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Pagination Variants
          </h2>
          <p className="text-text-secondary mb-8">
            8 kiểu thiết kế Pagination khác nhau về cấu trúc UI. Mỗi variant có
            phong cách riêng phù hợp với các ngữ cảnh thiết kế khác nhau.
          </p>

          {/* Variant 1: Classic */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              1. Classic Outlined
            </h3>
            <p className="text-sm text-text-secondary mb-6">
              Kiểu cổ điển với border, mỗi số là một button riêng biệt
            </p>
            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 overflow-x-auto">
              <div className="flex justify-center">
                <Pagination
                  totalItems={100}
                  itemsPerPage={10}
                  currentPage={classicPage}
                  onPageChange={setClassicPage}
                  variant="classic"
                />
              </div>
            </div>
            <CodeBlock
              code={classicCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/ClassicExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Variant 2: Minimal Dots */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              2. Minimal Dots
            </h3>
            <p className="text-sm text-text-secondary mb-6">
              Thiết kế tối giản với dots, trang active mở rộng thành circle lớn
            </p>
            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <div className="flex justify-center">
                <Pagination
                  totalItems={100}
                  itemsPerPage={10}
                  currentPage={minimalDotsPage}
                  onPageChange={setMinimalDotsPage}
                  variant="minimal-dots"
                />
              </div>
            </div>
            <CodeBlock
              code={minimalDotsCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/MinimalDotsExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Variant 3: Pill Group */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              3. Pill Group
            </h3>
            <p className="text-sm text-text-secondary mb-6">
              Các button được nhóm trong một container hình viên thuốc
            </p>
            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 overflow-x-auto">
              <div className="flex justify-center">
                <Pagination
                  totalItems={100}
                  itemsPerPage={10}
                  currentPage={pillPage}
                  onPageChange={setPillPage}
                  variant="pill"
                />
              </div>
            </div>
            <CodeBlock
              code={pillCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/PillExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Variant 4: Card Style */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              4. Card Style
            </h3>
            <p className="text-sm text-text-secondary mb-6">
              Dạng thẻ với shadow, mỗi số như một card nhỏ
            </p>
            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 overflow-x-auto">
              <div className="flex justify-center">
                <Pagination
                  totalItems={100}
                  itemsPerPage={10}
                  currentPage={cardPage}
                  onPageChange={setCardPage}
                  variant="card"
                />
              </div>
            </div>
            <CodeBlock
              code={cardCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/CardExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Variant 5: Compact Ellipsis */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              5. Compact with Ellipsis
            </h3>
            <p className="text-sm text-text-secondary mb-6">
              Hiển thị rút gọn với dấu "..." khi có nhiều trang, tất cả trong
              một border container
            </p>
            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <div className="flex justify-center">
                <Pagination
                  totalItems={100}
                  itemsPerPage={10}
                  currentPage={compactPage}
                  onPageChange={setCompactPage}
                  variant="compact"
                />
              </div>
            </div>
            <CodeBlock
              code={compactCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/CompactExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Variant 6: Dropdown */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              6. Dropdown Style
            </h3>
            <p className="text-sm text-text-secondary mb-6">
              Sử dụng dropdown select để chọn trang, kết hợp với nút Trước/Sau
            </p>
            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <div className="flex justify-center">
                <Pagination
                  totalItems={100}
                  itemsPerPage={10}
                  currentPage={dropdownPage}
                  onPageChange={setDropdownPage}
                  variant="dropdown"
                />
              </div>
            </div>
            <CodeBlock
              code={dropdownCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/DropdownExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Variant 7: Progress Bar */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              7. Progress Bar Style
            </h3>
            <p className="text-sm text-text-secondary mb-6">
              Dạng thanh tiến trình hiển thị vị trí hiện tại
            </p>
            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <div className="flex justify-center">
                <Pagination
                  totalItems={100}
                  itemsPerPage={10}
                  currentPage={progressPage}
                  onPageChange={setProgressPage}
                  variant="progress"
                />
              </div>
            </div>
            <CodeBlock
              code={progressCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/ProgressExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Variant 8: Slider */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              8. Slider Style
            </h3>
            <p className="text-sm text-text-secondary mb-6">
              Sử dụng range slider để di chuyển giữa các trang
            </p>
            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <div className="flex justify-center">
                <Pagination
                  totalItems={100}
                  itemsPerPage={10}
                  currentPage={sliderPage}
                  onPageChange={setSliderPage}
                  variant="slider"
                />
              </div>
            </div>
            <CodeBlock
              code={sliderCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/SliderExample.tsx"
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
            Complete list of props available for the Pagination component.
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
                  <tr className="hover:bg-input-background/50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      totalItems*
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      number
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Total number of items to paginate
                    </td>
                  </tr>
                  <tr className="hover:bg-input-background/50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      itemsPerPage*
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      number
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Number of items per page
                    </td>
                  </tr>
                  <tr className="hover:bg-input-background/50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      currentPage*
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      number
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Current active page
                    </td>
                  </tr>
                  <tr className="hover:bg-input-background/50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      onPageChange*
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      (page: number) =&gt; void
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Callback when page changes
                    </td>
                  </tr>
                  <tr className="hover:bg-input-background/50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      variant
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      "classic" | "minimal-dots" | "pill" | "card" | "compact" |
                      "dropdown" | "progress" | "slider"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"classic"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Pagination variant style
                    </td>
                  </tr>
                  <tr className="hover:bg-input-background/50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      size
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      "sm" | "md" | "lg"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"md"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Size of pagination elements (not applicable to all
                      variants)
                    </td>
                  </tr>
                  <tr className="hover:bg-input-background/50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      align
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      "left" | "center" | "right"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"center"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Horizontal alignment
                    </td>
                  </tr>
                  <tr className="hover:bg-input-background/50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      showNavigation
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">true</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Show previous/next buttons (not applicable to all
                      variants)
                    </td>
                  </tr>
                  <tr className="hover:bg-input-background/50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      maxVisiblePages
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      number
                    </td>
                    <td className="px-6 py-4 text-text-secondary">7</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Maximum visible page numbers (only for compact variant)
                    </td>
                  </tr>
                  <tr className="hover:bg-input-background/50">
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

export default PaginationSection;
