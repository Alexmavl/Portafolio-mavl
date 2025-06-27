import type { FC } from "react";
import { FaJs, FaCss3Alt, FaHtml5, FaDatabase, FaCode, FaMicrosoft } from "react-icons/fa";
import { SiSharp } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { label: "C#", icon: <SiSharp />, level: "50%" },
  { label: ".NET Framework", icon: <FaMicrosoft />, level: "45%" },
  { label: "JavaScript", icon: <FaJs />, level: "35%" },
  { label: "CSS", icon: <FaCss3Alt />, level: "35%" },
  { label: "HTML5", icon: <FaHtml5 />, level: "40%" },
  { label: "jQuery", icon: <FaCode />, level: "30%" },
  { label: "SQL Server", icon: <FaDatabase />, level: "40%" },
  { label: "MySQL", icon: <SiMysql />, level: "40%" },
];

const About: FC = () => {
  return (
    <section 
      id="sobre-mi" 
      className="bg-gray-100 dark:bg-gray-900 py-16 px-4 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-700 dark:text-accent mb-10">
          Sobre Mí
        </h2>

        <motion.div
          className="grid md:grid-cols-2 gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* HABILIDADES */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-colors duration-300">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Habilidades Técnicas y Áreas de Especialidad
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Soy autodidacta, curioso y enfocado en aprender continuamente. Aprovecho mis fortalezas
              para mejorar cada día y reconozco mis debilidades para superarlas.
            </p>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.label}>
                  <div className="flex items-center gap-2 font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    <span className="text-xl text-accent">{skill.icon}</span> 
                    {skill.label}
                  </div>
                  <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-accent h-3 rounded-full transition-all duration-500 ease-out"
                      style={{ width: skill.level }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FORMACIÓN Y EXPERIENCIA */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-colors duration-300">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Formación y Experiencia
            </h3>

            <h4 className="text-lg font-semibold text-indigo-700 dark:text-accent mb-3">
              Educación
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              🎓 Actualmente cursando Cuarto año de Ingeniería en Sistemas en la Universidad Mariano Gálvez.<br />
              📚 Perito Contador con orientación en Computación – Colegio Miguel Ángel Asturias (2010–2012).
            </p>

            <h4 className="text-lg font-semibold text-indigo-700 dark:text-accent mb-3">
              Experiencia Laboral
            </h4>
            <div className="text-gray-700 dark:text-gray-300 space-y-3">
              <div className="border-l-4 border-accent pl-4">
                <strong className="text-gray-900 dark:text-white">Desarrollador — INGUAT</strong><br />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Desarrollo de software en C#, .NET, JavaScript, CSS y SQL Server.
                </span>
              </div>
              <div className="border-l-4 border-gray-400 dark:border-gray-600 pl-4">
                <strong className="text-gray-900 dark:text-white">Sub Gerente — Construmart San José S.A. (2015–2021)</strong><br />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Gestión de tienda, atención al cliente, inventario y supervisión de personal.
                </span>
              </div>
              <div className="border-l-4 border-gray-400 dark:border-gray-600 pl-4">
                <strong className="text-gray-900 dark:text-white">Aux. Recursos Humanos — Ingenio Magdalena (2014–2015)</strong><br />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Gestión de personal, contratos, expedientes y control de cuadrillas.
                </span>
              </div>
              <div className="border-l-4 border-gray-400 dark:border-gray-600 pl-4">
                <strong className="text-gray-900 dark:text-white">Asesor de Ventas — Soporte de Marca S.A. (2013–2014)</strong><br />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Asesoría en construcción, gestión de créditos y alianzas comerciales.
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;