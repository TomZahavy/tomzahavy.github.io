export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  links: ProjectLink[];
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
      { label: "chess.com story", href: "https://www.chess.com/news/view/ai-learns-to-create-original-chess-puzzles-earns-praise-from-grandmasters" },
      { label: "chess.com video", href: "https://youtube.com/shorts/mSB_c27e1eU?si=8q5V3K_VjskURJ-t" },
      { label: "chess.com puzzles", href: "https://www.chess.com/c/2wCTN7Uv2" },
      { label: "lichess blog", href: "https://lichess.org/@/tomas135/blog/ai-generated-chess-puzzles/j4zc0pmZ" },
      { label: "lichess puzzles", href: "https://lichess.org/study/dLYe8R4f" },
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
  href: string;
};

export type PublicationSection = {
  heading: string;
  items: Publication[];
};

const ME = "Tom Zahavy";

export const publicationSections: PublicationSection[] = [
  {
    heading: "General Objectives for RL",
    items: [
      {
        title: "Reward is enough for convex MDPs",
        authors: [ME, "Brendan O'Donoghue", "Guillaume Desjardins", "Satinder Singh"],
        venue: "NeurIPS 2021 (spotlight)",
        href: "https://arxiv.org/pdf/2106.00661.pdf",
      },
      {
        title: "Discovering Policies with DOMiNO: Diversity Optimization Maintaining Near Optimality",
        authors: [ME, "Yannick Schroecker", "Feryal Behbahani", "Kate Baumli", "Sebastian Flennerhag", "Shaobo Hou", "Satinder Singh"],
        venue: "ICLR 2023",
        href: "https://openreview.net/pdf?id=kjkdzBW3b8p",
      },
      {
        title: "Discovering a set of policies for the worst case reward",
        authors: [ME, "Andre Barreto", "Daniel J Mankowitz", "Shaobo Hou", "Brendan O'Donoghue", "Iurii Kemaev", "Satinder Singh"],
        venue: "ICLR 2021 (spotlight)",
        href: "https://openreview.net/pdf?id=PUkhWz65dy5",
      },
      {
        title: "ReLOAD: Reinforcement Learning with Optimistic Ascent-Descent for Last-Iterate Convergence in Constrained MDPs",
        authors: ["Ted Moskovitz", "Brendan O'Donoghue", "Vivek Veeriah", "Sebastian Flennerhag", "Satinder Singh", ME],
        href: "https://openreview.net/pdf?id=8Hwfncc2Km",
      },
      {
        title: "Discovering Diverse Nearly Optimal Policies with Successor Features",
        authors: [ME, "Brendan O'Donoghue", "Andre Barreto", "Volodymyr Mnih", "Sebastian Flennerhag", "Satinder Singh"],
        href: "https://arxiv.org/pdf/2106.00669.pdf",
      },
      {
        title: "Apprenticeship Learning via Frank-Wolfe",
        authors: [ME, "Alon Cohen", "Haim Kaplan", "Yishay Mansour"],
        venue: "AAAI 2020",
        href: "https://arxiv.org/pdf/1911.01679.pdf",
      },
      {
        title: "Online Apprenticeship Learning",
        authors: ["Lior Shani", ME, "Shie Mannor"],
        venue: "AAAI 2021",
        href: "https://arxiv.org/pdf/1911.01679.pdf",
      },
    ],
  },
  {
    heading: "Meta RL",
    items: [
      {
        title: "A Self-Tuning Actor-Critic Algorithm",
        authors: [ME, "Zhongwen Xu", "Vivek Veeriah", "Matteo Hessel", "Junhyuk Oh", "Hado van Hasselt", "David Silver", "Satinder Singh"],
        venue: "NeurIPS 2020",
        href: "https://proceedings.neurips.cc/paper/2020/file/f02208a057804ee16ac72ff4d3cec53b-Paper.pdf",
      },
      {
        title: "Bootstrapped Meta Learning",
        authors: ["Sebastian Flennerhag", "Yannick Schroecker", ME, "Hado van Hasselt", "David Silver", "Satinder Singh"],
        venue: "ICLR 2022 (Outstanding Paper Award)",
        href: "https://openreview.net/pdf?id=b-ny3x071E5",
      },
      {
        title: "Discovery of Options via Meta-Learned Subgoals",
        authors: ["Vivek Veeriah", ME, "Matteo Hessel", "Zhongwen Xu", "Junhyuk Oh", "Iurii Kemaev", "Hado van Hasselt", "David Silver", "Satinder Singh"],
        venue: "NeurIPS 2021",
        href: "https://openreview.net/pdf?id=AADxnPG-PR",
      },
      {
        title: "POMRL: No-Regret Learning-to-Plan with Increasing Horizons",
        authors: ["Khimya Khetarpal", "Claire Vernade", "Brendan O'Donoghue", "Satinder Singh", ME],
        venue: "TMLR 2023",
        href: "https://arxiv.org/pdf/2212.14530.pdf",
      },
      {
        title: "Balancing Constraints and Rewards with Meta-Gradient D4PG",
        authors: ["Dan A. Calian", "Daniel J. Mankowitz", ME, "Zhongwen Xu", "Junhyuk Oh", "Nir Levine", "Timothy Mann"],
        venue: "ICLR 2021",
        href: "https://openreview.net/pdf?id=TQt98Ya7UMP",
      },
      {
        title: "Meta Gradients in Non Stationary Environments",
        authors: ["Jelena Luketina", "Sebastian Flennerhag", "Yannick Schroecker", "David Abel", ME, "Satinder Singh"],
        venue: "CoLLAs 2022 (Oral)",
        href: "https://openreview.net/pdf?id=SlzBXwZIZ9",
      },
      {
        title: "Optimistic Meta-Gradients",
        authors: ["Sebastian Flennerhag", ME, "Brendan O'Donoghue", "Hado van Hasselt", "András György", "Satinder Singh"],
        href: "https://arxiv.org/pdf/2301.03236.pdf",
      },
      {
        title: "Discovering Evolution Strategies via Meta-Black-Box Optimization",
        authors: ["Robert Tjarko Lange", "Tom Schaul", "Yutian Chen", ME, "Valenti Dallibard", "Chris Lu", "Satinder Singh", "Sebastian Flennerhag"],
        venue: "ICLR 2023",
        href: "https://arxiv.org/pdf/2211.11260.pdf",
      },
      {
        title: "Discovering Attention-Based Genetic Algorithms via Meta-Black-Box Optimization",
        authors: ["Robert Tjarko Lange", "Tom Schaul", "Yutian Chen", "Chris Lu", ME, "Valentin Dallibard", "Sebastian Flennerhag"],
        venue: "GECCO 2023 (Best Paper Award nominee)",
        href: "https://arxiv.org/pdf/2304.03995.pdf",
      },
    ],
  },
  {
    heading: "PhD Work",
    items: [
      {
        title: "A Deep Hierarchical Approach to Lifelong Learning in Minecraft",
        authors: ["Chen Tessler", "Shahar Givony", ME, "Daniel J Mankowitz", "Shie Mannor"],
        venue: "AAAI 2017",
        href: "https://arxiv.org/pdf/1604.07255v3.pdf",
      },
      {
        title: "Learn What Not to Learn: Action Elimination with Deep Reinforcement Learning",
        authors: [ME, "Matan Haroush", "Nadav Merlis", "Daniel J. Mankowitz", "Shie Mannor"],
        venue: "NeurIPS 2018",
        href: "https://arxiv.org/pdf/1809.02121.pdf",
      },
      {
        title: "Graying the black box: Understanding DQNs",
        authors: [ME, "Nir Ben Zrihem", "Shie Mannor"],
        venue: "ICML 2016",
        href: "https://arxiv.org/pdf/1602.02658.pdf",
      },
      {
        title: "Online Limited Memory Neural-Linear Bandits with Likelihood Matching",
        authors: ["Ofir Nabati", ME, "Shie Mannor"],
        venue: "ICML 2021",
        href: "https://openreview.net/pdf?id=PUkhWz65dy5",
      },
      {
        title: "Inverse Reinforcement Learning in Contextual MDPs",
        authors: ["Stav Belogolovsky", "Philip Korsunsky", "Shie Mannor", "Chen Tessler", ME],
        venue: "Machine Learning Journal 2021 (Special Issue on RL for Real Life)",
        href: "https://arxiv.org/pdf/1905.09710.pdf",
      },
      {
        title: "Shallow Updates for Deep Reinforcement Learning",
        authors: ["Nir Levine", ME, "Daniel J. Mankowitz", "Aviv Tamar", "Shie Mannor"],
        venue: "NeurIPS 2017",
        href: "https://arxiv.org/pdf/1705.07461.pdf",
      },
      {
        title: "Planning in Hierarchical Reinforcement Learning: Guarantees for Using Local Policies",
        authors: [ME, "Avinatan Hasidim", "Haim Kaplan", "Yishay Mansour"],
        venue: "ALT 2020",
        href: "https://arxiv.org/pdf/1902.10140.pdf",
      },
    ],
  },
];

export const socialLinks = [
  { label: "Email", href: "mailto:tomzahavy@gmail.com" },
  { label: "Google Scholar", href: "https://scholar.google.co.il/citations?user=9dXN6cMAAAAJ&hl=en" },
  { label: "LinkedIn", href: "https://il.linkedin.com/in/tomzahavy" },
  { label: "X", href: "https://x.com/TZahavy" },
  { label: "GitHub", href: "https://github.com/TomZahavy" },
];
