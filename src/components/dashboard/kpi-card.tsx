import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { KPIData } from "@/types";
import { ArrowUp, ArrowDown } from "lucide-react";

// Server component — no "use client" needed since we're just displaying props
// We'll convert to client component on Day 18 when we add sparkline charts

export default function KPICard({ title, value, change, changeType, icon: Icon }: KPIData) {
  // ^ "icon: Icon" renames the prop — JSX components must start uppercase
  // so we can't do <icon />, we need <Icon />

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <Badge
          variant="secondary"
          className={
            changeType === "increase"
              ? "mt-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-50"
              : "mt-2 bg-red-50 text-red-700 hover:bg-red-50"
          }
        >
          {changeType === "increase" ? (
            <ArrowUp className="mr-1 h-3 w-3" />
          ) : (
            <ArrowDown className="mr-1 h-3 w-3" />
          )}
          {change}%
        </Badge>
      </CardContent>
    </Card>
  );
}
