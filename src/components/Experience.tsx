const experiences = [
    {
        role: "Szoftverfejlesztő",
        company: "Minero IT / Gloster",
        period: "2025 – jelenleg",
        desc: "Backend fejlesztés egy automatizált raktár- és rendeléskezelő, valamint logisztikai projektben."
    },
];

export default function Experience({ darkMode = false }: { darkMode?: boolean }) {
    return (
        <div className="relative ml-4">
            {experiences.map((exp, i) => (
                <div
                    key={i}
                    className={`mb-8 ml-6 p-4 rounded-2xl transition-shadow transition-colors duration-500
                        ${darkMode
                            ? "bg-gray-800 border border-gray-700 shadow-xl hover:shadow-2xl"
                            : "bg-white border border-gray-200 shadow-lg hover:shadow-xl"
                        }`}
                >
                    <div className={`absolute w-3 h-3 rounded-full -left-[7px] mt-2.5 ${darkMode ? "bg-gray-100" : "bg-gray-900"}`} />
                    <h3 className={`font-semibold transition-colors duration-500 ${darkMode ? "text-gray-100" : "text-gray-900"}`}>{exp.role}</h3>
                    <p className={`text-sm transition-colors duration-500 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>{exp.company} • {exp.period}</p>
                    <p className={`mt-2 text-sm transition-colors duration-500 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{exp.desc}</p>
                </div>
            ))}
        </div>
    );
}