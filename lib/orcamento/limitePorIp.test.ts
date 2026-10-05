import { describe, it, expect } from "vitest";
import { criarLimitePorIp } from "./limitePorIp";

describe("limitePorIp", () => {
  it("bloqueia o endereço que estoura o limite dentro da janela", () => {
    const limite = criarLimitePorIp({ maximo: 3, janelaMs: 60_000 });

    expect(limite.permite("203.0.113.7")).toBe(true);
    expect(limite.permite("203.0.113.7")).toBe(true);
    expect(limite.permite("203.0.113.7")).toBe(true);
    expect(limite.permite("203.0.113.7")).toBe(false);
  });

  it("libera de novo quando a janela passa", () => {
    let relogio = 0;
    const limite = criarLimitePorIp({
      maximo: 1,
      janelaMs: 60_000,
      agora: () => relogio,
    });

    expect(limite.permite("203.0.113.7")).toBe(true);
    expect(limite.permite("203.0.113.7")).toBe(false);

    relogio += 60_001;

    expect(limite.permite("203.0.113.7")).toBe(true);
  });

  it("conta cada endereço separadamente, para um visitante não bloquear outro", () => {
    const limite = criarLimitePorIp({ maximo: 1, janelaMs: 60_000 });

    expect(limite.permite("203.0.113.7")).toBe(true);
    expect(limite.permite("203.0.113.7")).toBe(false);
    expect(limite.permite("198.51.100.4")).toBe(true);
  });
});
