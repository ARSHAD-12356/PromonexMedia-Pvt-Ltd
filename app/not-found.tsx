export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#020B35] px-6 text-center text-white">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-[#00D9FF]">404</p>
        <h1 className="mt-3 text-3xl font-bold">Page not found</h1>
        <p className="mt-3 text-slate-300">The page you are looking for does not exist.</p>
      </div>
    </main>
  );
}
