import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "#0A3F52",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            color: "#FFCA00",
            fontSize: 18,
            fontWeight: 900,
            fontFamily: "serif",
            lineHeight: 1,
          }}
        >
          O
        </div>
      </div>
    ),
    { ...size }
  );
}
