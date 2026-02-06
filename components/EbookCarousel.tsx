"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const ebooks = [
  { id: 1, title: "Statistik Dasar", price: "Rp 59.000" },
  { id: 2, title: "Data Analyst Handbook", price: "Rp 79.000" },
  { id: 3, title: "Machine Learning Intro", price: "Rp 99.000" },
  { id: 4, title: "Visualisasi Data", price: "Rp 69.000" },
  { id: 5, title: "Python untuk Data", price: "Rp 89.000" },
  { id: 6, title: "Machine Learning Intro", price: "Rp 99.000" },
];

export default function EbookCarousel() {
  const autoplay = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true },
    [autoplay.current]
  );

  return (
    <div className="relative">
      {/* Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {ebooks.map((ebook) => (
            <div
              key={ebook.id}
              className="min-w-[220px] bg-gray-50 rounded-2xl shadow p-4
                         transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Cover */}
              <div className="h-36 bg-gray-200 rounded-xl mb-4 flex items-center justify-center text-gray-500 text-sm">
                Cover eBook
              </div>

              {/* Info */}
              <h4 className="font-semibold mb-1">{ebook.title}</h4>
              <span className="font-bold">{ebook.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Prev */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute -left-4 top-1/2 -translate-y-1/2
                   bg-white shadow rounded-full w-10 h-10
                   flex items-center justify-center"
      >
        ‹
      </button>

      {/* Next */}
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
