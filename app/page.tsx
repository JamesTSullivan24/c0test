import Image from "next/image";
import { OpeningSequence } from "./_components/OpeningSequence";
import { PhotoRail } from "./_components/PhotoRail";

const stories = [
  { image: "/assets/festival.jpg", tag: "REPORT", date: "08.13.2026", title: "熱狂の中心で見つけた、まだ名前のない景色。", featured: true },
  { image: "/assets/artist-ren.jpg", tag: "INTERVIEW", date: "08.10.2026", title: "自分の声で、自分の時代を歌う。" },
  { image: "/assets/live-band.jpg", tag: "MUSIC", date: "08.06.2026", title: "ライブハウスから始まる、新しいチャプター。" },
  { image: "/assets/stage.jpg", tag: "SCENE", date: "07.28.2026", title: "光と音、その一瞬を記録する。" },
  { image: "/assets/vinyl.jpg", tag: "CULTURE", date: "07.20.2026", title: "手触りのある音楽が、また新しい。" },
];

export default function Home() {
  return (
    <>
      <OpeningSequence />
      <header className="siteHeader">
        <a className="logo" href="#top">CHAPTER:0</a>
        <nav aria-label="メインナビゲーション">
          <a href="#stories">STORIES</a><a href="#about">ABOUT</a><a href="https://github.com/JamesTSullivan24/c0test">GITHUB</a>
        </nav>
      </header>
      <main>
        <section className="hero" id="top">
          <video autoPlay muted loop playsInline poster="/assets/chapter0-hero.png"><source src="/assets/chapter0-hero.mp4" type="video/mp4" /></video>
          <div className="heroShade" />
          <div className="heroCopy"><p className="eyebrow">YOUTH CULTURE ARCHIVE / TOKYO</p><h1>NOW<br />IS OURS.</h1><p className="lead">若者の今を、記録する。<br />まだ名前のないカルチャーの、その瞬間へ。</p></div>
          <a className="scroll" href="#stories">SCROLL <span>↓</span></a>
        </section>
        <div className="ticker"><span>CHAPTER:0 — MUSIC / ART / FASHION / PEOPLE / CITY — DOCUMENTING THE NEXT GENERATION —&nbsp;&nbsp;&nbsp;</span></div>
        <PhotoRail />
        <section className="stories" id="stories">
          <div className="sectionHead"><h2>LATEST<br />STORIES</h2><p>ISSUE 000 / 2026</p></div>
          <div className="storyGrid">
            {stories.map((story) => (
              <article className={story.featured ? "featured" : ""} key={story.title}>
                <div className="imageWrap"><Image src={story.image} alt="" fill sizes={story.featured ? "(max-width: 760px) 100vw, 58vw" : "(max-width: 760px) 100vw, 34vw"} /></div>
                <div className="meta"><span>{story.tag}</span><time>{story.date}</time></div><h3>{story.title}</h3>
              </article>
            ))}
          </div>
        </section>
        <section className="manifesto" id="about"><p className="eyebrow">ABOUT CHAPTER:0</p><p className="statement">完成された物語より、<strong>始まる直前</strong>の衝動を。私たちは、次の時代の第0章を記録する。</p></section>
      </main>
      <footer><span>CHAPTER:0<br />YOUTH CULTURE ARCHIVE</span><span>PROTOTYPE © 2026<br />TOKYO, JAPAN</span></footer>
    </>
  );
}
