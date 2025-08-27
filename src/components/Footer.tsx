import { Camera, Instagram, Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://your-project.supabase.co'
const supabaseKey = 'YOUR_PUBLIC_ANON_KEY'
export const supabase = createClient(supabaseUrl, supabaseKey)import { supabase } from '../supabaseClient' // ajusta ruta según tu estructura

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // ...validación...

  // Guardar en supabase
  const { data, error } = await supabase
    .from('contacto')
    .insert([
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
      },
    ]);

  if (error) {
    // Mostrar error o toast de error
    toast({
      title: "Error al guardar en Supabase",
      description: error.message,
      variant: "destructive"
    });
    return;
  }

  // El resto: abrir WhatsApp, limpiar formulario, mostrar toast...
}
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
              <a href="tel:+5950976393314" className="text-gray-300 hover:text-golden transition-colors">
                <Phone className="w-6 h-6" />
              </a>
              <a href="https://wa.me/595976393314" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-golden transition-colors" title="WhatsApp">
                {/* Ícono WhatsApp */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.013 2.165c-5.48 0-9.935 4.453-9.935 9.932 0 1.758.461 3.463 1.336 4.976l-1.441 5.268 5.422-1.424c1.474.807 3.146 1.236 4.901 1.236 5.478 0 9.931-4.451 9.931-9.931s-4.453-9.933-9.931-9.933zm0 18.413c-1.599 0-3.169-.429-4.517-1.237l-.324-.174-3.222.846.855-3.141-.211-.323c-.813-1.254-1.243-2.713-1.243-4.214 0-4.363 3.547-7.91 7.912-7.91 4.362 0 7.908 3.547 7.908 7.91.001 4.363-3.546 7.91-7.908 7.91zm4.31-6.017c-.232-.117-1.373-.674-1.585-.751-.212-.079-.367-.117-.522.117-.155.233-.6.751-.737.906-.137.155-.271.174-.504.058-.232-.117-.978-.36-1.866-1.146-.69-.615-1.155-1.373-1.289-1.606-.136-.233-.015-.36.102-.476.104-.103.232-.271.347-.406.117-.137.155-.233.233-.388.078-.155.039-.291-.02-.408-.057-.117-.521-1.254-.713-1.718-.188-.451-.378-.392-.522-.4-.135-.007-.291-.007-.447-.007-.155 0-.408.058-.622.291-.213.233-.812.793-.812 1.931s.832 2.244.949 2.4c.117.155 1.638 2.48 3.965 3.385.555.239.987.381 1.326.487.557.177 1.065.153 1.467.093.448-.066 1.372-.561 1.564-1.104.193-.542.193-1.007.136-1.104-.057-.097-.207-.155-.432-.272z"/></svg>
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