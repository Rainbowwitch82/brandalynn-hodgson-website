"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TheBonesOfTheBayouPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#07161D] pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">

          {/* Hero */}

          <section className="grid items-center gap-16 lg:grid-cols-2">

            <div>
              <p className="uppercase tracking-[0.45em] text-[#6FA96B] text-sm">
                The Veil Chronicles • Book Two
              </p>

              <h1 className="mt-6 font-serif text-6xl text-[#F8F4EA]">
                The Bones of the Bayou
              </h1>

              <div className="mt-8 inline-flex rounded-full bg-[#6FA96B]/20 px-5 py-2 text-[#B9E7AE]">
                Coming Soon
              </div>

              <p className="mt-10 text-lg leading-9 text-gray-300">
                As the Schexnaydre family begins building a new life in the
                Louisiana frontier, the bayou reveals that every blessing is
                rooted in an older promise. Beneath the moss-covered cypress
                trees lie forgotten graves, ancient bargains, and secrets that
                refuse to remain buried.
              </p>

              <div className="mt-12 flex flex-wrap gap-5">

                <Link
                  href="/stories/the-veil-chronicles/characters"
                  className="rounded-full bg-[#6FA96B] px-8 py-4 font-semibold text-[#07161D] transition hover:scale-105"
                >
                  Meet the Legacies
                </Link>

                <Link
                  href="/stories/the-veil-chronicles"
                  className="rounded-full border border-[#6FA96B] px-8 py-4 text-[#6FA96B] transition hover:bg-[#6FA96B] hover:text-[#07161D]"
                >
                  ← Back to Trilogy
                </Link>

              </div>
            </div>

            <div className="flex justify-center">

              <Image
                src="/images/stories/the-bones-of-the-bayou.png"
                alt="The Bones of the Bayou"
                width={500}
                height={750}
                className="rounded-3xl shadow-2xl"
                priority
              />

            </div>

          </section>

          {/* Synopsis */}

          <section className="mt-28 rounded-3xl border border-[#6FA96B]/20 bg-[#0B1F29] p-12">

            <h2 className="font-serif text-4xl text-[#F8F4EA]">
              Synopsis
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-300">
              Louisiana offers the Schexnaydres a chance to begin again, but the
              land remembers those who came before. Strange whispers drift
              through the cypress groves, forgotten graves emerge after heavy
              rains, and stories once dismissed as folklore become impossible to
              ignore. As Lena uncovers pieces of a mystery buried beneath the
              bayou, she learns that some family legacies are written not in
              ink, but in blood, memory, and the land itself.
            </p>

          </section>

          {/* Themes */}

          <section className="mt-20">

            <h2 className="text-center font-serif text-4xl text-[#F8F4EA]">
              Themes
            </h2>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

              {[
                "Family Legacy",
                "Louisiana Folklore",
                "Ancient Promises",
                "The Bayou Awakens",
              ].map((theme) => (
                <div
                  key={theme}
                  className="rounded-2xl border border-[#6FA96B]/20 bg-[#0B1F29] p-8 text-center"
                >
                  <p className="text-lg text-[#B9E7AE]">{theme}</p>
                </div>
              ))}

            </div>

          </section>

          {/* Navigation */}

          <section className="mt-28 flex flex-wrap justify-center gap-6">

            <Link
              href="/stories/the-veil-chronicles/beneath-the-black-water"
              className="rounded-full border border-[#6FA96B] px-8 py-4 text-[#6FA96B] transition hover:bg-[#6FA96B] hover:text-[#07161D]"
            >
              ← Book One
            </Link>

            <Link
              href="/stories/the-veil-chronicles/the-veil-remembers"
              className="rounded-full bg-[#6FA96B] px-8 py-4 font-semibold text-[#07161D] transition hover:scale-105"
            >
              Book Three →
            </Link>

          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}