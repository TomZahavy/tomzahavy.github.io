export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  links: ProjectLink[];
};

export const featuredProjects: Project[] = [
  {
    title: "AlphaProof",
    description:
      "An AI system that taught itself to prove mathematical theorems in Lean, reaching silver-medal performance at the International Mathematical Olympiad through continuous reinforcement learning.",
    links: [
      { label: "Nature", href: "https://www.nature.com/articles/s41586-025-09833-y" },
      { label: "DeepMind blog", href: "https://deepmind.google/discover/blog/ai-solves-imo-problems-at-silver-medal-level/" },
    ],
  },
  {
    title: "COrigami",
    description:
      "Combines reinforcement learning with Gemini to design origami crease patterns, using a semantic representation and visual feedback loop to fold arbitrary target shapes.",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2411.13507" },
    ],
  },
  {
    title: "PuzzleGen",
    description:
      "Generates original chess puzzles with reinforcement learning, rewarding uniqueness, counter-intuitiveness, and novelty. Evaluated by chess grandmasters and featured on lichess and chess.com.",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2406.00073" },
      { label: "chess.com", href: "https://www.chess.com/" },
      { label: "lichess", href: "https://lichess.org/" },
    ],
  },
  {
    title: "AlphaZero db",
    description:
      "Explores diversity in AI decision-making by training a league of agents with distinct playing styles, revealing multiple qualitatively different ways to play chess and Go at a superhuman level.",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2312.08131" },
      { label: "Quanta Magazine", href: "https://www.quantamagazine.org/" },
    ],
  },
  {
    title: "LLMs can't jump",
    description:
      "A position paper examining a fundamental limitation of large language models: their difficulty with abductive reasoning, a capacity central to genuine scientific invention.",
    links: [
      { label: "Paper", href: "https://arxiv.org" },
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
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=&hl=en" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tomzahavy/" },
  { label: "X", href: "https://x.com/TZahavy" },
  { label: "GitHub", href: "https://github.com/tomzahavy" },
];
