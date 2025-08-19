import { ExternalLink } from "lucide-react";

const projects = [
    { title: "Könyv Kölcsönző", desc: "Generikus könyvtár rendszer, dinamikus adományozó rendszerrel", stack: ["React", "Vite", "Quarkus"], href: "https://github.com/lecsoszabi/QuarkusKonyvtarAdatbazis" },
    { title: "Nailshop", desc: "Webshop körömépítésre specializálódva.", stack: ["Angular", "Firebase"], href: "https://github.com/lecsoszabi/nailShopWebker" },
    { title: "Trivia quiz", desc: "Random quiz app globális pontokkal.", stack: ["Angular", "RestAPI"], href: "https://github.com/lecsoszabi/AngularQuizApp" },
];

export default function Projects() {
    return (
        <div className="grid md:grid-cols-2 gap-6">
            {projects.map(p => (
                <a
                    key={p.title}
                    href={p.href}
                    target="_blank"
                    className="group rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all p-5"
                >
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                        <ExternalLink className="size-4 opacity-60 group-hover:opacity-100" />
                    </div>
                    <p className="mt-2 text-sm text-gray-700">{p.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-600">
                        {p.stack.map(s => (
                            <span key={s} className="rounded-full bg-gray-100 px-2 py-0.5 border border-gray-200">{s}</span>
                        ))}
                    </div>
                </a>
            ))}
        </div>
    );
}