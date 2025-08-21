import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-foreground">
            Estudio <span className="text-golden">Fotográfico</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-golden transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('galeria')}
              className="text-foreground hover:text-golden transition-colors"
            >
              Galería
            </button>
            <button 
              onClick={() => scrollToSection('sobre-mi')}
              className="text-foreground hover:text-golden transition-colors"
            >
              Sobre Nosotros
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-foreground hover:text-golden transition-colors"
            >
              Contacto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-golden transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-foreground hover:text-golden transition-colors"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('galeria')}
                className="text-left text-foreground hover:text-golden transition-colors"
              >
                Galería
              </button>
              <button 
                onClick={() => scrollToSection('sobre-mi')}
                className="text-left text-foreground hover:text-golden transition-colors"
              >
                Sobre Nosotros
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-left text-foreground hover:text-golden transition-colors"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;