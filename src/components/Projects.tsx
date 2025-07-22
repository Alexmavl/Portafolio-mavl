import type { FC } from "react";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaTasks } from "react-icons/fa";

const Projects: FC = () => {
  const proyectos = [
    {
      titulo: "Proyecto No. 1 – Métodos Numéricos",
      descripcion: `Desarrollado en C# en equipo. Resuelve métodos como Newton-Raphson,
      Secante, Müller y Gauss Jordan. Inicio de sesión con contraseñas encriptadas y menús interactivos.`,
      icono: <FaCode />,
      imagen: "/proyectos/metodos-numericos.png",
    },
    {
      titulo: "Proyecto No. 2 – Sistema Jurídico (MVC)",
      descripcion: `Aplicación MVC en C# con .NET Framework para gestionar clientes y casos legales.
      CRUD completo con base de datos en SQL Server.`,
      icono: <FaDatabase />,
      imagen: "/proyectos/sistema-juridico.png",
    },
    {
      titulo: "Proyecto No. 3 – Gestor de Tareas (Kanban)",
      descripcion: `Sistema desarrollado en .NET Core 9 con SQL Server. Implementa un tablero Kanban para organizar tareas,
      arrastrarlas entre estados y asignarlas a diferentes usuarios. Gestiona usuarios y funcionalidades completas de asignación.`,
      icono: <FaTasks />,
      imagen: "/proyectos/gestor-tareas.png",
    },
  ];

  return (
    <section id="proyectos" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-3xl ring-1 ring-cyan-300/30 shadow-[0_0_40px_5px_rgba(99,102,241,0.2)] p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h2
            className="text-3xl font-bold text-center text-cyan-300 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Proyectos
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {proyectos.map((proyecto, index) => (
              <motion.div
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg bg-white/5 border border-white/10 backdrop-blur-sm hover:shadow-xl transition duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    className="w-full h-48 object-cover rounded-t-2xl"
                  />
                  {/* Glow overlay en hover */}
                  <div className="absolute inset-0 rounded-t-2xl bg-indigo-400/10 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none" />
                </motion.div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-cyan-300 text-2xl mb-2">
                    {proyecto.icono}
                    <h3 className="text-lg font-semibold text-white">{proyecto.titulo}</h3>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">{proyecto.descripcion}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
