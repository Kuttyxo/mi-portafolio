"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import SpotlightCard from "./SpotlightCard";
import { 
  GitCommit, 
  GitBranch, 
  Users, 
  Book, 
  Wifi, 
  Github, 
  FileText,
  Activity,
  Server,
  Database,
  Terminal as TerminalIcon
} from "lucide-react";

// === CONFIGURACIÓN DE ANIMACIONES ===
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15,
      duration: 0.5 
    }
  }
};

// === CONFIGURACIÓN ===
// ¡YA ESTÁ PUESTO TU USUARIO CORRECTO!
const GITHUB_USERNAME = "Kuttyxo";

// === INTERFAZ DE DATOS GITHUB ===
interface GithubData {
  repos: number;
  followers: number;
  lastPush: string;
  status: "Online" | "Offline" | "Fetching";
}

export default function BentoGrid() {
  // ESTADO PARA GITHUB
  const [gitData, setGitData] = useState<GithubData>({
    repos: 0,
    followers: 0,
    lastPush: "Waiting for signal...",
    status: "Fetching"
  });

  // EFECTO: FETCH A LA API DE GITHUB
  useEffect(() => {
    const fetchGithub = async () => {
      try {
        // 1. Datos de Usuario
        const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        
        // Si excediste el límite de la API, lanzará error aquí
        if (!userRes.ok) throw new Error("Github API Error");
        
        const userData = await userRes.json();

        // 2. Últimos Eventos
        const eventsRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=1`);
        const eventsData = await eventsRes.json();

        let lastMessage = "No recent public activity";
        
        if (eventsData && Array.isArray(eventsData) && eventsData.length > 0) {
           const pushEvent = eventsData.find((e: any) => e.type === "PushEvent");
           if (pushEvent && pushEvent.payload.commits.length > 0) {
             lastMessage = pushEvent.payload.commits[0].message;
           } else {
             // Si el último evento no fue un push (ej: dar like/star), mostramos el tipo
             lastMessage = eventsData[0].type.replace("Event", "");
           }
        }

        setGitData({
          repos: userData.public_repos || 0,
          followers: userData.followers || 0,
          lastPush: lastMessage,
          status: "Online"
        });

      } catch (error) {
        console.error("Github Uplink Failed", error);
        // Si falla, mostramos Offline pero mantenemos valores en 0
        setGitData(prev => ({ ...prev, status: "Offline", lastPush: "Connection Failed (Rate Limit?)" }));
      }
    };

    fetchGithub();
  }, []);

  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 py-12">
      
      {/* Contenedor Principal Animado */}
      <motion.div 
        className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        
        {/* === CAJA 1: LA TERMINAL (Perfil) === */}
        <motion.div 
          variants={cardVariants}
          className="col-span-1 md:col-span-2 row-span-1 md:row-span-2 relative group"
        >
          <SpotlightCard className="h-full p-0 overflow-hidden bg-[#0a0a0a] border-neutral-800">
            {/* Header de la ventana */}
            <div className="flex items-center justify-between px-4 py-3 bg-neutral-900/80 border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
              </div>
              <div className="text-[10px] font-mono text-neutral-500">profile.tsx — kuttydev</div>
            </div>

            {/* Contenido Terminal */}
            <div className="p-6 md:p-8 flex flex-col justify-between h-[calc(100%-40px)]">
              <div className="space-y-6">
                
                {/* Bloque de Identidad */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-500 font-mono text-sm">➜</span>
                    <span className="text-blue-400 font-mono text-sm">~</span>
                    <span className="text-neutral-400 font-mono text-sm">whoami</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">
                    Cristóbal Rodríguez
                  </h1>
                  <p className="text-lg text-neutral-400 font-light">
                    Ingeniero Civil en Informática & Telecomunicaciones en formación.
                  </p>
                </div>

                {/* Bloque de Bio (JSON Style) */}
                <div className="font-mono text-xs md:text-sm bg-neutral-900/50 p-4 rounded-lg border border-white/5 text-neutral-300 overflow-x-auto">
                  <p><span className="text-purple-400">const</span> <span className="text-yellow-200">developer</span> = &#123;</p>
                  <p className="pl-4">role: <span className="text-green-300">"Backend & DevOps"</span>,</p>
                  <p className="pl-4">security: <span className="text-green-300">"Ofensiva / Pentesting"</span>,</p>
                  <p className="pl-4">status: <span className="text-blue-300">"Open to Work"</span>,</p>
                  <p className="pl-4">location: <span className="text-orange-300">"Santiago, CL"</span>,</p>
                  <p className="pl-4">university: <span className="text-red-200">"Universidad Diego Portales"</span>,</p>
                  <p>&#125;;</p>
                </div>
              </div>

              {/* Botones de Acción */}
              <div className="flex flex-wrap gap-3 mt-6">
                <a href="https://github.com/Kuttyxo" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded text-xs font-mono border border-white/10 transition-colors">
                  <Github size={14} /> git checkout github
                </a>
                <a 
                  href="/CV_Cristobal_Rodriguez.pdf" 
                  download="CV_Cristobal_Rodriguez.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-kutty-primary/20 hover:bg-kutty-primary/30 text-kutty-primary rounded text-xs font-mono border border-kutty-primary/50 transition-colors"
                >
                  <FileText size={14} /> ./download_cv.sh
                </a>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* === CAJA 2: SYSTEM MONITOR (Lista Estática) === */}
        <motion.div 
          variants={cardVariants}
          className="col-span-1 md:col-span-1 row-span-1"
        >
          <SpotlightCard className="h-full p-5 bg-black">
            <div className="flex items-center gap-2 mb-4 text-neutral-400 text-xs font-mono uppercase tracking-widest">
              <Activity size={14} className="text-green-500" /> System Modules
            </div>
            
            <div className="space-y-2">
              {[
                { name: "Docker Container", status: "Running", color: "bg-blue-500" },
                { name: "Next.js Framework", status: "Active", color: "bg-white" },
                { name: "Python Scripts", status: "Loaded", color: "bg-yellow-400" },
                { name: "PostgreSQL DB", status: "Connected", color: "bg-blue-300" },
                { name: "Burp Suite", status: "Scanning", color: "bg-orange-500" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between text-xs p-2 rounded bg-white/5 border border-white/5 hover:border-white/20 transition-colors">
                  <span className="text-neutral-300 font-mono">{item.name}</span>
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${item.color} shadow-[0_0_5px_currentColor]`}></span>
                    <span className="text-[10px] text-neutral-500">{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>

        {/* === CAJA 3: NETWORK STATUS === */}
        <motion.div 
          variants={cardVariants}
          className="col-span-1 md:col-span-1 row-span-1"
        >
          <SpotlightCard className="h-full p-5 bg-black flex flex-col justify-between">
             <div className="flex items-center justify-between mb-2">
                <span className="text-neutral-400 text-xs font-mono uppercase tracking-widest flex items-center gap-2">
                  <Wifi size={14} className="text-kutty-teal" /> Network
                </span>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
             </div>

             <div className="my-auto text-center py-4 relative overflow-hidden rounded-lg bg-kutty-teal/5 border border-kutty-teal/10">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-kutty-teal/50 shadow-[0_0_10px_#0D688C] animate-scan" />
                <h3 className="text-2xl font-bold text-white">SCL-1</h3>
                <p className="text-xs text-kutty-teal font-mono">Santiago Region</p>
                <div className="mt-2 text-[10px] text-neutral-500 font-mono flex justify-center gap-4">
                  <span>PING: 4ms</span>
                  <span>UP: 99.9%</span>
                </div>
             </div>

             <div className="mt-2 flex items-center justify-between text-[10px] text-neutral-600 font-mono border-t border-white/5 pt-2">
               <span>IPV4: 192.168.1.X</span>
               <span>REMOTE: OK</span>
             </div>
          </SpotlightCard>
        </motion.div>

        {/* === CAJA 4: KUTTYDEV DASHBOARD (Responsiva) === */}
        <motion.div 
          variants={cardVariants}
          className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1"
        >
          <SpotlightCard className="relative h-full overflow-hidden flex flex-col md:flex-row items-center justify-center md:justify-start px-6 py-6 bg-black">

            {/* Noise & Glow */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-kutty-primary/20 blur-[120px]" />

            {/* CONTENIDO PRINCIPAL */}
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full">
              
              {/* IZQUIERDA: LOGO + MARCA */}
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 shrink-0">
                {/* Logo */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 group shrink-0">
                  <div className="absolute inset-0 rounded-full bg-kutty-primary/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <Image
                    src="/logoosin.png"
                    alt="KuttyDev"
                    fill
                    className="object-contain relative z-10 transition-transform duration-500 group-hover:scale-105 mix-blend-screen"
                  />
                </div>
                
                {/* Texto de Marca */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                   <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                     Kutty<span className="text-kutty-primary">Dev</span>
                   </h2>
                   <div className="flex items-center gap-2 mt-1 justify-center md:justify-start">
                      <span className={`w-2 h-2 rounded-full ${gitData.status === "Online" ? "bg-green-500 animate-pulse" : "bg-yellow-500"}`} />
                      <span className="text-xs text-neutral-400 font-mono uppercase">System {gitData.status}</span>
                   </div>
                </div>
              </div>

              {/* SEPARADOR: Horizontal en Móvil / Vertical en Desktop */}
              <div className="w-full h-[1px] bg-white/10 md:w-[1px] md:h-16 md:bg-white/10" />

              {/* DERECHA: GITHUB LIVE STATS */}
              <div className="flex-1 w-full">
                 
                 {/* Stats Grid */}
                 <div className="grid grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/5 hover:border-white/20 transition-colors flex flex-col items-center md:items-start text-center md:text-left">
                       <div className="flex items-center gap-2 text-neutral-400 mb-1">
                          <Book size={12} />
                          <span className="text-[10px] font-mono uppercase">Repositories</span>
                       </div>
                       <span className="text-lg font-bold text-white">{gitData.repos}</span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/5 hover:border-white/20 transition-colors flex flex-col items-center md:items-start text-center md:text-left">
                       <div className="flex items-center gap-2 text-neutral-400 mb-1">
                          <Users size={12} />
                          <span className="text-[10px] font-mono uppercase">Followers</span>
                       </div>
                       <span className="text-lg font-bold text-white">{gitData.followers}</span>
                    </div>
                 </div>

                 {/* Last Commit */}
                 <div className="flex flex-col gap-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 text-[10px] text-neutral-500 font-mono">
                       <GitCommit size={12} className="text-kutty-primary" />
                       LATEST COMMIT UPLINK
                    </div>
                    <code className="text-[10px] md:text-xs text-green-400/80 font-mono bg-black/50 px-2 py-1 rounded truncate border border-green-500/10 block w-full">
                       {gitData.lastPush}
                    </code>
                 </div>

              </div>

            </div>
          </SpotlightCard>
        </motion.div>

      </motion.div>
    </section>
  );
}