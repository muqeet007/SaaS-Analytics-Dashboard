'use client'

import { Table } from "@tanstack/react-table"
import { Input } from "../ui/input"
import { User } from "@/types"

 import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

interface UserToolProps{
    table:Table<User>
}



export default function UsersTool({table}:UserToolProps){
    return (
         
        <div className="flex items-center gap-4 py-4">
            {/* search box that will filter by name */}
            <Input
            placeholder="Search users here"
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(e)=>table.getColumn("name")?.setFilterValue(e.target.value)}
            />

            <Select
            
            value={(table.getColumn("status")?.getFilterValue() as string) || "all"}
            onValueChange={(value)=>{table.getColumn("status")?.setFilterValue(value === "all" ? "" : value)}}
            >
            
            <SelectTrigger>
                <SelectValue placeholder="Select Status"/>
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
            <SelectItem value="churned">Churned</SelectItem>
            </SelectContent>
            </Select>

              <Select
                value={(table.getColumn("plan")?.getFilterValue() as string) || "all"}
                onValueChange={(value) =>
                table.getColumn("plan")?.setFilterValue(value === "all" ? "" : value)
                }
            >
                <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Plan" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="all">All Plans</SelectItem>
                <SelectItem value="free">Free</SelectItem>
                <SelectItem value="starter">Starter</SelectItem>
                <SelectItem value="pro">Pro</SelectItem>
                <SelectItem value="enterprise">Enterprise</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}