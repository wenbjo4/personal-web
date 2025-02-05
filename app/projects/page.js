import Navigation from '../../components/Navigation';
import ProjectCard from '../../components/ProjectCard';

const projects = [
  {
    image: "/images/unity-game.jpg",
    title: "3D Adventure Game",
    description: "A 3D adventure game built with Unity featuring dynamic combat and puzzle elements",
    tags: [
      { name: "Unity", color: "text-purple-600", bgColor: "bg-purple-100" },
      { name: "C#", color: "text-blue-600", bgColor: "bg-blue-100" }
    ],
    demoLink: "#",
    codeLink: "#"
  },
  {
    image: "/images/web-app.jpg",
    title: "Task Management System",
    description: "A full-stack web application for managing tasks and projects with real-time updates",
    tags: [
      { name: "React", color: "text-green-600", bgColor: "bg-green-100" },
      { name: "Node.js", color: "text-yellow-600", bgColor: "bg-yellow-100" }
    ],
    demoLink: "#",
    codeLink: "#",
    demoText: "Live Demo",
    codeText: "GitHub"
  },
  {
    image: "/images/mobile-app.jpg",
    title: "Fitness Tracker App",
    description: "A cross-platform mobile app for tracking workouts and monitoring fitness progress",
    tags: [
      { name: "Flutter", color: "text-orange-600", bgColor: "bg-orange-100" },
      { name: "Firebase", color: "text-blue-600", bgColor: "bg-blue-100" }
    ],
    demoLink: "#",
    codeLink: "#",
    demoText: "App Store",
    codeText: "Source Code"
  },
  {
    image: "/images/ai-project.jpg",
    title: "Image Recognition AI",
    description: "An AI model that can recognize and classify objects in images with high accuracy",
    tags: [
      { name: "Python", color: "text-red-600", bgColor: "bg-red-100" },
      { name: "TensorFlow", color: "text-green-600", bgColor: "bg-green-100" }
    ],
    demoLink: "#",
    codeLink: "#",
    codeText: "Repository"
  },
  {
    image: "/images/embedded.jpg",
    title: "Smart Home System",
    description: "An IoT-based smart home system for automated control of lights, temperature, and security",
    tags: [
      { name: "C++", color: "text-gray-600", bgColor: "bg-gray-100" },
      { name: "Arduino", color: "text-purple-600", bgColor: "bg-purple-100" }
    ],
    demoLink: "#",
    codeLink: "#",
    demoText: "Documentation",
    codeText: "Code"
  },
  {
    image: "/images/game-2d.jpg",
    title: "2D Platform Game",
    description: "A browser-based 2D platform game with multiple levels and power-ups",
    tags: [
      { name: "JavaScript", color: "text-yellow-600", bgColor: "bg-yellow-100" },
      { name: "Phaser.js", color: "text-blue-600", bgColor: "bg-blue-100" }
    ],
    demoLink: "#",
    codeLink: "#",
    demoText: "Play Game",
    codeText: "Source"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 py-12">
      <Navigation />

      <main className="container mx-auto px-4 pt-24">
        <h1 className="text-3xl font-bold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>

      <footer className="mt-16 py-8 bg-gray-100 w-full" id="contact">
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
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
