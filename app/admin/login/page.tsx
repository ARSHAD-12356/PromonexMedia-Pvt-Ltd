"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ShieldCheck, User, Lock, Eye, EyeOff, LogIn, AlertCircle, CheckCircle2 } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!adminId.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your Admin ID.");
      return;
    }

    if (!password.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your Password.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    setTimeout(() => {
      // Strictly enforced Admin Credentials
      const normalizedId = adminId.trim().toLowerCase();
      const isValidAdmin =
        (normalizedId === "promonex_admin" || normalizedId === "admin") &&
        password === "Promonex@2026";

      if (isValidAdmin) {
        setStatus("success");
        if (typeof window !== "undefined") {
          sessionStorage.setItem("promonex_admin_auth", "true");
        }
        setTimeout(() => {
          router.push("/admin/blog");
        }, 800);
      } else {
        setStatus("error");
        setErrorMessage("Invalid Admin ID or Password. Access Denied.");
      }
    }, 900);
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-white text-slate-800 flex flex-col justify-between selection:bg-[#00D9FF] selection:text-[#020B35]">
      {/* ── Ambient Subtle Light Background Lighting ───────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,217,255,0.12)_0%,rgba(59,130,246,0.06)_50%,transparent_75%)] blur-3xl select-none"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -left-36 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.08)_0%,transparent_70%)] blur-3xl select-none"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -right-36 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,217,255,0.08)_0%,transparent_70%)] blur-3xl select-none"
      />

      {/* ── Top Bar with Back Arrow Button (Reduced left margin) ─────────── */}
      <header className="relative z-20 w-full px-4 sm:px-8 lg:px-12 pt-6 sm:pt-8 flex items-center justify-between">
        {/* TOP LEFT: Back Arrow Button to Home Page */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-[#020B35] px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-[0_4px_16px_rgba(2,11,53,0.15)] transition-all duration-300 hover:border-[#00D9FF] hover:bg-[#061442] hover:text-[#00D9FF] hover:shadow-[0_0_20px_rgba(0,217,255,0.35)] active:scale-95"
          aria-label="Back to Home Page"
        >
          <ArrowLeft
            size={18}
            className="text-[#00D9FF] transition-transform duration-200 group-hover:-translate-x-1 stroke-[2.4]"
          />
          <span>Back to Home</span>
        </Link>

        {/* Top Right: Brand Badge */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600">
          <span className="h-2 w-2 rounded-full bg-[#00D9FF] shadow-[0_0_8px_#00D9FF] animate-pulse" />
          <span className="hidden sm:inline text-slate-700">Promonex Media</span>
          <span className="text-[#0284C7] font-bold">Admin Portal</span>
        </div>
      </header>

      {/* ── Centered Admin Login Panel ─────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          {/* Glowing Glassmorphic Panel Card (Preserved in Dark Blue) */}
          <div className="relative rounded-3xl border border-cyan-400/30 bg-[#061442] p-7 sm:p-9 shadow-[0_20px_60px_rgba(2,11,53,0.35),0_0_40px_rgba(0,217,255,0.12)] backdrop-blur-xl text-white">
            {/* Top Glowing Ambient Border Aura */}
            <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#00D9FF]/80 to-transparent" />

            {/* Header Icon & Title */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/40 bg-gradient-to-br from-[#0A246F] to-[#041033] shadow-[0_0_25px_rgba(0,217,255,0.35)]">
                <ShieldCheck size={28} className="text-[#00D9FF] stroke-[2.2]" />
                <span className="absolute -inset-1 rounded-2xl bg-[#00D9FF]/20 blur-sm pointer-events-none" />
              </div>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-[#0A1F5C]/60 px-3 py-0.5 text-[10.5px] font-bold tracking-widest text-[#00D9FF] uppercase mb-2">
                Manage Blog
              </span>

              <h1 className="text-2xl sm:text-[28px] font-extrabold tracking-tight text-white font-poppins">
                Admin Login
              </h1>
              <p className="mt-1.5 text-xs sm:text-[13px] text-slate-300 leading-relaxed max-w-xs">
                Enter your credentials to securely access and manage blog articles.
              </p>
            </div>

            {/* Status Feedback Toast */}
            <AnimatePresence>
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -8, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -8, height: 0 }}
                  className="mt-4 flex items-center gap-2 rounded-xl border border-red-500/40 bg-red-950/40 p-3 text-xs text-red-200"
                >
                  <AlertCircle size={16} className="text-red-400 shrink-0" />
                  <span>{errorMessage}</span>
                </motion.div>
              )}

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -8, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -8, height: 0 }}
                  className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-950/40 p-3 text-xs text-emerald-200"
                >
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>Authentication verified! Preparing blog editor dashboard...</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Admin ID Field */}
              <div>
                <label
                  htmlFor="adminId"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                >
                  Admin ID
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                    <User size={18} className="text-cyan-400/80" />
                  </div>
                  <input
                    id="adminId"
                    type="text"
                    value={adminId}
                    onChange={(e) => setAdminId(e.target.value)}
                    placeholder="Enter Admin ID"
                    required
                    autoComplete="username"
                    className="w-full rounded-xl border border-slate-700/80 bg-[#020B35]/90 py-3 pl-10 pr-4 text-sm text-white placeholder-slate-500 shadow-inner outline-none transition-all duration-200 focus:border-[#00D9FF] focus:ring-2 focus:ring-[#00D9FF]/25 hover:border-slate-600"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                    <Lock size={18} className="text-cyan-400/80" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                    required
                    autoComplete="current-password"
                    className="w-full rounded-xl border border-slate-700/80 bg-[#020B35]/90 py-3 pl-10 pr-11 text-sm text-white placeholder-slate-500 shadow-inner outline-none transition-all duration-200 focus:border-[#00D9FF] focus:ring-2 focus:ring-[#00D9FF]/25 hover:border-slate-600"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-cyan-400 transition-colors focus:outline-none"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="group relative mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-bold text-[#020B35] shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all duration-200 hover:bg-slate-100 hover:shadow-[0_6px_25px_rgba(255,255,255,0.3)] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
              >
                {status === "loading" ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#020B35] border-t-transparent" />
                    <span>Verifying Credentials...</span>
                  </>
                ) : (
                  <>
                    <LogIn size={18} className="stroke-[2.2] text-[#020B35]" />
                    <span>Login to Manage Blog</span>
                  </>
                )}
              </button>
            </form>

            {/* Bottom Security Disclaimer */}
            <div className="mt-6 pt-4 border-t border-slate-700/60 text-center">
              <p className="text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
                <Lock size={12} className="text-[#00D9FF]" />
                <span>Protected Environment • Authorized Personnel Only</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Footer Subtle Copyright ────────────────────────────────────── */}
      <footer className="relative z-10 w-full py-4 text-center text-[11px] text-slate-500">
        © {new Date().getFullYear()} Promonex Media Pvt. Ltd. All rights reserved.
      </footer>
    </main>
  );
}
