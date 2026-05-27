"use client";

const values = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M11 7v4l2.5 2.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Diseñado para el día a día real",
    description:
      "Nuestras aplicaciones nacen del entendimiento de cómo trabaja cada profesional, no de suposiciones desde una oficina.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect
          x="3"
          y="3"
          width="7"
          height="7"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="12"
          y="3"
          width="7"
          height="7"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="3"
          y="12"
          width="7"
          height="7"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="12"
          y="12"
          width="7"
          height="7"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    title: "Una industria, una solución",
    description:
      "No adaptamos software genérico. Cada app está construida desde cero para una industria específica, con las funciones exactas que ese profesional necesita.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M4 11h14M11 4l7 7-7 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Sin fricción desde el primer día",
    description:
      "Interfaces pensadas para usarse sin manuales ni capacitaciones. Si sabés usar un teléfono, sabés usar nuestras apps.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M11 3l2.5 5 5.5.8-4 3.9.95 5.5L11 15.7l-4.95 2.5.95-5.5L3 8.8l5.5-.8L11 3z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Acceso total desde el primer plan",
    description:
      "Creemos que el precio no debería ser una barrera para organizarse bien. Nuestros planes son simples, claros y sin sorpresas.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M11 2C6.03 2 2 6.03 2 11s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M2 11h18M11 2c-2 2.5-3 5.5-3 9s1 6.5 3 9M11 2c2 2.5 3 5.5 3 9s-1 6.5-3 9"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    title: "Disponible en cualquier dispositivo",
    description:
      "Aplicaciones web que funcionan desde el navegador, sin instalaciones. Tablet, PC o teléfono — donde vos estés, tu negocio está.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M11 3C7 3 4 6 4 9.5c0 5 7 10.5 7 10.5s7-5.5 7-10.5C18 6 15 3 11 3z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="11"
          cy="9.5"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    title: "Desarrollado en Argentina",
    description:
      "Conocemos el contexto local, las necesidades del mercado y los desafíos de emprender en el país.",
  },
];

export default function Values() {
  return (
    <section
      id="valores"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "8rem 2rem",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "5rem" }}>
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
          Por qué GlowNest
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 400,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            color: "var(--color-text)",
            maxWidth: "500px",
          }}
        >
          Lo que nos hace{" "}
          <em style={{ fontStyle: "italic", color: "var(--color-muted)" }}>
            diferentes
          </em>
        </h2>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1px",
          background: "var(--color-border)",
          border: "1px solid var(--color-border)",
          borderRadius: "16px",
          overflow: "hidden",
        }}
        className="values-grid"
      >
        {values.map((v, i) => (
          <div
            key={i}
            style={{
              background: "var(--color-bg)",
              padding: "2rem",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background =
                "var(--color-bg-card)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background =
                "var(--color-bg)")
            }
          >
            <div
              style={{
                color: "var(--color-accent)",
                marginBottom: "1rem",
                opacity: 0.85,
              }}
            >
              {v.icon}
            </div>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 500,
                color: "var(--color-text)",
                marginBottom: "0.75rem",
                lineHeight: 1.3,
              }}
            >
              {v.title}
            </h3>
            <p
              style={{
                color: "var(--color-muted)",
                fontSize: "0.875rem",
                lineHeight: 1.7,
                fontWeight: 300,
              }}
            >
              {v.description}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .values-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 901px) and (max-width: 1100px) {
          .values-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
