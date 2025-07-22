import { useState } from "react";
import type { FC } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";


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
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensaje enviado (demo). Gracias por contactarme ✉️");
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <motion.div
        className="max-w-4xl mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-3xl ring-1 ring-cyan-500/30 shadow-[0_0_40px_5px_rgba(99,102,241,0.2)] p-10"
          variants={itemVariants}
        >
          <motion.h2
            className="text-3xl font-bold text-center text-cyan-300 mb-10"
            variants={itemVariants}
          >
            Contacto
          </motion.h2>

          <motion.form
            onSubmit={handleSubmit}
            className="grid gap-6"
            variants={containerVariants}
          >
            {/* Campo: Nombre */}
            <motion.label className="flex flex-col" variants={itemVariants}>
              <span className="mb-1 font-medium text-white">Nombre:</span>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="bg-white/10 border border-white/20 text-white placeholder-white/60 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                placeholder="Tu nombre"
              />
            </motion.label>

            {/* Campo: Email */}
            <motion.label className="flex flex-col" variants={itemVariants}>
              <span className="mb-1 font-medium text-white">Correo Electrónico:</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white/10 border border-white/20 text-white placeholder-white/60 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                placeholder="correo@ejemplo.com"
              />
            </motion.label>

            {/* Campo: Mensaje */}
            <motion.label className="flex flex-col" variants={itemVariants}>
              <span className="mb-1 font-medium text-white">Mensaje:</span>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows={4}
                className="bg-white/10 border border-white/20 text-white placeholder-white/60 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                placeholder="Escribe tu mensaje aquí..."
              />
            </motion.label>

            {/* Botón */}
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#6366f1",
                boxShadow: "0 0 12px #6366f1",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-cyan-300 text-white font-semibold py-2 px-6 rounded-xl  bg-cyan-300:bg-cyan-600 transition"
              variants={itemVariants}
            >
              Enviar Mensaje
            </motion.button>
          </motion.form>

          {/* REDES SOCIALES */}
          <motion.div
            className="mt-12 border-t border-white/20 pt-6 text-center"
            variants={itemVariants}
          >
            <p className="text-white/80 mb-4">
              También puedes contactarme por redes sociales:
            </p>
            <motion.div
              className="flex justify-center gap-6 text-3xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/marvin-vasquez-27557397/"
                target="_blank"
                whileHover={{ scale: 1.2, color: "#818cf8" }}
                className="text-cyan-400"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/alexito.vasquez1/"
                target="_blank"
                whileHover={{ scale: 1.2, color: "#60a5fa" }}
                className="text-blue-400"
              >
                <FaFacebook />
              </motion.a>
              <motion.a
                href="https://github.com/Alexmavl"
                target="_blank"
                whileHover={{ scale: 1.2, color: "#e5e7eb" }}
                className="text-gray-300"
              >
                <FaGithub />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
