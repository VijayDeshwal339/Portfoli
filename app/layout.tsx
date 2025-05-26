import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/providers/theme-provider";
import NavMenu from "@/components/nav-menu";
import ThemeToggle from "@/components/ui/theme-toggle";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vijay Deshwal - Personal Dashboard',
  description: 'Full Stack Developer specializing in modern web applications',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen bg-background">
            <NavMenu />
            <div className="absolute top-4 right-4 z-50">
              <ThemeToggle />
            </div>
            <main className="pb-20">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}