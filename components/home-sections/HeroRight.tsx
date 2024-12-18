"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/menu";
import { HeroRightItems } from "./HeroRightItems";
import { Button } from "../ui/button";
import Link from "next/link";

export function HeroRight() {
  return (
    <div id="projects" className="flex flex-col justify-between gap-4">
      <div className="prose min-w-full">
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { delay: 0.9 } }}
          className="font-barlowCondensed text-center text-3xl lg:text-xl mb-8 lg:mb-auto"
        >
          My Projects
        </motion.h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects
          .filter((item) => item.imagePath)
          .map((item, i) => (
            <HeroRightItems key={i} item={item} i={i} />
          ))}
      </div>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { delay: 1 } }}
        className="flex justify-center"
      >
        <Button variant={"outline"}>
          <Link href="/projects">View all projects</Link>
        </Button>
      </motion.div>
    </div>
  );
}
