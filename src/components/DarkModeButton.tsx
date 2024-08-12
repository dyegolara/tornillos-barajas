"use client";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import { useCallback } from "react";

export default function DarkModeButton() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <IconButton
      onClick={toggleTheme}
      variant="outline"
      aria-label={"Modo" + resolvedTheme === "dark" ? "claro" : "oscuro"}
      size="3"
    >
      {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
}
