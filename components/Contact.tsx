"use client";
import { motion } from "framer-motion";
import { Terminal, Mail, Send, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "cristobal@ejemplo.com"; // PON TU EMAIL REAL AQUÍ

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      {/* Fondo Matrix sutil */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Encabezado */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            CONNECTION_OPEN
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Inicializar <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Protocolo de Contacto</span>
          </h2>
          <p className="text-neutral-400 font-mono text-sm">
             ¿Tienes un proyecto desafiante? Ejecuta el script abajo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 1. INFORMACIÓN DE CONTACTO (Tarjeta Izquierda) */}
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="h-full flex flex-col justify-between p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 relative overflow-hidden group"
          >
             {/* Glow effect */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-[50px] rounded-full group-hover:bg-green-500/20 transition-colors" />

             <div>
               <h3 className="text-xl font-bold text-white mb-2">Canales Seguros</h3>
               <p className="text-neutral-400 text-sm mb-8 leading-relaxed">
                 Actualmente disponible para oportunidades Freelance y Full-Time. Preferencia por arquitecturas complejas y retos de ciberseguridad.
               </p>
               
               <div className="space-y-4">
                 {/* Email Copy Box */}
                 <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between group/email hover:border-green-500/30 transition-colors">
                    <div className="flex items-center gap-3">
                       <div className="p-2 rounded-lg bg-green-500/20 text-green-400">
                          <Mail size={18} />
                       </div>
                       <div className="flex flex-col">
                          <span className="text-[10px] text-neutral-500 uppercase font-mono">Direct Message</span>
                          <span className="text-sm text-white font-medium">{email}</span>
                       </div>
                    </div>
                    <button 
                      onClick={handleCopy}
                      className="p-2 rounded-lg hover:bg-white/10 text-neutral-400 transition-colors"
                    >
                      {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                    </button>
                 </div>
               </div>
             </div>

             <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex gap-4">
                   {/* Aquí podrías poner botones sociales pequeños si quisieras repetir */}
                   <div className="text-xs text-neutral-500 font-mono">
                      Location: Santiago, CL (UTC-3)<br/>
                      Status: <span className="text-green-400">Online</span>
                   </div>
                </div>
             </div>
          </motion.div>

          {/* 2. FORMULARIO TERMINAL (Tarjeta Derecha) */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="rounded-3xl bg-[#1e1e1e] border border-white/10 overflow-hidden shadow-2xl font-mono text-sm"
          >
             {/* Terminal Header */}
             <div className="bg-[#2d2d2d] px-4 py-3 flex items-center gap-2 border-b border-black/50">
                <div className="flex gap-1.5">
                   <div className="w-3 h-3 rounded-full bg-red-500" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500" />
                   <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="ml-2 text-neutral-400 text-xs flex items-center gap-1">
                   <Terminal size={12} />
                   bash — 80x24
                </div>
             </div>

             {/* Terminal Body (Formulario) */}
             <form className="p-6 space-y-4 text-neutral-300">
                
                {/* Input Nombre */}
                <div>
                   <label className="block text-[#4af626] mb-1">$ identify user</label>
                   <div className="flex items-center gap-2 border-b border-white/10 focus-within:border-[#4af626] pb-1 transition-colors">
                      <span className="text-neutral-500">{'>'}</span>
                      <input 
                        type="text" 
                        placeholder="Tu Nombre / Empresa" 
                        className="bg-transparent w-full focus:outline-none text-white placeholder-neutral-600"
                        required
                      />
                   </div>
                </div>

                {/* Input Email */}
                <div>
                   <label className="block text-[#4af626] mb-1">$ set return_address</label>
                   <div className="flex items-center gap-2 border-b border-white/10 focus-within:border-[#4af626] pb-1 transition-colors">
                      <span className="text-neutral-500">{'>'}</span>
                      <input 
                        type="email" 
                        placeholder="tu@email.com" 
                        className="bg-transparent w-full focus:outline-none text-white placeholder-neutral-600"
                        required
                      />
                   </div>
                </div>

                {/* Textarea Mensaje */}
                <div>
                   <label className="block text-[#4af626] mb-1">$ write payload</label>
                   <div className="flex gap-2 border-b border-white/10 focus-within:border-[#4af626] pb-1 transition-colors">
                      <span className="text-neutral-500 mt-1">{'>'}</span>
                      <textarea 
                        rows={3}
                        placeholder="Escribe tu mensaje aquí..." 
                        className="bg-transparent w-full focus:outline-none text-white resize-none placeholder-neutral-600"
                        required
                      />
                   </div>
                </div>

                {/* Botón Ejecutar */}
                <button 
                   type="submit"
                   className="w-full mt-6 bg-[#4af626]/10 border border-[#4af626]/50 text-[#4af626] hover:bg-[#4af626]/20 hover:scale-[1.02] transition-all py-3 rounded text-center font-bold flex items-center justify-center gap-2 group"
                >
                   <span>./execute_send.sh</span>
                   <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>

             </form>
          </motion.div>

        </div>

        {/* Footer Copyright */}
        <div className="mt-20 border-t border-white/5 pt-8 text-center">
            <p className="text-neutral-600 text-xs font-mono">
               © 2025 KuttyDev. All systems operational. <br/>
               Built with Next.js + Tailwind + Passion.
            </p>
        </div>

      </div>
    </section>
  );
}