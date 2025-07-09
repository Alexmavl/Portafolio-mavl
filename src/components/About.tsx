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
    <section id="sobre-mi" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-3xl ring-1 ring-cyan-500/30 shadow-[0_0_40px_5px_rgba(56,189,248,0.2)] p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.3 }}
          variants={{
            hidden: {},
            visible: {},
          }}
        >
          <motion.h2
            className="text-3xl font-bold text-center text-cyan-300 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Sobre Mí
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            variants={{
              hidden: {},
              visible: {},
            }}
          >
            {/* HABILIDADES */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Habilidades Técnicas
              </h3>
              <p className="text-white/80 mb-6">
                Soy autodidacta, curioso y enfocado en aprender continuamente.
                Aprovecho mis fortalezas para mejorar cada día y reconozco mis
                debilidades para superarlas.
              </p>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.label}
                    className="space-y-1"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
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
                        className="h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* EXPERIENCIA */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Formación y Experiencia
              </h3>

              <h4 className="text-lg font-semibold text-cyan-300">Educación</h4>
              <p className="text-white/80 mb-4">
                🎓 Cuarto año de Ingeniería en Sistemas – Universidad Mariano Gálvez.
                <br />
                📚 Perito Contador en Computación – Colegio Miguel Ángel Asturias (2010–2012).
              </p>

              <h4 className="text-lg font-semibold text-cyan-300">Experiencia Laboral</h4>
              <div className="text-white/80 space-y-3">
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
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
