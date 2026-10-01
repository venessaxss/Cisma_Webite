"use client";

export default function JoinOurTeam() {
  // Set this to true once the poster image is placed in /public and the src below is updated
  const hasPoster = true;

  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Left: poster */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          {hasPoster ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/join-our-team-poster.png"
              alt="CISMA - We are hiring! Join our team"
              className="w-full h-auto object-contain"
            />
          ) : (
            <div className="text-gray-500 text-sm px-6 text-center">
              Poster image not added yet — place it at /public/join-our-team-poster.jpg
              and set hasPoster to true in JoinOurTeam.tsx
            </div>
          )}
        </div>

        {/* Right: text + buttons */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Join our team!
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Let&apos;s make great events happen
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="mailto:cisma@shisu.edu.cn?subject=Application%20-%20Join%20Our%20Team"
              className="rounded-md bg-[#f3ddc4] text-gray-800 px-8 py-3 text-base font-bold hover:bg-[#ecd0af] transition-colors text-center"
            >
              Apply
            </a>
            <a
              href="mailto:cisma@shisu.edu.cn?subject=Inquiry%20-%20CISMA"
              className="rounded-md border border-gray-300 text-gray-400 px-8 py-3 text-base font-bold hover:bg-gray-50 transition-colors text-center"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
