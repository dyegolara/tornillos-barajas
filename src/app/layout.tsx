import "@radix-ui/themes/styles.css";

import { Container } from "@radix-ui/themes";
import type { Metadata } from "next";

import { Providers } from "@/app/providers";

export const metadata: Metadata = {
  title: "Tornillos Barajas",
  description: "Tornillos y Remaches",
};

const bodyStyle = { backgroundColor: "var(--color-background)" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={bodyStyle}>
        <Providers>
          <Container>{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
