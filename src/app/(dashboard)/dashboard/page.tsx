import KPIGrid from "@/components/dashboard/kpi-grid"
import { KPIData } from "@/types"
import { Users, DollarSign, CreditCard, TrendingDown } from "lucide-react"
import RevenueChart from "@/components/dashboard/revenue-chart"
import UserGrowthChart from "@/components/dashboard/user-growth-chart"


// Mock data — will be replaced with real DB data on Day 13
const mockKPIs: KPIData[] = [
  {
    title: "Total Users",
    value: "2,420",
    change: 12.5,
    changeType: "increase",
    icon: Users,
  },
  {
    title: "Monthly Revenue",
    value: "$45,231",
    change: 8.2,
    changeType: "increase",
    icon: DollarSign,
  },
  {
    title: "Active Subscriptions",
    value: "1,893",
    change: 4.1,
    changeType: "increase",
    icon: CreditCard,
  },
  {
    title: "Churn Rate",
    value: "2.4%",
    change: 0.5,
    changeType: "decrease",
    icon: TrendingDown,
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

      <KPIGrid data={mockKPIs} />

      <div className="grid gap-4 md:grid-cols-2">
        <RevenueChart />
        <UserGrowthChart />
      </div>
    </div>
  )
}