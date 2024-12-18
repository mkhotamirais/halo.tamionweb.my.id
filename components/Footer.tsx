"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t border-secondary mb-16 sm:mb-0">
      <div className="container h-16 flex items-center justify-center">
        <small>
          &copy; {new Date().getFullYear()}{" "}
          <Link title="github homepage" href="https://mkhotamirais.github.io" className="hover:underline">
            mkhotami
          </Link>
        </small>
      </div>
    </footer>
  );
}
