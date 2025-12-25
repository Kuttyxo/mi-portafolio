"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ExternalLink, Github, Server, Database, Shield, Layout, Code2 } from "lucide-react";

// Datos reales basados en tu CV y perfil
const projects = [
  {
    title: "Una Gran Avenida",
    role: "Backend Developer (Práctica)",
    description: "Optimización de servicios backend y mantenimiento de bases de datos robustas. Integración de nuevas funcionalidades para mejorar la eficiencia del sistema.",
    tags: ["SQL", "Backend", "Optimización", "Database"],
    icon: <Database className="text-kutty-primary h-10 w-10" />,
    gradient: "from-kutty-primary/20 to-purple-900/20",
    link: "#", // Aquí iría el link real si existe
    github: "#"
  },
  {
    title: "TaskyApp",
    role: "Ingeniería de Software",
    description: "Sistema de gestión de tareas desarrollado semestralmente. Enfoque en arquitectura escalable y manejo seguro de datos de usuarios.",
    tags: ["Java", "System Design", "Backend", "Teamwork"],
    icon: <Layout className="text-blue-400 h-10 w-10" />,
    gradient: "from-blue-500/20 to-cyan-900/20",
    link: "#",
    github: "#"
  },
  {
    title: "Auditoría de Redes",
    role: "Seguridad & Telecom",
    description: "Análisis de tráfico de red utilizando Wireshark y pruebas de penetración básicas con Burp Suite para identificar vulnerabilidades.",
    tags: ["Wireshark", "Burp Suite", "Networking", "Security"],
    icon: <Shield className="text-green-400 h-10 w-10" />,
    gradient: "from-green-500/20 to-emerald-900/20",
    link: "#",
    github: "#"
  },
  {
    title: "KuttyDev Portfolio",
    role: "Full Stack & DevOps",
    description: "Este sitio web. Desplegado en contenedor Docker con Next.js 14, Tailwind CSS y Framer Motion. Diseño Bento Grid interactivo.",
    tags: ["Next.js", "Docker", "Tailwind", "Framer Motion"],
    icon: <Code2 className="text-pink-400 h-10 w-10" />,
    gradient: "from-pink-500/20 to-rose-900/20",
    link: "#",
    github: "https://github.com/TU_USUARIO/mi-portafolio"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado de Sección */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:text-center max-w-3xl mx-auto"
        >
          <h2 className="text-sm font-bold tracking-widest text-kutty-teal uppercase mb-3">
            Portafolio
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Proyectos Destacados
          </h3>
          <p className="text-neutral-400 text-lg">
            Desde la optimización de bases de datos críticas hasta el despliegue de infraestructura segura. Aquí aplico mi ingeniería.
          </p>
        </motion.div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

// Componente Individual de Tarjeta
function ProjectCard({ project, index }: { project: any, index: number }) {
  // Configuración para el efecto de brillo al pasar el mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-3xl border border-white/10 bg-neutral-900/50 overflow-hidden"
    >
      {/* Glow Effect que sigue al mouse */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(166, 73, 191, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative h-full p-8 flex flex-col justify-between z-10">
        
        {/* Header del Proyecto */}
        <div className="mb-6">
          <div className={`mb-4 inline-flex p-3 rounded-2xl bg-gradient-to-br ${project.gradient} border border-white/5`}>
            {project.icon}
          </div>
          
          <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-kutty-primary transition-colors">
            {project.title}
          </h4>
          <p className="text-sm font-mono text-kutty-teal mb-4">
            {project.role}
          </p>
          <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
            {project.description}
          </p>
        </div>

        {/* Footer del Proyecto (Tags y Botones) */}
        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-neutral-300 border border-white/5">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-6 border-t border-white/10">
            <a href={project.github} className="flex items-center gap-2 text-sm font-medium text-white hover:text-kutty-primary transition-colors">
              <Github size={18} /> Código
            </a>
            <a href={project.link} className="flex items-center gap-2 text-sm font-medium text-white hover:text-kutty-teal transition-colors">
              <ExternalLink size={18} /> Demo
            </a>
          </div>
        </div>

      </div>
    </motion.div>
  );
}