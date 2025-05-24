import React from "react";
import { motion } from "framer-motion";
import { Award, Heart, Shield, Smile } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description:
        "We source only the finest fabrics and materials for our collections.",
    },
    {
      icon: Heart,
      title: "Handpicked Designs",
      description:
        "Each piece is carefully selected to ensure the latest trends and timeless elegance.",
    },
    {
      icon: Shield,
      title: "Trusted Since 1984",
      description:
        "Over three decades of serving customers with authentic and beautiful traditional wear.",
    },
    {
      icon: Smile,
      title: "Customer Satisfaction",
      description:
        "Our priority is your happiness with every purchase you make.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-rose-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-rose-800 mb-4">
            Why Choose Kabra Emporium
          </h2>
          <div className="w-20 h-1 bg-rose-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We take pride in offering the most exquisite collection of sarees
            and traditional wear, combining quality craftsmanship with
            exceptional customer service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon className="text-rose-700 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {title}
              </h3>
              <p className="text-gray-600">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
