"use client";

import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ThemeProvider } from "./theme/ThemeProvider";

export function Main({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </div>
  );
}
