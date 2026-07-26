import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#162B38",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontFamily: "serif",
            color: "#B8834A",
            letterSpacing: "-0.025em",
            marginBottom: 12,
          }}
        >
          Jakub Digital
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#7C8D99",
            fontFamily: "sans-serif",
          }}
        >
          Digitální servis pro profesionály
        </div>
      </div>
    ),
    { ...size },
  );
}
