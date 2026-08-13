"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";

const books = [
  {
    title: "Beneath the Black Water",
    tagline: "Book One",
    description:
      "In 1810, eleven-year-old Lena Schexnaydre leaves Germany with her family in search of a new life in Louisiana. Guided by old traditions, whispered folklore, and a mysterious heirloom from her grandmother, Lena discovers that some stories cross oceans... and some promises never fade.",
    image: "/images/stories/beneath-the-black-water.png",
    href: "/stories/the-veil-chronicles/beneath-the-black-water",
  },
  {
    title: "The Bones of the Bayou",
    tagline: "Book Two • Coming Soon",
    description:
      "As the Schexnaydre family settles into their new home, ancient bargains awaken beneath the cypress trees and old promises demand to be honored.",
    image: "/images/stories/the-bones-of-the-bayou.png",
    href: "/stories/the-veil-chronicles/the-bones-of-the-bayou",
  },
  {
    title: "The Veil Remembers",
    tagline: "Book Three • Coming Soon",
    description:
      "The family's greatest secrets finally surface as generations of promises, sacrifices, and forgotten truths collide.",
    image: "/images/stories/the-veil-remembers.png",
    href: "/stories/the-veil-chronicles/the-veil-remembers",
  },
];

export default function TheVeilChroniclesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#07161D] pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">

          {/* Hero */}

          <section className="text-center">

            <p className="text-sm uppercase tracking-[0.45em] text-[#E8D6A8]">
              Historical Fantasy Trilogy
            </p>

            <h1 className="mt-6 font-serif text-6xl text-[#F8F4EA]">
              The Veil Chronicles
            </h1>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-300">
              Before the legends of Bayou Veil, there was a family whose
              journey across an ocean changed generations forever. Follow the
              Schexnaydre family from Germany to Louisiana as history, folklore,
              and quiet magic intertwine to reveal the origins of the Bayou
              Universe.
            </p>

          </section>

          {/* Trilogy */}

          <section className="mt-24 grid gap-10 lg:grid-cols-3">

            {books.map((book) => (
              <BookCard
                key={book.title}
                {...book}
              />
            ))}

          </section>

          {/* Meet the Family */}

          <section className="mx-auto mt-28 max-w-5xl rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-12 text-center">

            <p className="text-sm uppercase tracking-[0.4em] text-[#E8D6A8]">
              The Family Behind the Legend
            </p>

            <h2 className="mt-5 font-serif text-4xl text-[#F4E2B8]">
              Meet the Schexnaydres
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">
              Before the legends of Bayou Veil, there was a family beginning
              a journey that would change generations forever. Meet Johann,
              Elise, Lena, Rein, and Großmutter Adelheid, and discover the
              people at the beginning of the Bayou Universe.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

              <Link
                href="/stories/the-veil-chronicles/characters"
                className="rounded-full bg-[#E8D6A8] px-8 py-4 font-semibold text-[#07161D] transition hover:scale-105"
              >
                Meet the Schexnaydres →
              </Link>

              <Link
                href="/stories/the-veil-chronicles/the-archive"
                className="rounded-full border border-[#E8D6A8] px-8 py-4 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
              >
                Explore the Archive
              </Link>

            </div>

          </section>

          {/* About the Trilogy */}

          <section className="mx-auto mt-28 max-w-5xl rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-12">

            <h2 className="text-center font-serif text-4xl text-[#F4E2B8]">
              About the Trilogy
            </h2>

            <div className="mt-10 space-y-8 text-lg leading-9 text-gray-300">

              <p>
                Set in the early 1800s,{" "}
                <strong>The Veil Chronicles</strong> follows the Schexnaydre
                family as they leave Germany to begin a new life in Louisiana.
                What begins as an immigrant's journey soon becomes the origin
                of a centuries-old legacy.
              </p>

              <p>
                Through forgotten folklore, family heirlooms, whispered rules,
                and ancient promises, the trilogy reveals how the Veil first
                touched the Schexnaydre family and how their choices shaped the
                Bayou Universe for generations to come.
              </p>

              <p>
                Rich with history, folklore, family, and quiet wonder,
                <strong> The Veil Chronicles</strong> serves as the historical
                foundation of the Bayou Universe and the events that eventually
                unfold in <strong>Bayou Veil</strong>.
              </p>

            </div>

          </section>

          {/* Archive Introduction */}

          <section className="mx-auto mt-20 max-w-5xl rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-10 text-center">

            <p className="text-sm uppercase tracking-[0.4em] text-[#E8D6A8]">
              Preserved Through Generations
            </p>

            <h2 className="mt-4 font-serif text-3xl text-[#F4E2B8]">
              Explore the Veil Chronicles Archive
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-300">
              Explore the family tree, historical timeline, heirlooms, maps,
              folklore, traditions, and journals that preserve the history
              behind the stories.
            </p>

            <div className="mt-8">

              <Link
                href="/stories/the-veil-chronicles/the-archive"
                className="inline-flex rounded-full border border-[#E8D6A8] px-8 py-4 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
              >
                Enter the Archive →
              </Link>

            </div>

          </section>

          {/* Back */}

          <div className="mt-20 flex justify-center">

            <Link
              href="/stories"
              className="rounded-full border border-[#E8D6A8] px-8 py-4 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
            >
              ← Back to Stories
            </Link>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}