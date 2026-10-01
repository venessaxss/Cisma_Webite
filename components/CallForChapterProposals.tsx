"use client";

export default function CallForChapterProposals() {
  // Set these to true once the respective images are placed in /public
  const hasPoster = true;
  const hasBackgroundPhoto = true;

  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row md:h-[600px]">
        {/* Left: poster */}
        <div className="w-full md:w-1/3 md:h-full overflow-y-auto flex justify-start bg-white p-4">
          {hasPoster ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/chapter-proposals-poster.png"
              alt="Call for Book Chapter Proposals - Language, Culture, and Society in Contemporary China"
              className="w-full h-auto object-contain"
            />
          ) : (
            <div className="text-gray-400 text-sm px-6 text-center">
              Poster image not added yet — place it at /public/chapter-proposals-poster.jpg
              and set hasPoster to true in CallForChapterProposals.tsx
            </div>
          )}
        </div>

        {/* Middle: dark call-to-action panel */}
        <div className="w-full md:w-1/3 bg-gray-900 flex flex-col items-center justify-center text-center px-8 py-14 gap-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Call for Chapter Proposals
          </h2>
          <p className="text-lg md:text-xl text-gray-200">
            Language, Culture, and Society in Contemporary China
          </p>
          <a
            href="mailto:cisma@shisu.edu.cn?subject=Chapter%20Proposal%20Submission"
            className="rounded-md bg-[#f3ddc4] text-gray-900 px-8 py-3 text-base font-bold hover:bg-[#ecd0af] transition-colors"
          >
            Submit
          </a>
        </div>

        {/* Right: background photo with editors info */}
        <div className="relative w-full md:w-1/3 min-h-[400px] md:min-h-0 bg-gray-700 flex items-center">
          {hasBackgroundPhoto && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/chapter-proposals-editors.png"
              alt="Editors of Language, Culture, and Society in Contemporary China"
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          {/* dark overlay so text stays readable */}
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 px-8 py-10 text-white">
            <p className="font-bold text-center mb-1">Editors:</p>
            <p className="text-center mb-6">
              Muhammad Afzaal, Mohammad Hossein Keshavarz, &amp; Guidong Li
            </p>
            <p className="leading-relaxed">
              Sociocultural Linguistics is an interdisciplinary field that examines language in
              its social and cultural contexts, i.e., how society and culture shape our linguistic
              and social behavior. It aims to integrate insights from linguistic anthropology,
              discourse analysis, sociology of language, and other disciplines. It explores how
              language is used to construct social identity, negotiate power dynamics, and express
              cultural meaning. This volume provides an outstanding platform for sharing innovative
              research findings on various sociocultural linguistic issues in diverse contexts and
              cultures in China.
            </p>
          </div>

          {!hasBackgroundPhoto && (
            <div className="absolute bottom-2 left-2 right-2 z-10 text-[11px] text-gray-300 text-center">
              Background photo not added yet — place it at /public/chapter-proposals-editors.jpg
              and set hasBackgroundPhoto to true
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
