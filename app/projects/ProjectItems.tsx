"use client";

import { Modal } from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/menu-types";
import Link from "next/link";
import { useState } from "react";

export function ProjectItems({ item }: { item: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal open={open} setOpen={() => setOpen(false)} item={item} />

      <div className={`group relative overflow-hidden rounded-lg shadow-md shadow-primary/50`}>
        <div className="p-3 text-center">
          <a href={item?.href ?? "#"}>
            <h3 className="font-semibold text-lg text-primary group-hover:underline">{item.title}</h3>
          </a>
        </div>

        {/* view and visit */}
        <div className="z-10 absolute top-0 right-0 p-2 scale-0 group-hover:scale-100 transition flex gap-2">
          <Button size="sm" onClick={() => setOpen(true)}>
            Detail
          </Button>
          <Button asChild size={"sm"}>
            <Link href={item.href ?? "#"} className="no-underline">
              Visit
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
