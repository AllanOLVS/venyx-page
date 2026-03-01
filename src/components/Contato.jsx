import React, { useRef, useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import FadeIn from './FadeIn';
import emailjs from '@emailjs/browser';

export default function Contato() {
    const formRef = useRef();
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs.sendForm(
            'service_txx0vad',
            'template_69j48gd',
            formRef.current,
            'YoksSbmWuadpt2kp8'
        )
            .then(() => {
                setStatus('success');
                formRef.current.reset();
                setTimeout(() => setStatus('idle'), 5000);
            })
            .catch(() => {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            });
    };

    return (
        <section id="contato" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-900/10"></div>
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
                <FadeIn direction="right">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-400 mb-6 shadow-[0_0_30px_rgba(37,99,235,0.2)]">
                            <Mail size={32} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Pronto para <span className="text-blue-400">digitalizar</span> o seu negócio?</h2>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                            Não importa o quão complexa seja sua ideia, nossa equipe tem a expertise para transformá-la em um software sob medida. Vamos construir o futuro juntos.
                        </p>
                    </div>

                    <form ref={formRef} onSubmit={handleSubmit} className="bg-[#0a0f1a]/80 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-2xl flex flex-col gap-6 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex flex-col">
                                <label className="text-sm font-semibold text-slate-300 mb-2">Nome *</label>
                                <input
                                    type="text"
                                    name="nome"
                                    placeholder="Seu nome completo"
                                    required
                                    className="bg-[#030712] border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-sm font-semibold text-slate-300 mb-2">E-mail *</label>
                                <input
                                    type="email"
                                    name="email"
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
                                name="assunto"
                                placeholder="Motivo do contato (Ex: Desenvolvimento de App, Novo Sistema...)"
                                className="bg-[#030712] border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-slate-300 mb-2">Mensagem</label>
                            <textarea
                                rows="5"
                                name="mensagem"
                                placeholder="Escreva os detalhes da sua ideia ou projeto aqui..."
                                className="bg-[#030712] border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                            ></textarea>
                        </div>

                        <div className="pt-2 flex flex-col items-center gap-3">
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className={`w-full md:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] uppercase tracking-wider text-sm flex items-center justify-center gap-2 ${status === 'sending' ? 'opacity-60 cursor-not-allowed' : ''}`}
                            >
                                {status === 'sending' ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        Enviar Mensagem
                                    </>
                                )}
                            </button>

                            {status === 'success' && (
                                <div className="flex items-center gap-2 text-green-400 text-sm font-medium animate-[fadeIn_0.3s_ease-out]">
                                    <CheckCircle size={18} />
                                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="flex items-center gap-2 text-red-400 text-sm font-medium animate-[fadeIn_0.3s_ease-out]">
                                    <AlertCircle size={18} />
                                    Erro ao enviar. Tente novamente ou entre em contato via WhatsApp.
                                </div>
                            )}
                        </div>
                    </form>

                    <p className="text-center text-slate-500 text-sm mt-6">
                        Ou entre em contato diretamente: <a href="mailto:venyxtechnology@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">venyxtechnology@gmail.com</a> | <a href="https://wa.me/5575988169508" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">(75) 98816-9508</a>
                    </p>
                </FadeIn>
            </div>
        </section>
    );
}