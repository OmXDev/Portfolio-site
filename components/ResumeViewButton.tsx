// components/ResumeViewButton.tsx
"use client"
import { FileText } from "lucide-react"

export default function ResumeViewButton() {
  return (
    <a
      href="/Om_Gupta_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-16 right-4 md:top-6 md:right-6 z-50 bg-white text-gray-950 px-4 py-2 rounded-full shadow-md border border-white/20 hover:shadow-lg transition-all duration-200 flex items-center gap-2 backdrop-blur-sm"
    >
      <FileText className="w-4 h-4" />
      <span className="text-sm font-semibold">View Resume</span>
    </a>
  )
}
