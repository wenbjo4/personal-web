'use client'
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ProjectCard({ project }) {
  const { t } = useTranslation('project_card');

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform">
      <div className="relative h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className={`px-2 py-1 rounded text-sm ${tag.color} ${tag.bgColor}`}
            >
              {tag.name}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition-colors"
          >
            {t('viewDemo')}
          </a>
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-600 transition-colors"
          >
            {t('viewCode')}
          </a>
        </div>
      </div>
    </div>
  );
} 