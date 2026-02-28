import React from 'react';
import { Mail } from 'lucide-react';
import FadeIn from './FadeIn';

export default function Contato() {
    return (
        <section id="contato" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-900/10"></div>
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
                <FadeIn>
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-400 mb-6 shadow-[0_0_30px_rgba(37,99,235,0.2)]">
                            <Mail size={32} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Pronto para <span className="text-blue-400">digitalizar</span> o seu negócio?</h2>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                            Não importa o quão complexa seja sua ideia, nossa equipe tem a expertise para transformá-la em um software sob medida. Vamos construir o futuro juntos.
                        </p>
                    </div>

                    <form className="bg-[#0a0f1a]/80 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-2xl flex flex-col gap-6 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex flex-col">
                                <label className="text-sm font-semibold text-slate-300 mb-2">Nome *</label>
                                <input
                                    type="text"
                                    placeholder="Seu nome completo"
                                    required
                                    className="bg-[#030712] border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-sm font-semibold text-slate-300 mb-2">E-mail *</label>
                                <input
                                    type="email"
                                    placeholder="seu.email@exemplo.com"
                                    required
                                    className="bg-[#030712] border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-slate-300 mb-2">Assunto</label>
                            <input
                                type="text"
                                placeholder="Motivo do contato (Ex: Desenvolvimento de App, Novo Sistema...)"
                                className="bg-[#030712] border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-slate-300 mb-2">Mensagem</label>
                            <textarea
                                rows="5"
                                placeholder="Escreva os detalhes da sua ideia ou projeto aqui..."
                                className="bg-[#030712] border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                            ></textarea>
                        </div>

                        <div className="pt-2 flex justify-center">
                            <button type="submit" className="w-full md:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] uppercase tracking-wider text-sm">
                                Enviar Mensagem
                            </button>
                        </div>
                    </form>
                </FadeIn>
            </div>
        </section>
    );
}