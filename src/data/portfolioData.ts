export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ('sde' | 'ml' | 'systems' | 'web3')[];
  period: string;
  description: string;
  bullets: string[];
  tags: string[];
  githubUrl?: string;
  githubUrl2?: string;
  github2Label?: string;
  demoUrl?: string;
  videoUrl?: string;
  featured: boolean;
  priorityOrder: {
    sde: number;
    ml: number;
  };
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  bullets: string[];
  technologies: string[];
}

export interface Achievement {
  title: string;
  organization: string;
  date: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
  badge?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Srijan Tiwari",
    tagline: "Final-Year B.Tech Undergraduate at IIT Guwahati",
    subheading: "Building high-throughput systems, C++20 libraries, and production-grade ML pipelines.",
    location: "Guwahati, India",
    email: "tiwarisrijan612@gmail.com",
    instituteEmail: "t.srijan@iitg.ac.in",
    phone: "+91-9956302266",
    github: "https://github.com/kawaiibaka0908",
    githubUsername: "kawaiibaka0908",
    linkedin: "https://www.linkedin.com/in/srijan-tiwari-215a3a286/",
    college: "Indian Institute of Technology (IIT), Guwahati",
    degree: "Bachelor of Technology (B.Tech)",
    batch: "2023 - 2027",
    statusBadge: "Open to SDE & ML / Data Science Roles (2026 - 2027)",
  },
  
  experiences: [
    {
      company: "Genuity IO",
      role: "Lead Software Engineer, Synthetic Data Division",
      location: "Bengaluru, India",
      period: "May 2026 - Jul 2026",
      description: "Led core architecture and development of enterprise synthetic data generation pipelines.",
      bullets: [
        "Architected Genuity v2.0, an enterprise synthetic dataset generation library supporting 5 modalities (tabular, time-series, financial, relational, and text) and 20+ generative models, driving core production integration into the Vulpix platform.",
        "Led a cross-functional group of 6 developers across architecture design, code reviews, and Agile sprint delivery; established a benchmarking framework to validate statistical fidelity, utility, and confidentiality across 20+ models and 11 public benchmarks.",
        "Engineered production backend workflows for schema profiling, constraint validation, and differential privacy using Python, FastAPI, PostgreSQL, and Docker, scaling the prototype to enterprise client deployment for L&T Technology Services."
      ],
      technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "CTGAN", "Differential Privacy", "Benchmarking"]
    }
  ] as Experience[],

  projects: [
    {
      id: "barely-tokenized",
      title: "Barely Tokenized: Decentralized P2P Smart-Grid Marketplace",
      subtitle: "Solidity, ZoKrates (ZK-SNARKs), Next.js, Node.js, Express, MongoDB",
      category: ["sde", "web3"],
      period: "Jan 2025 - Feb 2025",
      description: "Autonomous peer-to-peer microgrid energy trading platform with cryptographic proof of balance and transmission telemetry.",
      bullets: [
        "Developed a decentralized peer-to-peer energy trading marketplace, integrating Solidity smart contracts, IoT meter telemetry, and 2 zero-knowledge circuits (buyer-balance and energy-reserve proofs) for confidential trade settlement.",
        "Designed a 2-pointer order-matching and bidding algorithm with dynamic market-cap bounds and grid-operator fallback, alongside a Carbon Credit scoring mechanism to quantify producer efficiency and transmission loss.",
        "Built a full-stack web application with Next.js, Tailwind CSS, Node.js, Express, and MongoDB for real-time consumption analytics, transaction logging, and wallet authentication, verified across 2 blockchain testnets (Ganache and Ethereum Sepolia)."
      ],
      tags: ["Solidity", "ZK-SNARKs", "ZoKrates", "Next.js", "Node.js", "Express", "MongoDB", "Web3.js", "Tailwind CSS"],
      githubUrl: "https://github.com/kawaiibaka0908/KRITI_ENERGY_CHAIN",
      videoUrl: "https://drive.google.com/file/d/1QHKvVlQwnsDzCoNIeCn7VcSn22CsA_Wc/view?usp=sharing",
      featured: true,
      priorityOrder: { sde: 1, ml: 5 }
    },
    {
      id: "cpp-image-engine",
      title: "C++20 Image Engine, Huffman Codec & Custom STL Library",
      subtitle: "C++20, Bitwise I/O, Custom Iterators, Spatial Convolutions, Event Dispatcher",
      category: ["sde", "systems"],
      period: "Feb 2026 - Mar 2026",
      description: "High-performance header-only image processing and data compression framework built from scratch in modern C++20.",
      bullets: [
        "Constructed a standalone, header-only C++20 image library from scratch, featuring byte-aligned 24-bit BMP parsers with row-padding and endianness handling, as well as 4 spatial convolution filters (Sobel, Scharr, Prewitt, and Gaussian blur).",
        "Implemented a Huffman Encoder and Decoder, utilizing a 64 KB buffered bit-stream reader and writer, recursive tree-header serialization, and 1-indexed priority queues with O(log N) logarithmic rebalancing.",
        "Created an STL-compatible generic container package with random-access, forward, and bidirectional iterators across 6 container types (Array, Singly, Circular, Doubly Linked Lists, Stack, Queue), plus a Multicast Delegate event dispatcher."
      ],
      tags: ["C++20", "Templates", "Custom Allocators", "Bit Manipulation", "STL Containers", "Image Processing"],
      githubUrl: "https://github.com/kawaiibaka0908/Image_library_Cpp",
      githubUrl2: "https://github.com/kawaiibaka0908/DAS_Implementation",
      github2Label: "STL / Delegates",
      featured: true,
      priorityOrder: { sde: 2, ml: 6 }
    },
    {
      id: "router-quest",
      title: "Router Quest: Fuel-Constrained Graph Routing Solver",
      subtitle: "C++, Graph Theory, Floyd-Warshall, Heuristics, Path Reconstruction",
      category: ["sde", "systems"],
      period: "Nov 2025 - Dec 2025",
      description: "NP-hard fuel-constrained pickup-and-delivery routing optimization engine with lookahead simulation.",
      bullets: [
        "Formulated a high-speed C++ solver for the NP-hard, fuel-constrained pickup-and-delivery routing problem on weighted undirected graphs, enforcing precedence rules and tank-capacity bounds across intermediate refuel stations.",
        "Combined the Floyd-Warshall O(V³) all-pairs shortest-path algorithm and parent-pointer tree reconstruction with a 2-step lookahead fuel-feasibility simulator, multi-start greedy heuristics, and a standalone route verifier."
      ],
      tags: ["C++", "Graph Algorithms", "Floyd-Warshall", "Optimization", "Greedy Heuristics"],
      githubUrl: "https://github.com/kawaiibaka0908/Router_Quest",
      featured: true,
      priorityOrder: { sde: 3, ml: 7 }
    },
    {
      id: "promo-finder",
      title: "Promo Finder: AI Video Script-to-Promo Clipping Pipeline",
      subtitle: "Python, Sentence-Transformers (MiniLM), Gemma-26B, Streamlit, Pydantic",
      category: ["ml"],
      period: "Oct 2026 - Nov 2026",
      description: "Hybrid LLM-as-a-Judge and semantic embedding pipeline for automatic promotional trailer scene extraction.",
      bullets: [
        "Developed a hybrid rule-based and Generative AI workflow that parses timestamped screenplays into structured Pydantic scene beats, extracting standalone 20-to-60-second promotional clips with engaging 3-second opening hooks and clean dialogue cuts.",
        "Modeled a 0.25s dramatic intensity score across each script by combining pacing cues (camera cuts, speaker transitions, and sound effects) with Sentence-Transformers (MiniLM) emotional tone embeddings to locate peak scenes.",
        "Constructed a cold-viewer LLM-as-a-Judge (Gemma-26B) to score candidate clips on hook strength, cliffhanger tension, clarity, and spoiler risk across 4 evaluation metrics, paired with a story-arc montage builder, Streamlit UI, and Pytest suite."
      ],
      tags: ["Python", "Generative AI", "Sentence-Transformers", "LLM Evaluation", "Streamlit", "Pydantic", "Pytest"],
      githubUrl: "https://github.com/kawaiibaka0908/Promo-Extraction",
      featured: true,
      priorityOrder: { sde: 5, ml: 1 }
    },
    {
      id: "deep-rl-trading",
      title: "Algorithmic Trading via Deep Reinforcement Learning",
      subtitle: "Python, TensorFlow 2, DDDQN, BiLSTM, Gymnasium, Prioritized Experience Replay",
      category: ["ml"],
      period: "Jan 2026 - Feb 2026",
      description: "Autonomous cryptocurrency trading agent with Dueling Double Deep Q-Networks and temporal advantage streams.",
      bullets: [
        "Trained a Dueling Double Deep Q-Network (DDDQN) with a Bidirectional LSTM encoder, analyzing 1,820+ historical Bitcoin daily bars (2020 - 2025) across 10+ technical indicators and a 90-day lookback window to decouple value and advantage streams.",
        "Designed a position-aware Gymnasium trading environment with 3 discrete actions (Buy, Sell, and Hold), simulating realistic market friction via 0.1% (10 bps) transaction fees, dynamic position sizing, stop-loss triggers, and drawdown controls.",
        "Accelerated training convergence to 500 episodes by implementing Prioritized Experience Replay (PER), combining temporal-difference error sampling, importance-sampling bias correction, 64-sample mini-batches, and 20-step target network syncs."
      ],
      tags: ["Python", "TensorFlow 2", "Reinforcement Learning", "DDDQN", "BiLSTM", "Gymnasium", "Quantitative Finance"],
      githubUrl: "https://github.com/kawaiibaka0908/Algorithmic_Trading_DeepRL",
      featured: true,
      priorityOrder: { sde: 6, ml: 2 }
    },
    {
      id: "ai-candidate-ranker",
      title: "High-Throughput Candidate Ranking & Anomaly Detection Pipeline",
      subtitle: "Python, Bounded Min-Heap O(N log K), TF-IDF, Gradio, Hugging Face Spaces",
      category: ["sde", "ml"],
      period: "May 2026 - Jun 2026",
      description: "Single-pass stream processing engine screening 100,000 candidate records in under 65 seconds within 120 MB RAM.",
      bullets: [
        "Streamlined a single-pass information-retrieval workflow that evaluates 100,000 candidate records (487 MB) in under 65 seconds within 120 MB of peak RAM, utilizing bounded min-heap Top-100 selection (O(N log K)) and TF-IDF cosine similarity.",
        "Formulated a 20-feature scoring model and anomaly filter across 70,584 eligible applicants to flag fabricated histories, timeline inconsistencies, and keyword stuffing, significantly reducing false positives in the ranked output.",
        "Created a deterministic natural-language generator that produces 480 structured, evidence-backed recruiter justifications via hash-based template selection, deployed through an interactive Gradio interface on Hugging Face Spaces."
      ],
      tags: ["Python", "Stream Processing", "Bounded Min-Heap", "TF-IDF", "Gradio", "Hugging Face Spaces"],
      githubUrl: "https://github.com/kawaiibaka0908/ai-candidate-ranker",
      demoUrl: "https://huggingface.co/spaces/kawaiibaka0908/ai-candidate-ranker",
      featured: true,
      priorityOrder: { sde: 4, ml: 3 }
    },
    {
      id: "semantic-image-segmentation",
      title: "Semantic Image Segmentation with Nested U-Net++",
      subtitle: "PyTorch / TensorFlow, U-Net++, NumPy Vectorization, Dice Loss, Kaggle GPU",
      category: ["ml"],
      period: "May 2025 - Jun 2025",
      description: "Pixel-wise semantic segmentation with nested skip pathways and morphological boundary refinement.",
      bullets: [
        "Built an optimized U-Net++ encoder-decoder architecture (32 to 512 filters with nested skip connections and dropout regularization) for pixel-wise semantic segmentation on RGB image-mask pairs, mitigating class imbalance via combined Dice and Cross-Entropy Loss.",
        "Implemented a vectorized NumPy RGB-to-class-ID label mapping module and morphological refinement (dilation and erosion) to sharpen boundary masks, reaching 80% validation accuracy and 230 ms/image inference latency within a 395 MB checkpoint."
      ],
      tags: ["Deep Learning", "Computer Vision", "U-Net++", "NumPy", "Dice Loss", "Image Segmentation"],
      githubUrl: "https://github.com/kawaiibaka0908/Image_Segmentation",
      featured: false,
      priorityOrder: { sde: 7, ml: 4 }
    },
    {
      id: "molconvert",
      title: "MolConvert: Multi-Format Molecular Compiler & CLI",
      subtitle: "Python, CLI Architecture, 3D Geometry, RDKit, Pytest (376 Tests)",
      category: ["sde", "systems"],
      period: "Jun 2026 - Jul 2026",
      description: "Modular command-line utility translating across 9 chemical file formats with internal 3D coordinate reconstruction.",
      bullets: [
        "Programmed a structural bioinformatics CLI that translates across 9 molecular file formats (including PDB, SDF, Gaussian, and Z-Matrix) via a unified JSON internal-coordinate representation (bond length, bond angle, and torsion angle).",
        "Executed 3D coordinate reconstruction using NumPy rotational matrices with low round-trip RMSD deviation, Kabsch structural alignment, RDKit chemical validity checks, and 376 Pytest unit tests."
      ],
      tags: ["Python", "CLI Tool", "Bioinformatics", "3D Geometry", "RDKit", "Pytest"],
      githubUrl: "https://github.com/kawaiibaka0908/MolConvert",
      featured: false,
      priorityOrder: { sde: 8, ml: 8 }
    }
  ] as Project[],

  skills: {
    languages: ["C++20", "C", "Python", "Solidity", "JavaScript", "TypeScript", "SQL", "Bash"],
    systemsAndCpp: ["STL", "Generic Programming / Templates", "Custom Iterators", "Memory Layout & Bitwise I/O", "Data Structures & Algorithms", "OOP", "Operating Systems", "Computer Networks", "DBMS"],
    machineLearning: ["PyTorch", "TensorFlow 2.x", "Scikit-Learn", "Deep RL (DDDQN, Gymnasium)", "Computer Vision (CNNs, U-Net++)", "BiLSTM", "Transformers"],
    genAIAndNLP: ["LLM-as-a-Judge", "Sentence-Transformers", "TF-IDF Vectorization", "Prompt Engineering", "Structured Outputs (Pydantic)", "Groq / OpenAI / Gemini APIs"],
    backendAndCloud: ["Next.js 15", "React.js", "FastAPI", "Node.js", "Express.js", "Tailwind CSS", "PostgreSQL", "MongoDB", "Docker", "Git / GitHub"],
    coursework: ["Data Structures & Algorithms (CS 101)", "Linear Algebra & Multivariable Calculus", "Probability & Statistics", "Quantum Computing (EE 696)", "Hardware-Aware Deep Learning", "Basic Electronics (EE 101)"]
  },

  achievements: [
    {
      title: "ETHGlobal New Delhi Hackathon — 1st Delegation from IIT Guwahati",
      organization: "ETHGlobal",
      date: "Oct 2025",
      description: "Selected among the first contingent from IIT Guwahati to represent the institute at ETHGlobal New Delhi, building Web3 protocol infrastructure in a 36-hour sprint.",
      badge: "International Hackathon"
    },
    {
      title: "Summer Analytics — Top 10 Percentile Nationwide",
      organization: "Consulting & Analytics Club, IIT Guwahati",
      date: "Jul 2024",
      description: "Ranked in the Top 10% nationwide out of 1,000+ participants in the premier machine learning and neural networks competition.",
      linkText: "View Certificate",
      linkUrl: "https://drive.google.com/file/d/1RewRE5Y_1C9wQFW5D5PqaKRbzYn0mier/view?usp=sharing",
      badge: "National Ranking"
    },
    {
      title: "Product Matters 4.0 Certification",
      organization: "Product Management Club, IIT Guwahati",
      date: "2024",
      description: "Completed intensive product design, user journey mapping, and metric optimization course.",
      linkText: "View Certificate",
      linkUrl: "https://drive.google.com/file/d/1O-hhNzUgDuKVZacZC4g3b_vS1w0fnGwl/view?usp=sharing",
      badge: "Certification"
    },
    {
      title: "Executive Member — Finance & Economics Club",
      organization: "IIT Guwahati",
      date: "Mar 2025 - Apr 2026",
      description: "Spearheaded the Blockchain and Algorithmic Trading curriculum; mentored 200+ undergraduate students across hands-on workshops.",
      badge: "Leadership"
    },
    {
      title: "Hostel Committee Member & Short Film Director (4th Place)",
      organization: "Kapili Hostel, IIT Guwahati",
      date: "Apr 2025 - May 2026",
      description: "Overseeing events and logistics for 400+ residents; directed and scripted short film recognized with 4th Place campus-wide.",
      linkText: "Watch Video",
      linkUrl: "https://www.youtube.com/watch?v=VW5kzMDOuwc",
      badge: "Extracurricular"
    }
  ] as Achievement[]
};
