"use client";

import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import KursusCard from "@/components/KursusCard";

const courses = [
  {
    slug: "master-class-data-exploration",
    title: "Master Class Data Exploration Using R Studio",
    price: "Rp 1.200.000",
    lessons: 68,
    duration: "20:12:10 Jam",
    level: "Pemula",
  },
  {
    slug: "data-analyst-basic",
    title: "Data Analyst untuk Pemula",
    price: "Rp 799.000",
    lessons: 42,
    duration: "12:45:00 Jam",
    level: "Pemula",
  },
];

export default function KursusCarousel() {
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true },
    [autoplay.current]
  );

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {courses.map((course) => (
            <KursusCard key={course.slug} {...course} />
          ))}
        </div>
      </div>

      {/* PREV */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute -left-4 top-1/2 -translate-y-1/2
                   bg-white shadow rounded-full w-10 h-10
                   flex items-center justify-center"
      >
        ‹
      </button>

      {/* NEXT */}
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute -right-4 top-1/2 -translate-y-1/2
                   bg-white shadow rounded-full w-10 h-10
                   flex items-center justify-center"
      >
        ›
      </button>
    </div>
  );
}
