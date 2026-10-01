"use client";

export default function Footer() {
  const hasSponsorLogo = true; // set true once /public/linguist-list-logo.jpg is added

  return (
    <footer className="w-full bg-[#4c5871] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo + sponsor text */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="w-24 h-16 bg-white flex items-center justify-center shrink-0">
              {hasSponsorLogo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src="/linguist-list-logo.png"
                  alt="LinguistList"
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="text-gray-400 text-[9px] text-center px-1">
                  Logo not added — /public/linguist-list-logo.jpg
                </span>
              )}
            </div>
            <p className="font-bold text-sm whitespace-nowrap">Sponsored by Linguist List</p>
          </div>

          {/* Tagline */}
          <p className="italic text-center text-sm max-w-xs mx-auto md:mx-0">
            &ldquo;Transforming language studies through digital intelligence.&rdquo;
          </p>

          {/* Contact */}
          <div className="text-center">
            <p className="font-bold text-sm mb-1">Contact Us</p>
            <p className="text-sm">
              <a href="mailto:sxiao5800@gmail.com" className="hover:underline">
                sxiao5800@gmail.com
              </a>
            </p>
            <p className="text-sm">
              <a href="mailto:cisma@shisu.edu.cn" className="hover:underline">
                cisma@shisu.edu.cn
              </a>
            </p>
          </div>

          {/* Social buttons */}
          <div className="flex items-center gap-3 shrink-0 justify-center">
            <a
              href="https://twitter.com/intent/tweet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-black text-white text-xs font-semibold px-3 py-1.5 rounded hover:bg-gray-800 transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Post
            </a>
            <a
              href="https://www.linkedin.com/sharing/share-offsite/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#0a66c2] text-white text-xs font-semibold px-3 py-1.5 rounded hover:bg-[#0958a8] transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.114 20.452H3.558V9h3.556v11.452z" />
              </svg>
              Share
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-8 pt-6">
          <p className="text-center text-sm">&copy;2026 &ndash; Copyright by CISMA Team</p>
        </div>
      </div>
    </footer>
  );
}