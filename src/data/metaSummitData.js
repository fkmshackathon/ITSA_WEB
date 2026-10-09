export const metaSummitConfig = {
  edition: "2026",
  title: "META SUMMIT",
  theme: "CONVERGENCE: Intelligence, Infrastructure & Next-Gen Systems",
  tagline: "The Premier Flagship Technology Symposium of SLRTCE Information Technology",
  date: "March 27 – 28, 2026",
  venue: "Main Auditorium & Computing Innovation Hub, Shree L. R. Tiwari Educational Campus",
  organizer: "ITSA (Information Technology Students Association) in collaboration with Department of IT, SLRTCE",
  
  overview: "META SUMMIT is the defining annual symposium where engineering students, faculty researchers, and industry pioneers converge. Designed to move beyond ordinary presentations, META SUMMIT features rigorous technical debates, live architecture demonstrations, high-intensity hack-sprints, and masterclasses across four cutting-edge tracks.",

  stats: [
    { label: "Technical Tracks", value: "04" },
    { label: "Participating Delegates", value: "350+" },
    { label: "Industry Mentors & Jurors", value: "15+" },
    { label: "Hours of Engineering", value: "36" }
  ],

  tracks: [
    {
      id: "track-ai",
      code: "TRACK 01",
      name: "Autonomous Systems & Applied AI",
      tagline: "From neural model inference to real-time computer vision",
      topics: [
        "Real-Time Computer Vision & Edge Inference",
        "Large Foundation Models & Context Engines",
        "Autonomous Robotics & Telemetry Processing",
        "Ethics, Model Alignment & Explainable AI"
      ],
      icon: "Cpu"
    },
    {
      id: "track-cloud",
      code: "TRACK 02",
      name: "Distributed Systems & Cloud Architecture",
      tagline: "High-throughput scaling, Kubernetes & cloud-native ecosystems",
      topics: [
        "Microservices & Serverless Orchestration",
        "Distributed Consensus & Reliable Messaging",
        "Observability, Telemetry & SRE Paradigms",
        "Zero-Trust Cloud Network Topologies"
      ],
      icon: "Cloud"
    },
    {
      id: "track-sec",
      code: "TRACK 03",
      name: "Cyber Security & Infrastructure Defense",
      tagline: "Vulnerability analysis, cryptographic resilience & red-teaming",
      topics: [
        "Web Application & API Threat Modeling",
        "Network Packet Forensics & SIEM Audits",
        "Cryptographic Primitives & Post-Quantum Prep",
        "Hardware-Level Exploit Mitigation"
      ],
      icon: "ShieldCheck"
    },
    {
      id: "track-web",
      code: "TRACK 04",
      name: "Next-Gen Web & Open Innovation",
      tagline: "Modern frameworks, WebAssembly & progressive architectures",
      topics: [
        "High-Performance Web Applications Beyond 2025",
        "WebAssembly (WASM) & Browser Compute",
        "Open-Source Tooling & Community Toolchains",
        "Accessible, High-Fidelity Design Systems"
      ],
      icon: "Globe"
    }
  ],

  schedule: [
    {
      day: "DAY 01 — MARCH 27",
      theme: "Inauguration, Keynotes & Track Sprints",
      items: [
        { time: "09:00 AM – 10:00 AM", title: "Registration, Delegate Check-in & Morning Reception", type: "General" },
        { time: "10:00 AM – 11:15 AM", title: "Grand Inaugural Ceremony & Address by Department Leadership", type: "Ceremony" },
        { time: "11:30 AM – 01:00 PM", title: "Keynote: Architectural Shifts in Scalable Autonomous Systems", type: "Keynote" },
        { time: "01:00 PM – 02:00 PM", title: "Networking Luncheon & Project Showcase Inspection", type: "Break" },
        { time: "02:00 PM – 04:30 PM", title: "Track Workshops: Deep-Dive Code Laboratories (Parallel Sessions)", type: "Workshop" },
        { time: "04:45 PM – 06:00 PM", title: "Live Rapid Prototyping Kickoff & Problem Statement Reveal", type: "Competition" }
      ]
    },
    {
      day: "DAY 02 — MARCH 28",
      theme: "Project Battles, Panel Discourses & Valedictory",
      items: [
        { time: "09:30 AM – 12:30 PM", title: "Engineering Buildathon Submissions & Live Jury Evaluations", type: "Competition" },
        { time: "12:30 PM – 01:30 PM", title: "Interactive Technology Panel: Future of Engineering in India", type: "Panel" },
        { time: "01:30 PM – 02:30 PM", title: "Networking Lunch & Idea Lab Demonstrations", type: "Break" },
        { time: "02:30 PM – 04:00 PM", title: "Grand Finale: Top Project Pitches on Main Stage", type: "Keynote" },
        { time: "04:15 PM – 05:30 PM", title: "Valedictory Ceremony, Awards Felicitation & Closing Remarks", type: "Ceremony" }
      ]
    }
  ],

  faqs: [
    {
      q: "Who can attend META SUMMIT?",
      a: "META SUMMIT is open to all engineering undergraduates, postgraduate researchers, and faculty members from SLRTCE and recognized collegiate institutions."
    },
    {
      q: "Is there an entry fee for students?",
      a: "Standard delegate entry is sponsored by the Department of Information Technology and ITSA for registered students. Selected specialized workshops may require prior registration."
    },
    {
      q: "Will certificates be provided?",
      a: "Yes, all attending delegates and project participants receive an official Certificate of Participation endorsed by SLRTCE and ITSA."
    },
    {
      q: "Can teams submit multidisciplinary projects?",
      a: "Absolutely. We strongly encourage cross-domain projects combining software, embedded IoT, cloud backends, and AI models under the Prayas innovation initiative."
    }
  ]
};
