import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoVenyx from '../assets/logos/logo-venyx-sfundo.png';

export default function Navbar({ mainContentBlur }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#030712]/80 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'} ${mainContentBlur}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                <a href="#" className="flex items-center gap-3 cursor-pointer group">
                    <img src={logoVenyx} alt="Venyx Technology" className="w-12 h-12 object-contain group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.6)] transition-all" />
                    <span className="text-2xl font-bold tracking-tight text-white">Venyx <span className="text-blue-500">Technology</span></span>
                </a>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <a href="#servicos" className="hover:text-blue-400 transition-colors">Serviços</a>
                    <a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfólio</a>
                    <a href="#time" className="hover:text-blue-400 transition-colors">Especialistas</a>
                    <a href="#contato" className="px-5 py-2.5 rounded-full bg-blue-600/10 text-blue-400 border border-blue-500/30 hover:bg-blue-600 hover:text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300">
                        Iniciar Projeto
                    </a>
                </div>

                <button className="md:hidden text-slate-300" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#030712]/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
                    <a href="#servicos" onClick={() => setIsMobileMenuOpen(false)} className="text-lg">Serviços</a>
                    <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)} className="text-lg">Portfólio</a>
                    <a href="#time" onClick={() => setIsMobileMenuOpen(false)} className="text-lg">Especialistas</a>
                    <a href="#contato" onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-blue-400 font-semibold mt-2">Iniciar Projeto</a>
                </div>
            )}
        </nav>
    );
}