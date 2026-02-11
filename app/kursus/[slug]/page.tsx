type Props = {
  params: { slug: string };
};

export default function KursusDetailPage({ params }: Props) {
  return (
    <main className="pt-40 p-10">
      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600
                          text-white p-10 rounded-2xl mb-10">
        <h1 className="text-3xl font-bold mb-4">
          Master Class Data Exploration Using R Studio
        </h1>
        <p className="max-w-3xl">
          Kelas online terbaru yang dirancang untuk membantu peserta
          mengeksplorasi berbagai jenis data secara praktis.
        </p>
      </section>

      <section className="grid grid-cols-3 gap-10">
        {/* KONTEN */}
        <div className="col-span-2">
          <h2 className="text-xl font-semibold mb-4">Deskripsi Kursus</h2>
          <p className="text-gray-600 mb-6">
            Setiap materi disusun untuk membantu peserta memahami eksplorasi
            data dari dasar hingga lanjutan.
          </p>

          <h3 className="font-semibold mb-3">Yang akan dipelajari</h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Eksplorasi data menggunakan R Studio</li>
            <li>Analisis data lanjutan</li>
            <li>Statistik terapan</li>
            <li>Komunikasi data</li>
          </ul>
        </div>

        {/* SIDEBAR */}
        <div className="bg-white rounded-2xl shadow p-6">
          <div className="h-40 bg-gray-200 rounded-xl mb-4" />
          <p className="text-2xl font-bold mb-4">Rp 1.200.000</p>

          <ul className="text-sm text-gray-600 space-y-2 mb-4">
            <li>📘 68 Materi</li>
            <li>⏱ 20:12:10 Jam</li>
            <li>🎯 Pemula</li>
            <li>🎓 Sertifikat</li>
          </ul>

          <button className="w-full bg-blue-600 text-white py-2 rounded-xl mb-2">
            + Masukkan ke keranjang
          </button>
          <button className="w-full border border-blue-600 text-blue-600 py-2 rounded-xl">
            Beli Sekarang
          </button>
        </div>
      </section>
    </main>
  );
}
