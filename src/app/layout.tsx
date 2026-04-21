import type { Metadata } from "next";
import "./globals.css";
import { Container, Section } from "@radix-ui/themes";

import Navbar from "@/app/components/ui/navbar.js";
import Footer from "@/app/components/ui/footer.js";
import { Providers } from "@/app/components/ui/providers.jsx";
import ThemeWrapper from "@/app/components/ui/themeWrapper.jsx";

export const metadata: Metadata = {
  title: "Mondu Demo App",
  description: "A demo app for Mondu BNPL payments, written in nextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <ThemeWrapper>
            <Container size="4">
              <Section pt="0" pb="4">
                <Navbar />
              </Section>
              <Section pt="4" pb="4">
                {children}
              </Section>
              <Section pt="4" pb="0">
                <Footer />
              </Section>
            </Container>
          </ThemeWrapper>
        </Providers>
      </body>
    </html>
  );
}
