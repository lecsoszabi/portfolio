"use client";

export default function MacWindow({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="w-full h-[96vh] max-w-5xl mx-auto rounded-2xl shadow-2xl border overflow-hidden flex flex-col transition-all"
            style={{
                backgroundColor: "#1d1c20",
                borderColor: "#27272a",
                marginTop: 0,
            }}
        >
            <div
                className="flex items-center gap-2 px-4 py-2 rounded-t-2xl border-b"
                style={{
                    backgroundColor: "#1d1c20",
                    borderColor: "#27272a",
                }}
            >
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-xs text-gray-400"></span>
            </div>
            {/* Görgethető ablak tartalom scrollbar-lal */}
            <div className="flex-1 overflow-y-auto p-3 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
                {children}
            </div>
        </div>
    );
}
