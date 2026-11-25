import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import usePageMeta from "../hooks/usePageMeta.js";

const mosaicImages = [
  {
    src: "/assets/projects/pemadatan-basecourse-bandara.jpg",
    alt: "Pemadatan basecourse landasan bandara dengan tandem roller",
  },
  { src: "/assets/projects/pengaspalan-keroncong.jpg", alt: "Pengaspalan kawasan industri" },
  { src: "/assets/projects/ipal-gwt.jpg", alt: "Pekerjaan IPAL dan ground water tank" },
  { src: "/assets/projects/bobokan-tol-jor.jpg", alt: "Pembobokan struktur jalan tol JOR" },
  { src: "/assets/projects/pematangan-lahan.jpg", alt: "Pematangan lahan proyek" },
  { src: "/assets/projects/pengecatan-gardu-pln.jpg", alt: "Pengecatan gardu PLN" },
];

const pageLinks = [
  {
    to: "/tentang",
    num: "01",
    title: "Tentang Kami",
    description: "Profil perseroan, nilai kerja, data perusahaan, dan struktur organisasi.",
  },
  {
    to: "/layanan",
    num: "02",
    title: "Layanan",
    description:
      "Enam bidang usaha: gedung, konstruksi khusus, angkutan, sewa alat, pekerjaan tanah, dan perkerasan.",
  },
  {
    to: "/proyek",
    num: "03",
    title: "Proyek",
    description: "Portofolio pekerjaan yang terdokumentasi, dapat difilter menurut kategori.",
  },
  {
    to: "/klien",
    num: "04",
    title: "Klien & Mitra",
    description: "Perusahaan dan instansi yang mempercayakan pekerjaannya kepada kami.",
  },
  {
    to: "/legalitas",
    num: "05",
    title: "Legalitas",
    description: "Akta, perizinan, komposisi modal, dan laporan tahunan perseroan.",
  },
  {
    to: "/kontak",
    num: "06",
    title: "Kontak",
    description: "Alamat kantor, telepon/WhatsApp, email, dan formulir kebutuhan proyek.",
  },
];

export default function Beranda() {
  usePageMeta(
    "PT. Diande Putra Mandiri — Konstruksi & Infrastruktur",
    "PT. Diande Putra Mandiri adalah perusahaan konstruksi di Jakarta Timur yang melayani pekerjaan konstruksi gedung, konstruksi khusus, angkutan darat, dan penyewaan alat sejak 2022."
  );

  return (
    <>
      <section className="hero" id="beranda">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Konstruksi &amp; Infrastruktur · Sejak 2022</p>
            <h1>
              Membangun kokoh,
              <br />
              menuntaskan dengan <span className="mark">presisi</span>.
            </h1>
            <p className="lead">
              PT. Diande Putra Mandiri melayani pekerjaan konstruksi gedung, konstruksi khusus,
              hingga penyiapan lahan di Jabodetabek dan Jawa Barat — didukung tim berpengalaman
              dan tenaga ahli bersertifikat.
            </p>
            <div className="hero-actions">
              <Link className="btn btn--dark" to="/kontak">
                Diskusikan Proyek
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link className="btn btn--ghost" to="/proyek">
                Lihat Portofolio
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </Link>
            </div>
            <div className="hero-meta">
              <span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Berdiri sejak 2022
              </span>
              <span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Jakarta Timur, DKI Jakarta
              </span>
              <span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" />
                  <path d="m3 7 9 5 9-5M12 22V12" />
                </svg>
                6 bidang usaha
              </span>
            </div>
          </div>

          <Reveal as="figure" className="hero-art">
            <div className="art-top">
              <span>DPM / Dokumentasi</span>
              <span className="art-dot">JKT · ID</span>
            </div>
            <div className="hero-mosaic">
              {mosaicImages.map((image) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  width="600"
                  height="450"
                />
              ))}
            </div>
            <span className="hero-veil" aria-hidden="true"></span>

            <div className="art-badge art-badge--top">
              <span className="num">2022</span>
              <span className="lbl">
                Tahun
                <br />
                berdiri
              </span>
            </div>

            <div className="art-badge art-badge--bottom">
              <span className="tick">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <div>
                <strong>26 pekerjaan terdokumentasi</strong>
                <small>Gedung, infrastruktur &amp; pekerjaan tanah</small>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="stats" aria-label="Ringkasan perusahaan">
        <div className="container stats-grid">
          <div className="stat">
            <strong>2022</strong>
            <span>Tahun perusahaan berdiri</span>
          </div>
          <div className="stat">
            <strong>6</strong>
            <span>Bidang usaha utama</span>
          </div>
          <div className="stat">
            <strong>26</strong>
            <span>Pekerjaan terdokumentasi</span>
          </div>
          <div className="stat">
            <strong>3</strong>
            <span>Provinsi jangkauan kerja</span>
          </div>
        </div>
      </section>

      <section className="section" id="halaman">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Jelajahi</p>
              <h2>Setiap topik punya halamannya sendiri.</h2>
            </div>
            <p>
              Profil, layanan, portofolio, klien, legalitas, dan kontak tersedia pada halaman
              terpisah sehingga lebih mudah dibuka dan dibagikan.
            </p>
          </div>

          <div className="paths-grid">
            {pageLinks.map((page) => (
              <Link className="path-card" key={page.to} to={page.to}>
                <span className="path-num">{page.num}</span>
                <h3>{page.title}</h3>
                <p>{page.description}</p>
                <span className="path-more">
                  Buka halaman
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
