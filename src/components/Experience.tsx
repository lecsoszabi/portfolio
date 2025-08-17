const experiences = [
    {
        role: "Szoftverfejlesztő",
        company: "Optimaster s.r.o",
        period: "2025 – jelenleg",
        desc: "Backend fejlesztés, REST API-k, adatbázis optimalizálás.",
    },
];

export default function Experience() {
    return (
        <div className="relative border-l border-white/10 ml-4">
            {experiences.map((exp, i) => (
                <div key={i} className="mb-8 ml-6">
                    <div className="absolute w-3 h-3 bg-white rounded-full -left-[7px] mt-2.5" />
                    <h3 className="text-white font-semibold">{exp.role}</h3>
                    <p className="text-sm text-neutral-400">
                        {exp.company} • {exp.period}
                    </p>
                    <p className="mt-2 text-neutral-300 text-sm">{exp.desc}</p>
                </div>
            ))}
        </div>
    );
}
