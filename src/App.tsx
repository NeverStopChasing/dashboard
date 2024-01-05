import {
  ColumnDef,
  createColumnHelper,
  useReactTable,
} from "@tanstack/react-table";
import "./App.css";

function App() {
  type DashboardData = {
    Dates: number;
    DayNumber: number;
    CategoryRisk: string;
    RiskLevel: number;
    MainThreat: string;
    Area: string;
    Population: number;
    Cities: string;
    SpcLink: string;
    ChaseChance: number;
  };

  const columnHelper = createColumnHelper<DashboardData>();

  const columns = [
    // Display Column
    columnHelper.display({
      id: "actions",
      cell: (props) => <DashboardData row={props.row} />,
    }),
    // Grouping Column
    columnHelper.group({
      header: "Name",
      footer: (props) => props.column.id,
      columns: [
        // Accessor Column
        columnHelper.accessor("Dates", {
          cell: (info) => info.getValue(),
          footer: (props) => props.column.id,
        }),
        // Accessor Column
        columnHelper.accessor((row) => row.lastName, {
          id: "lastName",
          cell: (info) => info.getValue(),
          header: () => <span>Last Name</span>,
          footer: (props) => props.column.id,
        }),
      ],
    }),
    // Grouping Column
    columnHelper.group({
      header: "Info",
      footer: (props) => props.column.id,
      columns: [
        // Accessor Column
        columnHelper.accessor("age", {
          header: () => "Age",
          footer: (props) => props.column.id,
        }),
        // Grouping Column
        columnHelper.group({
          header: "More Info",
          columns: [
            // Accessor Column
            columnHelper.accessor("visits", {
              header: () => <span>Visits</span>,
              footer: (props) => props.column.id,
            }),
            // Accessor Column
            columnHelper.accessor("status", {
              header: "Status",
              footer: (props) => props.column.id,
            }),
            // Accessor Column
            columnHelper.accessor("progress", {
              header: "Profile Progress",
              footer: (props) => props.column.id,
            }),
          ],
        }),
      ],
    }),
  ];

  const mockData: DashboardData = [
    {
      Dates: 0,
      DayNumber: 0,
      CategoryRisk: "test",
      RiskLevel: 0,
      MainThreat: "test",
      Area: "test",
      Population: 0,
      Cities: "test",
      SpcLink: "test",
      ChaseChance: 0,
    },
    {
      Dates: 0,
      DayNumber: 0,
      CategoryRisk: "test",
      RiskLevel: 0,
      MainThreat: "test",
      Area: "test",
      Population: 0,
      Cities: "test",
      SpcLink: "test",
      ChaseChance: 0,
    },
  ];

  const table = useReactTable({ columns, mockData });
  return (
    <>
      <div>NSC Dashboard</div>
    </>
  );
}

export default App;
