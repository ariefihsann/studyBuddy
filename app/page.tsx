
export default function LandingPage() {
  return (
    <main>
      <nav className="navbar">
        <a href="/" className="brand">
          <span className="brand-icon">🎓</span>
          StudyBuddy
        </a>

        <div className="nav-links">
          <a href="#fitur">Fitur</a>
          <a href="#tentang">Tentang Kami</a>
          <a href="/login" className="btn btn-outline">
            Masuk
          </a>
          <a href="/login" className="btn btn-primary">
            Gabung Sekarang
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">
            ✨ Teman belajar terbaikmu
          </span>

          <h1>
            Belajar Bersama,
            <br />
            <span className="text-blue">Tumbuh Bersama.</span>
          </h1>

          <p>
            Temukan teman belajar, diskusikan ide, dan capai
            tujuan akademikmu bersama komunitas StudyBuddy.
          </p>

          <div className="hero-actions">
            <a href="/login" className="btn btn-primary btn-large">
              Mulai Sekarang →
            </a>
            <a href="#fitur" className="btn btn-outline btn-large">
              Pelajari Fitur
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>1.000+</strong>
              <span>Teman Belajar</span>
            </div>
            <div>
              <strong>250+</strong>
              <span>Grup Diskusi</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Semangat Belajar</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-illustration">
            <div className="illustration-circle">
              <span>👩🏻‍💻</span>
              <span>👨🏽‍🎓</span>
              <span>👩🏼‍🎓</span>
            </div>
            <div className="illustration-book">📚</div>
            <div className="illustration-caption">
              <strong>Grow Together!</strong>
              <p>Belajar tidak harus sendirian.</p>
            </div>
          </div>

          <div className="floating-card card-top">
            📖 Belajar bersama teman
          </div>
          <div className="floating-card card-bottom">
            💡 Temukan ide baru
          </div>
        </div>
      </section>

      <section id="fitur" className="features section">
        <div className="section-heading">
          <span className="eyebrow">FITUR STUDYBUDDY</span>
          <h2>Semua yang kamu butuhkan untuk belajar</h2>
          <p>
            Terhubung, berdiskusi, dan berkembang bersama
            komunitas belajar.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>Temukan Teman</h3>
            <p>
              Temukan teman belajar dengan minat yang sama.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>Ruang Diskusi</h3>
            <p>
              Bertukar ide dan menyelesaikan masalah bersama.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">📅</div>
            <h3>Jadwal Belajar</h3>
            <p>
              Atur jadwal agar kegiatan belajarmu terorganisasi.
            </p>
          </article>
        </div>
      </section>

      <section id="tentang" className="cta-section">
        <h2>Siap memulai perjalanan belajarmu?</h2>
        <p>
          Bergabung dengan StudyBuddy dan berkembang
          bersama teman-temanmu.
        </p>
        <a href="/login" className="btn btn-white btn-large">
          Gabung StudyBuddy →
        </a>
      </section>

      <footer className="footer">
        <a href="/" className="brand">
          🎓 StudyBuddy
        </a>
        <p>© 2026 StudyBuddy. Belajar bersama, tumbuh bersama.</p>
      </footer>
    </main>
  );
}
