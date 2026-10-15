"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Email dan password wajib diisi.");
      return;
    }

    window.location.href = "/home";
  }

  return (
    <main className="login-page">
      <a href="/" className="brand login-brand">
        <span className="brand-icon">🎓</span>
        StudyBuddy
      </a>

      <section className="login-card">
        <div className="login-welcome">
          <div className="login-logo">👋</div>
          <h1>Selamat Datang!</h1>
          <p>Masuk untuk melanjutkan perjalanan belajarmu.</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="nama@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />

          <div className="password-label">
            <label htmlFor="password">Password</label>
            <a href="#bantuan">Lupa password?</a>
          </div>

          <div className="password-wrapper">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
            >
              {showPassword ? "🙈" : "👁"}
            </button>
          </div>

          {error && <p className="form-error">{error}</p>}

          <label className="remember-option">
            <input type="checkbox" />
            Ingat saya
          </label>

          <button type="submit" className="btn btn-primary login-submit">
            Masuk
          </button>
        </form>

        <div className="login-divider">
          <span>atau masuk dengan</span>
        </div>

        <div className="social-login">
          <button
            type="button"
            className="social-button"
            onClick={() =>
              alert("Login Google belum dihubungkan ke backend.")
            }
          >
            <strong>G</strong> Google
          </button>
          <button
            type="button"
            className="social-button"
            onClick={() =>
              alert("Login Apple belum dihubungkan ke backend.")
            }
          >
            <strong>●</strong> Apple
          </button>
        </div>

        <p className="signup-text">
          Belum punya akun? <a href="/login">Daftar sekarang</a>
        </p>

        <a href="/" className="back-link">
          ← Kembali ke halaman utama
        </a>
      </section>
    </main>
  );
}