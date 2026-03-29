'use client'

import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    flexRender,
    ColumnDef,
} from "@tanstack/react-table"

import UsersTool from "./users-tool"

import {columns} from './user-columns-def'
import { User } from "@/types"

  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"


  interface UsersTableProps {
    data: User[]
  }

export default function UserDataTable({data}:UsersTableProps){
    
  
    const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),           // basic table rendering
    getFilteredRowModel: getFilteredRowModel(),    // enables filtering
    getPaginationRowModel: getPaginationRowModel(), // enables pagination
    getSortedRowModel: getSortedRowModel(),        // enables sorting
  })


    
    return(
        <>
        <UsersTool table={table}/>
        <Table>
            <TableHeader>
                {table.getHeaderGroups().map((headerGroup)=>
                    (<TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header)=>(
                            <TableHead key={header.id}>
                                {flexRender(header.column.columnDef.header,header.getContext())}
                            </TableHead>
                        ))}
                    </TableRow>)
                )}
            </TableHeader>
        <TableBody>
            {(table.getRowModel().rows.length > 0) ? (
                table.getRowModel().rows.map((row)=>(
                    <TableRow key={row.id}>
                        {row.getVisibleCells().map((cell)=>(
                            <TableCell key={cell.id}>
                                {flexRender(cell.column.columnDef.cell,cell.getContext())}
                            </TableCell>
                        ))}
                    </TableRow>
                ))
            ):(<TableRow>
                <TableCell colSpan={columns.length} className="text-center">
                    No Results Found.
                </TableCell>
            </TableRow>)}
        </TableBody>
        </Table>
        </>
    )
}