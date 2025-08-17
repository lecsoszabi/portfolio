import { ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Könyv Kölcsönző",
        desc: "Generikus könyvtár rendszer, dinamikus adományozó rendszerrel",
        stack: ["React", "Vite", "Quarkus"],
        href: "https://github.com/lecsoszabi/QuarkusKonyvtarAdatbazis",
    },
    {
        title: "Nailshop",
        desc: "Webshop körömépítésre specializálódva.",
        stack: ["Angular", "Firebase"],
        href: "https://github.com/lecsoszabi/nailShopWebker",
    },
    {
        title: "Trivia quiz",
        desc: "Random quiz app globális pontokkal.",
        stack: ["Angular", "RestAPI"],
        href: "https://github.com/lecsoszabi/AngularQuizApp",
    },
];

export default function Projects() {
    return (
        <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
                <a
                    key={p.title}
                    href={p.href}
                    target="_blank"
                    className="group rounded-2xl border border-white/10 p-5 hover:border-white/30 transition-colors"
                >
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                        <ExternalLink className="size-4 opacity-60 group-hover:opacity-100" />
                    </div>
                    <p className="mt-2 text-sm text-neutral-300">{p.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs text-neutral-400">
                        {p.stack.map((s) => (
                            <span
                                key={s}
                                className="rounded-full border border-white/10 px-2 py-0.5"
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
