import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/seo";

export const runtime = "edge";
export const alt = "Kindred — The Private Circle";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(145deg, #1C2D0E 0%, #2F4218 45%, #4A6228 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            border: "80px solid rgba(197,214,156,0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            border: "50px solid rgba(197,214,156,0.05)",
          }}
        />

        {/* Top: logo + badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "14px",
              backgroundColor: "rgba(197,214,156,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1.5px solid rgba(197,214,156,0.3)",
            }}
          >
            <span style={{ fontSize: "24px" }}>🤝</span>
          </div>
          <span
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#C5D69C",
              letterSpacing: "-0.02em",
            }}
          >
            {SITE_NAME}
          </span>
          <div
            style={{
              marginLeft: "8px",
              backgroundColor: "rgba(197,214,156,0.15)",
              border: "1px solid rgba(197,214,156,0.25)",
              borderRadius: "999px",
              padding: "4px 14px",
              fontSize: "13px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.6)",
              letterSpacing: "0.04em",
            }}
          >
            iOS APP
          </div>
        </div>

        {/* Main headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            Most of us lose 80% of close friends by age 30.
          </div>
          <div
            style={{
              fontSize: "68px",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Never Forget{" "}
            <span style={{ color: "#C5D69C", fontStyle: "italic" }}>
              a Catch Up.
            </span>
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.5,
              maxWidth: "620px",
            }}
          >
            {SITE_DESCRIPTION}
          </div>
        </div>

        {/* Bottom pills */}
        <div style={{ display: "flex", gap: "12px" }}>
          {["100% Private", "Local Storage", "No Account Needed", "Free Trial"].map(
            (label) => (
              <div
                key={label}
                style={{
                  backgroundColor: "rgba(197,214,156,0.12)",
                  border: "1px solid rgba(197,214,156,0.22)",
                  borderRadius: "999px",
                  padding: "8px 20px",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#C5D69C",
                }}
              >
                {label}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
