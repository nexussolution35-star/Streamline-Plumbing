import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BODY, DISPLAY, INK2, LIME, MONO, WATER } from "../theme";

export const Outro = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const zoom = interpolate(frame, [0, 120], [1.14, 1.02]);
  const logo = spring({ frame, fps, config: { damping: 18, stiffness: 140 } });
  const line1 = spring({ frame: frame - 12, fps, config: { damping: 200 } });
  const line2 = spring({ frame: frame - 26, fps, config: { damping: 200 } });
  const rule = interpolate(frame, [18, 56], [0, 520], { extrapolateRight: "clamp" });
  const float = Math.sin(frame / 22) * 5;

  return (
    <AbsoluteFill style={{ backgroundColor: INK2, overflow: "hidden" }}>
      <Img
        src={staticFile("images/bt50-bakkie1.jpg")}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: `scale(${zoom})`,
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg, rgba(15,21,48,.80) 0%, rgba(15,21,48,.93) 100%)",
        }}
      />
      <AbsoluteFill
        style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}
      >
        <div
          style={{
            transform: `scale(${logo}) translateY(${float}px)`,
            background: "#fff",
            padding: "18px 26px",
            borderRadius: 12,
            boxShadow: "0 30px 60px -20px rgba(0,0,0,.6)",
          }}
        >
          <Img src={staticFile("images/logo.jpg")} style={{ height: 96 }} />
        </div>
        <div
          style={{
            fontFamily: DISPLAY,
            fontWeight: 700,
            fontSize: 92,
            color: "#fff",
            marginTop: 42,
            opacity: line1,
            transform: `translateY(${(1 - line1) * 30}px)`,
          }}
        >
          Call <span style={{ color: LIME }}>082 900 3389</span>
        </div>
        <div style={{ width: rule, height: 4, background: WATER, margin: "26px 0" }} />
        <div
          style={{
            fontFamily: BODY,
            fontSize: 32,
            color: "rgba(255,255,255,.88)",
            opacity: line2,
            transform: `translateY(${(1 - line2) * 18}px)`,
          }}
        >
          Plumbing &amp; maintenance across the Lowveld
        </div>
        <div
          style={{
            fontFamily: MONO,
            fontSize: 22,
            letterSpacing: 4,
            color: "rgba(255,255,255,.6)",
            marginTop: 26,
            opacity: line2,
          }}
        >
          MON – FRI 8:00AM – 6:00PM
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
