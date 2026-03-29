"use client"

import { ColumnDef } from "@tanstack/react-table"
import UserStatusBadge from "./user-status-badge"
import { formatCurrency , formatDate} from "@/lib/utils"
import { User } from "@/types"
import { Checkbox } from "../ui/checkbox"


export const columns: ColumnDef<User>[] = [
  {                                                                                                                  
    id: "select",                                                                                                        
    header: ({ table }) => (<Checkbox checked={table.getIsAllPageRowsSelected()} onCheckedChange={(value)=>table.toggleAllPageRowsSelected(!!value)} />),
    cell: ({ row }) => (<Checkbox checked={row.getIsSelected()} onCheckedChange={(value)=>row.toggleSelected(!!value)}/>),                                                                                                           
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell:({row})=>{
        return <UserStatusBadge status={row.original.status}/>
    }
  },
  {
    accessorKey:"plan",
    header:"Plan Subscribed"
  },
  {
    accessorKey:"revenue",
    header:"Revenue",
    cell:({row})=>{ return formatCurrency(row.original.revenue)}
  },
  {
    accessorKey:"createdAt",
    header:"Joined",
    cell:({row})=>{return formatDate(row.original.createdAt)}
  },
  {
    id: "actions",
    cell: ({ row }) => ( null) // will be done later
  }
]