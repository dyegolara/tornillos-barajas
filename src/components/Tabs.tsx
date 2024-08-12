"use client";
import { TabNav } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Tabs() {
  const pathname = usePathname();

  return (
    <TabNav.Root>
      <TabNav.Link asChild active={pathname === "/"}>
        <Link href="/">Home</Link>
      </TabNav.Link>
      <TabNav.Link asChild active={pathname === "/about"}>
        <Link href="/about">Acerca de</Link>
      </TabNav.Link>
      <TabNav.Link asChild active={pathname === "/contact"}>
        <Link href="/contact">Contacto</Link>
      </TabNav.Link>
    </TabNav.Root>
  );
}
