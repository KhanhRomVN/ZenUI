import { useState } from "react";
import { Table } from "../../../../components/package/components/table";
import { CodeBlock } from "../../../../components/package/components/codeblock";
import { FileCode, Edit, Trash2, ChevronUp, ChevronDown } from "lucide-react";
import RightPanel from "../RightPanel";
import { Button } from "../../../../components/package/components/button";

const TableSection = () => {
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

  // Sample data
  const sampleData = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      age: 28,
      department: "Engineering",
      status: "Active",
      salary: 75000,
      joinDate: "2022-03-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      age: 32,
      department: "Marketing",
      status: "Active",
      salary: 65000,
      joinDate: "2021-08-22",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      age: 45,
      department: "Sales",
      status: "Inactive",
      salary: 85000,
      joinDate: "2020-11-30",
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice@example.com",
      age: 29,
      department: "Engineering",
      status: "Active",
      salary: 72000,
      joinDate: "2023-01-10",
    },
    {
      id: 5,
      name: "Charlie Wilson",
      email: "charlie@example.com",
      age: 38,
      department: "HR",
      status: "Active",
      salary: 60000,
      joinDate: "2022-06-18",
    },
  ];

  // State for pagination
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 3,
    total: sampleData.length,
  });

  const basicUsageCode = `import { Table } from "@khanhromvn/zenui";

function BasicTable() {
  const data = [
    { id: 1, name: "John Doe", age: 28, department: "Engineering" },
    { id: 2, name: "Jane Smith", age: 32, department: "Marketing" },
    { id: 3, name: "Bob Johnson", age: 45, department: "Sales" },
  ];

  const columns = [
    { key: "name", title: "Name", sortable: true },
    { key: "age", title: "Age", sortable: true, align: "center" },
    { key: "department", title: "Department", sortable: true },
    {
      key: "actions",
      title: "Actions",
      render: (_, record) => (
        <button
          onClick={() => console.log("Edit:", record)}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Edit
        </button>
      ),
    },
  ];

  return (
    <div className="border border-table-border rounded-lg overflow-hidden">
      <Table
        data={data}
        columns={columns}
        variant="striped"
        onRowClick={(record) => console.log("Clicked:", record)}
      />
    </div>
  );
}`;

  const paginationExampleCode = `import { Table } from "@khanhromvn/zenui";
import { useState } from "react";

function PaginatedTable() {
  const [data, setData] = useState([
    { id: 1, name: "John Doe", age: 28, department: "Engineering" },
    { id: 2, name: "Jane Smith", age: 32, department: "Marketing" },
    // ... more data
  ]);

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: 50, // Total records from server
  });

  const columns = [
    { key: "name", title: "Name", sortable: true },
    { key: "age", title: "Age", sortable: true },
    { key: "department", title: "Department", sortable: true },
  ];

  const handlePageChange = (page, pageSize) => {
    // Fetch new page data from server
    fetchData(page, pageSize);
    setPagination({ ...pagination, current: page });
  };

  return (
    <Table
      data={data}
      columns={columns}
      pagination={pagination}
      onPageChange={handlePageChange}
      variant="striped"
    />
  );
}`;

  const subComponentsExampleCode = `import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableFooter, 
  TableRow, 
  TableCell 
} from "@khanhromvn/zenui";

function CustomTable() {
  return (
    <div className="border border-table-border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-table-headerBg">
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="hover:bg-table-rowOddHover">
            <TableCell>1</TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow className="hover:bg-table-rowEvenHover">
            <TableCell>2</TableCell>
            <TableCell>Jane Smith</TableCell>
            <TableCell>Inactive</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow className="bg-table-footerBg">
            <TableCell colSpan={3} align="center">
              Total: 2 records
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}`;

  const columns = [
    {
      key: "name",
      title: "Name",
      sortable: true,
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
      width: "20%",
    },
    {
      key: "email",
      title: "Email",
      sortable: true,
      sorter: (a: any, b: any) => a.email.localeCompare(b.email),
      width: "25%",
    },
    {
      key: "age",
      title: "Age",
      sortable: true,
      align: "center" as const,
      sorter: (a: any, b: any) => a.age - b.age,
      width: "10%",
    },
    {
      key: "department",
      title: "Department",
      sortable: true,
      sorter: (a: any, b: any) => a.department.localeCompare(b.department),
      width: "15%",
    },
    {
      key: "status",
      title: "Status",
      sortable: true,
      align: "center" as const,
      render: (value: any) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            value === "Active"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {value}
        </span>
      ),
      width: "15%",
    },
    {
      key: "actions",
      title: "Actions",
      align: "center" as const,
      render: (_: any, record: any) => (
        <div className="flex gap-2">
          <Button
            size={80}
            icon={<Edit size={12} />}
            className="bg-blue-600 hover:bg-blue-700 text-white border border-blue-700"
            onClick={(e) => {
              e.stopPropagation();
              console.log("Edit:", record);
            }}
          />
          <Button
            size={80}
            icon={<Trash2 size={12} />}
            className="bg-red-600 hover:bg-red-700 text-white border border-red-700"
            onClick={(e) => {
              e.stopPropagation();
              console.log("Delete:", record);
            }}
          />
        </div>
      ),
      width: "15%",
    },
  ];

  const handlePageChange = (page: number, pageSize: number) => {
    console.log("Page changed:", page, "Page size:", pageSize);
    setPagination({
      ...pagination,
      current: page,
    });
  };

  const handleSort = (sort: any) => {
    console.log("Sort changed:", sort);
  };

  const handleRowClick = (record: any, index: number) => {
    console.log("Row clicked:", record, "Index:", index);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto">
        {/* ABOUT SECTION */}
        <section id="about" className="mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-3">Table</h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            A powerful and flexible table component with built-in sorting,
            pagination, and extensive customization options. Perfect for
            displaying tabular data with rich interactions, customizable
            styling, and responsive design.
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
            Here's a simple example to get you started with the Table component.
          </p>

          {/* Live Demo */}
          <div className="bg-card-background border border-border-default rounded-lg p-4 mb-6">
            <Table
              data={sampleData.slice(0, 3)}
              columns={columns.slice(0, 4)}
              variant="default"
              size="md"
              onRowClick={handleRowClick}
              onSort={handleSort}
              className="border border-table-border rounded-lg overflow-hidden"
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

        {/* PROPS SECTION */}
        <section id="props" className="mb-12">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Props
          </h2>
          <p className="text-text-secondary mb-6">
            Complete list of props available for the Table component.
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
                      data*
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      T[]
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Array of data objects
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      columns*
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      TableColumn&lt;T&gt;[]
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Column definitions
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
                      Table size variant
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      variant
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      "default" | "bordered" | "striped"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"default"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Table style variant
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      pagination
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      TablePagination
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Pagination configuration
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
                      emptyMessage
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">
                      "No data available"
                    </td>
                    <td className="px-6 py-4 text-text-secondary">
                      Message when data is empty
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      onRowClick
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      (record: T, index: number) =&gt; void
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Row click handler
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      onSort
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      (sort: TableSort | null) =&gt; void
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Sort change handler
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      onPageChange
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      (page: number, pageSize: number) =&gt; void
                    </td>
                    <td className="px-6 py-4 text-text-secondary">-</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Page change handler
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      rowKey
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      string | (record: T) =&gt; string
                    </td>
                    <td className="px-6 py-4 text-text-secondary">"id"</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Unique key for each row
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      showHeader
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">true</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Show/hide table header
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      showFooter
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">true</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Show/hide table footer
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-text-primary font-mono text-xs">
                      stickyHeader
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-6 py-4 text-text-secondary">false</td>
                    <td className="px-6 py-4 text-text-secondary">
                      Make header sticky
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
                      Additional CSS classes
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* TableColumn Props */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              TableColumn Props
            </h3>
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
                        key*
                      </td>
                      <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                        string
                      </td>
                      <td className="px-6 py-4 text-text-secondary">-</td>
                      <td className="px-6 py-4 text-text-secondary">
                        Unique key for column
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-text-primary font-mono text-xs">
                        title*
                      </td>
                      <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                        string
                      </td>
                      <td className="px-6 py-4 text-text-secondary">-</td>
                      <td className="px-6 py-4 text-text-secondary">
                        Column title
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-text-primary font-mono text-xs">
                        width
                      </td>
                      <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                        string | number
                      </td>
                      <td className="px-6 py-4 text-text-secondary">-</td>
                      <td className="px-6 py-4 text-text-secondary">
                        Column width
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-text-primary font-mono text-xs">
                        align
                      </td>
                      <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                        "left" | "center" | "right"
                      </td>
                      <td className="px-6 py-4 text-text-secondary">"left"</td>
                      <td className="px-6 py-4 text-text-secondary">
                        Text alignment
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-text-primary font-mono text-xs">
                        sortable
                      </td>
                      <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                        boolean
                      </td>
                      <td className="px-6 py-4 text-text-secondary">false</td>
                      <td className="px-6 py-4 text-text-secondary">
                        Enable sorting
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-text-primary font-mono text-xs">
                        sorter
                      </td>
                      <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                        (a: T, b: T) =&gt; number
                      </td>
                      <td className="px-6 py-4 text-text-secondary">-</td>
                      <td className="px-6 py-4 text-text-secondary">
                        Custom sort function
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-text-primary font-mono text-xs">
                        render
                      </td>
                      <td className="px-6 py-4 text-text-secondary font-mono text-xs">
                        (value: any, record: T, index: number) =&gt; ReactNode
                      </td>
                      <td className="px-6 py-4 text-text-secondary">-</td>
                      <td className="px-6 py-4 text-text-secondary">
                        Custom cell render function
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Right Panel Navigation */}
      <RightPanel sections={navigationSections} />
    </>
  );
};

export default TableSection;
