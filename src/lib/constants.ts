import { LucideIcon ,LayoutDashboard, Settings2,Users,Wallet} from "lucide-react"


type Item = {
    label:string,
    href:string,
    icon:LucideIcon
}


export const navItems:Item[]=[
    {label:"Dashboard",href:"/dashboard",icon:LayoutDashboard},
    {label:"Settings",href:"/settings",icon:Settings2},
    {label:"Users",href:"/users",icon:Users},
    {label:"Subscriptions",href:"/subscriptions",icon:Wallet}
]