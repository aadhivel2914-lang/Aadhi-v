import { Project, Skill, ExperienceItem, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: "Aadhipradhap V.",
  title: "AI & Data Science Developer",
  degree: "B.Sc Computer Science (AI & Data Science)",
  tagline: "Turning Ideas Into Intelligent Digital Experiences.",
  shortBio: "A dedicated Computer Science (AI & Data Science) student specialized in architecting machine learning models, computer vision forensics, and responsive digital interfaces. Driven by crafting technology that translates raw data into dependable intelligence.",
  email: "aadhivel2914@gmail.com",
  location: "Tamil Nadu, India",
  profileImage: "/assets/profile.jpg",
  resumePath: "/assets/aadhi-resume.pdf",
  socials: {
    github: "https://github.com/aadhipradhap",
    linkedin: "https://linkedin.com/in/aadhipradhap",
    email: "mailto:aadhivel2914@gmail.com",
  },
  stats: [
    { label: "Core Focus", value: "AI & Data Science" },
    { label: "Primary Language", value: "Python / C++" },
    { label: "Flagship Project", value: "Fake Certificate AI" },
    { label: "Availability", value: "Open for Opportunities" },
  ]
};

export const ABOUT_CARDS = [
  {
    id: "who-i-am",
    title: "Who I Am",
    badge: "Identity",
    icon: "UserCheck",
    color: "cyan",
    content: "I am an aspiring AI engineer and developer with an insatiable curiosity for algorithmic reasoning. I enjoy breaking down intricate challenges into elegant, automated solutions, whether that involves computer vision pipelines or clean web interfaces."
  },
  {
    id: "what-i-study",
    title: "What I Study",
    badge: "Academics",
    icon: "GraduationCap",
    color: "violet",
    content: "Pursuing a Bachelor of Science in Computer Science with a specialization in Artificial Intelligence and Data Science. My curriculum balances foundational computer science, discrete mathematics, neural networks, and statistical machine learning."
  },
  {
    id: "technical-interests",
    title: "Technical Interests",
    badge: "Specialization",
    icon: "Cpu",
    color: "sky",
    content: "Deeply interested in Computer Vision forensics, pattern recognition, anomaly detection, predictive data modeling, and developing low-latency full-stack AI user experiences."
  },
  {
    id: "career-goal",
    title: "Career Goal",
    badge: "Vision",
    icon: "Target",
    color: "emerald",
    content: "To lead the creation of impactful, trustworthy AI systems that solve genuine societal problems—such as combating document credential forgery and delivering data-driven decision engines."
  },
  {
    id: "areas-of-interest",
    title: "Areas of Interest",
    badge: "Exploration",
    icon: "Sparkles",
    color: "indigo",
    content: "Image manipulation forensics, neural feature extraction, supervised & unsupervised machine learning, algorithmic efficiency, and scalable web applications."
  }
];

export const SKILLS_DATA: Skill[] = [
  {
    name: "Python",
    category: "Programming",
    level: "Advanced",
    iconName: "Code2",
    highlight: "Primary language for AI modeling, OpenCV forensics, and data automation scripts.",
    description: "Core algorithmic development, NumPy, Pandas, Scikit-Learn, and automation.",
    projectsUsed: ["AI Fake Certificate Detection", "Predictive Data Visualizer"]
  },
  {
    name: "AI & Data Science",
    category: "AI & Data Science",
    level: "Specialization",
    iconName: "BrainCircuit",
    highlight: "End-to-end data pipelines, exploratory data analysis, and predictive statistical algorithms.",
    description: "Feature engineering, anomaly detection, evaluation metrics, and data curation.",
    projectsUsed: ["AI Fake Certificate Detection", "Data Visualizer Dashboard"]
  },
  {
    name: "Machine Learning",
    category: "AI & Data Science",
    level: "Specialization",
    iconName: "Binary",
    highlight: "Supervised and unsupervised model training, classification, regression, and clustering.",
    description: "Scikit-Learn, confusion matrices, ROC-AUC tuning, and cross-validation.",
    projectsUsed: ["Fake Certificate Detection", "Predictive Analytics"]
  },
  {
    name: "C",
    category: "Programming",
    level: "Foundational",
    iconName: "Terminal",
    highlight: "Deep understanding of memory management, pointer arithmetic, and system architectures.",
    description: "Low-level programming, data structures, algorithms, and logic optimization.",
    projectsUsed: ["Core Data Structures", "Algorithm Benchmarks"]
  },
  {
    name: "C++",
    category: "Programming",
    level: "Core Competency",
    iconName: "Cpu",
    highlight: "Object-oriented design patterns, STL algorithms, and computational efficiency.",
    description: "Object-Oriented Programming, templates, dynamic allocation, and problem solving.",
    projectsUsed: ["Academic Algorithms", "Computational Labs"]
  },
  {
    name: "Web Development",
    category: "Web & Development",
    level: "Core Competency",
    iconName: "Globe",
    highlight: "Crafting modern, responsive, and accessible interactive interfaces for AI applications.",
    description: "Component architecture, reactive state, API integration, and smooth UX flows.",
    projectsUsed: ["Portfolio Experience", "AI Detection Web UI"]
  },
  {
    name: "HTML5 & CSS3",
    category: "Web & Development",
    level: "Advanced",
    iconName: "Layout",
    highlight: "Semantic DOM architecture, responsive grid/flex layouts, and modern cyber styling.",
    description: "Tailwind CSS, CSS Grid, custom keyframes, and accessible UI markup.",
    projectsUsed: ["All Web Interfaces", "Dashboard Portals"]
  },
  {
    name: "JavaScript",
    category: "Web & Development",
    level: "Core Competency",
    iconName: "Zap",
    highlight: "Asynchronous processing, DOM manipulation, ES6+ standards, and event loops.",
    description: "Async/await patterns, interactive animations, modules, and API consumption.",
    projectsUsed: ["Interactive Terminal", "Web Dashboards"]
  },
  {
    name: "MS Office Suite",
    category: "Core Tools",
    level: "Proficient",
    iconName: "FileSpreadsheet",
    highlight: "Professional documentation, data tables with Excel formulas, and technical presentations.",
    description: "Advanced Excel analysis, professional Word technical reports, and slide decks.",
    projectsUsed: ["Academic Reports", "Internship Documentation"]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "ai-fake-certificate-detection",
    title: "AI Fake Certificate Detection",
    subtitle: "Computer Vision & Forensics System",
    category: "AI & ML",
    featured: true,
    description: "A machine learning and computer vision framework designed to combat academic credential fraud. Analyzes structural layouts, seals, optical character font consistency, and digital signatures to flag manipulated documents.",
    detailedDescription: "Academic credential forgery poses critical risks to universities, employers, and accreditation bodies. This system automates the document verification process by combining high-precision OpenCV preprocessing with machine learning classifiers. It extracts micro-patterns, inspects pixel manipulation boundaries, performs OCR verification against database hashes, and generates a tamper probability heatmap.",
    technologies: ["Python", "OpenCV", "Machine Learning", "Scikit-Learn", "Computer Vision", "Streamlit/Web"],
    metrics: [
      { label: "Verification Accuracy", value: "98.4%" },
      { label: "Inspection Latency", value: "< 1.2s" },
      { label: "Forensic Layers", value: "4 Distinct Checks" }
    ],
    keyHighlights: [
      "Pixel-level tamper localization through Error Level Analysis (ELA) and edge artifact detection.",
      "OCR verification comparing font spacing, baseline alignment, and typographical anomalies.",
      "Cryptographic QR code authenticity check against institutional cryptographic signatures.",
      "Real-time visual diagnostic dashboard producing verifiable audit reports."
    ],
    githubUrl: "https://github.com/aadhipradhap",
    demoUrl: "#ai-inspection-sandbox",
    inspectionSimulation: {
      type: "Academic Degree Certificate Analysis",
      status: "Verified Authentic / Tamper Inspection Active",
      confidence: 98.4,
      details: "Watermark integrity: 99.1% | Font baseline variance: 0.02mm (Normal) | Seal stamping: Valid Institutional Signature"
    }
  },
  {
    id: "predictive-data-visualizer",
    title: "Predictive Data Intelligence Dashboard",
    subtitle: "Interactive Statistical Modeling Platform",
    category: "Data Science",
    featured: false,
    description: "An exploratory data analysis and predictive modeling environment that allows users to upload datasets, evaluate feature correlations, and forecast outcomes with machine learning algorithms.",
    detailedDescription: "Designed to bridge raw numerical data and actionable insights. Features automated missing value imputation, multi-variable correlation matrices, distribution plots, and one-click regression/classification training models.",
    technologies: ["Python", "Pandas", "Scikit-Learn", "JavaScript", "HTML/CSS"],
    metrics: [
      { label: "Processing Speed", value: "Real-time" },
      { label: "Algorithms", value: "Linear, RF, SVM" }
    ],
    keyHighlights: [
      "Interactive data distribution graphs and scatter matrices.",
      "Feature importance evaluation using random forest ensembles.",
      "Exportable statistical summaries and prediction intervals."
    ],
    githubUrl: "https://github.com/aadhipradhap",
    demoUrl: "https://github.com/aadhipradhap"
  },
  {
    id: "academic-query-nlp-bot",
    title: "Intelligent Academic Assistant",
    subtitle: "Domain-Specific NLP Query Resolver",
    category: "AI & ML",
    featured: false,
    description: "A specialized natural language processing assistant that indexes academic curricula, university regulations, and lab syllabi to provide instant student guidance.",
    detailedDescription: "Built to resolve student queries regarding lecture prerequisites, exam schedules, and department guidelines using semantic similarity matching and lightweight intent classification.",
    technologies: ["Python", "NLP", "Machine Learning", "Web Interface"],
    metrics: [
      { label: "Intent Accuracy", value: "95.2%" },
      { label: "Query Response", value: "Instant" }
    ],
    keyHighlights: [
      "Semantic similarity search on academic document repositories.",
      "Context-aware fallback mechanisms for complex student inquiries.",
      "Lightweight web interface optimized for rapid response."
    ],
    githubUrl: "https://github.com/aadhipradhap",
    demoUrl: "https://github.com/aadhipradhap"
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "ai-internship",
    role: "AI & Data Science Intern",
    organization: "AI & Intelligent Systems Laboratory",
    location: "Tamil Nadu, India",
    duration: "2024 – Present",
    period: "Active Engagement",
    type: "Internship",
    description: "Contributing to applied machine learning research, data preprocessing pipelines, and intelligent software experiments under senior faculty and industry mentorship.",
    achievements: [
      "Designed and tested data transformation workflows for multi-dimensional datasets, mitigating skewness and missing values.",
      "Evaluated machine learning classification models (Decision Trees, Random Forests, SVMs) for predictive accuracy and variance.",
      "Collaborated on designing prototype user interfaces to showcase real-time AI inference results to stakeholders.",
      "Documented technical specifications, experimental methodologies, and benchmark performance results."
    ],
    technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Machine Learning", "Data Visualization", "MS Office"]
  },
  {
    id: "academic-projects-practicum",
    role: "Undergraduate AI & Systems Researcher",
    organization: "Department of Computer Science (AI & DS)",
    location: "Tamil Nadu, India",
    duration: "2023 – 2024",
    period: "Academic Project Work",
    type: "Academic Research & Development",
    description: "Executed hands-on project work focusing on computer vision tampering detection, algorithm design in C/C++, and full-stack web prototypes.",
    achievements: [
      "Researched forensic image analysis methods for document validation, leading to the AI Fake Certificate Detection system.",
      "Constructed foundational algorithmic problem sets utilizing object-oriented principles in C++.",
      "Maintained version-controlled repositories and technical reports for peer reviews."
    ],
    technologies: ["C", "C++", "Python", "Computer Vision", "Git & GitHub"]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "bsc-cs-aids",
    degree: "Bachelor of Science in Computer Science",
    field: "Artificial Intelligence & Data Science",
    institution: "College of Arts & Science / University Affiliated",
    duration: "2023 – Present",
    status: "Currently Pursuing (Finalizing Undergrad)",
    highlights: [
      "Core focus on Artificial Intelligence algorithms, Deep Learning principles, and Statistical Data Science.",
      "Developed flagship project on AI Fake Certificate Detection for academic credential verification.",
      "Active participant in technical coding symposiums and machine learning workshops."
    ],
    coursework: [
      "Artificial Intelligence",
      "Machine Learning Algorithms",
      "Data Science with Python",
      "Data Structures & Algorithms",
      "Computer Vision Fundamentals",
      "Database Management Systems",
      "Object-Oriented Programming (C++)"
    ]
  },
  {
    id: "hsc-school",
    degree: "Higher Secondary Certificate (HSC)",
    field: "Computer Science Stream",
    institution: "Higher Secondary School",
    duration: "Completed",
    status: "Graduated with Distinction in Computer Science",
    highlights: [
      "Specialized in Computer Science, Mathematics, Physics, and Chemistry.",
      "Acquired strong foundational logic in structured programming languages (C/C++) and computational problem-solving.",
      "Excelled in school computer laboratory projects and competitive academic tasks."
    ],
    coursework: [
      "Computer Science (C++ & Database Basics)",
      "Mathematics (Calculus & Vectors)",
      "Physics",
      "Chemistry"
    ]
  }
];

export const TERMINAL_COMMANDS = [
  {
    cmd: "help",
    desc: "List all available terminal commands",
    output: [
      "AVAILABLE COMMANDS IN AADHI-OS v2.4:",
      "  > about         - Display Aadhipradhap's professional bio & focus",
      "  > skills        - Inspect technical skill categories & proficiencies",
      "  > projects      - List featured AI and data engineering projects",
      "  > featured      - Deep-dive into AI Fake Certificate Detection",
      "  > experience    - View internship history & research responsibilities",
      "  > education     - Display academic degrees & coursework",
      "  > contact       - Get direct contact channels & email",
      "  > resume        - Open & download official PDF resume",
      "  > clear         - Clear the terminal console output",
      "  > sudo hire-me  - Initiate recruitment protocol"
    ]
  },
  {
    cmd: "about",
    desc: "Display professional profile",
    output: [
      "AADHIPRADHAP V. [AI & DATA SCIENCE SPECIALIST]",
      "--------------------------------------------------",
      "Degree  : B.Sc Computer Science (AI & Data Science)",
      "Tagline : Turning Ideas Into Intelligent Digital Experiences.",
      "Status  : Ready for AI / Software Engineering roles & internships.",
      "Summary : Passionate developer combining statistical machine learning,",
      "          computer vision forensics, and modern web software to construct",
      "          reliable, real-world digital applications."
    ]
  },
  {
    cmd: "skills",
    desc: "Display technical skills matrix",
    output: [
      "[+] PROGRAMMING LANGUAGES : Python, C, C++, JavaScript",
      "[+] AI & DATA SCIENCE     : Machine Learning, Computer Vision, Pandas, Scikit-Learn",
      "[+] WEB TECHNOLOGIES      : HTML5, CSS3, JavaScript, React, Tailwind CSS",
      "[+] CORE TOOLS & SUITES   : Git, GitHub, MS Office Suite (Word, Excel, PPT)",
      "[!] Proficient in algorithm design, anomaly detection, and data preprocessing."
    ]
  },
  {
    cmd: "projects",
    desc: "Display verified projects",
    output: [
      "1. AI FAKE CERTIFICATE DETECTION [FEATURED]",
      "   - Forensics: OpenCV, CNN image feature extraction, OCR font anomaly checks.",
      "   - Result   : 98.4% accuracy, detects manipulation in under 1.2 seconds.",
      "",
      "2. PREDICTIVE DATA INTELLIGENCE DASHBOARD",
      "   - Stack    : Python, Pandas, Scikit-Learn, Web GUI.",
      "   - Scope    : Real-time statistical evaluation and forecasting.",
      "",
      "3. INTELLIGENT ACADEMIC ASSISTANT (NLP)",
      "   - Stack    : Python, Natural Language Processing, Rule matching.",
      "   - Scope    : Instant curriculum and syllabus query resolution."
    ]
  },
  {
    cmd: "featured",
    desc: "Deep-dive into Fake Certificate Detection",
    output: [
      ">> PROJECT TELEMETRY: AI FAKE CERTIFICATE DETECTION",
      "---------------------------------------------------------",
      "Objective    : Prevent forged academic credentials using automated CV forensics.",
      "Mechanisms   : Error Level Analysis (ELA), edge boundary variance, OCR alignment.",
      "Verification : Dual-layer: Pixel tampering heatmap + cryptographic QR hash.",
      "Status       : Production Prototype Verified (Accuracy: 98.4%)."
    ]
  },
  {
    cmd: "experience",
    desc: "Display internship background",
    output: [
      "AI & DATA SCIENCE INTERN | AI & Intelligent Systems Lab (2024 - Present)",
      "• Engineered data preprocessing and transformation pipelines in Python.",
      "• Validated machine learning classification models with cross-validation.",
      "• Built interactive dashboard interfaces to display real-time inference.",
      "• Authored comprehensive technical documentation and experimental reports."
    ]
  },
  {
    cmd: "education",
    desc: "Display educational background",
    output: [
      "[1] B.Sc Computer Science (AI & Data Science) - Undergraduate (2023 - Present)",
      "    Curriculum: Machine Learning, Computer Vision, Algorithms, Data Science.",
      "[2] Higher Secondary School Certificate (HSC) - Graduated with Distinction",
      "    Focus: Computer Science, Mathematics, Physics, Chemistry."
    ]
  },
  {
    cmd: "contact",
    desc: "Display contact methods",
    output: [
      "CONTACT CHANNELS:",
      "  Email    : aadhivel2914@gmail.com",
      "  Location : Tamil Nadu, India",
      "  GitHub   : https://github.com/aadhipradhap",
      "  LinkedIn : https://linkedin.com/in/aadhipradhap",
      "Status: Actively reviewing developer opportunities & internships."
    ]
  },
  {
    cmd: "sudo hire-me",
    desc: "Recruitment protocol",
    output: [
      "[SYSTEM NOTICE] Access granted with high priority.",
      "Aadhipradhap V. is highly prepared to bring value to your AI & Engineering team.",
      "Triggering direct contact channel...",
      ">> Click 'Contact Me' or email aadhivel2914@gmail.com to proceed."
    ]
  }
];
