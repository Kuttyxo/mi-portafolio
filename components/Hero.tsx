// src/app/page.tsx
import Navbar from "@/components/Navbar";
import BentoGrid from "@/components/BentoGrid"; // <--- Importamos el nuevo componente

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0a15] selection:bg-kutty-primary/30 selection:text-white pb-20">
      <Navbar />
      
      {/* Añadimos un poco de espacio arriba para que el navbar no tape el grid */}
      <div className="pt-10">
        <BentoGrid />
      </div>
      
      {/* Aquí abajo irían tus proyectos detallados después */}
    </main>
  );
}