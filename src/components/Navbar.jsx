import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoSimbolo from '../assets/logos/navbar-simbolo.png';
import logoNome from '../assets/logos/navbar-nome.png';

const links = [
    { id: 'servicos', label: 'Serviços' },
    { id: 'como-funciona', label: 'Como funciona' },
    { id: 'portfolio', label: 'Portfólio' },
    { id: 'especialistas', label: 'Especialistas' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeId, setActiveId] = useState('');
    const navRef = useRef(null);
    const menuButtonRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Destaca no menu a seção que está no meio da tela.
    useEffect(() => {
        const sections = [...links.map((l) => l.id), 'contato']
            .map((id) => document.getElementById(id))
            .filter(Boolean);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveId(entry.target.id);
                });
            },
            { rootMargin: '-45% 0px -50% 0px' }
        );
        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isMenuOpen) return;
        const onKey = (e) => {
            if (e.key === 'Escape') {
                setIsMenuOpen(false);
                menuButtonRef.current?.focus();
            }
        };
        const onPointer = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) setIsMenuOpen(false);
        };
        document.addEventListener('keydown', onKey);
        document.addEventListener('pointerdown', onPointer);
        return () => {
            document.removeEventListener('keydown', onKey);
            document.removeEventListener('pointerdown', onPointer);
        };
    }, [isMenuOpen]);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav
            ref={navRef}
            aria-label="Principal"
            className={`fixed z-50 w-full transition-[background-color,padding,border-color] duration-500 ${
                isScrolled || isMenuOpen
                    ? 'border-b border-white/5 bg-[#030712]/85 py-3 backdrop-blur-lg'
                    : 'border-b border-transparent bg-transparent py-5'
            }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
                {/* Imagens cortadas rente ao desenho: a altura da classe é a altura visível. */}
                <a href="#inicio" className="flex items-center gap-3" aria-label="Venyx Technology, voltar ao início">
                    <img src={logoSimbolo} alt="" width={104} height={120} className="h-10 w-auto sm:h-11" />
                    <img src={logoNome} alt="" width={674} height={120} className="h-5 w-auto sm:h-6" />
                </a>

                <div className="hidden items-center gap-7 text-sm font-medium lg:flex">
                    {links.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            aria-current={activeId === link.id ? 'location' : undefined}
                            className={`transition-colors hover:text-blue-400 ${
                                activeId === link.id ? 'text-blue-400' : 'text-slate-200'
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contato"
                        className="rounded-full border border-blue-500/30 bg-blue-600/10 px-5 py-2.5 text-blue-400 transition-colors duration-300 hover:bg-blue-600 hover:text-white"
                    >
                        Iniciar Projeto
                    </a>
                </div>

                <button
                    ref={menuButtonRef}
                    type="button"
                    className="-mr-2 flex h-11 w-11 items-center justify-center rounded-lg text-slate-200 transition-colors hover:bg-white/5 lg:hidden"
                    onClick={() => setIsMenuOpen((open) => !open)}
                    aria-expanded={isMenuOpen}
                    aria-controls="menu-mobile"
                    aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                >
                    {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
                </button>
            </div>

            {isMenuOpen && (
                <div
                    id="menu-mobile"
                    className="animate-fade-in absolute left-0 top-full flex w-full flex-col border-b border-white/10 bg-[#030712] px-6 py-4 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.6)] lg:hidden"
                >
                    {links.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={closeMenu}
                            aria-current={activeId === link.id ? 'location' : undefined}
                            className={`py-3 text-lg ${activeId === link.id ? 'text-blue-400' : 'text-slate-200'}`}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a href="#contato" onClick={closeMenu} className="mt-1 py-3 text-lg font-semibold text-blue-400">
                        Iniciar Projeto
                    </a>
                </div>
            )}
        </nav>
    );
}
