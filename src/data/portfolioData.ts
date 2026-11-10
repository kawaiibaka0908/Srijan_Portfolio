export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ('sde' | 'ml' | 'systems' | 'web3')[];
  period: string;
  description: string;
  story: string;
  takeaways: string[];
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
    tagline: "Final-year undergrad at IIT Guwahati",
    subheading: "I like building fast systems in modern C++, low-latency stream processing pipelines, and practical ML models that actually solve a problem.",
    location: "Guwahati, India",
    email: "tiwarisrijan612@gmail.com",
    instituteEmail: "t.srijan@iitg.ac.in",
    phone: "+91-9956302266",
    github: "https://github.com/kawaiibaka0908",
    githubUsername: "kawaiibaka0908",
    linkedin: "https://www.linkedin.com/in/srijan-tiwari-215a3a286/",
    college: "Indian Institute of Technology (IIT), Guwahati",
    degree: "B.Tech in Biosciences & Bioengineering",
    batch: "2023 — 2027",
    statusBadge: "Available for SDE & ML / Data Science roles (2026/2027)",
    currently: "Exploring low-latency streaming engines, zero-knowledge proofs, and deep RL.",
  },
  
  experiences: [
    {
      company: "Genuity IO",
      role: "Lead Software Engineer, Synthetic Data Division",
      location: "Bengaluru, India (Remote / Hybrid)",
      period: "May 2026 — Jul 2026",
      description: "Spent the summer leading a 6-person team building Genuity v2.0 — a modular synthetic data engine that generates realistic tabular, time-series, and relational data without leaking private records.",
      bullets: [
        "Led architecture and sprint delivery for a team of 6 engineers, rolling out 20+ generative models (CTGAN, TVAE, TabDDPM) directly into the core Vulpix platform.",
        "Built an end-to-end benchmarking suite comparing statistical similarity, downstream ML model utility, and differential privacy across 11 public datasets.",
        "Engineered production backend services using FastAPI, PostgreSQL, and Docker, successfully deploying the engine for enterprise testing with L&T Technology Services."
      ],
      technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "CTGAN", "Differential Privacy", "Benchmarking"]
    }
  ] as Experience[],

  projects: [
    {
      id: "barely-tokenized",
      title: "Barely Tokenized",
      subtitle: "Decentralized P2P Smart-Grid Marketplace",
      category: ["sde", "web3"],
      period: "Jan 2025 — Feb 2025",
      description: "A decentralized peer-to-peer microgrid where neighbors trade surplus rooftop solar energy directly, using zero-knowledge proofs so no one has to reveal private balances or consumption habits.",
      story: "During the Kriti inter-hostel technical competition, I designed the full system architecture from scratch. We wanted small households with solar panels to sell excess units directly to their neighbors instead of taking a loss through a central grid. I hooked up Solidity smart contracts with ZoKrates ZK-SNARK circuits for private balance proofs, and built an Express + MongoDB backend and Next.js frontend to visualize real-time power trades.",
      takeaways: [
        "Implemented 2 zero-knowledge circuits (ZoKrates) to verify buyer balances and energy reserves before settling transactions on Ethereum Sepolia.",
        "Created an order-matching algorithm with dynamic market-cap bounds, automated price discovery, and a grid-operator fallback if local supplies fall short.",
        "Shipped a full Next.js + Tailwind web application with wallet auth, live transaction telemetry, and a custom Carbon Credit tracker."
      ],
      tags: ["Solidity", "ZK-SNARKs", "ZoKrates", "Next.js", "Node.js", "Express", "MongoDB", "Web3.js", "Tailwind CSS"],
      githubUrl: "https://github.com/kawaiibaka0908/KRITI_ENERGY_CHAIN",
      videoUrl: "https://drive.google.com/file/d/1QHKvVlQwnsDzCoNIeCn7VcSn22CsA_Wc/view?usp=sharing",
      featured: true,
      priorityOrder: { sde: 1, ml: 5 }
    },
    {
      id: "cpp-image-engine",
      title: "C++ Image Engine & Custom STL Library",
      subtitle: "Header-Only Image Processing, Bitwise Huffman Codec & Containers",
      category: ["sde", "systems"],
      period: "Feb 2026 — Mar 2026",
      description: "A standalone C++ image processing framework and generic container library written completely from scratch to understand low-level byte packing, custom allocators, and STL iterators without standard library shortcuts.",
      story: "I wanted to deeply understand how memory layout and spatial algorithms work under the hood in C++. I wrote a binary parser for 24-bit uncompressed BMP images with row padding and endianness handling, then implemented custom spatial convolution kernels (Sobel, Scharr, Gaussian blur). On top of that, I built a bit-level Huffman compression engine with 64KB buffered stream readers and reimplemented 6 core data structures with STL-compliant iterators.",
      takeaways: [
        "Parsed raw 24-bit BMP binary headers with row-stride alignment and built spatial image filters (Sobel edge detection, Gaussian blur) without external dependencies.",
        "Engineered a bit-level Huffman compressor with 64KB buffered I/O streams and recursive serialization for serializing variable-length binary trees.",
        "Implemented generic array, linked lists, stacks, and queues with random-access and bidirectional iterators, alongside a multicast delegate event system."
      ],
      tags: ["C++", "Templates", "Custom Iterators", "Bit Manipulation", "STL Containers", "Image Processing"],
      githubUrl: "https://github.com/kawaiibaka0908/Image_library_Cpp",
      githubUrl2: "https://github.com/kawaiibaka0908/DAS_Implementation",
      github2Label: "STL / Containers Repo",
      featured: true,
      priorityOrder: { sde: 2, ml: 6 }
    },
    {
      id: "router-quest",
      title: "Router Quest",
      subtitle: "Fuel-Constrained Graph Routing & Optimization Solver",
      category: ["sde", "systems"],
      period: "Nov 2025 — Dec 2025",
      description: "A fast C++ pathfinder that solves a fuel-constrained pickup-and-delivery problem on weighted graphs where vehicles must plan detour refuel stops without running dry.",
      story: "This was a challenge solving an NP-hard variant of vehicle routing: you have a fleet of delivery orders with pickup and dropoff precedence constraints, but your truck has a fixed fuel tank capacity and can only refuel at specific nodes. I precomputed all-pairs shortest paths using Floyd-Warshall, stored parent pointers for fast route reconstruction, and layered a 2-step lookahead greedy search with multi-start heuristics to find valid, fuel-safe paths in milliseconds.",
      takeaways: [
        "Precomputed all-pairs shortest paths via Floyd-Warshall and reconstructed exact paths using parent pointer backtracking.",
        "Designed a 2-step lookahead fuel feasibility check that dynamically reroutes trucks to the nearest charging/refueling station before tank exhaustion.",
        "Included multi-start randomized greedy restarts and an automated route validator to verify zero constraint violations."
      ],
      tags: ["C++", "Graph Algorithms", "Floyd-Warshall", "Optimization", "Greedy Heuristics"],
      githubUrl: "https://github.com/kawaiibaka0908/Router_Quest",
      featured: true,
      priorityOrder: { sde: 3, ml: 7 }
    },
    {
      id: "promo-finder",
      title: "Promo Finder",
      subtitle: "Script-to-Promo Extraction Pipeline with LLM-as-a-Judge",
      category: ["ml"],
      period: "Oct 2026 — Nov 2026",
      description: "A pipeline that reads screenplay scripts, analyzes scene tension and pacing, and uses an LLM judge to automatically extract the punchiest 20-to-60 second trailer clips.",
      story: "Built for an on-campus recruiting process challenge. Rather than relying on simple keyword matching, I broke movie and TV scripts down into structured Pydantic scene beats. The pipeline models dramatic intensity every quarter-second by combining speaker transition pace, sound effect frequency, and Sentence-Transformer (MiniLM) tone embeddings. Candidate clips are then evaluated by an LLM judge (Gemma-26B) on hook strength, tension, and spoiler risk.",
      takeaways: [
        "Parsed unstructured screenplays into timestamped Pydantic scene schemas, isolating candidates for 20-to-60-second teasers with 3-second opening hooks.",
        "Scored scene intensity using MiniLM embedding distances combined with camera cut and dialogue cues.",
        "Implemented an LLM-as-a-Judge evaluation prompt with Gemma-26B to rate clip quality across hook strength, cliffhanger pacing, clarity, and spoiler safety."
      ],
      tags: ["Python", "Generative AI", "Sentence-Transformers", "LLM Evaluation", "Streamlit", "Pydantic", "Pytest"],
      githubUrl: "https://github.com/kawaiibaka0908/Promo-Extraction",
      featured: true,
      priorityOrder: { sde: 5, ml: 1 }
    },
    {
      id: "deep-rl-trading",
      title: "Deep RL Algorithmic Trading",
      subtitle: "Bitcoin Trading Agent with DDDQN & Prioritized Replay",
      category: ["ml"],
      period: "Jan 2026 — Feb 2026",
      description: "An autonomous trading agent trained on 5 years of daily Bitcoin candlestick bars using Dueling Double Deep Q-Networks and temporal advantage streams.",
      story: "I wanted to test whether deep reinforcement learning could learn non-trivial trading rules under realistic market friction. I wrapped 1,820 daily Bitcoin bars with technical indicators (RSI, MACD, Bollinger Bands) into a custom Gymnasium environment. The agent trades with discrete Buy, Sell, and Hold actions while factoring in a 0.1% (10 bps) fee per transaction, dynamic stop-losses, and drawdown penalties.",
      takeaways: [
        "Separated state-value and action-advantage streams using a Dueling Double DQN architecture with a Bidirectional LSTM temporal encoder.",
        "Simulated real trading friction in a custom Gymnasium environment: 10 bps slippage/brokerage fees, position sizing limits, and portfolio drawdown penalties.",
        "Implemented Prioritized Experience Replay (PER) with importance-sampling bias correction, cutting convergence time down to ~500 episodes."
      ],
      tags: ["Python", "TensorFlow 2", "Reinforcement Learning", "DDDQN", "BiLSTM", "Gymnasium", "Quantitative Finance"],
      githubUrl: "https://github.com/kawaiibaka0908/Algorithmic_Trading_DeepRL",
      featured: true,
      priorityOrder: { sde: 6, ml: 2 }
    },
    {
      id: "ai-candidate-ranker",
      title: "Streaming Candidate Search Engine",
      subtitle: "High-Throughput Ranking & Anomaly Filter (100k Records in 120MB RAM)",
      category: ["sde", "ml"],
      period: "May 2026 — Jun 2026",
      description: "A fast stream-processing engine that ranks 100,000 applicant profiles in under 65 seconds using a bounded min-heap and TF-IDF—staying completely within 120MB of RAM.",
      story: "I built this to see how much performance I could extract out of a single-pass streaming Python service without spinning up heavy databases or Docker containers. It streams in a 487MB dataset record-by-record, computes TF-IDF similarity, applies a 20-feature scoring rule, filters out anomaly traps (like keyword stuffing and impossible career dates), and keeps only the Top-K candidates in an O(N log K) bounded min-heap. Deployed live on Hugging Face Spaces with Gradio.",
      takeaways: [
        "Processes 100,000 profiles (487MB) in under 65 seconds while keeping peak RAM usage below 120MB using single-pass bounded heap evaluation.",
        "Filters suspicious applicants through a 20-feature rule engine catching keyword stuffers, overlapping date gaps, and honeypot claims.",
        "Generates clear, deterministic recruiter explanations for each ranked profile, served via a live interactive Gradio web app."
      ],
      tags: ["Python", "Stream Processing", "Bounded Min-Heap", "TF-IDF", "Gradio", "Hugging Face Spaces"],
      githubUrl: "https://github.com/kawaiibaka0908/ai-candidate-ranker",
      demoUrl: "https://huggingface.co/spaces/kawaiibaka0908/ai-candidate-ranker",
      featured: true,
      priorityOrder: { sde: 4, ml: 3 }
    },
    {
      id: "semantic-image-segmentation",
      title: "Semantic Image Segmentation with U-Net++",
      subtitle: "Pixel-Wise Deep Learning with Nested Skip Pathways",
      category: ["ml"],
      period: "May 2025 — Jun 2025",
      description: "A semantic segmentation model for aerial/satellite RGB images using nested U-Net++ skip connections and combined Dice + Cross-Entropy loss.",
      story: "Standard U-Nets can lose fine boundary details when bridging encoder and decoder layers. I built an optimized U-Net++ architecture with dense nested skip pathways to reduce semantic gaps between feature maps. Using combined Dice and Cross-Entropy loss, the model handles imbalanced pixel classes cleanly, reaching 80% validation accuracy with 230ms inference per image.",
      takeaways: [
        "Constructed a nested U-Net++ encoder-decoder (32 to 512 channels) with intermediate skip convolutions and dropout regularization.",
        "Tackled background-to-foreground pixel imbalance using a combined Dice Loss + Cross-Entropy objective function.",
        "Vectorized RGB-to-mask conversion with NumPy and applied morphological closing to sharpen output segmentation boundaries."
      ],
      tags: ["Deep Learning", "Computer Vision", "U-Net++", "NumPy", "Dice Loss", "Image Segmentation"],
      githubUrl: "https://github.com/kawaiibaka0908/Image_Segmentation",
      featured: false,
      priorityOrder: { sde: 7, ml: 4 }
    },
    {
      id: "molconvert",
      title: "MolConvert: Multi-Format Molecular CLI",
      subtitle: "Structural Bioinformatics Format Compiler & 3D Reconstruction",
      category: ["sde", "systems"],
      period: "Jun 2026 — Jul 2026",
      description: "A command-line tool that converts between 9 chemistry file formats (PDB, SDF, Gaussian, Z-matrix) with 3D coordinate reconstruction and 376 unit tests.",
      story: "For a computational biology course project, I was tired of incompatible molecular file formats. I built a modular Python CLI that parses 9 chemical formats into a single internal JSON intermediate representation (storing bond lengths, angles, and torsions). It reconstructs 3D Cartesian coordinates using rotation matrices and is verified with 376 Pytest unit tests.",
      takeaways: [
        "Designed a JSON intermediate representation to convert across 9 molecular file formats without point-to-point translation logic.",
        "Reconstructed 3D coordinates from internal bond metrics using NumPy rotational matrices and verified chemical validity with RDKit.",
        "Maintained a test suite of 376 automated Pytest cases across round-trip format conversions."
      ],
      tags: ["Python", "CLI Tool", "Bioinformatics", "3D Geometry", "RDKit", "Pytest"],
      githubUrl: "https://github.com/kawaiibaka0908/MolConvert",
      featured: false,
      priorityOrder: { sde: 8, ml: 8 }
    }
  ] as Project[],

  skills: {
    languages: ["C++", "C", "Python", "Solidity", "JavaScript", "TypeScript", "SQL", "Bash"],
    systemsAndCpp: ["C++", "Templates & Generic Programming", "Custom Iterators", "Memory Layout & Bitwise I/O", "Data Structures & Algorithms", "Operating Systems", "Computer Networks", "DBMS"],
    machineLearning: ["PyTorch", "TensorFlow 2.x", "Deep RL (DDDQN, Gymnasium)", "Computer Vision (U-Net++, CNNs)", "Scikit-Learn", "BiLSTM", "Transformers"],
    genAIAndNLP: ["LLM-as-a-Judge Evaluation", "Sentence-Transformers", "TF-IDF Vectorization", "Prompt Engineering", "Pydantic Schemas", "OpenAI / Gemini / Groq APIs"],
    backendAndCloud: ["Next.js 15", "React.js", "FastAPI", "Node.js", "Express.js", "Tailwind CSS", "PostgreSQL", "MongoDB", "Docker", "Git"],
    coursework: ["Data Structures & Algorithms", "Linear Algebra & Differential Equations", "Probability & Statistics", "Quantum Computing", "Hardware-Aware Deep Learning"]
  },

  achievements: [
    {
      title: "ETHGlobal New Delhi Hackathon — 1st Team from IIT Guwahati",
      organization: "ETHGlobal",
      date: "Oct 2025",
      description: "Part of the very first team from our campus to qualify and travel to ETHGlobal New Delhi. We spent an intense 36-hour sprint building decentralized infrastructure alongside builders from around the world.",
      badge: "Hackathon"
    },
    {
      title: "Summer Analytics — Top 10% Nationwide",
      organization: "Consulting & Analytics Club, IIT Guwahati",
      date: "Jul 2024",
      description: "Placed in the top 10 percentile among 1,000+ competitors in IITG's flagship summer machine learning and neural networks competition.",
      linkText: "View Certificate",
      linkUrl: "https://drive.google.com/file/d/1RewRE5Y_1C9wQFW5D5PqaKRbzYn0mier/view?usp=sharing",
      badge: "Competition"
    },
    {
      title: "Product Matters 4.0 Certification",
      organization: "Product Management Club, IIT Guwahati",
      date: "2024",
      description: "Completed intensive training in user research, metric optimization, and product wireframing.",
      linkText: "View Certificate",
      linkUrl: "https://drive.google.com/file/d/1O-hhNzUgDuKVZacZC4g3b_vS1w0fnGwl/view?usp=sharing",
      badge: "Product"
    },
    {
      title: "Core Team Member — Finance & Economics Club",
      organization: "IIT Guwahati",
      date: "Mar 2025 — Apr 2026",
      description: "Led the blockchain and algorithmic trading modules for our club, mentoring over 200 junior students in technical workshops.",
      badge: "Campus Leadership"
    },
    {
      title: "Hostel Committee Member & 4th Place Short Film Director",
      organization: "Kapili Hostel, IIT Guwahati",
      date: "Apr 2025 — May 2026",
      description: "Organized hostel events for 400+ residents. Outside tech, I wrote and directed a campus short film that earned 4th place.",
      linkText: "Watch the Short Film",
      linkUrl: "https://www.youtube.com/watch?v=VW5kzMDOuwc",
      badge: "Creative"
    }
  ] as Achievement[]
};
