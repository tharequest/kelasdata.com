"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const courses = [
  { id: 1, title: "Belajar Data Analyst", price: "Rp 849.000" },
  { id: 2, title: "Belajar Power BI", price: "Rp 499.000" },
  { id: 3, title: "Hatam Aplikasi Statistika", price: "Rp 1.129.000" },
  { id: 4, title: "Belajar Content Creator", price: "Rp 249.000" },
  { id: 5, title: "Digital Marketing", price: "Rp 99.000" },
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
            <div
              key={course.id}
              className="min-w-[280px] bg-white rounded-2xl shadow p-4 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-40 bg-gray-200 rounded-xl mb-4" />
              <h4 className="font-semibold mb-1">{course.title}</h4>
              <span className="font-bold">{course.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Prev */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow rounded-full w-10 h-10 flex items-center justify-center"
      >
        ‹
      </button>

      {/* Next */}
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow rounded-full w-10 h-10 flex items-center justify-center"
      >
        ›
      </button>
    </div>
  );
}
