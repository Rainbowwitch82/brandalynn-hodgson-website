"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SilverLocketPage() {
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
              The Schexnaydre Silver Locket
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">
              Forged from sterling silver generations before the Schexnaydre
              family crossed the Atlantic, this heirloom has quietly traveled
              through centuries of family history. Every scratch, every worn
              edge, and every careful repair bears witness to the lives it has
              touched.
            </p>

          </div>

          {/* Image */}

          <div className="relative mx-auto mt-20 h-[650px] max-w-3xl overflow-hidden rounded-3xl border border-[#E8D6A8]/20">

            <Image
              src="/images/stories/heirlooms/silver-locket.png"
              alt="The Schexnaydre Silver Locket"
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
                  TVC-H001
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
                  Handcrafted Sterling Silver
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
                  The Veil Chronicles • Bayou Veil • Bayou Heir
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#E8D6A8]">
                  Current Status
                </h3>
                <p className="mt-2 text-gray-300">
                  Still Passed Through the Schexnaydre Family
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
                The Silver Locket had already become a treasured family
                possession long before Adelheid inherited it. Passed carefully
                from one generation to the next, it represented continuity,
                remembrance, and the promise that no member of the family would
                ever truly be forgotten.
              </p>

              <p>
                During the family's journey from Germany to Louisiana, the
                locket was carried inside the Hope Chest alongside the family's
                other treasured heirlooms. Though homes, landscapes, and even
                languages changed, the silver locket remained a constant link to
                the generations that came before.
              </p>

              <p>
                As decades became centuries, the locket continued its journey
                through the Schexnaydre bloodline. Each new owner cared for it,
                preserving its history until it eventually found its way into
                the hands of Seraphina Schexnaydre. Once again, the family
                legacy continued through the quiet passing of a single silver
                heirloom.
              </p>

            </div>

          </section>

          {/* Known Owners */}

          <section className="mx-auto mt-20 max-w-5xl rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-10">

            <h2 className="font-serif text-4xl text-[#F4E2B8]">
              Known Owners
            </h2>

            <div className="mt-8 space-y-4 text-lg text-gray-300">

              <p>• Adelheid Schexnaydre</p>
              <p>↓</p>

              <p>• Johann & Elise Schexnaydre</p>
              <p>↓</p>

              <p>• Reinhard Schexnaydre</p>
              <p>↓</p>

              <p>• Passed Through Many Generations</p>
              <p>↓</p>

              <p>• Seraphina Schexnaydre</p>

            </div>

          </section>

          {/* Symbolism */}

          <section className="mx-auto mt-20 max-w-5xl rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-10">

            <h2 className="font-serif text-4xl text-[#F4E2B8]">
              Symbolism
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-300">
              The Silver Locket symbolizes memory, family, love, and the
              unbroken thread that connects every generation of the
              Schexnaydre family. More than an heirloom, it is a living witness
              to centuries of history, quietly carrying the family's legacy
              from one keeper to the next.
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