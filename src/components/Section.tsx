export default function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode; }) {
    return (
        <section id={id} className="mx-auto max-w-5xl px-4 py-24">
            <h2 className="mb-8 text-2xl font-semibold text-center text-gray-900">{title}</h2>
            {children}
        </section>
    );
}