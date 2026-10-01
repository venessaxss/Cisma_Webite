import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | CISMA",
};

type Bullet = { label?: string; text: string };

type PolicySection = {
  title: string;
  intro?: string;
  bullets?: Bullet[];
  body?: string;
  large?: boolean; // last section ka text bara dikhta hai
};

const LAST_UPDATED = "September 2026";

const INTRO =
  'Corpus-Informed Studies: Methodologies and Applications (CISMA) ("we," "us," or "our") respects your privacy and is committed to protecting the personal information you share with us through this website.';

const sections: PolicySection[] = [
  {
    title: "1. Information We Collect",
    intro: "We may collect the following types of information when you interact with our website:",
    bullets: [
      {
        label: "Contact information",
        text: " you provide when registering for events, subscribing to updates, or contacting us (such as name, email address, and institutional affiliation).",
      },
      {
        label: "Usage data",
        text: " collected automatically, such as pages visited, time spent on the site, and browser/device information.",
      },
      {
        label: "Communications",
        text: " you send us directly, including questions, feedback, or submissions.",
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    intro: "We use the information we collect to:",
    bullets: [
      { text: "Process event registrations and communicate conference-related updates." },
      { text: "Respond to inquiries and provide support." },
      { text: "Improve our website and the content we offer." },
      { text: "Send newsletters or announcements, where you have opted in." },
    ],
  },
  {
    title: "3. Sharing of Information",
    intro:
      "We do not sell or rent your personal information to third parties. We may share information with:",
    bullets: [
      { text: "Service providers who help us operate the website (e.g., hosting, email delivery)." },
      { text: "Conference partners or co-organizers, only as necessary to coordinate the event." },
      { text: "Authorities, where required by law." },
    ],
  },
  {
    title: "4. Cookies and Tracking",
    body: "Our website may use cookies or similar technologies to improve user experience and analyze site traffic. You can control cookie preferences through your browser settings.",
  },
  {
    title: "5. Data Retention",
    body: "We retain personal information only as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required by law.",
  },
  {
    title: "6. Your Rights",
    body: "Depending on your location, you may have the right to access, correct, or request deletion of your personal information. To exercise these rights, please contact us using the details below.",
  },
  {
    title: "7. Data Security",
    body: "We take reasonable measures to protect your personal information from unauthorized access, alteration, or disclosure.",
  },
  {
    title: "8. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.",
    large: true,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-[1100px] px-6 pb-24 pt-20 text-center md:pt-28">
        {/* Page title */}
        <h1 className="font-heading text-5xl font-medium tracking-tight text-neutral-900 md:text-6xl">
          Privacy Policy
        </h1>

        <div className="mt-24 text-[15px] leading-relaxed text-neutral-400">
          <p>
            <strong className="font-semibold">Last updated:</strong> {LAST_UPDATED}
          </p>
          <p className="mx-auto max-w-[820px]">{INTRO}</p>

          {sections.map((s) => (
            <section key={s.title} className="mt-10">
              <h2 className="text-3xl font-light tracking-wide text-neutral-400 md:text-4xl">
                {s.title}
              </h2>

              {s.intro && <p className="mt-12">{s.intro}</p>}

              {s.bullets && (
                <ul className="mt-10 list-disc pl-6 marker:text-neutral-300">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="text-center">
                      {b.label && <strong className="font-semibold">{b.label}</strong>}
                      {b.text}
                    </li>
                  ))}
                </ul>
              )}

              {s.body && (
                <p
                  className={
                    s.large
                      ? "mx-auto mt-12 max-w-[820px] text-2xl leading-snug md:text-[28px]"
                      : "mx-auto mt-12 max-w-[1000px]"
                  }
                >
                  {s.body}
                </p>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}