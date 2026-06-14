// BMW "M" tricolor motif — a recognizable design cue (blue · navy · red).
// Not the BMW roundel/logo; just the heritage stripe used as a tasteful accent.
export default function MStripe({
    className = "",
    vertical = false,
    glow = false,
}: { className?: string; vertical?: boolean; glow?: boolean }) {
    return (
        <span
            className={`inline-flex overflow-hidden rounded-full ${vertical ? "flex-col w-1" : "flex-row h-1"} ${className}`}
            style={
                glow
                    ? { boxShadow: "0 0 10px rgba(31,143,255,0.7), 0 0 18px rgba(43,76,255,0.45), 0 0 6px rgba(255,45,45,0.5)" }
                    : undefined
            }
            aria-hidden
        >
            <span className="flex-1" style={{ background: glow ? "#1f8fff" : "#0066B1" }} />
            <span className="flex-1" style={{ background: glow ? "#2b4cff" : "#16235A" }} />
            <span className="flex-1" style={{ background: glow ? "#ff2d2d" : "#E2231A" }} />
        </span>
    );
}
