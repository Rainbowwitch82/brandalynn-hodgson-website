"use client";

import Link from "next/link";

interface TimelineEventProps {
  year: string;
  title: string;
  description: string;
  href: string;
}

export default function TimelineEvent({
  year,
  title,
  description,
  href,
}: TimelineEventProps) {
  return (
    <Link
      href={href}
      className="group relative block rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#E8D6A8] hover:shadow-2xl"
    >
      {/* Timeline Dot */}
      <div className="absolute -left-4 top-10 hidden h-8 w-8 rounded-full border-4 border-[#07161D] bg-[#E8D6A8] lg:block" />

      <p className="text-sm uppercase tracking-[0.35em] text-[#E8D6A8]">
        {year}
      </p>

      <h3 className="mt-4 font-heading text-3xl text-[#F4E2B8]">
        {title}
      </h3>

      <p className="mt-5 leading-8 text-gray-300">
        {description}
      </p>

      <div className="mt-8 flex items-center font-semibold text-[#E8D6A8]">
        Explore Event
        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
          →
        </span>
      </div>
    </Link>
  );
}