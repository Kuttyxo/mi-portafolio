"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SpotlightCard from "./SpotlightCard.tsx";
import { 
  Github, 
  Linkedin, 
  MapPin, 
  Terminal, 
  ShieldCheck, 
  Download
} from "lucide-react";

// Variantes para la animación de entrada "en cascada"
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1 // Cada tarjeta tarda 0.1s más en aparecer
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function BentoGrid() {
  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto max-w-7xl"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2 auto-rows-[minmax(180px,auto)]">
        
        {/* === CAJA 1: PERFIL PRINCIPAL === */}
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 row-span-2">
          <SpotlightCard className="h-full p-6 md:p-10 flex flex-col justify-between group relative overflow-hidden">
             {/* Degradado de fondo al pasar el mouse */}
             <div className="absolute inset-0 bg-gradient-to-br from-kutty-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             <div className="space-y-4 z-10">
               <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400 backdrop-blur-sm">
                 <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Open to Work
               </div>
               
               <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                 Cristóbal <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-kutty-primary to-kutty-teal animate-gradient">
                   Rodríguez
                 </span>
               </h1>
               <p className="max-w-md text-base md:text-lg text-neutral-400 leading-relaxed">
                 Ingeniero Civil en Informática & Telecom. Fusiono la lógica del <strong className="text-gray-200">Backend</strong> con la protección de la <strong className="text-gray-200">Ciberseguridad</strong>.
               </p>
             </div>
  
             <div className="flex flex-wrap gap-3 mt-8 z-10">
                <SocialBtn icon={<Github size={20}/>} href="https://github.com" label="GitHub" />
                <SocialBtn icon={<Linkedin size={20}/>} href="https://linkedin.com" label="LinkedIn" />
                <button className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-black transition-all hover:scale-105 active:scale-95 hover:bg-gray-200">
                  <Download size={16} /> CV
                </button>
             </div>
          </SpotlightCard>
        </motion.div>
  
        {/* === CAJA 2: STACK TECNOLÓGICO === */}
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-1">
          <SpotlightCard className="h-full p-6 flex flex-col gap-4">
            <h3 className="flex items-center gap-2 text-sm font-medium text-neutral-400 uppercase tracking-wider">
              <Terminal size={14} className="text-kutty-primary"/> Tech Stack
            </h3>
            <div className="flex flex-wrap content-start gap-2">
              {["Docker", "Next.js", "Python", "SQL", "Java", "C++", "Wireshark", "Burp Suite"].map((tech) => (
                <span key={tech} className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1.5 text-xs font-medium text-neutral-300 transition-colors hover:border-kutty-teal/50 hover:bg-kutty-teal/10 hover:text-white cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>
  
        {/* === CAJA 3: UBICACIÓN === */}
        <motion.div variants={itemVariants} className="col-span-1">
          <SpotlightCard className="h-full min-h-[200px] relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-40 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-cover bg-center grayscale mix-blend-overlay" />
              
              <div className="relative z-10 flex flex-col items-center gap-3 animate-float">
                 <div className="relative flex items-center justify-center h-14 w-14 rounded-full border border-kutty-teal/30 bg-black/50 backdrop-blur-md shadow-[0_0_20px_rgba(13,104,140,0.4)]">
                   <MapPin className="text-kutty-teal" size={24} />
                 </div>
                 <div className="text-center bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-white/5">
                   <p className="text-sm font-bold text-white">Santiago, Chile</p>
                   <p className="text-[10px] text-neutral-400 uppercase tracking-widest">Disponible Remoto</p>
                 </div>
              </div>
          </SpotlightCard>
        </motion.div>
  
        {/* === CAJA 4: LOGO (TU MARCA) === */}
        <motion.div variants={itemVariants} className="col-span-1">
          <SpotlightCard className="h-full min-h-[200px] bg-gradient-to-br from-[#1a1a2e] to-black p-0 flex items-center justify-center relative group">
              {/* Imagen del Logo Real */}
              <div className="relative h-28 w-28 transition-transform duration-500 group-hover:scale-110">
                 {/* Reemplaza 'logo.jpg' con el nombre EXACTO de tu archivo en la carpeta public */}
                 <Image 
                   src="/logo.png" 
                   alt="KuttyDev Logo"
                   fill
                   className="object-contain drop-shadow-[0_0_15px_rgba(166,73,191,0.5)]"
                 />
              </div>
              <div className="absolute bottom-4 text-[10px] font-mono text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity">
                EST. 2025
              </div>
          </SpotlightCard>
        </motion.div>
  
        {/* === CAJA 5: SEGURIDAD (ECUALIZADOR ANIMADO) === */}
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-2">
          <SpotlightCard className="h-full p-6 flex flex-row items-center justify-between gap-6 overflow-hidden">
             <div className="flex flex-col justify-center gap-2 z-10">
               <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-900/20 flex items-center justify-center border border-green-500/20 mb-2">
                  <ShieldCheck className="text-green-500" size={20} />
               </div>
               <h3 className="text-lg md:text-xl font-bold text-white">
                 Seguridad Ofensiva
               </h3>
               <p className="text-xs md:text-sm text-neutral-400 max-w-[200px] leading-relaxed">
                 Análisis de tráfico, pentesting y hardening de infraestructuras críticas.
               </p>
             </div>
             
             {/* Barras animadas (CSS Keyframes o simple array) */}
             <div className="hidden sm:flex items-end gap-1 h-24 mask-linear-fade">
                {[50, 80, 40, 90, 30, 70, 45, 85, 60].map((h, i) => (
                  <motion.div 
                    key={i} 
                    className="w-2 md:w-3 bg-gradient-to-t from-kutty-dark to-kutty-teal rounded-t-sm"
                    animate={{ 
                      height: [`${h}%`, `${Math.max(20, h - 30)}%`, `${h}%`],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: i * 0.1,
                      ease: "easeInOut"
                    }}
                  />
                ))}
             </div>
          </SpotlightCard>
        </motion.div>
  
      </div>
    </motion.section>
  );
}

// Componente pequeño para botones sociales con tooltip simple
function SocialBtn({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-300 transition-all hover:border-kutty-primary hover:bg-kutty-primary hover:text-white"
      title={label}
    >
      {icon}
    </a>
  );
}