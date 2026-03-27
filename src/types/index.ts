import { LucideIcon } from "lucide-react"

export interface KPIData {
  title: string
  value: string
  change: number
  changeType: "increase" | "decrease"
  icon: LucideIcon
}

export interface User {
  id: string
  name: string
  email: string
  status: "active" | "inactive" | "churned"
  plan: string
  createdAt: Date
  revenue: number
}

export interface Subscription {
  id: string
  userId: string
  plan: "free" | "starter" | "pro" | "enterprise"
  status: "active" | "canceled" | "past_due"
  startDate: Date
  amount: number
}