import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X } from "lucide-react";
import QuinteroAssistant from "../components/chat/QuinteroAssistant";

export default function Layout({ children, currentPageName }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Sobre", path: "#sobre" },
    { name: "Holding", path: "#setores" },
    { name: "Banco Quintero", path: "#banco" },
    { name: "Investidores", path: "#investidores" },
    { name: "Contato", path: "#contato" }
  ];

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const targetId = path.substring(1); // Remove o #
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerHeight = 80; // Altura aproximada do header fixo
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <style>{`
        :root {
          --black: #000000;
          --green: #00ff66;
          --gray-dark: #1a1a1a;
          --white: #ffffff;
        }
        
        * {
          scroll-behavior: smooth;
        }
        
        body {
          background-color: var(--black);
          color: var(--white);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #00ff66, #00cc52);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .glow-green {
          box-shadow: 0 0 20px rgba(0, 255, 102, 0.3);
        }
        
        .hover-float:hover {
          transform: translateY(-8px);
          transition: all 0.3s ease;
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="text-xl sm:text-2xl font-bold">
              <span className="text-white">Quintero</span>
              <span className="text-[#00ff66] ml-1">Group</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className="text-white hover:text-[#00ff66] transition-colors duration-300 font-medium cursor-pointer text-sm lg:text-base"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button 
                onClick={(e) => handleNavClick(e, "#investidores")}
                className="bg-[#00ff66] text-black px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-bold text-xs lg:text-sm uppercase tracking-wide hover:bg-[#00cc52] transition-all duration-300 transform hover:scale-105"
              >
                Junte-se à nossa visão
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-[#00ff66] transition-colors z-50 relative"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gray-900">
              <nav className="flex flex-col px-4 py-4 space-y-4">
                {navigationItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.path}
                    onClick={(e) => handleNavClick(e, item.path)}
                    className="text-white hover:text-[#00ff66] transition-colors duration-300 font-medium py-2 cursor-pointer"
                  >
                    {item.name}
                  </a>
                ))}
                <button 
                  onClick={(e) => handleNavClick(e, "#investidores")}
                  className="bg-[#00ff66] text-black px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#00cc52] transition-all duration-300 mt-4 self-start"
                >
                  Junte-se à nossa visão
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer id="contato" className="bg-black border-t border-[#00ff66] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-white">Quintero</span>
                <span className="text-[#00ff66] ml-1">Group</span>
              </h3>
              <p className="text-gray-400 max-w-md mx-auto">
                Transformando ambição em impacto através de soluções inovadoras e visão de longo prazo.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className="text-gray-400 hover:text-[#00ff66] transition-colors duration-300 cursor-pointer text-sm sm:text-base"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 sm:space-x-6 mb-8">
              <a href="#" className="text-[#00ff66] hover:text-[#00cc52] transition-colors duration-300 text-lg sm:text-xl">
                LinkedIn
              </a>
              <a href="#" className="text-[#00ff66] hover:text-[#00cc52] transition-colors duration-300 text-lg sm:text-xl">
                Instagram
              </a>
              <a href="#" className="text-[#00ff66] hover:text-[#00cc52] transition-colors duration-300 text-lg sm:text-xl">
                TikTok
              </a>
            </div>

            {/* Contact */}
            <div className="mb-8">
              <p className="text-gray-400 text-sm sm:text-base">
                <strong className="text-white">Contato:</strong> contato@quinterogroup.com
              </p>
            </div>

            {/* Branding */}
            <div className="text-[#00ff66] font-bold text-base sm:text-lg">
              Quintero Group – Transformando ambição em legado.
            </div>
          </div>
        </div>
      </footer>

      {/* AI Assistant Widget */}
      <QuinteroAssistant />
    </div>
  );
}