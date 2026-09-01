import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { DISPLAY, INK2, LIME, MONO, WATER } from "../theme";

export const Intro = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const rise = spring({ frame, fps, config: { damping: 200 } });
  const zoom = interpolate(frame, [0, 100], [1.12, 1.0]);
  const lineW = interpolate(frame, [8, 40], [0, 260], {
    extrapolateRight: "clamp",
  });
  const sub = spring({ frame: frame - 14, fps, config: { damping: 200 } });

  return (
    <AbsoluteFill style={{ backgroundColor: INK2, overflow: "hidden" }}>
      <Img
        src={staticFile(
          "images/150l-kwikot-solar-geyser-with-one-flat-panel-on-pitched-roof-thermosiphon.jpg",
        )}
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
            "linear-gradient(102deg, rgba(15,21,48,.95) 0%, rgba(15,21,48,.86) 46%, rgba(20,32,80,.55) 100%)",
        }}
      />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          paddingLeft: 140,
          paddingRight: 620,
        }}
      >
        <div
          style={{
            fontFamily: MONO,
            fontSize: 24,
            letterSpacing: 6,
            color: LIME,
            opacity: rise,
            transform: `translateY(${(1 - rise) * 24}px)`,
          }}
        >
          NELSPRUIT · WHITE RIVER
        </div>
        <div
          style={{
            width: lineW,
            height: 4,
            background: WATER,
            margin: "26px 0 26px",
          }}
        />
        <div
          style={{
            fontFamily: DISPLAY,
            fontWeight: 700,
            fontSize: 132,
            lineHeight: 0.95,
            color: "#fff",
            opacity: rise,
            transform: `translateY(${(1 - rise) * 40}px)`,
          }}
        >
          We get the
          <br />
          job done<span style={{ color: LIME }}>!</span>
        </div>
        <div
          style={{
            fontFamily: MONO,
            fontSize: 26,
            letterSpacing: 3,
            color: "rgba(255,255,255,.85)",
            marginTop: 34,
            opacity: sub,
            transform: `translateY(${(1 - sub) * 20}px)`,
          }}
        >
          HONEST — PROFESSIONAL — AFFORDABLE
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
