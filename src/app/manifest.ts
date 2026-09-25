import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest { return { name: "Sela", short_name: "Sela", description: "Berhenti sejenak. Kembali kepada Tuhan.", start_url: "/", display: "standalone", background_color: "#f6f4ee", theme_color: "#2b3f5f", lang: "id" }; }
