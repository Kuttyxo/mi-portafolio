import Navbar from "@/components/Navbar";
import BentoGrid from "@/components/BentoGrid";
import Projects from "@/components/Projects"; 
import Experience from "@/components/Experience";
import Contact from "@/components/Contact"; 

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0a15] bg-grid-white relative selection:bg-kutty-primary/30 selection:text-white">
      {/* Luz ambiental púrpura (Se mantiene igual) */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-kutty-primary/20 blur-[120px] rounded-full pointer-events-none" />
      
      <Navbar />
      
      <div className="relative z-10 pt-12 md:pt-14 pb-20 px-4 md:px-8 space-y-32">
        <BentoGrid />
        <Projects /> 
        <Experience />
        <Contact />
      </div>
    </main>
  );
}