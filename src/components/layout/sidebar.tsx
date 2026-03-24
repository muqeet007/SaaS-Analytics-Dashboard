"use client";



import { usePathname } from "next/navigation";



import Link from "next/link";

import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  
  
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-60 flex-col border-r border-zinc-800 bg-zinc-950 md:flex">
      {/* Logo area */}
      <div className="flex h-16 items-center gap-2 border-b border-zinc-800 px-6">
        <div className="h-7 w-7 rounded-lg bg-white" />
        <span className="text-lg font-bold text-white">SaaSBoard</span>
      </div>

      {/* Navigation links */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navItems.map((item) => {
          
          
          
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

          
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              // cn() merges Tailwind classes — active link gets a highlighted background
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

      {/* User area at the bottom — hardcoded for now, will use session data after Day 10 (Auth) */}
      <div className="border-t border-zinc-800 px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-zinc-700" />
          <div>
            <p className="text-sm font-medium text-white">Admin User</p>
            <p className="text-xs text-zinc-500">admin@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
