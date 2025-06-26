import type { FC } from "react";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, } from "react-icons/fa";

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
    <section id="proyectos" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">Proyectos</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {proyectos.map((proyecto, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 rounded-xl shadow-md p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 text-indigo-600 text-2xl mb-3">
                {proyecto.icono}
                <h3 className="text-xl font-semibold">{proyecto.titulo}</h3>
              </div>
              <p className="text-gray-700">{proyecto.descripcion}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
