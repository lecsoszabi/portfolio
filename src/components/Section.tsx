export default function Section({
                                    id,
                                    title,
                                    children,
                                }: {
    id: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section id={id} className="mx-auto max-w-5xl px-4 py-24 text-white">
            <h2 className="mb-8 text-xl font-semibold">{title}</h2>
            {children}
        </section>
    );
}
