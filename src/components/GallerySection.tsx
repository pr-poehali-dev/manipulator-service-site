import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const galleryImages = [
  {
    id: 1,
    src: "https://cdn.poehali.dev/files/a0069340-5cf4-40de-a61d-ebb9c719be44.jpg",
    alt: "Манипулятор устанавливает стеновые панели на строительной площадке",
    category: "Монтаж",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1573037722164-32fa98a9f6b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Погрузка материалов манипулятором",
    category: "Погрузка",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1533231040102-5001bcb9dde7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Монтаж конструкции с помощью манипулятора",
    category: "Монтаж",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1551522375-9eb997de56dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Разгрузка строительных блоков",
    category: "Разгрузка",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1586536672467-5387a1207ff8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Эвакуация автомобиля",
    category: "Эвакуация",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Перевозка спецтехники",
    category: "Перевозка",
  },
];

const categories = [
  "Все",
  "Перевозка",
  "Погрузка",
  "Монтаж",
  "Разгрузка",
  "Эвакуация",
];

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("Все");

  const filteredImages =
    activeCategory === "Все"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="section bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-manipulator-primary">
            Наши работы
          </h2>
          <p className="text-lg text-manipulator-gray-dark max-w-3xl mx-auto">
            Фотографии выполненных нами работ по перевозке, погрузке и монтажу
            различных грузов
          </p>
        </div>

        {/* Фильтры категорий */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? "bg-manipulator-primary text-white"
                  : "bg-gray-100 text-manipulator-gray-dark hover:bg-gray-200"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Галерея изображений */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <AspectRatio ratio={4 / 3} className="bg-muted">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
              </AspectRatio>
              <div className="p-3 bg-white">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-manipulator-secondary text-manipulator-primary rounded-full">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
