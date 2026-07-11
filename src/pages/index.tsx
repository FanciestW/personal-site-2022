import * as React from "react";
import type { HeadFC } from "gatsby";
import profileImage from "../images/profile_pic.jpg";

const experience = [
  {
    company: "Capital One",
    role: "Software Engineer",
    period: "2020 — Present",
    summary:
      "Building and operating enterprise platform infrastructure with reliability, automation, and compliance at its core.",
    tools: ["Go", "Python", "Terraform", "Nomad", "Consul", "Vault"],
  },
  {
    company: "SoluTech Inc.",
    role: "Co-founder · Lead Software Engineer",
    period: "2017 — 2019",
    summary:
      "Led engineering for SlideDrive, a collaborative desktop product built with Angular, Electron, WebRTC, MongoDB, and OAuth.",
    tools: ["Angular", "Electron", "WebRTC", "MongoDB"],
  },
  {
    company: "University of New Haven",
    role: "Graduate Teaching Assistant",
    period: "2019 — 2020",
    summary:
      "Led recitations and helped students build strong foundations in C, C++, Android development, and systems programming.",
    tools: ["C", "C++", "Android", "UNIX"],
  },
];

const capabilities = [
  ["Platform engineering", "Reliable infrastructure, deployment systems, and developer tooling designed for teams at scale."],
  ["Automation", "Reducing operational friction through pragmatic tooling, repeatable workflows, and clear guardrails."],
  ["Technical leadership", "Turning ambiguous problems into focused plans and helping teams deliver maintainable solutions."],
];

const IndexPage = () => (
  <main>
    <nav className="nav" aria-label="Primary navigation">
      <a className="brand" href="#top" aria-label="William Lin home">WL<span>.</span></a>
      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#about">About</a>
      </div>
      <a className="nav-cta" href="mailto:wlin26@yahoo.com">Let’s talk <span>↗</span></a>
    </nav>

    <section className="hero section" id="top">
      <div className="hero-copy reveal">
        <p className="eyebrow"><span className="status-dot" /> Software engineer · New York</p>
        <h1>I build reliable systems for <em>ambitious teams.</em></h1>
        <p className="hero-lede">
          I’m William Lin, a platform-focused software engineer who turns complex infrastructure problems into dependable tools and calm developer experiences.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">Explore my work <span>↓</span></a>
          <a className="button button-secondary" href="mailto:wlin26@yahoo.com">Email me <span>↗</span></a>
        </div>
      </div>

      <div className="hero-visual reveal">
        <div className="portrait-frame">
          <div className="portrait-grid" aria-hidden="true" />
          <img src={profileImage} alt="William Lin" />
          <div className="portrait-label"><span>Currently</span><strong>Building reliable platforms</strong></div>
        </div>
        <div className="orbit orbit-one" aria-hidden="true" />
        <div className="orbit orbit-two" aria-hidden="true" />
      </div>
    </section>

    <section className="proof" aria-label="Career highlights">
      <div><strong>10+ yrs</strong><span>Building software</span></div>
      <div><strong>Platform</strong><span>Infrastructure focus</span></div>
      <div><strong>Full stack</strong><span>Systems to interfaces</span></div>
      <div><strong>Mentor</strong><span>Teacher and teammate</span></div>
    </section>

    <section className="section capabilities" id="work">
      <div className="section-intro">
        <p className="eyebrow">Selected expertise</p>
        <h2>Engineering that makes the difficult feel routine.</h2>
        <p>I work across systems, tooling, and people to make technology more reliable and teams more effective.</p>
      </div>
      <div className="capability-grid">
        {capabilities.map(([title, body], index) => (
          <article className="capability-card" key={title}>
            <span className="card-number">0{index + 1}</span>
            <div className="card-icon" aria-hidden="true">{index === 0 ? "⌁" : index === 1 ? "✦" : "↗"}</div>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="section experience" id="experience">
      <div className="section-intro compact">
        <p className="eyebrow">Experience</p>
        <h2>A career built across layers.</h2>
      </div>
      <div className="experience-list">
        {experience.map((item, index) => (
          <article className="experience-row" key={`${item.company}-${item.role}`}>
            <span className="experience-index">0{index + 1}</span>
            <div className="experience-title"><h3>{item.company}</h3><p>{item.role}</p></div>
            <p className="experience-summary">{item.summary}</p>
            <div className="experience-meta"><span>{item.period}</span><div>{item.tools.map(tool => <small key={tool}>{tool}</small>)}</div></div>
          </article>
        ))}
      </div>
      <p className="experience-note">Earlier experience includes engineering roles and internships at MITRE, Conferdense, Abbott Jewelry Systems, and Capital One.</p>
    </section>

    <section className="section about" id="about">
      <div className="about-mark" aria-hidden="true">W</div>
      <div className="about-copy">
        <p className="eyebrow">Beyond the résumé</p>
        <h2>Curious by default.<br />Practical by design.</h2>
        <p>I enjoy the point where deep technical work meets real human needs. My best work comes from asking clear questions, making complexity visible, and building solutions people trust.</p>
        <p>Along the way, I’ve co-founded a product company, taught computer science, supported small businesses, and worked across the stack—from user interfaces to enterprise infrastructure.</p>
        <div className="social-links">
          <a href="https://github.com/FanciestW" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://linkedin.com/in/FanciestW" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>
    </section>

    <footer className="footer section">
      <p className="eyebrow">Have an interesting problem?</p>
      <h2>Let’s build something<br /><em>dependable.</em></h2>
      <a className="footer-email" href="mailto:wlin26@yahoo.com">wlin26@yahoo.com <span>↗</span></a>
      <div className="footer-bottom"><span>William Lin © {new Date().getFullYear()}</span><span>Software engineer · New York</span></div>
    </footer>
  </main>
);

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>William Lin — Software Engineer</title>
    <meta name="description" content="William Lin is a software engineer focused on reliable platforms, infrastructure, and developer tooling." />
  </>
);
