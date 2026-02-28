import React from 'react';
import { ChevronRight } from 'lucide-react';
import FadeIn from './FadeIn';

export default function Portfolio({ onSelectProject }) {
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

    const infiniteProjects = [...projects, ...projects, ...projects, ...projects];

    return (
        <section id="portfolio" className="py-24 bg-slate-900/30 border-y border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
                <FadeIn>
                    <div className="text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Projetos em <span className="text-blue-400">Destaque</span></h2>
                        <p className="text-slate-400 text-lg max-w-xl mx-auto">
                            Conheça algumas das soluções tecnológicas que desenvolvemos para transformar os negócios dos nossos clientes.
                        </p>
                    </div>
                </FadeIn>
            </div>

            <div className="w-full relative flex overflow-hidden">
                <div className="carousel-track flex w-max animate-infinite-scroll gap-6 px-6 py-8 items-center">
                    {infiniteProjects.map((project, idx) => (
                        <div
                            key={idx}
                            onClick={() => onSelectProject(project)}
                            className="carousel-card flex-shrink-0 w-[300px] md:w-[400px] h-[450px] flex flex-col rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 transition-all duration-500 cursor-pointer group/card"
                        >
                            <div className="relative h-48 flex-shrink-0 overflow-hidden">
                                <div className="absolute inset-0 bg-blue-900/30 z-10 mix-blend-multiply transition-opacity duration-500 carousel-card-overlay"></div>
                                <img
                                    src={project.images[0]}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />

                                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                                    <span className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-full flex items-center gap-2 transform translate-y-4 group-hover/card:translate-y-0 transition-transform">
                                        Ver detalhes <ChevronRight size={16} />
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3 transition-colors">{project.title}</h3>
                                    <p className="text-slate-400 text-sm line-clamp-3 mb-4">{project.description}</p>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.techs.map((tech, i) => (
                                        <span key={i} className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 rounded-full text-slate-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}