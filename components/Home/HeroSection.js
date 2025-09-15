import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setShowScrollIndicator(scrolled < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="sobre" className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ff66] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00ff66] opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10 flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="text-white">Transformamos</span>
            <br />
            <span className="gradient-text">Ambição em Impacto</span>
          </h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            No Quintero Group, somos uma holding com visão de longo prazo, dedicada a criar empresas inovadoras que redefinem mercados e experiências. Nosso objetivo é criar soluções que conectem pessoas, tecnologia e oportunidades de crescimento — começando pelo nosso primeiro grande passo: Banco Quintero, uma fintech que une acessibilidade e excelência.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button 
              onClick={() => scrollToSection('setores')}
              className="w-full sm:w-auto bg-[#00ff66] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg uppercase tracking-wide hover:bg-[#00cc52] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Conheça Nossa Visão
            </button>
            <button 
              onClick={() => scrollToSection('banco')}
              className="w-full sm:w-auto border border-[#00ff66] text-[#00ff66] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-[#00ff66] hover:text-black transition-all duration-300"
            >
              Banco Quintero
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <AnimatePresence>
          {showScrollIndicator && (
            <motion.div 
              className="mt-16 sm:mt-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="animate-bounce cursor-pointer flex justify-center"
                onClick={() => scrollToSection('setores')}
              >
                <div className="w-6 h-10 border-2 border-[#00ff66] rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-[#00ff66] rounded-full mt-2 animate-pulse"></div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}