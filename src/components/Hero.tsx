import type { FC } from "react";
import { FaLinkedin, FaFacebook, FaGithub, FaMapMarkerAlt, FaEnvelope, FaCode } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Variantes de animación optimizadas
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" as const }
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.8, ease: "backOut" as const }
  },
};

const Hero: FC = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/marvin-vasquez-27557397/",
      color: "text-blue-400",
      hoverColor: "#0077B5"
    },
    {
      icon: <FaFacebook />,
      url: "https://www.facebook.com/alexito.vasquez1/",
      color: "text-blue-500",
      hoverColor: "#1877F2"
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/Alexmavl",
      color: "text-gray-300",
      hoverColor: "#333"
    }
  ];

  return (
    <section
      id="inicio"
      className="flex items-center py-12 sm:py-16 md:py-20 lg:min-h-screen bg-transparent" 
    >
      <div className="max-w-7xl mx-auto px-4 w-full">
        <AnimatePresence>
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-3xl ring-1 ring-cyan-500/30 shadow-[0_0_40px_5px_rgba(99,102,241,0.2)] p-6 sm:p-8 md:p-10"
            initial="hidden"
            whileInView="visible"
            exit="exit"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.2 }}
          >
            
            {/* LAYOUT PRINCIPAL */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10">
              
              {/* CONTENIDO DE TEXTO */}
              <motion.div
                className="flex-1 text-center lg:text-left max-w-2xl"
                variants={itemVariants}
              >
                {/* SALUDO Y NOMBRE */}
                <motion.div className="mb-4 sm:mb-6" variants={itemVariants}>
                  <motion.span 
                    className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium mb-3 sm:mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    👋 ¡Hola! Soy
                  </motion.span>
                  
                  <motion.h1
  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
  variants={itemVariants}
>
  Marvin Alexander 
  <span className="block text-white">Vásquez López</span>
</motion.h1>

                </motion.div>

                {/* ROL ACTUAL */}
                <motion.div 
                  className="flex items-center justify-center lg:justify-start gap-2 mb-4 sm:mb-6"
                  variants={itemVariants}
                >
                  <FaCode className="text-cyan-400" />
                  <span className="text-lg sm:text-xl font-semibold text-cyan-300">
                    Desarrollador Junior
                  </span>
                </motion.div>

                {/* DESCRIPCIÓN */}
                <motion.p 
                  className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8"
                  variants={itemVariants}
                >
                  Estudiante de Ingeniería en Sistemas con experiencia en desarrollo web y gestión empresarial. 
                  Especializado en <span className="text-cyan-300 font-semibold">C#, .NET y JavaScript</span>.
                </motion.p>

                {/* INFORMACIÓN DE CONTACTO */}
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8"
                  variants={itemVariants}
                >
                  <motion.div 
                    className="flex items-center justify-center lg:justify-start gap-3 text-white/70"
                    whileHover={{ scale: 1.02, color: "#22d3ee" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20">
                      <FaEnvelope className="text-xs text-cyan-400" />
                    </div>
                    <span className="text-sm">marvinv708@gmail.com</span>
                  </motion.div>

                  <motion.div 
                    className="flex items-center justify-center lg:justify-start gap-3 text-white/70"
                    whileHover={{ scale: 1.02, color: "#22d3ee" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20">
                      <FaMapMarkerAlt className="text-xs text-cyan-400" />
                    </div>
                    <span className="text-sm">Guazacapán, Guatemala</span>
                  </motion.div>
                </motion.div>

                {/* REDES SOCIALES */}
                <motion.div
                  className="flex gap-4 sm:gap-6 justify-center lg:justify-start"
                  variants={itemVariants}
                >
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} text-2xl sm:text-3xl transition-colors duration-300`}
                      whileHover={{ 
                        scale: 1.3,
                        rotate: [0, -10, 10, 0],
                        color: social.hoverColor
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>

              {/* IMAGEN DE PERFIL */}
              <motion.div
                className="flex-shrink-0 order-first lg:order-last"
                variants={imageVariants}
              >
                <motion.div
                  className="relative group"
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Efecto de aura animado */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20 blur-xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Imagen principal */}
                  <motion.img
                    src="/ImagenesPortafolio/FotoPerfil2.jpg"
                    alt="Marvin Alexander Vásquez López"
                    className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 object-cover rounded-full border-4 border-cyan-300 shadow-2xl"
                    whileHover={{
                      borderColor: "#22d3ee",
                      boxShadow: "0 0 30px rgba(34, 211, 238, 0.5)"
                    }}
                  />
                  
                  {/* Badge de estado */}
                  <motion.div
                    className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full border-2 sm:border-4 border-white shadow-lg">
                      <motion.div
                        className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>

            {/* CALL TO ACTION */}
            <motion.div 
              className="text-center mt-8 sm:mt-10 lg:mt-12"
              variants={itemVariants}
            >
              <motion.button
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-full shadow-lg text-sm sm:text-base transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 40px rgba(34, 211, 238, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver mis proyectos
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;