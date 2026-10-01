interface Hotel {
  name: string;
  address: string;
  distance: string;
  duration: string;
  adviceTitle: string;
  adviceText: string;
  image: string;
  hasImage: boolean;
}

const hotels: Hotel[] = [
  {
    name: "Emerald Hotel",
    address: "Mehdi Abbasov 4, Baku",
    distance: "Approx. 7 km",
    duration: "15\u201320 min by taxi",
    adviceTitle: "Best by taxi.",
    adviceText:
      "Public transport: walk or take a short taxi ride to Koro\u011flu / Qara Qarayev metro, continue to Neftchilar, then walk about 10 min to campus. Allow ~30 min total.",
    image: "/hotel-emerald.png",
    hasImage: true,
  },
  {
    name: "Nord West Hotel",
    address: "Tofig Abbasov St. 32, Baku",
    distance: "Approx. 4\u20135 km",
    duration: "10\u201315 min by taxi",
    adviceTitle: "Best metro option.",
    adviceText:
      "Walk 5\u20137 min to Qara Qarayev metro, ride one stop to Neftchilar, then walk about 10 min to campus. Allow ~15\u201320 min total.",
    image: "/hotel-nordwest.png",
    hasImage: true,
  },
  {
    name: "Whydhnam Garden hotel",
    address: "2405 Mikayil Aliyev St., Baku 1029",
    distance: "Approx. 7 km",
    duration: "15\u201320 min by taxi",
    adviceTitle: "Taxi is easiest.",
    adviceText:
      "Public transport: walk or take a short taxi ride to Koro\u011flu metro, continue to Neftchilar, then walk about 10 min to campus. Allow ~25\u201330 min total.",
    image: "/hotel-wyndham.png",
    hasImage: true,
  },
];

const banners = [
  { title: "Academic Publication", image: "/banner-academic-publication.webp", hasImage: true },
  {
    title: "Interdisciplinary Collaboration",
    image: "/banner-interdisciplinary.webp",
    hasImage: true,
  },
];

export default function AttendeeGuidePage() {
  return (
    <>
      {/* Presentation guidelines */}
      <section className="w-full bg-white pt-14 md:pt-16 pb-16">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
            Presentation guidelines
          </h1>

          <h2 className="text-xl font-bold text-gray-900 mb-2">Oral Presentation Guidelines</h2>
          <p className="font-bold text-sm text-gray-900 mb-4">
            ONLY PAID PARTICIPANTS ARE GRANTED ACCESS TO ALL SESSIONS*
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            Each oral presentation is allocated <strong>15 minutes in total</strong>, consisting
            of <strong>10 minutes for the presentation</strong> and{" "}
            <strong>5 minutes for questions and discussion</strong>. Presenters are encouraged to
            structure their talk clearly. A typical presentation may include:
          </p>
          <ul className="list-disc pl-6 text-gray-800 mb-4 space-y-1">
            <li>title and author information</li>
            <li>research aim or question</li>
            <li>data, materials, or methodology</li>
            <li>main findings</li>
            <li>conclusion and implications</li>
          </ul>
          <p className="text-gray-800 leading-relaxed mb-6">
            Please make sure that slides are easy to read. Use clear fonts, large text, and avoid
            overcrowding slides with long paragraphs. Visual materials such as tables, graphs, and
            examples should be clearly visible to the audience.
          </p>

          <h3 className="font-bold text-gray-900 underline mb-2">Onsite oral presenters</h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            Onsite presenters are advised to arrive early and check that their slides open
            correctly before the session begins. Please bring your presentation in more than one
            format if possible, such as PowerPoint and PDF, and keep a backup copy on a USB drive
            or cloud storage.
          </p>
          <h3 className="font-bold text-gray-900 underline mb-2">Online oral presenters</h3>
          <p className="text-gray-800 leading-relaxed mb-10">
            Online presenters should join the session early to test their microphone, camera,
            internet connection, and screen-sharing function. Please make sure that your display
            name clearly shows your name for identification by the session chair. To keep the
            program on schedule, session chairs may interrupt presentations that exceed the
            allotted time.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-2">Poster Presentation Guidelines</h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            Poster presenters are kindly asked to be present at their poster during the poster
            session and be available to introduce their work and answer questions from attendees.
            Since the poster session is scheduled during the{" "}
            <strong>15:15\u201315:30 Coffee Break / Poster</strong> period, presenters should be
            prepared to explain their research clearly and efficiently within a short time.
            <br />
            A poster should be visually clear, concise, and easy to follow. It is recommended that
            posters include:
          </p>
          <ul className="list-disc pl-6 text-gray-800 mb-4 space-y-1">
            <li>title</li>
            <li>author name(s) and affiliation(s)</li>
            <li>background or research context</li>
            <li>objective or research question</li>
            <li>data or methodology</li>
            <li>key findings</li>
            <li>conclusion</li>
            <li>contact information if desired</li>
          </ul>
          <p className="text-gray-800 leading-relaxed mb-10">
            Please use large fonts, clear headings, and high-contrast colors so that the content
            can be read easily from a distance.{" "}
            <strong>
              Recommended poster size: A0, portrait orientation (841 mm \u00d7 1189 mm).
              Presenters are responsible for presenting their own posters. The organizing team
              does not present posters on behalf of authors. If a presenter is absent, the poster
              will not be presented by conference staff.
            </strong>{" "}
            Unless otherwise announced by the organizing team, presenters are advised to prepare
            their posters in the above format and bring them ready for display.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-2">Technical and Practical Advice</h2>
          <p className="text-gray-800 leading-relaxed">
            Please check all files, videos, audio, and visual materials before the conference. If
            your presentation depends on special formatting, fonts, or embedded media, test it in
            advance.
          </p>
        </div>
      </section>

      {/* Accommodation */}
      <section className="w-full bg-white pb-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">Accomodation</h2>
            <p className="text-sm text-gray-400">\u4e3a\u60a8\u63d0\u4f9b\u4fbf\u5229\u7684\u4f4f\u5bbf\u8cc7\u8a0a</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {hotels.map((hotel) => (
              <div key={hotel.name} className="text-center">
                <div className="relative w-full aspect-[4/3] bg-gray-100 mb-4 overflow-hidden">
                  {hotel.hasImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs text-center px-3">
                      Photo not added \u2014 /public{hotel.image}
                    </div>
                  )}
                </div>
                <p className="font-bold text-gray-900">{hotel.name}</p>
                <p className="text-gray-700 text-sm mb-2">{hotel.address}</p>
                <p className="font-semibold text-sm text-gray-900">{hotel.distance}</p>
                <p className="font-semibold text-sm text-gray-900 mb-3">{hotel.duration}</p>
                <p className="font-bold text-xs text-gray-900 mb-1">{hotel.adviceTitle}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{hotel.adviceText}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section id="travel-information" className="w-full bg-white pb-20 scroll-mt-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">Travel Tips</h2>
            <p className="text-sm text-gray-400">\u4fbf\u6377\u7684\u5230\u9054\u65b9\u5f0f</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Form (visual only — wire this up to your form handler / email service) */}
            <form className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-cisma-blue"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-cisma-blue"
              />
              <textarea
                placeholder="Info"
                rows={4}
                className="border border-gray-300 px-3 py-2 text-sm resize-none focus:outline-none focus:border-cisma-blue"
              />
              <button
                type="submit"
                className="self-start rounded-md bg-[#f3ddc4] text-gray-800 px-6 py-2 text-sm font-bold hover:bg-[#ecd0af] transition-colors"
              >
                Submit
              </button>
            </form>

            {/* Map */}
            <div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Khazar+University+Neftchilar+Campus+Baku"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cisma-blue mb-2 inline-block"
              >
                Open in Maps \u2197
              </a>
              <div className="relative w-full aspect-[4/3] bg-gray-100">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.6017622327754!2d49.83330069999999!3d40.3733538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dba30f8b1ef%3A0x695457ec2800b35d!2sKhazar%20University!5e0!3m2!1sen!2s!4v1790658780583!5m2!1sen!2s"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    />
              </div>
            </div>

            {/* Contact */}
            <div className="text-sm text-gray-800 space-y-3">
              <p className="flex gap-2">
                <span>\ud83d\udccd</span>
                <span>
                  Marble Hall, Khazar University, Neftchilar Campus, 41 Mahsati Street, Baku
                </span>
              </p>
              <p className="flex gap-2">
                <span>\ud83d\udcde</span>
                <span>(+994 12) 421 1093</span>
              </p>
              <p className="flex gap-2">
                <span>\u2709\ufe0f</span>
                <a href="mailto:contact@khazar.org" className="hover:underline">
                  contact@khazar.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom banners */}
      <section className="w-full grid grid-cols-1 sm:grid-cols-2">
        {banners.map((banner) => (
          <div key={banner.title} className="relative h-64 sm:h-80 overflow-hidden bg-gray-700">
            {banner.hasImage && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={banner.image}
                alt={banner.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 h-full flex items-center justify-center px-6">
              <h3 className="text-white text-2xl sm:text-3xl font-extrabold text-center leading-snug">
                {banner.title}
              </h3>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}