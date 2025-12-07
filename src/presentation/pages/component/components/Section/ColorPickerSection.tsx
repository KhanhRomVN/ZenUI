import { useState } from "react";
import { ColorPicker } from "../../../../components/package/colorpicker";
import { CodeBlock } from "../../../../components/package/codeblock";
import { FileCode } from "lucide-react";
import RightPanel from "../RightPanel";

const ColorPickerSection = () => {
  const [selectedColor1, setSelectedColor1] = useState("#3b82f6");
  const [selectedColor2, setSelectedColor2] = useState("#22c55e");
  const [selectedColor3, setSelectedColor3] = useState("#ef4444");

  // Custom color palette
  const customColors = [
    "#ff6b6b", "#4ecdc4", "#45b7d1", "#f9ca24",
    "#6c5ce7", "#a29bfe", "#fd79a8", "#fdcb6e",
  ];

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

  const basicUsageCode = `import { ColorPicker } from "@khanhromvn/zenui";
import { useState } from "react";

function MyComponent() {
  const [selectedColor, setSelectedColor] = useState("#3b82f6");

  return (
    <div>
      <ColorPicker
        value={selectedColor}
        onChange={setSelectedColor}
        showLabel={true}
      />
    </div>
  );
}`;

  const customColorsCode = `import { ColorPicker } from "@khanhromvn/zenui";
import { useState } from "react";

function CustomColorsExample() {
  const [color, setColor] = useState("#ff6b6b");
  
  const customPalette = [
    "#ff6b6b", "#4ecdc4", "#45b7d1", "#f9ca24",
    "#6c5ce7", "#a29bfe", "#fd79a8", "#fdcb6e",
  ];

  return (
    <ColorPicker
      value={color}
      onChange={setColor}
      colors={customPalette}
      columns={4}
      showLabel={true}
    />
  );
}`;

  const sizeVariantsCode = `import { ColorPicker } from "@khanhromvn/zenui";
import { useState } from "react";

function SizeVariantsExample() {
  const [color, setColor] = useState("#3b82f6");

  return (
    <div className="flex flex-col gap-6">
      <ColorPicker
        value={color}
        onChange={setColor}
        colorSize={30}
        gap={6}
        columns={10}
      />
      
      <ColorPicker
        value={color}
        onChange={setColor}
        colorSize={40}
        gap={8}
        columns={8}
      />
      
      <ColorPicker
        value={color}
        onChange={setColor}
        colorSize={50}
        gap={10}
        columns={6}
      />
    </div>
  );
}`;

  const configurationCode = `import { ColorPicker } from "@khanhromvn/zenui";
import { useState } from "react";

function ConfigurationExample() {
  const [color, setColor] = useState("#22c55e");

  return (
    <div className="flex flex-col gap-6">
      {/* With label */}
      <ColorPicker
        value={color}
        onChange={setColor}
        showLabel={true}
      />
      
      {/* Without checkmark */}
      <ColorPicker
        value={color}
        onChange={setColor}
        showCheckmark={false}
      />
      
      {/* Disabled state */}
      <ColorPicker
        value={color}
        disabled={true}
      />
    </div>
  );
}`;

  return (
    <>
      <div className="max-w-4xl mx-auto">
        {/* ABOUT SECTION */}
        <section id="about" className="mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-3">
            ColorPicker
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            A beautiful and intuitive color picker component that displays a grid
            of colors for easy selection. Perfect for theme customization, design
            tools, and any application that needs color selection with a clean,
            accessible interface.
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
            Here's a simple example to get you started with the ColorPicker
            component.
          </p>

          {/* Live Demo */}
          <div className="bg-card-background border border-border-default rounded-lg p-8 mb-6">
            <ColorPicker
              value={selectedColor1}
              onChange={setSelectedColor1}
              showLabel={true}
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

          {/* Custom Colors */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Custom Color Palette
            </h3>
            <p className="text-text-secondary mb-4">
              Provide your own custom color palette instead of using the default
              colors.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <ColorPicker
                value={selectedColor2}
                onChange={setSelectedColor2}
                colors={customColors}
                columns={4}
                showLabel={true}
              />
            </div>

            <CodeBlock
              code={customColorsCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/CustomColorsExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Size Variants */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Size Variants
            </h3>
            <p className="text-text-secondary mb-4">
              Customize the size of color boxes, gaps, and number of columns.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-sm text-text-secondary mb-2">
                    Small (30px, 10 columns)
                  </p>
                  <ColorPicker
                    value={selectedColor3}
                    onChange={setSelectedColor3}
                    colorSize={30}
                    gap={6}
                    columns={10}
                  />
                </div>

                <div>
                  <p className="text-sm text-text-secondary mb-2">
                    Medium (40px, 8 columns)
                  </p>
                  <ColorPicker
                    value={selectedColor3}
                    onChange={setSelectedColor3}
                    colorSize={40}
                    gap={8}
                    columns={8}
                  />
                </div>

                <div>
                  <p className="text-sm text-text-secondary mb-2">
                    Large (50px, 6 columns)
                  </p>
                  <ColorPicker
                    value={selectedColor3}
                    onChange={setSelectedColor3}
                    colorSize={50}
                    gap={10}
                    columns={6}
                  />
                </div>
              </div>
            </div>

            <CodeBlock
              code={sizeVariantsCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/SizeVariantsExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Configuration Options */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Configuration Options
            </h3>
            <p className="text-text-secondary mb-4">
              Various configuration options including labels, checkmarks, and
              disabled state.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-sm text-text-secondary mb-2">
                    With color label
                  </p>
                  <ColorPicker
                    value={selectedColor1}
                    onChange={setSelectedColor1}
                    showLabel={true}
                    columns={8}
                  />
                </div>

                <div>
                  <p className="text-sm text-text-secondary mb-2">
                    Without checkmark
                  </p>
                  <ColorPicker
                    value={selectedColor2}
                    onChange={setSelectedColor2}
                    showCheckmark={false}
                    columns={8}
                  />
                </div>

                <div>
                  <p className="text-sm text-text-secondary mb-2">
                    Disabled state
                  </p>
                  <ColorPicker
                    value={selectedColor3}
                    disabled={true}
                    columns={8}
                  />
                </div>
              </div>
            </div>

            <CodeBlock
              code={configurationCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/ConfigurationExample.tsx"
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
            Complete list of props available for the ColorPicker component.
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
                      value
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Currently selected color value
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      onChange
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      (color: string) =&gt; void
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Callback when color is selected
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      colors
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string[]
                    </td>
                    <td className="px-6 py-4 text-text-secondary">
                      DEFAULT_COLORS
                    </td>
                    <td className="px-6 py-4 text-text-secondary">
                      Array of available colors to choose from
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      colorSize
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      number
                    </td>
                    <td className="px-6 py-4 text-text-secondary">40</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Size of each color box in pixels
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      gap
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      number
                    </td>
                    <td className="px-6 py-4 text-text-secondary">8</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Gap between color boxes in pixels
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      columns
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      number
                    </td>
                    <td className="px-6 py-4 text-text-secondary">8</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Number of columns in the grid
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      showLabel
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">false</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Show color value label
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
                      showCheckmark
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">true</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Show checkmark on selected color
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

export default ColorPickerSection;
