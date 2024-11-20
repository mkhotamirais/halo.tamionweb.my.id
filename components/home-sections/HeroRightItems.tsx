"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Project } from "@/lib/menu-types";
import { Button } from "../ui/button";
import { Modal } from "../Modal";
import Image from "next/image";

export function HeroRightItems({ item, i }: { item: Project; i: number }) {
  const [open, setOpen] = useState(false);

  const ref1 = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);
  const ref3 = useRef<HTMLDivElement | null>(null);
  const ref4 = useRef<HTMLDivElement | null>(null);

  const v1 = useInView(ref1);
  const v2 = useInView(ref2);
  const v3 = useInView(ref3);
  const v4 = useInView(ref4);

  const refs = [ref1, ref2, ref3, ref4];
  const vs = [v1, v2, v3, v4];

  return (
    <>
      <Modal open={open} setOpen={() => setOpen(false)} item={item} />
      <motion.div
        ref={refs[i]}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: vs[i] ? 1 : 0.8, opacity: vs[i] ? 1 : 1, transition: { ease: "linear" } }}
      >
        <div className="relative group hover:scale-105 transition">
          <div className="scale-0 group-hover:scale-100 transition absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 *:text-white flex gap-4">
            <Button variant={"link"} size="sm" onClick={() => setOpen(true)}>
              Detail
            </Button>
            <Button variant={"link"} size="sm">
              <a href={item.href} target="_blank" title="visit web">
                Visit
              </a>
            </Button>
          </div>
          <Image src={`/${item.imagePath}`} width={500} height={500} alt={"halo semua"} className="w-full rounded-lg" />
        </div>
      </motion.div>
    </>
  );
}
