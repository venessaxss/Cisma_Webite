"use client";

export default function CismaLive() {
  // Set this to true once the poster image is placed in /public and the src below is updated
  const hasPoster = true;

  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row min-h-[500px]">
        {/* Left text panel */}
        <div className="w-full md:w-1/2 bg-gray-100 flex flex-col justify-center px-8 md:px-12 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug mb-5">
            CISMA Live | Corpus Linguistics Today: A Conversation with Randi Reppen
          </h2>
          <p className="text-gray-700 leading-relaxed">
            What makes a corpus study convincing? How can corpus evidence inform teaching? Join
            Randi Reppen and Muhammad Afzaal for a conversation on the new Cambridge handbook,
            research methods, and emerging directions in corpus linguistics.
          </p>
        </div>

        {/* Right poster panel */}
        <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center p-4 md:p-6 min-h-[320px]">
          {hasPoster ? (
            // Plain <img> on purpose: it renders at the file's real aspect ratio,
            // so the full poster always shows without being cropped or stretched.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/cisma-live-poster.png"
              alt="CISMA Live - Conversation with Randi Reppen"
              className="w-full h-auto max-h-[600px] object-contain"
            />
          ) : (
            <div className="text-gray-500 text-sm px-6 text-center">
              Poster image not added yet — place it at /public/cisma-live-poster.jpg
              and set hasPoster to true in CismaLive.tsx
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
