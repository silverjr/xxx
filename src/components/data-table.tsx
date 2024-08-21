import * as React from "react"
import { useState } from "react"
import { ReloadIcon } from "@radix-ui/react-icons"
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  functionalUpdate,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  Updater,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table"
import { useSearchParams } from "react-router-dom"

import { cn } from "@/lib/utils"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


import { DataTablePagination } from "./data-table-pagination"
import { Result } from "@/types"

// import { Button } from "@/components/ui/button"

// import { DataTableToolbar } from "../components/data-table-toolbar"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data?: Result<TData>
  loading?: boolean
  hidePagination?: boolean
  tableRowClassName?: string
  actions?: React.ReactNode
  placeholder?: string
}

export function DataTable<TData, TValue>({
  columns,
  data,
  loading,
  actions,
  tableRowClassName,
  hidePagination,
  placeholder,
}: DataTableProps<TData, TValue>) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: data ? data.totalPages : 0,
  })
  const [rowSelection, setRowSelection] = React.useState({})
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const onPaginationChange = (updater: Updater<PaginationState>) => {
    const nextPagination = functionalUpdate(updater, pagination)
    setSearchParams({
      ...Object.fromEntries(searchParams),
      page: nextPagination.pageIndex.toString(),
      size: nextPagination.pageSize.toString(),
    })
    setPagination(nextPagination)
  }
  React.useEffect(() => {
    data &&
      setPagination({
        pageIndex: data.pageable.pageNumber,
        pageSize: data.pageable.pageSize,
      })
  }, [data])
  const [sorting, setSorting] = React.useState<SortingState>([])
  const table = useReactTable({
    data: data && data.content ? data.content : [],
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination,
    },
    onPaginationChange: onPaginationChange,
    manualPagination: true,
    pageCount: data?.totalPages,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  })

  return (
    <div className="space-y-4">
      {/* <DataTableToolbar table={table} /> */}
      <div className="rounded-md border">
        {/* <Table className="bg-white"> */}
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className={cn("rounded-xl", tableRowClassName)}
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length}>
                  <div className="h-24 text-center flex items-center justify-center w-full">
                    {loading ? (
                      <ReloadIcon className="ml-2 h-6 w-6 animate-spin" />
                    ) : placeholder ? (
                      placeholder
                    ) : (
                      "No results"
                    )}
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          {actions}
        </Table>
      </div>
      {!hidePagination && <DataTablePagination table={table} />}
    </div>
  )
}
