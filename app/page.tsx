const journalPapers = [
  {
    year: "2026",
    title: "Ising disks: topology preserving Glauber dynamics",
    authors: "Yuliy Baryshnikov and Efe Onaran",
    venue: "Journal of Applied and Computational Topology 10(3), Paper 16",
    links: [
      ["Journal", "https://doi.org/10.1007/s41468-026-00248-w"],
      ["arXiv", "https://arxiv.org/abs/2410.22611"],
    ],
    featured: true,
  },
  {
    year: "2026",
    title: "Central limit theorems for local functionals of dynamic point processes",
    authors: "Efe Onaran, Omer Bobrowski, and Robert J. Adler",
    venue: "Electronic Journal of Probability 31, 1–31",
    links: [
      ["Journal", "https://doi.org/10.1214/26-EJP1496"],
      ["arXiv", "https://arxiv.org/abs/2310.17775"],
    ],
    featured: true,
  },
  {
    year: "2023",
    title:
      "Functional central limit theorems for local statistics of spatial birth–death processes in the thermodynamic regime",
    authors: "Efe Onaran, Omer Bobrowski, and Robert J. Adler",
    venue: "The Annals of Applied Probability 33(5), 3958–3986",
    links: [
      ["Journal", "https://doi.org/10.1214/22-AAP1912"],
      ["arXiv", "https://arxiv.org/abs/2202.02766"],
    ],
    featured: true,
  },
  {
    year: "2022",
    title: "Shuffled linear regression through graduated convex relaxation",
    authors: "Efe Onaran and Soledad Villar",
    venue: "Preprint",
    links: [["arXiv", "https://arxiv.org/abs/2209.15608"]],
  },
  {
    year: "2017",
    title: "Gbps user rates using mmWave relayed backhaul with high-gain antennas",
    authors:
      "Jinfeng Du, Efe Onaran, Dmitry Chizhik, Sivarama Venkatesan, and Reinaldo A. Valenzuela",
    venue: "IEEE Journal on Selected Areas in Communications 35(6), 1363–1372",
    links: [["Journal", "https://ieeexplore.ieee.org/abstract/document/7887654/"]],
  },
  {
    year: "2012",
    title: "Silicon–Germanium multi-quantum well photodetectors in the near infrared",
    authors:
      "Efe Onaran, M. Cengiz Onbasli, Alper Yesilyurt, Hyun Yong Yu, Ammar M. Nayfeh, and Ali K. Okyay",
    venue: "Optics Express 20(7), 7608–7615",
    links: [["Journal", "https://opg.optica.org/abstract.cfm?uri=oe-20-7-7608"]],
  },
] as const;

const conferencePapers = [
  {
    year: "2020",
    title: "Efficient belief propagation for graph matching",
    authors: "Efe Onaran and Soledad Villar",
    venue: "IEEE ICASSP, 9060–9064",
    href: "https://ieeexplore.ieee.org/abstract/document/9053147",
  },
  {
    year: "2017",
    title: "Projected power iteration for network alignment",
    authors: "Efe Onaran and Soledad Villar",
    venue: "Wavelets and Sparsity XVII, SPIE 10394",
    href:
      "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/10394/103941C/Projected-power-iteration-for-network-alignment/10.1117/12.2275366.full",
  },
  {
    year: "2016",
    title: "Optimal de-anonymization in random graphs with community structure",
    authors: "Efe Onaran, Siddharth Garg, and Elza Erkip",
    venue: "50th Asilomar Conference, 709–713",
    href: "https://ieeexplore.ieee.org/abstract/document/7869137/",
  },
  {
    year: "2013",
    title: "Broadcast erasure channel with feedback: The two multicast case—algorithms and bounds",
    authors: "Efe Onaran, Marios Gatzianas, and Christina Fragouli",
    venue: "International Symposium on Network Coding, 1–6",
    href: "https://ieeexplore.ieee.org/abstract/document/6570818/",
  },
] as const;

const talks = [
  ["2024", "Penn / Temple Probability Seminar", "Philadelphia, PA"],
  ["2024", "Bernoulli–IMS 11th World Congress in Probability and Statistics", "Bochum, Germany"],
  ["2024", "CRM–PIMS Summer School in Probability", "Montréal, Canada"],
  ["2024", "Koç University Mathematics Seminar", "Online"],
  ["2023", "UIUC Probability Seminar", "Urbana–Champaign, IL"],
  ["2022", "Random Structures and Algorithms", "Gniezno, Poland"],
] as const;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Efe Onaran — home">
          <span className="brand-mark" aria-hidden="true">EO</span>
          <span>Efe Onaran</span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#teaching">Teaching</a>
          <a href="#talks">Talks</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cv" href="/efe-onaran-cv.pdf" target="_blank" rel="noreferrer">
          CV <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-graph" aria-hidden="true">
            <i className="node node-a" />
            <i className="node node-b" />
            <i className="node node-c" />
            <i className="node node-d" />
          </div>
          <div className="hero-copy">
            <p className="eyebrow"><span /> Probability · Geometry · Topology</p>
            <h1>I study structure<br />in <em>randomness.</em></h1>
            <p className="hero-intro">
              I am a probabilist working on stochastic processes, random geometric graphs,
              and stochastic topology—especially the geometry and topology of systems that
              evolve in time.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#research">Explore my research <span aria-hidden="true">↓</span></a>
              <a className="button button-secondary" href="/efe-onaran-cv.pdf" target="_blank" rel="noreferrer">Download CV <span aria-hidden="true">↗</span></a>
            </div>
            <div className="availability" role="note">
              <span className="pulse" aria-hidden="true" />
              Seeking tenure-track faculty opportunities
            </div>
          </div>

          <aside className="profile-card" aria-label="Current academic positions">
            <div className="portrait-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/efe-onaran.jpg" alt="Efe Onaran" />
              <span className="portrait-index" aria-hidden="true">01</span>
            </div>
            <div className="profile-details">
              <p className="profile-name">Efe Onaran</p>
              <p>Visiting Scholar · Mathematics</p>
              <p>Postdoctoral Researcher · ESE</p>
              <p className="institution">University of Pennsylvania</p>
            </div>
          </aside>
        </section>

        <section className="intro-strip" aria-label="Academic summary">
          <p><strong>Based in</strong><span>Philadelphia, PA</span></p>
          <p><strong>PhD</strong><span>New York University</span></p>
          <p><strong>Current focus</strong><span>Dynamic random systems</span></p>
          <a href="https://scholar.google.com/citations?hl=en&oi=ao&user=Y-3aeCUAAAAJ" target="_blank" rel="noreferrer">
            Google Scholar <span aria-hidden="true">↗</span>
          </a>
        </section>

        <section className="section research-section" id="research">
          <div className="section-heading">
            <p className="section-number">01 / Research</p>
            <h2>Probability at the meeting point of <em>space, time, and shape.</em></h2>
          </div>
          <div className="research-layout">
            <div className="research-statement">
              <p className="lead">
                My work asks how local random interactions produce global geometric and
                topological behavior.
              </p>
              <p>
                I develop limit theorems and probabilistic tools for spatial systems that
                change over time, with an emphasis on questions where geometry carries
                essential information. Earlier in my career, I studied statistical and
                algorithmic limits for recovering structured signals, particularly
                permutation data.
              </p>
              <a className="text-link" href="mailto:eonaran@seas.upenn.edu?subject=Research%20conversation">
                Start a research conversation <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="research-themes">
              <article>
                <span className="theme-index">A</span>
                <div><h3>Dynamic spatial processes</h3><p>Limit theorems for local statistics of evolving point processes and spatial birth–death systems.</p></div>
              </article>
              <article>
                <span className="theme-index">B</span>
                <div><h3>Stochastic topology</h3><p>Topology-preserving dynamics, random complexes, and the qualitative shape of noisy systems.</p></div>
              </article>
              <article>
                <span className="theme-index">C</span>
                <div><h3>Random geometric structures</h3><p>Probabilistic behavior of graphs and geometric objects built from random spatial data.</p></div>
              </article>
              <article>
                <span className="theme-index">D</span>
                <div><h3>Structured inference</h3><p>Statistical limits and algorithms for graph alignment, shuffled regression, and permutation data.</p></div>
              </article>
            </div>
          </div>
        </section>

        <section className="section publications-section" id="publications">
          <div className="section-heading publications-heading">
            <div>
              <p className="section-number">02 / Publications</p>
              <h2>Selected &amp; recent work</h2>
            </div>
            <a className="text-link" href="https://scholar.google.com/citations?hl=en&oi=ao&user=Y-3aeCUAAAAJ" target="_blank" rel="noreferrer">
              Full profile on Google Scholar <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="paper-list">
            {journalPapers.map((paper) => (
              <article className={`paper ${paper.featured ? "paper-featured" : ""}`} key={paper.title}>
                <div className="paper-year">
                  <span>{paper.year}</span>
                  {paper.featured ? <small>Featured</small> : null}
                </div>
                <div className="paper-body">
                  <h3>{paper.title}</h3>
                  <p>{paper.authors}</p>
                  <p className="paper-venue">{paper.venue}</p>
                </div>
                <div className="paper-links" aria-label={`Links for ${paper.title}`}>
                  {paper.links.map(([label, href]) => (
                    <a href={href} key={label} target="_blank" rel="noreferrer">{label} <span aria-hidden="true">↗</span></a>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <details className="conference-list">
            <summary>Conference publications <span>04</span></summary>
            <div>
              {conferencePapers.map((paper) => (
                <a href={paper.href} key={paper.title} target="_blank" rel="noreferrer">
                  <span>{paper.year}</span>
                  <span><strong>{paper.title}</strong><small>{paper.authors} · {paper.venue}</small></span>
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </details>
        </section>

        <section className="section teaching-section" id="teaching">
          <div className="section-heading">
            <p className="section-number">03 / Teaching</p>
            <h2>Teaching across probability, control, and applied mathematics.</h2>
          </div>
          <div className="teaching-grid">
            <article className="teaching-card teaching-current">
              <p className="teaching-role">Instructor · University of Pennsylvania</p>
              <h3>Mathematics of Change, Part II</h3>
              <p>MATH 1080 · Fall 2025</p>
              <span className="card-mark" aria-hidden="true">Δ</span>
            </article>
            <article className="teaching-card">
              <p className="teaching-role">Co-Instructor · University of Pennsylvania</p>
              <h3>Advanced Applied Probability</h3>
              <p>MATH 5460 · Spring 2025 · with Robin Pemantle</p>
              <span className="card-mark" aria-hidden="true">P</span>
            </article>
            <article className="teaching-card">
              <p className="teaching-role">Co-Instructor · University of Pennsylvania</p>
              <h3>Mathematics of Change, Part II</h3>
              <p>MATH 1080 · Fall 2024 · with Robin Pemantle</p>
              <span className="card-mark" aria-hidden="true">∂</span>
            </article>
            <article className="teaching-card">
              <p className="teaching-role">Instructor · University of Illinois</p>
              <h3>Optimum Control Systems</h3>
              <p>ECE 553 / MATH 595 · Spring 2024</p>
              <span className="card-mark" aria-hidden="true">u</span>
            </article>
          </div>
          <p className="teaching-note">
            Previous teaching at NYU includes probability, statistics, signal processing,
            optimization, machine learning, and mathematical tools for data science.
          </p>
        </section>

        <section className="section talks-section" id="talks">
          <div className="section-heading talks-heading">
            <div>
              <p className="section-number">04 / Talks</p>
              <h2>Selected talks</h2>
            </div>
            <a className="text-link" href="https://sites.google.com/view/efeonaran/videos-etc" target="_blank" rel="noreferrer">
              Videos &amp; media <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="talk-list">
            {talks.map(([year, event, place]) => (
              <div className="talk" key={`${year}-${event}`}>
                <span>{year}</span><strong>{event}</strong><span>{place}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="education-band" aria-labelledby="education-title">
          <p className="section-number">05 / Education &amp; appointments</p>
          <div className="education-grid">
            <div><h2 id="education-title">Academic path</h2><p>Across engineering, probability, and mathematics.</p></div>
            <ol>
              <li><span>Current</span><strong>University of Pennsylvania</strong><small>Visiting Scholar, Mathematics · Postdoctoral Researcher, ESE</small></li>
              <li><span>2023–24</span><strong>University of Illinois Urbana–Champaign</strong><small>Postdoctoral Research Associate · hosted by Yuliy Baryshnikov</small></li>
              <li><span>2020–23</span><strong>Technion – Israel Institute of Technology</strong><small>Postdoctoral Fellow · hosted by Omer Bobrowski and Robert J. Adler</small></li>
              <li><span>PhD</span><strong>New York University</strong><small>Electrical Engineering</small></li>
              <li><span>MS</span><strong>Princeton University</strong><small>Electrical Engineering</small></li>
              <li><span>BS</span><strong>Bilkent University</strong><small>Electrical Engineering</small></li>
            </ol>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy">
            <p className="section-number">06 / Contact</p>
            <h2>Let’s talk about mathematics, teaching, or a faculty opportunity.</h2>
            <a className="contact-email" href="mailto:eonaran@seas.upenn.edu">eonaran@seas.upenn.edu <span aria-hidden="true">→</span></a>
          </div>
          <address>
            <p><strong>Office</strong><span>David Rittenhouse Laboratory 4N40<br />209 South 33rd Street<br />Philadelphia, PA 19104</span></p>
            <p><strong>Elsewhere</strong><span><a href="https://scholar.google.com/citations?hl=en&oi=ao&user=Y-3aeCUAAAAJ" target="_blank" rel="noreferrer">Google Scholar ↗</a><a href="/efe-onaran-cv.pdf" target="_blank" rel="noreferrer">Curriculum vitae ↗</a><a href="mailto:efeonaran@gmail.com">Personal email ↗</a></span></p>
          </address>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark" aria-hidden="true">EO</span><span>Efe Onaran</span></a>
        <p>Probability · Stochastic processes · Random geometry · Stochastic topology</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
