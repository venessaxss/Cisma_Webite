export type Article = {
  slug: string;
  title: string;
  /** short text shown on the card (2 lines max are visible) */
  excerpt: string;
  /** image shown on the card AND as the hero of the article page (put in /public) */
  image: string;
  /** article body, one string per paragraph. Use **text** for bold. */
  paragraphs: string[];
  /** optional bullet list shown after the paragraphs. Use **text** for bold. */
  bullets?: string[];
};

export const articles: Article[] = [
  {
    slug: "founding-chair-organizer-statement",
    title: "Founding Chair & Organizer Statement",
    excerpt:
      "CISMA was founded with the vision of creating an international space where language scholars can meaningfully engage with technology, corpora, and data-driven research.",
    image: "/founding-statement.png",
    paragraphs: [
      "CISMA was founded with the vision of creating an international space where language scholars can meaningfully engage with technology, corpora, and data-driven research. As corpus linguistics, NLP, and AI increasingly shape the study of discourse, translation, and interpreting, there is a pressing need for platforms that unite methodological rigor with critical and socially informed perspectives. Through CISMA, my aim has been to bridge traditional linguistic inquiry with emerging computational approaches, while encouraging interdisciplinary collaboration across the humanities and social sciences. The conference platform is designed not only to showcase cutting-edge research but also to support early-career scholars and promote global academic exchange. I believe CISMA will continue to contribute to redefining research practices and advancing the future of language sciences in the digital age.",
    ],
  },
  {
    slug: "our-mission",
    title: "Our Mission",
    excerpt:
      "CISMA is dedicated to advancing corpus-informed research by building an international platform for methodological innovation and interdisciplinary exchange.",
    image: "/our-mission.webp",
    paragraphs: [
      "CISMA is dedicated to advancing **corpus-informed research** by building an international platform for methodological innovation and interdisciplinary exchange. The conference aims to:",
    ],
    bullets: [
      "**Promote rigorous corpus methodologies** that are transparent, replicable, and theoretically grounded",
      "**Bridge theory and application** by connecting corpus evidence with real-world questions in humanities-oriented research",
      "**Encourage interdisciplinary collaboration** across corpus linguistics, translation studies, digital humanities, discourse studies, and computational approaches",
      "**Support innovation in tools and practices,** including AI-assisted methods for corpus analysis, corpus construction, and language processing",
      "**Cultivate a global research community** through scholarly dialogue, networking, and long-term partnerships",
    ],
  },
  {
    slug: "significance",
    title: "Significance",
    excerpt:
      "CISMA addresses the growing impact of big data, NLP, and AI-driven tools on language, translation, and discourse studies research.",
    image: "/significance.png",
    paragraphs: [
      "CISMA addresses the growing impact of big data, NLP, and AI-driven tools on language, translation, and discourse studies research. It also:",
    ],
    bullets: [
      "Advances corpus-based and technology-enhanced methodologies in discourse, translation, and interpreting.",
      "Promotes interdisciplinary dialogue across humanities, social sciences, and computational linguistics.",
      "Enhances global visibility and scholarly impact of corpus-based research.",
    ],
  },

  {
    slug: "the-origin-story-of-cisma",
    title: "The Origin Story of CISMA",
    excerpt:
      "By Muhammad Afzaal, Founder & Co Chair. CISMA was not born in a meeting room or through a formal...",
    image: "/cisma-origin.png",

    paragraphs: [
      "CISMA was not born in a meeting room or through a formal proposal. It began as an idea, quiet, persistent, and shaped by years of encountering a simple but powerful truth: language research was changing, and the academic world needed a space that could change with it.",
      "During my early years researching corpus linguistics and discourse studies, I often found myself navigating two academic worlds. On one hand there was the rich, critical tradition of discourse analysis; on the other, the rapidly advancing domain of NLP, algorithms, and big data. These worlds rarely spoke to each other. Conferences were either deeply theoretical or overwhelmingly technical. Scholars working with corpora, digital methods, or computational tools often had no shared platform where technology, language, and social meaning could meet as equals.",
      "The idea for CISMA began taking shape during my time at the Institute of Language Sciences at Shanghai International Studies University. Surrounded by colleagues from linguistics, AI, translation studies, and digital humanities, I realized that the boundaries between our fields were dissolving. Researchers were no longer asking whether technology belonged in language studies, they were already using it. What we lacked was a global, interdisciplinary home where this work could be showcased, challenged, and expanded.",
      "That home became CISMA (Corpus Informed Studies, Methodologies, and Applications).",
      "I founded CISMA with a simple conviction:",
      "Scholars deserve a space where computational tools and humanistic inquiry strengthen rather than overshadow each other.",
      "The first conversations about the conference were informal discussions with colleagues about how corpora could reshape translation research, how NLP could enrich CDA, and how big data could reveal hidden social patterns in discourse. But these conversations kept growing. They turned into planning sessions, partnerships, and eventually, a shared vision supported by institutions and researchers across continents.",
      "CISMA emerged as a platform built on three pillars:",
      "1. Methodological innovation grounded in corpus linguistics and NLP",
      "2. Critical, socially informed analysis of language, discourse, and communication",
      "3. Interdisciplinary collaboration across linguistics, AI, translation studies, media analysis, and social sciences",
      "Today, CISMA is more than a conference, it is a community. A community of researchers who believe in rigorous, data driven scholarship; who see language as both structure and power; and who recognize the transformative potential of technology in understanding society.",
      "Every year, as new participants join from different parts of the world, I am reminded of why CISMA was created:",
      "To give scholars, especially young ones, the opportunity to connect, collaborate, and imagine new futures for language sciences.",
      "And so, CISMA continues to grow. Not as my project, but as our collective platform, shaped by every paper presented, every debate sparked, and every interdisciplinary bridge built.",
      "To everyone who participates, contributes, or simply believes in this vision:",
      "CISMA exists because of you, and it's becoming what it was always meant to be: a global home for the future of corpus informed research."
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}