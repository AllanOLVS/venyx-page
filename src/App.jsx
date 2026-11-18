import { useCallback, useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Servicos from './components/Servicos';
import ComoFunciona from './components/ComoFunciona';
import Portfolio from './components/Portfolio';
import Time from './components/Time';
import Contato from './components/Contato';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import WhatsAppIcon from './components/WhatsAppIcon';
import { WHATSAPP_URL } from './data/contact';

export default function App() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [contactInView, setContactInView] = useState(false);
    const triggerRef = useRef(null);
    const closeProject = useCallback(() => setSelectedProject(null), []);

    // Guarda o card que abriu a janela para devolver o foco a ele ao fechar.
    const openProject = useCallback((project) => {
        triggerRef.current = document.activeElement;
        setSelectedProject(project);
    }, []);

    useEffect(() => {
        if (selectedProject || !triggerRef.current) return;
        triggerRef.current.focus({ preventScroll: true });
        triggerRef.current = null;
    }, [selectedProject]);

    // O botão flutuante sai de cena quando o formulário (que já mostra o WhatsApp) está na tela.
    useEffect(() => {
        const contato = document.getElementById('contato');
        if (!contato) return;
        const observer = new IntersectionObserver(([entry]) => setContactInView(entry.isIntersecting), {
            threshold: 0.15,
        });
        observer.observe(contato);
        return () => observer.disconnect();
    }, []);

    const modalOpen = Boolean(selectedProject);
    const fabHidden = contactInView || modalOpen;

    return (
        <div className="min-h-screen overflow-x-clip bg-[#030712] font-sans text-slate-200">
            <div inert={modalOpen}>
                <Navbar />

                <main className="relative">
                    <Hero />
                    <Servicos />
                    <ComoFunciona />
                    <Portfolio onSelectProject={openProject} />
                    <Time />
                    <Contato />
                </main>

                <Footer />

                <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-hidden={fabHidden || undefined}
                    tabIndex={fabHidden ? -1 : undefined}
                    className={`group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_24px_-8px_rgba(37,211,102,0.6)] transition-[opacity,transform,box-shadow] duration-300 hover:shadow-[0_14px_32px_-8px_rgba(37,211,102,0.8)] sm:bottom-6 sm:right-6 ${
                        fabHidden ? 'pointer-events-none translate-y-4 opacity-0' : 'opacity-100'
                    }`}
                >
                    <WhatsAppIcon size={28} />
                    <span className="sr-only">Conversar no WhatsApp (abre em nova aba)</span>
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute right-full mr-4 whitespace-nowrap rounded-lg border border-white/10 bg-[#0a0f1a] px-4 py-2 text-sm font-medium text-white opacity-0 shadow-[0_12px_24px_-12px_rgba(0,0,0,0.6)] transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                    >
                        Fale conosco
                    </span>
                </a>
            </div>

            {selectedProject && (
                <ProjectModal key={selectedProject.title} project={selectedProject} onClose={closeProject} />
            )}
        </div>
    );
}
