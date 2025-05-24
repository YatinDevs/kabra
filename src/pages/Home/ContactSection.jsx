import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-rose-800 mb-4">
            Visit Our Store
          </h2>
          <div className="w-20 h-1 bg-rose-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We'd love to hear from you! Visit our store or get in touch with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-rose-700 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Our Address</h4>
                  <p className="text-gray-600">
                    PLOT NO -380/09, 657/B/380, PADMAVISHWA CENTER, OLD PANDIT
                    COLONY, NASHIK
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-rose-700 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Email Us</h4>
                  <a
                    href="mailto:kabraemporium1984@gmail.com"
                    className="text-gray-600 hover:text-rose-700 transition-colors"
                  >
                    kabraemporium1984@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-rose-700 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Call Us</h4>
                  <div className="space-y-1">
                    <a
                      href="tel:+919763404340"
                      className="block text-gray-600 hover:text-rose-700 transition-colors"
                    >
                      +91 97634 04340 (Kushal Kabra)
                    </a>
                    <a
                      href="tel:+919763404340"
                      className="block text-gray-600 hover:text-rose-700 transition-colors"
                    >
                      +91 97634 04340 (Ram Pagare)
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Clock className="text-rose-700 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Opening Hours</h4>
                  <p className="text-gray-600">Mon-Sun: 10:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-rose-700 hover:bg-rose-800 text-white px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
