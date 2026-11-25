import { useRef, useState } from "react";
import usePageMeta from "../hooks/usePageMeta.js";

const WA_NUMBER = "6281211166224";

const needsOptions = [
  "Konstruksi gedung",
  "Konstruksi khusus / pekerjaan tanah",
  "Pengaspalan & infrastruktur jalan",
  "Angkutan material",
  "Penyewaan alat / kendaraan",
  "Lainnya",
];

export default function Kontak() {
  usePageMeta(
    "Kontak — PT. Diande Putra Mandiri",
    "Hubungi PT. Diande Putra Mandiri: alamat kantor Jakarta Timur, telepon/WhatsApp, email, dan formulir kebutuhan proyek."
  );

  const formRef = useRef(null);
  const [values, setValues] = useState({
    nama: "",
    perusahaan: "",
    kebutuhan: needsOptions[0],
    pesan: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = formRef.current;
    if (form && !form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const nama = values.nama.trim();
    const perusahaan = values.perusahaan.trim();
    const pesan = values.pesan.trim();

    const text =
      "Halo PT. Diande Putra Mandiri,\n\n" +
      "Saya " +
      nama +
      (perusahaan ? " dari " + perusahaan : "") +
      ".\n" +
      "Kebutuhan: " +
      values.kebutuhan +
      "\n\n" +
      pesan +
      "\n\n" +
      "Mohon informasi lebih lanjut. Terima kasih.";

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };

  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="eyebrow">Kontak</p>
          <h1>Hubungi Kami</h1>
          <p className="lead">
            Alamat kantor, telepon dan WhatsApp, email, serta formulir kebutuhan proyek untuk
            ditindaklanjuti oleh tim kami.
          </p>
        </div>
      </section>

      <section className="section contact" id="kontak">
        <div className="container contact-grid">
          <div className="contact-copy">
            <p className="eyebrow">Hubungi Kami</p>
            <h2>Mari bangun proyek Anda bersama kami.</h2>
            <p>
              Diskusikan kebutuhan konstruksi, pekerjaan tanah, atau penyewaan alat. Tim kami akan
              menindaklanjuti sesuai lingkup pekerjaan Anda.
            </p>

            <div className="contact-list">
              <div className="contact-item">
                <span className="ico">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <span className="label">Kantor</span>
                  <address>
                    Jl. Sodong Raya No. 6, RT.001/RW.017, Cipinang, Pulogadung, Jakarta Timur, DKI
                    Jakarta 13240
                  </address>
                  <a
                    href="https://maps.google.com/?q=Jl.+Sodong+Raya+No.+6,+Cipinang,+Pulogadung,+Jakarta+Timur+13240"
                    target="_blank"
                    rel="noopener"
                  >
                    <small>Buka di Google Maps →</small>
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span className="ico">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2.1Z" />
                  </svg>
                </span>
                <div>
                  <span className="label">Telepon / WhatsApp</span>
                  <a href="tel:+6281211166224">0812-1116-6224</a>
                  <a href="tel:+6288292200433">
                    <small>0882-9220-0433</small>
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span className="ico">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="3" />
                    <path d="m3 6 9 7 9-7" />
                  </svg>
                </span>
                <div>
                  <span className="label">Email</span>
                  <a href="mailto:diandeputramandiri.com@gmail.com">
                    diandeputramandiri.com@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="form-card">
            <h3>Kirim kebutuhan proyek</h3>
            <p>Isi singkat kebutuhan Anda, lalu lanjutkan melalui WhatsApp.</p>
            <form id="contact-form" ref={formRef} onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <label htmlFor="nama">Nama</label>
                <input
                  id="nama"
                  name="nama"
                  type="text"
                  placeholder="Nama Anda"
                  required
                  autoComplete="name"
                  value={values.nama}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label htmlFor="perusahaan">
                  Perusahaan{" "}
                  <span
                    style={{ textTransform: "none", letterSpacing: 0, fontWeight: 500 }}
                  >
                    (opsional)
                  </span>
                </label>
                <input
                  id="perusahaan"
                  name="perusahaan"
                  type="text"
                  placeholder="Nama perusahaan"
                  autoComplete="organization"
                  value={values.perusahaan}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label htmlFor="kebutuhan">Jenis kebutuhan</label>
                <select
                  id="kebutuhan"
                  name="kebutuhan"
                  value={values.kebutuhan}
                  onChange={handleChange}
                >
                  {needsOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="form-row">
                <label htmlFor="pesan">Pesan</label>
                <textarea
                  id="pesan"
                  name="pesan"
                  placeholder="Ceritakan lokasi, lingkup, dan target waktu pekerjaan..."
                  required
                  value={values.pesan}
                  onChange={handleChange}
                />
              </div>
              <button className="btn btn--amber" type="submit">
                Kirim via WhatsApp
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />
                </svg>
              </button>
              <p className="form-note">Formulir akan membuka WhatsApp dengan pesan yang sudah terisi.</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
