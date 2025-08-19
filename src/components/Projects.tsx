import { ExternalLink } from "lucide-react";

const projects = [
    {
        title: {
            hu: "Könyv Kölcsönző",
            en: "Book Lending"
        },
        desc: {
            hu: "Generikus könyvtár rendszer, dinamikus adományozó rendszerrel",
            en: "Generic library system with dynamic donor feature"
        },
        stack: ["React", "Vite", "Quarkus"],
        href: "https://github.com/lecsoszabi/QuarkusKonyvtarAdatbazis"
    },
    {
        title: {
            hu: "Nailshop",
            en: "Nailshop"
        },
        desc: {
            hu: "Webshop körömépítésre specializálódva.",
            en: "Webshop specialized for nail building."
        },
        stack: ["Angular", "Firebase"],
        href: "https://github.com/lecsoszabi/nailShopWebker"
    },
    {
        title: {
            hu: "Trivia quiz",
            en: "Trivia quiz"
        },
        desc: {
            hu: "Random quiz app globális pontokkal.",
            en: "Random quiz app with global scores."
        },
        stack: ["Angular", "RestAPI"],
        href: "https://github.com/lecsoszabi/AngularQuizApp"
    }
];

export default function Projects({ darkMode = false, lang = "hu" }: { darkMode?: boolean; lang?: "hu" | "en" }) {
    return (
        <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, idx) => (
                <a
                    key={typeof p.title === "string" ? p.title : p.title.en}
                    href={p.href}
                    target="_blank"
                    className={`group rounded-2xl transition-all p-5 transform hover:scale-105
                        ${darkMode
                            ? "bg-gray-800 border border-gray-700 shadow-xl hover:shadow-2xl"
                            : "bg-white border border-gray-200 shadow-lg hover:shadow-xl"
                        }
                    `}
                >
                    <div className="flex items-center justify-between">
                        <h3 className={`text-lg font-semibold transition-colors duration-500 ${darkMode ? "text-gray-100" : "text-gray-900"}`}>{typeof p.title === "string" ? p.title : p.title[lang]}</h3>
                        <ExternalLink className="size-4 opacity-60 group-hover:opacity-100" />
                    </div>
                    <p className={`mt-2 text-sm transition-colors duration-500 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>{typeof p.desc === "string" ? p.desc : p.desc[lang]}</p>
                    <div className={`mt-3 flex flex-wrap gap-2 text-xs transition-colors duration-500 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                        {p.stack.map(s => (
                            <span
                                key={s}
                                className={`rounded-full px-2 py-0.5 border transition-colors duration-500
                                    ${darkMode
                                        ? "bg-gray-900 border-gray-700 text-gray-200"
                                        : "bg-gray-100 border-gray-200 text-gray-600"
                                    }`}
                            >
                                {s}
                            </span>
                        ))}
                    </div>
                </a>
            ))}
        </div>
    );
}