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

  // Auto-slide cada 5 segundos
  useState(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <section id="proyectos" className="py-12 sm:py-16 md:py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-3xl ring-1 ring-cyan-300/30 shadow-[0_0_40px_5px_rgba(99,102,241,0.2)] p-6 sm:p-8 md:p-10"
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
          <div className="relative overflow-hidden rounded-2xl">
            {/* Proyectos Slider */}
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {proyectos.map((proyecto, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    className="group relative rounded-2xl overflow-hidden shadow-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 mx-auto max-w-4xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ 
                      opacity: index === currentIndex ? 1 : 0.7,
                      scale: index === currentIndex ? 1 : 0.95
                    }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: index === currentIndex ? 1.02 : 0.95 }}
                  >
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Imagen del proyecto */}
                      <div className="relative overflow-hidden h-64 md:h-80">
                        <motion.img
                          src={proyecto.imagen}
                          alt={proyecto.titulo}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />

                        <div className={`absolute inset-0 bg-gradient-to-br ${proyecto.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

                        {/* Badge de tecnología */}
                        <div className="absolute bottom-4 left-4">
                          <motion.div
                            className="flex items-center gap-2 bg-black/70 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white"
                            whileHover={{ scale: 1.05 }}
                          >
                            <span className="text-cyan-400">{proyecto.icono}</span>
                            {proyecto.tecnologias[0]}
                          </motion.div>
                        </div>
                      </div>

                      {/* Contenido del proyecto */}
                      <div className="p-6 md:p-8 flex flex-col justify-center">
                        <div className="mb-4">
                          <div className="flex items-start justify-between mb-2">
                            <motion.h3
                              className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: 0.2 }}
                            >
                              {proyecto.titulo}
                            </motion.h3>
                            
                            {/* Botón GitHub en el contenido */}
                            <a
                              href={proyecto.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-gray-700 text-white rounded-full shadow-lg transition-all duration-200 ml-4 flex-shrink-0"
                              title="Ver en GitHub"
                            >
                              <GitHubIcon />
                            </a>
                          </div>
                          <p className="text-cyan-400 text-sm md:text-base font-medium">
                            {proyecto.subtitulo}
                          </p>
                        </div>

                        <motion.p
                          className="text-white/90 text-sm md:text-base leading-relaxed mb-6"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          {proyecto.descripcion}
                        </motion.p>

                        <motion.div
                          className="flex flex-wrap gap-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.4 }}
                        >
                          {proyecto.tecnologias.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-sm rounded-full border border-white/20 transition-colors duration-300"
                              whileHover={{ scale: 1.05 }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.3,
                                delay: 0.5 + techIndex * 0.1
                              }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </motion.div>
                      </div>
                    </div>

                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-400/50 transition-colors duration-500 pointer-events-none" />
                  </motion.div>
                </div>
              ))}
            </motion.div>

            {/* Controles de navegación */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 z-40"
            >
              <ChevronLeftIcon />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 z-40"
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
            <p className="text-white/60 text-sm mb-4">
              ¿Interesado en conocer más detalles de algún proyecto?
            </p>
            <motion.button
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Todos los Proyectos
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;