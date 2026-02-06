export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Kelasdata</h1>
        <div className="space-x-4">
          <button className="text-gray-600">Home</button>
          <button className="text-gray-600">Kursus</button>
          <button className="text-gray-600">eBook</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-2xl">Login</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Belajar Skill Baru Secara Online</h2>
        <p className="text-gray-600 mb-6">
          Akses kursus video dan eBook premium kapan saja.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl">
          Lihat Kursus
        </button>
      </section>

      {/* Kursus */}
      <section className="p-10">
        <h3 className="text-2xl font-semibold mb-6">Kursus Populer</h3>
        <div className="grid grid-cols-3 gap-6">
          {[1,2,3].map((item)=> (
            <div key={item} className="bg-white rounded-2xl shadow p-4">
              <div className="h-40 bg-gray-200 rounded-xl mb-4" />
              <h4 className="font-semibold">Judul Kursus</h4>
              <p className="text-sm text-gray-600 mb-2">Deskripsi singkat kursus</p>
              <div className="flex justify-between items-center">
                <span className="font-bold">Rp 149.000</span>
                <button className="bg-blue-600 text-white px-3 py-1 rounded-xl">
                  Beli
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ebook */}
      <section className="p-10 bg-white">
        <h3 className="text-2xl font-semibold mb-6">eBook</h3>
        <div className="grid grid-cols-4 gap-6">
          {[1,2,3,4].map((item)=> (
            <div key={item} className="bg-gray-50 rounded-2xl shadow p-4">
              <div className="h-40 bg-gray-200 rounded-xl mb-4" />
              <h4 className="font-semibold">Judul eBook</h4>
              <span className="font-bold">Rp 59.000</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-6 mt-10">
        <p>© 2026 EduPlatform. All rights reserved.</p>
      </footer>
    </div>
  );
}
