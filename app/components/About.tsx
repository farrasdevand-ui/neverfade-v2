"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-24 bg-slate-900 border-y border-white/5">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Tentang Kami</h2>
                    <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                        Neverfade adalah bisnis digital yang fokus pada solusi kreatif untuk kebutuhan online Anda.
                        Dari template CV yang menarik hingga web invitation yang elegan, kami siap membantu Anda tampil profesional
                        dan tak terlupakan.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
