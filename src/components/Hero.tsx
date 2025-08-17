export default function Hero() {
    return (
        <div id="home" className="min-h-screen flex items-center justify-center bg-black text-white">
            <div className="text-center">
                <p className="text-neutral-400 text-sm">Szoftverfejlesztő</p>
                <h1 className="text-5xl font-bold mt-2">Szabolcs Adorjáni</h1>
                <div className="mt-6 flex justify-center gap-4">
                    <a href="#projects" className="px-4 py-2 rounded-xl bg-white text-black">Projektek</a>
                    <a href="#contact" className="px-4 py-2 rounded-xl border border-white/20">Kapcsolat</a>
                </div>
            </div>
        </div>
    );
}
