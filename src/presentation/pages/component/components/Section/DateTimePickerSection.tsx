import { useState } from "react";
import { DateTimePicker } from "../../../../components/package/datetimepicker";
import { CodeBlock } from "../../../../components/package/codeblock";
import { FileCode, Calendar, Clock } from "lucide-react";
import RightPanel from "../RightPanel";

const DateTimePickerSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);

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

  const basicUsageCode = `import { DateTimePicker } from "@khanhromvn/zenui";

function MyComponent() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <DateTimePicker
      value={selectedDate}
      onChange={setSelectedDate}
      placeholder="Select a date"
    />
  );
}`;

  const modeExampleCode = `import { DateTimePicker } from "@khanhromvn/zenui";

function ModeExample() {
  return (
    <div className="space-y-4">
      <DateTimePicker
        mode="date"
        placeholder="Date only"
      />
      <DateTimePicker
        mode="time"
        placeholder="Time only"
      />
      <DateTimePicker
        mode="datetime"
        placeholder="Date and time"
      />
    </div>
  );
}`;

  const sizeExampleCode = `import { DateTimePicker } from "@khanhromvn/zenui";

function SizeExample() {
  return (
    <div className="space-y-4">
      <DateTimePicker
        size="sm"
        placeholder="Small picker"
      />
      <DateTimePicker
        size="md"
        placeholder="Medium picker (default)"
      />
      <DateTimePicker
        size="lg"
        placeholder="Large picker"
      />
    </div>
  );
}`;

  const stateExampleCode = `import { DateTimePicker } from "@khanhromvn/zenui";

function StateExample() {
  return (
    <div className="space-y-4">
      <DateTimePicker
        disabled={true}
        placeholder="Disabled picker"
      />
      <DateTimePicker
        loading={true}
        placeholder="Loading picker"
      />
      <DateTimePicker
        error={true}
        errorMessage="Please select a valid date"
        placeholder="Error state"
      />
      <DateTimePicker
        success={true}
        placeholder="Success state"
      />
    </div>
  );
}`;

  const validationExampleCode = `import { DateTimePicker } from "@khanhromvn/zenui";

function ValidationExample() {
  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 1);

  return (
    <DateTimePicker
      minDate={minDate}
      maxDate={maxDate}
      placeholder="Select date within next month"
    />
  );
}`;

  return (
    <>
      <div className="max-w-4xl mx-auto">
        {/* ABOUT SECTION */}
        <section id="about" className="mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-3">
            DateTimePicker
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            A flexible and intuitive date and time picker component with
            calendar view, time selection, and extensive customization options.
            Perfect for forms, scheduling, and any application that requires
            date/time input.
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
            Here's a simple example to get you started with the DateTimePicker
            component.
          </p>

          {/* Live Demo */}
          <div className="bg-card-background border border-border-default rounded-lg p-8 mb-6">
            <div className="max-w-md mx-auto">
              <DateTimePicker
                value={selectedDate}
                onChange={setSelectedDate}
                placeholder="Select a date"
              />
              {selectedDate && (
                <p className="mt-2 text-sm text-text-secondary">
                  Selected: {selectedDate.toLocaleDateString()}
                </p>
              )}
            </div>
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

          {/* Mode Variants */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Mode Variants
            </h3>
            <p className="text-text-secondary mb-4">
              Choose between date-only, time-only, or datetime picker modes.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <div className="max-w-md mx-auto space-y-4">
                <DateTimePicker
                  mode="date"
                  value={selectedDate}
                  onChange={setSelectedDate}
                  placeholder="Date only"
                />
                <DateTimePicker
                  mode="time"
                  value={selectedTime}
                  onChange={setSelectedTime}
                  placeholder="Time only"
                  icon={<Clock size={16} />}
                />
                <DateTimePicker
                  mode="datetime"
                  value={selectedDateTime}
                  onChange={setSelectedDateTime}
                  placeholder="Date and time"
                />
              </div>
            </div>

            <CodeBlock
              code={modeExampleCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/ModeExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Size Variants */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Size Variants
            </h3>
            <p className="text-text-secondary mb-4">
              Different sizes to match your design requirements.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <div className="max-w-md mx-auto space-y-4">
                <DateTimePicker size="sm" placeholder="Small picker" />
                <DateTimePicker
                  size="md"
                  placeholder="Medium picker (default)"
                />
                <DateTimePicker size="lg" placeholder="Large picker" />
              </div>
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

          {/* Different States */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Different States
            </h3>
            <p className="text-text-secondary mb-4">
              Handle various states like disabled, loading, error, and success.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <div className="max-w-md mx-auto space-y-4">
                <DateTimePicker disabled={true} placeholder="Disabled picker" />
                <DateTimePicker loading={true} placeholder="Loading picker" />
                <DateTimePicker
                  error={true}
                  errorMessage="Please select a valid date"
                  placeholder="Error state"
                />
                <DateTimePicker success={true} placeholder="Success state" />
              </div>
            </div>

            <CodeBlock
              code={stateExampleCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/StateExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Date Validation */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Date Validation
            </h3>
            <p className="text-text-secondary mb-4">
              Set minimum and maximum dates to restrict selectable ranges.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <div className="max-w-md mx-auto">
                <DateTimePicker
                  minDate={new Date()}
                  maxDate={
                    new Date(new Date().setMonth(new Date().getMonth() + 1))
                  }
                  placeholder="Select date within next month"
                />
              </div>
            </div>

            <CodeBlock
              code={validationExampleCode}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/ValidationExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Custom Format */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Custom Date Format
            </h3>
            <p className="text-text-secondary mb-4">
              Customize the date and time display format.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <div className="max-w-md mx-auto space-y-4">
                <DateTimePicker
                  dateFormat="dd/MM/yyyy"
                  placeholder="DD/MM/YYYY format"
                />
                <DateTimePicker
                  dateFormat="yyyy-MM-dd"
                  timeFormat="HH:mm:ss"
                  mode="datetime"
                  placeholder="YYYY-MM-DD HH:mm:ss format"
                />
              </div>
            </div>

            <CodeBlock
              code={`import { DateTimePicker } from "@khanhromvn/zenui";

function FormatExample() {
  return (
    <div className="space-y-4">
      <DateTimePicker
        dateFormat="dd/MM/yyyy"
        placeholder="DD/MM/YYYY format"
      />
      <DateTimePicker
        dateFormat="yyyy-MM-dd"
        timeFormat="HH:mm:ss"
        mode="datetime"
        placeholder="YYYY-MM-DD HH:mm:ss format"
      />
    </div>
  );
}`}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/FormatExample.tsx"
              showLineNumbers={true}
            />
          </div>

          {/* Custom Icon */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Custom Icon
            </h3>
            <p className="text-text-secondary mb-4">
              Use custom icons or different icons for different modes.
            </p>

            <div className="bg-card-background border border-border-default rounded-lg p-8 mb-4">
              <div className="max-w-md mx-auto">
                <DateTimePicker
                  icon={<Calendar size={16} className="text-blue-500" />}
                  placeholder="Custom blue calendar icon"
                />
              </div>
            </div>

            <CodeBlock
              code={`import { DateTimePicker } from "@khanhromvn/zenui";
import { Calendar } from "lucide-react";

function IconExample() {
  return (
    <DateTimePicker
      icon={<Calendar size={16} className="text-blue-500" />}
      placeholder="Custom blue calendar icon"
    />
  );
}`}
              language="typescript"
              theme="vs-dark"
              readOnly={true}
              headerMode="path"
              headerIcon={<FileCode size={16} />}
              filePath="src/components/IconExample.tsx"
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
            Complete list of props available for the DateTimePicker component.
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
                      Date
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Selected date/time value
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
                      "Select date and time"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">
                      Placeholder text
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
                      loading
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">false</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Loading state
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      error
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">false</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Error state
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      errorMessage
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Error message text
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
                      Size variant
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      variant
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      "outline" | "filled" | "underline"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"outline"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Style variant
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      mode
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      "date" | "time" | "datetime"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">
                      "datetime"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">
                      Picker mode
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      dateFormat
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">
                      "MM/dd/yyyy"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">
                      Date display format
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      timeFormat
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"HH:mm"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Time display format
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      minDate
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      Date
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Minimum selectable date
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      maxDate
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      Date
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Maximum selectable date
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      clearable
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">true</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Show clear button
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
                      Custom icon
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      onChange
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      (date: Date | null) =&gt; void
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Change event handler
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

export default DateTimePickerSection;
