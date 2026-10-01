// app/memory/page.tsx

export const metadata = {
  title: "Memory | CISMA",
};

// Jitni photos hain utni yahan barha dein
const TOTAL_PHOTOS = 20;

const photos = Array.from({ length: TOTAL_PHOTOS }, (_, i) => ({
  src: `/memory/cisma-2026/${String(i + 1).padStart(2, "0")}.webp`,
  alt: `CISMA 2026 photo ${i + 1}`,
}));

const importantDates = [
  {
    title: "Abstract Submission (EXTENDED)",
    date: "12:00 AM (UTC), APRIL 8TH, 2026",
  },
  {
    title: "Notification of Acceptance",
    date: "April 10th, 2026",
  },
  {
    title: "Conference Date",
    date: "April 30th, 2026",
  },
];

const organizingTeam = [
  {
    name: "Co-chair: Hamlet Isaxanli",
    image: "/team/hamlet-isaxanli.webp",
  },
  {
    name: "Milana Abbasova",
    image: "/team/milana-abbasova.webp",
  },
  {
    name: "Muhammad Imran",
    image: "/team/muhammad-imran.webp",
  },
];

// Submission button ka link (apna asal link yahan daal dein)
const SUBMISSION_URL = "#";

const topics = [
  {
    title: "Technology in Discourse Analysis",
    desc: "Applications of topic modeling, and AI-driven tools in critical discourse analysis.",
    image: "/topics/technology-discourse.png",
  },
  {
    title: "Corpora and Language Sciences",
    desc: "Innovations in corpus linguistics for advancing language studies and pedagogy.",
    image: "/topics/corpora-language-sciences.png",
  },
  {
    title: "Digital Diplomacy and Global Discourse",
    desc: "Exploring the narratives and power structures in the digital age.",
    image: "/topics/digital-diplomacy.png",
  },
  {
    title: "Corpora in Translation Studies",
    desc: "Enhancing translation practices through data-driven insights.",
    image: "/topics/corpora-translation.png",
  },
  {
    title: "Interdisciplinary Approaches",
    desc: "The role of corpora in bridging humanities, social sciences, and computational research.",
    image: "/topics/interdisciplinary.png",
  },
  {
    title: "NLP and Sentiment Analysis",
    desc: "Cutting-edge NLP methods for analyzing sentiment and emotions",
    image: "/topics/nlp-sentiment.png",
  },
  {
    title: "Opinion mining in social, political, and cultural discourse",
    desc: "",
    image: "/topics/opinion-mining.png",
  },
];

const keynoteBios = [
  {
    name: "Kaibao Hu",
    image: "/keynotes/kaibao-hu.webp",
    bio: "Prof. Hu has more than 20 years of research experience in corpus-based translation studies, published 100 papers in journals indexed in CSSCI, SSCI, A & HCI, and 9 academic monographs in publishers such as Springer and China's Higher Education Press. He is also investigator of over 13 projects on national level. In 2017 and 2020, he was admitted into the list of the most influential scholars in the research of philosophy and Social Sciences in China and the distinguished professor of the national major talent plan.",
  },
  {
    name: "Muhammad Afzaal",
    image: "/keynotes/muhammad-afzaal.webp",
    bio: "Dr. Muhammad Afzaal joined the Institute of Corpus Studies and Applications at Shanghai International Studies University, China, as an Associate Professor after earning his PhD from Shanghai Jiao Tong University, China. He also brings extensive research experience as a fellow at the Hong Kong Polytechnic University, Hong Kong, and nine years of teaching experience at Foundation University Islamabad, Pakistan. Dr. Afzaal is the author of two notable books: Corpora and Discourses of the Belt and Road Initiative (2023, Springer Nature) and Language, Corpora, and Technology in Applied Linguistics. He has also significantly contributed to the field of corpus linguistics through the development of LexiConc, a corpus tool designed for generating concordances and lexical bundles, which has become a valuable resource for researchers. Dr. Afzaal has published extensively in SSCI, Scopus, and ESCI-indexed international journals.",
  },
  {
    name: "Lei Lei",
    image: "/keynotes/lei-lei.webp",
    bio: "Lei Lei is Professor of Applied Linguistics at Shanghai International Studies University. His research focuses on corpus- and NLP-based lexical and syntactic analyses of Modern and Classical Chinese and English. He is also interested in second language writing and digital humanities. He has authored five books, including a title with Cambridge University Press, and over 50 articles in international journals such as Applied Linguistics, Journal of Second Language Writing, Language Teaching, System, and Corpus Linguistics and Linguistics Theory. Dr. Lei has also published extensively in home journals in China, and led two China National Social Science Fund projects. He serves as an editorial board member for Journal of English for Academic Purposes and as an associate editor for Corpus-based Studies Across Humanities (De Gruyter).",
  },
  {
    name: "Abdel-Wahab Khalifa",
    image: "/keynotes/abdel-wahab-khalifa.webp",
    bio: "Abdel-Wahab Khalifa is Senior Lecturer (Associate Professor) in Translation and Interpreting at Queen's University Belfast. His research examines the sociopolitical dimensions of translation, including soft power, propaganda, diplomacy, and the social history of translation in Arabo-Islamic contexts. He has published in leading journals including The British Journal of Middle Eastern Studies, The Translator, Diplomatica and Perspectives, and contributed to major reference works including the Routledge Handbook of Arabic Translation. His work includes Translation of Arabic Literature in the United Kingdom and Ireland, The Routledge Handbook of Arabic Translation, Translation and the Power of Agency, and the forthcoming Translating Modernity. He sits on the advisory boards of several journals and academic programmes, on the executive board of the Association for Translation Studies in Africa, and is a member of the IATIS Regional Workshop Committee. He is Editor-in-Chief of The Translator and co-editor of Encounters in Translation.",
  },
  {
    name: "Daria Dayter",
    image: "/keynotes/daria-dayter.webp",
    bio: "Daria Dayter is Associate Professor of English Linguistics at Tampere University, Finland. She holds a PhD from the University of Bayreuth, Germany, and a habilitation from the University of Basel, Switzerland. Her research interests include Global and digital English, corpus linguistics, and discourse analysis. She serves as Editor-in-Chief of Pragmatics & Society and has held editorial roles for Target, Discourse Studies, and Internet Pragmatics. She is Director of the PLURAL research centre at Tampere University and has served on university governance committees at the University of Basel. She is a member of several international scholarly associations, including the Association of Internet Researchers and the International Pragmatics Association.",
  },
  {
    name: "Barbara W.Y. SIU",
    image: "/keynotes/barbara-siu.webp",
    bio: "Barbara Wing-Yee SIU is a Senior Lecturer in the Department of Civil and Environmental Engineering at The Hong Kong Polytechnic University. She obtained her PhD in Civil and Environmental Engineering from the Hong Kong University of Science and Technology in 2009. With over 15 years of teaching experience, she has developed and led courses in transportation engineering while actively pursuing education research in areas such as online and blended learning, internationalization, and communication enhancement. Dr. Siu is a Chartered Engineer and Senior Fellow of the Higher Education Academy, and her contributions to teaching innovation have been recognized with multiple Faculty-level awards.",
  },
];

const KNOW_MORE_URL = "https://khazar.org/en/announce/5000";
const ABSTRACTS_URL = "https://drive.google.com/file/d/13Qsd63i6iC7HUXSc2VdYw6w68Vh6ONiz/view";

const HIGHLIGHT_COUNT = 9;

const highlightPhotos = Array.from({ length: HIGHLIGHT_COUNT }, (_, i) => ({
  src: `/highlights/cisma-2024/${String(i + 1).padStart(2, "0")}.webp`,
  alt: `CISMA 2024 highlight ${i + 1}`,
}));

export default function MemoryPage() {
  return (
    // pt-28: fixed Navbar ke liye jagah
    <main className="min-h-screen bg-[#e8e5da] pt-28">
      {/* Heading */}
      <header className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
          CISMA 2026
        </h1>
        <div className="mt-3 space-y-0.5 text-xs text-neutral-500">
          <p>April 30th</p>
          <p>Baku, Azerbaijan</p>
          <p>Khazar University</p>
        </div>
      </header>

      {/* Masonry gallery */}
      <section className="mx-auto mt-10 max-w-3xl px-4 pb-24">
        <div className="columns-2 gap-2 md:columns-3">
          {photos.map((p) => (
            <div key={p.src} className="mb-2 break-inside-avoid">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-auto w-full"
              />
            </div>
          ))}
        </div>
      </section>
            {/* Important Dates */}
      <section
        className="relative bg-cover bg-center px-6 py-24"
        style={{ backgroundImage: "url('/memory/cisma-2026/dates-bg.png')" }}
      >
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* upar wala chhota triangle */}
        <div className="absolute left-1/2 top-0 h-0 w-0 -translate-x-1/2 border-l-[26px] border-r-[26px] border-t-[26px] border-l-transparent border-r-transparent border-t-[#e8e5da]" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="text-center text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Important Dates (CISMA2026)
          </h2>

          <ol className="mx-auto mt-14 max-w-md">
            {importantDates.map((d, i) => (
              <li
                key={d.title}
                className="relative flex items-start gap-4 pb-10 last:pb-0"
              >
                {/* number box */}
                <span className="flex h-[54px] w-[54px] shrink-0 items-center justify-center border border-white/80 text-xl font-semibold text-white">
                  {i + 1}
                </span>

                {/* connector line */}
                {i !== importantDates.length - 1 && (
                  <span className="absolute left-[27px] top-[54px] h-[calc(100%-54px)] w-px bg-white/50" />
                )}

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {d.title}
                  </h3>
                  <p className="mt-1 text-base text-white">{d.date}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
            {/* Conference Report */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold text-neutral-900">
            Conference Report
          </p>
          <h2 className="mt-2 text-2xl font-medium tracking-tight text-neutral-900 md:text-4xl">
            The 2nd CISMA International Conference Successfully Held at Khazar
            University, Azerbaijan
          </h2>
          <p className="mt-6 text-base text-neutral-800">
            SISU and Khazar University Signed Joint Corpus Center Agreement
          </p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/memory/cisma-2026/conference-report.webp"
            alt="SISU and Khazar University signing the Joint Corpus Center Agreement"
            className="mx-auto mt-10 h-auto w-full max-w-[574px]"
          />
        </div>
      </section>
            {/* Organizing Team */}
      <section className="bg-white px-6 pb-24 pt-8">
        <div className="mx-auto max-w-[620px]">
          <h2 className="text-center text-3xl font-medium tracking-tight text-neutral-900 md:text-4xl">
            CISMA2026
          </h2>
          <p className="mt-3 text-center text-base text-neutral-400">
            Organizing Team: Khazar University
          </p>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {organizingTeam.map((m) => (
              <figure key={m.name} className="text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={m.image}
                  alt={m.name}
                  className="aspect-square w-full object-cover"
                />
                <figcaption className="mt-2 text-sm text-neutral-900">
                  {m.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
            {/* Conference topics */}
      <section className="bg-[#d8d2bb] px-6 py-16">
        <div className="mx-auto max-w-3xl">
          {/* Intro */}
          <header className="text-center">
            <h2 className="text-2xl font-bold leading-tight text-neutral-900 md:text-3xl">
              2nd CISMA Conference on Technology and Corpora in Discourse,
              Translation and Interpreting, Baku, Azerbaijan
            </h2>
            <p className="mt-4 text-sm text-neutral-500">
              Unveiling the Power of Technology and Corpora in Discourse,
              Translation and Interpreting
            </p>
            <p className="mt-3 text-xs font-medium text-neutral-800">
              Khazar University (Neftchilar Campus), Baku, Azerbaijan
            </p>
            <p className="mt-3 text-xs font-bold text-neutral-900">
              April 30th, 2026
            </p>
          </header>

          <div className="mt-6 space-y-4 text-justify text-xs leading-relaxed text-neutral-500">
            <p>
              CISMA 2026 focuses on the transformative impact of corpora, big
              data, and technology in advancing discourse studies, language
              sciences, T &amp; I and interdisciplinary research. The conference
              underscores the critical role of corpus linguistics, natural
              language processing (NLP), and big data analytics in addressing
              contemporary challenges and uncovering opportunities in the
              humanities and social sciences. The CISMA emphasizes the
              integration of computational methods, critical discourse analysis,
              and corpus-based approaches to enhance our understanding of
              language use, discourse practices, and societal dynamics. By
              bridging traditional methodologies with cutting-edge technologies,
              CISMA 2026 aims to redefine research paradigms and foster
              innovations across academic and professional domains.
            </p>
            <p>
              We are delighted to announce that selected papers from the
              conference will be published in the peer-reviewed journal
              &ldquo;Corpus-Based Studies Across Humanities&rdquo; by De Gruyter.
              This prestigious journal champions the advancement of corpora in
              the intersection of corpora, language sciences, and the
              humanities. For more information, visit Corpus-Based Studies
              Across Humanities. We encourage authors to submit their full
              papers for consideration in our upcoming issue. Join us at CISMA
              2026 as we explore how technology, corpora, and big data are
              revolutionizing the study of language, discourse, and society.
            </p>
          </div>

          {/* Topic cards */}
          <div className="mt-14 space-y-2.5">
            {topics.map((t, i) => (
              <article
                key={t.title}
                className="grid items-center gap-4 bg-white p-1.5 md:grid-cols-2 md:gap-6"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.image}
                  alt={t.title}
                  className={`aspect-[4/3] w-full object-cover ${
                    i % 2 === 1 ? "md:order-2" : ""
                  }`}
                />
                <div className="px-3 pb-4 md:px-2 md:pb-0">
                  <h3 className="text-sm font-bold text-neutral-900">
                    {t.title}
                  </h3>
                  {t.desc && (
                    <p className="mt-1 text-xs text-neutral-700">{t.desc}</p>
                  )}
                  <a
                    href={SUBMISSION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block bg-[#e3dfd3] px-3 py-1.5 text-[11px] font-semibold text-neutral-900 transition hover:bg-[#d3cebf]"
                  >
                    Submission
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
            {/* Keynote Speakers for CISMA 2026 */}
      <section className="bg-[#cbcbcb] px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            Keynote Speakers for CISMA 2026
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-relaxed text-neutral-500">
            We have invited a range of internationally renowned scholars and
            experts to share their insights and experiences in the field of
            corpus research.
          </p>

          <div className="mt-12 space-y-4">
            {keynoteBios.map((k) => (
              <article
                key={k.name}
                className="flex flex-col gap-5 bg-white p-4 md:flex-row md:items-center md:gap-8"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={k.image}
                  alt={k.name}
                  className="aspect-[4/5] w-full shrink-0 object-cover md:w-[240px]"
                />
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">
                    {k.name}
                  </h3>
                  <p className="mt-3 text-justify text-xs leading-relaxed text-neutral-700">
                    {k.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
            {/* Venue: Baku, Azerbaijan */}
      <section className="grid bg-[#e8e5da] md:grid-cols-[1fr_2fr]">
        <div className="flex flex-col justify-center px-8 py-14 md:px-[85px]">
          <h2 className="text-4xl font-semibold tracking-tight text-neutral-900">
            Baku, Azerbaijan
          </h2>
          <p className="mt-4 text-sm text-neutral-700">
            Shanghai International Studies University &amp; Khazar University
          </p>
          <a
            href={KNOW_MORE_URL}
            className="mt-8 block max-w-[456px] bg-white py-2.5 text-center text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
          >
            Know More
          </a>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/venue/khazar-university.png"
          alt="Khazar University, Baku"
          className="h-[300px] w-full object-cover md:h-[450px]"
        />
      </section>

      {/* Previous edition: CISMA 2024 */}
      <section className="grid gap-5 bg-white px-4 py-5 md:grid-cols-[2fr_1fr] md:px-6">
        {/* Left card */}
        <article className="relative flex min-h-[420px] items-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/venue/cisma-2024.png"
            alt="CISMA 2024"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/25" />
          <div className="relative z-10 px-6 text-white md:px-[145px]">
            <h3 className="text-4xl font-bold md:text-5xl">CISMA2024</h3>
            <p className="mt-3 max-w-2xl text-sm font-medium">
              CISMA is designed not only to showcase cutting-edge research but
              also to support early-career scholars and promote global academic
              exchange.
            </p>
          </div>
        </article>

        {/* Right card */}
        <article className="relative flex min-h-[420px] items-center justify-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/venue/shanghai-sisu.png"
            alt="Shanghai International Studies University"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 px-6 text-center text-white">
            <h3 className="text-base font-semibold">CISMA 2024, Shanghai</h3>
            <p className="mt-2 text-xs font-medium">
              Corpora in Humanities: Exploring Language, Literature, and
              Technology
            </p>
            <p className="mt-1 text-xs font-medium">
              Shanghai International Studies University
            </p>
            <a
              href={ABSTRACTS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block border border-white px-5 py-2 text-xs font-semibold text-white transition hover:bg-white hover:text-neutral-900"
            >
              Book of Abstracts
            </a>
          </div>
        </article>
      </section>
            {/* Highlights of CISMA2024 */}
      <section className="bg-[#d0d0d0] px-4 py-16">
        <header className="text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            Highlights of CISMA2024
          </h2>
          <p className="mt-4 text-xl text-neutral-500">會議精彩瞬間</p>
        </header>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="columns-2 gap-4 md:columns-3">
            {highlightPhotos.map((p) => (
              <div key={p.src} className="mb-4 break-inside-avoid">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="h-auto w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}