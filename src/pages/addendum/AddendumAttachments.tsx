import { DataTable } from "@/components/data-table";
import { DataTableColumnHeader } from "@/components/data-table-column-header";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";

interface IContractAttachment {
  id: string;
  fileName: string;
  description: string;
  type: string;
  uploadDate: string;
}
export const columns: ColumnDef<IContractAttachment>[] = [
  {
    accessorKey: "sn",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="S/N" />
    ),
    cell: ({ row }) => <div className="max-w-[500px]">{row.original.id}</div>,
  },

  {
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => <div className="max-w-[500px]">{row.original.type}</div>,
  },
  {
    accessorKey: "fileName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="File name" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px]">{row.original.fileName}</div>
    ),
  },
  {
    accessorKey: "Upload",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Upload date" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px]">{row.original.uploadDate}</div>
    ),
  },
];

export function AddendumAttachments() {
  const datasource = {
    totalPages: 1,
    pageable: {
      pageNumber: 0,
      pageSize: 10,
    },

    content: [
      {
        id: 1,
        fileName: "approved_addendum.pdf",
        type: "Approved attendum 01",
        uploadDate: "2025-09-10 12:12:12",
      },
      {
        id: 2,
        fileName: "approved_addendum.pdf",
        type: "Approved attendum 02",
        uploadDate: "2025-09-10 12:12:12",
      },
    ],
  };

  return (
    <div className="gap-2">
      <DataTable
        columns={columns}
        data={datasource}
        actions={
          <div className="my-2 mx-2">
            <Button variant="ghost">Add attachment</Button>
          </div>
        }
      />
    </div>
  );
}
