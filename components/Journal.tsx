"use client";

import Link from "next/link";

const journalEntries = [
  {
    title: "Building the Bayou Universe",
    date: "Coming Soon",
    excerpt:
      "Every story begins with a single promise. Follow the journey as the Bayou Universe grows from one novel into an interconnected world spanning centuries.",
    href: "/journal/building-the-bayou-universe",
  },
  {
    title: "Researching Louisiana Folklore",
    date: "Coming Soon",
    excerpt:
      "Exploring the legends, history, and traditions that inspire the spirits, creatures, and magic woven throughout the Bayou Universe.",
    href: "/journal/louisiana-folklore",
  },
  {
    title: "Writing The Veil Chronicles",
    date: "Coming Soon",
    excerpt:
      "A look behind the scenes at Lena Schexnaydre's journey from Germany to Louisiana and the historical research behind the series.",
    href: "/journal/the-veil-chronicles",
  },
];

export default function Journal() {
  return (
    <section className="bg-[#07161D] py-28">
      <div className="mx-auto max-w-7xl px-8">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-[#E8D6A8]">
            Writer's Journal
          </p>

          <h2 className="mt-4 font-heading text-5xl text-[#F4E2B8] md:text-6xl">
            Behind the Stories
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Follow the creation of the Bayou Universe through writing updates,
            research, worldbuilding, and behind-the-scenes insights.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {journalEntries.map((entry) => (
            <Link
              key={entry.title}
              href={entry.href}
              className="rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#E8D6A8] hover:shadow-2xl"
            >
              <p className="text-sm uppercase tracking-widest text-[#E8D6A8]">
                {entry.date}
              </p>

              <h3 className="mt-4 font-heading text-3xl text-[#F4E2B8]">
                {entry.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-300">
                {entry.excerpt}
              </p>

              <div className="mt-8 font-semibold text-[#E8D6A8]">
                Read Journal →
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/journal"
            className="inline-flex rounded-full border border-[#E8D6A8] px-8 py-4 font-semibold text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
          >
            Visit the Journal
          </Link>
        </div>
      </div>
    </section>
  );
}