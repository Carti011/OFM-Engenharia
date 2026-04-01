"use client";

import { ThemeProvider } from "next-themes";

export default function ProvedorTema({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      themes={["dark", "light"]}
    >
      {children}
    </ThemeProvider>
  );
}
