import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Beranda", end: true },
  { to: "/tentang", label: "Tentang" },
  { to: "/proyek", label: "Proyek" },
];

const WA_HREF = `https://wa.me/6281211166224?text=${encodeURIComponent(
  "Halo PT. Diande Putra Mandiri, saya ingin berkonsultasi mengenai rencana pekerjaan konstruksi."
)}`;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`} id="site-header">
      <div className="container nav-wrap">
        <Link className="brand" to="/" aria-label="PT. Diande Putra Mandiri — Beranda">
          <img className="brand-mark" src="/assets/logo-dpm.png" alt="" width="600" height="416" />
          <span className="brand-text">
            <strong>PT. Diande Putra Mandiri</strong>
            <small>General Contractor</small>
          </span>
        </Link>

        <nav className="nav" id="primary-nav" aria-label="Navigasi utama">
          {links.map((link) => (
            <NavLink
              key={link.to}
              end={link.end}
              className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}
              to={link.to}
            >
              {link.label}
            </NavLink>
          ))}
          <a className="btn btn--dark btn--sm" href={WA_HREF} target="_blank" rel="noopener">
            Hubungi Kami
          </a>
        </nav>
      </div>
    </header>
  );
}
