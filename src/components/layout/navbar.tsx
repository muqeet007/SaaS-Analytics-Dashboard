"use client";


import { usePathname } from "next/navigation";

import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  // This callback is passed from the layout — it opens the mobile sidebar (Sheet)
  // This is a common React pattern: child triggers an action defined in the parent
  onMobileMenuToggle: () => void;
}

export default function Navbar({ onMobileMenuToggle }: NavbarProps) {
  
  const pathname = usePathname();

  // Convert "/dashboard" → "Dashboard", "/users" → "Users"
  // This is a simple approach — split the path and capitalize each segment
  const breadcrumb = pathname
    .split("/")
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1));

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-white px-4 md:px-6">
      {/* Hamburger button — only visible on mobile (md:hidden) */}
      {/* On desktop the sidebar is always visible, so we don't need this */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={onMobileMenuToggle}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Breadcrumb — shows where you are in the app */}
      <div className="flex items-center gap-1 text-sm text-zinc-500">
        <span>Home</span>
        {breadcrumb.map((crumb) => (
          <span key={crumb} className="flex items-center gap-1">
            <span>/</span>
            <span className="font-medium text-zinc-900">{crumb}</span>
          </span>
        ))}
      </div>

      {/* Right side — search + user avatar */}
      <div className="ml-auto flex items-center gap-4">
        {/* Search placeholder — will be functional later */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            placeholder="Search..."
            className="h-9 w-64 rounded-lg border bg-zinc-50 pl-9 pr-4 text-sm outline-none focus:border-zinc-400"
          />
        </div>

        {/* User dropdown — will use real session data after Day 10 (Auth) */}
        {/* DropdownMenu is a "compound component" pattern from Radix UI */}
        {/* It's made of Trigger (what you click) + Content (what appears) */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-9 w-9 rounded-full">
              <Avatar className="h-9 w-9">
                <AvatarFallback className="bg-zinc-200 text-sm font-medium">
                  AU
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <div className="px-2 py-1.5">
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-zinc-500">admin@example.com</p>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            {/* signOut() from NextAuth will go here on Day 10 */}
            <DropdownMenuItem className="text-red-600">
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
