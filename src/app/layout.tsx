import "@radix-ui/themes/styles.css";

import { Container } from "@radix-ui/themes";
import type { Metadata } from "next";

import { Providers } from "@/app/providers";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Tornillos Barajas",
  description: "Tornillos y Remaches",
};

const bodyStyle = { backgroundColor: "var(--color-background)", margin: 0 };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={bodyStyle}>
        <Providers>
          <Header />
          <Container size="3" p="4">
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
