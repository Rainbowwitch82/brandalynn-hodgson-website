"use client";

import Image from "next/image";

interface Journal {
  archive: string;
  title: string;
  type: string;
  period: string;
  location: string;
  image: string;
  description: string;
}

interface JournalCardProps {
  journal: Journal;
  onClick: () => void;
}

export default function JournalCard({
  journal,
  onClick,
}: JournalCardProps) {
  return (
    <article
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] transition-all duration-300 hover:-translate-y-2 hover:border-[#E8D6A8] hover:shadow-2xl hover:shadow-[#E8D6A8]/10"
    >
      <div className="relative h-72 overflow-hidden">
        <Image
          src={journal.image}
          alt={journal.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="absolute top-5 left-5 rounded-full bg-[#E8D6A8] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#07161D]">
          {journal.archive}
        </div>

        <div className="absolute bottom-5 left-5 rounded-full bg-black/70 px-4 py-2 text-xs uppercase tracking-widest text-[#E8D6A8]">
          {journal.period}
        </div>

        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/40">
          <span className="rounded-full border border-white/60 bg-black/60 px-5 py-3 text-sm font-semibold tracking-wider text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
            📖 Open Archive
          </span>
        </div>
      </div>

      <div className="p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-[#E8D6A8]">
          {journal.type}
        </p>

        <h2 className="mt-3 font-serif text-3xl text-[#F4E2B8]">
          {journal.title}
        </h2>

        <p className="mt-2 text-sm uppercase tracking-[0.2em] text-gray-400">
          {journal.location}
        </p>

        <p className="mt-5 leading-8 text-gray-300">
          {journal.description}
        </p>
      </div>
    </article>
  );
}