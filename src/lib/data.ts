export type ProjectLink = {
  label: string;
  href: string;
};

export type LinkGroup = {
  platform: string;
  logo: string;
  invertOnDark?: boolean;
  items: ProjectLink[];
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  links: ProjectLink[];
  linkGroups?: LinkGroup[];
  body: string[];
  /** Render the hero image at its natural aspect ratio (no crop), on white. */
  heroNatural?: { width: number; height: number };
  figure?: { src: string; alt: string; caption?: string };
  video?: string;
  videos?: { id: string; title: string; start?: number }[];
  gallery?: { src: string; title: string }[];
  puzzles?: { name: string; fen: string; url: string }[];
};

export const featuredProjects: Project[] = [
  {
    slug: "alphaproof",
    title: "AlphaProof",
    description:
      "An AI system that taught itself to prove mathematical theorems in Lean, reaching silver-medal performance at the International Mathematical Olympiad through continuous reinforcement learning.",
    image: "/projects/alphaproof.webp",
    heroNatural: { width: 1061, height: 1061 },
    links: [
      { label: "Nature", href: "https://www.nature.com/articles/s41586-025-09833-y" },
      { label: "Blog", href: "https://www.tomzahavy.com/post/how-we-achieved-an-imo-medal-one-year-before-everyone-else" },
      { label: "Announcement", href: "https://deepmind.google/blog/ai-solves-imo-problems-at-silver-medal-level/" },
      { label: "Lean", href: "https://lean-lang.org/" },
    ],
    body: [
      "An agent that self-taught itself Mathematics in Lean and achieved a silver-medal standard in the International Math Olympiad. Starting from a pre-trained LLM exhibiting proficiency in mathematics, AlphaProof embarked on a lifelong Reinforcement Learning journey: proving and disproving theorems, learning from them, and getting better and better.",
      "During the IMO competition, AlphaProof first invented variations of the competition problems and performed a second (test-time) Reinforcement Learning phase, where it tested these variations while attempting to prove the main problems. Over time, its comprehension improved, allowing it to solve all the number theory and algebra questions, including a P6 problem that only five human competitors managed to solve.",
    ],
  },
  {
    slug: "corigami",
    title: "COrigami",
    description:
      "Combines reinforcement learning with Gemini to design origami crease patterns, using a semantic representation and visual feedback loop to fold arbitrary target shapes.",
    image: "/projects/corigami.webp",
    heroNatural: { width: 1400, height: 1192 },
    links: [
      { label: "Paper", href: "https://arxiv.org/pdf/2606.26299v1" },
      { label: "Crease Patterns", href: "/files/origami_samples.zip" },
    ],
    figure: {
      src: "/projects/corigami-pipeline.webp",
      alt: "COrigami pipeline for Gecko, Peacock, and Beetle models: stickfigure, packing, solving, simulation, RL shaping, and designer shaping",
      caption:
        "From semantic stick figure to physical model — packing, solving, simulation, RL shaping, and a designer's final shaping, shown for a gecko, a peacock, and a beetle.",
    },
    gallery: [
      { src: "/projects/origami/peacock.mp4", title: "Peacock" },
      { src: "/projects/origami/moorish-gecko.mp4", title: "Moorish Gecko" },
      { src: "/projects/origami/wyvern.mp4", title: "Wyvern" },
      { src: "/projects/origami/mantis.mp4", title: "Mantis" },
      { src: "/projects/origami/dragonfly.mp4", title: "Dragonfly" },
      { src: "/projects/origami/scorpion.mp4", title: "Scorpion" },
      { src: "/projects/origami/boxer-crab.mp4", title: "Boxer Crab" },
      { src: "/projects/origami/fiddler-crab.mp4", title: "Fiddler Crab" },
      { src: "/projects/origami/deep-sea-lobster.mp4", title: "Deep Sea Lobster" },
      { src: "/projects/origami/hoopoe.mp4", title: "Hoopoe" },
      { src: "/projects/origami/jerboa.mp4", title: "Jerboa" },
      { src: "/projects/origami/ram.mp4", title: "Ram" },
      { src: "/projects/origami/elk.mp4", title: "Elk" },
      { src: "/projects/origami/moose.mp4", title: "Moose" },
      { src: "/projects/origami/bull-moose.mp4", title: "Bull Moose" },
    ],
    body: [
      "Origami is a unique mix of math, art, and design. Creating Origami involves turning abstract concepts into real-world objects. To tackle this, COrigami calls Gemini to generate a semantic stick figure --an abstract JSON code--refined through a visual feedback loop. It then calls custom packing, solving, shaping, and simulation tools. Driven by another self improvement RL loop, the system produces visually recognizable models represented as SVG crease patterns.",
      "Despite scarce data availability, this approach demonstrates how combining RL with frontier models like Gemini can assist human creativity and produce physical art. The generated patterns serve as mathematically grounded starting points for origami artists to fold and shape into a final, physical design.",
    ],
  },
  {
    slug: "puzzlegen",
    title: "PuzzleGen",
    description:
      "Generates original chess puzzles with reinforcement learning, rewarding uniqueness, counter-intuitiveness, and novelty. Evaluated by chess grandmasters and featured on lichess and chess.com.",
    image: "/projects/puzzlegen-puzzles.webp",
    heroNatural: { width: 1264, height: 1332 },
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2510.23881" },
      { label: "GM review", href: "https://arxiv.org/abs/2510.23772" },
    ],
    linkGroups: [
      {
        platform: "chess.com",
        logo: "/logos/chesscom.png",
        items: [
          { label: "story", href: "https://www.chess.com/news/view/ai-learns-to-create-original-chess-puzzles-earns-praise-from-grandmasters" },
          { label: "video", href: "https://youtube.com/shorts/mSB_c27e1eU?si=8q5V3K_VjskURJ-t" },
          { label: "puzzles", href: "https://www.chess.com/c/2wCTN7Uv2" },
        ],
      },
      {
        platform: "lichess",
        logo: "/logos/lichess.png",
        invertOnDark: true,
        items: [
          { label: "blog", href: "https://lichess.org/@/tomas135/blog/ai-generated-chess-puzzles/j4zc0pmZ" },
          { label: "puzzles", href: "https://lichess.org/study/dLYe8R4f" },
        ],
      },
    ],
    puzzles: [
      { name: "Puzzle 1", fen: "1r1r2k1/Q2p1R1p/2p2R2/1p3pB1/1P4q1/8/5K2/8 w - - 0 1", url: "https://lichess.org/study/dLYe8R4f/gB1e3yi1" },
      { name: "Puzzle 2", fen: "1qb5/5k2/P1Qp1bNp/2pP1P2/2P1pP1P/8/3rB1R1/4K3 b - - 0 1", url: "https://lichess.org/study/dLYe8R4f/XgVtlkmn" },
      { name: "Puzzle 3", fen: "rnbqrbk1/pp3Rp1/2p1p1N1/3p1P1Q/3PnB2/2P5/PP3P1P/6K1 w - - 0 1", url: "https://lichess.org/study/dLYe8R4f/pJunW65A" },
      { name: "Puzzle 4", fen: "r4b1k/pq1PN1pp/nn1Q4/2p3P1/2p4P/1Pp5/P7/2KR4 w - - 0 1", url: "https://lichess.org/study/dLYe8R4f/WDSA8sat" },
      { name: "Puzzle 5", fen: "8/4p3/p4p2/P1K2b2/BP1p2k1/2P1n3/3P2P1/8 w - - 0 1", url: "https://lichess.org/study/dLYe8R4f/WS1QOuYQ" },
      { name: "Puzzle 6", fen: "8/3k1p2/3Pb3/2K5/7p/p7/3R2P1/8 b - - 0 1", url: "https://lichess.org/study/dLYe8R4f/GC2KQ4kG" },
      { name: "Puzzle 7", fen: "1q4rk/ppr1PQpp/1b3R2/3R4/1P6/4P3/P5PP/6K1 w - - 0 1", url: "https://lichess.org/study/dLYe8R4f/f3RBXGbv" },
      { name: "Puzzle 8", fen: "6rk/Q7/3q4/5p2/2PP1P2/P5Pr/7P/R4RK1 b - - 0 1", url: "https://lichess.org/study/dLYe8R4f/R7FqNmNF" },
      { name: "Puzzle 9", fen: "r4r1k/6pp/4Q3/5pN1/p2P1P2/1P5P/q5P1/2R4K w - - 0 1", url: "https://lichess.org/study/dLYe8R4f/RYRHmpUn" },
    ],
    videos: [
      { id: "e47VomRFhAU", title: "GothamChess" },
      { id: "DeiD0RVAX7U", title: "Hikaru Nakamura" },
      { id: "exqXJEO5UHo", title: "Jen Shahade", start: 25 },
    ],
    body: [
      "While strong chess players intuitively recognize the beauty of a position, articulating the precise elements that constitute creativity remains elusive. To address this, we pre-trained generative models on public datasets and then applied reinforcement learning, using novel rewards designed for uniqueness, counter-intuitiveness, realism, and novelty. This approach doubled the number of novel chess puzzles compared to the original training data, while successfully maintaining aesthetic diversity.",
      "Three distinguished experts—International Master of chess compositions Amatzia Avni (author of \"Creative Chess\"), Grandmaster Jonathan Levitt (author of \"Secrets of Spectacular Chess\"), and Grandmaster Matthew Sadler (author of \"Game Changer\")—evaluated and selected the puzzles they found most compelling. Their preference was for puzzles exhibiting original, paradoxical, surprising, and naturally occurring positions, with particular emphasis on those that integrated aesthetic themes in innovative ways and demonstrated exceptional over-the-board vision.",
    ],
  },
  {
    slug: "alphazero-db",
    title: "AlphaZero db",
    description:
      "Explores diversity in AI decision-making by training a league of agents with distinct playing styles, revealing multiple qualitatively different ways to play chess at a superhuman level.",
    image: "/projects/azdb.webp",
    heroNatural: { width: 1024, height: 1024 },
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2308.09175" },
      { label: "Quanta", href: "/files/quanta-alphazero.pdf" },
    ],
    body: [
      "Artificial Intelligence (AI) systems have surpassed human intelligence in a variety of computational tasks. However, AI systems, like humans, make mistakes, have blind spots, hallucinate, and struggle to generalize to new situations. We explored whether AI systems can benefit from creative decision-making mechanisms when pushed to the limits of its computational rationality.",
      "AlphaZerodb is a league of AlphaZero agents, represented via a latent-conditioned architecture, and trained with quality-diversity techniques to generate a wider range of ideas. It then selects the most promising ones with sub-additive planning. AlphaZerodb plays chess in diverse ways, solves more puzzles as a group and outperforms a more homogeneous team.",
    ],
  },
  {
    slug: "llms-cant-jump",
    title: "LLMs can't jump",
    description:
      "A position paper examining a fundamental limitation of large language models: their difficulty with abductive reasoning, a capacity central to genuine scientific invention.",
    image: "/projects/llms-cant-jump.webp",
    heroNatural: { width: 1600, height: 893 },
    links: [
      { label: "Position paper", href: "/files/llms-cant-jump.pdf" },
    ],
    body: [
      "I explore the fundamental nature of scientific invention, highlighting the critical gap between the ability of humans to create computational systems from physical intuition and current artificial intelligence capabilities. While modern Generative AI excels at pattern recognition (induction) and logical proofs (deduction), we argue it fundamentally lacks the capacity for \"abduction\"—the intuitive leap required to generate novel explanatory hypotheses.",
      "Using Einstein’s formulation of General Relativity as a case study, we demonstrate that LLMs are structurally incapable of creating new foundational axioms, particularly when observational data is scarce. Ultimately, we propose that integrating physically consistent, multimodal world models is the key to bridging this divide and unlocking true artificial scientific invention.",
    ],
  },
];

export type Publication = {
  title: string;
  authors: string[];
  venue?: string;
  /** Direct link; if omitted, the page links to a Google Scholar title search. */
  href?: string;
  citations: number;
  domains?: string[];
  methods?: string[];
};

export const PUBLICATION_METHODS = [
  "Hierarchical RL",
  "Meta RL",
  "Planning",
  "Intrinsic reward",
  "Diversity",
  "Aesthetics",
] as const;

export const PUBLICATION_DOMAINS = ["Chess", "Math", "Physics", "Games", "Patents"] as const;

const ME = "Tom Zahavy";

// Ordered by Google Scholar citation count (descending).
const basePublications: Publication[] = [
  {
    title: "A Deep Hierarchical Approach to Lifelong Learning in Minecraft",
    authors: ["Chen Tessler", "Shahar Givony", ME, "Daniel J Mankowitz", "Shie Mannor"],
    venue: "AAAI 2017",
    href: "https://arxiv.org/pdf/1604.07255v3.pdf",
    citations: 530,
  },
  {
    title: "Graying the black box: Understanding DQNs",
    authors: [ME, "Nir Ben Zrihem", "Shie Mannor"],
    venue: "ICML 2016",
    href: "https://arxiv.org/pdf/1602.02658.pdf",
    citations: 431,
  },
  {
    title: "Learn What Not to Learn: Action Elimination with Deep Reinforcement Learning",
    authors: [ME, "Matan Haroush", "Nadav Merlis", "Daniel J. Mankowitz", "Shie Mannor"],
    venue: "NeurIPS 2018",
    href: "https://arxiv.org/pdf/1809.02121.pdf",
    citations: 319,
  },
  {
    title: "Deep learning reconstruction of ultrashort pulses",
    authors: [ME, "Alex Dikopoltsev", "Daniel Moss", "Gil Ilan Haham", "Oren Cohen", "Shie Mannor", "et al."],
    venue: "Optica 2018",
    citations: 230,
  },
  {
    title: "Olympiad-level formal mathematical reasoning with reinforcement learning (AlphaProof)",
    authors: ["Thomas Hubert", "Rishi Mehta", "Laurent Sartran", "Miklós Z. Horváth", ME, "et al."],
    venue: "Nature 2025",
    href: "https://www.nature.com/articles/s41586-025-09833-y",
    citations: 178,
  },
  {
    title: "Reward is enough for convex MDPs",
    authors: [ME, "Brendan O'Donoghue", "Guillaume Desjardins", "Satinder Singh"],
    venue: "NeurIPS 2021 (spotlight)",
    href: "https://arxiv.org/pdf/2106.00661.pdf",
    citations: 130,
  },
  {
    title: "A Self-Tuning Actor-Critic Algorithm",
    authors: [ME, "Zhongwen Xu", "Vivek Veeriah", "Matteo Hessel", "Junhyuk Oh", "Hado van Hasselt", "David Silver", "Satinder Singh"],
    venue: "NeurIPS 2020",
    href: "https://proceedings.neurips.cc/paper/2020/file/f02208a057804ee16ac72ff4d3cec53b-Paper.pdf",
    citations: 128,
  },
  {
    title: "Is a picture worth a thousand words? A deep multi-modal architecture for product classification in e-commerce",
    authors: [ME, "Abhinandan Krishnan", "Alessandro Magnani", "Shie Mannor"],
    venue: "AAAI 2018",
    citations: 125,
  },
  {
    title: "Bootstrapped Meta Learning",
    authors: ["Sebastian Flennerhag", "Yannick Schroecker", ME, "Hado van Hasselt", "David Silver", "Satinder Singh"],
    venue: "ICLR 2022 (Outstanding Paper Award)",
    href: "https://openreview.net/pdf?id=b-ny3x071E5",
    citations: 93,
  },
  {
    title: "Discovering Evolution Strategies via Meta-Black-Box Optimization",
    authors: ["Robert Tjarko Lange", "Tom Schaul", "Yutian Chen", ME, "Valenti Dallibard", "Chris Lu", "Satinder Singh", "Sebastian Flennerhag"],
    venue: "ICLR 2023",
    href: "https://arxiv.org/pdf/2211.11260.pdf",
    citations: 82,
  },
  {
    title: "Discovering Policies with DOMiNO: Diversity Optimization Maintaining Near Optimality",
    authors: [ME, "Yannick Schroecker", "Feryal Behbahani", "Kate Baumli", "Sebastian Flennerhag", "Shaobo Hou", "Satinder Singh"],
    venue: "ICLR 2023",
    href: "https://openreview.net/pdf?id=kjkdzBW3b8p",
    citations: 63,
  },
  {
    title: "Discovery of Options via Meta-Learned Subgoals",
    authors: ["Vivek Veeriah", ME, "Matteo Hessel", "Zhongwen Xu", "Junhyuk Oh", "Iurii Kemaev", "Hado van Hasselt", "David Silver", "Satinder Singh"],
    venue: "NeurIPS 2021",
    href: "https://openreview.net/pdf?id=AADxnPG-PR",
    citations: 59,
  },
  {
    title: "Online Limited Memory Neural-Linear Bandits with Likelihood Matching",
    authors: ["Ofir Nabati", ME, "Shie Mannor"],
    venue: "ICML 2021",
    href: "https://openreview.net/pdf?id=PUkhWz65dy5",
    citations: 58,
  },
  {
    title: "Shallow Updates for Deep Reinforcement Learning",
    authors: ["Nir Levine", ME, "Daniel J. Mankowitz", "Aviv Tamar", "Shie Mannor"],
    venue: "NeurIPS 2017",
    href: "https://arxiv.org/pdf/1705.07461.pdf",
    citations: 58,
  },
  {
    title: "Discovering Attention-Based Genetic Algorithms via Meta-Black-Box Optimization",
    authors: ["Robert Tjarko Lange", "Tom Schaul", "Yutian Chen", "Chris Lu", ME, "Valentin Dallibard", "Sebastian Flennerhag"],
    venue: "GECCO 2023 (Best Paper Award nominee)",
    href: "https://arxiv.org/pdf/2304.03995.pdf",
    citations: 56,
  },
  {
    title: "Online Apprenticeship Learning",
    authors: ["Lior Shani", ME, "Shie Mannor"],
    venue: "AAAI 2021",
    href: "https://arxiv.org/pdf/1911.01679.pdf",
    citations: 44,
  },
  {
    title: "Mastering board games by external and internal planning with language models",
    authors: ["John Schultz", "Jakub Adamek", "Matej Jusup", "Marc Lanctot", ME, "et al."],
    venue: "ICML 2025",
    href: "https://openreview.net/pdf?id=KKwBo3u3IW",
    citations: 43,
  },
  {
    title: "Inverse Reinforcement Learning in Contextual MDPs",
    authors: ["Stav Belogolovsky", "Philip Korsunsky", "Shie Mannor", "Chen Tessler", ME],
    venue: "Machine Learning Journal 2021 (Special Issue on RL for Real Life)",
    href: "https://arxiv.org/pdf/1905.09710.pdf",
    citations: 41,
  },
  {
    title: "Diversifying AI: Towards Creative Chess with AlphaZero (AlphaZero db)",
    authors: [ME, "Vivek Veeriah", "Shaobo Hou", "Kevin Waugh", "Matthew Lai", "Edouard Leurent", "Nenad Tomašev", "et al."],
    venue: "arXiv 2023",
    href: "https://arxiv.org/abs/2308.09175",
    citations: 39,
  },
  {
    title: "Ensemble robustness and generalization of stochastic deep learning algorithms",
    authors: [ME, "Bingyi Kang", "Alex Sivak", "Jiashi Feng", "Huan Xu", "Shie Mannor"],
    venue: "arXiv 2016",
    citations: 37,
  },
  {
    title: "Discovering a set of policies for the worst case reward",
    authors: [ME, "Andre Barreto", "Daniel J Mankowitz", "Shaobo Hou", "Brendan O'Donoghue", "Iurii Kemaev", "Satinder Singh"],
    venue: "ICLR 2021 (spotlight)",
    href: "https://openreview.net/pdf?id=PUkhWz65dy5",
    citations: 35,
  },
  {
    title: "Deep learning reconstruction of ultrashort pulses from 2D spatial intensity patterns recorded by an all-in-line system in a single-shot",
    authors: ["Ron Ziv", "Alex Dikopoltsev", ME, "Itay Rubinstein", "Pavel Sidorenko", "Oren Cohen", "et al."],
    venue: "Optics Express 2020",
    citations: 35,
  },
  {
    title: "Balancing Constraints and Rewards with Meta-Gradient D4PG",
    authors: ["Dan A. Calian", "Daniel J. Mankowitz", ME, "Zhongwen Xu", "Junhyuk Oh", "Nir Levine", "Timothy Mann"],
    venue: "ICLR 2021",
    href: "https://openreview.net/pdf?id=TQt98Ya7UMP",
    citations: 33,
  },
  {
    title: "ReLOAD: Reinforcement Learning with Optimistic Ascent-Descent for Last-Iterate Convergence in Constrained MDPs",
    authors: ["Ted Moskovitz", "Brendan O'Donoghue", "Vivek Veeriah", "Sebastian Flennerhag", "Satinder Singh", ME],
    venue: "ICML 2023",
    href: "https://openreview.net/pdf?id=8Hwfncc2Km",
    citations: 32,
  },
  {
    title: "Discovering Diverse Nearly Optimal Policies with Successor Features",
    authors: [ME, "Brendan O'Donoghue", "Andre Barreto", "Volodymyr Mnih", "Sebastian Flennerhag", "Satinder Singh"],
    href: "https://arxiv.org/pdf/2106.00669.pdf",
    citations: 32,
  },
  {
    title: "Systems, method, and non-transitory computer-readable storage media for multi-modal product classification",
    authors: ["Alessandro Magnani", ME, "Abhinandan Krishnan", "Shie Mannor"],
    venue: "US Patent 2019",
    citations: 31,
  },
  {
    title: "Emphatic algorithms for deep reinforcement learning",
    authors: ["Ray Jiang", ME, "Zhongwen Xu", "Adam White", "Matteo Hessel", "Charles Blundell", "Hado van Hasselt"],
    venue: "ICML 2021",
    citations: 28,
  },
  {
    title: "Deep neural networks in single-shot ptychography",
    authors: ["Oshri Wengrowicz", "Or Peleg", ME, "Barry Loevsky", "Oren Cohen"],
    venue: "Optics Express 2020",
    citations: 27,
  },
  {
    title: "Action assembly: Sparse imitation learning for text-based games with combinatorial action spaces",
    authors: ["Chen Tessler", ME, "Deborah Cohen", "Daniel J. Mankowitz", "Shie Mannor"],
    venue: "RLDM 2019",
    citations: 24,
  },
  {
    title: "Apprenticeship Learning via Frank-Wolfe",
    authors: [ME, "Alon Cohen", "Haim Kaplan", "Yishay Mansour"],
    venue: "AAAI 2020",
    href: "https://arxiv.org/pdf/1911.01679.pdf",
    citations: 20,
  },
  {
    title: "Visualizing dynamics: from t-SNE to semi-MDPs",
    authors: ["Nir Ben Zrihem", ME, "Shie Mannor"],
    venue: "ICML Workshop on Human Interpretability in ML 2016",
    citations: 20,
  },
  {
    title: "Unknown mixing times in apprenticeship and reinforcement learning",
    authors: [ME, "Alon Cohen", "Haim Kaplan", "Yishay Mansour"],
    venue: "UAI 2020",
    citations: 19,
  },
  {
    title: "Meta Gradients in Non Stationary Environments",
    authors: ["Jelena Luketina", "Sebastian Flennerhag", "Yannick Schroecker", "David Abel", ME, "Satinder Singh"],
    venue: "CoLLAs 2022 (Oral)",
    href: "https://openreview.net/pdf?id=SlzBXwZIZ9",
    citations: 18,
  },
  {
    title: "Train on validation: squeezing the data lemon",
    authors: ["Guy Tennenholtz", ME, "Shie Mannor"],
    venue: "arXiv 2018",
    citations: 14,
  },
  {
    title: "Planning in Hierarchical Reinforcement Learning: Guarantees for Using Local Policies",
    authors: [ME, "Avinatan Hasidim", "Haim Kaplan", "Yishay Mansour"],
    venue: "ALT 2020",
    href: "https://arxiv.org/pdf/1902.10140.pdf",
    citations: 12,
  },
  {
    title: "PALM up: Playing in the Latent Manifold for Unsupervised Pretraining",
    authors: ["Hao Liu", ME, "Volodymyr Mnih", "Satinder Singh"],
    venue: "NeurIPS 2022",
    citations: 10,
  },
  {
    title: "Sub-Nyquist sampling of OFDM signals for cognitive radios",
    authors: [ME, "Oren Shayer", "Deborah Cohen", "Alexander Tolmachev", "Yonina C. Eldar"],
    venue: "ICASSP 2014",
    citations: 10,
  },
  {
    title: "Optimistic Meta-Gradients",
    authors: ["Sebastian Flennerhag", ME, "Brendan O'Donoghue", "Hado van Hasselt", "András György", "Satinder Singh"],
    href: "https://arxiv.org/pdf/2301.03236.pdf",
    citations: 7,
  },
  {
    title: "Learning to Ask Medical Questions using Reinforcement Learning",
    authors: ["Uri Shaham", ME, "César Caraballo", "Shiwani Mahajan", "Daisy Massey", "Harlan Krumholz"],
    venue: "MLHC 2020",
    citations: 5,
  },
  {
    title: "LLMs can't jump",
    authors: [ME],
    venue: "Position paper 2025",
    href: "/files/llms-cant-jump.pdf",
    citations: 4,
  },
  {
    title: "Methods and systems for constrained reinforcement learning",
    authors: ["Ted Moskovitz", "Brendan O'Donoghue", ME, "Sebastian Flennerhag", "et al."],
    venue: "US Patent 2024",
    citations: 3,
  },
  {
    title: "POMRL: No-Regret Learning-to-Plan with Increasing Horizons",
    authors: ["Khimya Khetarpal", "Claire Vernade", "Brendan O'Donoghue", "Satinder Singh", ME],
    venue: "TMLR 2023",
    href: "https://arxiv.org/pdf/2212.14530.pdf",
    citations: 2,
  },
  {
    title: "Generating Creative Chess Puzzles (PuzzleGen)",
    authors: ["Xifeng Feng", "Vivek Veeriah", "Mark Chiam", "Michael Dennis", "Federico Barbero", "Johan Obando-Ceron", "et al.", ME],
    venue: "NeurIPS 2025",
    href: "https://arxiv.org/abs/2510.23881",
    citations: 1,
  },
  {
    title: "Evaluating In Silico Creativity: An Expert Review of AI Chess Compositions",
    authors: ["Vivek Veeriah", "Federico Barbero", "Mark Chiam", "Xifeng Feng", "Michael Dennis", "Ruchika Pachauri", "Tim Tumiel", ME],
    venue: "arXiv 2025",
    href: "https://arxiv.org/abs/2510.23772",
    citations: 1,
  },
  {
    title: "Reinforcement learning by solution of a convex Markov decision process",
    authors: [ME, "Brendan O'Donoghue", "Guillaume Desjardins", "Satinder Singh"],
    venue: "US Patent 2024",
    citations: 1,
  },
  {
    title: "Acceleration in Policy Optimization",
    authors: ["Veronica Chelu", ME, "Arthur Guez", "Doina Precup", "Sebastian Flennerhag"],
    venue: "arXiv 2023",
    citations: 1,
  },
  {
    title: "Improving techniques for diagnostics of laser pulses by compact representations",
    authors: ["Pavel Sidorenko", "Alex Dikopoltsev", ME, "Oren Lahav", "Sivan Gazit", "Yoav Shechtman", "et al."],
    venue: "Optics Express 2019",
    citations: 1,
  },
  {
    title: "COrigami: An AI Pipeline for Co-Designing Flat-Foldable Visually Recognisable Origami",
    authors: [ME, "Shaobo Hou", "Tim Tumiel", "James Doran", "Francesco Faccio", "Xifeng Feng", "Alex Havrilla", "Iurii Khytryi", "et al."],
    venue: "arXiv 2026",
    href: "https://arxiv.org/abs/2606.26299",
    citations: 0,
  },
  {
    title: "Meta-learned evolutionary strategies optimizer",
    authors: ["Robert Tjarko Lange", "Tom Schaul", "Yutian Chen", ME, "Valentin Dalibard", "Chris Lu", "et al."],
    venue: "US Patent 2024",
    citations: 0,
  },
  {
    title: "Neural network reinforcement learning with diverse policies",
    authors: [ME, "Brendan O'Donoghue", "André Barreto", "Sebastian Flennerhag", "Volodymyr Mnih", "et al."],
    venue: "US Patent 2024",
    citations: 0,
  },
  {
    title: "Learning options for action selection with meta-gradients in multi-task reinforcement learning",
    authors: ["Vivek Veeriah", ME, "Matteo Hessel", "et al."],
    venue: "US Patent 2023",
    citations: 0,
  },
  {
    title: "APART: Diverse Skill Discovery using All Pairs with Ascending Reward and DropouT",
    authors: ["Hadar Schreiber", ME, "Guillaume Desjardins", "Alon Cohen"],
    venue: "EWRL 2023",
    citations: 0,
  },
  {
    title: "Deep Randomized Least Squares Value Iteration",
    authors: ["Guy Adam", ME, "Oron Anschel", "Nahum Shimkin"],
    venue: "2020",
    citations: 0,
  },
];

// Domain/method keyword tags, keyed by exact title. Untagged papers show only
// in the unfiltered (default) view.
const pubTags: Record<string, { domains?: string[]; methods?: string[] }> = {
  "A Deep Hierarchical Approach to Lifelong Learning in Minecraft": { methods: ["Hierarchical RL"], domains: ["Games"] },
  "Graying the black box: Understanding DQNs": { domains: ["Games"] },
  "Learn What Not to Learn: Action Elimination with Deep Reinforcement Learning": { domains: ["Games"] },
  "Deep learning reconstruction of ultrashort pulses": { domains: ["Physics"] },
  "Olympiad-level formal mathematical reasoning with reinforcement learning (AlphaProof)": { methods: ["Planning"], domains: ["Math"] },
  "Reward is enough for convex MDPs": { methods: ["Intrinsic reward"] },
  "A Self-Tuning Actor-Critic Algorithm": { methods: ["Meta RL"], domains: ["Games"] },
  "Bootstrapped Meta Learning": { methods: ["Meta RL"], domains: ["Games"] },
  "Discovering Evolution Strategies via Meta-Black-Box Optimization": { methods: ["Meta RL"] },
  "Discovering Policies with DOMiNO: Diversity Optimization Maintaining Near Optimality": { methods: ["Diversity"] },
  "Discovery of Options via Meta-Learned Subgoals": { methods: ["Hierarchical RL", "Meta RL"] },
  "Shallow Updates for Deep Reinforcement Learning": { domains: ["Games"] },
  "Discovering Attention-Based Genetic Algorithms via Meta-Black-Box Optimization": { methods: ["Meta RL"] },
  "Mastering board games by external and internal planning with language models": { methods: ["Planning"], domains: ["Chess", "Games"] },
  "Diversifying AI: Towards Creative Chess with AlphaZero (AlphaZero db)": { methods: ["Diversity", "Aesthetics", "Planning"], domains: ["Chess", "Games"] },
  "Discovering a set of policies for the worst case reward": { methods: ["Diversity"] },
  "Deep learning reconstruction of ultrashort pulses from 2D spatial intensity patterns recorded by an all-in-line system in a single-shot": { domains: ["Physics"] },
  "Balancing Constraints and Rewards with Meta-Gradient D4PG": { methods: ["Meta RL"] },
  "Discovering Diverse Nearly Optimal Policies with Successor Features": { methods: ["Diversity"] },
  "Deep neural networks in single-shot ptychography": { domains: ["Physics"] },
  "Action assembly: Sparse imitation learning for text-based games with combinatorial action spaces": { domains: ["Games"] },
  "Visualizing dynamics: from t-SNE to semi-MDPs": { methods: ["Hierarchical RL"], domains: ["Games"] },
  "Meta Gradients in Non Stationary Environments": { methods: ["Meta RL"] },
  "Planning in Hierarchical Reinforcement Learning: Guarantees for Using Local Policies": { methods: ["Hierarchical RL", "Planning"] },
  "PALM up: Playing in the Latent Manifold for Unsupervised Pretraining": { methods: ["Intrinsic reward"] },
  "Optimistic Meta-Gradients": { methods: ["Meta RL"] },
  "LLMs can't jump": { domains: ["Physics", "Math"] },
  "POMRL: No-Regret Learning-to-Plan with Increasing Horizons": { methods: ["Meta RL", "Planning"] },
  "Generating Creative Chess Puzzles (PuzzleGen)": { methods: ["Aesthetics", "Diversity"], domains: ["Chess", "Games"] },
  "Evaluating In Silico Creativity: An Expert Review of AI Chess Compositions": { methods: ["Aesthetics"], domains: ["Chess", "Games"] },
  "Reinforcement learning by solution of a convex Markov decision process": { methods: ["Intrinsic reward"], domains: ["Patents"] },
  "Improving techniques for diagnostics of laser pulses by compact representations": { domains: ["Physics"] },
  "COrigami: An AI Pipeline for Co-Designing Flat-Foldable Visually Recognisable Origami": { methods: ["Aesthetics"], domains: ["Math"] },
  "Meta-learned evolutionary strategies optimizer": { methods: ["Meta RL"], domains: ["Patents"] },
  "Neural network reinforcement learning with diverse policies": { methods: ["Diversity"], domains: ["Patents"] },
  "Learning options for action selection with meta-gradients in multi-task reinforcement learning": { methods: ["Hierarchical RL", "Meta RL"], domains: ["Patents"] },
  "Systems, method, and non-transitory computer-readable storage media for multi-modal product classification": { domains: ["Patents"] },
  "Methods and systems for constrained reinforcement learning": { domains: ["Patents"] },
  "APART: Diverse Skill Discovery using All Pairs with Ascending Reward and DropouT": { methods: ["Diversity"] },
};

export const publications: Publication[] = basePublications.map((p) => ({
  ...p,
  ...pubTags[p.title],
}));

export const socialLinks = [
  { label: "Email", href: "mailto:tomzahavy@gmail.com" },
  { label: "Google Scholar", href: "https://scholar.google.co.il/citations?user=9dXN6cMAAAAJ&hl=en" },
  { label: "LinkedIn", href: "https://il.linkedin.com/in/tomzahavy" },
  { label: "X", href: "https://x.com/TZahavy" },
  { label: "GitHub", href: "https://github.com/TomZahavy" },
];
