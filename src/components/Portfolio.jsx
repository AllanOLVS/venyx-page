import { ChevronRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

// Projetos provisórios: serão substituídos pelos projetos reais da empresa.
const projects = [
    {
        title: "Sistema de Gestão Logística",
        description: "Plataforma completa para rastreamento de frotas e otimização de rotas em tempo real.",
        detailedDescription: "Este sistema foi criado para resolver a falta de controle sobre veículos em trânsito. Através do software, gestores conseguem acompanhar a localização dos motoristas no mapa em tempo real, prever atrasos usando inteligência artificial e organizar manutenções preventivas. O resultado gerou mais economia e segurança nas entregas.",
        techs: ["React", "Node.js", "PostgreSQL", "Google Maps API"],
        images: [
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800&h=500",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500",
            "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800&h=500"
        ]
    },
    {
        title: "App Fintech (Banco Digital)",
        description: "Aplicativo móvel para transações financeiras seguras com integração de pagamentos e dashboard analítico.",
        detailedDescription: "Desenvolvemos um banco digital do zero, focado em facilidade de uso para clientes finais. O aplicativo permite transferências via PIX, pagamentos de boletos lendo o código de barras com a câmera, e possui uma tela inicial que resume todos os gastos mensais por categoria. A segurança foi construída com os mesmos padrões de grandes bancos.",
        techs: ["React Native", "Java", "AWS", "Criptografia de ponta"],
        images: [
            "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800&h=500",
            "https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?auto=format&fit=crop&q=80&w=800&h=500",
            "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800&h=500"
        ]
    },
    {
        title: "Plataforma de E-commerce B2B",
        description: "E-commerce escalável de alta performance projetado para suportar milhares de requisições simultâneas.",
        detailedDescription: "Diferente de uma loja comum, esta plataforma foi feita para atacadistas (empresas vendendo para empresas). O sistema calcula impostos automaticamente dependendo do estado do comprador, permite compras em grande volume com descontos progressivos, e integra direto com o estoque físico. Ele foi preparado para não travar mesmo em dias de Black Friday.",
        techs: ["Next.js", "Python", "Redis", "Integração ERP"],
        images: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500",
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800&h=500",
            "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=500"
        ]
    }
];

export default function Portfolio({ onSelectProject }) {
    return (
        <section id="portfolio" aria-labelledby="portfolio-title" className="py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-6 md:px-12">
                <SectionHeading
                    id="portfolio-title"
                    intro="Conheça algumas das soluções tecnológicas que desenvolvemos para transformar os negócios dos nossos clientes."
                >
                    Projetos em <span className="text-blue-400">Destaque</span>
                </SectionHeading>

                <ul className="-mx-6 mt-16 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
                    {projects.map((project) => (
                        <li key={project.title} className="w-[82%] shrink-0 snap-start sm:w-[58%] md:w-auto">
                            <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-colors duration-300 hover:border-blue-500/40 has-[:focus-visible]:border-blue-400 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-blue-400/40">
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <img
                                        src={project.images[0]}
                                        alt=""
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03]"
                                    />
                                    <div aria-hidden="true" className="absolute inset-0 bg-blue-900/30 mix-blend-multiply" />
                                </div>
                                <div className="flex flex-1 flex-col p-6">
                                    <h3 className="type-title text-xl text-white">
                                        <button
                                            type="button"
                                            onClick={() => onSelectProject(project)}
                                            aria-haspopup="dialog"
                                            className="text-left after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
                                        >
                                            {project.title}
                                        </button>
                                    </h3>
                                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-400">
                                        {project.description}
                                    </p>
                                    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tecnologias">
                                        {project.techs.map((tech) => (
                                            <li
                                                key={tech}
                                                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                                            >
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                    <span aria-hidden="true" className="mt-auto block pt-6">
                                        <span className="flex items-center gap-1.5 border-t border-white/5 pt-5 text-sm font-semibold text-blue-400 transition-colors group-hover:text-blue-300">
                                            Ver detalhes
                                            <ChevronRight
                                                size={16}
                                                className="transition-transform duration-300 motion-safe:group-hover:translate-x-0.5"
                                            />
                                        </span>
                                    </span>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
