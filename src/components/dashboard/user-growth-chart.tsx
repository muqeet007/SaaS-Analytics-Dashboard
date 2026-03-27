"use client"

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

// Mock data — will be replaced with real DB data on Day 13
const userGrowthData = [
  { month: "Jan", users: 120 },
  { month: "Feb", users: 145 },
  { month: "Mar", users: 162 },
  { month: "Apr", users: 138 },
  { month: "May", users: 185 },
  { month: "Jun", users: 198 },
  { month: "Jul", users: 176 },
  { month: "Aug", users: 210 },
  { month: "Sep", users: 235 },
  { month: "Oct", users: 228 },
  { month: "Nov", users: 260 },
  { month: "Dec", users: 290 },
]

export default function UserGrowthChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Growth</CardTitle>
        <CardDescription>New user signups per month</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={userGrowthData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e4e4e7" />
            <XAxis dataKey="month" fontSize={12} tickLine={false} axisLine={false} stroke="#a1a1aa" />
            <YAxis width={40} fontSize={12} tickLine={false} axisLine={false} stroke="#a1a1aa" />
            <Tooltip
              contentStyle={{ backgroundColor: "#fff", border: "1px solid #e4e4e7", borderRadius: "8px" }}
              formatter={(val) => [`${Number(val)} users`, "Signups"]}
            />
            <Bar
              dataKey="users"
              fill="#27272a"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
