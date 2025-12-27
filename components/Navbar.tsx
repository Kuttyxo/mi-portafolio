"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { 
  Home, 
  Cpu, 
  FolderGit2, 
  Briefcase, 
  Mail, 
  Menu, 
  X, 
  ChevronRight 
} from "lucide-react";

const navItems = [
  { name: "_home", label: "Inicio", path: "#", icon: <Home size={16} /> },
  { name: "_stack", label: "Skills", path: "#skills", icon: <Cpu size={16} /> },
  { name: "_work", label: "Proyectos", path: "#projects", icon: <FolderGit2 size={16} /> },
  { name: "_career", label: "Experiencia", path: "#experience", icon: <Briefcase size={16} /> },
];

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [active, setActive] = useState("_home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, type: "spring", bounce: 0.4 }}
      className="fixed top-4 md:top-6 inset-x-0 z-50 flex flex-col items-center px-4 pointer-events-none"
    >
      {/* === DOCK PRINCIPAL === */}
      <div className="pointer-events-auto relative flex items-center justify-between gap-2 p-2 rounded-2xl bg-black/80 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/50 ring-1 ring-white/5 w-full max-w-sm md:max-w-fit transition-all duration-300">
        
        {/* 1. LOGO (Izquierda) */}
        <Link 
          href="/" 
          onClick={() => setIsMobileMenuOpen(false)}
          className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-neutral-800 to-black border border-white/5 group overflow-hidden relative shrink-0"
        >
           <div className="absolute inset-0 bg-kutty-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
           <Image 
             src="/logo.jpg" 
             alt="KD"
             width={24}
             height={24}
             className="object-contain opacity-80 group-hover:scale-110 transition-transform duration-300"
           />
        </Link>

        {/* 2. BARRA CENTRAL (SOLO MÓVIL) - Rellena el espacio vacío */}
        <div className="flex md:hidden flex-1 justify-center px-2">
           <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 w-full justify-center shadow-inner">
              <span className="text-green-500 text-[10px]">➜</span>
              <span className="text-neutral-400 text-xs font-mono tracking-wide">~/portfolio</span>
              {/* Cursor parpadeante estilo terminal */}
              <span className="w-1.5 h-3 bg-kutty-primary animate-pulse" />
           </div>
        </div>

        {/* 3. NAVEGACIÓN DESKTOP (SOLO PC) */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setActive(item.name)}
              onMouseEnter={() => setHovered(item.name)}
              onMouseLeave={() => setHovered(null)}
              className="relative px-4 py-2 text-sm font-mono transition-colors duration-300"
            >
              {hovered === item.name && (
                <motion.div
                  layoutId="nav-hover"
                  className="absolute inset-0 bg-white/10 rounded-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              
              {active === item.name && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-kutty-primary rounded-full shadow-[0_0_8px_#A649BF]"
                />
              )}

              <span className={`relative z-10 flex items-center gap-2 ${active === item.name ? "text-white" : "text-neutral-400 hover:text-white"}`}>
                 {item.icon}
                 <span>{item.name}</span>
              </span>
            </Link>
          ))}
        </nav>

        {/* SEPARADOR DESKTOP */}
        <div className="hidden md:block h-6 w-[1px] bg-white/10 mx-2" />

        {/* 4. DERECHA (Status PC / Menu Móvil) */}
        <div className="flex items-center gap-3 shrink-0">
            {/* Status (Solo PC) */}
            <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono text-green-400 bg-green-500/10 px-2 py-1 rounded border border-green-500/20">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                </span>
                SYS:ONLINE
            </div>

            {/* Contacto (Solo PC) */}
            <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black text-xs font-bold font-mono hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                <Mail size={14} />
                <span>CONTACT.sh</span>
            </button>

            {/* Botón Hamburguesa (Solo Móvil) */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white active:scale-95 transition-all hover:bg-white/10"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
        </div>
      </div>

      {/* === MENÚ DESPLEGABLE MÓVIL === */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-auto mt-2 w-full max-w-sm rounded-2xl bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 p-2 shadow-2xl ring-1 ring-white/5 md:hidden overflow-hidden"
          >
             <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={() => {
                      setActive(item.name);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`
                      group flex items-center justify-between px-4 py-3 rounded-xl transition-all
                      ${active === item.name 
                        ? "bg-white/10 text-white border border-white/10" 
                        : "text-neutral-400 hover:bg-white/5 hover:text-white border border-transparent"}
                    `}
                  >
                    <div className="flex items-center gap-3 font-mono text-sm">
                      <span className={`${active === item.name ? "text-kutty-primary" : "text-neutral-500 group-hover:text-white"}`}>
                        {item.icon}
                      </span>
                      {item.name}
                    </div>
                    <ChevronRight size={14} className={`opacity-0 -translate-x-2 transition-all ${active === item.name ? "opacity-100 translate-x-0" : "group-hover:opacity-50 group-hover:translate-x-0"}`} />
                  </Link>
                ))}
                
                <div className="h-[1px] bg-white/10 my-1 mx-2" />

                <button className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-kutty-primary/20 text-kutty-primary text-xs font-bold font-mono border border-kutty-primary/50 hover:bg-kutty-primary/30 transition-colors">
                  <Mail size={14} />
                  EJECUTAR CONTACT.sh
                </button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
}