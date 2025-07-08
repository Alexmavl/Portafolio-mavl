import { useState } from "react";
import type { FC } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

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
    <section id="contacto" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-10">
          <h2 className="text-3xl font-bold text-center text-white mb-10">Contacto</h2>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            <label className="flex flex-col">
              <span className="mb-1 font-medium text-white">Nombre:</span>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="bg-white/10 border border-white/20 text-white placeholder-white/60 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Tu nombre"
              />
            </label>

            <label className="flex flex-col">
              <span className="mb-1 font-medium text-white">Correo Electrónico:</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white/10 border border-white/20 text-white placeholder-white/60 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="correo@ejemplo.com"
              />
            </label>

            <label className="flex flex-col">
              <span className="mb-1 font-medium text-white">Mensaje:</span>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows={4}
                className="bg-white/10 border border-white/20 text-white placeholder-white/60 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Escribe tu mensaje aquí..."
              />
            </label>

            <button
              type="submit"
              className="bg-indigo-500 text-white font-semibold py-2 px-6 rounded hover:bg-indigo-400 transition"
            >
              Enviar
            </button>
          </motion.form>

          <p className="text-center text-white/80 mt-10">También puedes contactarme por redes sociales:</p>
          <div className="mt-4 flex justify-center gap-6 text-2xl text-white">
            <a href="https://www.linkedin.com/in/marvin-vasquez-27557397/" target="_blank">
              <FaLinkedin className="hover:text-indigo-300 transition" />
            </a>
            <a href="https://www.facebook.com/alexito.vasquez1/" target="_blank">
              <FaFacebook className="hover:text-blue-400 transition" />
            </a>
            <a href="https://github.com/Alexmavl" target="_blank">
              <FaGithub className="hover:text-gray-400 transition" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
