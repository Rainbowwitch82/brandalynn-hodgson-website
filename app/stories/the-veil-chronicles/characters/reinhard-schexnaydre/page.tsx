"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ReinhardSchexnaydrePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#07161D] pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">

          {/* Hero */}

          <section className="grid items-center gap-12 lg:grid-cols-2">

            {/* Character Image */}

            <div className="relative overflow-hidden rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] shadow-2xl">

              <div className="relative aspect-[4/5]">

                <Image
                  src="/images/stories/characters/reinhard-schexnaydre.png"
                  alt="Reinhard Rein Schexnaydre"
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-8 left-8">

                  <p className="text-sm uppercase tracking-[0.4em] text-[#E8D6A8]">
                    The Veil Chronicles
                  </p>

                  <p className="mt-2 text-lg italic text-[#F4E2B8]">
                    Son • Brother • Protector
                  </p>

                </div>

              </div>

            </div>

            {/* Character Introduction */}

            <div>

              <p className="text-sm uppercase tracking-[0.45em] text-[#E8D6A8]">
                The Schexnaydre Family
              </p>

              <h1 className="mt-5 font-serif text-5xl leading-tight text-[#F8F4EA] md:text-6xl">
                Reinhard "Rein"
                <br />
                Schexnaydre
              </h1>

              <p className="mt-5 text-xl italic text-[#E8D6A8]">
                Son • Sohn
              </p>

              <p className="mt-8 text-lg leading-9 text-gray-300">
                Reinhard, known to his family as Rein, is thirteen years old
                when the Schexnaydre family begins its journey toward the New
                World. As Lena's older brother, he stands at the edge of
                childhood while beginning to understand the responsibilities
                that come with being the eldest son.
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-300">
                The journey will take Rein away from everything familiar. As
                the family leaves the old world behind, he must grow alongside
                them and learn what it means to protect the people he loves.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                <div className="rounded-2xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-6">

                  <p className="text-xs uppercase tracking-widest text-[#E8D6A8]">
                    Age in 1810
                  </p>

                  <p className="mt-2 font-serif text-2xl text-[#F4E2B8]">
                    13
                  </p>

                </div>

                <div className="rounded-2xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-6">

                  <p className="text-xs uppercase tracking-widest text-[#E8D6A8]">
                    Birthdate
                  </p>

                  <p className="mt-2 font-serif text-2xl text-[#F4E2B8]">
                    August 30, 1797
                  </p>

                </div>

              </div>

            </div>

          </section>

          {/* His Role */}

          <section className="mx-auto mt-28 max-w-5xl">

            <div className="text-center">

              <p className="text-sm uppercase tracking-[0.4em] text-[#E8D6A8]">
                The Older Brother
              </p>

              <h2 className="mt-5 font-serif text-4xl text-[#F4E2B8]">
                Growing Into Responsibility
              </h2>

            </div>

            <div className="mt-10 rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-10">

              <p className="text-lg leading-9 text-gray-300">
                Rein is only thirteen, but being the oldest child means that
                he is already beginning to understand that his family will
                depend on him in ways they may not yet say aloud.
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-300">
                Leaving Germany means leaving behind the places and routines
                that have defined his childhood. The journey toward Louisiana
                will force him to see the world differently.
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-300">
                For Rein, growing older is no longer something that can simply
                wait for the future. The journey has already begun.
              </p>

            </div>

          </section>

          {/* Family */}

          <section className="mx-auto mt-24 max-w-5xl">

            <div className="text-center">

              <p className="text-sm uppercase tracking-[0.4em] text-[#E8D6A8]">
                His Family
              </p>

              <h2 className="mt-5 font-serif text-4xl text-[#F4E2B8]">
                The Schexnaydre Family
              </h2>

            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-4">

              <Link
                href="/stories/the-veil-chronicles/characters/adelheid-schexnaydre"
                className="rounded-2xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-6 text-center transition hover:-translate-y-1 hover:border-[#E8D6A8]"
              >

                <p className="text-sm text-[#E8D6A8]">
                  Grandmother
                </p>

                <p className="mt-2 font-serif text-xl text-[#F4E2B8]">
                  Adelheid
                </p>

              </Link>

              <Link
                href="/stories/the-veil-chronicles/characters/johann-schexnaydre"
                className="rounded-2xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-6 text-center transition hover:-translate-y-1 hover:border-[#E8D6A8]"
              >

                <p className="text-sm text-[#E8D6A8]">
                  Father
                </p>

                <p className="mt-2 font-serif text-xl text-[#F4E2B8]">
                  Johann
                </p>

              </Link>

              <Link
                href="/stories/the-veil-chronicles/characters/elise-schexnaydre"
                className="rounded-2xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-6 text-center transition hover:-translate-y-1 hover:border-[#E8D6A8]"
              >

                <p className="text-sm text-[#E8D6A8]">
                  Mother
                </p>

                <p className="mt-2 font-serif text-xl text-[#F4E2B8]">
                  Elise
                </p>

              </Link>

              <Link
                href="/stories/the-veil-chronicles/characters/lena-schexnaydre"
                className="rounded-2xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-6 text-center transition hover:-translate-y-1 hover:border-[#E8D6A8]"
              >

                <p className="text-sm text-[#E8D6A8]">
                  Younger Sister
                </p>

                <p className="mt-2 font-serif text-xl text-[#F4E2B8]">
                  Magdalena
                </p>

              </Link>

            </div>

          </section>

          {/* Brother and Sister */}

          <section className="mx-auto mt-24 max-w-5xl">

            <div className="grid items-center gap-10 md:grid-cols-2">

              <div>

                <p className="text-sm uppercase tracking-[0.4em] text-[#E8D6A8]">
                  Brother & Sister
                </p>

                <h2 className="mt-5 font-serif text-4xl text-[#F4E2B8]">
                  Rein & Lena
                </h2>

                <p className="mt-6 text-lg leading-9 text-gray-300">
                  Rein is two years older than Lena. That small difference in
                  age places him in the role of older brother while still
                  leaving him close enough to share many of the same childhood
                  experiences.
                </p>

                <p className="mt-6 text-lg leading-9 text-gray-300">
                  Together they enter a new world where the things their family
                  has carried with them may hold meanings neither sibling fully
                  understands yet.
                </p>

              </div>

              <Link
                href="/stories/the-veil-chronicles/characters/lena-schexnaydre"
                className="rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-10 text-center transition hover:-translate-y-1 hover:border-[#E8D6A8]"
              >

                <p className="text-sm uppercase tracking-widest text-[#E8D6A8]">
                  Younger Sister • 11
                </p>

                <h3 className="mt-4 font-serif text-3xl text-[#F4E2B8]">
                  Magdalena "Lena"
                </h3>

                <p className="mt-5 leading-8 text-gray-300">
                  Explore Lena's journey at the beginning of the family's
                  story.
                </p>

                <div className="mt-6 font-semibold text-[#E8D6A8]">
                  Meet Lena →
                </div>

              </Link>

            </div>

          </section>

          {/* Family Heirlooms */}

          <section className="mx-auto mt-24 max-w-5xl">

            <div className="text-center">

              <p className="text-sm uppercase tracking-[0.4em] text-[#E8D6A8]">
                Family Heirlooms
              </p>

              <h2 className="mt-5 font-serif text-4xl text-[#F4E2B8]">
                What the Family Carries Forward
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
                The Schexnaydres carry more than possessions across the
                Atlantic. Their heirlooms preserve memories, traditions, and
                pieces of the world they are leaving behind.
              </p>

            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">

              <Link
                href="/stories/the-veil-chronicles/archive/heirlooms/hope-chest"
                className="rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-8 transition hover:-translate-y-1 hover:border-[#E8D6A8]"
              >

                <p className="text-sm uppercase tracking-widest text-[#E8D6A8]">
                  Family Heirloom
                </p>

                <h3 className="mt-3 font-serif text-2xl text-[#F4E2B8]">
                  The Hope Chest
                </h3>

                <p className="mt-4 leading-7 text-gray-300">
                  A family chest carrying treasured possessions and memories
                  across the Atlantic.
                </p>

              </Link>

              <Link
                href="/stories/the-veil-chronicles/archive/heirlooms/locket"
                className="rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-8 transition hover:-translate-y-1 hover:border-[#E8D6A8]"
              >

                <p className="text-sm uppercase tracking-widest text-[#E8D6A8]">
                  Family Heirloom
                </p>

                <h3 className="mt-3 font-serif text-2xl text-[#F4E2B8]">
                  The Silver Locket
                </h3>

                <p className="mt-4 leading-7 text-gray-300">
                  A silver family locket whose story continues through
                  generations of Schexnaydre descendants.
                </p>

              </Link>

            </div>

          </section>

          {/* Legacy */}

          <section className="mx-auto mt-24 max-w-5xl rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-10 text-center">

            <p className="text-sm uppercase tracking-[0.4em] text-[#E8D6A8]">
              The Legacy
            </p>

            <h2 className="mt-5 font-serif text-4xl text-[#F4E2B8]">
              The Older Brother
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-300">
              Rein begins the journey at thirteen, old enough to understand
              that his family is entering an uncertain future, but young
              enough that he is still discovering who he will become.
            </p>

            <p className="mx-auto mt-6 max-w-3xl text-lg italic leading-9 text-gray-300">
              Thirteen years old.
              <br />
              Two years older than Lena.
              <br />
              A new world waiting beyond the water.
            </p>

          </section>

          {/* Navigation */}

          <div className="mt-20 flex flex-wrap justify-center gap-5">

            <Link
              href="/stories/the-veil-chronicles/characters"
              className="rounded-full border border-[#E8D6A8] px-8 py-4 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
            >
              ← Character Archive
            </Link>

            <Link
              href="/stories/the-veil-chronicles"
              className="rounded-full bg-[#E8D6A8] px-8 py-4 font-semibold text-[#07161D] transition hover:scale-105"
            >
              Back to The Veil Chronicles →
            </Link>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}