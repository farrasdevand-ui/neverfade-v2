"use client";

import { motion } from "framer-motion";
import { Copy, Globe, Mail } from "lucide-react";

const services = [
    {
        icon: <Copy className="w-10 h-10 text-blue-400" />,
        title: "Digital Templates",
        description: "Template CV dan portfolio yang siap pakai, mudah dikustomisasi untuk kebutuhan profesional Anda.",
        color: "from-blue-500/20 to-blue-600/5",
        border: "group-hover:border-blue-500/50"
    },
    {
        icon: <Globe className="w-10 h-10 text-purple-400" />,
        title: "Pembuatan Web",
        description: "Website bisnis atau personal yang responsif, modern, dan SEO-friendly untuk meningkatkan kehadiran online Anda.",
        color: "from-purple-500/20 to-purple-600/5",
        border: "group-hover:border-purple-500/50"
    },
    {
        icon: <Mail className="w-10 h-10 text-pink-400" />,
        title: "Web Invitation",
        description: "Undangan digital untuk acara spesial seperti pernikahan atau ulang tahun, dengan desain unik dan fitur interaktif.",
        color: "from-pink-500/20 to-pink-600/5",
        border: "group-hover:border-pink-500/50"
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-slate-900/50 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        Layanan Kami
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Solusi digital terbaik untuk membantu Anda tumbuh dan tampil beda.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`group p-8 rounded-2xl bg-gradient-to-br ${service.color} border border-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 ${service.border}`}
                        >
                            <div className="mb-6 p-4 bg-slate-950/50 rounded-xl inline-block shadow-lg border border-white/5">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-slate-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
