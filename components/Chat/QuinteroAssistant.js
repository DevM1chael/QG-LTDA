
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Minimize2, User, Bot } from "lucide-react";

export default function QuinteroAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: "assistant",
          content: "Olá! Eu sou o assistente virtual da Quintero Group. 👋\n\nPosso responder suas dúvidas sobre nossa holding e o futuro Banco Quintero. Como posso ajudá-lo hoje?",
          timestamp: new Date().toISOString()
        }
      ]);
    }
  }, [isOpen, messages.length]); // Corrected dependency: added messages.length

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage;
    setInputMessage("");
    setIsLoading(true);

    const newMessagesWithUser = [...messages, {
      role: "user",
      content: userMessage,
      timestamp: new Date().toISOString()
    }];
    setMessages(newMessagesWithUser);

    setTimeout(() => {
      let response = "Obrigado pela sua pergunta! ";
      const lowerMessage = userMessage.toLowerCase();
      
      if (lowerMessage.includes("banco quintero") || lowerMessage.includes("fintech")) {
        response = "O Banco Quintero será a primeira fintech do Quintero Group, planejada para simplificar a vida financeira de pessoas e pequenos comerciantes, com soluções digitais modernas e seguras. Ofereceremos contas digitais, maquininhas inteligentes e serviços financeiros inovadores. 💳";
      } else if (lowerMessage.includes("investir") || lowerMessage.includes("investimento")) {
        response = "Você pode conhecer as oportunidades de investimento em nossa seção 'Investidores & Parcerias'. Estamos abertos a investidores estratégicos que compartilhem nossa ambição e propósito. Entre em contato conosco através do formulário no site! 📈";
      } else if (lowerMessage.includes("setores") || lowerMessage.includes("empresas")) {
        response = "O Quintero Group pretende atuar em quatro setores estratégicos: Fintech (começando com o Banco Quintero), Moda, Agronegócio e Tecnologia. Nosso objetivo é desenvolver empresas inovadoras que conectem pessoas e oportunidades de crescimento. 🚀";
      } else if (lowerMessage.includes("contato") || lowerMessage.includes("email")) {
        response = "Você pode entrar em contato conosco através do email: contato@quinterogroup.com ou preencher o formulário na seção 'Investidores & Parcerias' do nosso site. 📧";
      } else if (lowerMessage.includes("sobre") || lowerMessage.includes("holding")) {
        response = "A Quintero Group é uma holding com visão de longo prazo, dedicada a criar empresas inovadoras que redefinem mercados e experiências. Nossos valores são: inovação, confiança, crescimento sustentável, inclusão financeira e legado. Transformamos ambição em impacto! ✨";
      } else {
        response = "Posso ajudá-lo com informações sobre nossa holding, o futuro Banco Quintero, oportunidades de investimento ou como entrar em contato conosco. O que gostaria de saber? 😊";
      }

      setMessages(prev => [...prev, {
        role: "assistant",
        content: response,
        timestamp: new Date().toISOString()
      }]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatMessage = (message) => {
    return message.content.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < message.content.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-4 right-4 w-16 h-16 bg-[#00ff66] text-black rounded-full flex items-center justify-center z-[9999] border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-[#00ff66]"
            style={{ boxShadow: '0 0 20px rgba(0, 255, 102, 0.5)' }}
            aria-label="Abrir assistente virtual"
          >
            <MessageCircle className="w-8 h-8" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-4 right-4 w-[calc(100vw-2rem)] max-w-[380px] bg-black border-2 border-[#00ff66] rounded-2xl shadow-2xl z-[9999] overflow-hidden flex flex-col"
            style={{ 
              boxShadow: '0 0 30px rgba(0, 255, 102, 0.4)',
              height: isMinimized ? "60px" : "clamp(400px, 70vh, 500px)"
            }}
          >
            <div className="bg-[#00ff66] text-black px-4 py-3 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center space-x-2">
                <Bot className="w-5 h-5" />
                <span className="font-bold text-sm">Assistente Quintero</span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-black hover:bg-black/10 rounded-full p-1 transition-colors"
                  aria-label="Minimizar chat"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-black hover:bg-black/10 rounded-full p-1 transition-colors"
                  aria-label="Fechar chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <AnimatePresence>
              {!isMinimized && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col flex-1 min-h-0"
                >
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`flex items-start space-x-2 max-w-[85%] ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${message.role === 'user' ? 'bg-gray-700' : 'bg-[#00ff66]'}`}>
                            {message.role === 'user' ? <User className="w-3 h-3 text-white" /> : <Bot className="w-3 h-3 text-black" />}
                          </div>
                          <div className={`rounded-2xl px-3 py-2 ${message.role === 'user' ? 'bg-gray-700 text-white' : 'bg-[#1a1a1a] text-white border border-gray-700'}`}>
                            <div className="text-sm leading-relaxed break-words">{formatMessage(message)}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    {isLoading && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                        <div className="flex items-start space-x-2">
                          <div className="w-7 h-7 rounded-full bg-[#00ff66] flex items-center justify-center flex-shrink-0"><Bot className="w-3 h-3 text-black" /></div>
                          <div className="bg-[#1a1a1a] text-white rounded-2xl px-3 py-2 border border-gray-700">
                            <div className="flex space-x-1 items-center h-5">
                              <div className="w-2 h-2 bg-[#00ff66] rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-[#00ff66] rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                              <div className="w-2 h-2 bg-[#00ff66] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                  <div className="p-3 border-t border-gray-700 bg-[#1a1a1a] flex-shrink-0">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Digite sua pergunta..."
                        className="flex-1 px-3 py-2 bg-black border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-[#00ff66] focus:outline-none transition-colors text-sm"
                        disabled={isLoading}
                      />
                      <button
                        onClick={sendMessage}
                        disabled={!inputMessage.trim() || isLoading}
                        className="bg-[#00ff66] text-black px-3 py-2 rounded-xl hover:bg-[#00cc52] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Enviar mensagem"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
