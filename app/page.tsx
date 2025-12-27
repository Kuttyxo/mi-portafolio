import Navbar from "@/components/Navbar";
import BentoGrid from "@/components/BentoGrid";
import Projects from "@/components/Projects"; 

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0a15] bg-grid-white relative selection:bg-kutty-primary/30 selection:text-white">
      {/* Luz ambiental púrpura (Se mantiene igual) */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-kutty-primary/20 blur-[120px] rounded-full pointer-events-none" />
      
      <Navbar />
      
      {/* === AJUSTE DE ESPACIO === 
          Cambiado de 'pt-36' (144px) a:
          - pt-24 (96px): En móvil sube bastante para quedar cerca del menú.
          - md:pt-32 (128px): En escritorio da el aire justo para el dock flotante.
      */}
      <div className="relative z-10 pt-12 md:pt-14 pb-20 px-4 md:px-8 space-y-32">
        <BentoGrid />
        <Projects /> 
      </div>
    </main>
  );
}