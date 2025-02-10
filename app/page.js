'use client';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectData } from '../data/projects.js';


export default function Home() {
  const { t: homeT } = useTranslation('home');
  const { t: projectT } = useTranslation('project_card');
  const [currentIndex, setCurrentIndex] = useState(0);

  const mergedProjects = projectData.map((proj) => {
    const translated = projectT(`projects.${proj.id}`, { returnObjects: true });
    return {
      ...proj,
      title: translated.title,
      description: translated.description,
    };
  });

  const projectsPerPage = 3;
  const projects = mergedProjects;
  const getVisibleIndices = () => Array.from({ length: projectsPerPage }, (_, i) => (currentIndex + i) % projects.length);
  const getVisibleProjects = () => getVisibleIndices().map(index => projects[index]);
  const visibleProjects = getVisibleProjects();

  const nextProjects = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProjects = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

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
              <h1 className="text-4xl font-bold mb-2">{homeT('title')}</h1>
              <p className="text-xl mb-4">{homeT('role')}</p>
              
              <div className="mb-4">
                <h2 className="text-2xl font-semibold mb-2">{homeT('education.title')}</h2>
                <ul className="space-y-2">
                  <li>{homeT('education.university')}</li>
                  <li>{homeT('education.highSchool')}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-2">{homeT('skills.title')}</h2>
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

      <section className="w-full max-w-7xl px-4 relative">
        <div className="relative min-h-[400px] py-8">
          <button 
            onClick={prevProjects}
            disabled={projects.length <= projectsPerPage}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-gray-900 text-white p-2 rounded-full transition-colors z-10
              ${projects.length <= projectsPerPage ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}`}
            aria-label="Previous project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="grid grid-cols-3 gap-6 w-full">
            {visibleProjects.length > 0 ? (
              visibleProjects.map((project, index) => (
                <div key={`${currentIndex}-${index}`}>
                  <ProjectCard project={project} />
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center text-gray-500">
                No projects to display
              </div>
            )}
          </div>

          <button 
            onClick={nextProjects}
            disabled={projects.length <= projectsPerPage}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-gray-900 text-white p-2 rounded-full transition-colors z-10
              ${projects.length <= projectsPerPage ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}`}
            aria-label="Next project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {projects.length > projectsPerPage && (
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: projects.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  getVisibleIndices().includes(index)
                    ? 'bg-blue-500 hover:bg-blue-400'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        )}
      </section>

      <a
        href="https://github.com/wenbjo4"
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
    </div>
  );
}
