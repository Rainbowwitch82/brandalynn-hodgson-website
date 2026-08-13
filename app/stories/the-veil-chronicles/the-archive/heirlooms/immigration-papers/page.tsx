"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ImmigrationPapersPage() {
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
              Immigration Papers
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">
              Worn by time and carefully preserved, these immigration papers
              documented the Schexnaydre family's journey from Germany to
              Louisiana. More than official records, they marked the beginning
              of a new chapter that would shape generations to come.
            </p>

          </div>

          {/* Image */}

          <div className="relative mx-auto mt-20 h-[650px] max-w-3xl overflow-hidden rounded-3xl border border-[#E8D6A8]/20">

            <Image
              src="/images/stories/heirlooms/immigration-papers.png"
              alt="Immigration Papers"
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
                  TVC-H009
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
                  Johann Schexnaydre
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
                Before leaving Germany, Johann carefully gathered every
                document the family would need for their voyage. Birth records,
                travel permits, passenger documents, and official certificates
                were bundled together and protected from the elements throughout
                their journey across the Atlantic.
              </p>

              <p>
                These papers represented far more than legal requirements. They
                were proof of the family's identity, their origins, and their
                determination to begin a new life in Louisiana. Without them,
                the future they envisioned might never have become reality.
              </p>

              <p>
                Though the ink has faded and the paper bears the marks of age,
                the documents remain among the family's most important
                heirlooms. They preserve the exact moment when the
                Schexnaydre family's history divided into two chapters: the life
                they left behind in Germany and the legacy they would build in
                the Louisiana bayous.
              </p>

            </div>

          </section>

          {/* Historical Significance */}

          <section className="mx-auto mt-20 max-w-5xl rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-10">

            <h2 className="font-serif text-4xl text-[#F4E2B8]">
              Historical Significance
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-300">
              These documents stand as the official beginning of the
              Schexnaydre family's American story. While memories can fade and
              stories evolve with time, the immigration papers remain tangible
              evidence of the courage, sacrifice, and hope that carried the
              family across an ocean in search of a better future.
            </p>

          </section>

          {/* Symbolism */}

          <section className="mx-auto mt-20 max-w-5xl rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-10">

            <h2 className="font-serif text-4xl text-[#F4E2B8]">
              Symbolism
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-300">
              The Immigration Papers symbolize courage, perseverance, identity,
              and new beginnings. They remind each generation that every family
              has a starting point, and that the greatest journeys often begin
              with little more than hope, determination, and a handful of
              carefully protected documents.
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