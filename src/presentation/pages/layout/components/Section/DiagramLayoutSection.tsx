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
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
} from "../../../../components/package/components/dropdown";
import { FileCode, Activity, Settings, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { DIAGRAM_ALGORITHMS } from "../../../../components/package/layouts/diagram/DiagramLayoutStrategies";
import { LayoutStrategy } from "../../../../components/package/layouts/diagram/Diagram.types";

const DiagramLayoutSection = () => {
  // State for layout algorithm, persisted in localStorage
  const [algorithm, setAlgorithm] = useState<LayoutStrategy>("smart");

  useEffect(() => {
    const saved = localStorage.getItem("zenui_diagram_algorithm");
    if (saved && ["smart", "vertical", "grid"].includes(saved)) {
      setAlgorithm(saved as LayoutStrategy);
    }
  }, []);

  const handleAlgorithmChange = (id: LayoutStrategy) => {
    setAlgorithm(id);
    localStorage.setItem("zenui_diagram_algorithm", id);
  };

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

  const mainCode = `func main() {
	fmt.Println("=== Bắt đầu chương trình ===")
	FunctionA()
	fmt.Println("=== Kết thúc chương trình ===")
}`;

  const functionACode = `func FunctionA() {
	fmt.Println("\\n[A] Function A được gọi")

	fmt.Println("[A] Đang gọi Function B...")
	resultB := FunctionB()
	fmt.Printf("[A] Function B trả về: %s\\n", resultB)
	fmt.Println("[A] Đang gọi Function C...")
	resultC := FunctionC()
	fmt.Printf("[A] Function C trả về: %s\\n", resultC)
	fmt.Println("[A] Function A hoàn thành")
}`;

  const functionBCode = `func FunctionB() string {
	fmt.Println("  [B] Function B được gọi")
	
	fmt.Println("  [B] Đang gọi Function D (không return)...")
	FunctionD()
	
	fmt.Println("  [B] Đang gọi Function E...")
	resultE := FunctionE()
	fmt.Printf("  [B] Function E trả về: %s\\n", resultE)
	
	fmt.Println("  [B] Function B hoàn thành")
	return "Kết quả từ B"
}`;

  const functionCCode = `func FunctionC() string {
	fmt.Println("  [C] Function C được gọi")
	
	fmt.Println("  [C] Đang gọi Function E...")
	resultE := FunctionE()
	fmt.Printf("  [C] Function E trả về: %s\\n", resultE)
	
	fmt.Println("  [C] Đang gọi Function F (không return)...")
	FunctionF()
	
	fmt.Println("  [C] Function C hoàn thành")
	return "Kết quả từ C"
}`;

  const functionDCode = `func FunctionD() {
	fmt.Println("    [D] Function D được gọi")
	fmt.Println("    [D] Function D đang thực hiện công việc...")
	fmt.Println("    [D] Function D hoàn thành (không return)")
}`;

  const functionECode = `func FunctionE() string {
	fmt.Println("    [E] Function E được gọi")
	fmt.Println("    [E] Function E đang xử lý dữ liệu...")
	fmt.Println("    [E] Function E hoàn thành và trả về kết quả")
	return "Dữ liệu từ E"
}`;

  const functionFCode = `func FunctionF() {
	fmt.Println("    [F] Function F được gọi")
	fmt.Println("    [F] Function F đang thực thi...")
	fmt.Println("    [F] Function F hoàn thành (không return)")
}`;

  const edges: any[] = [
    // main() -> FunctionA()
    {
      id: "e1",
      from: "node-main",
      to: "node-a",
      fromDot: "auto",
      toDot: "auto",
      type: "bezier",
      label: "calls",
      color: "#3b82f6",
      width: 2,
    },
    // FunctionA() -> FunctionB()
    {
      id: "e2",
      from: "node-a",
      to: "node-b",
      fromDot: "auto",
      toDot: "auto",
      type: "bezier",
      label: "calls",
      color: "#8b5cf6",
      width: 2,
    },
    // FunctionA() -> FunctionC()
    {
      id: "e3",
      from: "node-a",
      to: "node-c",
      fromDot: "auto",
      toDot: "auto",
      type: "bezier",
      label: "calls",
      color: "#8b5cf6",
      width: 2,
    },
    // FunctionB() -> FunctionD()
    {
      id: "e4",
      from: "node-b",
      to: "node-d",
      fromDot: "auto",
      toDot: "auto",
      type: "bezier",
      label: "calls",
      color: "#10b981",
      width: 2,
    },
    // FunctionB() -> FunctionE()
    {
      id: "e5",
      from: "node-b",
      to: "node-e",
      fromDot: "auto",
      toDot: "auto",
      type: "bezier",
      label: "calls (returns data)",
      color: "#10b981",
      width: 2,
      style: "dashed",
    },
    // FunctionC() -> FunctionE()
    {
      id: "e6",
      from: "node-c",
      to: "node-e",
      fromDot: "auto",
      toDot: "auto",
      type: "bezier",
      label: "calls (returns data)",
      color: "#10b981",
      width: 2,
      style: "dashed",
    },
    // FunctionC() -> FunctionF()
    {
      id: "e7",
      from: "node-c",
      to: "node-f",
      fromDot: "auto",
      toDot: "auto",
      type: "bezier",
      label: "calls",
      color: "#10b981",
      width: 2,
    },
  ];

  return (
    <section id="diagram-layout" className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Activity className="text-blue-500" size={28} />
          <h2 className="text-3xl font-bold text-text-primary">
            Diagram Layout
          </h2>
        </div>

        {/* Algorithm Selector */}
        <Dropdown>
          <DropdownTrigger className="flex items-center gap-2 px-4 py-2 bg-white border border-border-default rounded-lg hover:bg-gray-50 transition-colors">
            <Settings size={16} className="text-gray-500" />
            <span className="font-medium text-sm text-text-primary">
              {DIAGRAM_ALGORITHMS.find((a) => a.id === algorithm)?.name ||
                "Layout Strategy"}
            </span>
            <ChevronDown size={14} className="text-gray-400" />
          </DropdownTrigger>
          <DropdownContent className="w-64">
            {DIAGRAM_ALGORITHMS.map((algo) => (
              <DropdownItem
                key={algo.id}
                onClick={() => handleAlgorithmChange(algo.id as LayoutStrategy)}
                className={
                  algorithm === algo.id ? "bg-blue-50 text-blue-600" : ""
                }
              >
                <div className="flex flex-col gap-1">
                  <span className="font-medium">{algo.name}</span>
                  <span className="text-xs text-gray-500">
                    {algo.description}
                  </span>
                </div>
              </DropdownItem>
            ))}
          </DropdownContent>
        </Dropdown>
      </div>

      <p className="text-lg text-text-secondary mb-6 leading-relaxed">
        A specialized layout for node-based diagrams and flowcharts. Provides
        items with connection points (dots) on all four sides. Supports
        auto-fitting content or fixed dimensions, minimap, and grouping.
      </p>

      {/* Live Demo */}
      <div className="border-2 border-dashed border-border-default rounded-lg p-8 mb-6">
        <div className="h-[900px] relative rounded-xl border border-border-default overflow-hidden transition-all duration-500">
          <DiagramLayout
            className="h-full w-full"
            edges={edges}
            autoLayout={true}
            layoutStrategy={algorithm}
            layoutOptions={{
              nodeSpacing: 200,
              iterations: 300,
              edgeWeight: 0.2,
              repulsionStrength: 10000,
            }}
          >
            {/* Diagram Wrapper for Main and E */}
            <DiagramWrapper
              id="wrapper-main-e"
              title={
                <span className="text-xs font-bold text-gray-500 uppercase">
                  Main Group
                </span>
              }
              fit={true}
              minWidth={300}
              minHeight={200}
              maxWidth={1200}
              maxHeight={1200}
              className="absolute border border-dashed border-gray-300 rounded-xl p-4"
            >
              {/* Level 0: Main Function - Entry Point */}
              <DiagramNode
                id="node-main"
                filename="main.go"
                fit={false}
                minWidth={380}
                minHeight={180}
                maxWidth={650}
                maxHeight={650}
                className="absolute top-[40px] left-[20px]"
              >
                <CodeBlock
                  code={mainCode}
                  language="go"
                  filename="main.go"
                  theme="vs-dark"
                  showLineNumbers={true}
                  className="h-full"
                >
                  <CodeBlockHeader />
                  <CodeBlockBody />
                </CodeBlock>
              </DiagramNode>

              {/* Function E - Called by both B and C (returns data) */}
              <DiagramNode
                id="node-e"
                filename="function_e.go"
                fit={false}
                minWidth={380}
                minHeight={180}
                maxWidth={640}
                maxHeight={640}
                className="absolute top-[300px] left-[20px]"
              >
                <CodeBlock
                  code={functionECode}
                  language="go"
                  filename="function_e.go"
                  theme="vs-dark"
                  showLineNumbers={true}
                  className="h-full"
                >
                  <CodeBlockHeader />
                  <CodeBlockBody />
                </CodeBlock>
              </DiagramNode>
            </DiagramWrapper>

            {/* Level 1: Function A - Called by main() */}
            <DiagramNode
              id="node-a"
              filename="function_a.go"
              fit={false}
              minWidth={450}
              minHeight={250}
              maxWidth={750}
              maxHeight={750}
              className="absolute top-[280px] left-[480px]"
            >
              <CodeBlock
                code={functionACode}
                language="go"
                filename="function_a.go"
                theme="vs-dark"
                showLineNumbers={true}
                className="h-full"
              >
                <CodeBlockHeader />
                <CodeBlockBody />
              </CodeBlock>
            </DiagramNode>

            {/* Level 2 Nodes (formerly wrapped) - Functions called by A */}
            {/* Function B - First call from A */}
            <DiagramNode
              id="node-b"
              filename="function_b.go"
              fit={false}
              minWidth={420}
              minHeight={220}
              maxWidth={720}
              maxHeight={720}
              className="absolute top-[30px] left-[20px]"
            >
              <CodeBlock
                code={functionBCode}
                language="go"
                filename="function_b.go"
                theme="vs-dark"
                showLineNumbers={true}
                className="h-full"
              >
                <CodeBlockHeader />
                <CodeBlockBody />
              </CodeBlock>
            </DiagramNode>

            {/* Diagram Wrapper for C and F */}
            <DiagramWrapper
              id="wrapper-c-f"
              title={
                <span className="text-xs font-bold text-gray-500 uppercase">
                  Functions C Group
                </span>
              }
              fit={true}
              minWidth={300}
              minHeight={200}
              maxWidth={1200}
              maxHeight={1200}
              className="absolute border border-dashed border-gray-300 rounded-xl p-4"
            >
              {/* Function C - Second call from A */}
              <DiagramNode
                id="node-c"
                filename="function_c.go"
                fit={false}
                minWidth={420}
                minHeight={220}
                maxWidth={720}
                maxHeight={720}
                className="absolute top-[40px] left-[20px]"
              >
                <CodeBlock
                  code={functionCCode}
                  language="go"
                  filename="function_c.go"
                  theme="vs-dark"
                  showLineNumbers={true}
                  className="h-full"
                >
                  <CodeBlockHeader />
                  <CodeBlockBody />
                </CodeBlock>
              </DiagramNode>

              {/* Function F - Called by C (no return) */}
              <DiagramNode
                id="node-f"
                filename="function_f.go"
                fit={false}
                minWidth={360}
                minHeight={160}
                maxWidth={620}
                maxHeight={620}
                className="absolute top-[40px] left-[460px]"
              >
                <CodeBlock
                  code={functionFCode}
                  language="go"
                  filename="function_f.go"
                  theme="vs-dark"
                  showLineNumbers={true}
                  className="h-full"
                >
                  <CodeBlockHeader />
                  <CodeBlockBody />
                </CodeBlock>
              </DiagramNode>
            </DiagramWrapper>

            {/* Level 3 Nodes (formerly wrapped) - Leaf functions (D, E, F) */}
            {/* Function D - Called by B (no return) */}
            <DiagramNode
              id="node-d"
              filename="function_d.go"
              fit={false}
              minWidth={360}
              minHeight={160}
              maxWidth={620}
              maxHeight={620}
              className="absolute top-[30px] left-[20px]"
            >
              <CodeBlock
                code={functionDCode}
                language="go"
                filename="function_d.go"
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
