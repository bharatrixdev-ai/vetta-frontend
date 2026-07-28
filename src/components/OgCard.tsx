/** Shared social-share card, rendered by next/og for both OG and Twitter. */

export const OG_SIZE = { width: 1200, height: 630 };

export function OgCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0b0b0c",
        padding: "64px 72px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -260,
          left: 260,
          width: 760,
          height: 620,
          borderRadius: 9999,
          background:
            "radial-gradient(circle at 40% 40%, rgba(79,141,255,0.55), rgba(79,141,255,0) 62%)",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: -180,
          right: -120,
          width: 620,
          height: 560,
          borderRadius: 9999,
          background:
            "radial-gradient(circle at 50% 50%, rgba(124,111,255,0.45), rgba(124,111,255,0) 62%)",
          display: "flex",
        }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <svg viewBox="0 0 48 48" width="60" height="60">
          <defs>
            <linearGradient id="l" x1="10" y1="10" x2="26" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#63A0FF" />
              <stop offset="1" stopColor="#3E6FE8" />
            </linearGradient>
            <linearGradient id="r" x1="38" y1="10" x2="24" y2="42" gradientUnits="userSpaceOnUse">
              <stop stopColor="#CFC7FF" />
              <stop offset="1" stopColor="#6E5BF0" />
            </linearGradient>
          </defs>
          <path
            d="M10.2 11.4c-1.5-.9-3.3.3-3 2l.8 4.7c.2 1.3 1 2.5 2.1 3.2l13.2 14.9-9.5-22.4a4.9 4.9 0 0 0-3.6-2.4Z"
            fill="url(#l)"
          />
          <path d="M9 10.8 23.3 36.2 20 20.5c-.3-1.4-1.2-2.6-2.5-3.3L9 10.8Z" fill="url(#l)" />
          <path
            d="M39.8 10.6c1.6-.8 3.4.5 3 2.2l-3.2 14.7a7.6 7.6 0 0 1-2.6 4.2l-8.6 7.2c-1.7 1.4-4.2 0-4-2.2l1.9-16.5c.2-1.6 1.1-3 2.5-3.8l11-5.8Z"
            fill="url(#r)"
          />
        </svg>
        <div style={{ fontSize: 40, fontWeight: 600, color: "#f4f5f7", letterSpacing: 3 }}>
          vetta
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 82,
            fontWeight: 600,
            color: "#f4f5f7",
            letterSpacing: -2.5,
            lineHeight: 1.06,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Meet the people</span>
          <span style={{ color: "#a9bdff" }}>worth meeting.</span>
        </div>
        <div
          style={{
            marginTop: 26,
            fontSize: 27,
            color: "#9aa0ac",
            maxWidth: 780,
            lineHeight: 1.4,
          }}
        >
          The vetted network of accomplished people — verified track records, paid Sessions
          and live Roundtables.
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        {["Verified profiles", "Sessions", "Roundtables", "Earned, not claimed"].map((t) => (
          <div
            key={t}
            style={{
              display: "flex",
              fontSize: 21,
              color: "#c8ccd4",
              padding: "11px 22px",
              borderRadius: 9999,
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.05)",
            }}
          >
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}
