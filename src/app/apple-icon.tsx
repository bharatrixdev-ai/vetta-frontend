import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #16171c 0%, #0b0b0c 100%)",
        }}
      >
        <svg viewBox="0 0 48 48" width="112" height="112">
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
      </div>
    ),
    size
  );
}
