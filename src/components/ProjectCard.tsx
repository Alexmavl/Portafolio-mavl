import type { FC } from "react";
import { motion } from "framer-motion";
import { techIcons, GitHubIcon, ExternalLinkIcon } from "./Icons";
import type { Project } from "../data.tsx";

interface ProjectCardProps {
  proyecto: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ proyecto }) => {
  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-800/95 to-slate-900/95 border border-white/20 backdrop-blur-md hover:shadow-cyan-500/50 transition-all duration-500 mx-auto h-full flex flex-col max-w-3xl"
      layout
    >
      <div className="relative overflow-hidden w-full bg-slate-900/50 flex items-center justify-center h-48 sm:h-64 md:h-72">
        <img
          src={proyecto.imagen}
          alt={proyecto.titulo}
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${proyecto.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
        />
        <div className="absolute top-4 left-4">
          <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white">
            <span className="text-cyan-400">{proyecto.icono}</span>
            {proyecto.tecnologias[0]}
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <div className="mb-3">
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 mb-1">
              {proyecto.titulo}
            </h3>
            <p className="text-cyan-400 text-xs md:text-sm font-medium">
              {proyecto.subtitulo}
            </p>
          </div>
          <p className="text-white/90 text-xs md:text-sm leading-relaxed mb-3">
            {proyecto.descripcion}
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            {proyecto.tecnologias.map((tech) => (
              <span
                key={`${proyecto.id}-tech-${tech}`}
                className="flex items-center gap-1.5 px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white text-xs rounded-full border border-white/20 transition-colors duration-300"
              >
                {techIcons[tech] && (
                  <span className="text-sm">{techIcons[tech]}</span>
                )}
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto pt-3">
          {proyecto.github && (
            <a
              href={proyecto.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium group/btn text-sm w-full sm:w-auto"
              title="Ver código en GitHub"
            >
              <GitHubIcon />
              <span>Ver Código</span>
            </a>
          )}
          {proyecto.deploy && (
            <a
              href={proyecto.deploy}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium group/btn text-sm w-full sm:w-auto"
              title="Ver proyecto en vivo"
            >
              <ExternalLinkIcon />
              <span>Ver Demo</span>
            </a>
          )}
        </div>
      </div>
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-400/50 transition-colors duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default ProjectCard;
