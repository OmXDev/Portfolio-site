import FunPlannerImage from '@/public/assests/images/FunPlannerImage.png'
import PortfolioImage from '@/public/assests/images/PortfolioImage.png'
import { ArrowUpRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import GrainImage from '@/public/assests/images/grain.jpg'
import { List, SquareArrowOutUpRight } from 'lucide-react';
import { GithubIcon } from '@/components/icons/ToolboxIcons';
import TestimonialImage from '@/public/assests/images/TestimonialImage.png'
import ListSyncImage from '@/public/assests/images/ListSyncImage.png';

const portfolioProjects = [
  {
    title: "Event Planner Platform",
    results: [
      { title: "Built a full-stack event planning platform where users can manage events, clients, and vendors." },
      { title: "Implemented real-time messaging for team collaboration using Socket.IO." },
      { title: "Developed a task management system to assign and track responsibilities across team members." },
      { title: "Integrated a calendar view to schedule and highlight important events." }
    ],
    link: "https://fun-planner.vercel.app/",
    codeLink: "https://github.com/OmXDev/FunPlanner_v2",
    image: FunPlannerImage,
  },
  {
    title: "Testimonial Platform",
    results: [
      { title: "Simplified testimonial collection via shareable links" },
      { title: "Enabled seamless integration of testimonials into client websites" },
      { title: "Offered customizable testimonial display components" },
      { title: "Improved client credibility through authentic user feedback" },
    ],
    link: "",
    codeLink: "https://github.com/OmXDev/Testimonial",
    image: TestimonialImage,
  },
  {
    title: "Portfolio Website",
    results: [
      { title: "Built with Next.js, React, and Tailwind CSS for performance and scalability" },
      { title: "Designed with smooth page transitions and engaging animations" },
      { title: "Fully responsive and accessible across all screen sizes" },
      { title: "Effectively demonstrates technical skills and personal branding" },
    ],
    link: "portfolio-site-sand-ten.vercel.app",
    codeLink: "https://github.com/OmXDev/Portfolio-site",
    image: PortfolioImage,
  },
  {
    title: "Agent Task Management",
    results: [
    { title: "Secure admin login with JWT authentication" },
    { title: "Streamlined agent creation and management interface" },
    { title: "CSV upload with smart, automated task distribution" },
    { title: "Built with the MERN stack and fully responsive UI" }
  ],
    link: "https://list-sync-topaz.vercel.app",
    codeLink: "https://github.com/OmXDev/ListSync",
    image: ListSyncImage,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className=' pb-16 lg:py-24 '>
      <div className='container max-w-5xl mx-auto px-4'>
        <div className='flex justify-center'>
          <p className='uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400  
          text-center text-transparent bg-clip-text'>
            Real-World Results
          </p>
        </div>
        <h2 className='font-serif text-3xl md:text-5xl text-center mt-6'>
          Featured Projects
        </h2>
        <p className='text-center text-white/60 md:text-lg lg:text-xl mt-4 max-w-md mx-auto'
        >See how I solve Real-world Problems into engaging digital experiences.
        </p>
        <div className='flex flex-col  mt-10 gap-20 md:mt-20 '>
          {portfolioProjects.map((project, projectIndex) => (
            <div key={project.title}
              className="bg-gray-800 rounded-3xl  z-0 overflow-hidden after:-z-10 
               after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-3xl
               after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`
              }}
            >
              <div className='absolute inset-0 -z-10 opacity-5 '
                style={{
                  backgroundImage: `url(${GrainImage.src})`,
                }} ></div>
              <div className='lg:grid lg:grid-cols-2  lg:gap-16 '>
                <div className='lg:pb-16'>
                  <h3 className='font-serif text-2xl mt-2 md:mt-5 md:text-4xl'>{project.title}</h3>
                  <hr className='border-t-2 border-white/10 mt-4 md:mt-5' />
                  <ul className='flex flex-col gap-4 mt-4 md:mt-5'>
                    {project.results?.map((result) => (
                      <li key={result.title} className="flex gap-3 items-start">
                        <div className="shrink-0 pt-1">
                          <CheckCircleIcon className="w-5 h-5 md:w-6 md:h-6 " />
                        </div>
                        <span className="leading-snug text-white/90">{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className='flex flex-col md:flex-row gap-4 mt-8'>
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 cursor-pointer">
                          <span>Live Demo</span>
                          <SquareArrowOutUpRight className="size-4" />
                        </button>
                      </a>
                    ) : (
                      <button
                        className="bg-white/10 text-white/50 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 cursor-not-allowed"
                        disabled
                      >
                        <span>Live Demo (Unavailable)</span>
                      </button>
                    )}
                    {project.codeLink ? (
                      <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                        <button className='bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-4 cursor-pointer'>
                          <span>Code</span>
                          <GithubIcon className='size-5' />
                        </button>
                      </a>
                    ) : (
                      <button
                        className="bg-white/10 text-white/50 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-4 cursor-not-allowed"
                        disabled
                      >
                        <span>Code (Unavailable)</span>
                      </button>
                    )}
                  </div>
                </div>
                <div className='relative'>
                  <Image src={project.image} alt={project.title}
                    className='-mb-4 mt-8 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-xl'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};
