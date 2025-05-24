import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import {
  type1,
  type2,
  type3,
  type4,
  type5,
  type6,
  type7,
  type8,
} from "../../assets";

const categories = [
  {
    name: "Designer Sarees",
    description: "Elegant and contemporary designer sarees for all occasions",
    image: type2,
  },
  {
    name: "Silk Sarees",
    description:
      "Luxurious silk sarees with intricate designs and rich textures",
    image: type7,
  },
  {
    name: "Grand Wedding Sarees",
    description: "Opulent wedding sarees for the bride and family members",
    image: type3,
  },
  {
    name: "Paithani Sarees",
    description:
      "Authentic Maharashtrian Paithani sarees with traditional motifs",
    image: type5,
  },
  {
    name: "Yeola Paithani Sarees",
    description: "Handwoven Yeola Paithani sarees with pure zari work",
    image: type8,
  },
  {
    name: "Designer Lehengas",
    description: "Trendy designer lehengas for weddings and special occasions",
    image: type1,
  },
  {
    name: "Party Wear Sarees",
    description: "Glamorous sarees perfect for parties and evening events",
    image: type6,
  },
  {
    name: "Kanchipuram Sarees",
    description: "Traditional Kanchipuram silk sarees with temple borders",
    image: type4,
  },
];

const CategoriesSection = () => {
  return (
    <section id="categories" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-rose-800 mb-4">
            Our Collections
          </h2>
          <div className="w-20 h-1 bg-rose-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore our wide range of exquisite sarees and traditional wear for
            every occasion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              id={category.name.toLowerCase().replace(/\s+/g, "-")}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: Math.floor(index / 4) * 0.2 + (index % 4) * 0.1,
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-sm mb-4">{category.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-sm font-semibold text-white hover:text-rose-200 transition-colors"
                >
                  Enquire Now
                  <ChevronRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
