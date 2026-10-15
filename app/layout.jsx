import "./globals.css";

export const metadata = {
  title: "StudyBuddy",
  description: "Komunitas belajar bersama",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}