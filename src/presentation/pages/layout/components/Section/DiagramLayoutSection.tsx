import {
  DiagramLayout,
  DiagramItem,
} from "../../../../components/package/layouts/diagram";
import { CodeBlock } from "../../../../components/package/components/codeblock";
import { FileCode, Activity } from "lucide-react";

const DiagramLayoutSection = () => {
  const usageCode = `import { DiagramLayout, DiagramItem } from "@khanhromvn/zenui";
import { CodeBlock } from "@khanhromvn/zenui";

function MyDiagram() {
  return (
    <DiagramLayout className="h-[500px] border border-border-default rounded-xl">
      <DiagramItem style={{ position: "absolute", top: 50, left: 50, width: 400 }}>
        {/* Header */}
        <div className="flex items-center gap-2 p-3 border-b border-border-default bg-gray-50 dark:bg-gray-900/50">
           <FileCode size={16} className="text-blue-500" />
           <span className="text-sm font-medium text-text-primary">utils.ts</span>
        </div>
        
        {/* Body */}
        <div className="p-0">
          <CodeBlock 
             code="export const add = (a, b) => a + b;"
             language="typescript"
             theme="vs-dark"
             showLineNumbers={false}
             className="rounded-none border-none"
          />
        </div>
      </DiagramItem>
    </DiagramLayout>
  );
}`;

  const node1Code = `export const sum = (a: number, b: number) => {
  return a + b;
};`;

  const node2Code = `import { sum } from "./utils";

const result = sum(10, 20);
console.log(result); // 30`;

  const node3Code = `export interface User {
  id: string;
  name: string;
  email: string;
}`;

  return (
    <section id="diagram-layout" className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <Activity className="text-blue-500" size={28} />
        <h2 className="text-3xl font-bold text-text-primary">Diagram Layout</h2>
      </div>

      <p className="text-lg text-text-secondary mb-6 leading-relaxed">
        A specialized layout for node-based diagrams and flowcharts. Provides
        items with connection points (dots) on all four sides. Supports
        auto-fitting content or fixed dimensions.
      </p>

      {/* Live Demo */}
      <div className="border-2 border-dashed border-border-default rounded-lg p-8 mb-6">
        <div className="h-[500px] relative rounded-xl border border-border-default overflow-hidden">
          <DiagramLayout className="h-full w-full bg-transparent">
            {/* Node 1 */}
            <DiagramItem
              style={{ position: "absolute", top: 50, left: 50, width: 350 }}
            >
              <div className="flex items-center gap-2 p-3 border-b border-border-default bg-gray-50 dark:bg-gray-900/50 rounded-t-lg">
                <FileCode size={16} className="text-blue-500" />
                <span className="text-sm font-medium text-text-primary">
                  utils.ts
                </span>
              </div>
              <div className="p-0">
                <CodeBlock
                  code={node1Code}
                  language="typescript"
                  theme="vs-dark"
                  showLineNumbers={true}
                  className="rounded-t-none border-none m-0"
                />
              </div>
            </DiagramItem>

            {/* Node 2 */}
            <DiagramItem
              style={{ position: "absolute", top: 250, left: 450, width: 400 }}
            >
              <div className="flex items-center gap-2 p-3 border-b border-border-default bg-gray-50 dark:bg-gray-900/50 rounded-t-lg">
                <FileCode size={16} className="text-green-500" />
                <span className="text-sm font-medium text-text-primary">
                  main.ts
                </span>
              </div>
              <div className="p-0">
                <CodeBlock
                  code={node2Code}
                  language="typescript"
                  theme="vs-dark"
                  showLineNumbers={true}
                  className="rounded-t-none border-none m-0"
                />
              </div>
            </DiagramItem>

            {/* Node 3 */}
            <DiagramItem
              style={{ position: "absolute", top: 50, left: 550, width: 300 }}
            >
              <div className="flex items-center gap-2 p-3 border-b border-border-default bg-gray-50 dark:bg-gray-900/50 rounded-t-lg">
                <FileCode size={16} className="text-yellow-500" />
                <span className="text-sm font-medium text-text-primary">
                  types.ts
                </span>
              </div>
              <div className="p-0">
                <CodeBlock
                  code={node3Code}
                  language="typescript"
                  theme="vs-dark"
                  showLineNumbers={true}
                  className="rounded-t-none border-none m-0"
                />
              </div>
            </DiagramItem>
          </DiagramLayout>
        </div>
      </div>

      {/* Code Example */}
      <CodeBlock
        code={usageCode}
        language="typescript"
        theme="vs-dark"
        readOnly={true}
        headerMode="path"
        headerIcon={<FileCode size={16} />}
        filePath="src/components/DiagramExample.tsx"
        showLineNumbers={true}
        showGutter={true}
      />
    </section>
  );
};

export default DiagramLayoutSection;
