import Image from "next/image";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  CircuitBoard,
  Globe2,
  Layers3,
  Mail,
  Network,
  RadioTower,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

const roles = [
  {
    company: "Oracle",
    role: "Manager - Global Network Operations",
    period: "June 2024 - Present",
    place: "Hyderabad, Telangana, India",
    summary:
      "Leads 10+ engineers operating internet, backbone, and optical circuits with a focus on monitoring discipline, incident response, and global route-control improvements.",
    signal: "Current",
  },
  {
    company: "Providence India",
    role: "Principal Engineer",
    period: "February 2024 - May 2024",
    place: "Hyderabad, Telangana, India",
    summary:
      "Integrated needs assessment, cost estimates, project planning, deployment strategy, and stakeholder delivery for network products and operations.",
    signal: "Delivery",
  },
  {
    company: "AT&T",
    role: "Technical Specialist",
    period: "December 2010 - January 2024",
    place: "India",
    summary:
      "Shaped network deployment measurement, IP traffic analysis, infrastructure design strategy, resilient core solutions, and business-aligned technology adoption.",
    signal: "Scale",
  },
  {
    company: "The Search House",
    role: "Network Specialist",
    period: "May 2009 - November 2010",
    place: "New Delhi",
    summary:
      "Supported AT&T India initiatives across design, deployment, solution architecture, device management, IPS rollout, BOM planning, and nationwide site implementation.",
    signal: "Build",
  },
  {
    company: "CSS Corp",
    role: "Network Engineer",
    period: "December 2008 - January 2009",
    place: "Alcatel-Lucent TAC",
    summary:
      "Provided L1/L2 support for Alcatel data products, lab recreation, bug reporting, technical tips, and SLA-focused enterprise support.",
    signal: "Foundation",
  },
];

const capabilities = [
  {
    icon: Globe2,
    title: "Global Network Operations",
    text: "Internet edge, backbone, optical networks, circuit governance, and always-on operational readiness.",
  },
  {
    icon: RadioTower,
    title: "Routing Strategy",
    text: "BGP, route control, resilient core design, traffic characterization, and global network optimization.",
  },
  {
    icon: ShieldCheck,
    title: "Incident Discipline",
    text: "Monitoring, escalation hygiene, SLA ownership, and calm execution when infrastructure stakes are high.",
  },
  {
    icon: Layers3,
    title: "Program Delivery",
    text: "Needs assessment, implementation strategy, cost visibility, schedule control, and stakeholder satisfaction.",
  },
];

const stats = [
  ["10+", "Engineers led"],
  ["13+", "Years at AT&T"],
  ["2500", "Devices managed"],
  ["CCIE", "Certified expertise"],
];

const skills = ["BGP", "RIP", "CCNP", "CCIE", "PMP", "Six Sigma Green Belt"];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <Image
          className="heroImage"
          src="/images/network-command-hero.png"
          alt="Abstract global network operations command center"
          fill
          priority
          sizes="100vw"
        />
        <div className="heroShade" />
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Rohit Verma home">
            <span>RV</span>
            <strong>Rohit Verma</strong>
          </a>
          <div className="navLinks">
            <a href="#about">About</a>
            <a href="#journey">Journey</a>
            <a href="#portfolio">Portfolio</a>
            <a href="mailto:verma-rohit@hotmail.co.uk">Contact</a>
          </div>
        </nav>

        <div className="heroContent">
          <div className="eyebrow">
            <Sparkles size={16} />
            Global Network Operations Leader
          </div>
          <h1>Enterprise calm for high-velocity networks.</h1>
          <p>
            I lead global network operations across internet, backbone, and
            optical infrastructure, pairing deep routing expertise with the
            ownership required to keep critical systems resilient.
          </p>
          <div className="heroActions">
            <a className="primaryAction" href="#journey">
              View career journey
              <ChevronRight size={18} />
            </a>
            <a
              className="secondaryAction"
              href="https://www.linkedin.com/in/rohit-verma-33373328"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <div className="heroPanel" aria-label="Profile snapshot">
          <div>
            <span>Current</span>
            <strong>Manager - Global Network Operations</strong>
          </div>
          <div>
            <span>Base</span>
            <strong>Hyderabad, Telangana, India</strong>
          </div>
          <div>
            <span>Core</span>
            <strong>Internet edge, backbone, optical, route control</strong>
          </div>
        </div>
      </section>

      <section className="section intro" id="about">
        <div className="sectionLabel">
          <Target size={18} />
          About
        </div>
        <div className="introGrid">
          <div>
            <h2>Focused, result-oriented, and fully accountable.</h2>
          </div>
          <div className="introCopy">
            <p>
              Rohit Verma is a network operations leader with hands-on depth in
              routing, infrastructure design, deployment, and enterprise support.
              His work spans global network optimization, internet route-control
              collaboration, daily internet edge operations, and rapid incident
              response.
            </p>
            <p>
              The throughline is ownership: building teams, improving operating
              methods, translating business requirements into resilient network
              solutions, and keeping complex infrastructure measurable,
              recoverable, and ready.
            </p>
          </div>
        </div>
      </section>

      <section className="statsBand" aria-label="Career highlights">
        {stats.map(([value, label]) => (
          <div className="stat" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="section capabilities">
        <div className="sectionHeader">
          <div className="sectionLabel">
            <CircuitBoard size={18} />
            Operating Strengths
          </div>
          <h2>Built for environments where uptime, clarity, and judgment matter.</h2>
        </div>
        <div className="capabilityGrid">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <article className="capabilityCard" key={item.title}>
                <Icon size={24} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section journey" id="journey">
        <div className="sectionHeader journeyHeader">
          <div>
            <div className="sectionLabel">
              <BriefcaseBusiness size={18} />
              Career Journey
            </div>
            <h2>From TAC discipline to global operations leadership.</h2>
          </div>
          <a className="quietLink" href="mailto:verma-rohit@hotmail.co.uk">
            Discuss availability
            <Mail size={16} />
          </a>
        </div>

        <div className="timeline">
          {roles.map((item) => (
            <article className="timelineItem" key={`${item.company}-${item.role}`}>
              <div className="timelineMarker">
                <span>{item.signal}</span>
              </div>
              <div className="timelineCard">
                <div className="timelineTop">
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                  </div>
                  <div className="period">
                    <span>{item.period}</span>
                    <small>{item.place}</small>
                  </div>
                </div>
                <p>{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section proof">
        <div className="proofPanel">
          <div>
            <div className="sectionLabel">
              <Award size={18} />
              Credentials
            </div>
            <h2>Certifications and recognition that match the responsibility.</h2>
          </div>
          <div className="skillCloud">
            {skills.map((skill) => (
              <span key={skill}>
                <CheckCircle2 size={15} />
                {skill}
              </span>
            ))}
          </div>
          <div className="recognition">
            <strong>Recognition</strong>
            <p>
              AT&T Best of the Best and customer service recognition for strong
              technical expertise.
            </p>
          </div>
        </div>
      </section>

      <section className="section portfolio" id="portfolio">
        <div className="sectionHeader">
          <div>
            <div className="sectionLabel">
              <Network size={18} />
              Portfolio
            </div>
            <h2>Future case studies will live here.</h2>
          </div>
          <a
            className="quietLink"
            href="https://www.linkedin.com/in/rohit-verma-33373328"
            target="_blank"
            rel="noreferrer"
          >
            Current profile
            <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="portfolioGrid">
          {["Network Optimization", "Operational Automation", "Infrastructure Delivery"].map(
            (title) => (
              <a className="portfolioCard" href="#" key={title} aria-label={`${title} coming soon`}>
                <span>Coming soon</span>
                <h3>{title}</h3>
                <p>
                  Reserved for future portfolio links, project notes, and
                  measurable outcomes.
                </p>
                <ArrowUpRight size={18} />
              </a>
            ),
          )}
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>Rohit Verma</strong>
          <span>Global Network Operations</span>
        </div>
        <div className="footerLinks">
          <a href="mailto:verma-rohit@hotmail.co.uk">verma-rohit@hotmail.co.uk</a>
          <a
            href="https://www.linkedin.com/in/rohit-verma-33373328"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}
