"use client";
import { HamburgerMenuIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Flex, IconButton, Text } from "@radix-ui/themes";
import Image from "next/image";
import { useTheme } from "next-themes";

import Logo from "@/assets/barajas-tornillos-logo.svg";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <Flex
      justify="between"
      align={"center"}
      p={"4"}
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <Image src={Logo} alt={"Tornillos Barajas Logo"} width={150} />
      <Text>tabs</Text>
      <Flex gap={"5"}>
        <IconButton
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          variant="ghost"
          aria-label="Toggle dark mode"
          size={"4"}
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </IconButton>
        <IconButton size={"4"} variant="ghost" aria-label="Open menu">
          <HamburgerMenuIcon />
        </IconButton>
      </Flex>
    </Flex>
  );
}
