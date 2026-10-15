"use client";

import { useState } from "react";

const stories = [
  { name: "Alya", emoji: "👩🏻‍🎓", color: "#dce9ff" },
  { name: "Bima", emoji: "👨🏻‍💻", color: "#f9e2d5" },
  { name: "Nadia", emoji: "👩🏽‍🎓", color: "#e7ddff" },
  { name: "Rafi", emoji: "👨🏽‍🎓", color: "#d7f2e5" },
  { name: "Salsa", emoji: "👩🏼‍💻", color: "#ffe7c8" },
];

const discussions = [
  {
    tag: "Diskusi",
    title: "Fundamental UI/UX Design untuk pemula dan cara penerapannya dalam project live",
    description:
      "Belajar dasar UI/UX bersama teman komunitas dan praktik membuat desain yang lebih menarik.",
    author: "Fresti Herdiansyah",
    category: "UI/UX Designer",
    date: "27 Oktober 2026",
    time: "18:00 - 20:00",
    members: 12,
  },
  {
    tag: "Belajar",
    title: "Belajar Next.js dari dasar hingga membuat project pertama",
    description:
      "Kenali routing, komponen, dan cara membangun aplikasi web menggunakan Next.js.",
    author: "Andi Pratama",
    category: "Frontend Developer",
    date: "28 Oktober 2026",
    time: "19:00 - 21:00",
    members: 8,
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("Home");
  const [search, setSearch] = useState("");
  const [discussionIndex, setDiscussionIndex] = useState(0);
  const [joined, setJoined] = useState([]);
  const [groups, setGroups] = useState([]);
  const [showGroupForm, setShowGroupForm] = useState(false);
  const [groupName, setGroupName] = useState("");

  const currentDiscussion = discussions[discussionIndex];

  const filteredDiscussions = discussions.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  function joinDiscussion(title) {
    setJoined((previous) =>
      previous.includes(title) ? previous : [...previous, title]
    );
  }

  function createGroup(e) {
    e.preventDefault();

    if (!groupName.trim()) return;

    setGroups((previous) => [...previous, groupName.trim()]);
    setGroupName("");
    setShowGroupForm(false);
  }

  return (
    <main className="app-shell">
      <header className="home-header">
        <a href="/home" className="brand home-brand">
          <span className="brand-icon">🎓</span>
          <span>
            StudyBuddy
            <small>Belajar bersama, tumbuh bersama</small>
          </span>
        </a>

        <div className="header-actions">
          <button
            className="icon-button"
            aria-label="Buat grup"
            onClick={() => setShowGroupForm(true)}
          >
            👥
          </button>
          <button
            className="icon-button"
            aria-label="Notifikasi"
            onClick={() => alert("Belum ada notifikasi baru.")}
          >
            ♧
          </button>
        </div>
      </header>

      <div className="home-content">
        <div className="greeting">
          <h1>Halo, Sobat Belajar! 👋</h1>
          <p>Siap berkembang bersama hari ini?</p>
        </div>

        <label className="search-box">
          <span>⌕</span>
          <input
            type="search"
            placeholder="Cari komunitas, teman dan topik..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="search-submit">⌕</span>
        </label>

        <section className="story-section">
          <div className="section-title-row">
            <h2>Story</h2>
            <button
              className="text-link"
              onClick={() => alert("Semua story sudah ditampilkan.")}
            >
              Lihat semua →
            </button>
          </div>

          <div className="story-list">
            {stories.map((story) => (
              <button
                key={story.name}
                className="story-item"
                onClick={() => alert(`Story ${story.name} dipilih.`)}
              >
                <span
                  className="story-avatar"
                  style={{ backgroundColor: story.color }}
                >
                  {story.emoji}
                </span>
                <span>{story.name}</span>
              </button>
            ))}

            <button
              className="story-item"
              onClick={() => alert("Fitur tambah story dapat dikembangkan.")}
            >
              <span className="story-add">+</span>
              <span>Tambah</span>
            </button>
          </div>
        </section>

        <section className="discussion-section">
          <div className="section-title-row">
            <h2>Up Coming Discussion</h2>
            <button
              className="text-link"
              onClick={() => {
                setSearch("");
                setActiveTab("Room Server");
              }}
            >
              Lihat semuanya ›
            </button>
          </div>

          {search && (
            <p className="search-result">
              {filteredDiscussions.length} diskusi ditemukan
            </p>
          )}

          {filteredDiscussions.length === 0 ? (
            <div className="empty-state">
              Tidak ada diskusi yang cocok dengan pencarianmu.
            </div>
          ) : (
            <article className="discussion-card">
              <div className="discussion-tags">
                <span className="tag tag-blue">◷ {currentDiscussion.date}</span>
                <span className="tag">{currentDiscussion.tag}</span>
              </div>

              <h3>{currentDiscussion.title}</h3>
              <p className="discussion-description">
                {currentDiscussion.description}
              </p>

              <div className="discussion-author">
                <div className="author-avatar">👨🏻‍💻</div>
                <div className="author-info">
                  <strong>{currentDiscussion.author}</strong>
                  <span>{currentDiscussion.category}</span>
                </div>
                <button
                  className="btn btn-primary join-button"
                  onClick={() => joinDiscussion(currentDiscussion.title)}
                >
                  {joined.includes(currentDiscussion.title)
                    ? "Joined ✓"
                    : "Join"}
                </button>
              </div>

              <div className="discussion-meta">
                <span>👥 {currentDiscussion.members} peserta</span>
                <span>◷ {currentDiscussion.time}</span>
              </div>
            </article>
          )}

          <div className="carousel-dots">
            {discussions.map((item, index) => (
              <button
                key={item.title}
                className={index === discussionIndex ? "active" : ""}
                aria-label={`Diskusi ${index + 1}`}
                onClick={() => setDiscussionIndex(index)}
              />
            ))}
          </div>
        </section>

        <section className="add-section">
          <button
            className="add-page-card"
            onClick={() => setShowGroupForm(true)}
          >
            <span className="add-circle">+</span>
            <strong>Tambah halaman sesuai keinginanmu</strong>
            <small>Buat ruang belajar baru bersama temanmu</small>
          </button>
        </section>

        {groups.length > 0 && (
          <section className="my-groups">
            <h2>Grup Saya</h2>
            {groups.map((group, index) => (
              <div className="group-item" key={`${group}-${index}`}>
                <span>👥</span>
                <strong>{group}</strong>
                <span className="group-status">Grup dibuat</span>
              </div>
            ))}
          </section>
        )}

        {showGroupForm && (
          <div className="modal-backdrop">
            <form className="group-modal" onSubmit={createGroup}>
              <button
                type="button"
                className="modal-close"
                onClick={() => setShowGroupForm(false)}
                aria-label="Tutup"
              >
                ×
              </button>

              <div className="feature-icon">👥</div>
              <h2>Buat Grup Belajar</h2>
              <p>Buat ruang untuk belajar bersama teman-temanmu.</p>

              <label htmlFor="groupName">Nama grup</label>
              <input
                id="groupName"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                placeholder="Contoh: Belajar UI/UX"
                required
                autoFocus
              />

              <button type="submit" className="btn btn-primary login-submit">
                Buat Grup
              </button>
            </form>
          </div>
        )}
      </div>

      <nav className="bottom-nav">
        {[
          ["Home", "⌂"],
          ["Chat", "☏"],
          ["Room Server", "◉"],
          ["Jadwal", "▣"],
          ["Profil", "♙"],
        ].map(([label, icon]) => (
          <button
            key={label}
            className={`bottom-nav-item ${
              activeTab === label ? "selected" : ""
            }`}
            onClick={() => {
              setActiveTab(label);

              if (label === "Profil") {
                window.location.href = "/login";
              }
            }}
          >
            <span className="bottom-nav-icon">{icon}</span>
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </main>
  );
}