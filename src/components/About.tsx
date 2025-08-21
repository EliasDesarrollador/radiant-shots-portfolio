import { Camera, Award, Users, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  { icon: Camera, number: "1000+", label: "Proyectos Completados" },
  { icon: Award, number: "25+", label: "Reconocimientos" },
  { icon: Users, number: "150+", label: "Clientes Corporativos" },
  { icon: Heart, number: "12+", label: "Años de Trayectoria" }
];

const About = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Sobre <span className="text-golden">Nosotros</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                Con más de una década de experiencia en el sector fotográfico, nuestro estudio se ha consolidado como referente en servicios de fotografía profesional de alta gama. Especializados en retratos corporativos, eventos institucionales y documentación arquitectónica.
              </p>
              <p>
                Nuestro enfoque técnico y artístico se fundamenta en el dominio de la iluminación profesional, la composición clásica y el uso de equipamiento de última generación. Cada proyecto es abordado con la rigurosidad y profesionalismo que nuestros clientes corporativos e institucionales requieren.
              </p>
              <p>
                Ofrecemos servicios integrales de fotografía que incluyen sesiones en estudio, locaciones externas, post-producción avanzada y entrega en formatos digitales de alta resolución, garantizando resultados que satisfacen los más altos estándares de calidad profesional.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-golden transition-all duration-300 bg-card">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-golden/10 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-golden" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">{stat.number}</h3>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-8">Filosofía Profesional</h3>
            <blockquote className="text-2xl italic text-muted-foreground leading-relaxed">
              "La excelencia fotográfica se alcanza mediante la combinación de técnica depurada, visión artística y compromiso profesional. Cada imagen debe reflejar no solo competencia técnica, sino también integridad artística y respeto por el cliente."
            </blockquote>
            <div className="w-24 h-1 bg-golden mx-auto mt-8"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;