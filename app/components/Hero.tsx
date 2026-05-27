"use client";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "8rem 2rem 6rem",
        textAlign: "center",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
        }}
      />

      {/* Glow orb */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(163,230,53,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Pill badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          background: "var(--color-accent-dim)",
          border: "1px solid rgba(163,230,53,0.2)",
          borderRadius: "999px",
          padding: "0.35rem 1rem",
          fontSize: "0.8rem",
          color: "var(--color-accent)",
          fontWeight: 500,
          marginBottom: "2rem",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
        }}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "var(--color-accent)",
            display: "inline-block",
            animation: "pulse 2s infinite",
          }}
        />
        Software para profesionales independientes
      </div>

      {/* Headline */}
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
          fontWeight: 400,
          lineHeight: 1.1,
          letterSpacing: "-0.03em",
          color: "var(--color-text)",
          maxWidth: "900px",
          marginBottom: "1.75rem",
        }}
      >
        Herramientas digitales
        <br />
        <em style={{ color: "var(--color-accent)", fontStyle: "italic" }}>
          pensadas para tu oficio
        </em>
      </h1>

      {/* Subheadline */}
      <p
        style={{
          fontSize: "clamp(1rem, 2vw, 1.2rem)",
          color: "var(--color-muted)",
          maxWidth: "560px",
          lineHeight: 1.7,
          marginBottom: "3rem",
          fontWeight: 300,
        }}
      >
        En GlowNest desarrollamos aplicaciones web diseñadas específicamente
        para profesionales independientes. Sin complejidades innecesarias,
        sin curvas de aprendizaje. Solo lo que tu negocio necesita.
      </p>

      {/* CTAs */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <a
          href="#soluciones"
          style={{
            background: "var(--color-accent)",
            color: "#09090b",
            padding: "0.875rem 2rem",
            borderRadius: "8px",
            fontSize: "0.95rem",
            fontWeight: 500,
            textDecoration: "none",
            transition: "opacity 0.2s, transform 0.2s",
            display: "inline-block",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.opacity = "0.85";
            (e.target as HTMLElement).style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          Ver nuestras soluciones
        </a>
        <a
          href="#contacto"
          style={{
            background: "transparent",
            color: "var(--color-text)",
            padding: "0.875rem 2rem",
            borderRadius: "8px",
            fontSize: "0.95rem",
            fontWeight: 400,
            textDecoration: "none",
            border: "1px solid var(--color-border-hover)",
            transition: "border-color 0.2s, transform 0.2s",
            display: "inline-block",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.borderColor = "var(--color-muted)";
            (e.target as HTMLElement).style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.borderColor = "var(--color-border-hover)";
            (e.target as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          Contactarnos
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          color: "var(--color-muted-2)",
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
        }}
      >
        <svg
          width="20"
          height="30"
          viewBox="0 0 20 30"
          fill="none"
          style={{ animation: "scrollBounce 2s ease-in-out infinite" }}
        >
          <rect x="1" y="1" width="18" height="28" rx="9" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="10" cy="9" r="2.5" fill="currentColor" style={{ animation: "scrollDot 2s ease-in-out infinite" }} />
        </svg>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
        @keyframes scrollDot {
          0%, 100% { cy: 9; }
          50% { cy: 19; }
        }
      `}</style>
    </section>
  );
}
