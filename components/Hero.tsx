import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[520px] md:h-[600px] overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero.jpg"
        alt="CISMA conference group photo"
        fill
        priority
        className="object-cover object-top"
      />

      {/* Dark overlay so text is readable */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Text content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end text-center px-4 pb-16 md:pb-20 font-sans-ui">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Welcome to CISMA !
        </h1>
        <p className="text-white/90 text-lg md:text-xl">
          Join CISMA Community for Regular Events !
        </p>
      </div>

      {/* Scroll-down arrow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
        <div className="h-10 w-10 bg-cisma-navy flex items-center justify-center rounded-sm shadow-md">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="white">
            <path d="M5 7l5 6 5-6z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
