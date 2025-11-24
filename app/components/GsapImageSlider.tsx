"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const AngularImageSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const images = [
    "/camara1.jpeg",
    "/camara2.jpeg",
    "/camara3.jpeg",
    "/camara4.jpeg",
    "/camara8.jpeg",
    "/camara6.jpeg",
    "/camara7.jpeg",
  ];

  const totalImages = images.length;

  const updateSlider = useCallback(
    (newIndex: number) => {
      const container = containerRef.current;
      if (!container) return;

      const cards = container.querySelectorAll<HTMLElement>(".card");
      const centerIndex = Math.floor(cards.length / 2);

      cards.forEach((card, i) => {
        const offset = (i - centerIndex + newIndex + totalImages) % totalImages;
        const normalizedOffset =
          offset > totalImages / 2 ? offset - totalImages : offset;

        // Calcular posición y escala basado en la distancia del centro
        const distance = Math.abs(normalizedOffset);
        const scale = Math.min(1.2, 0.75 + distance * 0.15); // Laterales más grandes
        const zIndex = distance * 10; // Laterales al frente
        const opacity = Math.max(0.4, 1 - distance * 0.2);
        const rotateY = normalizedOffset * -21; // Rotación invertida
        const translateX = normalizedOffset * 205; // Separación horizontal
        const translateZ = distance * 200; // Profundidad invertida - laterales al frente

        gsap.to(card, {
          duration: 0.6,
          x: translateX,
          scale: scale,
          rotationY: rotateY,
          z: translateZ,
          opacity: opacity,
          zIndex: zIndex,
          ease: "power2.out",
        });
      });
    },
    [totalImages]
  );

  useEffect(() => {
    // Configurar GSAP en el montaje inicial (solo si el ref existe)
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll<HTMLElement>(".card");
    cards.forEach((card) => gsap.set(card, { transformStyle: "preserve-3d" }));
    updateSlider(currentIndex);
  }, [updateSlider, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Slider Container */}
      <div className="relative w-full h-[550px] flex items-center justify-center perspective-[3000px] z-20">
        <div
          ref={containerRef}
          className="relative w-full h-full flex items-center justify-center z-50"
          style={{ transformStyle: "preserve-3d" }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="card absolute w-64 h-96 cursor-pointer"
              onClick={() => goToSlide(index)}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gray-800">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover z-20"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-50 bg-white/30 hover:bg-white/40 backdrop-blur-sm text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-50 bg-white/30 hover:bg-white/40 backdrop-blur-sm text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20"
        >
          →
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex gap-2 mt-12 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Features */}
      <div className="grid grid-cols-3 gap-12 mt-20 max-w-6xl px-8 z-10">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center"
        >
          <h3 className="text-white text-xl font-semibold mb-3">
            Lightning-Fast
            <br />
            Image Generation
          </h3>
          <p className="text-gray-400 text-sm">
            Type what you imagine, hit enter, and watch AI bring it to life in
            moments.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center"
        >
          <h3 className="text-white text-xl font-semibold mb-3">
            Multiple Styles &
            <br />
            Customization
          </h3>
          <p className="text-gray-400 text-sm">
            Pick a style and fine-tune details like color, lighting, and mood.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center"
        >
          <h3 className="text-white text-xl font-semibold mb-3">
            High-Resolution
            <br />
            Downloads
          </h3>
          <p className="text-gray-400 text-sm">
            Export your creations in high-quality resolution for print, web, or
            social media.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AngularImageSlider;
