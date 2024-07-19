"use client";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <Theme accentColor="crimson" radius="large">
        {children}
      </Theme>
    </ThemeProvider>
  );
}
