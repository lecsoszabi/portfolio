export default function MacWindow({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-[96vh] max-w-5xl mx-auto rounded-2xl shadow-2xl border border-gray-200 bg-white flex flex-col overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 rounded-t-2xl border-b border-gray-200 bg-gray-50">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-xs text-gray-400"></span>
            </div>
            <div className="flex-1 overflow-y-auto p-3">{children}</div>
        </div>
    );
}