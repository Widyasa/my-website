import { ImageResponse } from "next/og"

export const alt = "Widya Yasa — Full-stack developer & Game Developer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 80,
          background: "#0a0a0c",
        }}
      >
        <p
          style={{
            fontSize: 28,
            color: "#6366f1",
            fontFamily: "monospace",
            marginBottom: 24,
          }}
        >
          Portfolio
        </p>
        <h1
          style={{
            fontSize: 96,
            fontWeight: 700,
            color: "#fafafa",
            letterSpacing: "-0.03em",
            lineHeight: 1,
            marginBottom: 32,
          }}
        >
          Widya Yasa
        </h1>
        <p
          style={{
            fontSize: 36,
            color: "#a1a1aa",
            maxWidth: 720,
            lineHeight: 1.4,
          }}
        >
          Full-stack developer & Game Developer
        </p>
      </div>
    ),
    {
      ...size,
    }
  )
}
