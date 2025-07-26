// components/ResumeDownloadButton.tsx
"use client"
import { Download } from "lucide-react"

export default function ResumeDownloadButton() {
  return (
    <a
      href="/Om_Gupta_Resume.pdf"
      download
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-16 right-2.5 md:top-6 md:right-6 z-50 bg-white text-gray-950 px-4 py-2 rounded-full shadow-md border border-white/20 hover:shadow-xl hover:from-emerald-500 hover:to-sky-500 transition-all duration-200 flex items-center gap-2 backdrop-blur-sm"
    >
      <Download className="w-4 h-4" />
      <span className="text-sm font-semibold"> Resume</span>
    </a>
  )
}
