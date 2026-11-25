import Reveal from "../components/Reveal.jsx";
import usePageMeta from "../hooks/usePageMeta.js";

const values = [
  {
    num: "01",
    title: "Mutu Pekerjaan",
    description:
      "Metode kerja dan material yang sesuai spesifikasi teknis serta standar kelayakan konstruksi.",
  },
  {
    num: "02",
    title: "Keselamatan Kerja",
    description: "Pelaksanaan di lapangan didukung tenaga ahli K3 konstruksi bersertifikat.",
  },
  {
    num: "03",
    title: "Ketepatan Waktu",
    description: "Perencanaan jadwal dan pengendalian lapangan agar pekerjaan tuntas sesuai target.",
  },
];

const facts = [
  { term: "Nama", value: "PT. Diande Putra Mandiri" },
  {
    term: "Berdiri",
    value: "29 Juli 2022",
    note: "Akta pendirian No. 19, Notaris Suheri Hadisusastro, S.H., M.Kn.",
  },
  {
    term: "Badan hukum",
    value: "Perseroan terbatas",
    note: "SK Menteri Hukum RI No. AHU-0051229.AH.01.01.TAHUN 2022, 30 Juli 2022",
  },
  {
    term: "NIB",
    value: "0108220067519",
    note: "Terbit 1 Agustus 2022, perubahan 7 Agustus 2026",
  },
  { term: "Kedudukan", value: "Jakarta Timur, DKI Jakarta" },
  { term: "Modal dasar", value: "Rp5.500.000.000" },
  {
    term: "Modal ditempatkan",
    value: "Rp1.375.000.000",
    note: "1.375 saham, per 26 Oktober 2026",
  },
  {
    term: "Akta terakhir",
    value: "No. 63, 26 Oktober 2026",
    note: "Notaris Darmawati, S.H., M.Kn.",
  },
  {
    term: "Jangka waktu",
    value: "Tidak terbatas",
    note: "Tahun buku 1 Januari – 31 Desember",
  },
  {
    term: "Bidang usaha",
    value:
      "Konstruksi Gedung; Konstruksi Khusus; Angkutan Darat & Saluran Pipa; Penyewaan & Sewa Guna Usaha",
  },
  { term: "Wilayah kerja", value: "Jabodetabek, Banten & Jawa Barat" },
];

const credentials = [
  {
    title: "Ahli Teknik Bangunan Gedung — Muda",
    source: "LPJK / ATAKNAS · 2018",
  },
  { title: "Ahli Muda K3 Konstruksi", source: "Diklat K3 Konstruksi · 2016" },
  { title: "Operator K3 Migas", source: "Diklat pengoperasian K3 Migas · 2021" },
];

export default function Tentang() {
  usePageMeta(
    "Tentang Kami — PT. Diande Putra Mandiri",
    "Profil PT. Diande Putra Mandiri: nilai kerja, data perseroan, legalitas dasar, dan struktur organisasi perusahaan konstruksi di Jakarta Timur."
  );

  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="eyebrow">Profil Perusahaan</p>
          <h1>Tentang PT. Diande Putra Mandiri</h1>
          <p className="lead">
            Perseroan terbatas yang berkedudukan di Jakarta Timur, berdiri 29 Juli 2022, dan
            mengerjakan konstruksi gedung, konstruksi khusus, angkutan darat, serta penyewaan
            peralatan.
          </p>
        </div>
      </section>

      <section className="section" id="tentang">
        <div className="container">
          <div className="about-grid">
            <div className="about-copy">
              <p className="eyebrow">Tentang Kami</p>
              <h2 style={{ marginBottom: "22px" }}>
                Perusahaan konstruksi yang tumbuh bersama kepercayaan klien.
              </h2>
              <p>
                <strong>PT. Diande Putra Mandiri</strong> adalah perseroan terbatas yang
                berkedudukan di Jakarta Timur dan didirikan pada 29 Juli 2022. Sejak itu, kami
                mengerjakan pekerjaan konstruksi gedung, konstruksi khusus, angkutan darat, serta
                penyewaan peralatan konstruksi.
              </p>
              <p>
                Pengalaman lapangan kami mencakup pembongkaran struktur, penyiapan dan pemadatan
                lahan, pengaspalan kawasan industri, pekerjaan galian, hingga pembangunan fasilitas
                pendukung rumah sakit dan infrastruktur ketenagalistrikan. Setiap pekerjaan
                dijalankan dengan mengutamakan mutu, keselamatan kerja, dan ketepatan waktu
                penyerahan.
              </p>

              <div className="values">
                {values.map((value) => (
                  <div className="value" key={value.num}>
                    <span className="v-num">{value.num}</span>
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <Reveal as="aside" className="facts" aria-label="Data perusahaan">
              <div className="facts-head">
                <span>Data Perusahaan</span>
                <svg
                  className="seal"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 2 4 5v6c0 5 3.4 8.6 8 11 4.6-2.4 8-6 8-11V5l-8-3Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <dl>
                {facts.map((fact) => (
                  <div className="row" key={fact.term}>
                    <dt>{fact.term}</dt>
                    <dd>
                      {fact.value}
                      {fact.note ? <small>{fact.note}</small> : null}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" id="struktur">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Struktur Organisasi</p>
              <h2>Tim yang menjaga setiap tahap pekerjaan.</h2>
            </div>
            <p>
              Pengambilan keputusan, pengawasan lapangan, dan administrasi keuangan dijalankan oleh
              tim dengan pembagian peran yang jelas.
            </p>
          </div>

          <Reveal as="figure" className="org-figure">
            <img
              src="/assets/org-chart.svg"
              alt="Bagan struktur organisasi PT. Diande Putra Mandiri: Komisaris, Direktur Utama, Direktur, unit pelaksana, dan tim lapangan"
              width="1200"
              height="620"
              loading="lazy"
            />
          </Reveal>

          <p className="team-label">Sertifikasi &amp; kompetensi tenaga ahli</p>
          <div className="credentials">
            {credentials.map((credential) => (
              <div className="credential" key={credential.title}>
                <strong>{credential.title}</strong>
                <span>{credential.source}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
