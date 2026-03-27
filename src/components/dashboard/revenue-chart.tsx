"use client"

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

// Mock data — will be replaced with real DB data on Day 13
const revenueData = [
  { month: "Jan", revenue: 30000 },
  { month: "Feb", revenue: 32500 },
  { month: "Mar", revenue: 35000 },
  { month: "Apr", revenue: 33200 },
  { month: "May", revenue: 37800 },
  { month: "Jun", revenue: 39500 },
  { month: "Jul", revenue: 38000 },
  { month: "Aug", revenue: 41200 },
  { month: "Sep", revenue: 43500 },
  { month: "Oct", revenue: 42800 },
  { month: "Nov", revenue: 45100 },
  { month: "Dec", revenue: 48000 },
]

export default function RevenueChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Overview</CardTitle>
        <CardDescription>Monthly revenue for the past 12 months</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#18181b" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#18181b" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e4e4e7" />
            <XAxis dataKey="month" fontSize={12} tickLine={false} axisLine={false} stroke="#a1a1aa" />
            <YAxis
              width={60}
              fontSize={12}
              tickLine={false}
              axisLine={false}
              stroke="#a1a1aa"
              tickFormatter={(val) => `$${(val / 1000).toFixed(0)}k`}
            />
            <Tooltip
              contentStyle={{ backgroundColor: "#fff", border: "1px solid #e4e4e7", borderRadius: "8px" }}
              formatter={(val) => [`$${Number(val).toLocaleString()}`, "Revenue"]}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#18181b"
              fill="url(#revenueGradient)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

