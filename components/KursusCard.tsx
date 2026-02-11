"use client";

import Link from "next/link";

type Kursus = {
  slug: string;
  title: string;
  price: string;
  lessons: number;
  duration: string;
  level: string;
};

export default function KursusCard({
  slug,
  title,
  price,
  lessons,
  duration,
  level,
}: Kursus) {
  return (
    <div className="relative group min-w-[280px]">
      {/* CARD UTAMA */}
      <Link href={`/kursus/${slug}`}>
        <div className="bg-white rounded-2xl shadow p-4 cursor-pointer">
          <div className="h-40 bg-gray-200 rounded-xl mb-4" />
          <h4 className="font-semibold mb-2 line-clamp-2">{title}</h4>
          <p className="text-sm text-gray-500">{lessons} Pelajaran</p>
          <span className="font-bold block mt-2">{price}</span>
        </div>
      </Link>

      {/* HOVER DETAIL */}
      <div
        className="
          absolute left-full top-0 ml-4 w-80
          bg-white rounded-2xl shadow-xl p-4
          opacity-0 scale-95 pointer-events-none
          group-hover:opacity-100 group-hover:scale-100
          group-hover:pointer-events-auto
          transition-all duration-300 z-50
        "
      >
        <h4 className="font-semibold mb-2">{title}</h4>

        <p className="text-sm text-gray-600 mb-3">
          Kelas online untuk menguasai eksplorasi dan analisis data secara
          sistematis dan praktis.
        </p>

        <ul className="text-sm text-gray-600 space-y-1 mb-4">
          <li>📘 {lessons} Materi</li>
          <li>⏱ {duration}</li>
          <li>🎯 Level: {level}</li>
        </ul>

        <button className="w-full bg-blue-600 text-white py-2 rounded-xl">
          + Masukkan ke keranjang
        </button>
      </div>
    </div>
  );
}
