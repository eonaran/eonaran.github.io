"use client";

import { useEffect, useRef, useState } from "react";

export function PercolationIllustration() {
  const frame = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(780);

  useEffect(() => {
    const resize = (event: MessageEvent) => {
      if (event.origin !== window.location.origin || event.source !== frame.current?.contentWindow) return;
      if (event.data?.type !== "percolation-figure-height") return;
      const nextHeight = Number(event.data.height);
      if (Number.isFinite(nextHeight) && nextHeight >= 300 && nextHeight <= 2500) {
        setHeight(Math.ceil(nextHeight));
      }
    };
    window.addEventListener("message", resize);
    return () => window.removeEventListener("message", resize);
  }, []);

  return (
    <iframe
      ref={frame}
      className="percolation-illustration"
      src="/research/constrained-percolation.html"
      title="Constrained percolation: minimum-cost paths, turn constraints and path-family entropy"
      style={{ height }}
    />
  );
}
