"use client"

import ContactMeModal from "@/components/Contact-Modal"
import { div } from "framer-motion/client"
import { useState } from "react"

export const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <div className="fixed  flex justify-center items-center  top-4 w-full z-10">
            <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
                <a href="#" className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300">
                    Home
                </a>
                <a href="#projects" className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300">
                    Projects
                </a>
                <a href="#about" className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300">
                    About
                </a>
                <button onClick={() => setIsModalOpen(true)} className="px-4 py-1.5 rounded-full text-gray-900 bg-white text-sm font-semibold hover:bg-white/70 hover:text-gray-900 transition duration-300 cursor-pointer">
                    Contact
                </button>
            </nav>
            {isModalOpen && <ContactMeModal onClose={() => setIsModalOpen(false)} />}
        </div>
    )
}