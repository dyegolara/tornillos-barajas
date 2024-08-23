"use client";
import {
  Cross1Icon,
  HamburgerMenuIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { DropdownMenu, IconButton } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useCallback, useState } from "react";

export default function Menu() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <DropdownMenu.Root onOpenChange={setIsOpen}>
      <DropdownMenu.Trigger>
        <IconButton size="3" variant="outline" aria-label="Open menu">
          {isOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item asChild disabled={pathname === "/"}>
          <Link href="/">Home</Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item asChild disabled={pathname === "/about"}>
          <Link href="/about">Acerca de</Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item asChild disabled={pathname === "/contact"}>
          <Link href="/contact">Contacto</Link>
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item onClick={toggleTheme}>
          {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
          Modo {resolvedTheme === "dark" ? "claro" : "oscuro"}
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
