import { Camera, Instagram, Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Camera className="w-8 h-8 text-golden mr-2" />
              <h3 className="text-2xl font-bold">
                Titulo<span className="text-golden">Pagina</span>
              </h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Servicios fotográficos profesionales de alta calidad. Especializados en retratos corporativos, eventos institucionales y documentación arquitectónica con más de 12 años de experiencia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-golden transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-golden transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="mailto:contacto@estudiofotografico.com.py" className="text-gray-300 hover:text-golden transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="tel:+59521123456" className="text-gray-300 hover:text-golden transition-colors">
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-golden">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-golden transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-golden transition-colors"
                >
                  Galería
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-golden transition-colors"
                >
                  Sobre Nosotros
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-golden transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-golden">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Retratos Corporativos</li>
              <li>Eventos Institucionales</li>
              <li>Documentación Arquitectónica</li>
              <li>Fotografía de Productos</li>
              <li>Reportajes Empresariales</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} Titulo Pagina. Todos los derechos reservados.
            <br />
            <a href="https://eliasortizdev.com/" target="_blank" rel="noopener noreferrer" className="text-golden underline hover:text-white transition-colors">Desarrollado por Elias Ortiz</a>
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-golden text-sm transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-300 hover:text-golden text-sm transition-colors">
              Términos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;