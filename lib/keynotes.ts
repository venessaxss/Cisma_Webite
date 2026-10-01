// lib/keynotes.ts
// Keynote Speakers 2026 — data for /keynote-2026 and /keynote-2026/[slug]

export interface Keynote {
  slug: string;
  speakerName: string;
  /** Full title of the talk (hero subtitle + bold heading). Optional. */
  title?: string;
  /** Photo path inside /public, e.g. /keynotes/barbara-siu.png */
  photo: string;
  /** Paragraphs of the abstract, in order */
  abstract: string[];
  keywords?: string;
  /** Optional short bio (rendered under the abstract if present) */
  bio?: string;
}

export const keynotes: Keynote[] = [
  {
    slug: "barbara-wing-yee-siu",
    speakerName: "Barbara Wing-Yee SIU",
    title:
      "Reconsidering Originality in AI-assisted L2 Engineering Reports: A Multidimensional NLP-based Analysis",
    photo: "/keynotes/barbara-siu.webp",
    abstract: [
      "The examination of AI-generated plagiarism has become a critical concern in second language (L2) writing, particularly in safeguarding academic integrity and originality amid the widespread accessibility of large language models (LLMs) among L2 learners. In response to this growing challenge, many higher education institutions (HEIs) have introduced new policies regulating the use of AI in student coursework. The present study addresses this concern by employing Biber's (1988) multidimensional (MD) framework to systematically examine the functional and situational characteristics of students' writing tasks. In doing so, we compiled a large corpus, EngiReport consisting of 250 final-year engineering reports submitted by Chinese L2 students from four departments at a university in Hong Kong S.A.R. The results showed that Dimension3 emerges as the strongest predicator for GenAI rates in the regression analysis, also ranking first in the classification model with the co-efficient 0.7623. In addition, dimensional inclusion analysis further reveals that classification model achieves its hight performance with the combination of Dimension3, Dimension6, Dimension1, Dimension2, yielding a Cohen's Kappa of 0.0666 and an accuracy of 0.3867. A parallel analysis of lexico-grammatical features indicated that model performance peaked with the inclusion of 44 features, led by the type–token ratio (TTR). These findings provide important implications for L2 writing instruction and institutional policies in higher education, offering novel insights into AI–student collaboration in engineering contexts.",
    ],
    keywords:
      "NLP; L2 writing; Assessment; Multidimensional analysis; AI plagiarism; AI-assisted writing",
  },
  {
    slug: "abdel-wahab-khalifa",
    speakerName: "Abdel-Wahab Khalifa",
    title:
      "Translating Islam and Palestine: Digital Diplomacy and the Struggle over Global Meaning",
    photo: "/keynotes/abdel-wahab-khalifa.webp",
    abstract: [
      "Every war is fought twice: once on the ground and once over how its story is told and understood. This second battle is more pervasive, waged through narrative rather than arms, with translation serving as one of its most powerful instruments. This keynote argues that in the digital age, translation functions as a concealed infrastructure of power. Visible as a technical practice yet often inconspicuous in its hegemonic effects, it helps shape what becomes legible, credible and true, pre-structuring interpretation itself.",
      "Through the lens of Islam and Palestine, two of the most relentlessly translated and systematically distorted sites of global meaning-making through which Muslims and Palestinians are made legible in global public culture, I explore how state and non-state actors deploy translation across digital platforms, messaging and algorithmic ecosystems to engineer interpretation. What is at stake is not merely representation but the production of interpretive conditions. Translation operates as a political mechanism that organises how events are perceived, who counts as grievable and which histories enter public recognition. It becomes the process through which legitimacy and threat are unevenly distributed, authorising some subjects as modern, democratic and civilised while casting others as suspect, excessive or backward.",
      "The keynote concludes by tracing how this work of projection changes when it becomes increasingly automated. When geopolitical meaning-making is outsourced to artificial intelligence, historical bias is not erased; it is encoded and naturalised. It becomes scalable, recursive and harder to detect. To examine translation today is to confront one of the central questions of our time: who determines the interpretive conditions under which the world can be understood?",
    ],
  },
  {
    slug: "daria-dayter",
    speakerName: "Daria Dayter",
    // title: "TODO — agar talk ka title ho to yahan add karein (optional)",
    photo: "/keynotes/daria-dayter.webp",
    abstract: [
      "This study investigates the evolving discourses surrounding the term “influencer” within the context of migration from Twitter to BlueSky, using Davies and Harre's (1990) positioning analysis and the methodological toolkit of corpus-assisted discourse analysis. I will first introduce the discourse keyword \"influencer\" and survey its contexts of use on early social media. I will then introduce the relatively new addition to the frontrunners of social media landscape, the microblogging platform BlueSky, which will serve as the data source for the present study.",
      "Using a 1,5 mio words corpus of BlueSky posts, I examine how this term is used and perceived during three waves of user migration from Twitter/X, characterised by their respective sociocultural and platform-specific dynamics (October 2022, Musk’s purchase of Twitter; February 2024, invite no longer needed; November 2024, the US election). I analyse three complementary analytical frames: the collocational profiles of modifier constructions ([adjective/noun] + influencer), keyword distributions across waves, and storyline content of the influencer + be grammatical frame.",
      "I interpret the findings through Positioning Theory, arguing that the data provide corpus-linguistic evidence for the influencer flip: the discursive reversal of the category influencer from a broadly aspirational, commercial identity to a politically coded and institutionally threatening one within this community.",
    ],
  },
  {
    slug: "kaibao-hu",
    speakerName: "Kaibao Hu",
    // TODO: title colon (:) ke baad ka hissa screenshot mein nahi tha — poora title yahan paste karein
    title: "Development of Translation Studies in the Context of Large Language Models",
    photo: "/keynotes/kaibao-hu.webp",
    abstract: [
      "The use of large language models has brought tremendous opportunities and challenges to translation practice and research. Following an introductory account of the development as well as the main features of large language models, this article analyzes the impacts their use has made on translation research and goes on to speculate on the future of translation studies as a result of this new development. It concludes that the use of large language models in translation practice has brought many changes to the subjects of translation and the attributes of translated texts, forcing translation scholars to rethink a wide range of issues concerning translation ethics, translator subjectivity, translator styles and ideology in translation, and it has also brought about changes in methodology of translation research, ushering in a growing trend toward data-driven and visualization-based approaches.",
    ],
  },
  {
    slug: "lei-lei",
    speakerName: "Lei Lei",
    title:
      "The Architecture of Equilibrium: Complexity Trade-offs and the Equi-complexity Hypothesis",
    photo: "/keynotes/lei-lei.webp",
    abstract: [
      "The complexity trade-off hypothesis suggests that difficulty in one linguistic domain, such as word-level morphology, is often counterbalanced by simplicity in another, such as sentence-level syntax. The concept is rooted in the equi-complexity hypothesis, which posits that all human languages maintain a comparable level of total complexity despite their diversity. The principle is significant for understanding how languages are shaped by cognitive constraints and the demands of efficient communication. In this keynote, I will review the current state of research in this field and present our team’s recent findings, which offer new insights into how these trade-offs manifest across diverse language families.",
    ],
  },
];

export function getKeynote(slug: string): Keynote | undefined {
  return keynotes.find((k) => k.slug === slug);
}

export function getAdjacentKeynotes(slug: string) {
  const i = keynotes.findIndex((k) => k.slug === slug);
  return {
    prev: i > 0 ? keynotes[i - 1] : null,
    next: i >= 0 && i < keynotes.length - 1 ? keynotes[i + 1] : null,
  };
}