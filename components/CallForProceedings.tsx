import Image from "next/image";

export default function CallForProceedings() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4">
        {/* Top banner */}
        <div className="flex flex-col sm:flex-row items-stretch bg-[#e6e1d7]">
          {/* Logo box */}
          <div className="bg-white flex items-center justify-center p-4 sm:w-[30rem] shrink-0">
            <div className="relative w-full aspect-[3/1]">
              <Image
                src="/cisma-logo-full.webp"
                alt="CISMA - Corpus-Informed Studies: Methodologies and Applications"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Banner text */}
          <div className="flex-1 flex flex-col justify-center gap-2 px-6 py-10">
            <p className="text-lg font-semibold">
              <span className="text-cisma-blue">Call for</span>{" "}
              <span className="text-gray-900">Proceedings, CISMA 2026</span>
            </p>
            <p className="text-gray-900 font-bold">
              Submission Open &mdash; Share Your Research
            </p>
            <p className="text-gray-800">
              <span className="text-cisma-blue">
                Submit your paper for the CISMA 2026 Proceedings. Deadline:
              </span>{" "}
              <span className="font-bold text-gray-900">October 7, 2026.</span>
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="px-2 sm:px-6 py-8 text-gray-800 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-6">
            Call for Proceedings, CISMA 2026
          </h2>

          <p className="mb-4">Dear CISMA 2026 Participants,</p>
          <p className="mb-4">
            We hope this message finds you well and that you had a fruitful experience at CISMA 2026.
          </p>
          <p className="mb-6">
            As part of our continued efforts to disseminate the excellent research presented at the
            conference, we are pleased to invite all participants to submit their papers for publication
            in the CISMA 2026 Proceedings.
          </p>

          <h3 className="font-bold text-gray-900 mb-2">Submission Guidelines:</h3>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>
              <span className="font-semibold">Format:</span> All submissions must strictly follow the
              ACL (Association for Computational Linguistics) formatting requirements, including the
              official ACL style templates, font, margins, and citation format.
            </li>
            <li>
              <span className="font-semibold">Length:</span> Papers should be between 5 to 8 pages,
              including references.
            </li>
            <li>
              <span className="font-semibold">Selection:</span> 5 to 8 papers will be selected for
              publication in the CISMA Proceedings based on quality, originality, and relevance.
            </li>
          </ul>

          <h3 className="font-bold text-gray-900 mb-2">Important Dates:</h3>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>
              <span className="font-semibold">Submission Open:</span> September 16, 2026
            </li>
            <li>
              <span className="font-semibold">Submission Deadline:</span> October 7, 2026 (three weeks
              from the opening date)
            </li>
            <li>
              <span className="font-semibold">Notification of Acceptance:</span> To be announced
            </li>
          </ul>

          <h3 className="font-bold text-gray-900 mb-2">How to Submit:</h3>
          <p className="mb-4">
            Please submit your paper via email to{" "}
            <a href="mailto:cisma@shisu.edu.cn" className="font-semibold text-cisma-blue">
              cisma@shisu.edu.cn
            </a>{" "}
            with the subject line: &ldquo;CISMA 2026 Proceedings Submission &ndash; [Your Name]&rdquo;.
          </p>

          <p className="mb-4">
            We look forward to receiving your contributions. Should you have any questions regarding
            the submission process or formatting requirements, please do not hesitate to contact us.
          </p>
          <p className="mb-8">Thank you for your continued support of CISMA.</p>

          <p>Best regards,</p>
          <p>CISMA 2026 Organizing Committee</p>
          <a
            href="https://www.cisma-corpus.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-cisma-blue hover:underline"
          >
            www.cisma-corpus.com
          </a>
        </div>
      </div>
    </section>
  );
}
