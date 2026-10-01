"use client";

interface CommitteeMember {
  role: string;
  name: string;
  bio: string;
  photo: string;
  hasPhoto: boolean;
}

const members: CommitteeMember[] = [
  {
    role: "Founding Chair",
    name: "Muhammad Afzaal",
    bio: "Dr. Muhammad Afzaal is an Associate Professor at the Institute of Language Sciences, Shanghai International Studies University (SISU). He earned his PhD from Shanghai Jiao Tong University and has held research fellowships at The Hong Kong Polytechnic University. With over seven years of teaching experience at Foundation University Islamabad (Pakistan), he brings strong international expertise in language sciences. His research focuses on corpus linguistics, discourse analysis (including critical discourse analysis), and translation studies, with particular interest in integrating corpus-based approaches with NLP and big data. He is the author of Corpora and Discourses of the Belt and Road Initiative (Springer, 2023) and a recipient of the Yang Yong Research Award from Shanghai Jiao Tong University's Graduate School. His work has been published widely in SSCI/Scopus/ESCI-indexed journals.",
    photo: "/committee-afzaal.webp",
    hasPhoto: true,
  },
  {
    role: "Chair",
    name: "Kaibao Hu",
    bio: "I have had more than 20 years of research experience in corpus-based translation studies, published 100 papers in journals indexed in CSSCI, SSCI, A & HCI, and 9 academic monographs in publishers such as Springer and China's Higher Education Press. I am also investigators of over 13 projects on national level. In 2017 and 2020, I was admitted into the list of the most influential scholars in the research of philosophy and Social Sciences in China and the distinguished professor of the national major talent plan.",
    photo: "/committee-kaibao.webp",
    hasPhoto: true,
  },
];

interface ScientificMember {
  name: string;
  photo: string;
  hasPhoto: boolean;
}

const scientificMembers: ScientificMember[] = [
  { name: "Abbas Brashi", photo: "/abbas-brashi.webp", hasPhoto: true },
  { name: "Amanda Clare Murphy", photo: "/amanda-murphy.webp", hasPhoto: true },
  { name: "Andrew K.F. Cheung", photo: "/andrew-cheung.webp", hasPhoto: true },
  { name: "Changpeng Huan", photo: "/changpeng-huan.webp", hasPhoto: true },
  { name: "David Machin", photo: "/david-machin.webp", hasPhoto: true },
  { name: "Dina El-Dakhs", photo: "/dina-eldakhs.webp", hasPhoto: true },
  { name: "Fabio De Leonardis", photo: "/fabio-deleonardis.webp", hasPhoto: true },
  { name: "Geng Qiang", photo: "/geng-qiang.webp", hasPhoto: true },
  { name: "Göran Bertil Eriksson", photo: "/goran-eriksson.webp", hasPhoto: true },
  { name: "Jianjun Shi", photo: "/jianjun-shi.webp", hasPhoto: true },
  { name: "Lei Lei", photo: "/lei-lei.webp", hasPhoto: true },
  { name: "Dechao Li", photo: "/dechao-li.webp", hasPhoto: true },
  { name: "Milanna Abbasova", photo: "/milanna-abbasova.webp", hasPhoto: true },
  { name: "Muhammad Imran", photo: "/muhammad-imran.webp", hasPhoto: true },
  { name: "Randi Reppen", photo: "/randi-reppen.webp", hasPhoto: true },
  { name: "Pierfranca Forchini", photo: "/pierfranca-forchini.webp", hasPhoto: true },
  { name: "Xiaoming Jiang", photo: "/xiaoming-jiang.webp", hasPhoto: true },
];

export default function ConferenceCommittee() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Conference Commitee
          </h2>
          <p className="text-lg text-[#c9a876]">Our Team</p>
        </div>

        {/* Members */}
        <div className="flex flex-col gap-14">
          {members.map((member) => (
            <div key={member.name} className="flex flex-col sm:flex-row gap-6 sm:gap-10">
              {/* Photo */}
              <div className="w-full sm:w-64 shrink-0">
                {member.hasPhoto ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-auto object-cover"
                  />
                ) : (
                  <div className="w-full aspect-[4/5] bg-gray-100 flex items-center justify-center text-gray-400 text-xs text-center px-4">
                    Photo not added yet — place it at /public{member.photo} and set
                    hasPhoto to true in ConferenceCommittee.tsx
                  </div>
                )}
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.role}</h3>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{member.name}</h4>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Scientific Committee */}
        <div className="text-center mt-20 mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Scientific Committee
          </h2>
          <p className="text-sm text-[#c9a876]">
            Distinguished scholars on CISMA panel (name in alphabetically order)
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-10">
          {scientificMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center">
              {member.hasPhoto ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full aspect-square object-cover"
                />
              ) : (
                <div className="w-full aspect-square bg-gray-100 flex items-center justify-center text-gray-400 text-[10px] text-center px-2">
                  Photo not added — /public{member.photo}
                </div>
              )}
              <p className="mt-2 text-sm font-semibold text-gray-700">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
