import React from 'react';
import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';

const Resume = () => {
    const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

    return (
        <section
            id="resume"
            className="py-20 relative bg-dark-900 overflow-hidden"
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent mb-4"
                    >
                        My Resume
                    </motion.h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
                        View my full resume below or download it for later.
                    </p>
                    <a
                        href={resumeUrl}
                        download="Vo_Huynh_Tuan_Kiet_CV.pdf"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-500 hover:bg-primary-600 text-white font-semibold shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 hover:-translate-y-1 active:scale-95 transition-all duration-300"
                    >
                        <HiDownload className="text-xl" />
                        Download CV
                    </a>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary-500/5"
                >
                    <iframe
                        src={resumeUrl}
                        title="Resume - Vo Huynh Tuan Kiet"
                        className="w-full bg-white"
                        style={{ height: '85vh', minHeight: '600px' }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Resume;
