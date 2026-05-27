"use client";

const stats = [
  { value: "3", label: "Aplicaciones en producción" },
  { value: "100%", label: "Enfoque en el profesional independiente" },
  { value: "Web", label: "Sin instalaciones, desde cualquier dispositivo" },
];

export default function About() {
  return (
    <section
      id="nosotros"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "8rem 2rem",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* Left column */}
        <div>
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
            Quiénes somos
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: "var(--color-text)",
              marginBottom: "1.75rem",
            }}
          >
            Tecnología que entiende
            <br />
            <em style={{ fontStyle: "italic", color: "var(--color-muted)" }}>
              el oficio de cada uno
            </em>
          </h2>
          <p
            style={{
              color: "var(--color-muted)",
              lineHeight: 1.8,
              marginBottom: "1.5rem",
              fontWeight: 300,
              fontSize: "1rem",
            }}
          >
            GlowNest nació de una premisa simple: los profesionales
            independientes merecen herramientas digitales diseñadas para su
            realidad, no adaptaciones de software empresarial que no se ajustan
            a su día a día.
          </p>
          <p
            style={{
              color: "var(--color-muted)",
              lineHeight: 1.8,
              fontWeight: 300,
              fontSize: "1rem",
            }}
          >
            Desarrollamos aplicaciones web verticales — una industria, una
            solución. Cada producto nace del entendimiento profundo de cómo
            trabaja ese profesional: sus clientes, su agenda, sus ingresos y sus
            necesidades únicas.
          </p>
        </div>

        {/* Right column — stats */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1px",
            background: "var(--color-border)",
            border: "1px solid var(--color-border)",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                background: "var(--color-bg-card)",
                padding: "2rem 2.5rem",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "var(--color-bg-2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "var(--color-bg-card)";
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2.5rem",
                  color: "var(--color-accent)",
                  fontWeight: 400,
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  color: "var(--color-muted)",
                  fontSize: "0.9rem",
                  fontWeight: 300,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
