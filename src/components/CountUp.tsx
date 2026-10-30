"use client";

import { useEffect, useState } from "react";
import { animate } from "framer-motion";

export function CountUp({
  value,
  start,
  prefix = "",
  suffix = "",
}: {
  value: number;
  start: boolean;
  prefix?: string;
  suffix?: string;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        setDisplay(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [start, value]);

  return (
    <span>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
