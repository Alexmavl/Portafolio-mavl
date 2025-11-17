import type { FC } from "react";
import { motion } from "framer-motion";
import { useState } from "react";

// Iconos SVG personalizados
const CodeIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const DatabaseIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
    <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
    <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
  </svg>
);

const TasksIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const Projects: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const proyectos = [
    {
      id: "porta-tareas",
      titulo: "Portafolio Tareas",
      subtitulo: "TypeScript - Tareas",
      descripcion: `Recopilación de tareas de la Clase Desarrollo Web.`,
      tecnologias: ["React", "TypeScript", "Tailwindcss"],
      icono: <CodeIcon />,
      imagen: "/proyectos/PortaTareas.png",
      color: "from-purple-500 to-pink-500",
      github: "https://github.com/Alexmavl/Portafolio-Tareas",
      deploy: "https://portafolio-tareas.vercel.app/" // Cambia esta URL por la real
    },

    {
      id: "Certificado",
      titulo: "Certificacion",
      subtitulo: "Librerias - Certificado",
      descripcion: `Front End Development Libraries V8.`,
      tecnologias: ["React", "Boostrap", "Tailwindcss"],
      icono: <CodeIcon />,
      imagen: "/proyectos/certificado.png",
      color: "from-purple-500 to-pink-500",
      deploy: "https://www.freecodecamp.org/certification/fcc1525a113-3029-4454-8a49-2a565f398337/front-end-development-libraries" // Cambia esta URL por la real
    },

    {
      id: "poke-api",
      titulo: "API Pokemón",
      subtitulo: "C# - Consumo de API",
      descripcion: `Aplicación que consume la API de Pokemón para mostrar información detallada de diferentes pokemones con interfaz moderna y responsiva.`,
      tecnologias: ["React", "TypeScript", "Tailwindcss"],
      icono: <CodeIcon />,
      imagen: "/proyectos/poke-api.png",
      color: "from-purple-500 to-pink-500",
      github: "https://github.com/Alexmavl/poke-api"
    },
    {
      id: "metodos-numericos",
      titulo: "Métodos Numéricos",
      subtitulo: "C# - Equipo de desarrollo",
      descripcion: `Resuelve métodos como Newton-Raphson, Secante, Müller y Gauss Jordan. Inicio de sesión con contraseñas encriptadas y menús interactivos.`,
      tecnologias: ["C#", "Encriptación", "UI/UX"],
      icono: <CodeIcon />,
      imagen: "/proyectos/metodos-numericos.png",
      color: "from-purple-500 to-pink-500",
      github: "https://github.com/Alexmavl/Proyecto-de-M-todos-Numericos-"
    },
    {
      id: "sistema-juridico",
      titulo: "Sistema Jurídico",
      subtitulo: "MVC - .NET Framework",
      descripcion: `Aplicación MVC para gestionar clientes y casos legales. CRUD completo con base de datos en SQL Server y panel administrativo.`,
      tecnologias: ["C#", ".NET MVC", "SQL Server"],
      icono: <DatabaseIcon />,
      imagen: "/proyectos/sistema-juridico.png",
      color: "from-blue-500 to-cyan-500",
      github: "https://github.com/Alexmavl/SistemaGabinete"
    },
    {
      id: "gestor-tareas",
      titulo: "Gestor de Tareas",
      subtitulo: ".NET Core 9 - Kanban",
      descripcion: `Tablero Kanban para organizar tareas, arrastrarlas entre estados y asignarlas a diferentes usuarios. Gestión completa de usuarios y proyectos.`,
      tecnologias: [".NET Core 9", "SQL Server", "Kanban"],
      icono: <TasksIcon />,
      imagen: "/proyectos/gestor-tareas.png",
      color: "from-green-500 to-teal-500",
      github: "https://github.com/Alexmavl/APITareas"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % proyectos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + proyectos.length) % proyectos.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-slide desactivado - Solo navegación manual
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % proyectos.length);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [proyectos.length]);

  return (
    <section id="proyectos" className="py-12 sm:py-16 md:py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-3xl ring-1 ring-cyan-300/30 shadow-[0_0_40px_5px_rgba(99,102,241,0.2)] p-6 sm:p-8 md:p-10"
          style={{ perspective: '2000px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-center text-white mb-6 sm:mb-8 md:mb-10"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Portafolio de Proyectos
          </motion.h2>

          {/* Carrusel Container */}
          <div className="relative h-[580px] md:h-[520px] flex items-center justify-center perspective-1000">
            {/* Proyectos Slider - STACK EFFECT */}
            <div className="relative w-full max-w-4xl h-full">
              {proyectos.map((proyecto) => {
                const index = proyectos.findIndex(p => p.id === proyecto.id);
                const offset = index - currentIndex;
                const isActive = index === currentIndex;
                const absOffset = Math.abs(offset);

                return (
                  <motion.div
                    key={proyecto.id}
                    className="absolute inset-0 w-full"
                    initial={false}
                    animate={{
                      x: `${offset * 80}px`,
                      scale: isActive ? 1 : Math.max(0.75, 1 - absOffset * 0.1),
                      opacity: absOffset > 1 ? 0 : 1,
                      zIndex: proyectos.length - absOffset,
                      rotateY: offset * 8,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                    style={{
                      pointerEvents: isActive ? 'auto' : 'none',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <div
                      className="group relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-800/95 to-slate-900/95 border border-white/20 backdrop-blur-md hover:shadow-cyan-500/50 transition-all duration-500 mx-auto h-full flex flex-col max-w-3xl"
                      style={{
                        filter: !isActive ? 'brightness(0.5) blur(2px)' : 'brightness(1)',
                        transition: 'filter 0.5s ease',
                      }}
                    >
                      {/* Imagen del proyecto */}
                      <div className="relative overflow-hidden w-full bg-slate-900/50 flex items-center justify-center" style={{ height: '280px' }}>
                        <img
                          key={`${proyecto.id}-img`}
                          src={proyecto.imagen}
                          alt={proyecto.titulo}
                          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />

                        <div className={`absolute inset-0 bg-gradient-to-br ${proyecto.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

                        {/* Badge de tecnología */}
                        <div className="absolute top-4 left-4">
                          <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white">
                            <span className="text-cyan-400">{proyecto.icono}</span>
                            {proyecto.tecnologias[0]}
                          </div>
                        </div>
                      </div>

                      {/* Contenido del proyecto */}
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
                            {proyecto.tecnologias.map((tech, techIndex) => (
                              <span
                                key={`${proyecto.id}-tech-${techIndex}`}
                                className="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white text-xs rounded-full border border-white/20 transition-colors duration-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Botones de acción */}
                        <div className="flex flex-wrap gap-3 mt-auto pt-3">
                          <a
                            href={proyecto.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium group/btn text-sm"
                            title="Ver código en GitHub"
                          >
                            <GitHubIcon />
                            <span>Ver Código</span>
                            <svg className="w-3 h-3 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                          
                          {proyecto.deploy && (
                            <a
                              href={proyecto.deploy}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium group/btn text-sm"
                              title="Ver proyecto en vivo"
                            >
                              <ExternalLinkIcon />
                              <span>Ver Demo</span>
                              <svg className="w-3 h-3 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-400/50 transition-colors duration-500 pointer-events-none" />
                    </div>
                  </motion.div>
                );
              })}
          </div>

            {/* Controles de navegación */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 z-50"
            >
              <ChevronLeftIcon />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 z-50"
            >
              <ChevronRightIcon />
            </button>
          </div>

          {/* Indicadores de puntos */}
          <div className="flex justify-center space-x-3 mt-8">
            {proyectos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-cyan-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Información adicional */}
          <motion.div
            className="text-center mt-8 sm:mt-10 md:mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
          
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;