"use client";
import { useState, useEffect, useRef } from "react";

interface Props {
    lang: "hu" | "en";
}

export default function ReactionGame({ lang }: Props) {
    const messages = {
        enterName: { hu: "Kérlek add meg a neved!", en: "Please enter your name!" },
        startHint: { hu: "Nyomd meg a START gombot a játék indításához", en: "Press START to begin" },
        waiting: { hu: "Várj…", en: "Wait..." },
        go: { hu: "MOST! Nyomd a SPACE-et!", en: "NOW! Press SPACE!" },
        tooSoon: { hu: "Túl korán nyomtad!", en: "Too soon!" },
        bestTime: { hu: "Legjobb időd:", en: "Your best time:" }
    };

    const [playerName, setPlayerName] = useState("");
    const [gameStarted, setGameStarted] = useState(false);
    const [gameState, setGameState] = useState<"idle" | "waiting" | "go" | "tooSoon">("idle");
    const [message, setMessage] = useState(messages.enterName[lang]);
    const [reaction, setReaction] = useState<number | null>(null);
    const [bestReaction, setBestReaction] = useState<number | null>(null);
    const startTimeRef = useRef<number>(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!gameStarted) return;
            if (e.code === "Space") {
                if (gameState === "waiting") {
                    if (timeoutRef.current) clearTimeout(timeoutRef.current);
                    setMessage(messages.tooSoon[lang]);
                    setGameState("tooSoon");
                } else if (gameState === "go") {
                    const reactionTime = Date.now() - startTimeRef.current;
                    setReaction(reactionTime);
                    setBestReaction(prev => (prev === null || reactionTime < prev ? reactionTime : prev));
                    setMessage(`${messages.bestTime[lang]} ${reactionTime} ms`);
                    setGameState("idle");
                } else if (gameState === "tooSoon") {
                    setMessage(messages.startHint[lang]);
                    setGameState("idle");
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [gameStarted, gameState, lang]);

    const startGame = () => {
        if (!playerName.trim()) {
            setMessage(messages.enterName[lang]);
            return;
        }
        setGameStarted(true);
        setMessage(messages.waiting[lang]);
        setGameState("waiting");
        const timeout = Math.random() * 2000 + 1000;
        timeoutRef.current = setTimeout(() => {
            setMessage(messages.go[lang]);
            startTimeRef.current = Date.now();
            setGameState("go");
        }, timeout);
    };

    return (
        <div className="mt-8 p-4 border rounded-xl text-center select-none">
            <h2 className="font-semibold text-lg mb-2">
                {lang === "hu" ? "Reakcióidő játék" : "Reaction Time Game"}
            </h2>
            {!gameStarted && (
                <div className="mb-4 flex flex-col items-center gap-2">
                    <input
                        type="text"
                        placeholder={lang === "hu" ? "Add meg a neved" : "Enter your name"}
                        value={playerName}
                        onChange={e => setPlayerName(e.target.value)}
                        className="p-2 border rounded-md w-60 text-center"
                    />
                    <button
                        onClick={startGame}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                    >
                        {lang === "hu" ? "START" : "START"}
                    </button>
                </div>
            )}
            <p className="mb-2">{message}</p>
            {reaction !== null && (
                <p className="text-green-500 font-bold">
                    {lang === "hu" ? "Mostani időd:" : "This round:"} {reaction} ms
                </p>
            )}
            {bestReaction !== null && (
                <p className="text-yellow-400 font-bold">
                    {messages.bestTime[lang]} {bestReaction} ms
                </p>
            )}
        </div>
    );
}