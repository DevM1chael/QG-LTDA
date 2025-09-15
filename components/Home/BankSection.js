import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Shield, Zap, Users } from "lucide-react";

export default function BankSection() {
  const features = [
    {
      icon: Smartphone,
      title: "Conta Digital",
      description: "Interface intuitiva e moderna"
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Tecnologia de ponta em proteção"
    },
    {
      icon: Zap,
      title: "Velocidade",
      description: "Transações instantâneas"
    },
    {
      icon: Users,
      title: "Inclusão",
      description: "Acessível para todos"
    }
  ];

  return (
    <section id="banco" className="py-24 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#00ff66] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#00ff66] opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="text-white">Nosso Primeiro Passo:</span>
            <br />
            <span className="gradient-text">Banco Quintero</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Estamos prestes a lançar o Banco Quintero, uma fintech criada para simplificar a vida financeira de pessoas e pequenos comerciantes, com soluções digitais modernas e seguras. Nossa missão é unir tecnologia de ponta, confiabilidade e experiências únicas, oferecendo desde contas digitais até maquininhas inteligentes e serviços financeiros inovadores.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <feature.icon className="w-6 h-6 text-[#00ff66] mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="bg-[#00ff66] text-black px-10 py-4 rounded-xl font-bold text-lg uppercase tracking-wide hover:bg-[#00cc52] transition-all duration-300 transform hover:scale-105 glow-green"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Receba atualizações do Banco Quintero
            </motion.button>
          </motion.div>

          {/* Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-[#1a1a1a] to-black p-8 rounded-3xl border border-gray-800">
              <div className="bg-black rounded-2xl p-6 border border-[#00ff66]/20">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#00ff66] rounded-full"></div>
                    <span className="text-white font-bold">Banco Quintero</span>
                  </div>
                  <div className="text-[#00ff66] text-sm">●●● Online</div>
                </div>

                <div className="space-y-4">
                  <div className="bg-[#1a1a1a] p-4 rounded-xl">
                    <div className="text-gray-400 text-sm mb-1">Saldo Disponível</div>
                    <div className="text-2xl font-bold text-white">R$ 12.450,00</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#1a1a1a] p-4 rounded-xl text-center">
                      <div className="text-[#00ff66] text-xl mb-1">↗</div>
                      <div className="text-white text-sm">Transferir</div>
                    </div>
                    <div className="bg-[#1a1a1a] p-4 rounded-xl text-center">
                      <div className="text-[#00ff66] text-xl mb-1">💳</div>
                      <div className="text-white text-sm">Pagar</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
