import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import { projects } from "../data/projects.js";
import { clients } from "../data/clients.js";

const WA_NUMBER = "6281211166224";
const WA_HREF = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Halo PT. Diande Putra Mandiri, saya ingin berkonsultasi mengenai rencana pekerjaan konstruksi."
)}`;

const findProject = (title) => projects.find((project) => project.title === title);

const mosaic = [
  "Pemadatan Lahan Basecourse",
  "Pengaspalan Kawasan Industri",
  "IPAL & Ground Water Tank",
  "Bobokan Jalan Tol JOR",
  "Pematangan Lahan",
  "Pengecatan Gardu PLN",
]
  .map(findProject)
  .filter(Boolean);

const featuredProjects = [
  "Pemadatan Lahan Basecourse",
  "Timbunan Lahan Marunda",
  "Bobokan Jalan Tol Jagorawi",
]
  .map(findProject)
  .filter(Boolean);

const LogoSet = ({ hidden }) => (
  <ul className="logo-marquee__set" aria-hidden={hidden ? "true" : undefined}>
    {clients.map((client) => (
      <li key={client.name}>
        <img
          src={client.logo.src}
          alt={client.logo.alt}
          width={client.logo.width}
          height={client.logo.height}
          className={client.logo.className}
          decoding="async"
        />
      </li>
    ))}
  </ul>
);

const legalChips = [
  { label: "Akta pendirian", value: "No. 19 · 29 Juli 2022" },
  { label: "Pengesahan Kemenkumham", value: "AHU-0051229.AH.01.01.TAHUN 2022" },
  { label: "NIB", value: "0108220067519 · PMDN" },
];

const serviceSummary = [
  {
    num: "01",
    title: "Konstruksi Gedung",
    description:
      "Pembangunan, renovasi, dan pemeliharaan gedung hunian, kantor, industri, hingga fasilitas kesehatan.",
    icon: (
      <>
        <path d="M3 21h18M5 21V8l7-5 7 5v13" />
        <path d="M9 21v-6h6v6M9 11h.01M15 11h.01" />
      </>
    ),
  },
  {
    num: "02",
    title: "Konstruksi Khusus",
    description:
      "Pembobokan, perkuatan struktur, dan pekerjaan pendukung yang menuntut metode serta peralatan spesifik.",
    icon: (
      <>
        <path d="M2 20h20M4 20v-5h6v5M10 20V9h5v11" />
        <path d="m14 9 5-4 2 3-4 5" />
        <path d="M4 15V11h6v4" />
        <path d="M7 11V7h4" />
      </>
    ),
  },
  {
    num: "03",
    title: "Pekerjaan Tanah",
    description:
      "Galian, timbunan, cut and fill, bongkaran, dan penyiapan lahan sampai siap dikerjakan.",
    icon: (
      <>
        <path d="M2 20h20" />
        <path d="M2 20 8 11l4 4 3-6 7 11" />
        <path d="M8 11 6 6h4l2 5" />
      </>
    ),
  },
  {
    num: "04",
    title: "Perkerasan",
    description:
      "Pengaspalan, rigid, lean concrete, dan RCV untuk jalan kawasan, halaman, serta area parkir.",
    icon: (
      <>
        <path d="M2 21h20" />
        <path d="M6 21 9 8h6l3 13" />
        <path d="M12 11v2M12 16v2" />
      </>
    ),
  },
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

const ArrowIcon = () => (
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
);

const ExternalIcon = () => (
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
);

const WhatsappIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7A8.5 8.5 0 1 1 21 11.5Z" />
    <path d="M8.5 9.5c0 3 2.5 5.5 5.5 5.5.7 0 1.2-.6 1.2-1.2l-1.4-.7-1 .6a4.2 4.2 0 0 1-2-2l.6-1-.7-1.4c-.6 0-1.2.5-1.2 1.2Z" />
  </svg>
);

export default function Beranda() {
  usePageMeta(
    "PT. Diande Putra Mandiri — Konstruksi & Infrastruktur",
    "Perusahaan konstruksi di Jakarta Timur sejak 2022. 26 pekerjaan terdokumentasi di 3 provinsi: konstruksi gedung, konstruksi khusus, pekerjaan tanah, dan perkerasan."
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
              Sejak 2022 kami telah menyelesaikan 26 pekerjaan konstruksi di 3 provinsi — gedung,
              konstruksi khusus, pekerjaan tanah, hingga perkerasan — untuk klien industri, jalan
              tol, rumah sakit, dan instansi pemerintah.
            </p>
            <div className="hero-actions">
              <Link className="btn btn--amber" to="/kontak">
                Minta Penawaran
                <ArrowIcon />
              </Link>
              <a className="btn btn--ghost" href={WA_HREF} target="_blank" rel="noopener">
                <WhatsappIcon />
                WhatsApp
              </a>
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
              {mosaic.map((project) => (
                <img
                  key={project.image}
                  src={project.image}
                  alt={project.alt}
                  width={project.width}
                  height={project.height}
                  decoding="async"
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

      <section className="section projects" id="proyek-unggulan">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow eyebrow--light">Bukti kerja</p>
              <h2>Pekerjaan yang sudah dituntaskan.</h2>
            </div>
            <p>
              Tiga contoh dari 26 pekerjaan terdokumentasi: pemadatan lahan bandara, penimbunan
              lahan di Marunda, dan pembobokan perkerasan jalan tol Jagorawi.
            </p>
          </div>

          <div className="project-grid">
            {featuredProjects.map((project) => (
              <Link className="project" to="/proyek" key={project.image}>
                <figure className="project-media">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    decoding="async"
                    width={project.width}
                    height={project.height}
                  />
                  {project.logo ? (
                    <span className="project-logo">
                      <img
                        src={project.logo.src}
                        alt={project.logo.alt}
                        width={project.logo.width}
                        height={project.logo.height}
                        loading="lazy"
                      />
                    </span>
                  ) : null}
                </figure>
                <div className="project-body">
                  <div className="project-top">
                    <span className="project-cat">{project.catLabel}</span>
                    <ExternalIcon />
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-foot">
                    <strong>{project.client}</strong>
                    <span>{project.location}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="projects-foot">
            <Link className="btn btn--amber" to="/proyek">
              Lihat semua 26 pekerjaan
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="section clients" id="klien">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Klien &amp; Mitra</p>
              <h2>Dipercaya BUMN, instansi, dan sektor swasta.</h2>
            </div>
            <p>
              Enam belas perusahaan dan instansi tercatat dalam dokumentasi pekerjaan kami — dari
              ketenagalistrikan dan jalan tol hingga fasilitas kesehatan dan instansi pemerintah.
            </p>
          </div>

          <div className="logo-marquee">
            <div className="logo-marquee__viewport">
              <div className="logo-marquee__track">
                <LogoSet />
                <LogoSet hidden />
              </div>
            </div>
          </div>
          <p className="marquee-hint">Geser untuk melihat semua logo</p>

          <div className="trust-foot">
            <Link className="link-more" to="/klien">
              Lihat semua klien
              <ArrowIcon />
            </Link>
          </div>

          <div className="legal-strip">
            <div className="legal-strip-head">
              <h3>Legalitas perseroan</h3>
              <Link className="link-more" to="/tentang#legalitas">
                Buka legalitas di Tentang
                <ArrowIcon />
              </Link>
            </div>
            <ul className="legal-chips">
              {legalChips.map((chip) => (
                <li key={chip.label}>
                  <Link className="legal-chip" to="/tentang#legalitas">
                    <span className="lc-ico">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M12 3 4 6v6c0 5 3.4 8.3 8 9 4.6-.7 8-4 8-9V6l-8-3Z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </span>
                    <span>
                      <strong>{chip.label}</strong>
                      <span>{chip.value}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section services" id="layanan">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Layanan</p>
              <h2>Enam bidang usaha, satu titik koordinasi.</h2>
            </div>
            <p>
              Pekerjaan struktur, tanah, dan perkerasan ditangani tim internal dengan peralatan yang
              disiapkan sesuai kebutuhan lapangan.
            </p>
          </div>

          <div className="service-grid service-grid--four">
            {serviceSummary.map((service) => (
              <Link className="service service--link" to="/layanan" key={service.title}>
                <div className="service-top">
                  <span className="service-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {service.icon}
                    </svg>
                  </span>
                  <span className="service-num">{service.num}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-more">
                  Lihat layanan
                  <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>

          <div className="service-foot">
            <Link className="btn btn--dark btn--sm" to="/layanan">
              Lihat keenam bidang usaha
              <ArrowIcon />
            </Link>
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
                  <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="penawaran">
        <div className="container">
          <div className="cta-band">
            <div>
              <p className="eyebrow eyebrow--light">Minta penawaran</p>
              <h2>Punya pekerjaan yang perlu dituntaskan?</h2>
              <p>
                Sampaikan lokasi, lingkup, dan target waktu pekerjaan. Tim kami menindaklanjuti
                dengan penawaran sesuai kebutuhan proyek Anda.
              </p>
              <div className="hero-actions">
                <Link className="btn btn--amber" to="/kontak">
                  Minta Penawaran
                  <ArrowIcon />
                </Link>
                <a
                  className="btn btn--light"
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener"
                >
                  <WhatsappIcon />
                  WhatsApp Bisnis
                </a>
              </div>
            </div>

            <div className="cta-facts">
              <div className="cta-fact">
                <span className="label">Telepon / WhatsApp</span>
                <a href="tel:+6281211166224">0812-1116-6224</a>
              </div>
              <div className="cta-fact">
                <span className="label">Email</span>
                <a href="mailto:diandeputramandiri.com@gmail.com">
                  diandeputramandiri.com@gmail.com
                </a>
              </div>
              <div className="cta-fact">
                <span className="label">Kantor</span>
                <address>
                  Jl. Sodong Raya No. 6, Cipinang, Pulogadung, Jakarta Timur 13240
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
