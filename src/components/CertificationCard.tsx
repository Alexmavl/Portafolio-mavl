import { useState, type FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Certification } from "../data";

interface CertificationCardProps {
    certificacion: Certification;
}

const CertificationCard: FC<CertificationCardProps> = ({ certificacion }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <motion.div
                className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden ring-1 ring-white/10 hover:ring-cyan-400/50 transition-all duration-300 group cursor-pointer"
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setIsModalOpen(true)}
            >
                {/* Imagen del certificado */}
                <div className="relative overflow-hidden h-64">
                    <div
                        className={`absolute inset-0 bg-gradient-to-br ${certificacion.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                    />
                    <img
                        src={certificacion.imagen}
                        alt={certificacion.titulo}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay con ícono de zoom */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <motion.div
                            className="text-white opacity-0 group-hover:opacity-100"
                            initial={{ scale: 0 }}
                            whileHover={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <svg
                                className="w-12 h-12"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                />
                            </svg>
                        </motion.div>
                    </div>
                </div>

                {/* Información del certificado */}
                <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                        {certificacion.titulo}
                    </h3>
                    <p className="text-cyan-400 text-sm mb-3">
                        {certificacion.institucion} • {certificacion.fecha}
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed">
                        {certificacion.descripcion}
                    </p>
                </div>
            </motion.div>

            {/* Modal para ver certificado en grande */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            className="relative max-w-5xl w-full"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Botón de cerrar */}
                            <button
                                className="absolute -top-4 -right-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 ring-1 ring-white/20 transition-all z-10"
                                onClick={() => setIsModalOpen(false)}
                            >
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>

                            {/* Imagen del certificado */}
                            <div className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden ring-1 ring-white/20">
                                <img
                                    src={certificacion.imagen}
                                    alt={certificacion.titulo}
                                    className="w-full h-auto"
                                />
                            </div>

                            {/* Info debajo de la imagen */}
                            <div className="mt-4 text-center">
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {certificacion.titulo}
                                </h3>
                                <p className="text-cyan-400">
                                    {certificacion.institucion} • {certificacion.fecha}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default CertificationCard;
