import type { FC } from "react";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaTasks, FaExternalLinkAlt } from "react-icons/fa";

const Projects: FC = () => {
  const proyectos = [
    {
      titulo: "Métodos Numéricos",
      subtitulo: "C# - Equipo de desarrollo",
      descripcion: `Resuelve métodos como Newton-Raphson, Secante, Müller y Gauss Jordan. Inicio de sesión con contraseñas encriptadas y menús interactivos.`,
      tecnologias: ["C#", "Encriptación", "UI/UX"],
      icono: <FaCode />,
      imagen: "/proyectos/metodos-numericos.png",
      color: "from-purple-500 to-pink-500"
    },
    {
      titulo: "Sistema Jurídico",
      subtitulo: "MVC - .NET Framework",
      descripcion: `Aplicación MVC para gestionar clientes y casos legales. CRUD completo con base de datos en SQL Server.`,
      tecnologias: ["C#", ".NET MVC", "SQL Server"],
      icono: <FaDatabase />,
      imagen: "/proyectos/sistema-juridico.png",
      color: "from-blue-500 to-cyan-500"
    },
    {
      titulo: "Gestor de Tareas",
      subtitulo: ".NET Core 9 - Kanban",
      descripcion: `Tablero Kanban para organizar tareas, arrastrarlas entre estados y asignarlas a diferentes usuarios. Gestión completa de usuarios.`,
      tecnologias: [".NET Core 9", "SQL Server", "Kanban"],
      icono: <FaTasks />,
      imagen: "/proyectos/gestor-tareas.png",
      color: "from-green-500 to-teal-500"
    },
  ];

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

          {/* Grid Catálogo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {proyectos.map((proyecto, index) => (
              <motion.div
                key={index}
                className="group relative rounded-2xl overflow-hidden shadow-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100 
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >

                <div className="relative overflow-hidden">
                  <motion.img
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    className="w-full h-40 sm:h-48 md:h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
         
                  <div className={`absolute inset-0 bg-gradient-to-br ${proyecto.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  {/* Badge de Tecnología Principal */}
                  <div className="absolute top-3 left-3">
                    <motion.div 
                      className="flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-medium text-white"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-cyan-400">{proyecto.icono}</span>
                      {proyecto.tecnologias[0]}
                    </motion.div>
                  </div>

                 
                  <motion.div 
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button className="bg-cyan-500 hover:bg-cyan-400 text-white p-2 rounded-full shadow-lg transition-colors duration-300">
                      <FaExternalLinkAlt className="w-3 h-3" />
                    </button>
                  </motion.div>
                </div>

                <div className="p-4 sm:p-5 md:p-6">
 
                  <div className="mb-3">
                    <motion.h3 
                      className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      {proyecto.titulo}
                    </motion.h3>
                    <p className="text-cyan-400 text-xs sm:text-sm font-medium">
                      {proyecto.subtitulo}
                    </p>
                  </div>
                  
               
                  <motion.p 
                    className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {proyecto.descripcion}
                  </motion.p>
                  
                  {/* Stack Tecnológico */}
                  <motion.div 
                    className="flex flex-wrap gap-1.5 sm:gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    {proyecto.tecnologias.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white text-xs rounded-full border border-white/20 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 0.5 + (techIndex * 0.1) 
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                {/* Efecto de Borde Animado */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-400/50 transition-colors duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
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