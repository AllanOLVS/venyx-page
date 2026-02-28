import React from 'react';
import { Rocket, ChevronRight, Code2 } from 'lucide-react';
import FadeIn from './FadeIn';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">

                <FadeIn direction="right">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                            <Rocket size={16} />
                            <span>Transformamos ideias em Software.</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight">
                            Engenharia de <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                                Software de Elite
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
                            Construímos Apps, Sites e Sistemas complexos que escalam.
                            Nossa missão é impulsionar o seu negócio através de tecnologia de ponta e arquitetura robusta.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <a href="#contato" className="px-8 py-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all duration-300 flex items-center gap-2 group">
                                Fale com um Especialista
                                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#portfolio" className="px-8 py-4 rounded-lg bg-white/5 text-slate-300 font-semibold border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-300">
                                Ver Portfólio
                            </a>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn direction="left" delay={200}>
                    <div className="relative w-full aspect-square md:aspect-auto md:h-[600px] flex items-center justify-center">
                        <div className="absolute w-64 h-64 md:w-96 md:h-96 border border-blue-500/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
                        <div className="absolute w-48 h-48 md:w-72 md:h-72 border border-indigo-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                        <div className="absolute w-full max-w-md h-64 bg-gradient-to-tr from-blue-900/40 to-indigo-900/40 backdrop-blur-3xl rounded-2xl border border-white/10 p-6 flex flex-col justify-between shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                </div>
                                <Code2 className="text-blue-400" size={20} />
                            </div>
                            <div className="space-y-3 font-mono text-sm text-blue-300/80 mt-4">
                                <p>{`import { Scale } from 'venyx-tech';`}</p>
                                <p>{`const App = () => {`}</p>
                                <p className="pl-4">{`return <FutureReady />`}</p>
                                <p>{`};`}</p>
                                <p className="animate-pulse">_</p>
                            </div>
                        </div>
                    </div>
                </FadeIn>

            </div>
        </section>
    );
}