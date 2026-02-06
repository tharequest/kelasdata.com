import KursusCarousel from "@/components/KursusCarousel";
import EbookCarousel from "@/components/EbookCarousel";


export default function Home() {
  return (
    <main className="pt-40">
      {/* Hero */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Belajar Statistik dengan cepat dan mudah
        </h2>
        <p className="text-gray-600 mb-6">
          Akses video pembelajaran dan eBook premium kapan saja.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl">
          Lihat Kursus
        </button>
      </section>

      {/* Kursus */}
      <section className="p-10">
        <h3 className="text-2xl font-semibold mb-6">Kursus Populer</h3>
        <KursusCarousel />
      </section>

      {/* Ebook */}
      <section className="p-10 bg-white">
        <h3 className="text-2xl font-semibold mb-6">eBook</h3>
        <EbookCarousel />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-6 mt-10">
        <p>© 2026 th-kelasdata. All rights reserved.</p>
      </footer>
    </main>
  );
}
