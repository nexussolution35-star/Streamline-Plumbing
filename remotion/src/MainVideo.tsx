import { AbsoluteFill, staticFile } from "remotion";
import { loadFont } from "@remotion/fonts";
import {
  TransitionSeries,
  linearTiming,
  springTiming,
} from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { wipe } from "@remotion/transitions/wipe";

import { Intro } from "./scenes/Intro";
import { PhotoScene } from "./scenes/PhotoScene";
import { Outro } from "./scenes/Outro";
import { INK2 } from "./theme";

loadFont({
  family: "Barlow Semi Condensed",
  url: staticFile("fonts/barlow-semi-condensed-latin-700-normal.woff2"),
  weight: "700",
});
loadFont({
  family: "Barlow Semi Condensed",
  url: staticFile("fonts/barlow-semi-condensed-latin-600-normal.woff2"),
  weight: "600",
});
loadFont({
  family: "IBM Plex Sans",
  url: staticFile("fonts/ibm-plex-sans-latin-400-normal.woff2"),
  weight: "400",
});
loadFont({
  family: "IBM Plex Mono",
  url: staticFile("fonts/ibm-plex-mono-latin-500-normal.woff2"),
  weight: "500",
});

const SCENES = [
  {
    img: "images/1-150l-solar-geyser.jpg",
    spec: "01 / NEW INSTALLATIONS",
    title: "Geysers, solar & heat pumps",
    body: "Installed, plumbed and tested — for homes, estates and developments.",
    align: "left" as const,
    d: 105,
  },
  {
    img: "images/replacing-section-of-main-line.jpg",
    spec: "02 / REPLACEMENTS",
    title: "Main lines & burst pipes",
    body: "Corroded pipe and worn valves swapped out with guaranteed parts.",
    align: "right" as const,
    d: 95,
  },
  {
    img: "images/new-shower.jpg",
    spec: "03 / RELOCATIONS",
    title: "Bathrooms re-routed to code",
    body: "Water and drainage moved cleanly for renovations and new builds.",
    align: "left" as const,
    d: 95,
  },
  {
    img: "images/home-plumber-how-we-work-2.jpg",
    spec: "04 / MAINTENANCE",
    title: "Planned servicing & SLAs",
    body: "Small leaks caught before they become water damage.",
    align: "right" as const,
    d: 95,
  },
  {
    img: "images/img-5483.jpg",
    spec: "05 / INSURANCE CLAIMS",
    title: "Assessed, reported, repaired",
    body: "Burst geyser or storm damage — we handle the paperwork too.",
    align: "left" as const,
    d: 95,
  },
];

const INTRO = 100;
const OUTRO = 120;
const T = 20;

export const TOTAL =
  INTRO +
  SCENES.reduce((a, s) => a + s.d, 0) +
  OUTRO -
  T * (SCENES.length + 1);

export const MainVideo = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: INK2 }}>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={INTRO}>
          <Intro />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-left" })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: T })}
        />
        {SCENES.flatMap((s, i) => [
          <TransitionSeries.Sequence key={`s${i}`} durationInFrames={s.d}>
            <PhotoScene {...s} />
          </TransitionSeries.Sequence>,
          <TransitionSeries.Transition
            key={`t${i}`}
            presentation={
              i % 2 === 0
                ? wipe({ direction: "from-right" })
                : fade()
            }
            timing={
              i % 2 === 0
                ? springTiming({ config: { damping: 200 }, durationInFrames: T })
                : linearTiming({ durationInFrames: T })
            }
          />,
        ])}
        <TransitionSeries.Sequence durationInFrames={OUTRO}>
          <Outro />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
