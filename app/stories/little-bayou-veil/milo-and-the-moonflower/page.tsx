"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MiloAndTheMoonflowerPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#07161D] pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            {/* Book Cover */}
            <div className="flex justify-center">
              <div className="relative overflow-hidden rounded-3xl border border-[#E8D6A8]/20 shadow-2xl">
                <Image
                  src="/images/stories/milo-and-the-moonflower.png"
                  alt="Milo and the Moonflower"
                  width={500}
                  height={750}
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Book Information */}
            <div>

              <p className="uppercase tracking-[0.4em] text-[#E8D6A8] text-sm">
                Little Bayou Veil • Book One
              </p>

              <h1 className="mt-6 font-heading text-5xl text-[#F8F4EA]">
                Milo and the Moonflower
              </h1>

              <p className="mt-8 text-lg leading-8 text-gray-300">
                Deep within the quiet bayou, a mysterious moonflower blooms only
                beneath the light of the full moon. When Milo discovers its soft
                silver glow, he begins an unforgettable adventure that teaches
                the importance of kindness, bravery, and believing in yourself.
              </p>

              <div className="mt-10 space-y-4 text-gray-300">
                <p>
                  🌙 <strong>Genre:</strong> Children's Fantasy
                </p>

                <p>
                  📚 <strong>Series:</strong> Little Bayou Veil
                </p>

                <p>
                  👧 <strong>Recommended Ages:</strong> 0–10
                </p>

                <p>
                  🐈 <strong>Main Character:</strong> Milo the Maine Coon
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-4">

                <a
                  href="https://a.co/d/06UyrQ6G"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#E8D6A8] px-8 py-4 font-semibold text-[#07161D] transition hover:scale-105"
                >
                  🛒 Buy on Amazon
                </a>

                <Link
                  href="/stories/little-bayou-veil"
                  className="rounded-full border border-[#E8D6A8] px-8 py-4 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
                >
                  ← Back to Series
                </Link>

              </div>

            </div>

          </div>

          {/* About the Book */}

          <section className="mt-32 rounded-3xl border border-[#E8D6A8]/10 bg-[#0B1F29] p-12">

            <h2 className="font-heading text-4xl text-[#F8F4EA]">
              A Bedtime Adventure Filled with Wonder
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-300">
              Perfect for young readers and families, <em>Milo and the
              Moonflower</em> celebrates curiosity, friendship, and the quiet
              magic found in nature. Every page invites children to slow down,
              explore the beauty around them, and discover that even the
              smallest acts of kindness can make the brightest light shine.
            </p>

          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}