import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/tentang", label: "Tentang" },
  { to: "/layanan", label: "Layanan" },
  { to: "/proyek", label: "Proyek" },
  { to: "/klien", label: "Klien" },
  { to: "/kontak", label: "Kontak" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 860) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.classList.remove("nav-open");
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

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

        <button
          className="nav-toggle"
          id="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
          onClick={() => setOpen((value) => !value)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          className={`nav${open ? " is-open" : ""}`}
          id="primary-nav"
          aria-label="Navigasi utama"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}
              to={link.to}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link className="btn btn--dark btn--sm" to="/kontak" onClick={() => setOpen(false)}>
            Hubungi Kami
          </Link>
        </nav>
      </div>
    </header>
  );
}
