import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Code2, Rocket } from 'lucide-react';

// Importando seus novos componentes modularizados
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Servicos from './components/Servicos';
import Portfolio from './components/Portfolio';
import Time from './components/Time';
import Contato from './components/Contato';
import Footer from './components/Footer';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1));
  };

  const mainContentBlur = selectedProject
    ? 'blur-md opacity-30 grayscale-[30%] pointer-events-none'
    : '';

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
        .carousel-track:hover {
          animation-play-state: paused;
        }
        .carousel-track:hover .carousel-card {
          opacity: 0.4;
          transform: scale(0.95);
        }
        .carousel-track .carousel-card:hover {
          opacity: 1;
          transform: scale(1.05);
          z-index: 20;
          box-shadow: 0 0 40px rgba(37, 99, 235, 0.3);
          border-color: rgba(59, 130, 246, 0.5);
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      {/* Modal de Detalhes do Projeto */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12">
          <div
            className="absolute inset-0 bg-[#010308]/70 transition-opacity duration-300"
            onClick={() => setSelectedProject(null)}
          ></div>

          <div className="relative w-full max-w-6xl max-h-[90vh] bg-[#0a0f1a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-[fadeIn_0.3s_ease-out]">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-50 bg-black/40 hover:bg-blue-600 text-white p-2 rounded-full backdrop-blur-md transition-all border border-white/10"
              aria-label="Fechar"
            >
              <X size={24} />
            </button>

            <div className="relative w-full md:w-3/5 h-[300px] md:h-auto bg-[#030712] group">
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} - Tela ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>

              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-blue-600 text-white p-3 rounded-full opacity-100 md:opacity-0 group-hover:opacity-100 transition-all backdrop-blur-md border border-white/10 shadow-lg"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-blue-600 text-white p-3 rounded-full opacity-100 md:opacity-0 group-hover:opacity-100 transition-all backdrop-blur-md border border-white/10 shadow-lg"
                  >
                    <ChevronRight size={24} />
                  </button>

                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {selectedProject.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-blue-500 w-8' : 'bg-white/40 hover:bg-white/80 w-2'}`}
                        aria-label={`Ir para imagem ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="w-full md:w-2/5 p-8 md:p-10 flex flex-col bg-[#0a0f1a] overflow-y-auto no-scrollbar relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 pr-8">{selectedProject.title}</h3>
              <div className="w-16 h-1 bg-blue-500 rounded-full mb-8"></div>

              <div className="flex-grow">
                <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">O Desafio & A Solução</h4>
                <p className="text-slate-300 text-base leading-relaxed mb-8">
                  {selectedProject.detailedDescription}
                </p>

                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-b border-white/5 pb-2">Tecnologias Envolvidas</h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.techs.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-[#030712] text-blue-300 border border-white/10 rounded-lg text-xs font-medium flex items-center gap-1.5">
                      <Code2 size={12} className="text-blue-500" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-sm text-slate-400 mb-4 text-center">Precisa de um sistema semelhante para o seu negócio?</p>
                <a
                  href="#contato"
                  onClick={() => setSelectedProject(null)}
                  className="w-full py-4 bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group"
                >
                  <Rocket size={18} className="group-hover:animate-bounce" />
                  Quero construir o meu
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Aplicação Principal */}
      <div className={`transition-all duration-500 ${mainContentBlur}`}>
        <div className="fixed inset-0 z-0 pointer-events-none transition-all duration-500">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        </div>

        <Navbar mainContentBlur={mainContentBlur} />

        <main className="relative z-10">
          <Hero />
          <Servicos />
          <Portfolio onSelectProject={handleSelectProject} />
          <Time />
          <Contato />
        </main>

        <Footer />
      </div>

      <a
        href="https://wa.me/5575988169508"
        target="_blank"
        rel="noreferrer"
        className={`fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-500 flex items-center justify-center group ${mainContentBlur}`}
        aria-label="Contato via WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="absolute right-full mr-4 bg-[#0a0f1a] text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10 shadow-xl font-medium">
          Fale conosco
        </span>
      </a>
    </div>
  );
}