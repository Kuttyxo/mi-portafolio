"use client";
import { motion } from "framer-motion";
import { Calendar, GitCommit, GitPullRequest, Box, Server, Database, MessageSquare, Globe, Rocket, GraduationCap } from "lucide-react";

const experience = [
  {
    id: 3,
    role: "Desarrollador Full Stack Freelance",
    company: "La Piccola Eventos & Centro de Eventos Dominga",
    date: "2025 - Actualidad",
    description: "Diseño y desarrollo de plataforma CRM integral: chatbot WhatsApp con cotización automática, sistema de propuestas con firma digital, pipeline de ventas, gestión de pagos y contratos, notificaciones triple canal (WhatsApp + Email + Cron). Además, sitio corporativo multi-sede y landing con mapa interactivo.",
    tech: ["Python", "FastAPI", "Supabase", "WhatsApp API", "Vercel", "Resend"],
    type: "feature",
  },
  {
    id: 2,
    role: "Full Stack DevOps — Proyecto de Aprendizaje",
    company: "BrandConnect (Proyecto Personal — En Pausa)",
    date: "2024 - 2025",
    description: "Proyecto personal para dominar Docker, CI/CD y arquitectura de microservicios. Desarrollo de una plataforma SaaS con Next.js y servicios de backend contenerizados.",
    tech: ["Docker", "Next.js", "Supabase", "Python", "Git CI/CD", "TailwindCSS"],
    type: "feature",
  },
  {
    id: 1,
    role: "Ingeniería Civil en Informática & Telecom.",
    company: "Universidad Diego Portales",
    date: "2023 - Actualidad",
    description: "Formación especializada en arquitectura de software, redes de datos y ciberseguridad ofensiva/defensiva.",
    tech: [],
    type: "init",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">

        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            SYSTEM_LOGS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Mi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Experiencia</span>
          </h2>
          <p className="text-neutral-400 font-mono text-sm">
            $ git log --oneline --graph --decorate
          </p>
        </motion.div>

        {/* TIMELINE CONTAINER */}
        <div className="relative">
          {/* L&iacute;nea Vertical (La "Rama Main") */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-blue-500 to-purple-500 opacity-30 transform md:-translate-x-1/2" />

          {/* Items */}
          <div className="space-y-12">
            {experience.map((item, index) => (
              <TimelineItem key={item.id} data={item} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function TimelineItem({ data, index }: { data: typeof experience[0], index: number }) {
  const isEven = index % 2 === 0;

  const isFeature = data.type === 'feature';

  const colorClass = isFeature ? "text-green-400 bg-green-500/10 border-green-500/20" : "text-purple-400 bg-purple-500/10 border-purple-500/20";
  const glowClass = isFeature ? "from-green-500/5 to-emerald-500/5" : "from-purple-500/5 to-blue-500/5";
  const dotColor = isFeature ? "bg-green-500 shadow-[0_0_20px_#22c55e]" : "bg-purple-500 shadow-[0_0_20px_#a855f7]";

  const commitTag = index === 0 ? "HEAD" : isFeature ? `DEPLOY_v${data.id}.0` : "INITIAL_COMMIT";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`relative flex flex-col md:flex-row gap-8 ${isEven ? "md:flex-row-reverse" : ""}`}
    >

      {/* 1. CONTENIDO (Tarjeta) */}
      <div className="flex-1 ml-12 md:ml-0">
        <div className={`p-6 rounded-2xl border border-white/5 bg-[#0f0a15]/80 backdrop-blur-sm hover:border-white/10 transition-colors group relative overflow-hidden`}>

           {/* Efecto Glow Hover Espec&iacute;fico */}
           <div className={`absolute inset-0 bg-gradient-to-br ${glowClass} opacity-0 group-hover:opacity-100 transition-opacity`} />

           <div className="relative z-10">
             <div className="flex flex-wrap items-center justify-between gap-2 mb-3">

               {/* TAG DE COMMIT */}
               <div className={`flex items-center gap-2 text-xs font-mono px-2 py-1 rounded border ${colorClass}`}>
                 {isFeature ? <GitPullRequest size={12} /> : <GitCommit size={12} />}
                 <span>{commitTag}</span>
               </div>

               <span className="flex items-center gap-1 text-xs text-neutral-500 font-mono">
                 <Calendar size={12} /> {data.date}
               </span>
             </div>

             <h3 className="text-xl font-bold text-white mb-1">{data.role}</h3>
             <p className="text-sm text-neutral-400 font-mono mb-4 flex items-center gap-2">
                {isFeature ? <Rocket size={14} className="shrink-0" /> : <GraduationCap size={14} className="shrink-0" />} {data.company}
             </p>

             <p className="text-neutral-300 text-sm leading-relaxed mb-4">
               {data.description}
             </p>

             {/* Tech Stack Tags (Solo si existen) */}
             {data.tech.length > 0 && (
               <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                 {data.tech.map((t: string) => (
                   <span key={t} className="flex items-center gap-1 text-xs px-2 py-1 rounded bg-white/5 border border-white/5 text-neutral-400 font-mono group-hover:text-white transition-colors">
                     {t === "Docker" && <Box size={10} className="text-blue-400"/>}
                     {t === "Supabase" && <Database size={10} className="text-green-400"/>}
                     {t === "Python" && <Server size={10} className="text-yellow-400"/>}
                     {t === "FastAPI" && <Server size={10} className="text-teal-400"/>}
                     {t === "WhatsApp API" && <MessageSquare size={10} className="text-green-500"/>}
                     {t === "Leaflet.js" && <Globe size={10} className="text-blue-300"/>}
                     {t}
                   </span>
                 ))}
               </div>
             )}
           </div>
        </div>
      </div>

      {/* 2. PUNTO CENTRAL (El Nodo en la Rama) */}
      <div className="absolute left-4 md:left-1/2 w-8 h-8 -ml-4 md:-ml-4 flex items-center justify-center z-10">
         <div className={`w-4 h-4 rounded-full ${dotColor} ring-4 ring-[#0f0a15] relative group-hover:scale-110 transition-transform`}>
            {index === 0 && <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />}
         </div>
      </div>

      {/* 3. ESPACIO VAC&Iacute;O (Para equilibrar el layout) */}
      <div className="flex-1 hidden md:block" />

    </motion.div>
  );
}