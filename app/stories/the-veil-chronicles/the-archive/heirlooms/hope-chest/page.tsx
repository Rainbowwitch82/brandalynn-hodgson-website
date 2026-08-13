"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HopeChestPage() {
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
              The Hope Chest
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">
              Crafted from sturdy oak and carried across the Atlantic, the Hope
              Chest protected the Schexnaydre family's most treasured
              possessions. Within its worn wooden walls rested the memories,
              traditions, and heirlooms that would connect future generations to
              their German roots.
            </p>

          </div>

          {/* Image */}

          <div className="relative mx-auto mt-20 h-[650px] max-w-3xl overflow-hidden rounded-3xl border border-[#E8D6A8]/20">

            <Image
              src="/images/stories/heirlooms/hope-chest.png"
              alt="The Hope Chest"
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
                  TVC-H003
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
                  Handcrafted Oak with Iron Hardware
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
                The Hope Chest was built in Germany as a wedding gift for
                Adelheid, intended to hold linens, keepsakes, and the treasured
                belongings she would carry into her new life. Over time, it
                became much more than a bridal chest. It became the family's
                portable history.
              </p>

              <p>
                When Johann and Elise prepared to leave their homeland, the
                chest was carefully filled with the family's most cherished
                possessions. Inside rested the silver locket, the Family Bible,
                the herb pouch, family letters, the carved wooden woman, and
                countless keepsakes that represented the life they were leaving
                behind.
              </p>

              <p>
                The Hope Chest endured the difficult voyage across the Atlantic
                before finding its place in the Schexnaydre home in Louisiana.
                Though the wood bears the marks of age and travel, it continues
                to protect the family's history, reminding every generation that
                home is not simply a place, but the memories and traditions we
                choose to carry with us.
              </p>

            </div>

          </section>

          {/* Contents */}

          <section className="mx-auto mt-20 max-w-5xl rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-10">

            <h2 className="font-serif text-4xl text-[#F4E2B8]">
              Known Contents
            </h2>

            <ul className="mt-8 space-y-4 text-lg text-gray-300 list-disc pl-6">
              <li>The Schexnaydre Silver Locket</li>
              <li>The Family Bible</li>
              <li>The Family Rosary</li>
              <li>Grandmother's Herb Pouch</li>
              <li>Family Letters</li>
              <li>The Carved Wooden Woman</li>
              <li>Pressed Wildflowers</li>
              <li>Immigration Papers</li>
              <li>The Brass Candle Holder</li>
              <li>The Embroidered Sampler</li>
              <li>The Silver Key</li>
            </ul>

          </section>

          {/* Symbolism */}

          <section className="mx-auto mt-20 max-w-5xl rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-10">

            <h2 className="font-serif text-4xl text-[#F4E2B8]">
              Symbolism
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-300">
              The Hope Chest represents family, remembrance, resilience, and
              new beginnings. It embodies the courage to leave one home while
              carrying the heart of that home into another. Every heirloom it
              protected became part of the living legacy that shaped the
              Schexnaydre family for generations to come.
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