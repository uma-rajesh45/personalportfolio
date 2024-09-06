
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

import { gridItems } from "@/data";
 
export default function Grid() {
  return (
    <BentoGrid className="max-w-7xl relative">
      {gridItems.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          icon={item.img}
          id={item.id}
          spareImg={item.spareImg}
        />
      ))}
    </BentoGrid>
  );
}