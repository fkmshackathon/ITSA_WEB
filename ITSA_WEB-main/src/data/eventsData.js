export const eventsList = [
  {
    id: "meta-summit-2026",
    title: "META SUMMIT 2026",
    isFlagship: true,
    category: "Flagship Summit",
    tag: "Flagship Event",
    date: "March 2026",
    duration: "2-Day Hybrid Symposium",
    venue: "Main Auditorium & Computing Innovation Hub, SLRTCE",
    shortDesc: "The premier annual technology convergence bringing together student researchers, industry veterans, open-source maintainers, and competitive engineers.",
    longDesc: "META SUMMIT represents the pinnacle of technical engagement at SLRTCE Information Technology. Featuring four core tracks spanning Autonomous Systems, Distributed Architectures, Cyber Security, and Next-Gen Web, this 2-day flagship symposium features keynote discourses, high-stakes project battles, and direct networking with tech innovators.",
    highlights: [
      "4 Dedicated Technology Tracks",
      "Over 350+ Participating Engineers & Researchers",
      "Technical Paper & Project Exposition",
      "Interactive Product Demo Tables"
    ],
    status: "Upcoming",
    registrationOpen: true,
    banner: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000",
    tracks: ["AI & Systems", "Cloud Architecture", "Cyber Security", "Web Beyond 2025"]
  },
  {
    id: "fdp-web-development-2025",
    title: "ISTE Approved FDP: Futuristic Web Development Beyond 2025",
    isFlagship: false,
    category: "Faculty & Student FDP",
    tag: "ISTE Approved",
    date: "Academic Year 2025-26",
    duration: "5 Days Intensive Program",
    venue: "Advanced Computing Lab 04, IT Department",
    shortDesc: "Comprehensive national development program certified by ISTE, exploring modern web architectures, edge rendering, and progressive web ecosystems.",
    longDesc: "Organized under the auspices of ISTE and the Department of Information Technology, this high-impact program trained faculty members and senior students in the latest evolutionary shifts in web technologies, distributed micro-frontends, WebAssembly, and secure web services.",
    highlights: [
      "ISTE National Certification",
      "Hands-on architectural code labs",
      "Edge computing & SSR frameworks deep-dive",
      "Case studies on modern enterprise stacks"
    ],
    status: "Completed",
    registrationOpen: false,
    banner: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000",
    tracks: ["Modern Frameworks", "WebAssembly", "Edge Infrastructure", "API Architecture"]
  },
  {
    id: "lane-detection-ai-project",
    title: "Lane Detection System Using Computer Vision & AI",
    isFlagship: false,
    category: "Technical Workshop",
    tag: "AI / Deep Learning",
    date: "Winter Cohort",
    duration: "Full Day Build Sprint",
    venue: "AI & Data Science Lab, SLRTCE",
    shortDesc: "Applied hands-on session on designing, training, and deploying real-time autonomous lane detection algorithms using OpenCV and PyTorch.",
    longDesc: "Students explored computer vision pipelines from camera calibration and bird's-eye perspective transformation to CNN edge filters and sliding window polynomial curve fitting for self-driving automotive simulations.",
    highlights: [
      "Real-time video stream ingestion",
      "Perspective warping & polynomial fitting",
      "CNN based feature extraction",
      "Live hardware test rig demonstration"
    ],
    status: "Completed",
    registrationOpen: false,
    banner: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000",
    tracks: ["Computer Vision", "PyTorch & OpenCV", "Autonomous Systems"]
  },
  {
    id: "iot-tinkercad-hands-on",
    title: "IoT Systems & Circuit Emulation Using Tinkercad",
    isFlagship: false,
    category: "Workshops",
    tag: "IoT & Hardware",
    date: "4th & 5th Feb",
    duration: "2-Day Hands-on Workshop",
    venue: "Embedded Systems & IoT Laboratory",
    shortDesc: "Interactive prototyping and simulation workshop enabling students to design microcontroller circuits, sensor arrays, and telemetry code virtually.",
    longDesc: "Bridging physical computing and cloud telemetry, this workshop provided first- and second-year students with a foundational playground to simulate Arduino circuits, Ultrasonic sensors, PIR detectors, and digital communication protocols before physical breadboard deployment.",
    highlights: [
      "Microcontroller simulation on Autodesk Tinkercad",
      "Sensor calibration & analog-to-digital conversions",
      "C++ embedded firmware writing",
      "Automated alarm & environment monitoring projects"
    ],
    status: "Completed",
    registrationOpen: false,
    banner: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
    tracks: ["IoT Protocols", "Embedded C++", "Circuit Simulation"]
  },
  {
    id: "bgmi-esports-championship",
    title: "SLRTCE Strategic Gaming Arena: BGMI Championship",
    isFlagship: false,
    category: "Competitions",
    tag: "Esports & Strategy",
    date: "Annual Inter-College",
    duration: "3 Rounds Tournament",
    venue: "E-Sports Arena & Media Center",
    shortDesc: "High-adrenaline competitive tournament testing real-time tactical decision making, squad coordination, and network latency optimization.",
    longDesc: "Recognizing esports and competitive digital strategy as a discipline requiring swift reflexes, network understanding, and team tactical leadership, the annual gaming arena saw dozens of collegiate squads competing in LAN and cloud-hosted battle royale brackets.",
    highlights: [
      "Live streamed arena matches with live commentary",
      "Multi-tier bracket playoffs",
      "Dedicated low-latency LAN routing setup",
      "Trophy & certificate felicitation"
    ],
    status: "Completed",
    registrationOpen: false,
    banner: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000",
    tracks: ["Competitive Esports", "Squad Tactics", "LAN Infrastructure"]
  },
  {
    id: "prayas-innovation-expo",
    title: "Prayas: Interdisciplinary IT Project Exposition",
    isFlagship: false,
    category: "Technical",
    tag: "Research & Project Showcase",
    date: "Spring Semester",
    duration: "2-Day Exposition",
    venue: "SLRTCE Central Quadrangle & IT Labs",
    shortDesc: "Annual multidisciplinary innovation fair where students showcase working prototypes, research posters, and industry-grade software solutions.",
    longDesc: "Under the department's Prayas and Gyankund initiatives, students showcase capstone projects evaluated by distinguished industry juries and academic researchers, creating direct placement and patent opportunities.",
    highlights: [
      "Over 60+ working project demonstrations",
      "Industry jury evaluation panel",
      "Best Innovation & Best Commercial Viability Awards",
      "Direct internship interviews on site"
    ],
    status: "Upcoming",
    registrationOpen: true,
    banner: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000",
    tracks: ["Full-Stack Solutions", "AI/ML Applications", "Cyber Security Tools", "IoT Hardware"]
  }
];

export const eventCategories = [
  "All",
  "Flagship Summit",
  "Workshops",
  "Technical",
  "Competitions",
  "Faculty & Student FDP"
];
