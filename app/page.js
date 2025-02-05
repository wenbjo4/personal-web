import Image from "next/image";
import ProjectCard from '../components/ProjectCard';

const featuredProjects = [
  {
    image: "/images/unity-game.jpg",
    title: "3D Adventure Game",
    description: "A 3D adventure game built with Unity featuring dynamic combat and puzzle elements",
    tags: [
      { name: "Unity", color: "text-purple-600", bgColor: "bg-purple-100" },
      { name: "C#", color: "text-blue-600", bgColor: "bg-blue-100" }
    ],
    demoLink: "https://github.com/wenbjo4",
    codeLink: "https://github.com/wenbjo4",
    demoText: "Play Demo",
    codeText: "View Code"
  },
  {
    image: "/images/web-app.jpg",
    title: "Personal Portfolio",
    description: "A modern portfolio website built with Next.js and Tailwind CSS, featuring responsive design and dark mode",
    tags: [
      { name: "Next.js", color: "text-black", bgColor: "bg-gray-100" },
      { name: "Tailwind", color: "text-sky-600", bgColor: "bg-sky-100" }
    ],
    demoLink: "https://github.com/wenbjo4",
    codeLink: "https://github.com/wenbjo4",
    demoText: "Visit Site",
    codeText: "GitHub"
  },
  {
    image: "/images/ai-project.jpg",
    title: "AI Chat Assistant",
    description: "An AI-powered chat application using OpenAI's GPT model, supporting multiple languages and creative writing",
    tags: [
      { name: "OpenAI", color: "text-green-600", bgColor: "bg-green-100" },
      { name: "React", color: "text-blue-600", bgColor: "bg-blue-100" }
    ],
    demoLink: "https://github.com/wenbjo4",
    codeLink: "https://github.com/wenbjo4",
    demoText: "Try Demo",
    codeText: "Source"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      
      <header className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-20 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="relative w-48 h-48 overflow-hidden flex-shrink-0">
              <img
                src="https://picsum.photos/400/400"
                alt="Profile Picture"
                style={{width: '100%', height: '100%', objectFit: 'cover'}}
                className="object-cover"
              />
            </div>
            <div className="flex-grow">
              <h1 className="text-4xl font-bold mb-2">鄭學謙</h1>
              <p className="text-xl mb-4">Computer Science Student</p>
              
              <div className="mb-4">
                <h2 className="text-2xl font-semibold mb-2">Education</h2>
                <ul className="space-y-2">
                  <li>台灣科技大學資工系 - National Taiwan University of Science and Technology (2020-Present)</li>
                  <li>大安高級工業職業學校資訊系 - Da-An Vocational High School (2017-2020)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-2">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded">C</span>
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded">C++</span>
                  <span className="px-3 py-1 bg-red-100 text-red-600 rounded">Python</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded">Unity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="w-full max-w-5xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
      >
        <svg
          className="w-5 h-5 fill-current group-hover:text-white transition-colors"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        Visit My GitHub
      </a>
      
      <footer className="mt-16 py-8 bg-gray-100 w-full">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
            <p className="text-gray-600 mb-6">Feel free to reach out through any of these channels</p>
            
            <div className="flex justify-center gap-6">
              <a 
                href="mailto:your.email@example.com"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                your.email@example.com
              </a>

              <a 
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>

              <a 
                href="tel:+886912345678"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +886 912-345-678
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
