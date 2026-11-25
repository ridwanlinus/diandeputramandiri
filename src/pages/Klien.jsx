import usePageMeta from "../hooks/usePageMeta.js";
import { clients } from "../data/clients.js";

export default function Klien() {
  usePageMeta(
    "Klien & Mitra — PT. Diande Putra Mandiri",
    "Perusahaan dan instansi yang mempercayakan pekerjaan konstruksi kepada PT. Diande Putra Mandiri."
  );

  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="eyebrow">Klien & Mitra</p>
          <h1>Dipercaya pada pekerjaan yang menuntut ketepatan.</h1>
          <p className="lead">
            Beberapa perusahaan dan instansi yang pekerjaannya terdokumentasi dalam company profile
            kami — dari kawasan industri dan jalan tol hingga rumah sakit dan bandara.
          </p>
        </div>
      </section>

      <section className="section clients" id="klien">
        <div className="container">
          <ul className="client-grid">
            {clients.map((client) => (
              <li className="client-card" key={client.name}>
                <span className="client-logo">
                  <img
                    src={client.logo.src}
                    alt={client.logo.alt}
                    width={client.logo.width}
                    height={client.logo.height}
                    className={client.logo.className}
                    loading="lazy"
                  />
                </span>
                <span className="client-name">{client.name}</span>
              </li>
            ))}
          </ul>
          <p className="client-note">
            Logo klien ditampilkan sebagai identitas; hak atas merek tetap milik masing-masing
            pemilik.
          </p>
        </div>
      </section>
    </>
  );
}
