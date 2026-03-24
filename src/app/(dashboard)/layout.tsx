"use client"

import Sidebar from '@/components/layout/sidebar'
import Navbar from '@/components/layout/navbar'
import MobileSidebar from '@/components/layout/mobile-sidebar'

import { useState } from 'react'


export default function DashboardLayout({children}:{children:React.ReactNode}){

    
    const [mobilesideBarOpen,setMobileSideBarOpen]=useState<boolean>(false)
    
    return (
        <>
        <Sidebar/>
        <MobileSidebar open={mobilesideBarOpen} onOpenChange={setMobileSideBarOpen}/>
        <div className="flex flex-1 flex-col md:ml-60">
            <Navbar onMobileMenuToggle={()=>setMobileSideBarOpen(true)}/>
            <main className="flex-1 p-6">{children}</main>
        </div>
        </>
    )
}

