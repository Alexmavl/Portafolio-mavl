import type { FC } from "react";
import {
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaDatabase,
  FaCode,
  FaMicrosoft,
} from "react-icons/fa";
import { SiSharp, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { label: "C#", icon: <SiSharp className="text-purple-400" />, level: 50 },
  { label: ".NET Framework", icon: <FaMicrosoft className="text-blue-300" />, level: 45 },
  { label: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 35 },
  { label: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: 35 },
  { label: "HTML5", icon: <FaHtml5 className="text-orange-400" />, level: 40 },
  { label: "jQuery", icon: <FaCode className="text-pink-400" />, level: 30 },
  { label: "SQL Server", icon: <FaDatabase className="text-red-400" />, level: 40 },
  { label: "MySQL", icon: <SiMysql className="text-teal-400" />, level: 40 },
];

const About: FC = () => {
  return (
    <motion.section
      id="sobre-mi"
      className="min-h-screen flex items-center py-20 px-4 bg-transparent"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl ring-1 ring-cyan-500/30 shadow-[0_0_40px_5px_rgba(56,189,248,0.2)] p-10">

          {/* TÍTULO PRINCIPAL */}
          <motion.h2
            className="text-3xl font-bold text-center text-cyan-300 mb-10 shimmer-text"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Sobre Mí
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* HABILIDADES TÉCNICAS */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-xl font-semibold text-white mb-4"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Habilidades Técnicas
              </motion.h3>

              <motion.p
                className="text-white/80 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Soy autodidacta, curioso y enfocado en aprender continuamente.
                Aprovecho mis fortalezas para mejorar cada día y reconozco mis
                debilidades para superarlas.
              </motion.p>

              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.label}
                    className="space-y-1"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: false }}
                  >
                    <div className="flex items-center gap-3 font-semibold text-white">
                      <motion.span
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="text-2xl"
                      >
                        {skill.icon}
                      </motion.span>
                      {skill.label}
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                       <motion.div
          className="h-3 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-400"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1 }}
          viewport={{ once: false }} // 👈 permite reanimación al hacer scroll de nuevo
        />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* FORMACIÓN Y EXPERIENCIA */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-xl font-semibold text-white mb-4"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Formación y Experiencia
              </motion.h3>

              <motion.h4
                className="text-lg font-semibold text-cyan-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Educación
              </motion.h4>
              <motion.p
                className="text-white/80 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                🎓 Cuarto año de Ingeniería en Sistemas – Universidad Mariano Gálvez.<br />
                📚 Perito Contador en Computación – Colegio Miguel Ángel Asturias (2010–2012).
              </motion.p>

              <motion.h4
                className="text-lg font-semibold text-cyan-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Experiencia Laboral
              </motion.h4>
              <motion.div
                className="text-white/80 space-y-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div>
                  <strong className="text-white">Desarrollador — INGUAT</strong>
                  <br />
                  Desarrollo en C#, .NET, JavaScript, CSS y SQL Server.
                </div>
                <div>
                  <strong className="text-white">Sub Gerente — Construmart San José S.A. (2015–2021)</strong>
                  <br />
                  Gestión de tienda, inventario, supervisión de personal.
                </div>
                <div>
                  <strong className="text-white">Aux. Recursos Humanos — Ingenio Magdalena (2014–2015)</strong>
                  <br />
                  Gestión de contratos, expedientes y control de cuadrillas.
                </div>
                <div>
                  <strong className="text-white">Asesor de Ventas — Soporte de Marca S.A. (2013–2014)</strong>
                  <br />
                  Asesoría en construcción y gestión de créditos.
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
