import { ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

const steps = [
    {
        title: 'Conversa',
        desc: 'Você conta a ideia pelo WhatsApp ou pelo formulário, do jeito que souber explicar. A primeira conversa é sem custo e sem compromisso.',
    },
    {
        title: 'Proposta',
        desc: 'Você recebe uma proposta com o escopo e o prazo do projeto, explicados em linguagem simples.',
    },
    {
        title: 'Desenvolvimento',
        desc: 'Construímos em etapas e mostramos cada entrega, para você acompanhar e ajustar no caminho.',
    },
    {
        title: 'Lançamento e manutenção',
        desc: 'Colocamos o projeto no ar e continuamos cuidando dele depois do lançamento.',
    },
];

export default function ComoFunciona() {
    return (
        <section
            id="como-funciona"
            aria-labelledby="como-funciona-title"
            className="border-y border-white/10 bg-[#0a0f1a] py-24 md:py-32"
        >
            <div className="mx-auto max-w-7xl px-6 md:px-12">
                <SectionHeading id="como-funciona-title" intro="Do primeiro contato ao projeto no ar, em quatro etapas.">
                    Como <span className="text-blue-400">funciona</span>
                </SectionHeading>

                {/* Diagrama do processo: uma linha contínua liga as quatro etapas. */}
                <ol className="relative mt-16 grid gap-12 md:mt-20 md:grid-cols-2 md:gap-x-10 lg:grid-cols-4 lg:gap-8">
                    <span
                        aria-hidden="true"
                        className="absolute left-0 right-0 top-[6.5625rem] hidden h-px bg-white/10 lg:block"
                    />
                    {steps.map((step, idx) => (
                        <li key={step.title} className="relative">
                            <span aria-hidden="true" className="type-numeral block text-7xl text-blue-400 md:text-[5rem]">
                                {String(idx + 1).padStart(2, '0')}
                            </span>
                            <span
                                aria-hidden="true"
                                className="relative z-10 mt-5 block h-2.5 w-2.5 rounded-full bg-blue-500 ring-4 ring-[#0a0f1a]"
                            />
                            <h3 className="type-title mt-6 text-xl text-white md:text-2xl">
                                <span className="sr-only">Etapa {idx + 1}: </span>
                                {step.title}
                            </h3>
                            <p className="mt-3 leading-relaxed text-slate-400">{step.desc}</p>
                        </li>
                    ))}
                </ol>

                <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between md:mt-20">
                    <p className="type-title text-xl text-white md:text-2xl">Começa por uma conversa.</p>
                    <a
                        href="#contato"
                        className="group inline-flex items-center gap-2 self-start rounded-full border border-blue-500/30 bg-blue-600/10 px-6 py-3 font-semibold text-blue-400 transition-colors duration-300 hover:bg-blue-600 hover:text-white sm:self-auto"
                    >
                        Contar minha ideia
                        <ArrowRight
                            size={18}
                            aria-hidden="true"
                            className="transition-transform duration-300 motion-safe:group-hover:translate-x-1"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
