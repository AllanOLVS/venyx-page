import { Monitor, Smartphone, Database } from 'lucide-react';
import SectionHeading from './SectionHeading';

const services = [
    {
        icon: <Monitor size={22} aria-hidden="true" className="mt-1.5 shrink-0 text-blue-400" />,
        title: 'Sites e landing pages',
        desc: 'Seu negócio apresentado com clareza em qualquer tela: rápido para abrir e preparado para ser encontrado no Google.',
        examples: ['Site institucional', 'Landing page de campanha', 'Loja virtual'],
    },
    {
        icon: <Smartphone size={22} aria-hidden="true" className="mt-1.5 shrink-0 text-blue-400" />,
        title: 'Aplicativos para celular',
        desc: 'Apps para iOS e Android que seus clientes ou sua equipe instalam e usam no dia a dia.',
        examples: ['App de agendamento', 'App de delivery', 'App para equipe de campo'],
    },
    {
        icon: <Database size={22} aria-hidden="true" className="mt-1.5 shrink-0 text-blue-400" />,
        title: 'Sistemas e plataformas',
        desc: 'Sistemas que organizam a operação da empresa: gestão de clientes (CRM), gestão da empresa (ERP), produtos vendidos por assinatura (SaaS) e integrações entre ferramentas (APIs).',
        examples: ['Controle de estoque e vendas', 'Gestão de clientes', 'Plataforma por assinatura'],
    },
];

export default function Servicos() {
    return (
        <section id="servicos" aria-labelledby="servicos-title" className="py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-6 md:px-12">
                <SectionHeading
                    id="servicos-title"
                    intro="Do primeiro site de um pequeno negócio ao sistema que organiza uma grande empresa. Explicamos cada escolha sem jargão."
                >
                    O que <span className="text-blue-400">construímos</span>
                </SectionHeading>

                <ul className="mt-16 border-t border-white/10 md:mt-20">
                    {services.map(({ icon, title, desc, examples }) => (
                        <li
                            key={title}
                            className="grid gap-5 border-b border-white/10 py-9 md:grid-cols-12 md:gap-8 md:py-12"
                        >
                            <div className="flex items-start gap-3 md:col-span-4">
                                {icon}
                                <h3 className="type-title text-2xl text-white md:text-[1.75rem]">{title}</h3>
                            </div>
                            <p className="text-[1.0625rem] leading-relaxed text-slate-300 md:col-span-5">{desc}</p>
                            <div className="md:col-span-3">
                                <p className="type-label mb-3 text-slate-400">Exemplos</p>
                                <ul className="flex flex-wrap gap-2">
                                    {examples.map((example) => (
                                        <li
                                            key={example}
                                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                                        >
                                            {example}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
