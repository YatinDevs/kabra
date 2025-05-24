import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", path: "#home" },
    { label: "Categories", path: "#categories" },
    { label: "About", path: "#about" },
    { label: "Contact", path: "#contact" },
  ];

  const categories = [
    "Designer Sarees",
    "Silk Sarees",
    "Grand Wedding Sarees",
    "Paithani Sarees",
    "Yeola Paithani Sarees",
    "Designer Lehengas",
    "Party Wear Sarees",
    "Kanchipuram Sarees",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () =>
    setOpenDropdown(openDropdown === "categories" ? null : "categories");

  return (
    <header className="fixed w-full z-50">
      {/* Top Contact Bar */}
      <div
        className={`bg-gradient-to-r from-rose-800 to-pink-900 text-white text-sm transition-all duration-300 ${
          scrolled ? "h-0 overflow-hidden" : "h-10"
        }`}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a
              href="mailto:kabraemporium1984@gmail.com"
              className="flex items-center hover:text-rose-200 transition-colors"
            >
              <Mail className="h-4 w-4 mr-1" />
              kabraemporium1984@gmail.com
            </a>
            <a
              href="tel:+919763404340"
              className="flex items-center hover:text-rose-200 transition-colors"
            >
              <Phone className="h-4 w-4 mr-1" />
              +91 97634 04340
            </a>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>Mon-Sun: 10:00 AM - 8:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`bg-white shadow-md transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-bold text-rose-800">
              Kabra Emporium
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.label === "Categories" ? (
                  <div className="relative group">
                    <button
                      onClick={toggleDropdown}
                      className="flex items-center text-gray-800 hover:text-rose-700 transition-colors"
                    >
                      {item.label}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform ${
                          openDropdown === "categories" ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {openDropdown === "categories" && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50"
                        >
                          <div className="py-1">
                            {categories.map((category) => (
                              <a
                                key={category}
                                href={`#${category
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`}
                                className="block px-4 py-2 text-gray-800 hover:bg-rose-50 hover:text-rose-700 transition-colors"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {category}
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    href={item.path}
                    className="text-gray-800 hover:text-rose-700 transition-colors"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-800 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-0 bg-white z-40 lg:hidden"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex justify-between items-center mb-8">
                <a href="#home" className="text-2xl font-bold text-rose-800">
                  Kabra Emporium
                </a>
                <button onClick={toggleMenu} className="text-gray-800">
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    className="border-b border-gray-100 pb-2"
                  >
                    {item.label === "Categories" ? (
                      <>
                        <button
                          onClick={toggleDropdown}
                          className="flex items-center justify-between w-full py-2 text-gray-800"
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={`h-5 w-5 transition-transform ${
                              openDropdown === "categories" ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {openDropdown === "categories" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 overflow-hidden"
                          >
                            <div className="py-2 space-y-2">
                              {categories.map((category) => (
                                <a
                                  key={category}
                                  href={`#${category
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`}
                                  className="block py-2 text-gray-600 hover:text-rose-700 transition-colors"
                                  onClick={toggleMenu}
                                >
                                  {category}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </>
                    ) : (
                      <a
                        href={item.path}
                        className="block py-2 text-gray-800 hover:text-rose-700 transition-colors"
                        onClick={toggleMenu}
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-rose-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Contact Us</h3>
                <a
                  href="mailto:kabraemporium1984@gmail.com"
                  className="flex items-center text-gray-700 mb-2"
                >
                  <Mail className="h-5 w-5 mr-2 text-rose-700" />
                  kabraemporium1984@gmail.com
                </a>
                <a
                  href="tel:+919763404340"
                  className="flex items-center text-gray-700 mb-2"
                >
                  <Phone className="h-5 w-5 mr-2 text-rose-700" />
                  +91 97634 04340
                </a>
                <div className="flex items-center text-gray-700">
                  <MapPin className="h-5 w-5 mr-2 text-rose-700" />
                  <span>Old Pandit Colony, Nashik</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
