import React, { useState, useEffect, useRef } from "react";
import portraitImage from "@/assets/portrait-1.jpg";
import weddingImage from "@/assets/wedding-1.jpg";
import palaciodelopezImage from "@/assets/palaciodelopez.jpg";
import asuncionImage from "@/assets/asuncion-.jpg";
import lapachosImage from "@/assets/lapachos-asuncion.jpg";

const carouselImages = [
  { src: portraitImage, alt: "Retrato", type: "portrait" },
  { src: weddingImage, alt: "Boda", type: "default" },
  { src: palaciodelopezImage, alt: "Palacio de López", type: "default" },
  { src: asuncionImage, alt: "Asunción", type: "default" },
  { src: lapachosImage, alt: "Lapachos Asunción", type: "default" },
];

const AUTOPLAY_INTERVAL = 6000;
const SLIDE_DURATION = 1600;

const Carousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const length = carouselImages.length;
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % length);
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [length]);

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${current * 100}%)`;
    }
  }, [current]);

  const prevSlide = () => setCurrent((current - 1 + length) % length);
  const nextSlide = () => setCurrent((current + 1) % length);

  return (
    <section id="carrusel" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
          Galería Extendida <span className="text-golden">Carrusel</span>
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-10">
          Más trabajos destacados en formato interactivo.
        </p>
        <div className="relative max-w-4xl mx-auto flex flex-col items-center">
          <div 
            className="overflow-hidden rounded-lg shadow-lg w-full h-[300px] md:h-[480px]"
            style={{position: 'relative'}}
          >
            <div
              ref={trackRef}
              className="flex w-full h-full transition-transform"
              style={{ transition: `transform ${SLIDE_DURATION}ms cubic-bezier(0.77,0,0.18,1)` }}
            >
              {carouselImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img.src}
                  alt={img.alt}
                  className={`min-w-full w-full h-full bg-black flex-shrink-0 flex-grow-0 ${img.type === 'portrait' ? 'object-cover object-top' : 'object-contain'}`}
                  style={img.type === 'portrait' ? { objectPosition: 'center 20%' } : {}}
                />
              ))}
            </div>
            <button onClick={prevSlide} aria-label="Anterior" className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-primary/80 hover:bg-golden text-golden hover:text-primary rounded-full p-2 shadow transition-colors z-10">
              &#8592;
            </button>
            <button onClick={nextSlide} aria-label="Siguiente" className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-primary/80 hover:bg-golden text-golden hover:text-primary rounded-full p-2 shadow transition-colors z-10">
              &#8594;
            </button>
          </div>
          <div className="flex gap-2 mt-4">
            {carouselImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2 w-2 rounded-full ${idx === current ? 'bg-golden' : 'bg-gray-400'}`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
