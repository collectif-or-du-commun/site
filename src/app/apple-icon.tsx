import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 36,
          background: "#0A3F52",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            color: "#FFCA00",
            fontSize: 110,
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
