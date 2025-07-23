import type { FC } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook, FaGithub, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

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
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/marvin-vasquez-27557397/",
      color: "#0077B5",
      hoverColor: "#005582",
      bgGradient: "from-blue-600 to-blue-700"
    },
    {
      name: "Facebook", 
      icon: <FaFacebook />,
      url: "https://www.facebook.com/alexito.vasquez1/",
      color: "#1877F2",
      hoverColor: "#166FE5",
      bgGradient: "from-blue-500 to-blue-600"
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/Alexmavl",
      color: "#333",
      hoverColor: "#24292e",
      bgGradient: "from-gray-700 to-gray-800"
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      url: "https://wa.me/50233585075?text=Hola%20Marvin%2C%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte.",
      color: "#25D366",
      hoverColor: "#128C7E",
      bgGradient: "from-green-500 to-green-600"
    }
  ];

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
              className="flex items-center justify-center sm:justify-start gap-3 text-white/80"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400">
                <FaEnvelope className="text-sm" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xs text-white/60">Email</p>
                <p className="text-sm font-medium">Disponible por LinkedIn</p>
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