import { useState } from "react";
import { DndZone } from "../../../../components/package/dndzone";
import { CodeBlock } from "../../../../components/package/codeblock";
import { FileCode } from "lucide-react";
import RightPanel from "../RightPanel";

const DndZoneSection = () => {
  const [files1, setFiles1] = useState<File[]>([]);
  const [files2, setFiles2] = useState<File[]>([]);
  const [files3, setFiles3] = useState<File[]>([]);

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

  const basicUsageCode = `import { DndZone } from "@khanhromvn/zenui";
import { useState } from "react";

function MyComponent() {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <DndZone
      onFilesChange={setFiles}
      placeholder="Drag & drop files here or click to browse"
      showPreview={true}
    />
  );
}`;

  const imageOnlyCode = `import { DndZone } from "@khanhromvn/zenui";
import { useState } from "react";

function ImageUploadExample() {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <DndZone
      onFilesChange={setFiles}
      accept="image/*"
      maxSize={5 * 1024 * 1024} // 5MB
      placeholder="Drop images here (max 5MB)"
      showPreview={true}
    />
  );
}`;

  const singleFileCode = `import { DndZone } from "@khanhromvn/zenui";
import { useState } from "react";

function SingleFileExample() {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <DndZone
      onFilesChange={setFiles}
      multiple={false}
      placeholder="Drop a single file here"
      height="150px"
    />
  );
}`;

  const customConfigCode = `import { DndZone } from "@khanhromvn/zenui";
import { useState } from "react";

function CustomConfigExample() {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <DndZone
      onFilesChange={setFiles}
      accept=".pdf,.doc,.docx"
      maxFiles={3}
      maxSize={10 * 1024 * 1024} // 10MB
      placeholder="Drop documents here (max 3 files)"
      showFileSize={true}
      allowRemove={true}
    />
  );
}`;

  return (
    <>
      <div className="max-w-4xl mx-auto">
        {/* ABOUT SECTION */}
        <section id="about" className="mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-3">
            Drag & Drop Zone
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            A versatile drag-and-drop file upload component with support for file
            validation, preview generation, size limits, and multiple file
            handling. Perfect for file uploads, image galleries, and document
            management systems.
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
            Here's a simple example to get you started with the DndZone component.
          </p>

          {/* Live Demo */}
          <div className="bg-card-background border border-border-default rounded-lg p-8 mb-6">
            <DndZone
              onFilesChange={setFiles1}
              placeholder="Drag & drop files here or click to browse"
              showPreview={true}
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

          {/* Image Only */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Image Upload Only
            </h3>
            <p className="text-text-secondary mb-4">
              Restrict file types to images only with size validation and preview.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <DndZone
                onFilesChange={setFiles2}
                accept="image/*"
                maxSize={5 * 1024 * 1024} // 5MB
                placeholder="Drop images here (max 5MB)"
                showPreview={true}
              />
            </div>

            <CodeBlock
              code={imageOnlyCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/ImageUploadExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Single File */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Single File Upload
            </h3>
            <p className="text-text-secondary mb-4">
              Allow only one file to be uploaded at a time.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <DndZone
                onFilesChange={setFiles3}
                multiple={false}
                placeholder="Drop a single file here"
                height="150px"
              />
            </div>

            <CodeBlock
              code={singleFileCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/SingleFileExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Custom Configuration */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Custom Configuration
            </h3>
            <p className="text-text-secondary mb-4">
              Configure file type restrictions, maximum files, and size limits.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <DndZone
                onFilesChange={(files) => console.log("Files:", files)}
                accept=".pdf,.doc,.docx"
                maxFiles={3}
                maxSize={10 * 1024 * 1024} // 10MB
                placeholder="Drop documents here (max 3 files)"
                showFileSize={true}
                allowRemove={true}
              />
            </div>

            <CodeBlock
              code={customConfigCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/CustomConfigExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Disabled State */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Disabled State
            </h3>
            <p className="text-text-secondary mb-4">
              Disable the drop zone to prevent file uploads.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <DndZone
                disabled={true}
                placeholder="Upload disabled"
                height="150px"
              />
            </div>

            <CodeBlock
              code={`import { DndZone } from "@khanhromvn/zenui";

function DisabledExample() {
  return (
    <DndZone
      disabled={true}
      placeholder="Upload disabled"
      height="150px"
    />
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
        </section>

        {/* PROPS SECTION */}
        <section id="props" className="mb-12">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Props
          </h2>
          <p className="text-text-secondary mb-6">
            Complete list of props available for the DndZone component.
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
                      onFilesChange
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      (files: File[]) =&gt; void
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Callback when files are dropped or selected
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      accept
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Accept specific file types (e.g., "image/*", ".pdf")
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      multiple
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">true</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Allow multiple files
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      maxSize
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      number
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Maximum file size in bytes
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      maxFiles
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      number
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Maximum number of files
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
                      Disabled state
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
                      Custom CSS class
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      height
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"200px"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Height of the drop zone
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      showPreview
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">true</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Show file preview for images
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      placeholder
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">
                      "Drag & drop..."
                    </td>
                    <td className="px-6 py-4 text-text-secondary">
                      Custom message when no files
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      showFileSize
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">true</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Show file size in file list
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      allowRemove
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">true</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Allow removing files from the list
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

export default DndZoneSection;
