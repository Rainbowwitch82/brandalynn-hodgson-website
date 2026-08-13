"use client";

const timeline = [
  {
    era: "1700s",
    title: "The Veil Chronicles",
    description:
      "The Schexnaydre family leaves Europe for the Louisiana frontier, carrying ancient promises, old traditions, and secrets that refuse to remain buried.",
    color: "border-amber-500",
  },
  {
    era: "Present Day",
    title: "Bayou Veil",
    description:
      "Seraphina discovers her family's hidden legacy and the mysterious Veil that separates the living world from something much older.",
    color: "border-emerald-500",
  },
  {
    era: "Present Day",
    title: "Little Bayou Veil",
    description:
      "Join Milo the Maine Coon as he explores friendship, courage, and wonder throughout the magical Louisiana bayou.",
    color: "border-sky-500",
  },
  {
    era: "Future",
    title: "Bayou Heir",
    description:
      "A child born of prophecy inherits generations of magic, forever changing the future of the Bayou Universe.",
    color: "border-purple-500",
  },
];

export default function Timeline() {
  return (
    <section className="bg-[#08110d] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.4em] text-amber-400 text-sm">
            Explore Through Time
          </p>

          <h2 className="mt-4 text-5xl font-serif text-amber-50">
            The Bayou Timeline
          </h2>

          <p className="mt-6 mx-auto max-w-3xl text-lg text-gray-400">
            Every series is connected. Journey through generations of history,
            mystery, magic, and family to discover how one promise echoes across
            centuries.
          </p>
        </div>

        <div className="relative">

          {/* Center Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-amber-500 to-transparent lg:block" />

          <div className="space-y-16">

            {timeline.map((item, index) => (
              <div
                key={item.title}
                className={`flex flex-col lg:flex-row ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                } items-center gap-8`}
              >
                <div className="w-full lg:w-1/2">
                  <div
                    className={`rounded-3xl border-l-4 ${item.color} bg-[#101b15] p-8 shadow-xl transition hover:scale-[1.02]`}
                  >
                    <span className="text-sm uppercase tracking-widest text-amber-400">
                      {item.era}
                    </span>

                    <h3 className="mt-3 text-3xl font-serif text-amber-50">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="hidden lg:flex h-6 w-6 rounded-full border-4 border-amber-400 bg-[#08110d]" />

                <div className="hidden lg:block lg:w-1/2" />
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}