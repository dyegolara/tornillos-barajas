import { Box, Flex } from "@radix-ui/themes";
import Link from "next/link";

import DarkModeButton from "@/components/DarkModeButton";
import Menu from "@/components/Menu";
import SvgLogo from "@/components/SvgLogo";
import Tabs from "@/components/Tabs";

export default function Header() {
  return (
    <Flex
      justify="between"
      align="center"
      p="4"
      style={{ borderBottom: "1px solid var(--gray-5)" }}
    >
      <Link href="/">
        <SvgLogo />
      </Link>
      <Box display={{ initial: "none", sm: "block" }}>
        <Tabs />
      </Box>
      <Flex justify="end" width="150px">
        <Box display={{ initial: "none", sm: "block" }}>
          <DarkModeButton />
        </Box>
        <Box display={{ initial: "block", sm: "none" }}>
          <Menu />
        </Box>
      </Flex>
    </Flex>
  );
}
