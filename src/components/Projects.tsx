import type { FC } from "react";
import { motion } from "framer-motion";
import { FaCode, FaDatabase } from "react-icons/fa";

const Projects: FC = () => {
  const proyectos = [
    {
      titulo: "Proyecto No. 1 – Métodos Numéricos",
      descripcion: `Desarrollado en C# en equipo. Resuelve varios métodos numéricos como Newton-Raphson,
      Secante, Müller y Gauss Jordan. Incluye inicio de sesión con base de datos y contraseñas encriptadas,
      menú principal y submenús interactivos.`,
      icono: <FaCode />,
    },
    {
      titulo: "Proyecto No. 2 – Sistema Jurídico (MVC)",
      descripcion: `Aplicación MVC en C# con .NET Framework para gestionar clientes y asuntos de un gabinete de abogados.
      Implementa CRUD completo con base de datos en SQL Server.`,
      icono: <FaDatabase />,
    },
  ];

  return (
    <section id="proyectos" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-10">
          <h2 className="text-3xl font-bold text-center text-white mb-10">Proyectos</h2>

          <div className="grid md:grid-cols-2 gap-10">
            {proyectos.map((proyecto, index) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 text-indigo-300 text-2xl mb-3">
                  {proyecto.icono}
                  <h3 className="text-lg font-semibold text-white">{proyecto.titulo}</h3>
                </div>
                <p className="text-white/80">{proyecto.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
