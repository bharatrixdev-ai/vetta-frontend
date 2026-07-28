import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vetta — Meet the people worth meeting",
    short_name: "Vetta",
    description:
      "The vetted network of accomplished people. Verified track records, paid Sessions and live Roundtables.",
    start_url: "/app",
    display: "standalone",
    background_color: "#0b0b0c",
    theme_color: "#0b0b0c",
    orientation: "portrait",
    categories: ["social", "business", "education"],
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
