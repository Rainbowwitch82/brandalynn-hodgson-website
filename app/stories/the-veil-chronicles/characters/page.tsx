"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CharacterCard from "@/components/CharacterCard";

const characters = [
  {
    name: "Großmutter Adelheid",
    role: "Grandmother • Großmutter",
    description:
      "The keeper of family traditions and the guardian of stories that were never meant to be forgotten. Adelheid carries the wisdom of generations and understands that some promises survive longer than the people who make them.",
    image: "/images/stories/characters/adelheid-schexnaydre.png",
    href: "/stories/the-veil-chronicles/characters/adelheid-schexnaydre",
  },
  {
    name: "Johann Schexnaydre",
    role: "Father • Vater",
    description:
      "A devoted husband, father, and provider determined to build a future for his family in Louisiana. Johann carries the weight of his family's legacy while facing an uncertain new world.",
    image: "/images/stories/characters/johann-schexnaydre.png",
    href: "/stories/the-veil-chronicles/characters/johann-schexnaydre",
  },
  {
    name: "Elise Schexnaydre",
    role: "Mother • Mutter",
    description:
      "The heart of the Schexnaydre family. Elise carries the traditions, healing knowledge, and love of her homeland with her as she begins a new life across the Atlantic.",
    image: "/images/stories/characters/elise-schexnaydre.png",
    href: "/stories/the-veil-chronicles/characters/elise-schexnaydre",
  },
  {
    name: "Reinhard 'Rein' Schexnaydre",
    role: "Son • Sohn",
    description:
      "At thirteen, Rein is Lena's older brother and already feels the responsibility of protecting his family. Serious, observant, and loyal, he is learning what it means to carry a family legacy.",
    image: "/images/stories/characters/reinhard-schexnaydre.png",
    href: "/stories/the-veil-chronicles/characters/reinhard-schexnaydre",
  },
  {
    name: "Magdalena 'Lena' Schexnaydre",
    role: "Daughter • Tochter",
    description:
      "Eleven-year-old Lena is curious, compassionate, and drawn toward the mysteries surrounding her family. Her journey begins with a treasured heirloom and a story much older than she realizes.",
    image: "/images/stories/characters/lena-schexnaydre.png",
    href: "/stories/the-veil-chronicles/characters/lena-schexnaydre",
  },
];

export default function CharactersPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#07161D] pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">

          {/* Hero */}

          <section className="text-center">

            <p className="text-sm uppercase tracking-[0.45em] text-[#E8D6A8]">
              The Veil Chronicles Archive
            </p>

            <h1 className="mt-6 font-serif text-6xl text-[#F8F4EA]">
              Meet the Schexnaydres
            </h1>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-300">
              Before the legends of Bayou Veil, there was a family preparing
              to leave everything they knew behind. Meet the people whose
              choices, memories, and traditions would shape generations to
              come.
            </p>

          </section>

          {/* Character Cards */}

          <section className="mt-24 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

            {characters.map((character) => (
              <CharacterCard
                key={character.name}
                {...character}
              />
            ))}

          </section>

          {/* Family Legacy */}

          <section className="mx-auto mt-28 max-w-5xl rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-12 text-center">

            <p className="text-sm uppercase tracking-[0.4em] text-[#E8D6A8]">
              The Family Legacy
            </p>

            <h2 className="mt-5 font-serif text-4xl text-[#F4E2B8]">
              One Family. Generations of Stories.
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">
              Their journey begins in Germany in 1810, but the story does not
              end when they cross the Atlantic. The memories they carry, the
              objects they preserve, and the promises they make will echo
              through generations of the Schexnaydre family.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

              <Link
                href="/stories/the-veil-chronicles/archive/family-tree"
                className="rounded-full bg-[#E8D6A8] px-8 py-4 font-semibold text-[#07161D] transition hover:scale-105"
              >
                Explore the Family Tree →
              </Link>

              <Link
                href="/stories/the-veil-chronicles/archive"
                className="rounded-full border border-[#E8D6A8] px-8 py-4 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
              >
                Explore the Archive
              </Link>

            </div>

          </section>

          {/* Back to Trilogy */}

          <div className="mt-20 flex justify-center">

            <Link
              href="/stories/the-veil-chronicles"
              className="rounded-full border border-[#E8D6A8] px-8 py-4 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
            >
              ← Back to The Veil Chronicles
            </Link>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}