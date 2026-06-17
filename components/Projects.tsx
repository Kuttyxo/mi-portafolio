"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ExternalLink, Github, Zap, ShieldCheck, BarChart3, Users, ArrowRight, Bot, Globe, MapPin, MessageSquare, CalendarDays, Utensils, Wallet, Mic, FileText, CreditCard, PieChart, BellRing, ClipboardList, Building2 } from "lucide-react";

const otherProjects = [
  {
    title: "La Libreta",
    subtitle: "Control Financiero Personal",
    description: "App web PWA de finanzas personales con sincronización cloud, asistente de voz con IA (Josefa), gráficos SVG artesanales, tracking de gastos/ahorros/deudas, y gestión de cuotas de tarjeta de crédito. Funciona offline.",
    tech: ["Vanilla JS", "Supabase", "Edge Functions", "PWA"],
    color: "#10B981",
    icon: <Wallet size={20} />,
    liveUrl: "https://mis-finanzas-seven.vercel.app",
    githubUrl: undefined as string | undefined,
    features: [
      { icon: <Mic size={14} />, text: "Asistente de voz con IA" },
      { icon: <PieChart size={14} />, text: "Dashboard con gráficos SVG" },
      { icon: <CreditCard size={14} />, text: "Tracking de cuotas y ahorros" },
    ],
  },
  {
    title: "Centro de Eventos Dominga",
    subtitle: "Landing + Mapa Interactivo",
    description: "Sitio web para centro de eventos con mapa interactivo Leaflet.js que muestra salones aliados en la región metropolitana, filtrable por comuna, capacidad y tipo de evento.",
    tech: ["HTML", "Tailwind CSS", "Leaflet.js", "JavaScript"],
    color: "#60A5FA",
    icon: <MapPin size={20} />,
    liveUrl: undefined as string | undefined,
    githubUrl: undefined as string | undefined,
    features: [
      { icon: <MapPin size={14} />, text: "Mapa interactivo" },
      { icon: <Globe size={14} />, text: "Red de salones aliados" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">

        {/* Encabezado Flagship */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:text-center max-w-3xl mx-auto"
        >
          <h2 className="text-sm font-bold tracking-widest text-kutty-teal uppercase mb-3">
            Proyecto de Aprendizaje
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Laboratorio DevOps
          </h3>
          <p className="text-neutral-400 text-lg">
            Proyecto personal construido para dominar <span className="text-white font-medium">Docker</span>, <span className="text-white font-medium">CI/CD</span> y arquitecturas de microservicios. Actualmente en pausa.
          </p>
        </motion.div>

        <BrandConnectCard />

        {/* === PLATAFORMA LA PICCOLA === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 mb-12 md:text-center max-w-3xl mx-auto"
        >
          <h2 className="text-sm font-bold tracking-widest text-kutty-primary uppercase mb-3">
            Plataforma Freelance
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sistema Integral de Gestión
          </h3>
          <p className="text-neutral-400 text-lg">
            Ecosistema completo para una empresa de eventos: desde la captación del cliente por WhatsApp hasta la coordinación del día del evento.
          </p>
        </motion.div>

        <PiccolaCard />

        {/* === OTROS PROYECTOS === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 mb-12 md:text-center max-w-3xl mx-auto"
        >
          <h2 className="text-sm font-bold tracking-widest text-kutty-teal uppercase mb-3">
            Más Proyectos
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Soluciones Personales & Freelance
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {otherProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

// === LA PICCOLA EVENTOS — FEATURE CARD ===
function PiccolaCard() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const modules = [
    { icon: <Bot size={16} />, name: "Chatbot WhatsApp", desc: "Cotización automática multi-paso", color: "text-green-400" },
    { icon: <FileText size={16} />, name: "Propuestas Web", desc: "Generación, firma digital y expiración 48h", color: "text-blue-400" },
    { icon: <ClipboardList size={16} />, name: "Panel CRM", desc: "Pipeline de ventas y métricas en tiempo real", color: "text-purple-400" },
    { icon: <CreditCard size={16} />, name: "Sistema de Pagos", desc: "Abonos, confirmaciones y alertas automáticas", color: "text-yellow-400" },
    { icon: <FileText size={16} />, name: "Contratos Digitales", desc: "4 tipos, editor rich-text y firma electrónica", color: "text-orange-400" },
    { icon: <BellRing size={16} />, name: "Notificaciones Triple Canal", desc: "WhatsApp + Email + Cron automáticos", color: "text-red-400" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      className="group relative w-full rounded-[2.5rem] border border-white/10 bg-[#0f0a15] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8B4B8]/10 via-transparent to-black z-0" />

      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px,
              rgba(232, 180, 184, 0.08),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 md:p-12 lg:p-16">

        {/* IZQUIERDA: INFO */}
        <div className="flex flex-col justify-center gap-6">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#E8B4B8] to-[#C78D94] flex items-center justify-center shadow-lg shadow-pink-500/20">
              <Building2 className="text-white w-7 h-7" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                La Piccola <span className="text-[#E8B4B8]">Eventos</span>
              </h1>
              <p className="text-sm font-mono text-neutral-400 tracking-wide uppercase">
                Plataforma de Gestión Integral
              </p>
            </div>
          </div>

          <p className="text-neutral-300 text-lg leading-relaxed">
            Ecosistema que cubre todo el ciclo de vida del cliente: captación por WhatsApp con cotización automática, propuestas web con firma digital, CRM con pipeline de ventas, gestión de pagos y contratos, y coordinación del evento con notificaciones triple canal.
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            {["Python", "FastAPI", "Supabase", "WhatsApp API", "Vercel", "Resend"].map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-neutral-400">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a
              href="https://lapiccolaeventos.cl"
              target="_blank"
              className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-[#E8B4B8] text-[#1a1a2e] font-bold transition-all hover:bg-[#f0c4c8] hover:scale-105 active:scale-95 shadow-lg shadow-pink-500/20"
            >
              <ExternalLink size={18} />
              Ver Sitio Web
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://github.com/Kuttyxo/bot-piccola"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium transition-all hover:bg-white/10 hover:border-white/30"
            >
              <Github size={18} />
              Backend
            </a>
          </div>
        </div>

        {/* DERECHA: MÓDULOS */}
        <div className="relative flex flex-col justify-center gap-3 min-h-[300px] lg:min-h-full rounded-2xl bg-[#0a0a0a]/50 border border-white/5 p-6 group-hover:border-[#E8B4B8]/20 transition-colors overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.03]" />

          <div className="relative z-10 text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Módulos Activos
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {modules.map((mod, i) => (
              <motion.div
                key={mod.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/15 transition-colors"
              >
                <div className={`flex items-center gap-2 mb-1 ${mod.color}`}>
                  {mod.icon}
                  <span className="text-xs font-bold">{mod.name}</span>
                </div>
                <p className="text-[11px] text-neutral-500 leading-snug">{mod.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// === PROJECT CARD (Proyectos menores) ===
function ProjectCard({ project, index }: { project: typeof otherProjects[0]; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-2xl border border-white/10 bg-[#0f0a15] overflow-hidden hover:border-white/20 transition-colors"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              ${project.color}15,
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10 p-6 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="h-10 w-10 rounded-xl flex items-center justify-center text-white"
            style={{ backgroundColor: `${project.color}20`, border: `1px solid ${project.color}30` }}
          >
            {project.icon}
          </div>
          <div>
            <h4 className="text-lg font-bold text-white">{project.title}</h4>
            <p className="text-xs font-mono text-neutral-500">{project.subtitle}</p>
          </div>
        </div>

        <p className="text-neutral-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-col gap-2 mb-4">
          {project.features.map((feat, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
              <span style={{ color: project.color }}>{feat.icon}</span>
              <span>{feat.text}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-neutral-400">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-white"
              style={{ color: project.color }}
            >
              <ExternalLink size={14} />
              Ver Sitio
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              className="flex items-center gap-1.5 text-xs text-neutral-400 font-medium hover:text-white transition-colors"
            >
              <Github size={14} />
              Código
            </a>
          )}
          {!project.liveUrl && !project.githubUrl && (
            <span className="flex items-center gap-1.5 text-xs text-neutral-500 font-mono">
              <ShieldCheck size={14} />
              Proyecto Privado
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// === BRAND CONNECT CARD ===
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
      <div className="absolute inset-0 bg-gradient-to-br from-[#2A2859]/40 via-transparent to-black z-0" />

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

        <div className="flex flex-col justify-center gap-6">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#F2994B] to-[#F25E5E] flex items-center justify-center shadow-lg shadow-orange-500/20">
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
                Marketplace — En Pausa
              </p>
            </div>
          </div>

          <p className="text-neutral-300 text-lg leading-relaxed">
            Proyecto personal para poner a prueba mis habilidades en Docker, DevOps y arquitectura de microservicios.
            Un marketplace que conecta marcas con micro-influencers, gestionando campañas, pagos y métricas de ROI.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <FeatureItem icon={<ShieldCheck size={18} />} text="Verificación de Audiencia vía API" color="text-green-400" />
            <FeatureItem icon={<BarChart3 size={18} />} text="Dashboards de ROI en Tiempo Real" color="text-blue-400" />
            <FeatureItem icon={<Zap size={18} />} text="Gestión Automatizada DevOps" color="text-yellow-400" />
            <FeatureItem icon={<Users size={18} />} text="Pool de Talentos Verificados" color="text-purple-400" />
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {["Next.js", "React", "Node.js", "DevOps", "APIs", "Payment Gateways"].map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-neutral-400">
                {tech}
              </span>
            ))}
          </div>

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

        {/* MOCKUP */}
        <div className="relative flex items-center justify-center min-h-[300px] lg:min-h-full rounded-2xl bg-[#0a0a0a]/50 border border-white/5 overflow-hidden group-hover:border-[#F2994B]/30 transition-colors">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
            <div className="absolute inset-0 bg-grid-white/[0.05]" />

            <div className="relative w-full max-w-[350px] aspect-[4/5] bg-[#1a1a2e] rounded-xl border border-white/10 shadow-2xl overflow-hidden transform transition-transform duration-700 group-hover:rotate-1 group-hover:scale-105">
                <div className="h-12 border-b border-white/10 flex items-center justify-between px-4 bg-[#2A2859]">
                   <div className="w-20 h-2 rounded-full bg-white/20" />
                   <div className="flex gap-2">
                     <div className="w-2 h-2 rounded-full bg-red-500" />
                     <div className="w-2 h-2 rounded-full bg-yellow-500" />
                     <div className="w-2 h-2 rounded-full bg-green-500" />
                   </div>
                </div>

                <div className="p-6 space-y-4">
                   <div className="space-y-2">
                      <div className="w-1/2 h-4 rounded bg-white/10" />
                      <div className="w-3/4 h-3 rounded bg-white/5" />
                   </div>
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
                   <div className="w-full h-8 rounded-lg bg-[#F2994B] opacity-80 mt-4" />
                </div>
            </div>

            <div className="absolute bottom-6 right-6 px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-yellow-500/50 text-yellow-400 text-xs font-bold shadow-xl">
               EN PAUSA
            </div>
        </div>
      </div>
    </motion.div>
  );
}

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