import Image from "next/image";

export default function BrandLogo() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4 flex justify-center">
        <div className="relative w-full max-w-4xl aspect-[3/1]">
          <Image
            src="/cisma-logo-full.webp"
            alt="CISMA - Corpus-Informed Studies: Methodologies and Applications"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
