import { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Code2, ArrowRight } from 'lucide-react';

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const controlClass =
    'rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-blue-600';

export default function ProjectModal({ project, onClose }) {
    const [index, setIndex] = useState(0);
    const dialogRef = useRef(null);
    const closeRef = useRef(null);
    const total = project.images.length;

    const next = () => setIndex((i) => (i + 1) % total);
    const prev = () => setIndex((i) => (i - 1 + total) % total);

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        closeRef.current?.focus();

        const onKey = (e) => {
            if (e.key === 'Escape') {
                e.preventDefault();
                onClose();
                return;
            }
            if (total > 1 && e.key === 'ArrowRight') setIndex((i) => (i + 1) % total);
            if (total > 1 && e.key === 'ArrowLeft') setIndex((i) => (i - 1 + total) % total);
            if (e.key === 'Tab' && dialogRef.current) {
                const items = [...dialogRef.current.querySelectorAll(FOCUSABLE)];
                if (!items.length) return;
                const first = items[0];
                const last = items[items.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };

        document.addEventListener('keydown', onKey);
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = previousOverflow;
        };
    }, [onClose, total]);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12">
            <div
                aria-hidden="true"
                className="animate-fade-in absolute inset-0 bg-[#010308]/80 backdrop-blur-sm"
                onClick={onClose}
            />

            <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-modal-title"
                className="animate-modal-in relative flex max-h-[90svh] w-full max-w-6xl flex-col overflow-y-auto rounded-2xl border border-white/10 bg-[#0a0f1a] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.7)] md:flex-row md:overflow-hidden"
            >
                <button
                    ref={closeRef}
                    type="button"
                    onClick={onClose}
                    className={`${controlClass} absolute right-4 top-4 z-50 p-2.5`}
                    aria-label="Fechar detalhes do projeto"
                >
                    <X size={22} aria-hidden="true" />
                </button>

                <div className="group relative h-[240px] w-full shrink-0 bg-[#030712] sm:h-[320px] md:h-auto md:w-3/5">
                    <img
                        key={project.images[index]}
                        src={project.images[index]}
                        alt={`${project.title}: imagem ${index + 1} de ${total}`}
                        className="animate-fade-in h-full w-full object-cover"
                    />
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {total > 1 && (
                        <>
                            <button
                                type="button"
                                onClick={prev}
                                aria-label="Imagem anterior"
                                className={`${controlClass} absolute left-4 top-1/2 -translate-y-1/2 p-3 md:opacity-0 md:focus-visible:opacity-100 md:group-hover:opacity-100`}
                            >
                                <ChevronLeft size={22} aria-hidden="true" />
                            </button>
                            <button
                                type="button"
                                onClick={next}
                                aria-label="Próxima imagem"
                                className={`${controlClass} absolute right-4 top-1/2 -translate-y-1/2 p-3 md:opacity-0 md:focus-visible:opacity-100 md:group-hover:opacity-100`}
                            >
                                <ChevronRight size={22} aria-hidden="true" />
                            </button>

                            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1">
                                {project.images.map((_, idx) => (
                                    <button
                                        key={idx}
                                        type="button"
                                        onClick={() => setIndex(idx)}
                                        aria-label={`Ver imagem ${idx + 1} de ${total}`}
                                        aria-current={idx === index ? 'true' : undefined}
                                        className="flex h-6 items-center px-1"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className={`block h-2 rounded-full transition-all duration-300 ${
                                                idx === index ? 'w-8 bg-blue-500' : 'w-2 bg-white/50 hover:bg-white/80'
                                            }`}
                                        />
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                </div>

                <div className="relative flex w-full flex-col p-6 sm:p-8 md:w-2/5 md:overflow-y-auto md:p-10">
                    <div aria-hidden="true" className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-600 to-indigo-600" />

                    <h3 id="project-modal-title" className="type-headline pr-10 !text-[1.75rem] text-white md:!text-[2.125rem]">
                        {project.title}
                    </h3>
                    <div aria-hidden="true" className="mb-8 mt-3 h-1 w-16 rounded-full bg-blue-500" />

                    <div className="flex-grow">
                        <h4 className="type-label mb-3 text-blue-400">Sobre o projeto</h4>
                        <p className="mb-8 text-base leading-relaxed text-slate-300">{project.detailedDescription}</p>

                        <h4 className="type-label mb-4 border-b border-white/5 pb-2 text-white">Tecnologias envolvidas</h4>
                        <ul className="mb-8 flex flex-wrap gap-2">
                            {project.techs.map((tech) => (
                                <li
                                    key={tech}
                                    className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#030712] px-3 py-1.5 text-xs font-medium text-blue-300"
                                >
                                    <Code2 size={12} aria-hidden="true" className="text-blue-500" />
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-4 border-t border-white/5 pt-6">
                        <p className="mb-4 text-center text-sm text-slate-400">
                            Precisa de um sistema semelhante para o seu negócio?
                        </p>
                        <a
                            href="#contato"
                            onClick={onClose}
                            className="group flex w-full items-center justify-center gap-2 rounded-xl border border-blue-500/30 bg-blue-600/10 py-4 font-bold text-blue-400 transition-colors duration-300 hover:bg-blue-600 hover:text-white"
                        >
                            Quero construir o meu
                            <ArrowRight
                                size={18}
                                aria-hidden="true"
                                className="transition-transform duration-300 motion-safe:group-hover:translate-x-1"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
