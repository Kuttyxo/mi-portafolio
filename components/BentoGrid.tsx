"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SpotlightCard from "./SpotlightCard";
import { 
  Github, 
  Linkedin, 
  MapPin, 
  Terminal,
  Download,
  Cpu,
  Globe
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

// Datos del Tech Stack con colores personalizados para cada uno
const techStack = [
  { name: "Docker", color: "border-blue-500 text-blue-400 bg-blue-500/10" },
  { name: "Next.js", color: "border-white text-white bg-white/10" },
  { name: "Python", color: "border-yellow-400 text-yellow-300 bg-yellow-400/10" },
  { name: "SQL", color: "border-orange-500 text-orange-400 bg-orange-500/10" },
  { name: "Java", color: "border-red-500 text-red-400 bg-red-500/10" },
  { name: "C++", color: "border-blue-700 text-blue-300 bg-blue-700/10" },
  { name: "Wireshark", color: "border-cyan-500 text-cyan-400 bg-cyan-500/10" },
  { name: "Burp Suite", color: "border-orange-600 text-orange-500 bg-orange-600/10" },
];

export default function BentoGrid() {
  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto max-w-7xl"
    >
      {/* Grid Layout Principal */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto">
        
        {/* === CAJA 1: PERFIL PRINCIPAL === */}
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 row-span-1 md:row-span-2">
          <SpotlightCard className="h-full p-6 md:p-10 flex flex-col justify-between group relative overflow-hidden min-h-[350px]">
             <div className="absolute inset-0 bg-gradient-to-br from-kutty-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             <div className="space-y-4 z-10">
               <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400 backdrop-blur-sm">
                 <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Open to Work
               </div>
               
               <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl leading-tight">
                 Cristóbal
                 <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-kutty-primary to-kutty-teal animate-gradient pb-2">
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
  
        {/* === CAJA 2: TECH STACK (MEJORADO) === */}
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-1">
          <SpotlightCard className="h-full p-6 flex flex-col gap-6 min-h-[280px]">
            <h3 className="flex items-center gap-2 text-sm font-bold text-neutral-400 uppercase tracking-wider">
              <Cpu size={16} className="text-kutty-primary"/> Tech Stack
            </h3>
            
            {/* Grid de tecnologías más estético */}
            <div className="flex flex-wrap content-start gap-2">
              {techStack.map((tech) => (
                <span 
                  key={tech.name} 
                  className={`
                    px-3 py-1.5 text-xs font-medium rounded-lg border backdrop-blur-md transition-all duration-300
                    hover:scale-105 cursor-default
                    ${tech.color} border-opacity-20 hover:border-opacity-100
                  `}
                >
                  {tech.name}
                </span>
              ))}
            </div>

            {/* Decoración extra visual */}
            <div className="mt-auto pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-[10px] text-gray-500 font-mono">
                    <Terminal size={12} />
                    <span>system checking... OK</span>
                </div>
            </div>
          </SpotlightCard>
        </motion.div>
  
        {/* === CAJA 3: UBICACIÓN (ARREGLADA) === */}
        <motion.div variants={itemVariants} className="col-span-1">
          <SpotlightCard className="h-full min-h-[280px] relative flex items-center justify-center overflow-hidden bg-black">
              
              {/* IMAGEN DE FONDO CORREGIDA:
                  1. bg-[length:140%] -> Hace el mapa un poco más grande para que se vea mejor Sudamérica.
                  2. bg-[center_30%] -> Mueve el mapa para centrar Chile verticalmente.
                  3. mask-image -> Crea el degradado negro en los bordes para que no se vea cortado.
              */}
              <div 
                className="absolute inset-0 opacity-60 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-no-repeat grayscale mix-blend-screen"
                style={{
                    backgroundPosition: "center 40%", // Ajusta esto si Chile sigue muy arriba/abajo
                    backgroundSize: "160%",           // Zoom del mapa
                    maskImage: "radial-gradient(circle, black 40%, transparent 100%)", // La magia del desvanecido
                    WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 100%)"
                }}
              />
              
              <div className="relative z-10 flex flex-col items-center gap-3 animate-float">
                 <div className="relative flex items-center justify-center h-16 w-16 rounded-full border border-kutty-teal/30 bg-black/60 backdrop-blur-md shadow-[0_0_25px_rgba(13,104,140,0.6)] group">
                   <MapPin className="text-kutty-teal drop-shadow-lg group-hover:text-white transition-colors" size={28} />
                   <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-kutty-teal opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
                    </span>
                 </div>
                 
                 <div className="text-center bg-black/50 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10 shadow-xl">
                   <p className="text-base font-bold text-white flex items-center justify-center gap-1">
                      Santiago <span className="text-kutty-primary">.CL</span>
                   </p>
                   <div className="flex items-center justify-center gap-1 text-[10px] text-neutral-400 mt-1">
                      <Globe size={10} />
                      <span className="uppercase tracking-widest">Disponible Remoto</span>
                   </div>
                 </div>
              </div>
          </SpotlightCard>
        </motion.div>
  
        {/* === CAJA 4: LOGO === */}
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-2">
          <SpotlightCard className="h-full min-h-[200px] bg-gradient-to-br from-[#1a1a2e] to-black p-0 flex items-center justify-center relative group overflow-hidden">
              {/* Fondo abstracto animado sutil */}
              <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:animate-shine" />
              </div>

              <div className="relative h-40 w-40 md:h-48 md:w-48 transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
                 <Image 
                   src="/logo.jpg" 
                   alt="KuttyDev Logo"
                   fill
                   className="object-contain drop-shadow-[0_0_25px_rgba(166,73,191,0.3)]"
                 />
              </div>
              <div className="absolute bottom-6 right-6 text-xs font-mono text-neutral-600 group-hover:text-kutty-primary transition-colors">
                KUTTYDEV v1.0
              </div>
          </SpotlightCard>
        </motion.div>
  
      </div>
    </motion.section>
  );
}

// Helper para botones sociales
function SocialBtn({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-300 transition-all hover:border-kutty-primary hover:bg-kutty-primary hover:text-white hover:scale-110 hover:shadow-[0_0_15px_rgba(166,73,191,0.5)]"
      title={label}
    >
      {icon}
    </a>
  );
}