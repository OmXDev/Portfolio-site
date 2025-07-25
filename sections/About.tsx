'use client';

import { Card } from "@/components/Card"
import { SectionHeader } from "@/components/SectionHeader"
import { JavaScriptIcon, HTML5Icon, ReactIcon, CSSIcon, MongoDBIcon, GithubIcon, NextIcon, ExpressIcon, TypeScriptIcon, ReduxIcon, TailwindIcon } from "@/components/icons/ToolboxIcons"
import { CardHeader } from "@/components/CardHeader"
import { ToolboxItems } from "@/components/ToolboxItems"
import {motion} from 'framer-motion'
import { useRef } from "react";

const toolboxItems = [
    {
        title: 'JavaScript',
        icon: JavaScriptIcon,
    },
    {
        title: 'HTML5',
        icon: HTML5Icon,
    },
    {
        title: 'CSS',
        icon: CSSIcon,
    },
    {
        title: 'React',
        icon: ReactIcon,
    },
    {
        title: 'MongoDB',
        icon: MongoDBIcon,
    },
    {
        title: 'Github',
        icon: GithubIcon,
    },
    {
        title: 'Next',
        icon: NextIcon,
    },
    {
        title: 'Express',
        icon: ExpressIcon,
    },
    {
        title: 'TypeScript',
        icon: TypeScriptIcon,
    },
    {
        title: 'Redux',
        icon: ReduxIcon,
    },
    {
        title: 'Tailwind CSS',
        icon: TailwindIcon,
    },

]

const hobbies = [
    {
        title: 'Painting',
        emoji: '🎨',
        left: '5%',
        top: '5%',
    },
    {
        title: 'Photography',
        emoji: '📷',
        left: '50%',
        top: '5%'
    },
    {
        title: 'Music',
        emoji: '🎵',
        left: '10%',
        top: '35%',
    },
    {
        title: 'Reading',
        emoji: '📚',
        left: '35%',
        top: '40%',
    },
    {
        title: 'Fitness',
        emoji: '🏋️‍♂️',
        left: '70%',
        top: '40%',
    },
    {
        title: 'Gaming',
        emoji: '🎮',
        left: '5%',
        top: '70%',
    },
    {
        title: 'Cricket',
        emoji: '🏏',
        left: '45%',
        top: '70%',
    }
];


export const AboutSection = () => {

    const constraintRef = useRef(null);

    return (
        <div id="about" className="py-20">
            <div className="container max-w-5xl mx-auto px-4">
                <SectionHeader eyebrow="About Me"
                    title="A Glimpse into My World"
                    description="Learn more about I am, what I do, and what inspires me."
                />
                <div className="mt-20 flex flex-col gap-8 px-4">
                    <Card className="h-[320px] md:col-span-3">
                        <CardHeader
                            title="My Toolbox"
                            description="Explore the technologies and tools I use to craft exceptionals digital experiences"
                            className="px-6 pt-6 "
                        />
                        <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left animation-duration-[30s]" />
                        <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right animation-duration-[30s]"/>
                        <div>
                        </div>
                    </Card>
                    <Card className="h-[320px] p-0 flex flex-col ">
                        <CardHeader
                            title="Beyond the Code"
                            description="Explore my interests and hobbies beyond the code"
                            className=" px-6 pt-6 "
                        />
                        <div className="relative flex-1" ref={constraintRef}>
                            {hobbies.map(hobby => (
                                <motion.div
                                    key={hobby.title}
                                    className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-5 lg:px-6 py-1.5 md:py-2 lg:py-2
                                     bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full absolute"
                                     style={{
                                        left: hobby.left,
                                        top: hobby.top,
                                    }}
                                    drag
                                    dragConstraints={constraintRef}
                                >
                                    <span className="text-sm md:text-base lg:text-base font-medium text-gray-950">{hobby.title}</span>
                                    <span className="text-lg md:text-xl lg:text-xl">{hobby.emoji}</span>
                                </motion.div>
                            ))}

                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}