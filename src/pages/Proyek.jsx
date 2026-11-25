import { useMemo, useState } from "react";
import usePageMeta from "../hooks/usePageMeta.js";
import { projectFilters, projects } from "../data/projects.js";

export default function Proyek() {
  const [activeFilter, setActiveFilter] = useState("all");

  usePageMeta(
    "Portofolio Proyek — PT. Diande Putra Mandiri",
    "Portofolio pekerjaan PT. Diande Putra Mandiri pada sektor industri, infrastruktur jalan, fasilitas kesehatan, dan ketenagalistrikan."
  );

  const visibleProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.cat === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="eyebrow">Portofolio</p>
          <h1>Pekerjaan yang telah kami tuntaskan.</h1>
          <p className="lead">
            Rekam jejak pekerjaan pada sektor industri, infrastruktur jalan, fasilitas kesehatan,
            dan ketenagalistrikan sesuai dokumentasi company profile.
          </p>
        </div>
      </section>

      <section className="section projects" id="proyek">
        <div className="container">
          <div className="filters" role="group" aria-label="Filter kategori proyek">
            {projectFilters.map((filter) => {
              const isActive = filter.value === activeFilter;
              return (
                <button
                  className={`filter${isActive ? " is-active" : ""}`}
                  key={filter.value}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(filter.value)}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          <div className="project-grid" id="project-grid">
            {visibleProjects.map((project) => (
              <article className="project" data-cat={project.cat} key={project.image}>
                <figure className="project-media">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
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
                        className={project.logo.className}
                        loading="lazy"
                      />
                    </span>
                  ) : null}
                </figure>
                <div className="project-body">
                  <div className="project-top">
                    <span className="project-cat">{project.catLabel}</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7 17 17 7M8 7h9v9" />
                    </svg>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-foot">
                    <strong>{project.client}</strong>
                    <span>{project.location}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="project-note">
            Daftar lengkap pekerjaan yang terdokumentasi dalam company profile perusahaan,
            dipisahkan menurut jenis kegiatan pada setiap klien.
          </p>
        </div>
      </section>
    </>
  );
}
