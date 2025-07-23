import type { FC } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook, FaGithub, FaWhatsapp } from "react-icons/fa";

// Animaciones base
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact: FC = () => {
  return (
    <section id="contacto" className="py-20 bg-transparent">
      <motion.div
        className="max-w-7xl mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        animate="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-3xl ring-1 ring-cyan-500/30 shadow-[0_0_40px_5px_rgba(99,102,241,0.2)] p-10"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* TEXTOS */}
            <div className="text-center md:text-left flex-1">
              <motion.h2
                className="text-3xl font-bold text-cyan-300 mb-6 shimmer-text"
                variants={itemVariants}
              >
                ¡Contáctame!
              </motion.h2>

              <motion.p className="text-white/80 mb-8" variants={itemVariants}>
                Puedes escribirme directamente por cualquiera de mis redes sociales:
              </motion.p>
            </div>

            {/* REDES SOCIALES */}
            <motion.div
              className="flex justify-center md:justify-end flex-wrap gap-6 text-4xl flex-1"
              variants={itemVariants}
            >
              <motion.a
                href="https://www.linkedin.com/in/marvin-vasquez-27557397/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#818cf8" }}
                className="text-cyan-400"
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                href="https://www.facebook.com/alexito.vasquez1/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#60a5fa" }}
                className="text-blue-400"
              >
                <FaFacebook />
              </motion.a>

              <motion.a
                href="https://github.com/Alexmavl"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#e5e7eb" }}
                className="text-gray-300"
              >
                <FaGithub />
              </motion.a>

              <motion.a
                href="https://wa.me/50233585075?text=Hola%20Marvin%2C%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#25D366" }}
                className="text-green-400"
              >
                <FaWhatsapp />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
