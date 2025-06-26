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
    // Aquí iría la integración con EmailJS u otra API
    alert("Mensaje enviado (demo). Gracias por contactarme ✉️");
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <section id="contacto" className="bg-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">Contacto</h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-6 bg-white p-8 rounded-xl shadow-md"
        >
          <label className="flex flex-col">
            <span className="mb-1 font-medium">Nombre:</span>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-4 py-2"
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-1 font-medium">Correo Electrónico:</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-4 py-2"
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-1 font-medium">Mensaje:</span>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              rows={4}
              className="border border-gray-300 rounded px-4 py-2"
            />
          </label>

          <button
            type="submit"
            className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded hover:bg-indigo-500 transition"
          >
            Enviar
          </button>
        </motion.form>

        <p className="text-center text-gray-700 mt-10">También puedes contactarme por redes sociales:</p>
        <div className="mt-4 flex justify-center gap-6 text-2xl text-indigo-700">
          <a href="https://www.linkedin.com/in/marvin-vasquez-27557397/" target="_blank">
            <FaLinkedin className="hover:text-indigo-400 transition" />
          </a>
          <a href="https://www.facebook.com/alexito.vasquez1/" target="_blank">
            <FaFacebook className="hover:text-blue-500 transition" />
          </a>
          <a href="https://github.com/Alexmavl" target="_blank">
            <FaGithub className="hover:text-black transition" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
