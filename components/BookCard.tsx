"use client";

import Image from "next/image";
import Link from "next/link";

interface BookCardProps {
  title: string;
  tagline: string;
  description: string;
  image: string;
  href: string;
}

export default function BookCard({
  title,
  tagline,
  description,
  image,
  href,
}: BookCardProps) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] transition duration-300 hover:-translate-y-2 hover:border-[#E8D6A8] hover:shadow-2xl"
    >
      <div className="relative h-80 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        <div className="absolute bottom-6 left-6">
          <span className="rounded-full bg-[#E8D6A8] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#07161D]">
            {tagline}
          </span>
        </div>
      </div>

      <div className="p-8">
        <h3 className="font-heading text-3xl text-[#F4E2B8]">
          {title}
        </h3>

        <p className="mt-5 leading-8 text-gray-300">
          {description}
        </p>

        <div className="mt-8 flex items-center text-[#E8D6A8] font-semibold">
          Begin the Journey
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}