
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CreditCard, Shirt, Sprout, Cpu } from "lucide-react";

export default function InvestorsSection() {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    interesse: "",
    mensagem: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    // Aqui iria a lógica de envio para um backend ou API
    alert("Obrigado pelo seu interesse! Entraremos em contato em breve.");
    setFormData({
      nome: "",
      empresa: "",
      email: "",
      interesse: "",
      mensagem: "",
    });
  };

  const opportunities = [
    {
      icon: CreditCard,
      name: "Fintech",
      description: "Invista na revolução dos serviços financeiros digitais."
    },
    {
      icon: Shirt,
      name: "Moda",
      description: "Apoie marcas de moda com propósito e crescimento escalável."
    },
    {
      icon: Sprout,
      name: "Agronegócio",
      description: "Faça parte da transformação tecnológica no campo."
    },
    {
      icon: Cpu,
      name: "Tecnologia",
      description: "Impulsione o desenvolvimento de softwares e soluções SaaS."
    }
  ];

  return (
    <section id="investidores" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Investidores</span>
            <span className="gradient-text ml-3">& Parcerias</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Se você deseja fazer parte da nossa visão de crescimento, inovação e impacto, venha conhecer as oportunidades de investimento e parceria com o Quintero Group. Estamos abertos a investidores estratégicos que compartilhem nossa ambição e propósito.
          </p>
        </motion.div>

        {/* Opportunities Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {opportunities.map((opp, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1a1a] p-8 rounded-2xl group cursor-default border-2 border-transparent hover:border-[#00ff66] transition-all duration-300 hover-float"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <opp.icon className="w-12 h-12 text-[#00ff66] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{opp.name}</h3>
              <p className="text-gray-400 leading-relaxed">{opp.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                placeholder="Seu nome"
                required
                className="w-full p-4 bg-[#1a1a1a] rounded-lg border border-gray-700 focus:border-[#00ff66] focus:ring-[#00ff66] outline-none transition-all"
              />
              <input
                type="text"
                name="empresa"
                value={formData.empresa}
                onChange={handleInputChange}
                placeholder="Sua empresa (opcional)"
                className="w-full p-4 bg-[#1a1a1a] rounded-lg border border-gray-700 focus:border-[#00ff66] focus:ring-[#00ff66] outline-none transition-all"
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Seu e-mail"
              required
              className="w-full p-4 bg-[#1a1a1a] rounded-lg border border-gray-700 focus:border-[#00ff66] focus:ring-[#00ff66] outline-none transition-all"
            />
            <select
              name="interesse"
              value={formData.interesse}
              onChange={handleInputChange}
              required
              className="w-full p-4 bg-[#1a1a1a] rounded-lg border border-gray-700 focus:border-[#00ff66] focus:ring-[#00ff66] outline-none transition-all"
            >
              <option value="" disabled>Selecione seu interesse específico</option>
              <option value="fintech">Fintech</option>
              <option value="agro">Agronegócio</option>
              <option value="moda">Moda</option>
              <option value="tecnologia">Tecnologia</option>
              <option value="geral">Parceria geral</option>
            </select>
            <textarea
              name="mensagem"
              value={formData.mensagem}
              onChange={handleInputChange}
              placeholder="Sua mensagem"
              rows="5"
              required
              className="w-full p-4 bg-[#1a1a1a] rounded-lg border border-gray-700 focus:border-[#00ff66] focus:ring-[#00ff66] outline-none transition-all"
            ></textarea>
            <div className="text-center">
              <motion.button
                type="submit"
                className="bg-[#00ff66] text-black px-10 py-4 rounded-xl font-bold text-lg uppercase tracking-wide hover:bg-[#00cc52] transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Entre em contato
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
