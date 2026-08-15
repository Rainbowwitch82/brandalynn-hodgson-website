"use client";

import Image from "next/image";
import Link from "next/link";
import { MapData } from "./MapCard";

interface MapLightboxProps {
  map: MapData | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default function MapLightbox({
  map,
  onClose,
  onPrevious,
  onNext,
}: MapLightboxProps) {
  if (!map) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-7xl overflow-hidden rounded-3xl bg-[#07161D] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full bg-black/70 px-4 py-2 text-white transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
        >
          ✕
        </button>

        {/* Map */}
        <div className="relative h-[70vh] w-full">
          <Image
            src={map.image}
            alt={map.title}
            fill
            className="object-contain"
          />
        </div>

        {/* Information */}
        <div className="border-t border-[#E8D6A8]/20 p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-[#E8D6A8]">
            {map.period} • {map.location}
          </p>

          <h2 className="mt-3 font-serif text-4xl text-[#F4E2B8]">
            {map.title}
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-gray-300">
            {map.description}
          </p>

          {/* Previous / Next */}
          <div className="mt-10 flex flex-wrap justify-between gap-4">
            <button
              onClick={onPrevious}
              className="rounded-full border border-[#E8D6A8] px-6 py-3 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
            >
              ← Previous
            </button>

            <button
              onClick={onNext}
              className="rounded-full border border-[#E8D6A8] px-6 py-3 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
            >
              Next →
            </button>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/stories/the-veil-chronicles/the-archive"
              onClick={onClose}
              className="rounded-full border border-[#E8D6A8] px-6 py-3 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
            >
              ← Return to Archive
            </Link>

            <Link
              href="/stories/the-veil-chronicles"
              onClick={onClose}
              className="rounded-full bg-[#E8D6A8] px-6 py-3 font-semibold text-[#07161D] transition hover:scale-105"
            >
              Return to The Veil Chronicles →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}