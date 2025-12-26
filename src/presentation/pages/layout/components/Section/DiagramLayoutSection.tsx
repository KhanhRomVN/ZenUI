import {
  DiagramLayout,
  DiagramNode,
  DiagramWrapper,
} from "../../../../components/package/layouts/diagram";
import {
  CodeBlock,
  CodeBlockHeader,
  CodeBlockBody,
} from "../../../../components/package/components/codeblock";
import { FileCode, Activity } from "lucide-react";

const DiagramLayoutSection = () => {
  const usageCode = `import { DiagramLayout, DiagramNode, DiagramWrapper } from "@khanhromvn/zenui";
import { CodeBlock, CodeBlockHeader, CodeBlockBody } from "src/presentation/components/package/components/codeblock";

function MyDiagram() {
  return (
    <DiagramLayout 
      className="h-[1000px] border border-border-default rounded-xl"
      minimap={true} // Enable Minimap
    >
      <DiagramWrapper
        id="node-group"
        fit={true}
        title={<span className="text-xs font-bold text-gray-500 uppercase">Module A</span>}
        minWidth={200}
        minHeight={100}
        maxWidth={1000}
        maxHeight={1000}
        className="absolute top-[50px] left-[50px] border border-dashed border-gray-300 rounded-xl bg-gray-50/50 p-4"
      >
        <DiagramNode 
          id="node-1" 
          fit={false}
          minWidth={200}
          minHeight={100}
          maxWidth={800}
          maxHeight={800} 
          className="absolute top-[40px] left-[20px]"
        >
           {/* ... */}
        </DiagramNode>
      </DiagramWrapper>
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
        auto-fitting content or fixed dimensions, minimap, and grouping.
      </p>

      {/* Live Demo */}
      <div className="border-2 border-dashed border-border-default rounded-lg p-8 mb-6">
        <div className="h-[1000px] relative rounded-xl border border-border-default overflow-hidden">
          <DiagramLayout className="h-full w-full" edges={edges}>
            {/* Group Node */}
            <DiagramWrapper
              id="node-group"
              fit={true}
              minWidth={200}
              minHeight={100}
              maxWidth={1000}
              maxHeight={1000}
              className="absolute top-[50px] left-[50px] border border-dashed border-border-hover rounded-md p-4"
            >
              <DiagramNode
                id="node-1"
                fit={false}
                minWidth={300}
                minHeight={100}
                maxWidth={600}
                maxHeight={600}
                className="absolute top-[40px] left-[20px]"
              >
                <CodeBlock
                  code={node1Code}
                  language="typescript"
                  filename="utils.ts"
                  theme="vs-dark"
                  showLineNumbers={true}
                  className="h-full transition-all duration-300"
                >
                  <CodeBlockHeader />
                  <CodeBlockBody />
                </CodeBlock>
              </DiagramNode>

              <DiagramNode
                id="node-3"
                fit={false}
                minWidth={300}
                minHeight={100}
                maxWidth={600}
                maxHeight={600}
                className="absolute top-[40px] left-[500px]"
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
              </DiagramNode>
            </DiagramWrapper>

            {/* Node 2 */}
            <DiagramNode
              id="node-2"
              fit={false}
              minWidth={300}
              minHeight={100}
              maxWidth={600}
              maxHeight={600}
              className="absolute top-[450px] left-[250px]"
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
            </DiagramNode>
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
