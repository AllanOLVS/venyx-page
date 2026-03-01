import React from 'react';
import { Cpu, Github, Linkedin } from 'lucide-react';
import FadeIn from './FadeIn';
import fotoAllan from '../assets/image-profile-team/Foto-Allan-Profissional.png';
import fotoGabriel from '../assets/image-profile-team/foto-gabriel-profissional.jpeg';
import fotoLucas from '../assets/image-profile-team/foto-lucas-profissional.jpeg';

export default function Time() {
    const team = [
        {
            name: "Allan Oliveira",
            role: "Co-Founder & Software Engineer",
            stack: "Fullstack Developer | Java, Spring, Phyton, JavaScript, Node, React, Tailwind, AWS, SQL",
            github: "https://github.com/AllanOLVS",
            linkedin: "https://www.linkedin.com/in/allan-oliveira-224120260",
            image: fotoAllan
        },
        {
            name: "Gabriel Leal",
            role: "Co-Founder & Software Engineer",
            stack: "Fullstack Developer | Java, Spring, Phyton, JavaScript, Node, React, Tailwind, AWS, SQL",
            github: "https://github.com/Gabriellealsantos",
            linkedin: "https://www.linkedin.com/in/gabriel-leal-santos/",
            image: fotoGabriel
        },
        {
            name: "Lucas Torres",
            role: "Co-Founder & Software Engineer",
            stack: "Fullstack Developer | Java, Spring, Phyton, JavaScript, Node, React, Tailwind, AWS, SQL",
            github: "https://github.com/lucas-torres10",
            linkedin: "https://www.linkedin.com/in/lucas-torres-05879a221/",
            image: fotoLucas
        }
    ];

    return (
        <section id="time" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <FadeIn>
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Os <span className="text-blue-400">Especialistas</span></h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                            Mais do que empresários, somos engenheiros de software na linha de frente, garantindo a excelência técnica de cada linha de código.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-10">
                    {team.map((member, idx) => (
                        <FadeIn key={idx} delay={idx * 150} direction={idx % 2 === 0 ? 'right' : 'left'}>
                            <div className="group relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                                <div className="relative bg-[#0a0f1a] border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center h-full hover:border-blue-500/50 transition-colors">
                                    <div className="w-40 h-40 rounded-full mb-6 p-1 bg-gradient-to-br from-blue-500 to-indigo-600">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover rounded-full border-4 border-[#0a0f1a] transition-all duration-500"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                                    <p className="text-blue-400 font-medium text-sm mb-4">{member.role}</p>
                                    <div className="w-full h-[1px] bg-white/10 my-4"></div>
                                    <p className="text-slate-400 text-sm flex-grow flex items-center justify-center">
                                        <Cpu size={16} className="mr-2 inline text-slate-500" />
                                        {member.stack}
                                    </p>
                                    <div className="flex gap-4 mt-6">
                                        <a href={member.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition-all">
                                            <Github size={20} />
                                        </a>
                                        <a href={member.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition-all">
                                            <Linkedin size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}