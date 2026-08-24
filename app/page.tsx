const journalPapers = [
  {
    year: "2026",
    title: "Ising disks: topology preserving Glauber dynamics",
    authors: "Yuliy Baryshnikov and Efe Onaran",
    venue: "Journal of Applied and Computational Topology 10(3), Paper 16",
    links: [
      ["journal", "https://doi.org/10.1007/s41468-026-00248-w"],
      ["arXiv", "https://arxiv.org/abs/2410.22611"],
    ],
  },
  {
    year: "2026",
    title: "Central limit theorems for local functionals of dynamic point processes",
    authors: "Efe Onaran, Omer Bobrowski, and Robert J. Adler",
    venue: "Electronic Journal of Probability 31, 1–31",
    links: [
      ["journal", "https://doi.org/10.1214/26-EJP1496"],
      ["arXiv", "https://arxiv.org/abs/2310.17775"],
    ],
  },
  {
    year: "2023",
    title:
      "Functional central limit theorems for local statistics of spatial birth–death processes in the thermodynamic regime",
    authors: "Efe Onaran, Omer Bobrowski, and Robert J. Adler",
    venue: "The Annals of Applied Probability 33(5), 3958–3986",
    links: [
      ["journal", "https://doi.org/10.1214/22-AAP1912"],
      ["arXiv", "https://arxiv.org/abs/2202.02766"],
    ],
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
    links: [["journal", "https://ieeexplore.ieee.org/abstract/document/7887654/"]],
  },
  {
    year: "2012",
    title: "Silicon–Germanium multi-quantum well photodetectors in the near infrared",
    authors:
      "Efe Onaran, M. Cengiz Onbasli, Alper Yesilyurt, Hyun Yong Yu, Ammar M. Nayfeh, and Ali K. Okyay",
    venue: "Optics Express 20(7), 7608–7615",
    links: [["journal", "https://opg.optica.org/abstract.cfm?uri=oe-20-7-7608"]],
  },
] as const;

const conferencePapers = [
  ["2020", "Efficient belief propagation for graph matching", "Efe Onaran and Soledad Villar", "https://ieeexplore.ieee.org/abstract/document/9053147"],
  ["2017", "Projected power iteration for network alignment", "Efe Onaran and Soledad Villar", "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/10394/103941C/Projected-power-iteration-for-network-alignment/10.1117/12.2275366.full"],
  ["2016", "Optimal de-anonymization in random graphs with community structure", "Efe Onaran, Siddharth Garg, and Elza Erkip", "https://ieeexplore.ieee.org/abstract/document/7869137/"],
  ["2013", "Broadcast erasure channel with feedback: The two multicast case—algorithms and bounds", "Efe Onaran, Marios Gatzianas, and Christina Fragouli", "https://ieeexplore.ieee.org/abstract/document/6570818/"],
] as const;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#content">Skip to content</a>

      <header className="site-header">
        <div className="header-inner">
          <a className="site-name" href="#home">Efe Onaran</a>
          <nav aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="/efe-onaran-cv.pdf" target="_blank" rel="noreferrer">CV</a>
            <a href="#papers">Papers</a>
            <a href="#talks">Talks</a>
            <a href="#teaching">Teaching</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="content" className="page-shell">
        <section className="home" id="home">
          <div className="portrait-column">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/efe-onaran-google.jpg" alt="Efe Onaran" />
          </div>

          <div className="bio">
            <h1>Efe Onaran</h1>
            <p>
              Hi! I am a visiting scholar in the Department of Mathematics and a
              postdoctoral researcher in the Department of Electrical and Systems
              Engineering at the University of Pennsylvania.
            </p>
            <p>
              Previously, I was a postdoctoral research associate at the Coordinated
              Science Laboratory of the University of Illinois Urbana–Champaign,
              hosted by <a href="https://ymb.web.illinois.edu/" target="_blank" rel="noreferrer">Yuliy Baryshnikov</a>,
              and a postdoctoral fellow at the Technion, hosted by{" "}
              <a href="https://sites.google.com/site/omerbobrowski" target="_blank" rel="noreferrer">Omer Bobrowski</a>
              {" "}and{" "}
              <a href="https://robert.net.technion.ac.il/" target="_blank" rel="noreferrer">Robert J. Adler</a>.
            </p>
            <p>
              My research interests broadly span probability theory and stochastic
              processes, random geometric graphs, and stochastic topology. Earlier,
              I worked on statistical and algorithmic limits for recovering structured
              signals, particularly permutation data.
            </p>
            <p className="quick-links">
              <a href="/efe-onaran-cv.pdf" target="_blank" rel="noreferrer">Curriculum vitae</a>
              <a href="https://scholar.google.com/citations?hl=en&oi=ao&user=Y-3aeCUAAAAJ" target="_blank" rel="noreferrer">Google Scholar</a>
              <a href="mailto:eonaran@seas.upenn.edu">Email</a>
            </p>

            <h2>Education</h2>
            <ul className="education-list">
              <li>PhD in Electrical Engineering, New York University</li>
              <li>MS in Electrical Engineering, Princeton University</li>
              <li>BS in Electrical Engineering, Bilkent University</li>
            </ul>
          </div>
        </section>

        <section className="content-section" id="papers">
          <h2>Papers</h2>
          <h3>Journal articles and preprints</h3>
          <ol className="publication-list">
            {journalPapers.map((paper) => (
              <li key={paper.title}>
                <p><strong>{paper.title}.</strong> {paper.authors}.</p>
                <p><em>{paper.venue}</em> ({paper.year}). {paper.links.map(([label, href], index) => (
                  <span key={label}>{index > 0 ? " · " : " "}<a href={href} target="_blank" rel="noreferrer">{label}</a></span>
                ))}</p>
              </li>
            ))}
          </ol>

          <h3>Conference papers</h3>
          <ol className="publication-list compact-list">
            {conferencePapers.map(([year, title, authors, href]) => (
              <li key={title}>
                <p><a href={href} target="_blank" rel="noreferrer"><strong>{title}.</strong></a> {authors}. ({year}).</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="content-section" id="talks">
          <h2>Talks</h2>
          <ul className="dated-list">
            <li><span>2026</span><p>AFOSR Dynamical Systems and Control Theory Review</p></li>
            <li><span>2024</span><p>Penn / Temple Probability Seminar</p></li>
            <li><span>2024</span><p>Bernoulli–IMS 11th World Congress in Probability and Statistics, Bochum</p></li>
            <li><span>2024</span><p>CRM–PIMS Summer School in Probability, Montréal</p></li>
            <li><span>2024</span><p>Koç University Mathematics Seminar</p></li>
            <li><span>2023</span><p>UIUC Probability Seminar</p></li>
            <li><span>2022</span><p>Random Structures and Algorithms, Gniezno</p></li>
            <li><span>2022</span><p>Queen Mary University of London Probability and Applications Seminar</p></li>
            <li><span>2022</span><p>Technion Probability Seminar</p></li>
            <li><span>2022</span><p>Purdue University Probability Seminar</p></li>
          </ul>

          <h3>AFOSR talk slides</h3>
          <div className="featured-slides">
            <p><strong>Ising Disks: Topology Preserving Glauber Dynamics</strong><br />2026 AFOSR Dynamical Systems and Control Theory Review · August 3, 2026</p>
            <iframe
              className="slides-embed"
              src="/afosr-ising-disks-talk.pdf#view=FitH"
              title="AFOSR talk slides: Ising Disks"
              loading="lazy"
            />
            <p className="slides-actions"><a href="/afosr-ising-disks-talk.pdf" target="_blank" rel="noreferrer">Open or download the PDF</a></p>
          </div>

          <h3>Additional slides</h3>
          <ul className="education-list">
            <li><a href="/penn-temple-probability-seminar-2024.pdf" target="_blank" rel="noreferrer">Penn / Temple Probability Seminar (2024)</a></li>
            <li><a href="/random-structures-algorithms-2022.pdf" target="_blank" rel="noreferrer">Random Structures and Algorithms (2022)</a></li>
          </ul>
        </section>

        <section className="content-section" id="teaching">
          <h2>Teaching</h2>
          <ul className="teaching-list">
            <li><strong>Mathematics of Change, Part II</strong><span>Instructor, University of Pennsylvania · Fall 2025</span></li>
            <li><strong>Advanced Applied Probability</strong><span>Co-instructor with Robin Pemantle, University of Pennsylvania · Spring 2025</span></li>
            <li><strong>Mathematics of Change, Part II</strong><span>Co-instructor with Robin Pemantle, University of Pennsylvania · Fall 2024</span></li>
            <li><strong>Optimum Control Systems</strong><span>Instructor, University of Illinois Urbana–Champaign · Spring 2024</span></li>
          </ul>
          <p>
            Previous teaching at NYU includes probability, statistics, signal
            processing, optimization, machine learning, and mathematical tools for
            data science.
          </p>
        </section>

        <section className="content-section" id="contact">
          <h2>Contact</h2>
          <div className="contact-grid">
            <p><strong>Email</strong><a href="mailto:eonaran@seas.upenn.edu">eonaran@seas.upenn.edu</a><a href="mailto:efeonaran@gmail.com">efeonaran@gmail.com</a></p>
            <p><strong>Office</strong>David Rittenhouse Laboratory, 4N40<br />209 South 33rd Street<br />Philadelphia, PA 19104</p>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Efe Onaran</p>
      </footer>
    </>
  );
}
