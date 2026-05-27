"use client";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="1" y="1" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.3" />
        <path d="M5 7v6M5 5v.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M9 13v-3c0-1 .5-2 2-2s2 1 2 2v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="5" cy="5" r=".5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="1" y="1" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="13.2" cy="4.8" r=".8" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M3 3h4l8 12h-4L3 3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.3" />
        <path d="M11.5 6H10a1 1 0 00-1 1v1.5h2.5L11 11H9v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const appLinks = [
  { label: "Barbify", href: "https://barbify.glownest.app" },
  { label: "NailyFy", href: "#soluciones" },
  { label: "Odonto", href: "#soluciones" },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border)",
        padding: "4rem 2rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "4rem",
            marginBottom: "4rem",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <a
              href="#"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.75rem",
                color: "var(--color-text)",
                textDecoration: "none",
                letterSpacing: "-0.02em",
                display: "inline-block",
                marginBottom: "1rem",
              }}
            >
              Glow<span style={{ color: "var(--color-accent)" }}>Nest</span>
            </a>
            <p
              style={{
                color: "var(--color-muted)",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                fontWeight: 300,
                maxWidth: "320px",
              }}
            >
              Software diseñado para profesionales independientes. Simple, claro
              y enfocado en lo que importa: tu negocio.
            </p>

            {/* Social links */}
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                marginTop: "1.5rem",
              }}
            >
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    color: "var(--color-muted-2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    border: "1px solid var(--color-border)",
                    transition: "color 0.2s, border-color 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--color-text)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border-hover)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--color-muted-2)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Apps */}
          <div>
            <p
              style={{
                fontSize: "0.75rem",
                color: "var(--color-muted)",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Soluciones
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {appLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    style={{
                      color: "var(--color-muted)",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      fontWeight: 300,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "var(--color-text)")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "var(--color-muted)")
                    }
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p
              style={{
                fontSize: "0.75rem",
                color: "var(--color-muted)",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Empresa
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {["#nosotros", "#valores", "#contacto"].map((href, i) => {
                const labels = ["Nosotros", "Por qué GlowNest", "Contacto"];
                return (
                  <li key={href}>
                    <a
                      href={href}
                      style={{
                        color: "var(--color-muted)",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        fontWeight: 300,
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "var(--color-text)")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color = "var(--color-muted)")
                      }
                    >
                      {labels[i]}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--color-border)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              color: "var(--color-muted-2)",
              fontSize: "0.8rem",
              fontWeight: 300,
            }}
          >
            © {new Date().getFullYear()} GlowNest. Todos los derechos reservados.
          </p>
          <p
            style={{
              color: "var(--color-muted-2)",
              fontSize: "0.8rem",
              fontWeight: 300,
            }}
          >
            Desarrollado en Argentina 🇦🇷
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
