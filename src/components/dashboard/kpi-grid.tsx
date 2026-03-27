import { KPIData } from "@/types";
import KPICard from "./kpi-card";

// This component takes an array of KPI data and renders them in a responsive grid
// The grid is: 1 column on mobile → 2 on tablet → 4 on desktop

interface KPIGridProps {
  data: KPIData[];
}

export default function KPIGrid({ data }: KPIGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {data.map((kpi) => (
        <KPICard key={kpi.title} {...kpi} />
      ))}
    </div>
  );
}
