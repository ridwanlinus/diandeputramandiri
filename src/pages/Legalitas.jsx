import usePageMeta from "../hooks/usePageMeta.js";

const legalCards = [
  {
    tag: "Akta Terbaru",
    title: "Keputusan pemegang saham 2026",
    description:
      "Pernyataan Keputusan Para Pemegang Saham yang diaktakan oleh Notaris Darmawati, S.H., M.Kn. di Kabupaten Indramayu.",
    rows: [
      ["Nomor akta", "63"],
      ["Tanggal akta", "26 Okt 2026"],
      ["Keputusan sirkuler", "23 Okt 2026"],
    ],
  },
  {
    tag: "Modal & Saham",
    title: "Rp1.375.000.000",
    description:
      "Modal ditempatkan sebesar Rp1.375.000.000 melalui 1.375 lembar saham, seluruhnya bernilai nominal Rp1.375.000.000.",
    rows: [
      ["Diande Din Syamsudin", "1.275 saham"],
      ["Bobby Erika Putra", "50 saham"],
      ["Gugum Gumelar Nur Hakim", "50 saham"],
    ],
  },
  {
    tag: "Akta Pendirian",
    title: "Anggaran dasar & pengesahan",
    description:
      "Anggaran dasar yang berlaku termuat dalam akta pendirian No. 19 tanggal 29 Juli 2022 oleh Notaris Suheri Hadisusastro, S.H., M.Kn. di Kabupaten Tangerang.",
    rows: [
      ["Akta pendirian", "No. 19"],
      ["Tanggal akta", "29 Jul 2022"],
      ["Pengesahan", "30 Jul 2022"],
      ["SK Menteri Hukum", "AHU-0051229"],
    ],
  },
  {
    tag: "Pencatatan AHU",
    title: "Laporan tahunan 2025",
    description:
      "Laporan tahunan dan laporan keuangan tahun buku 2025 telah disahkan pemegang saham dan tercatat pada Sistem Administrasi Badan Hukum Kementerian Hukum Republik Indonesia.",
    rows: [
      ["Pengesahan", "23 Okt 2026"],
      ["Tercatat AHU", "26 Okt 2026"],
      ["No. surat", "AHU-AH.01-0168373"],
      ["Kriteria", "Tidak Wajib Audit"],
    ],
  },
];

const timeline = [
  {
    date: "29 Juli 2022",
    title: "Pendirian perseroan",
    description:
      "Akta pendirian No. 19 dibuat di hadapan Notaris Suheri Hadisusastro, S.H., M.Kn. di Kabupaten Tangerang, dengan kedudukan di Jakarta Timur dan jangka waktu tidak terbatas.",
  },
  {
    date: "30 Juli 2022",
    title: "Pengesahan badan hukum",
    description:
      "Pengesahan Kementerian Hukum dan HAM RI melalui SK No. AHU-0051229.AH.01.01.TAHUN 2022; Daftar Perseroan No. AHU-0147710.AH.01.11.TAHUN 2022.",
  },
  {
    date: "1 Agustus 2022",
    title: "NIB diterbitkan",
    description:
      "Nomor Induk Berusaha 0108220067519 atas status PMDN dengan skala Usaha Kecil, diperbarui 7 Agustus 2026.",
  },
  {
    date: "Tahun buku 2025",
    title: "Laporan tahunan disusun",
    description:
      "Laporan tahunan dan laporan keuangan 2025 disusun dengan kriteria Tidak Wajib Audit, tanpa kendala yang berarti selama periode berjalan.",
  },
  {
    date: "26 Oktober 2026",
    title: "Akta No. 63 & pencatatan AHU",
    description:
      "Keputusan pemegang saham 23 Oktober 2026 diaktakan Notaris Darmawati, S.H., M.Kn.; laporan tahunan 2025 tercatat AHU No. AHU-AH.01-0168373.",
  },
];

export default function Legalitas() {
  usePageMeta(
    "Legalitas & Tata Kelola — PT. Diande Putra Mandiri",
    "Akta pendirian, pengesahan badan hukum, NIB, komposisi modal, dan laporan tahunan PT. Diande Putra Mandiri."
  );

  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="eyebrow">Legalitas & Tata Kelola</p>
          <h1>Administrasi perseroan yang tertib dan terbarui.</h1>
          <p className="lead">
            Data pada halaman ini disarikan dari tiga dokumen resmi perseroan: akta pendirian
            beserta pengesahan anggaran dasar, surat pencatatan laporan tahunan 2025, dan akta
            keputusan pemegang saham 2026.
          </p>
        </div>
      </section>

      <section className="section legal" id="legalitas">
        <div className="container">
          <div className="legal-grid">
            {legalCards.map((card) => (
              <article className="legal-card" key={card.title}>
                <span className="tag">{card.tag}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <dl>
                  {card.rows.map(([term, value]) => (
                    <div className="lrow" key={term}>
                      <dt>{term}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>

          <ol className="legal-timeline">
            {timeline.map((item) => (
              <li key={item.date}>
                <span className="lt-date">{item.date}</span>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </li>
            ))}
          </ol>

          <p className="legal-note">
            Pemegang saham memberikan pembebasan tanggung jawab (acquit et de charge) kepada
            Direksi dan Dewan Komisaris atas pengurusan serta pengawasan tahun buku 2025, dan
            menetapkan penggunaan laba positif tahun buku tersebut. Selama tahun buku 2025
            perseroan tidak mengalami kendala atau permasalahan apa pun sebagaimana dinyatakan
            dalam akta.
          </p>
        </div>
      </section>
    </>
  );
}
