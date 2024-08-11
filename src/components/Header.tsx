"use client";
import {
  Cross1Icon,
  HamburgerMenuIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { Box, DropdownMenu, Flex, IconButton, TabNav } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState } from "react";

import Logo from "@/assets/barajas-tornillos-logo.svg";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex
      justify="between"
      align={"center"}
      p={"4"}
      style={{ borderBottom: "1px solid var(--gray-5)" }}
    >
      <Image src={Logo} alt={"Tornillos Barajas Logo"} width={150} />
      <Box display={{ initial: "none", sm: "block" }}>
        <TabNav.Root>
          <TabNav.Link href="#" active asChild>
            <Link href={"/"}>Home</Link>
          </TabNav.Link>
          <TabNav.Link href="#" asChild>
            <Link href={"#"}>Acerca de</Link>
          </TabNav.Link>
          <TabNav.Link href="#" asChild>
            <Link href={"#"}>Contacto</Link>
          </TabNav.Link>
        </TabNav.Root>
      </Box>
      <Flex gap={"3"}>
        <Box display={{ initial: "none", sm: "block" }}>
          <IconButton
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            variant="outline"
            aria-label={"Modo" + theme === "dark" ? "claro" : "oscuro"}
            size={"3"}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </IconButton>
        </Box>
        <Box display={{ initial: "block", sm: "none" }}>
          <DropdownMenu.Root onOpenChange={setIsOpen}>
            <DropdownMenu.Trigger>
              <IconButton size={"3"} variant="outline" aria-label="Open menu">
                {isOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
              </IconButton>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item asChild>
                <Link href={"/"}>Home</Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link href={"#"}>Acerca de</Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link href={"#"}>Contacto</Link>
              </DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                Modo {theme === "dark" ? "claro" : "oscuro"}
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Box>
      </Flex>
    </Flex>
  );
}
