export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        <form className="space-y-4">
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
              placeholder="********"
              className="w-full border rounded-xl px-4 py-2"
            />
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-xl">
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Belum punya akun?{" "}
          <a href="/register" className="text-blue-600 font-semibold">
            Daftar
          </a>
        </p>
      </div>
    </div>
  );
}
