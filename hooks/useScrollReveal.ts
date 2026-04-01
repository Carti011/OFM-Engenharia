"use client";

import { useEffect, useRef, useState } from "react";

interface OpcoesScrollReveal {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useScrollReveal(opcoes: OpcoesScrollReveal = {}) {
  const { threshold = 0.15, rootMargin = "0px", delay = 0 } = opcoes;
  // ref typed as any para aceitar qualquer elemento HTML (div, a, article, etc.)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const [montado, setMontado] = useState(false);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    setMontado(true);
  }, []);

  useEffect(() => {
    if (!montado) return;
    const elemento = ref.current;
    if (!elemento) return;

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          if (delay > 0) {
            const timer = setTimeout(() => setVisivel(true), delay);
            observador.unobserve(elemento);
            return () => clearTimeout(timer);
          }
          setVisivel(true);
          observador.unobserve(elemento);
        }
      },
      { threshold, rootMargin }
    );

    observador.observe(elemento);
    return () => observador.disconnect();
  }, [montado, threshold, rootMargin, delay]);

  return { ref, visivel, montado };
}
