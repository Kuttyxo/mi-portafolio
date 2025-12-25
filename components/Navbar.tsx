// src/components/Navbar.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Títulos basados en tu CV para la navegación
const navItems = [
  { name: "Inicio", path: "#home" },
  { name: "Skills", path: "#skills" }, // Para poner Docker, Java, C++, Wireshark [cite: 12, 14, 15]
  { name: "Proyectos", path: "#projects" },
  { name: "Experiencia", path: "#experience" }, // Tu exp en Una Gran Avenida [cite: 22]
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4"
    >
      {/* Fondo: Usamos tu color dark (#3B2D59) con mucha transparencia para el efecto vidrio.
         Borde: Usamos tu color primary (#A649BF) muy sutil.
      */}
      <div className="flex w-full max-w-4xl items-center justify-between rounded-full border border-kutty-primary/20 bg-kutty-dark/60 px-6 py-3 backdrop-blur-xl shadow-2xl shadow-kutty-secondary/20">
        
        {/* LOGO KUTTYDEV */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-kutty-teal group-hover:border-kutty-primary transition-colors">
            {/* Asegúrate de que la imagen esté en /public/logo.jpg */}
            <Image 
              src="/logo.jpeg" 
              alt="KuttyDev Logo" 
              fill 
              className="object-cover"
            />
          </div>
          <span className="text-xl font-bold text-kutty-light tracking-tight">
            Kutty<span className="text-kutty-primary">Dev</span>
          </span>
        </Link>

        {/* Links Desktop */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-sm font-medium text-gray-300 hover:text-kutty-primary transition-colors relative group"
            >
              {item.name}
              {/* Pequeño punto brillante al hacer hover */}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-kutty-teal transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Botón CTA */}
        <button className="hidden sm:block rounded-full bg-gradient-to-r from-kutty-primary to-kutty-secondary px-5 py-2 text-sm font-bold text-white shadow-lg shadow-purple-500/25 transition-transform hover:scale-105 hover:shadow-purple-500/40 active:scale-95">
          Contactar
        </button>
      </div>
    </motion.nav>
  );
}