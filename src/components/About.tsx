import { Camera, Award, Users, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  { icon: Camera, number: "500+", label: "Sesiones Realizadas" },
  { icon: Award, number: "50+", label: "Premios Obtenidos" },
  { icon: Users, number: "300+", label: "Clientes Satisfechos" },
  { icon: Heart, number: "8+", label: "Años de Experiencia" }
];

const About = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Sobre <span className="text-golden">Mí</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                Soy un fotógrafo profesional con más de 8 años de experiencia capturando momentos únicos e irrepetibles. Mi pasión por la fotografía comenzó como un hobby y se convirtió en mi profesión cuando me di cuenta del poder que tienen las imágenes para contar historias.
              </p>
              <p>
                Mi estilo se caracteriza por la búsqueda de la luz natural, las composiciones elegantes y la capacidad de capturar emociones genuinas. Cada sesión es una oportunidad para crear arte junto a mis clientes.
              </p>
              <p>
                Especializado en retratos, bodas y fotografía de paisaje, mi objetivo es crear imágenes que no solo documenten un momento, sino que transmitan las emociones y la belleza de cada instante único.
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
            <h3 className="text-3xl font-bold text-foreground mb-8">Mi Filosofía</h3>
            <blockquote className="text-2xl italic text-muted-foreground leading-relaxed">
              "La fotografía es el arte de hacer visible lo invisible, de capturar no solo lo que vemos, sino lo que sentimos. Cada click del obturador es una oportunidad de crear algo eterno."
            </blockquote>
            <div className="w-24 h-1 bg-golden mx-auto mt-8"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;