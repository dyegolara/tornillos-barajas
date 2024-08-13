import "@radix-ui/themes/styles.css";

import { Box, Container, Flex, Text } from "@radix-ui/themes";
import type { Metadata } from "next";

import { Providers } from "@/app/providers";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Tornillos Barajas",
  description:
    "Tornillos y Remaches Barajas se pone a su disposición para el diseño y desarrollo de cualquier tornillo o artículo para solucionar su problema de fijación, contamos con más de 15 años de presencia en la Industria Metal-Mecánica.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        style={{
          backgroundColor: "var(--color-background)",
          margin: 0,
          minHeight: "100vh",
        }}
      >
        <Providers>
          <Flex direction={"column"} height={"100vh"}>
            <Header />
            <Container size="3" p="4" flexGrow={"1"}>
              {children}
            </Container>
            <Flex
              justify={"center"}
              p={"6"}
              style={{ borderTop: "1px solid var(--gray-5)" }}
            >
              <Text>
                &copy; {new Date().getFullYear()} Tornillos y Remaches Barajas
                S.A de C.V. Todos los derechos reservados.
              </Text>
            </Flex>
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
