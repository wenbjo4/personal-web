'use client';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../../components/ProjectCard';
import { projectData } from '../../data/projects';

export default function Projects() {
  const { t: projectPageT } = useTranslation('project_page');
  const { t: projectT } = useTranslation('project_card');

  const mergedProjects = projectData.map((proj) => {
    const translated = projectT(`projects.${proj.id}`, { returnObjects: true });
    return {
      ...proj,
      title: translated.title,
      description: translated.description,
    };
  });

  const projects = mergedProjects;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 py-12">
      <main className="w-full max-w-5xl px-4">
        <h1 className="text-3xl font-bold mb-8">{projectPageT('title')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
}
