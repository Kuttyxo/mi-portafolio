import Navbar from "@/components/Navbar";
import BentoGrid from "@/components/BentoGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0a15] bg-grid-white relative selection:bg-kutty-primary/30 selection:text-white">
      {/* Sombra violeta gigante para ambiente */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-kutty-primary/20 blur-[120px] rounded-full pointer-events-none" />
      
      <Navbar />
      
      {/* AUMENTAMOS EL PADDING TOP A pt-32 O MÁS PARA SEPARARLO DEL NAVBAR */}
      <div className="relative z-10 pt-36 pb-20 px-4 md:px-8">
        <BentoGrid />
      </div>
    </main>
  );
}