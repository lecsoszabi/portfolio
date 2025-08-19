export default function Section({
    id,
    title,
    children,
    darkMode = false,
}: { id: string; title: string; children: React.ReactNode; darkMode?: boolean }) {
    return (
        <section
            id={id}
            className={`mx-auto max-w-5xl px-4 py-24 transition-colors duration-500 ${darkMode ? "bg-gray-900" : "bg-white"}`}
        >
            <h2 className={`mb-8 text-2xl font-semibold text-center transition-colors duration-500 ${darkMode ? "text-gray-100" : "text-gray-900"}`}>{title}</h2>
            {children}
        </section>
    );
}