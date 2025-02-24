import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Header } from '@/components/header'; 
import { QueryClientProvider } from '@/lib/react-query';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dorme Logo - Consultoria de Sono Infantil',
  description: 'Conectando pais a consultores de sono infantil qualificados',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <QueryClientProvider
        >  
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main>{children}</main>
            <Toaster />
          </ThemeProvider>
        </QueryClientProvider>

      </body>
    </html>
  );
}