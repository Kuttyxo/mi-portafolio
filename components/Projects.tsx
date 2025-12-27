"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ExternalLink, Github, Zap, ShieldCheck, BarChart3, Users, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:text-center max-w-3xl mx-auto"
        >
          <h2 className="text-sm font-bold tracking-widest text-kutty-teal uppercase mb-3">
            Flagship Project
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Innovación en Desarrollo
          </h3>
          <p className="text-neutral-400 text-lg">
            Un marketplace de última generación que automatiza la conexión entre marcas y creadores mediante <span className="text-white font-medium">DevOps</span> y <span className="text-white font-medium">Análisis de Datos</span>.
          </p>
        </motion.div>

        {/* === BRAND CONNECT: FEATURE CARD === */}
        <BrandConnectCard />

      </div>
    </section>
  );
}

function BrandConnectCard() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      className="group relative w-full rounded-[2.5rem] border border-white/10 bg-[#0f0a15] overflow-hidden"
    >
      
      {/* 1. BRAND BACKGROUND: Gradiente con los colores de la marca (#2A2859) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2A2859]/40 via-transparent to-black z-0" />
      
      {/* 2. SPOTLIGHT EFFECT: Naranja de la marca (#F2994B) */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px,
              rgba(242, 153, 75, 0.1),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 md:p-12 lg:p-16">
        
        {/* === COLUMNA IZQUIERDA: INFORMACIÓN === */}
        <div className="flex flex-col justify-center gap-6">
          
          {/* Logo / Badge del Proyecto */}
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#F2994B] to-[#F25E5E] flex items-center justify-center shadow-lg shadow-orange-500/20">
               {/* Icono infinito abstracto simulando el logo */}
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white w-8 h-8">
                 <path d="M12 12c-2-2.5-5-2.5-7 0s-2.5 5 0 7 5 2.5 7 0z" />
                 <path d="M12 12c2-2.5 5-2.5 7 0s2.5 5 0 7-5 2.5-7 0z" />
               </svg>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Brand<span className="text-[#F2994B]">Connect</span>
              </h1>
              <p className="text-sm font-mono text-neutral-400 tracking-wide uppercase">
                Marketplace Automatizado
              </p>
            </div>
          </div>

          <p className="text-neutral-300 text-lg leading-relaxed">
            Plataforma que disrumpe el mercado de agencias tradicionales mediante automatización. 
            Conecta marcas con micro-influencers verificados, gestionando campañas, pagos y métricas de ROI en tiempo real.
          </p>

          {/* Features Grid (Iconos) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <FeatureItem icon={<ShieldCheck size={18} />} text="Verificación de Audiencia vía API" color="text-green-400" />
            <FeatureItem icon={<BarChart3 size={18} />} text="Dashboards de ROI en Tiempo Real" color="text-blue-400" />
            <FeatureItem icon={<Zap size={18} />} text="Gestión Automatizada DevOps" color="text-yellow-400" />
            <FeatureItem icon={<Users size={18} />} text="Pool de Talentos Verificados" color="text-purple-400" />
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {["Next.js", "React", "Node.js", "DevOps", "APIs", "Payment Gateways"].map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-neutral-400">
                {tech}
              </span>
            ))}
          </div>

          {/* Botones de Acción (Estilo Brand) */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a 
              href="https://brand-connect-frontend.vercel.app" 
              target="_blank"
              className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F2994B] text-[#2A2859] font-bold transition-all hover:bg-[#ffad66] hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/20"
            >
              <ExternalLink size={18} />
              Ver Demo en Vivo
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            
            <a 
              href="https://github.com/Kuttyxo/brand-connect" 
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium transition-all hover:bg-white/10 hover:border-white/30"
            >
              <Github size={18} />
              Código Fuente
            </a>
          </div>
        </div>

        {/* === COLUMNA DERECHA: VISUAL (DASHBOARD MOCKUP) === */}
        <div className="relative flex items-center justify-center min-h-[300px] lg:min-h-full rounded-2xl bg-[#0a0a0a]/50 border border-white/5 overflow-hidden group-hover:border-[#F2994B]/30 transition-colors">
            
            {/* Fondo de Grilla */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
            <div className="absolute inset-0 bg-grid-white/[0.05]" />

            {/* Mockup Abstracto de la App */}
            <div className="relative w-full max-w-[350px] aspect-[4/5] bg-[#1a1a2e] rounded-xl border border-white/10 shadow-2xl overflow-hidden transform transition-transform duration-700 group-hover:rotate-1 group-hover:scale-105">
                
                {/* Mockup Header */}
                <div className="h-12 border-b border-white/10 flex items-center justify-between px-4 bg-[#2A2859]">
                   <div className="w-20 h-2 rounded-full bg-white/20" />
                   <div className="flex gap-2">
                     <div className="w-2 h-2 rounded-full bg-red-500" />
                     <div className="w-2 h-2 rounded-full bg-yellow-500" />
                     <div className="w-2 h-2 rounded-full bg-green-500" />
                   </div>
                </div>

                {/* Mockup Body */}
                <div className="p-6 space-y-4">
                   {/* Welcome Msg */}
                   <div className="space-y-2">
                      <div className="w-1/2 h-4 rounded bg-white/10" />
                      <div className="w-3/4 h-3 rounded bg-white/5" />
                   </div>

                   {/* Stats Cards Row */}
                   <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-lg bg-[#F2994B]/10 border border-[#F2994B]/20">
                         <div className="text-[#F2994B] text-xs font-bold mb-1">Campañas</div>
                         <div className="text-white text-xl font-bold">12</div>
                      </div>
                      <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                         <div className="text-green-400 text-xs font-bold mb-1">ROI Actual</div>
                         <div className="text-white text-xl font-bold">+120%</div>
                      </div>
                   </div>

                   {/* Influencer List Mock */}
                   <div className="space-y-3 pt-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5">
                           <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500" />
                           <div className="flex-1 space-y-1">
                              <div className="w-20 h-2 rounded bg-white/20" />
                              <div className="w-12 h-1.5 rounded bg-white/10" />
                           </div>
                           <div className="w-4 h-4 rounded-full border border-green-500 bg-green-500/20" />
                        </div>
                      ))}
                   </div>
                   
                   {/* Button Mock */}
                   <div className="w-full h-8 rounded-lg bg-[#F2994B] opacity-80 mt-4" />
                </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-6 right-6 px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-[#F2994B]/50 text-[#F2994B] text-xs font-bold shadow-xl">
               v1.0 LIVE
            </div>
        </div>

      </div>
    </motion.div>
  );
}

// Helper para items de lista
function FeatureItem({ icon, text, color }: { icon: React.ReactNode, text: string, color: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`p-1.5 rounded-lg bg-white/5 ${color}`}>
        {icon}
      </div>
      <span className="text-sm text-neutral-300 font-medium">{text}</span>
    </div>
  );
}