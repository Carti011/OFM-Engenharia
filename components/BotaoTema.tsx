"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function BotaoTema() {
  const { theme, setTheme } = useTheme();
  const [montado, setMontado] = useState(false);

  useEffect(() => setMontado(true), []);

  // Evita hydration mismatch — renderiza placeholder com mesmas dimensões
  if (!montado) return <div className="w-9 h-9" />;

  const ehEscuro = theme === "dark";

  return (
    <button
      onClick={() => setTheme(ehEscuro ? "light" : "dark")}
      className="w-9 h-9 flex items-center justify-center text-(--texto-suave) hover:text-(--texto-principal) transition-colors duration-200 cursor-pointer"
      aria-label={ehEscuro ? "Mudar para tema claro" : "Mudar para tema escuro"}
    >
      {ehEscuro ? (
        /* Sol — clica para ir ao tema claro */
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      ) : (
        /* Lua — clica para ir ao tema escuro */
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
