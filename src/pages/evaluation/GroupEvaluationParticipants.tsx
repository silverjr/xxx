import { DataTable } from "@/components/data-table";
import { DataTableColumnHeader } from "@/components/data-table-column-header";
import { ColumnDef } from "@tanstack/react-table";

const participants = [
  {
    id: "1",
    name: "Kelvin Eladius Mjuni",
    email: "kelvin.mjuni@tra.go.tz",
    employeeNumber: "11109",
  },
];
const columns: ColumnDef<any>[] = [
  {
    accessorKey: "number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Number" />
    ),
    cell: ({ row }) => <div>{row.original.employeeNumber}</div>,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => <div>{row.original.name}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => <div>{row.original.email}</div>,
  },
];
export function GroupEvaluationParticipants() {
  return (
    <DataTable
      columns={columns}
      data={{
        totalElements: 5,
        totalPages: 1,
        content: participants,
        pageable: {
          pageNumber: 0,
          pageSize: 10,
        },
      }}
    />
  );
}
