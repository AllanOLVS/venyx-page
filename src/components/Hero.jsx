import { ArrowRight } from 'lucide-react';
import { team, initials } from '../data/team';
import { WHATSAPP_URL } from '../data/contact';
import WhatsAppIcon from './WhatsAppIcon';

const facts = [
    'Quatro sócios engenheiros',
    'Resposta em até 24h úteis',
    'Primeira conversa sem custo',
];

export default function Hero() {
    return (
        <section id="inicio" aria-labelledby="hero-title" className="relative flex min-h-[100svh] flex-col pt-28 lg:pt-32">
            <div className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-14 px-6 pb-16 md:px-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-20">
                <div className="hero-copy">
                    <h1 id="hero-title" className="type-display text-white">
                        <span className="block">Você conversa com quem</span>
                        <span className="block text-blue-400">escreve o código.</span>
                    </h1>

                    <p className="mt-8 max-w-[36rem] text-lg leading-relaxed text-slate-300 md:text-xl md:leading-relaxed">
                        A Venyx é formada por quatro sócios engenheiros. Criamos sites, aplicativos e sistemas sob
                        medida, e quem atende o seu projeto é quem constrói: sem repasse para terceiros.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
                        <a
                            href="#contato"
                            className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-7 py-4 font-semibold text-white shadow-[0_8px_24px_-10px_rgba(37,99,235,0.7)] transition-[background-color,box-shadow] duration-300 hover:bg-blue-500 hover:shadow-[0_12px_32px_-10px_rgba(37,99,235,0.9)] sm:w-auto"
                        >
                            Falar com um sócio
                            <ArrowRight
                                size={18}
                                aria-hidden="true"
                                className="transition-transform duration-300 motion-safe:group-hover:translate-x-1"
                            />
                        </a>
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg border border-white/10 bg-white/5 px-7 py-4 font-semibold text-slate-200 transition-colors duration-300 hover:bg-white/10 hover:text-white sm:w-auto"
                        >
                            <WhatsAppIcon size={18} className="text-[#25D366]" />
                            Chamar no WhatsApp
                            <span className="sr-only">(abre em nova aba)</span>
                        </a>
                    </div>
                </div>

                <figure>
                    <ul className="grid grid-cols-4 gap-2 sm:gap-3 lg:grid-cols-2 lg:gap-4">
                        {team.map((member, idx) => (
                            <li
                                key={member.name}
                                className="hero-portrait relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10 bg-[#0a0f1a] lg:aspect-[4/5] lg:rounded-2xl"
                                style={{ '--i': idx }}
                            >
                                {member.image ? (
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="h-full w-full object-cover object-[center_25%]"
                                    />
                                ) : (
                                    <div
                                        role="img"
                                        aria-label={member.name}
                                        className="type-numeral flex h-full w-full items-center justify-center bg-[#0f172a] text-2xl text-blue-400 lg:text-5xl"
                                    >
                                        {initials(member.name)}
                                    </div>
                                )}
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#030712]/95 via-[#030712]/60 to-transparent px-2 pb-2 pt-8 lg:px-4 lg:pb-4"
                                >
                                    <p className="type-title truncate text-xs text-white sm:text-sm lg:text-base">
                                        <span className="lg:hidden">{member.name.split(' ')[0]}</span>
                                        <span className="hidden lg:inline">{member.name}</span>
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <figcaption className="mt-4 text-sm text-slate-400 lg:mt-5">
                        Os sócios que vão atender e construir o seu projeto.{' '}
                        <a
                            href="#especialistas"
                            className="font-medium text-blue-400 underline decoration-blue-400/40 underline-offset-4 transition-colors hover:text-blue-300 hover:decoration-blue-300"
                        >
                            Conheça o time
                        </a>
                    </figcaption>
                </figure>
            </div>

            <div className="border-t border-white/10">
                <ul className="mx-auto grid max-w-7xl px-6 md:grid-cols-3 md:px-12">
                    {facts.map((fact, idx) => (
                        <li
                            key={fact}
                            className={`type-label flex items-center gap-3 py-4 text-slate-300 md:py-6 ${
                                idx > 0 ? 'border-t border-white/10 md:border-l md:border-t-0 md:pl-6' : ''
                            }`}
                        >
                            <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                            {fact}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
