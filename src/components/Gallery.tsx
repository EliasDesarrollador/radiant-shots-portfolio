import { useState } from "react";
import { Card } from "@/components/ui/card";
import portraitImage from "@/assets/portrait-1.jpg";
import weddingImage from "@/assets/wedding-1.jpg";
import lapachosImage from "@/assets/lapachos-asuncion.jpg";
import asuncionImage from "@/assets/asuncion-.jpg";
import palaciodelopezImage from "@/assets/palaciodelopez.jpg";

const categories = [
  { id: 'todos', label: 'Todos' },
  { id: 'retratos', label: 'Retratos' },
  { id: 'bodas', label: 'Bodas' },
  { id: 'paisajes', label: 'Paisajes' }
];

const galleryItems = [
    { id: 3, category: 'paisajes', image: lapachosImage, title: 'Lapachos de Asunción', description: 'La belleza primaveral de los lapachos rosados' },
  { id: 4, category: 'retratos', image: portraitImage, title: 'Expresión Natural', description: 'Retrato espontáneo y genuino' },
  { id: 5, category: 'bodas', image: weddingImage, title: 'Ceremonia Elegante', description: 'Documentando el día más especial' },
  { id: 6, category: 'paisajes', image: lapachosImage, title: 'Primavera Urbana', description: 'Los lapachos transformando la ciudad' },
  { id: 7, category: 'paisajes', image: asuncionImage, title: 'Asunción', description: 'Paisaje urbano en la ciudad de Asunción' },
  { id: 8, category: 'paisajes', image: palaciodelopezImage, title: 'Palacio de López', description: 'Vista del emblemático Palacio de López' },

];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('todos');

  const filteredItems = activeCategory === 'todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="galeria" className="py-20 bg-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Mi <span className="text-golden">Galeria</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Una selección de mis trabajos más representativos.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-golden text-primary shadow-golden'
                  : 'bg-background text-foreground hover:bg-golden/10 hover:text-golden'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden bg-card hover:shadow-golden transition-all duration-500 transform hover:scale-105"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button 
            className="bg-golden hover:bg-golden-dark text-primary font-semibold px-8 py-3 rounded-full transition-colors duration-300 shadow-soft hover:shadow-golden"
            onClick={() => {
              const section = document.getElementById('carrusel');
              if (section) section.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Ver Más Trabajos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;