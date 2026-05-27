"use client";

const apps = [
  {
    name: "Odonto",
    category: "Salud odontológica",
    description:
      "Una plataforma integral para que los profesionales de la salud dental gestionen pacientes, turnos, historiales clínicos y tratamientos desde un solo lugar.",
    features: [
      "Historial clínico digital",
      "Gestión de turnos",
      "Seguimiento de tratamientos",
      "Reportes y estadísticas",
    ],
    status: "Disponible",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 4C10 4 7 7 7 10.5c0 2 .5 3.5 1.5 5L11 22h6l2.5-6.5C20.5 14 21 12.5 21 10.5 21 7 18 4 14 4z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M11 22c0 1.5.9 2 3 2s3-.5 3-2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M14 4v4M14 8c-1.5 0-3 1-3 2.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    accentColor: "#60a5fa",
    accentDim: "rgba(96,165,250,0.1)",
    url: null,
  },
  {
    name: "NailyFy",
    category: "Manicuras",
    description:
      "Una herramienta diseñada para profesionales de la estética que necesitan organizar su agenda, registrar trabajos realizados y fidelizar a sus clientas.",
    features: [
      "Agenda de turnos",
      "Portfolio de trabajos",
      "Seguimiento de clientas",
      "Control de ingresos",
    ],
    status: "Disponible",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M10 22V14c0-2.2 1.8-4 4-4s4 1.8 4 4v8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M7 22h14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <ellipse
          cx="14"
          cy="8"
          rx="3"
          ry="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M11 10c-2 1-3 3-3 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    accentColor: "#f472b6",
    accentDim: "rgba(244,114,182,0.1)",
    url: null,
  },
  {
    name: "Barbify",
    category: "Peluqueros y barberos",
    description:
      "La forma moderna de gestionar tu peluquería. Reemplaza libretas, desorden y cálculos mentales por una plataforma clara, visual y pensada para peluqueros y barberos reales.",
    features: [
      "Gestión de clientes",
      "Agenda avanzada",
      "Control de empleados",
      "Estadísticas en tiempo real",
    ],
    status: "Nuevo",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M8 6l4 8-4 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 6l-4 8 4 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 14h12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="8" cy="22" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="22" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    accentColor: "var(--color-accent)",
    accentDim: "var(--color-accent-dim)",
    url: "https://barbify.glownest.app",
  },
];

export default function Solutions() {
  return (
    <section
      id="soluciones"
      style={{
        background: "var(--color-bg-2)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        padding: "8rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <p
            style={{
              fontSize: "0.75rem",
              color: "var(--color-accent)",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            Nuestras soluciones
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: "var(--color-text)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Una app para cada industria,
            <em style={{ fontStyle: "italic", color: "var(--color-muted)" }}>
              {" "}
              ninguna igual a la otra
            </em>
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="apps-grid"
        >
          {apps.map((app) => (
            <div
              key={app.name}
              style={{
                background: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "16px",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.2s, transform 0.2s",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--color-border-hover)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--color-border)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              {/* Subtle top gradient */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "100px",
                  background: `linear-gradient(to bottom, ${app.accentDim}, transparent)`,
                  borderRadius: "16px 16px 0 0",
                  pointerEvents: "none",
                }}
              />

              {/* Icon + status */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1.5rem",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    color: app.accentColor,
                    background: app.accentDim,
                    padding: "0.75rem",
                    borderRadius: "10px",
                  }}
                >
                  {app.icon}
                </div>
                <span
                  style={{
                    fontSize: "0.7rem",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "999px",
                    background:
                      app.status === "Nuevo"
                        ? "var(--color-accent-dim)"
                        : "rgba(255,255,255,0.05)",
                    color:
                      app.status === "Nuevo"
                        ? "var(--color-accent)"
                        : "var(--color-muted)",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                  }}
                >
                  {app.status}
                </span>
              </div>

              {/* Name + category */}
              <p
                style={{
                  fontSize: "0.7rem",
                  color: "var(--color-muted)",
                  fontWeight: 400,
                  letterSpacing: "0.05em",
                  marginBottom: "0.4rem",
                  textTransform: "uppercase",
                }}
              >
                {app.category}
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.8rem",
                  fontWeight: 400,
                  color: "var(--color-text)",
                  marginBottom: "1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {app.name}
              </h3>

              <p
                style={{
                  color: "var(--color-muted)",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  fontWeight: 300,
                  marginBottom: "1.5rem",
                  flex: 1,
                }}
              >
                {app.description}
              </p>

              {/* Features */}
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  marginBottom: "1.75rem",
                }}
              >
                {app.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      fontSize: "0.85rem",
                      color: "var(--color-muted)",
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      style={{ flexShrink: 0 }}
                    >
                      <circle
                        cx="7"
                        cy="7"
                        r="6"
                        stroke={app.accentColor}
                        strokeWidth="1"
                        opacity="0.4"
                      />
                      <path
                        d="M4.5 7l2 2 3-3"
                        stroke={app.accentColor}
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {app.url ? (
                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    background: "var(--color-accent)",
                    color: "#09090b",
                    padding: "0.75rem",
                    borderRadius: "8px",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.opacity = "0.85")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.opacity = "1")
                  }
                >
                  Visitar Barbify
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M3 11L11 3M11 3H6M11 3v5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              ) : (
                <a
                  href="#contacto"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    background: "transparent",
                    color: "var(--color-muted)",
                    padding: "0.75rem",
                    borderRadius: "8px",
                    fontSize: "0.9rem",
                    fontWeight: 400,
                    textDecoration: "none",
                    border: "1px solid var(--color-border)",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "var(--color-border-hover)";
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--color-text)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "var(--color-border)";
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--color-muted)";
                  }}
                >
                  Consultar disponibilidad
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .apps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
