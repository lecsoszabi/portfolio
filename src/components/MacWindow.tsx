export default function MacWindow({ children, darkMode = false }: { children: React.ReactNode; darkMode?: boolean }) {
    return (
        <div
            className={`w-full h-[96vh] max-w-5xl mx-auto rounded-2xl flex flex-col overflow-hidden transition-colors duration-500
                ${darkMode
                    ? "shadow-2xl border border-gray-700 bg-gray-900"
                    : "shadow-2xl border border-gray-200 bg-white"
                }
            `}
        >
            <div
                className={`flex items-center gap-2 px-4 py-2 rounded-t-2xl border-b transition-colors duration-500
                    ${darkMode
                        ? "border-gray-700 bg-gray-800"
                        : "border-gray-200 bg-gray-50"
                    }
                `}
            >
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className={`ml-4 text-xs transition-colors duration-500 ${darkMode ? "text-gray-500" : "text-gray-400"}`}></span>
            </div>
            <div className={`flex-1 overflow-y-auto p-3 scrollbar-thin scrollbar-thumb-rounded transition-colors duration-500 ${darkMode ? "scrollbar-track-bg-gray-800 scrollbar-thumb-bg-gray-600" : "scrollbar-track-bg-gray-100 scrollbar-thumb-bg-gray-400"}`}>
                {children}
            </div>
        </div>
    );
}