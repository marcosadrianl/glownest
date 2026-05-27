"use client";

export default function Contact() {
  return (
    <section
      id="contacto"
      style={{
        background: "var(--color-bg-2)",
        borderTop: "1px solid var(--color-border)",
        padding: "8rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
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
          Contacto
        </p>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "var(--color-text)",
            marginBottom: "1.5rem",
          }}
        >
          ¿Tenés una idea o
          <br />
          <em style={{ fontStyle: "italic", color: "var(--color-muted)" }}>
            querés saber más?
          </em>
        </h2>

        <p
          style={{
            color: "var(--color-muted)",
            fontSize: "1rem",
            lineHeight: 1.7,
            fontWeight: 300,
            maxWidth: "480px",
            margin: "0 auto 3rem",
          }}
        >
          Si sos un profesional que busca digitalizarse, o querés conversar
          sobre cómo podemos ayudarte, estamos a un mail de distancia.
        </p>

        {/* Contact card */}
        <div
          style={{
            background: "var(--color-bg-card)",
            border: "1px solid var(--color-border)",
            borderRadius: "16px",
            padding: "2.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          {/* Email block */}
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                fontSize: "0.75rem",
                color: "var(--color-muted)",
                fontWeight: 400,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Escribinos a
            </p>
            <a
              href="mailto:lucas.adrmarcos@gmail.com"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.2rem, 3vw, 1.7rem)",
                color: "var(--color-text)",
                textDecoration: "none",
                letterSpacing: "-0.01em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--color-accent)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--color-text)")
              }
            >
              lucas.adrmarcos@gmail.com
            </a>
          </div>

          <div
            style={{
              width: "100%",
              height: "1px",
              background: "var(--color-border)",
            }}
          />

          {/* CTA button */}
          <a
            href="mailto:lucas.adrmarcos@gmail.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "var(--color-accent)",
              color: "#09090b",
              padding: "0.875rem 2.5rem",
              borderRadius: "8px",
              fontSize: "0.95rem",
              fontWeight: 500,
              textDecoration: "none",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "0.85";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(0)";
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 4l6 5 6-5M2 4h12v9H2V4z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Enviar un mensaje
          </a>
        </div>
      </div>
    </section>
  );
}
