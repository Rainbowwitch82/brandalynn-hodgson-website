"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function JohannSchexnaydrePage() {
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
                  src="/images/stories/characters/johann-schexnaydre.png"
                  alt="Johann Schexnaydre"
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
                    Father • Husband • Provider
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
                Johann
                <br />
                Schexnaydre
              </h1>

              <p className="mt-5 text-xl italic text-[#E8D6A8]">
                Father • Vater
              </p>

              <p className="mt-8 text-lg leading-9 text-gray-300">
                Johann Schexnaydre is the husband of Elise and father of
                Reinhard and Magdalena. As the family prepares to leave the
                familiar world behind, he carries the responsibility of
                building a future for the people who depend on him.
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-300">
                The journey toward Louisiana places Johann in unfamiliar
                circumstances, where the decisions he makes will become part
                of the legacy inherited by the generations that follow.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                <div className="rounded-2xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-6">
                  <p className="text-xs uppercase tracking-widest text-[#E8D6A8]">
                    Age in 1810
                  </p>

                  <p className="mt-2 font-serif text-2xl text-[#F4E2B8]">
                    38
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-6">
                  <p className="text-xs uppercase tracking-widest text-[#E8D6A8]">
                    Birthdate
                  </p>

                  <p className="mt-2 font-serif text-2xl text-[#F4E2B8]">
                    March 19, 1772
                  </p>
                </div>

              </div>

            </div>

          </section>

          {/* His Role */}

          <section className="mx-auto mt-28 max-w-5xl">

            <div className="text-center">

              <p className="text-sm uppercase tracking-[0.4em] text-[#E8D6A8]">
                The Father
              </p>

              <h2 className="mt-5 font-serif text-4xl text-[#F4E2B8]">
                Building a Future
              </h2>

            </div>

            <div className="mt-10 rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-10">

              <p className="text-lg leading-9 text-gray-300">
                Johann's role is rooted in his responsibility to his family.
                Leaving the familiar world behind means facing uncertainty,
                but the promise of a new life gives him reason to continue
                forward.
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-300">
                As husband and father, he must consider not only the journey
                itself but the future waiting on the other side of the
                Atlantic.
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-300">
                What Johann believes he is building for his children will
                become something much larger than he could have imagined.
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
                href="/stories/the-veil-chronicles/adelheid-schexnaydre"
                className="rounded-2xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-6 text-center transition hover:-translate-y-1 hover:border-[#E8D6A8]"
              >
                <p className="text-sm text-[#E8D6A8]">
                  Mother
                </p>

                <p className="mt-2 font-serif text-xl text-[#F4E2B8]">
                  Adelheid
                </p>
              </Link>

              <Link
                href="/stories/the-veil-chronicles/elise-schexnaydre"
                className="rounded-2xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-6 text-center transition hover:-translate-y-1 hover:border-[#E8D6A8]"
              >
                <p className="text-sm text-[#E8D6A8]">
                  Wife
                </p>

                <p className="mt-2 font-serif text-xl text-[#F4E2B8]">
                  Elise
                </p>
              </Link>

              <Link
                href="/stories/the-veil-chronicles/rein-schexnaydre"
                className="rounded-2xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-6 text-center transition hover:-translate-y-1 hover:border-[#E8D6A8]"
              >
                <p className="text-sm text-[#E8D6A8]">
                  Son
                </p>

                <p className="mt-2 font-serif text-xl text-[#F4E2B8]">
                  Reinhard
                </p>
              </Link>

              <Link
                href="/stories/the-veil-chronicles/lena-schexnaydre"
                className="rounded-2xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-6 text-center transition hover:-translate-y-1 hover:border-[#E8D6A8]"
              >
                <p className="text-sm text-[#E8D6A8]">
                  Daughter
                </p>

                <p className="mt-2 font-serif text-xl text-[#F4E2B8]">
                  Magdalena
                </p>
              </Link>

            </div>

          </section>

          {/* His Children */}

          <section className="mx-auto mt-24 max-w-5xl">

            <div className="text-center">

              <p className="text-sm uppercase tracking-[0.4em] text-[#E8D6A8]">
                His Children
              </p>

              <h2 className="mt-5 font-serif text-4xl text-[#F4E2B8]">
                The Next Generation
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
                Johann's children will carry the family's history into a new
                world, becoming part of the generations that follow.
              </p>

            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">

              <Link
                href="/stories/the-veil-chronicles/rein-schexnaydre"
                className="rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-8 transition hover:-translate-y-1 hover:border-[#E8D6A8]"
              >

                <p className="text-sm uppercase tracking-widest text-[#E8D6A8]">
                  Son • 13
                </p>

                <h3 className="mt-3 font-serif text-2xl text-[#F4E2B8]">
                  Reinhard "Rein" Schexnaydre
                </h3>

                <p className="mt-4 leading-7 text-gray-300">
                  Johann's older child and Lena's protective older brother.
                </p>

              </Link>

              <Link
                href="/stories/the-veil-chronicles/lena-schexnaydre"
                className="rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-8 transition hover:-translate-y-1 hover:border-[#E8D6A8]"
              >

                <p className="text-sm uppercase tracking-widest text-[#E8D6A8]">
                  Daughter • 11
                </p>

                <h3 className="mt-3 font-serif text-2xl text-[#F4E2B8]">
                  Magdalena "Lena" Schexnaydre
                </h3>

                <p className="mt-4 leading-7 text-gray-300">
                  Johann's younger child whose journey begins at the threshold
                  of a new world.
                </p>

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
                The objects carried by the Schexnaydres preserve pieces of
                their history as the family begins a new chapter.
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
                  A family chest carrying treasured possessions, memories,
                  and pieces of the Schexnaydres' former home.
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
                  generations of Schexnaydres.
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
              A Father's Journey
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-300">
              Johann believes he is taking his family toward a better future.
              He cannot yet know how deeply the choices made during this
              journey will shape the generations that follow.
            </p>

            <p className="mx-auto mt-6 max-w-3xl text-lg italic leading-9 text-gray-300">
              A family can cross an ocean.
              <br />
              A legacy travels much farther.
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