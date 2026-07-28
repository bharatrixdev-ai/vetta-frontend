import { ImageResponse } from "next/og";
import { OgCard, OG_SIZE } from "@/components/OgCard";

export const alt = "Vetta — Meet the people worth meeting";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(<OgCard />, size);
}
