import React from 'react';
import { ExternalLink, Linkedin, Github, ChevronRight, Mail, Phone } from 'lucide-react';
import logoVenyx from '../assets/logos/logo-venyx-sfundo.png';

export default function Footer() {
    return (
        <footer className="bg-[#010308] pt-16 pb-8 border-t border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-12 mb-12">
                <div className="md:col-span-2">
                    <div className="flex items-center gap-2 mb-6">
                        <img src={logoVenyx} alt="Venyx Technology" className="w-8 h-8 object-contain" />
                        <span className="text-xl font-bold text-white">Venyx <span className="text-blue-500">Technology</span></span>
                    </div>
                    <p className="text-slate-400 max-w-sm mb-6">
                        Transformamos ideias em software. Empresa especializada no desenvolvimento de Apps, Sites e Sistemas sob medida.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://linktr.ee/venyxtechnology" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors"><ExternalLink size={20} /></a>
                        <a href="https://wa.me/5575988169508" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#25D366] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </a>
                        <a href="mailto:venyxtechnology@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors"><Mail size={20} /></a>
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
                        <li className="flex items-center gap-2">
                            <Mail size={16} className="text-blue-400 flex-shrink-0" />
                            <a href="mailto:venyxtechnology@gmail.com" className="hover:text-blue-400 transition-colors">venyxtechnology@gmail.com</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone size={16} className="text-blue-400 flex-shrink-0" />
                            <a href="https://wa.me/5575988169508" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">(75) 98816-9508</a>
                        </li>
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