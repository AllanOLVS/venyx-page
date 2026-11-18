import { Github, Linkedin } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { team, sharedStack, initials } from '../data/team';

const linkClass =
    'flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-colors duration-300 hover:bg-blue-600 hover:text-white';

export default function Time() {
    return (
        <section id="especialistas" aria-labelledby="especialistas-title" className="py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-6 md:px-12">
                <SectionHeading
                    id="especialistas-title"
                    intro="Mais do que empresários, somos engenheiros de software na linha de frente, garantindo a excelência técnica de cada linha de código."
                >
                    Os <span className="text-blue-400">Especialistas</span>
                </SectionHeading>

                <ul className="mt-16 grid grid-cols-2 gap-3 sm:gap-6 md:mt-20 lg:grid-cols-4">
                    {team.map((member) => (
                        <li
                            key={member.name}
                            className="flex flex-col items-center rounded-2xl border border-white/10 bg-[#0a0f1a] px-3 pb-5 pt-5 text-center sm:p-6 sm:pb-7"
                        >
                            <div className="mb-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-1 sm:mb-6 sm:h-32 sm:w-32">
                                {member.image ? (
                                    <img
                                        src={member.image}
                                        alt={`Foto de ${member.name}`}
                                        loading="lazy"
                                        className="h-full w-full rounded-full border-4 border-[#0a0f1a] object-cover"
                                    />
                                ) : (
                                    <div
                                        aria-hidden="true"
                                        className="type-numeral flex h-full w-full items-center justify-center rounded-full border-4 border-[#0a0f1a] bg-[#0f172a] text-2xl text-blue-400 sm:text-3xl"
                                    >
                                        {initials(member.name)}
                                    </div>
                                )}
                            </div>
                            <h3 className="type-title text-base text-white sm:text-xl">{member.name}</h3>
                            <p className="mt-1 text-xs font-medium text-blue-400 text-balance sm:text-sm">{member.role}</p>

                            {(member.github || member.linkedin) && (
                                <div className="mt-auto flex gap-2 pt-5 sm:gap-3 sm:pt-6">
                                    {member.github && (
                                        <a href={member.github} target="_blank" rel="noreferrer" className={linkClass}>
                                            <Github size={20} aria-hidden="true" />
                                            <span className="sr-only">GitHub de {member.name} (abre em nova aba)</span>
                                        </a>
                                    )}
                                    {member.linkedin && (
                                        <a href={member.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
                                            <Linkedin size={20} aria-hidden="true" />
                                            <span className="sr-only">LinkedIn de {member.name} (abre em nova aba)</span>
                                        </a>
                                    )}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                <div className="mt-6 grid gap-8 rounded-2xl border border-white/10 p-6 md:p-8 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-12">
                    <div>
                        <h3 className="type-title text-xl text-white">Uma stack, todas as camadas</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-400">
                            Os quatro sócios são fullstack: cuidam da tela que o cliente vê, do servidor e da
                            infraestrutura na nuvem.
                        </p>
                    </div>
                    <dl className="grid gap-6 sm:grid-cols-3">
                        {sharedStack.map((group) => (
                            <div key={group.layer}>
                                <dt className="type-label text-slate-400">{group.layer}</dt>
                                <dd className="mt-3 flex flex-wrap gap-2">
                                    {group.techs.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}
