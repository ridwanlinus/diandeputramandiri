import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="brand" to="/" aria-label="PT. Diande Putra Mandiri — Beranda">
              <img
                className="brand-mark"
                src="/assets/logo-dpm-light.png"
                alt=""
                width="600"
                height="416"
              />
              <span className="brand-text">
                <strong>PT. Diande Putra Mandiri</strong>
                <small>General Contractor</small>
              </span>
            </Link>
            <p>
              Perusahaan konstruksi di Jakarta Timur yang melayani pekerjaan gedung,
              infrastruktur, pekerjaan tanah, dan penyewaan alat sejak 2022.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navigasi</h4>
            <ul>
              <li>
                <Link to="/tentang">Tentang Kami</Link>
              </li>
              <li>
                <Link to="/layanan">Layanan</Link>
              </li>
              <li>
                <Link to="/proyek">Proyek</Link>
              </li>
              <li>
                <Link to="/klien">Klien &amp; Mitra</Link>
              </li>
              <li>
                <Link to="/tentang#struktur">Struktur Organisasi</Link>
              </li>
              <li>
                <Link to="/tentang#legalitas">Legalitas</Link>
              </li>
              <li>
                <Link to="/kontak">Kontak</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Kontak</h4>
            <ul>
              <li>
                <address>
                  Jl. Sodong Raya No. 6, Cipinang, Pulogadung, Jakarta Timur 13240
                </address>
              </li>
              <li>
                <a href="tel:+6281211166224">0812-1116-6224</a>
              </li>
              <li>
                <a href="tel:+6288292200433">0882-9220-0433</a>
              </li>
              <li>
                <a href="mailto:diandeputramandiri.com@gmail.com">
                  diandeputramandiri.com@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 PT. Diande Putra Mandiri. Seluruh hak cipta dilindungi.</span>
          <a className="back-top" href="#main">
            Kembali ke atas
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 19V5M6 11l6-6 6 6" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
