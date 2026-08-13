"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HerbPouchPage() {
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
              Grandmother's Herb Pouch
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">
              Woven from sturdy linen and filled with carefully gathered herbs,
              this humble pouch carried generations of traditional knowledge.
              Though small enough to fit in a pocket, it held the wisdom,
              comfort, and healing practices of the Schexnaydre family.
            </p>

          </div>

          {/* Image */}

          <div className="relative mx-auto mt-20 h-[650px] max-w-3xl overflow-hidden rounded-3xl border border-[#E8D6A8]/20">

            <Image
              src="/images/stories/heirlooms/herb-pouch.png"
              alt="Grandmother's Herb Pouch"
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
                  TVC-H002
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
                  Handwoven Linen, Cotton Cord, Dried Herbs
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#E8D6A8]">
                  First Recorded Owner
                </h3>
                <p className="mt-2 text-gray-300">
                  Adelheid Schexnaydre
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
                  Preserved Family Heirloom
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
                Long before the family's journey to Louisiana, Adelheid gathered
                herbs from forests, meadows, and cottage gardens throughout her
                homeland. Carefully drying and storing each plant inside a
                handwoven pouch, she preserved remedies that had been taught
                through generations of mothers and grandmothers.
              </p>

              <p>
                The herb pouch traveled safely across the Atlantic with the
                Schexnaydre family. Although many of the familiar European
                plants could no longer be found, Adelheid gradually learned
                which native Louisiana herbs could serve similar purposes,
                blending old traditions with new knowledge.
              </p>

              <p>
                Over time, the pouch became far more than a container for herbs.
                It represented the family's ability to adapt without forgetting
                where they came from. Each generation inherited not only the
                pouch itself, but the wisdom, compassion, and respect for nature
                that it embodied.
              </p>

            </div>

          </section>

          {/* Symbolism */}

          <section className="mx-auto mt-20 max-w-5xl rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-10">

            <h2 className="font-serif text-4xl text-[#F4E2B8]">
              Symbolism
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-300">
              Grandmother's Herb Pouch symbolizes healing, resilience,
              knowledge, and the enduring connection between family and the
              natural world. Though its contents changed over the years, the
              traditions it carried remained a constant reminder that wisdom is
              one of the greatest inheritances a family can pass from one
              generation to the next.
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