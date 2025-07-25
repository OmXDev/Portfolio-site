"use client"
import Image from "next/image"
import userLaptop from "@/public/assests/images/user-laptop.png"
import { ArrowDownIcon } from "@heroicons/react/24/outline"
import GrainImage from "@/public/assests/images/grain.jpg"
import { SingleSparkle } from "@/components/icons/Icon"
import { HeroOrbit } from "@/components/HeroOrbit"
import { useState } from "react"
import ContactMeModal from "@/components/Contact-Modal"
import ContactPopup from "@/components/Contact-Popup"

export const HeroSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleScrollToProjects = () => {
        if (typeof window === 'undefined') return; // SSR guard

        const section = document.getElementById('projects');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            console.warn('Could not find #projects');
        }
    };

    return (
        <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
            <div className="absolute inset-8 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70,transparent)]">
                <div
                    className="absolute inset-0 -z-30 opacity-5"
                    style={{
                        backgroundImage: `url(${GrainImage.src})`,
                    }}
                ></div>
                <div className="absolute inset-0 size-[620px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>
                <div className="absolute inset-0 size-[820px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>
                <div className="absolute inset-0 size-[1020px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>
                <div className="absolute inset-0 size-[1220px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>
                <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="6s">
                    <SingleSparkle className="size-24 text-emerald-300" />
                </HeroOrbit>
                <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="4s">
                    <SingleSparkle className="size-10 text-emerald-300" />
                </HeroOrbit>
                <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="34s" shouldSpin spinDuration="3s">
                    <SingleSparkle className="size-5 text-emerald-300" />
                </HeroOrbit>
                <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="3s">
                    <SingleSparkle className="size-5 text-emerald-300/20" />
                </HeroOrbit>
                <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="3s">
                    <SingleSparkle className="size-5 text-emerald-300/20" />
                </HeroOrbit>
                <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="3s">
                    <SingleSparkle className="size-3 text-emerald-300/20" />
                </HeroOrbit>
                <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="42s" shouldSpin spinDuration="4s">
                    <SingleSparkle className="size-12 text-emerald-300/20" />
                </HeroOrbit>
                <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="3s">
                    <SingleSparkle className="size-3 text-emerald-300/20" />
                </HeroOrbit>
                <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="46s" shouldSpin spinDuration="3s">
                    <SingleSparkle className="size-3 text-emerald-300/20" />
                </HeroOrbit>
                <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="3s">
                    <SingleSparkle className="size-3 text-emerald-300/20" />
                </HeroOrbit>
                <HeroOrbit size={860} rotation={-25} shouldOrbit orbitDuration="50s" shouldSpin spinDuration="3s">
                    <SingleSparkle className="size-4 text-emerald-300/20" />
                </HeroOrbit>
                <HeroOrbit size={880} rotation={46} shouldOrbit orbitDuration="52s" shouldSpin spinDuration="3s">
                    <SingleSparkle className="size-8 text-emerald-300/20" />
                </HeroOrbit>

            </div>
            <div className="container">
                <div className="flex flex-col items-center">
                    <Image src={userLaptop} className="size-[100px]" alt="Person peeking from behing laptop" />
                    <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
                        <div className="bg-green-500 size-2.5 rounded-full  relative">
                            <div className="bg-green-500 inset-0 absolute rounded-full animate-ping"></div>
                        </div>
                        <div className=" text-sm font-semibold">
                            Avaialable for Intern Roles
                        </div>
                    </div>
                </div >
                <div className="max-w-xl mx-auto">
                    <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
                        Building Exceptional Full Stack Applications
                    </h1>
                    <p className="mt-4 text-center text-white/60">
                        I specialize in crafting robust full-stack applications using modern technologies like React, Node.js, and MongoDB.
                        Passionate about clean UI, secure APIs, and building features that solve real-world problems.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
                    <button
                        onClick={handleScrollToProjects}
                        className="relative inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl cursor-pointer"
                    >
                        <span className="font-semibold">Explore My Work</span>
                        <ArrowDownIcon className="size-4" />
                    </button>

                    <button onClick={() => setIsModalOpen(true)} className="relative inline-flex items-center gap-2 border border-white text-gray-900 bg-white h-12 px-6 rounded-xl cursor-pointer">
                        <span className="text-2xl">👋 </span>
                        <span className="font-semibold">Let's Connect</span>
                    </button>
                </div>

            </div>
            {isModalOpen && <ContactPopup onClose={() => setIsModalOpen(false)} />}
        </div>
    )
}