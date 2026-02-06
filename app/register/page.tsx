export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Daftar Akun</h1>

        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Nama</label>
            <input
              type="text"
              placeholder="Nama lengkap"
              className="w-full border rounded-xl px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full border rounded-xl px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              className="w-full border rounded-xl px-4 py-2"
            />
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-xl">
            Daftar
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Sudah punya akun?{" "}
          <a href="/login" className="text-blue-600 font-semibold">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
