"use client";

import Image from "next/image";
import Link from "next/link";

interface CharacterCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
  href: string;
}

export default function CharacterCard({
  name,
  role,
  description,
  image,
  href,
}: CharacterCardProps) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] transition duration-300 hover:-translate-y-2 hover:border-[#E8D6A8] hover:shadow-2xl hover:shadow-[#E8D6A8]/10"
    >
      {/* Portrait */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="absolute bottom-6 left-6">
          <span className="rounded-full bg-[#E8D6A8] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#07161D]">
            {role}
          </span>
        </div>
      </div>

      {/* Character Info */}
      <div className="p-8">
        <h3 className="font-heading text-3xl text-[#F4E2B8]">
          {name}
        </h3>

        <p className="mt-5 leading-8 text-gray-300">
          {description}
        </p>

        <div className="mt-8 flex items-center font-semibold text-[#E8D6A8]">
          View Archive
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}