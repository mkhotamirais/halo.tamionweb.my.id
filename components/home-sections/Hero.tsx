"use client";

import { HeroLeft } from "./HeroLeft";
import { HeroRight } from "./HeroRight";

export function Hero() {
  return (
    <section id="home" className="mt:0 sm:mt-12 pt-0 pb-16 scroll-mt-32">
      <div className="container">
        <div className="h-auto lg:h-[24rem] grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-8">
          <HeroLeft />
          <HeroRight />
        </div>
      </div>
    </section>
  );
}
