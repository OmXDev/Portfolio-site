import { SingleSparkle } from "@/components/icons/Icon"
import { Fragment } from "react"

const words = [
    "Performant",
    "Accessible",
    "Secure",
    "Responsive",
    "Scalable",
    "Intuitive",
    "Robust",
    "SEO-Friendly",
    "User-Centric",
    "Real-Time",
    "CI/CD Ready"
]

export const TapeSection = () => {
    return (
        <div className="py-16 lg:py-24 overflow-x-clip">
            <div className="bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1">
                <div className="flex [mask-image:linear-gradient(to_right,trasnparent,black_10%,black_90%,transparent)]" >

                    <div className="flex flex-none gap-4 py-3 animate-move-left"
                    style={{ animationDuration: "30s" }}
                     >
                        {[...new Array(2)].fill(0).map((_, idx) => (
                            <Fragment key={idx}>
                                {words.map((word) => (
                                    <div key={word} className="inline-flex gap-4 items-center">
                                        <span className="text-gray-900 uppercase font-extrabold text-sm">
                                            {word}
                                        </span>
                                        <SingleSparkle className="size-4 text-gray-900 -rotate-12" />
                                    </div>
                                ))}
                            </Fragment>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}
