import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/shared/components/Header";
import Providers from "@/shared/providers";
import StyledComponentsRegistry from "@/styles/registryStyled";
import GlobalStyled from "@/styles/GlobalStyled";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HyperMarket",
  description: "Um Supermercado incrivel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Providers>
        <body className={inter.className}>
          <StyledComponentsRegistry>
            <Header />
            {children}
            <GlobalStyled />
          </StyledComponentsRegistry>
        </body>
      </Providers>
    </html>
  );
}
