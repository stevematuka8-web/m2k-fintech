import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logoData = await readFile(join(process.cwd(), "public/logo-og.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#060b16",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(61,107,255,0.45) 0%, rgba(61,107,255,0) 70%)",
          }}
        />
        <img src={logoSrc} width={140} height={140} alt="" style={{ marginBottom: 32 }} />
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#f6f3ec",
            letterSpacing: "-0.02em",
          }}
        >
          M2K Fintech
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 28,
            color: "#b7bac4",
            maxWidth: 820,
            textAlign: "center",
          }}
        >
          Entreprise technologique financière internationale
        </div>
      </div>
    ),
    { ...size }
  );
}
