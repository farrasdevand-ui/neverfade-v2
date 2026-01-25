"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const portfolios = [
    {
        image: "/images/cv.png",
        title: "Template CV Modern",
        category: "Design",
    },
    {
        image: "/images/portfolio.png",
        title: "Template Portfolio Kreatif",
        category: "Web Design",
    },
    {
        image: "/images/wedding.png",
        title: "Web Invitation Elegan",
        category: "Mobile Web",
    },
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-24 bg-slate-950 relative">
            {/* Background Glow */}
            <div className="absolute center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                        Portofolio
                    </h2>
                    <p className="text-slate-400">
                        Karya terpilih yang telah kami kerjakan dengan sepenuh hati.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {portfolios.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group relative rounded-2xl overflow-hidden border border-white/10"
                        >
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-blue-400 text-sm font-medium mb-1 block">{item.category}</span>
                                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
