import React from "react";
import { motion } from "framer-motion";
import { CreditCard, Shirt, Sprout, Cpu } from "lucide-react";

export default function SectorsSection() {
  const sectors = [
    {
      icon: CreditCard,
      name: "Fintech",
      description: "Soluções financeiras inovadoras e acessíveis para todos."
    },
    {
      icon: Shirt,
      name: "Moda",
      description: "Tendências que conectam estilo e sustentabilidade."
    },
    {
      icon: Sprout,
      name: "Agronegócio",
      description: "Tecnologia aplicada à produção sustentável."
    },
    {
      icon: Cpu,
      name: "Tecnologia",
      description: "Desenvolvimento de soluções digitais transformadoras."
    }
  ];

  return (
    <section id="setores" className="py-24 bg-[#1a1a1a] relative">
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
            <span className="text-[#00ff66] ml-3">Setores</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Construindo o futuro através de empresas inovadoras em setores estratégicos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              className="bg-black p-8 rounded-2xl hover-float group cursor-pointer border border-gray-800 hover:border-[#00ff66] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <sector.icon className="w-12 h-12 text-[#00ff66] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{sector.name}</h3>
              <p className="text-gray-400 leading-relaxed">{sector.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
