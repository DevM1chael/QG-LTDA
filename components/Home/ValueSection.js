import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Shield, TrendingUp, Heart, Award } from "lucide-react";

export default function ValuesSection() {
  const values = [
    {
      icon: Lightbulb,
      name: "Inovação",
      description: "Sempre na vanguarda da tecnologia e soluções criativas"
    },
    {
      icon: Shield,
      name: "Confiança",
      description: "Construímos relacionamentos sólidos baseados na transparência"
    },
    {
      icon: TrendingUp,
      name: "Crescimento Sustentável",
      description: "Desenvolvimento responsável que beneficia todos os stakeholders"
    },
    {
      icon: Heart,
      name: "Inclusão Financeira",
      description: "Democratizamos o acesso a serviços financeiros de qualidade"
    },
    {
      icon: Award,
      name: "Legado",
      description: "Construímos empresas que transformam gerações futuras"
    }
  ];

  return (
    <section className="py-24 bg-[#1a1a1a] relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Nossos</span>
            <span className="text-[#00ff66] ml-3">Valores</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Os princípios que guiam cada decisão e ação do Quintero Group
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-black p-6 rounded-2xl hover-float group cursor-default border border-gray-800 hover:border-[#00ff66] transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex justify-center">
                <value.icon className="w-10 h-10 text-[#00ff66] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{value.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Pronto para fazer parte desta jornada?
          </h3>
          <button className="bg-[#00ff66] text-black px-8 py-4 rounded-xl font-bold text-lg uppercase tracking-wide hover:bg-[#00cc52] transition-all duration-300 transform hover:scale-105">
            Junte-se ao Quintero Group
          </button>
        </motion.div>
      </div>
    </section>
  );
}