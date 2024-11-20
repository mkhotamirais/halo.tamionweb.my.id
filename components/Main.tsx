"use client";

import React from "react";
import { ThemeProvider } from "./theme/ThemeProvider";

export function Main({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </div>
  );
}
