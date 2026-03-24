"use client";



import { usePathname } from "next/navigation";
import { useEffect } from "react";

import Link from "next/link";
import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";



import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface MobileSidebarProps {
  // "open" and "onOpenChange" — this is the controlled component pattern
  // The parent (layout) owns the state, this component just renders based on it
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function MobileSidebar({ open, onOpenChange }: MobileSidebarProps) {
  const pathname = usePathname();

  // useEffect runs AFTER the component renders
  // Here it watches for route changes — when pathname changes, close the drawer
  // This is a common pattern for mobile navigation
  useEffect(() => {
    onOpenChange(false);
  }, [pathname, onOpenChange]);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-60 bg-zinc-950 p-0 border-zinc-800">
        <SheetHeader className="flex h-16 items-center gap-2 border-b border-zinc-800 px-6">
          <div className="h-7 w-7 rounded-lg bg-white" />
          <SheetTitle className="text-lg font-bold text-white">SaaSBoard</SheetTitle>
        </SheetHeader>

        {/* Same nav as desktop sidebar — reuses the same navItems data */}
        <nav className="space-y-1 px-3 py-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-zinc-800 text-white"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                )}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
