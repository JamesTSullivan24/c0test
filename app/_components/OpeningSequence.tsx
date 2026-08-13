"use client";

import { useEffect, useState } from "react";

export function OpeningSequence() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => setDone(true), 2800);
    return () => window.clearTimeout(timer);
  }, []);
  if (done) return null;
  return <div className="opening" aria-hidden="true"><div className="openingNoise" /><p>YOUTH CULTURE ARCHIVE</p><div className="openingMark"><span>CHAPTER</span><strong>:0</strong></div><div className="openingProgress"><i /></div><small>TOKYO / 2026</small></div>;
}
