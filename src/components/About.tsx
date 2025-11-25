import type { FC } from "react";
import {
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaDatabase,
  FaCode,
  FaMicrosoft,
  FaReact,
  FaBootstrap,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";
import { SiSharp, SiMysql, SiTypescript, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { label: "C#", icon: <SiSharp className="text-purple-400" />, level: 80 },
  { label: ".NET Framework", icon: <FaMicrosoft className="text-blue-300" />, level: 70 },
  { label: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 50 },
  { label: "TypeScript", icon: <SiTypescript className="text-blue-400" />, level: 65 },
  { label: "React", icon: <FaReact className="text-cyan-400" />, level: 70 },
  { label: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" />, level: 75 },
  { label: "Bootstrap", icon: <FaBootstrap className="text-purple-500" />, level: 60 },
  { label: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: 55 },
  { label: "HTML5", icon: <FaHtml5 className="text-orange-400" />, level: 60 },
  { label: "jQuery", icon: <FaCode className="text-pink-400" />, level: 30 },
  { label: "SQL Server", icon: <FaDatabase className="text-red-400" />, level: 50 },
  { label: "MySQL", icon: <SiMysql className="text-teal-400" />, level: 50 },
];

const experience = [
  {
    role: "Desarrollador",
    company: "INGUAT",
    period: "Actualidad",
    description: "Desarrollo en C#, .NET, JavaScript, CSS y SQL Server.",
  },
  {
    role: "Sub Gerente",
    company: "Construmart San José S.A.",
    period: "2015 - 2021",
    description: "Gestión de tienda, inventario, supervisión de personal.",
  },
  {
    role: "Aux. Recursos Humanos",
    company: "Ingenio Magdalena",
    period: "2014 - 2015",
    description: "Gestión de contratos, expedientes y control de cuadrillas.",
  },
  {
    role: "Asesor de Ventas",
    company: "Soporte de Marca S.A.",
    period: "2013 - 2014",
    description: "Asesoría en construcción y gestión de créditos.",
  },
];

const education = [
  {
    degree: "Ingeniería en Sistemas (4to Año)",
    institution: "Universidad Mariano Gálvez",
    period: "En curso",
  },
  {
    degree: "Perito Contador en Computación",
    institution: "Colegio Miguel Ángel Asturias",
    period: "2010 - 2012",
  },
];

const About: FC = () => {
  return (
    <motion.section
      id="sobre-mi"
      className="flex items-center py-12 sm:py-16 md:py-20 px-4 bg-transparent"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl ring-1 ring-cyan-500/30 shadow-[0_0_40px_5px_rgba(56,189,248,0.2)] p-6 sm:p-8 md:p-10">
          {/* TÍTULO PRINCIPAL */}
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-center text-cyan-300 mb-6 sm:mb-8 md:mb-10"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            Sobre Mí
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* HABILIDADES TÉCNICAS */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <motion.h3
                className="text-xl sm:text-2xl font-semibold text-white mb-6 flex items-center gap-3"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
              >
                <FaCode className="text-cyan-400" />
                Habilidades Técnicas
              </motion.h3>

              <motion.p
                className="text-white/80 mb-8 text-sm sm:text-base leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: false }}
              >
                Soy autodidacta, curioso y enfocado en aprender continuamente.
                Aprovecho mis fortalezas para mejorar cada día y reconozco mis
                debilidades para superarlas.
              </motion.p>

              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.label}
                    className="space-y-2"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: false }}
                  >
                    <div className="flex items-center justify-between font-medium text-white text-sm sm:text-base">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{skill.icon}</span>
                        {skill.label}
                      </div>
                      <span className="text-white/50 text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden ring-1 ring-white/5">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: false }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* FORMACIÓN Y EXPERIENCIA (TIMELINE) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="space-y-10"
            >
              {/* EDUCACIÓN */}
              <div>
                <motion.h3
                  className="text-xl sm:text-2xl font-semibold text-white mb-6 flex items-center gap-3"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                >
                  <FaGraduationCap className="text-cyan-400" />
                  Educación
                </motion.h3>
                <div className="ml-3 space-y-8 pl-8 relative">
                  {/* Línea animada */}
                  <motion.div
                    className="absolute left-0 top-0 w-0.5 bg-cyan-500/30 origin-top"
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    viewport={{ once: false }}
                  />

                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      className="relative"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: false }}
                    >
                      <motion.span
                        className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-cyan-500 border-4 border-slate-900 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 300, delay: index * 0.2 }}
                        viewport={{ once: false }}
                      />
                      <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                      <p className="text-cyan-300 font-medium">{edu.institution}</p>
                      <span className="text-white/50 text-sm">{edu.period}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* EXPERIENCIA */}
              <div>
                <motion.h3
                  className="text-xl sm:text-2xl font-semibold text-white mb-6 flex items-center gap-3"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: false }}
                >
                  <FaBriefcase className="text-cyan-400" />
                  Experiencia Laboral
                </motion.h3>
                <div className="ml-3 space-y-8 pl-8 relative">
                  {/* Línea animada */}
                  <motion.div
                    className="absolute left-0 top-0 w-0.5 bg-cyan-500/30 origin-top"
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    viewport={{ once: false }}
                  />

                  {experience.map((job, index) => (
                    <motion.div
                      key={index}
                      className="relative"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <motion.span
                        className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-cyan-500 border-4 border-slate-900 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 300, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                      <h4 className="text-lg font-bold text-white">{job.role}</h4>
                      <p className="text-cyan-300 font-medium">{job.company}</p>
                      <span className="text-white/50 text-sm block mb-1">{job.period}</span>
                      <p className="text-white/80 text-sm leading-relaxed">{job.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;