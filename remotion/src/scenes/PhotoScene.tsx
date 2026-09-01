import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BODY, DISPLAY, INK2, LIME, MONO } from "../theme";

export const PhotoScene: React.FC<{
  img: string;
  spec: string;
  title: string;
  body: string;
  align: "left" | "right";
}> = ({ img, spec, title, body, align }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const zoom = interpolate(frame, [0, durationInFrames], [1.05, 1.14]);
  const drift = interpolate(frame, [0, durationInFrames], [0, align === "left" ? -22 : 22]);

  const inSpec = spring({ frame: frame - 4, fps, config: { damping: 200 } });
  const inTitle = spring({ frame: frame - 12, fps, config: { damping: 22, stiffness: 120 } });
  const inBody = spring({ frame: frame - 24, fps, config: { damping: 200 } });
  const bar = interpolate(frame, [10, 45], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: INK2, overflow: "hidden" }}>
      <Img
        src={staticFile(img)}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: `scale(${zoom}) translateX(${drift}px)`,
        }}
      />
      <AbsoluteFill
        style={{
          background:
            align === "left"
              ? "linear-gradient(90deg, rgba(15,21,48,.93) 0%, rgba(15,21,48,.72) 42%, rgba(15,21,48,.12) 100%)"
              : "linear-gradient(270deg, rgba(15,21,48,.93) 0%, rgba(15,21,48,.72) 42%, rgba(15,21,48,.12) 100%)",
        }}
      />
      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: align === "left" ? "flex-start" : "flex-end",
          padding: "0 130px 120px",
          textAlign: align,
        }}
      >
        <div
          style={{
            fontFamily: MONO,
            fontSize: 22,
            letterSpacing: 5,
            color: LIME,
            opacity: inSpec,
            transform: `translateY(${(1 - inSpec) * 18}px)`,
          }}
        >
          {spec}
        </div>
        <div
          style={{
            width: 200 * bar,
            height: 4,
            background: "#2BA9E0",
            margin: "20px 0",
          }}
        />
        <div
          style={{
            fontFamily: DISPLAY,
            fontWeight: 700,
            fontSize: 90,
            lineHeight: 1,
            color: "#fff",
            maxWidth: 1050,
            opacity: inTitle,
            transform: `translateY(${(1 - inTitle) * 46}px)`,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontFamily: BODY,
            fontSize: 30,
            lineHeight: 1.5,
            color: "rgba(255,255,255,.86)",
            maxWidth: 720,
            marginTop: 22,
            opacity: inBody,
            transform: `translateY(${(1 - inBody) * 18}px)`,
          }}
        >
          {body}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
