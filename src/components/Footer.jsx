import { ChevronRight, Mail, Phone } from 'lucide-react';
import logoSimbolo from '../assets/logos/navbar-simbolo.png';
import logoNome from '../assets/logos/navbar-nome.png';
import { WHATSAPP_URL, PHONE_DISPLAY, EMAIL, LINKTREE_URL } from '../data/contact';

const navLinks = [
    { href: '#servicos', label: 'Serviços' },
    { href: '#como-funciona', label: 'Como funciona' },
    { href: '#portfolio', label: 'Portfólio' },
    { href: '#especialistas', label: 'Especialistas' },
    { href: '#contato', label: 'Contato' },
];

export default function Footer() {
    return (
        <footer className="relative border-t border-white/5 bg-[#010308] pb-8 pt-16">
            <div className="mx-auto mb-12 grid max-w-7xl gap-12 px-6 md:grid-cols-4 md:px-12">
                <div className="md:col-span-2">
                    {/* Mesma logo e proporções da navbar. */}
                    <div className="mb-5 flex items-center gap-3">
                        <img src={logoSimbolo} alt="" width={104} height={120} className="h-11 w-auto" />
                        <img src={logoNome} alt="" width={674} height={120} className="h-6 w-auto" />
                        <span className="sr-only">Venyx Technology</span>
                    </div>
                    <p className="max-w-sm leading-relaxed text-slate-400">
                        Transformamos ideias em software. Empresa especializada no desenvolvimento de Apps, Sites e
                        Sistemas sob medida.
                    </p>
                </div>

                <nav aria-label="Rodapé">
                    <h2 className="type-label mb-5 text-white">Navegação</h2>
                    <ul className="space-y-3 text-slate-400">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="transition-colors hover:text-blue-400">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div>
                    <h2 className="type-label mb-5 text-white">Contato</h2>
                    <ul className="space-y-3 text-slate-400">
                        <li className="flex items-center gap-2">
                            <Mail size={16} aria-hidden="true" className="shrink-0 text-blue-400" />
                            <a href={`mailto:${EMAIL}`} className="break-all transition-colors hover:text-blue-400">
                                {EMAIL}
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone size={16} aria-hidden="true" className="shrink-0 text-blue-400" />
                            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="transition-colors hover:text-blue-400">
                                WhatsApp {PHONE_DISPLAY}
                            </a>
                        </li>
                        <li>Brasil</li>
                        <li className="pt-2">
                            <a
                                href={LINKTREE_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1 font-medium text-blue-400 transition-colors hover:text-blue-300"
                            >
                                Nosso Linktree <ChevronRight size={16} aria-hidden="true" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mx-auto max-w-7xl border-t border-white/5 px-6 pt-8 text-center text-sm text-slate-400 md:px-12 md:text-left">
                <p>© {new Date().getFullYear()} Venyx Technology. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
