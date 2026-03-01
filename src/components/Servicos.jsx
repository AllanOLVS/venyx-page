import React from 'react';
import { Monitor, Globe, Database } from 'lucide-react';
import FadeIn from './FadeIn';

export default function Servicos() {
    const servicesData = [
        { icon: <Monitor size={32} />, title: "Web & Landing Pages", desc: "Sites de alta conversão, rápidos e com SEO otimizado. A vitrine perfeita para sua empresa na internet." },
        { icon: <Globe size={32} />, title: "Aplicativos Mobile", desc: "Apps iOS e Android com performance nativa e design intuitivo que engajam seus usuários." },
        { icon: <Database size={32} />, title: "Sistemas & Arquitetura", desc: "Plataformas complexas, CRMs, ERPs e APIs escaláveis prontas para suportar o crescimento do seu negócio." }
    ];

    return (
        <section id="servicos" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Nossa <span className="text-blue-400">Expertise</span></h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                            Dominamos as tecnologias mais modernas do mercado para entregar soluções que resolvem problemas reais.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-8">
                    {servicesData.map((service, idx) => (
                        <FadeIn key={idx} delay={idx * 150} direction={idx % 2 === 0 ? 'right' : 'left'}>
                            <div className="group h-full bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px] group-hover:bg-blue-500/20 transition-all"></div>
                                <div className="w-16 h-16 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{service.desc}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}