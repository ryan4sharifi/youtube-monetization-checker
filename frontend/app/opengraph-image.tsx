import { ImageResponse } from "next/og";

export const alt = "IsMonetized YouTube Monetization Checker";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f8fafc",
          color: "#0f172a",
          padding: "72px 80px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 14,
              background: "#dc2626",
              color: "#ffffff",
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            IM
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700 }}>
            IsMonetized
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
          <div style={{ display: "flex", fontSize: 68, lineHeight: 1.08, fontWeight: 800 }}>
            YouTube Monetization Checker
          </div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 29, lineHeight: 1.35, color: "#475569" }}>
            Check if a channel is likely monetized using public subscribers, views, uploads, and activity signals.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24, color: "#475569" }}>
          <span style={{ color: "#16a34a" }}>Free estimate</span>
          <span>•</span>
          <span>No YouTube login required</span>
          <span>•</span>
          <span>Transparent methodology</span>
        </div>
      </div>
    ),
    size
  );
}
