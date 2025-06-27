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
    <section id="sobre-mi" className="bg-gray-100 py-16 px-4">
<motion.div
  className="grid md:grid-cols-2 gap-10"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>


      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">Sobre Mí</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* HABILIDADES */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Habilidades Técnicas y Áreas de Especialidad
            </h3>
            <p className="text-gray-700 mb-6">
              Soy autodidacta, curioso y enfocado en aprender continuamente. Aprovecho mis fortalezas
              para mejorar cada día y reconozco mis debilidades para superarlas.
            </p>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.label}>
                  <div className="flex items-center gap-2 font-semibold text-gray-800">
                    <span className="text-xl">{skill.icon}</span> {skill.label}
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-3">
                    <div
                      className="bg-indigo-600 h-3 rounded-full"
                      style={{ width: skill.level }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FORMACIÓN Y EXPERIENCIA */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Formación y Experiencia</h3>

            <h4 className="text-lg font-semibold text-indigo-700">Educación</h4>
            <p className="text-gray-700 mb-4">
              🎓 Actualmente cursando Cuarto año de Ingeniería en Sistemas en la Universidad Mariano Gálvez.<br />
              📚 Perito Contador con orientación en Computación – Colegio Miguel Ángel Asturias (2010–2012).
            </p>

            <h4 className="text-lg font-semibold text-indigo-700">Experiencia Laboral</h4>
            <div className="text-gray-700 space-y-3">
              <div>
                <strong>Desarrollador — INGUAT</strong><br />
                Desarrollo de software en C#, .NET, JavaScript, CSS y SQL Server.
              </div>
              <div>
                <strong>Sub Gerente — Construmart San José S.A. (2015–2021)</strong><br />
                Gestión de tienda, atención al cliente, inventario y supervisión de personal.
              </div>
              <div>
                <strong>Aux. Recursos Humanos — Ingenio Magdalena (2014–2015)</strong><br />
                Gestión de personal, contratos, expedientes y control de cuadrillas.
              </div>
              <div>
                <strong>Asesor de Ventas — Soporte de Marca S.A. (2013–2014)</strong><br />
                Asesoría en construcción, gestión de créditos y alianzas comerciales.
              </div>
            </div>
          </div>
        </div>
      </div>

      </motion.div>
    </section>
  );
};

export default About;
