import { Badge } from "@/components/ui/badge"


interface UserStatusBadgeProps{
    status: "active" | "inactive" | "churned"
}

export default function UserStatusBadge({ status }: UserStatusBadgeProps) {
  return (
    <>
      {status === "active" && (
        <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
          {status}
        </Badge>
      )}

      {status === "inactive" && (
        <Badge className="bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
          {status}
        </Badge>
      )}

      {status === "churned" && (
        <Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
          {status}
        </Badge>
      )}
    </>
  );
}