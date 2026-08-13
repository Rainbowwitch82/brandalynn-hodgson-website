"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FamilyLettersPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#07161D] pt-32 pb-24">
        <div className="mx-auto max-w-6xl px-6">

          {/* Header */}

          <div className="text-center">

            <p className="uppercase tracking-[0.45em] text-[#E8D6A8] text-sm">
              The Archive • Heirlooms
            </p>

            <h1 className="mt-6 font-serif text-6xl text-[#F8F4EA]">
              Family Letters
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">
              Carefully folded and preserved through generations, these letters
              captured the hopes, fears, and everyday moments of the
              Schexnaydre family. Their ink has faded with time, but the voices
              within them continue to speak across centuries.
            </p>

          </div>

          {/* Image */}

          <div className="relative mx-auto mt-20 h-[650px] max-w-3xl overflow-hidden rounded-3xl border border-[#E8D6A8]/20">

            <Image
              src="/images/stories/heirlooms/family-letters.png"
              alt="Family Letters"
              fill
              className="object-cover"
            />

          </div>

          {/* Archive Record */}

          <section className="mx-auto mt-20 max-w-5xl rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-10">

            <h2 className="font-serif text-4xl text-[#F4E2B8]">
              Archive Record
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-2">

              <div>
                <h3 className="font-semibold text-[#E8D6A8]">
                  Artifact Number
                </h3>
                <p className="mt-2 text-gray-300">
                  TVC-H005
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#E8D6A8]">
                  Origin
                </h3>
                <p className="mt-2 text-gray-300">
                  Kingdom of Württemberg, Germany
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#E8D6A8]">
                  Material
                </h3>
                <p className="mt-2 text-gray-300">
                  Handmade Paper, Ink, Wax Seals
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#E8D6A8]">
                  First Recorded Owner
                </h3>
                <p className="mt-2 text-gray-300">
                  Johann & Elise Schexnaydre
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#E8D6A8]">
                  Appears In
                </h3>
                <p className="mt-2 text-gray-300">
                  The Veil Chronicles
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#E8D6A8]">
                  Current Status
                </h3>
                <p className="mt-2 text-gray-300">
                  Preserved Family Archive
                </p>
              </div>

            </div>

          </section>

          {/* History */}

          <section className="mx-auto mt-20 max-w-5xl">

            <h2 className="font-serif text-4xl text-[#F4E2B8]">
              History
            </h2>

            <div className="mt-8 space-y-8 text-lg leading-9 text-gray-300">

              <p>
                Long before telephones or modern communication, letters carried
                news between loved ones separated by distance. The Schexnaydre
                family carefully preserved correspondence with relatives who
                remained in Germany, ensuring that familiar names and memories
                would not be forgotten.
              </p>

              <p>
                Some letters spoke of joyful occasions such as births and
                weddings, while others carried news of hardship, loss, and the
                changing world across the Atlantic. Together they formed an
                intimate record of family life that no official document could
                ever capture.
              </p>

              <p>
                Carefully tied together with ribbon and stored among the
                family's most treasured possessions, the letters survived the
                journey to Louisiana and continued to grow as new generations
                added their own correspondence. Today they remain one of the
                richest surviving records of the Schexnaydre family's history.
              </p>

            </div>

          </section>

          {/* Symbolism */}

          <section className="mx-auto mt-20 max-w-5xl rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-10">

            <h2 className="font-serif text-4xl text-[#F4E2B8]">
              Symbolism
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-300">
              The Family Letters symbolize memory, connection, and the enduring
              power of written words. Even after voices fall silent, letters
              preserve emotions, relationships, and moments in time, allowing
              future generations to hear the echoes of those who came before.
            </p>

          </section>

          {/* Navigation */}

          <div className="mt-20 flex flex-wrap justify-center gap-6">

            <Link
              href="/stories/the-archive/heirlooms"
              className="rounded-full border border-[#E8D6A8] px-8 py-4 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
            >
              ← Back to Heirlooms
            </Link>

            <Link
              href="/stories/the-veil-chronicles"
              className="rounded-full bg-[#E8D6A8] px-8 py-4 font-semibold text-[#07161D] transition hover:scale-105"
            >
              The Veil Chronicles →
            </Link>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}