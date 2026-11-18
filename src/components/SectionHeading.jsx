// Cabeçalho de seção.
// "split": título à esquerda e introdução à direita no desktop (padrão).
// "stacked": título e introdução empilhados, alinhados à esquerda.
export default function SectionHeading({ id, children, intro, layout = 'split' }) {
    if (layout === 'stacked') {
        return (
            <div className="max-w-2xl">
                <h2 id={id} className="type-headline text-white">
                    {children}
                </h2>
                {intro && <p className="mt-6 text-lg leading-relaxed text-slate-400">{intro}</p>}
            </div>
        );
    }

    return (
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
            <h2 id={id} className="type-headline text-white lg:col-span-7">
                {children}
            </h2>
            {intro && (
                <p className="max-w-xl text-lg leading-relaxed text-slate-400 lg:col-span-5 lg:pb-1">{intro}</p>
            )}
        </div>
    );
}
