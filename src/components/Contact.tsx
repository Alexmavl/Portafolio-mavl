import { useState } from "react";
import type { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaCheck } from "react-icons/fa";
import { socialLinks } from "../data";

// Animaciones base
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  },
};

const socialVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20
    }
  },
};

const Contact: FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("marvinv708@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contacto" className="py-12 sm:py-16 md:py-20 bg-transparent">
      <motion.div
        className="max-w-7xl mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-3xl ring-1 ring-cyan-500/30 shadow-[0_0_40px_5px_rgba(99,102,241,0.2)] p-6 sm:p-8 md:p-10"
          variants={itemVariants}
        >
          {/* HEADER */}
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-300 mb-3 sm:mb-4 "
              variants={itemVariants}
            >
              ¡Conectemos!
            </motion.h2>

            <motion.p
              className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto"
              variants={itemVariants}
            >
              ¿Tienes un proyecto en mente o quieres colaborar? Me encantaría escucharte.
              Contáctame a través de cualquiera de mis redes sociales.
            </motion.p>
          </div>

          {/* INFO CONTACTO */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10"
            variants={itemVariants}
          >
            <motion.div
              className="flex items-center justify-center sm:justify-start gap-3 text-white/80 cursor-pointer relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={handleCopyEmail}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <FaCheck className="text-sm" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="envelope"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <FaEnvelope className="text-sm" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xs text-white/60">Email</p>
                <p className="text-sm font-medium group-hover:text-cyan-300 transition-colors">
                  {copied ? "¡Copiado!" : "marvinv708@gmail.com"}
                </p>
              </div>

              {/* Tooltip */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                Clic para copiar
              </div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center sm:justify-start gap-3 text-white/80"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400">
                <FaMapMarkerAlt className="text-sm" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xs text-white/60">Ubicación</p>
                <p className="text-sm font-medium">Guatemala</p>
              </div>
            </motion.div>
          </motion.div>

          {/* REDES SOCIALES */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-lg sm:text-xl font-semibold text-white text-center mb-6"
              variants={itemVariants}
            >
              Sígueme en mis redes
            </motion.h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  variants={socialVariants}
                  custom={index}
                  whileHover={{
                    scale: 1.05,
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${social.bgGradient} p-4 sm:p-6 text-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    {/* Efecto de brillo */}
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 rounded-2xl" />

                    {/* Icono */}
                    <motion.div
                      className="text-2xl sm:text-3xl md:text-4xl text-white mb-2 sm:mb-3 relative z-10"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.6 }}
                    >
                      {social.icon}
                    </motion.div>

                    {/* Nombre */}
                    <p className="text-white font-medium text-sm sm:text-base relative z-10">
                      {social.name}
                    </p>

                    {/* Indicador de enlace externo */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                    </div>
                  </div>

                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 transition-colors duration-300 pointer-events-none" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="text-center mt-8 sm:mt-10"
            variants={itemVariants}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-400/30 text-cyan-300 text-sm font-medium"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(34, 211, 238, 0.3)",
                  "0 0 30px rgba(34, 211, 238, 0.5)",
                  "0 0 20px rgba(34, 211, 238, 0.3)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="animate-pulse">💬</span>
              ¡Estoy disponible para nuevos proyectos!
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;