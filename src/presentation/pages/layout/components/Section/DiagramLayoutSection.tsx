import {
  DiagramLayout,
  DiagramItem,
} from "../../../../components/package/layouts/diagram";
import {
  CodeBlock,
  CodeBlockHeader,
  CodeBlockBody,
} from "../../../../components/package/components/codeblock";
import { FileCode, Activity } from "lucide-react";

const DiagramLayoutSection = () => {
  const usageCode = `import { DiagramLayout, DiagramItem } from "@khanhromvn/zenui";
import { CodeBlock, CodeBlockHeader, CodeBlockBody } from "src/presentation/components/package/components/codeblock";

function MyDiagram() {
  return (
    <DiagramLayout className="h-[500px] border border-border-default rounded-xl">
      <DiagramItem className="absolute top-[50px] left-[50px] w-[400px]">
        <CodeBlock 
           code="export const add = (a, b) => a + b;"
           language="typescript"
           filename="utils.ts"
           theme="vs-dark"
        >
           <CodeBlockHeader />
           <CodeBlockBody />
        </CodeBlock>
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

  const edges: any[] = [
    {
      id: "e1",
      from: "node-1",
      to: "node-2",
      fromDot: "auto",
      toDot: "auto",
      type: "bezier",
      label: "Imports",
      color: "#9ca3af",
    },
    {
      id: "e2",
      from: "node-3",
      to: "node-2",
      fromDot: "auto",
      toDot: "auto",
      type: "step",
      style: "dashed",
      label: "References",
      color: "#9ca3af",
    },
  ];

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
          <DiagramLayout className="h-full w-full bg-transparent" edges={edges}>
            {/* Node 1 */}
            <DiagramItem
              id="node-1"
              fit={false}
              className="absolute top-[50px] left-[50px] w-[450px]"
            >
              <CodeBlock
                code={node1Code}
                language="typescript"
                filename="utils.ts"
                theme="vs-dark"
                showLineNumbers={true}
                className="h-full"
              >
                <CodeBlockHeader />
                <CodeBlockBody />
              </CodeBlock>
            </DiagramItem>

            {/* Node 2 */}
            <DiagramItem
              id="node-2"
              fit={false}
              className="absolute top-[250px] left-[450px] w-[500px]"
            >
              <CodeBlock
                code={node2Code}
                language="typescript"
                filename="main.ts"
                theme="vs-dark"
                showLineNumbers={true}
                className="h-full"
              >
                <CodeBlockHeader />
                <CodeBlockBody />
              </CodeBlock>
            </DiagramItem>

            {/* Node 3 */}
            <DiagramItem
              id="node-3"
              fit={false}
              className="absolute top-[50px] left-[550px] w-[400px]"
            >
              <CodeBlock
                code={node3Code}
                language="typescript"
                filename="types.ts"
                theme="vs-dark"
                showLineNumbers={true}
                className="h-full"
              >
                <CodeBlockHeader />
                <CodeBlockBody />
              </CodeBlock>
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
