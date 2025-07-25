"use client"

import { useState } from "react"
import { X, Mail, Linkedin, Github, Calendar, MessageCircle, Instagram, PhoneIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ContactMeModalProps {
    onClose: () => void
}

export default function ContactPopup({ onClose }: ContactMeModalProps) {
    const [isOpen, setIsOpen] = useState(false)

    const contactOptions = [
        {
            icon: Mail,
            label: "Email",
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=omgupta.tech@gmail.com&su=Regarding%20Full-Stack%20Internship&body=Hi%20Om,%0A%0AWe%20recently%20came%20across%20your%20full-stack%20project%20and%20were%20very%20impressed%20by%20the%20quality%20and%20technical%20depth.%0A%0AWe'd%20love%20to%20connect%20and%20discuss%20the%20possibility%20of%20an%20internship%20opportunity%20with%20our%20team.%0A%0APlease%20let%20us%20know%20a%20convenient%20time%20for%20a%20brief%20conversation.%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ABest%20regards,%0A[Your%20Name]",
            subtitle: "omgupta.tech@gmail.com",
            color: "text-blue-400",
            bgColor: "bg-blue-500/20",
        },
        {
            icon: MessageCircle,
            label: "WhatsApp",
            href: "https://wa.me/917268823424",
            subtitle: "+91 7268823424",
            color: "text-green-400",
            bgColor: "bg-green-500/20",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/omxdev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            subtitle: "omxdev",
            color: "text-blue-300",
            bgColor: "bg-blue-500/20",
        },
        {
            icon: Github,
            label: "GitHub",
            href: "https://github.com/OmXDev/",
            subtitle: "@OmxDev",
            color: "text-gray-300",
            bgColor: "bg-gray-500/20",
        },
        {
            icon: X, // X (Twitter) icon
            label: "X (Twitter)",
            href: "https://x.com/low_Key_noob?t=Chyfvl5S2X_2FbZlBDSp3A&s=08",
            subtitle: "@low_key_noob",
            color: "text-gray-200",
            bgColor: "bg-gray-600/20",
        },
        {
            icon: MessageCircle, // Discord icon (using MessageCircle as substitute)
            label: "Discord",
            href: "https://discord.com/users/YOUR_USER_ID/1153341426164314123",
            subtitle: "innovatex_07",
            color: "text-indigo-400",
            bgColor: "bg-indigo-500/20",
        },
        {
            icon: Instagram, // Discord icon (using MessageCircle as substitute)
            label: "Instagram",
            href: "https://www.instagram.com/omgupta7632?igsh=MWRjMjExMG5kY2h3NA==",
            subtitle: "@omgupta7632",
            color: "text-pink-400",
            bgColor: "bg-pink-500/20",
        },
        {
            icon: PhoneIcon,
            label: "Call",
            href: "tel:+917268823424",
            subtitle: "+91 7268823424",
            color: "text-blue-400",
            bgColor: "bg-blue-500/20",
        }

    ]

    return (
        <Dialog open onOpenChange={onClose}>

            <DialogContent className="max-w-lg p-0 bg-transparent border-none shadow-none sm:max-w-md">
                <VisuallyHidden>
                    <DialogTitle>Contact Modal</DialogTitle>
                </VisuallyHidden>
                <div className="bg-gray-800/95 backdrop-blur-xl rounded-t-3xl shadow-2xl border-t border-gray-700 animate-in slide-in-from-bottom-full duration-300">
                    {/* Handle Bar */}
                    <div className="flex justify-center pt-3 pb-2">
                        <div className="w-12 h-1 bg-gray-600 rounded-full"></div>
                    </div>

                    {/* Header */}
                    <div className="px-6 pb-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <span className="text-2xl">👋</span>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
                                    <p className="text-gray-300">Choose your preferred method</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Contact Grid - 3 columns for 6 items */}
                    <div className="px-6 pb-6">
                        <div className="grid grid-cols-3 gap-3 mb-6">
                            {contactOptions.map((option, index) => (
                                <a
                                    key={index}
                                    href={option.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-3 rounded-2xl border border-gray-700 hover:border-gray-600 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-200 hover:scale-[1.02] bg-gray-800/50 backdrop-blur-sm"
                                >
                                    <div className="text-center">
                                        <div
                                            className={`w-10 h-10 ${option.bgColor} rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-200`}
                                        >
                                            <option.icon className={`h-5 w-5 ${option.color}`} />
                                        </div>
                                        <h3 className="font-semibold text-white text-xs mb-1">{option.label}</h3>
                                        <p className="text-xs text-gray-400 truncate">{option.subtitle}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Schedule Call - Full Width */}
                        <div className="space-y-3">
                            <Button
                            onClick={() => window.open("https://calendly.com/omgupta-tech/30min", "_blank")}
                             className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]">
                                <Calendar className="h-5 w-5 mr-2" />
                                Schedule a Call
                            </Button>

                            {/* Quick Info */}
                            <div className="bg-gray-700/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-600">
                                <div className="flex items-center justify-center space-x-6 text-sm text-gray-300">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                        <span>Usually responds in 2-4 hours</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Safe Area */}
                    <div className="h-4 bg-gray-800/95 backdrop-blur-xl rounded-b-3xl"></div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
