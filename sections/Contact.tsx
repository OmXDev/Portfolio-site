import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import GrainImage from '@/public/assests/images/grain.jpg'

export const ContactSection = () => {
    return (
        <div className="py-16 pt-14 lg:py-24 lg:pt-20">
            <div className="container max-w-5xl mx-auto px-4">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl
                 text-center md:text-left relative overflow-hidden z-20">
                    <div className='absolute inset-0 opacity-5 -z-10'
                        style={{
                            backgroundImage: `url(${GrainImage.src})`,
                        }} ></div>
                    <div className="flex flex-col md:flex-row gap-8 items-center md:gap-1">
                        <div className="">
                            <h2 className="font-serif text-2xl md:text-4xl">
                                Let's build and learn together
                            </h2>
                            <p className="text-sm md:text-xl mt-2">
                                I'm looking for an opportunity to grow as a developer while contributing to real-world projects. If you're looking for a motivated intern eager to learn and add value, let’s connect!
                            </p>
                        </div>
                        
                        <div >
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=omgupta.tech@gmail.com&su=Regarding%20Full-Stack%20Internship&body=Hi%20Om,%0D%0A%0D%0AWe%20recently%20came%20across%20your%20full-stack%20project%20and%20were%20very%20impressed%20by%20the%20quality%20and%20technical%20depth.%0D%0A%0D%0AWe'd%20love%20to%20connect%20and%20discuss%20the%20possibility%20of%20an%20internship%20opportunity%20with%20our%20team.%0D%0A%0D%0APlease%20let%20us%20know%20a%20convenient%20time%20for%20a%20brief%20conversation.%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer pointer-events-auto relative text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:scale-110 transition-transform duration-200 ">
                                <span className="font-semibold">Contact Me</span>
                                <ArrowUpRightIcon className="size-4" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}