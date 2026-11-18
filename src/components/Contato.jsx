import { useRef, useState } from 'react';
import { Send, CheckCircle, AlertCircle, Clock, MessageCircle, UserCheck, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SectionHeading from './SectionHeading';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_URL, PHONE_DISPLAY, EMAIL } from '../data/contact';

const fieldClass =
    'w-full rounded-lg border border-white/10 bg-[#030712] px-4 py-3.5 text-base text-white placeholder:text-slate-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500';
const labelClass = 'mb-2 block text-sm font-semibold text-slate-300';
const directClass =
    'inline-flex items-center gap-3 text-[1.0625rem] font-medium text-white underline decoration-white/20 underline-offset-[6px] transition-colors hover:text-blue-300 hover:decoration-blue-300';
const promiseIcon = 'mt-0.5 shrink-0 text-blue-400';

const promises = [
    { icon: <UserCheck size={20} aria-hidden="true" className={promiseIcon} />, text: 'Você fala direto com um dos sócios, sem intermediários.' },
    { icon: <Clock size={20} aria-hidden="true" className={promiseIcon} />, text: 'Resposta em até 24 horas úteis.' },
    { icon: <MessageCircle size={20} aria-hidden="true" className={promiseIcon} />, text: 'A primeira conversa é sem custo e sem compromisso.' },
];

function Required() {
    return (
        <>
            <span aria-hidden="true" className="text-blue-400"> *</span>
            <span className="sr-only"> (obrigatório)</span>
        </>
    );
}

export default function Contato() {
    const formRef = useRef(null);
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleSubmit = (e) => {
        e.preventDefault();
        if (status === 'sending') return;
        setStatus('sending');

        emailjs
            .sendForm('service_txx0vad', 'template_69j48gd', formRef.current, 'YoksSbmWuadpt2kp8')
            .then(() => {
                setStatus('success');
                formRef.current.reset();
            })
            .catch((err) => {
                console.error('EmailJS Error:', err);
                setStatus('error');
            });
    };

    const clearFeedback = () => {
        if (status === 'success' || status === 'error') setStatus('idle');
    };

    return (
        <section id="contato" aria-labelledby="contato-title" className="relative bg-blue-900/10 py-24 md:py-32">
            <div className="mx-auto grid max-w-7xl gap-14 px-6 md:px-12 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-5">
                    <SectionHeading id="contato-title" layout="stacked">
                        Conte o que você quer <span className="text-blue-400">construir</span>
                    </SectionHeading>

                    <ul className="mt-10 border-t border-white/10">
                        {promises.map(({ icon, text }) => (
                            <li key={text} className="flex items-start gap-4 border-b border-white/10 py-5">
                                {icon}
                                <span className="text-[1.0625rem] leading-snug text-slate-200">{text}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-10">
                        <p className="type-label text-slate-400">Prefere conversar agora?</p>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className={directClass}>
                                    <WhatsAppIcon size={18} className="shrink-0 text-[#25D366]" />
                                    WhatsApp {PHONE_DISPLAY}
                                    <span className="sr-only">(abre em nova aba)</span>
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${EMAIL}`} className={directClass}>
                                    <Mail size={18} aria-hidden="true" className="shrink-0 text-blue-400" />
                                    <span className="break-all">{EMAIL}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="lg:col-span-7">
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    onInput={clearFeedback}
                    className="relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f1a] p-6 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.6)] sm:p-8 md:p-10"
                >
                    <div aria-hidden="true" className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-600 to-indigo-600" />

                    <div className="grid gap-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="contato-nome" className={labelClass}>
                                Nome<Required />
                            </label>
                            <input
                                id="contato-nome"
                                type="text"
                                name="nome"
                                autoComplete="name"
                                placeholder="Seu nome completo"
                                required
                                className={fieldClass}
                            />
                        </div>
                        <div>
                            <label htmlFor="contato-email" className={labelClass}>
                                E-mail<Required />
                            </label>
                            <input
                                id="contato-email"
                                type="email"
                                name="email"
                                autoComplete="email"
                                placeholder="seu.email@exemplo.com"
                                required
                                className={fieldClass}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="contato-assunto" className={labelClass}>
                            Assunto
                        </label>
                        <input
                            id="contato-assunto"
                            type="text"
                            name="assunto"
                            placeholder="Ex.: site para minha clínica, app de agendamento, sistema de estoque"
                            className={fieldClass}
                        />
                    </div>

                    <div>
                        <label htmlFor="contato-mensagem" className={labelClass}>
                            Mensagem
                        </label>
                        <textarea
                            id="contato-mensagem"
                            rows="5"
                            name="mensagem"
                            placeholder="Conte o que você precisa, do jeito que souber explicar."
                            className={`${fieldClass} resize-y`}
                        ></textarea>
                    </div>

                    <div className="flex flex-col items-center gap-4 pt-2">
                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            aria-disabled={status === 'sending'}
                            className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-10 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[0_8px_24px_-10px_rgba(37,99,235,0.7)] transition-[background-color,box-shadow,opacity] duration-300 hover:bg-blue-500 hover:shadow-[0_12px_32px_-10px_rgba(37,99,235,0.9)] disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
                        >
                            {status === 'sending' ? (
                                <>
                                    <span
                                        aria-hidden="true"
                                        className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white motion-safe:animate-spin"
                                    />
                                    Enviando...
                                </>
                            ) : (
                                <>
                                    <Send size={18} aria-hidden="true" />
                                    Enviar mensagem
                                </>
                            )}
                        </button>

                        <div role="status" aria-live="polite" className="w-full text-center">
                            {status === 'success' && (
                                <p className="animate-fade-in inline-flex items-start gap-2 text-left text-sm font-medium text-green-400">
                                    <CheckCircle size={18} aria-hidden="true" className="mt-px shrink-0" />
                                    Mensagem enviada. Um dos sócios responde em até 24 horas úteis no e-mail que
                                    você informou.
                                </p>
                            )}
                            {status === 'error' && (
                                <p className="animate-fade-in inline-flex items-start gap-2 text-left text-sm font-medium text-red-400">
                                    <AlertCircle size={18} aria-hidden="true" className="mt-px shrink-0" />
                                    <span>
                                        Não foi possível enviar a mensagem. Tente de novo em instantes ou fale com a
                                        gente pelo{' '}
                                        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                                            WhatsApp
                                        </a>
                                        .
                                    </span>
                                </p>
                            )}
                        </div>
                    </div>
                </form>

                </div>
            </div>
        </section>
    );
}
