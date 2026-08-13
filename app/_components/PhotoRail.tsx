import Image from "next/image";

const photos = ["festival.jpg", "artist-ren.jpg", "live-band.jpg", "stage.jpg", "vinyl.jpg"];

export function PhotoRail() {
  return <section className="photoRail" aria-label="CHAPTER:0 visual archive"><div className="photoTrack">{[...photos, ...photos].map((photo, index) => <div className="railFrame" key={`${photo}-${index}`}><Image src={`/assets/${photo}`} alt="" fill sizes="32vw" /><span>0{(index % photos.length) + 1}</span></div>)}</div></section>;
}
