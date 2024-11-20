"use client";

import { menu } from "@/lib/menu";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ModeToggle } from "./theme/ModeToggle";
import { HomeBtn } from "./HomeBtn";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import Link from "next/link";

export function Header() {
  const { scrollDirection } = useScrollDirection();
  const [activeHover, setActiveHover] = useState<number | null>(null);
  const [hash, setHash] = useState<string | null>(null);

  useEffect(() => {
    setHash(window.location.hash);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: scrollDirection === "up" ? "-100%" : 0, transition: { duration: 0.3 } }}
      className="flex z-40 relative h-20 w-full items-center justify-center top-0"
    >
      <motion.div initial={{ y: 0 }} className="absolute shadow-md rounded-full overflow-hidden">
        <div className="hidden sm:flex items-center gap-1 p-1 bg-background z-50">
          <HomeBtn />
          {menu
            .filter((item) => item !== "projects")
            .map((item, i) => (
              <Link
                onMouseEnter={() => setActiveHover(i)}
                onMouseLeave={() => setActiveHover(null)}
                href={`/#${item}`}
                key={i}
                className="relative group rounded-full px-4 py-2"
              >
                <span
                  className={`z-10 relative capitalize text-sm text-muted-foreground group-hover:text-gray-500 transition ${
                    hash === `#${item}` ? "text-primary" : ""
                  }`}
                >
                  {item}
                </span>

                {/* active click */}
                {hash === `#${item}` && (
                  <motion.div
                    layoutId="activeClick"
                    className="z-10 absolute h-[0.2rem] bottom-1 inset-x-3 bg-muted-foreground rounded-full"
                  />
                )}

                {/* active hover */}
                <AnimatePresence>
                  {activeHover === i && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      layoutId="activeHover"
                      className="absolute inset-0 bg-woven rounded-full"
                    />
                  )}
                </AnimatePresence>
              </Link>
            ))}
          <ModeToggle />
        </div>
      </motion.div>
    </motion.header>
  );
}
