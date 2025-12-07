import { useState } from "react";
import { Pagination } from "../../../../components/package/components/pagination";
import { CodeBlock } from "../../../../components/package/components/codeblock";
import {
  FileCode,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import RightPanel from "../RightPanel";

const PaginationSection = () => {
  // State for pagination examples
  const [currentPage, setCurrentPage] = useState(1);
  const [variantPage, setVariantPage] = useState(1);
  const [sizePage, setSizePage] = useState(1);
  const [advancedPage, setAdvancedPage] = useState(1);
  const [customPage, setCustomPage] = useState(1);

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

  const basicUsageCode = `import { Pagination } from "@khanhromvn/zenui";
import { useState } from "react";

function BasicPaginationExample() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 150;
  const itemsPerPage = 10;

  return (
    <div>
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        showTotalPages={true}
      />
      
      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-text-secondary">
          Showing page {currentPage} of {Math.ceil(totalItems / itemsPerPage)}
        </p>
      </div>
    </div>
  );
}`;

  const variantExampleCode = `import { Pagination } from "@khanhromvn/zenui";

function VariantExamples() {
  const [numbersPage, setNumbersPage] = useState(1);
  const [dotsPage, setDotsPage] = useState(1);
  const [simplePage, setSimplePage] = useState(1);

  return (
    <div className="space-y-6">
      {/* Numbers Variant */}
      <div>
        <h4 className="font-semibold mb-2">Numbers Variant</h4>
        <Pagination
          totalItems={150}
          itemsPerPage={10}
          currentPage={numbersPage}
          onPageChange={setNumbersPage}
          variant="numbers"
          showTotalPages={true}
        />
      </div>

      {/* Dots Variant */}
      <div>
        <h4 className="font-semibold mb-2">Dots Variant</h4>
        <Pagination
          totalItems={150}
          itemsPerPage={10}
          currentPage={dotsPage}
          onPageChange={setDotsPage}
          variant="dots"
          showTotalPages={true}
        />
      </div>

      {/* Simple Variant */}
      <div>
        <h4 className="font-semibold mb-2">Simple Variant</h4>
        <Pagination
          totalItems={150}
          itemsPerPage={10}
          currentPage={simplePage}
          onPageChange={setSimplePage}
          variant="simple"
          showNavigation={true}
        />
      </div>
    </div>
  );
}`;

  const sizeExampleCode = `import { Pagination } from "@khanhromvn/zenui";

function SizeExamples() {
  const [smPage, setSmPage] = useState(1);
  const [mdPage, setMdPage] = useState(1);
  const [lgPage, setLgPage] = useState(1);

  return (
    <div className="space-y-6">
      {/* Small Size */}
      <div>
        <h4 className="font-semibold mb-2">Small Size</h4>
        <Pagination
          totalItems={150}
          itemsPerPage={10}
          currentPage={smPage}
          onPageChange={setSmPage}
          size="sm"
          showTotalPages={true}
        />
      </div>

      {/* Medium Size */}
      <div>
        <h4 className="font-semibold mb-2">Medium Size</h4>
        <Pagination
          totalItems={150}
          itemsPerPage={10}
          currentPage={mdPage}
          onPageChange={setMdPage}
          size="md"
          showTotalPages={true}
        />
      </div>

      {/* Large Size */}
      <div>
        <h4 className="font-semibold mb-2">Large Size</h4>
        <Pagination
          totalItems={150}
          itemsPerPage={10}
          currentPage={lgPage}
          onPageChange={setLgPage}
          size="lg"
          showTotalPages={true}
        />
      </div>
    </div>
  );
}`;

  const advancedExampleCode = `import { Pagination } from "@khanhromvn/zenui";

function AdvancedExample() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  return (
    <Pagination
      totalItems={250}
      itemsPerPage={itemsPerPage}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      variant="numbers"
      size="md"
      showNavigation={true}
      showPageNumbers={true}
      showTotalPages={true}
      showJumper={true}
      showItemsPerPage={true}
      itemsPerPageOptions={[5, 10, 25, 50]}
      maxVisiblePages={5}
    />
  );
}`;

  const customExampleCode = `import { Pagination } from "@khanhromvn/zenui";
import { ArrowLeft, ArrowRight } from "lucide-react";

function CustomExample() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="space-y-6">
      {/* Custom Navigation Buttons */}
      <div>
        <h4 className="font-semibold mb-2">Custom Navigation Buttons</h4>
        <Pagination
          totalItems={150}
          itemsPerPage={10}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          previousButton={<ArrowLeft size={16} />}
          nextButton={<ArrowRight size={16} />}
          showTotalPages={true}
        />
      </div>

      {/* Different Alignment */}
      <div>
        <h4 className="font-semibold mb-2">Left Alignment</h4>
        <Pagination
          totalItems={150}
          itemsPerPage={10}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          align="left"
          showTotalPages={true}
        />
      </div>

      <div>
        <h4 className="font-semibold mb-2">Center Alignment</h4>
        <Pagination
          totalItems={150}
          itemsPerPage={10}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          align="center"
          showTotalPages={true}
        />
      </div>

      <div>
        <h4 className="font-semibold mb-2">Right Alignment</h4>
        <Pagination
          totalItems={150}
          itemsPerPage={10}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          align="right"
          showTotalPages={true}
        />
      </div>
    </div>
  );
}`;

  // Sample data for demonstration
  const sampleData = Array.from({ length: 150 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    description: `This is item number ${i + 1} in the list.`,
  }));

  const itemsPerPage = 10;
  const currentItems = sampleData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div className="max-w-4xl mx-auto">
        {/* ABOUT SECTION */}
        <section id="about" className="mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-3">
            Pagination
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            A flexible and customizable pagination component with support for
            multiple variants, sizes, and advanced features. Perfect for
            navigating through large datasets, tables, lists, and search results
            with intuitive controls and comprehensive customization options.
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
              totalItems={150}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
              showTotalPages={true}
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

          {/* Variant Examples */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Variant Types
            </h3>
            <p className="text-text-secondary mb-4">
              Choose from different pagination variants to match your design
              needs.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 space-y-6">
              {/* Numbers Variant */}
              <div>
                <h4 className="font-semibold text-text-primary mb-2">
                  Numbers Variant
                </h4>
                <p className="text-sm text-text-secondary mb-3">
                  Traditional pagination with page numbers and navigation
                  buttons.
                </p>
                <Pagination
                  totalItems={150}
                  itemsPerPage={10}
                  currentPage={variantPage}
                  onPageChange={setVariantPage}
                  variant="numbers"
                  showTotalPages={true}
                />
              </div>

              {/* Dots Variant */}
              <div>
                <h4 className="font-semibold text-text-primary mb-2">
                  Dots Variant
                </h4>
                <p className="text-sm text-text-secondary mb-3">
                  Minimal dot indicators for mobile-friendly pagination.
                </p>
                <Pagination
                  totalItems={150}
                  itemsPerPage={10}
                  currentPage={variantPage}
                  onPageChange={setVariantPage}
                  variant="dots"
                  showTotalPages={true}
                />
              </div>

              {/* Simple Variant */}
              <div>
                <h4 className="font-semibold text-text-primary mb-2">
                  Simple Variant
                </h4>
                <p className="text-sm text-text-secondary mb-3">
                  Clean and simple with just page info and navigation.
                </p>
                <Pagination
                  totalItems={150}
                  itemsPerPage={10}
                  currentPage={variantPage}
                  onPageChange={setVariantPage}
                  variant="simple"
                  showNavigation={true}
                />
              </div>
            </div>

            <CodeBlock
              code={variantExampleCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/VariantExamples.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Size Examples */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Size Variants
            </h3>
            <p className="text-text-secondary mb-4">
              Different sizes for various contexts and design requirements.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 space-y-6">
              {/* Small Size */}
              <div>
                <h4 className="font-semibold text-text-primary mb-2">
                  Small Size
                </h4>
                <p className="text-sm text-text-secondary mb-3">
                  Compact pagination for tight spaces and dense interfaces.
                </p>
                <Pagination
                  totalItems={150}
                  itemsPerPage={10}
                  currentPage={sizePage}
                  onPageChange={setSizePage}
                  size="sm"
                  showTotalPages={true}
                />
              </div>

              {/* Medium Size */}
              <div>
                <h4 className="font-semibold text-text-primary mb-2">
                  Medium Size
                </h4>
                <p className="text-sm text-text-secondary mb-3">
                  Standard size suitable for most applications.
                </p>
                <Pagination
                  totalItems={150}
                  itemsPerPage={10}
                  currentPage={sizePage}
                  onPageChange={setSizePage}
                  size="md"
                  showTotalPages={true}
                />
              </div>

              {/* Large Size */}
              <div>
                <h4 className="font-semibold text-text-primary mb-2">
                  Large Size
                </h4>
                <p className="text-sm text-text-secondary mb-3">
                  Larger buttons for better accessibility and touch targets.
                </p>
                <Pagination
                  totalItems={150}
                  itemsPerPage={10}
                  currentPage={sizePage}
                  onPageChange={setSizePage}
                  size="lg"
                  showTotalPages={true}
                />
              </div>
            </div>

            <CodeBlock
              code={sizeExampleCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/SizeExamples.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Customization Examples */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Customization
            </h3>
            <p className="text-text-secondary mb-4">
              Customize the pagination with different alignments and custom
              buttons.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4 space-y-6">
              {/* Custom Navigation Buttons */}
              <div>
                <h4 className="font-semibold text-text-primary mb-2">
                  Custom Navigation Buttons
                </h4>
                <p className="text-sm text-text-secondary mb-3">
                  Use custom icons or text for previous/next buttons.
                </p>
                <Pagination
                  totalItems={150}
                  itemsPerPage={10}
                  currentPage={customPage}
                  onPageChange={setCustomPage}
                  previousButton={<ArrowLeft size={16} />}
                  nextButton={<ArrowRight size={16} />}
                  showTotalPages={true}
                />
              </div>

              {/* Different Alignments */}
              <div>
                <h4 className="font-semibold text-text-primary mb-2">
                  Alignments
                </h4>
                <p className="text-sm text-text-secondary mb-3">
                  Control the horizontal alignment of the pagination.
                </p>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-text-primary mb-2">
                      Left Alignment
                    </h5>
                    <Pagination
                      totalItems={85}
                      itemsPerPage={10}
                      currentPage={customPage}
                      onPageChange={setCustomPage}
                      align="left"
                      showTotalPages={true}
                    />
                  </div>

                  <div>
                    <h5 className="font-medium text-text-primary mb-2">
                      Center Alignment
                    </h5>
                    <Pagination
                      totalItems={85}
                      itemsPerPage={10}
                      currentPage={customPage}
                      onPageChange={setCustomPage}
                      align="center"
                      showTotalPages={true}
                    />
                  </div>

                  <div>
                    <h5 className="font-medium text-text-primary mb-2">
                      Right Alignment
                    </h5>
                    <Pagination
                      totalItems={85}
                      itemsPerPage={10}
                      currentPage={customPage}
                      onPageChange={setCustomPage}
                      align="right"
                      showTotalPages={true}
                    />
                  </div>
                </div>
              </div>

              {/* Limited Visible Pages */}
              <div>
                <h4 className="font-semibold text-text-primary mb-2">
                  Limited Visible Pages
                </h4>
                <p className="text-sm text-text-secondary mb-3">
                  Control how many page numbers are visible at once.
                </p>
                <Pagination
                  totalItems={250}
                  itemsPerPage={10}
                  currentPage={customPage}
                  onPageChange={setCustomPage}
                  maxVisiblePages={5}
                  showTotalPages={true}
                />
              </div>
            </div>

            <CodeBlock
              code={customExampleCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/CustomExample.tsx"
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
                  <tr className="hover:bg-gray-50">
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
                  <tr className="hover:bg-gray-50">
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
                  <tr className="hover:bg-gray-50">
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
                  <tr className="hover:bg-gray-50">
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
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      variant
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      "numbers" | "dots" | "simple"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"numbers"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Pagination variant style
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      size
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      "sm" | "md" | "lg"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"md"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Size of pagination elements
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
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
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      showNavigation
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">true</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Show previous/next buttons
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      showPageNumbers
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">true</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Show page number buttons
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      maxVisiblePages
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      number
                    </td>
                    <td className="px-6 py-4 text-text-secondary">7</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Maximum visible page numbers
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      showTotalPages
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">false</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Show total pages information
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      showJumper
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">false</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Show page jumper input
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      showItemsPerPage
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">false</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Show items per page selector
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      itemsPerPageOptions
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      number[]
                    </td>
                    <td className="px-6 py-4 text-text-secondary">
                      [10,20,50,100]
                    </td>
                    <td className="px-6 py-4 text-text-secondary">
                      Options for items per page selector
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      previousButton
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      ReactNode
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Custom previous button content
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      nextButton
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      ReactNode
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Custom next button content
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

export default PaginationSection;
