import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: MapPin, label: "Ubicación", value: "Asunción, Paraguay" },
  { icon: Phone, label: "Teléfono", value: "+595 21 123 456" },
  { icon: Mail, label: "Email", value: "contacto@estudiofotografico.com.py" },
  { icon: Clock, label: "Horario", value: "Lun-Vie 9:00-18:00" }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor, completa todos los campos obligatorios.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "¡Mensaje enviado!",
      description: "Gracias por tu interés. Te contactaré pronto.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Nuestros <span className="text-golden">Servicios</span>
              </h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Nos especializamos en servicios fotográficos profesionales de alta calidad para empresas e instituciones.
              </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Información de Contacto</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-golden/10 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-golden" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.label}</h4>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Info */}
            <Card className="p-6 mt-8 bg-card">
              <h4 className="text-xl font-bold text-foreground mb-4">Nuestros Estándares</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-golden mr-2">•</span>
                  Más de 12 años de experiencia profesional certificada
                </li>
                <li className="flex items-start">
                  <span className="text-golden mr-2">•</span>
                  Equipamiento profesional de última generación
                </li>
                <li className="flex items-start">
                  <span className="text-golden mr-2">•</span>
                  Entrega puntual y procesos estandarizados
                </li>
                <li className="flex items-start">
                  <span className="text-golden mr-2">•</span>
                  Presupuestos transparentes y competitivos
                </li>
              </ul>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-card">
            <h3 className="text-2xl font-bold text-foreground mb-6">Envíame un Mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-foreground">Nombre *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone" className="text-foreground">Teléfono</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1"
                    placeholder="+34 600 123 456"
                  />
                </div>
                <div>
                  <Label htmlFor="service" className="text-foreground">Tipo de Servicio</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="mt-1 w-full px-3 py-2 bg-background border border-input rounded-md focus:ring-2 focus:ring-ring focus:border-transparent"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="retratos">Retratos Corporativos</option>
                    <option value="bodas">Eventos Institucionales</option>
                    <option value="eventos">Fotografía Arquitectónica</option>
                    <option value="productos">Fotografía de Productos</option>
                    <option value="otros">Otros</option>
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground">Mensaje *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-1"
                  rows={5}
                  placeholder="Describa los requerimientos de su proyecto, fechas programadas, ubicación y especificaciones técnicas necesarias..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-golden hover:bg-golden-dark text-primary font-semibold py-3 transition-colors duration-300"
              >
                Enviar Mensaje
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;