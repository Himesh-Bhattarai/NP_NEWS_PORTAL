"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { CreateContentModal } from "@/components/news/CreateContentModal"

export function AddContentButton() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <Button onClick={() => setIsModalOpen(true)} className="bg-black-500 hover:bg-dark-600 text-white rounded-full">
                <Plus className="mr-2 h-4 w-4" />
               Add New Content
            </Button>
            <CreateContentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}
