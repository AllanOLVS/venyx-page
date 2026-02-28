import React from 'react';
import { ExternalLink, Linkedin, Github, ChevronRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#010308] pt-16 pb-8 border-t border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-12 mb-12">
                <div className="md:col-span-2">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-700 rounded-md flex items-center justify-center font-bold text-sm text-white">VX</div>
                        <span className="text-xl font-bold text-white">Venyx <span className="text-blue-500">Technology</span></span>
                    </div>
                    <p className="text-slate-400 max-w-sm mb-6">
                        Transformamos ideias em software. Empresa especializada no desenvolvimento de Apps, Sites e Sistemas sob medida.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://linktr.ee/venyxtechnology" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors"><ExternalLink size={20} /></a>
                        <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
                        <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors"><Github size={20} /></a>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-6">Navegação</h4>
                    <ul className="space-y-3 text-slate-400">
                        <li><a href="#servicos" className="hover:text-blue-400 transition-colors">Serviços</a></li>
                        <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfólio</a></li>
                        <li><a href="#time" className="hover:text-blue-400 transition-colors">Especialistas</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-6">Contato</h4>
                    <ul className="space-y-3 text-slate-400">
                        <li>contato@venyxtechnology.com.br</li>
                        <li>Brasil</li>
                        <li className="pt-2">
                            <a href="https://linktr.ee/venyxtechnology" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-medium">
                                Nosso Linktree <ChevronRight size={16} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
                <p>© {new Date().getFullYear()} Venyx Technology. Todos os direitos reservados.</p>
                <p className="mt-2 md:mt-0">Desenvolvido com excelência.</p>
            </div>
        </footer>
    );
}