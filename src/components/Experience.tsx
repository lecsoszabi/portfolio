const experiences = [
    { role: "Szoftverfejlesztő", company: "Optimaster s.r.o", period: "2025 – jelenleg", desc: "Backend fejlesztés, REST API-k, adatbázis optimalizálás." },
];

export default function Experience() {
    return (
        <div className="relative ml-4">
            {experiences.map((exp, i) => (
                <div
                    key={i}
                    className="mb-8 ml-6 p-4 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow"
                >
                    <div className="absolute w-3 h-3 bg-gray-900 rounded-full -left-[7px] mt-2.5" />
                    <h3 className="text-gray-900 font-semibold">{exp.role}</h3>
                    <p className="text-sm text-gray-700">{exp.company} • {exp.period}</p>
                    <p className="mt-2 text-sm text-gray-600">{exp.desc}</p>
                </div>
            ))}
        </div>
    );
}