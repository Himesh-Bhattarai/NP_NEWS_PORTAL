"use client"

import { useState } from "react"
import Link from "next/link"
import { Home, User, FileCheck, LogOut, Menu, X } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function UserSidebar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    const closeSidebar = () => {
        setIsOpen(false)
    }

    const handleLogout = () => {
        // Handle logout logic here
        alert("Logging out...")
        closeSidebar()
    }

    return (
        <>
            {/* Hamburger Menu Button */}
            <Button variant="ghost" size="sm" onClick={toggleSidebar} className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
            </Button>

            {/* Overlay */}
            {isOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={closeSidebar} />}

            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 w-[280px] bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src="/placeholder.svg" alt="John Doe" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                            <h3 className="font-medium">John Doe</h3>
                            <p className="text-sm text-gray-500">Senior Reporter</p>
                        </div>
                    </div>
                    <Button variant="ghost" size="sm" onClick={closeSidebar}>
                        <X className="h-5 w-5" />
                    </Button>
                </div>

                <div className="py-4">
                    <nav className="space-y-1">
                        <Link
                            href="/dashboard"
                            onClick={closeSidebar}
                            className="flex items-center px-4 py-3 text-sm hover:bg-gray-100"
                        >
                            <Home className="mr-3 h-5 w-5" />
                            Dashboard
                        </Link>
                        <Link
                            href="/edit-profile"
                            onClick={closeSidebar}
                            className="flex items-center px-4 py-3 text-sm hover:bg-gray-100"
                        >
                            <User className="mr-3 h-5 w-5" />
                            Edit Profile
                        </Link>
                        <Link
                            href="/edit-kyc"
                            onClick={closeSidebar}
                            className="flex items-center px-4 py-3 text-sm hover:bg-gray-100"
                        >
                            <FileCheck className="mr-3 h-5 w-5" />
                            Edit KYC
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="flex items-center w-full px-4 py-3 text-sm text-red-500 hover:bg-red-50"
                        >
                            <LogOut className="mr-3 h-5 w-5" />
                            Logout
                        </button>
                    </nav>
                </div>
            </div>
        </>
    )
}
