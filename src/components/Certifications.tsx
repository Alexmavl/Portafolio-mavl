import type { FC } from "react";
import { motion } from "framer-motion";
import CertificationCard from "./CertificationCard";
import { certificaciones } from "../data";

const Certifications: FC = () => {
    return (
        <section id="certificaciones" className="py-12 sm:py-16 md:py-20 bg-transparent">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    className="bg-white/10 backdrop-blur-md rounded-3xl ring-1 ring-cyan-500/30 shadow-[0_0_40px_5px_rgba(99,102,241,0.2)] p-6 sm:p-8 md:p-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h2
                        className="text-2xl sm:text-3xl font-bold text-center text-white mb-6 sm:mb-8 md:mb-10"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Certificaciones
                    </motion.h2>

                    {/* Grid de certificaciones */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {certificaciones.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <CertificationCard certificacion={cert} />
                            </motion.div>
                        ))}
                    </div>

                    {/* Mensaje adicional */}
                    <motion.p
                        className="text-center text-white/60 text-sm mt-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Haz clic en cualquier certificado para verlo en tamaño completo
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
