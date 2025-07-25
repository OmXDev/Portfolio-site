"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { Mail, Phone, Linkedin, Github, Calendar, X, ArrowUpRightIcon } from "lucide-react"
import userLaptop from "@/public/assests/images/user-laptop.png"
import Image from "next/image"

interface ContactMeModalProps {
  onClose: () => void
}

export default function ContactMeModal({ onClose }: ContactMeModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscapeKey)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscapeKey)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-lg animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
        
      <div
        ref={modalRef}
        className="relative w-full max-w-md mx-4 p-8 bg-white/80 dark:bg-gray-800/80 rounded-3xl shadow-3xl border border-gray-200/50 dark:border-gray-700/50 animate-in zoom-in-95 slide-in-from-bottom-2 duration-300 ease-out backdrop-blur-md"
      >
        <div className="">
            <Image src={userLaptop} className="size-[100px]" alt="Person peeking from behing laptop" />
        </div>

        <h2
          id="contact-modal-title"
          className="text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-8 text-center tracking-tight"
        >
          Get In Touch
        </h2>
        <div className="space-y-4 text-center">
          <ContactOption
  icon={<Mail className="h-6 w-6" />}
  label="Email"
  href="https://mail.google.com/mail/?view=cm&fs=1&to=omgupta.tech@gmail.com&su=Regarding%20Full-Stack%20Internship&body=Hi%20Om,%0A%0AWe%20recently%20came%20across%20your%20full-stack%20project%20and%20were%20very%20impressed%20by%20the%20quality%20and%20technical%20depth.%0A%0AWe'd%20love%20to%20connect%20and%20discuss%20the%20possibility%20of%20an%20internship%20opportunity%20with%20our%20team.%0A%0APlease%20let%20us%20know%20a%20convenient%20time%20for%20a%20brief%20conversation.%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ABest%20regards,%0A[Your%20Name]"
  target="_blank"
  rel="noopener noreferrer"
/>

          <ContactOption
            icon={<Phone className="h-6 w-6" />}
            label="Phone"
            href="tel:+1234567890"
          />
          <ContactOption
            icon={<Linkedin className="h-6 w-6" />}
            label="LinkedIn"
            href="https://www.linkedin.com/in/yourprofile"
            external
          />
          <ContactOption
            icon={<Github className="h-6 w-6" />}
            label="GitHub"
            href="https://github.com/yourprofile"
            external
          />

          <button
            onClick={() => window.open("https://calendly.com/omgupta-tech/30min", "_blank")}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98]"
            aria-label="Schedule a call"
          >
            <Calendar className="h-6 w-6" />
            Schedule a Call
          </button>
        </div>

        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100/50 dark:hover:bg-gray-700/50"
          aria-label="Close contact modal"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}

interface ContactOptionProps {
  icon: React.ReactNode
  label: string
  href: string
  external?: boolean
  target?: string;
  rel?: string;
}

function ContactOption({ icon, label,  href, external}: ContactOptionProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-4 p-4 rounded-xl bg-white/70 dark:bg-gray-700/70 shadow-md hover:shadow-lg border border-gray-100/50 dark:border-gray-600/50 transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-[1.01] backdrop-blur-sm"
      aria-label={`${label}`}
    >
      <div className="text-blue-600 dark:text-blue-400 flex-shrink-0">{icon}</div>
      <div className="inline-flex items-start text-left gap-3">
        <span className="text-xl font-medium text-gray-700 dark:text-gray-200">{label}</span>
        <ArrowUpRightIcon/>
        {/* <span className="text-lg font-semibold text-gray-900 dark:text-gray-50 hover:underline">{value}</span> */}
      </div>
    </a>
  )
}
