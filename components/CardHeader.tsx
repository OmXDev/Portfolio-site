import Image from "next/image"
import { SingleSparkle } from "./icons/Icon"
import { twMerge } from "tailwind-merge"

export const CardHeader = ({title,description,className}:{
    title:string,
    description:string
    className?:string
})=>{
    return(
        <div className={twMerge("flex flex-col p-6",className)}>
            <div className="inline-flex items-center gap-2">
                <SingleSparkle className="size-9 text-emerald-300"/>
                <h3 className="font-serif text-3xl">{title}</h3>
            </div>
            <p className="text-sm text-white/60 mt-2 lg:text-base md:text-xl ">
                {description}
            </p>
        </div>
    )
}