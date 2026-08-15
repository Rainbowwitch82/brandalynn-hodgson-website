"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const books = [
  {
    title: "Beneath the Moss",
    subtitle: "Book One",
    image: "/images/stories/bayou-veil/beneath-the-moss-cover.png",
    href: "/stories/bayou-veil/beneath-the-moss",
    description:
      "Ancient magic awakens beneath the Spanish moss as Seraphina Schexnaydre returns home to uncover secrets buried for generations.",
  },
  {
    title: "Rituals of the Drowned",
    subtitle: "Book Two",
    image: "/images/stories/bayou-veil/rituals-of-the-drowned.png",
    href: "/stories/bayou-veil/rituals-of-the-drowned",
    description:
      "As the Veil weakens, forgotten rituals rise from the black waters, threatening everything Seraphina holds dear.",
  },
  {
    title: "Ashes of the Crescent",
    subtitle: "Book Three",
    image: "/images/stories/bayou-veil/ashes-of-the-crescent.png",
    href: "/stories/bayou-veil/ashes-of-the-crescent",
    description:
      "The final battle for the Veil begins beneath a silver crescent moon where ancient promises must finally be fulfilled.",
  },
];

export default function BayouVeilPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#07161D] pt-32 pb-24">

        <div className="mx-auto max-w-7xl px-6">

          {/* Hero */}

          <section className="text-center">

            <p className="uppercase tracking-[0.45em] text-sm text-[#E8D6A8]">
              Book Series
            </p>

            <h1 className="mt-6 font-serif text-6xl text-[#F8F4EA]">
              Bayou Veil
            </h1>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-300">
              Beneath Louisiana's moss-draped cypress trees, ancient magic
              stirs once more. Journey with Seraphina Schexnaydre as forgotten
              family secrets, powerful folklore, and the mysterious Veil shape
              the destiny of generations.
            </p>

          </section>

          {/* Books */}

          <section className="mt-24 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

            {books.map((book) => (
              <Link
                key={book.title}
                href={book.href}
                className="group overflow-hidden rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] transition duration-300 hover:-translate-y-2 hover:border-[#E8D6A8] hover:shadow-2xl hover:shadow-[#E8D6A8]/10"
              >
                <div className="relative aspect-[2/3] overflow-hidden">

                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                </div>

                <div className="p-8">

                  <p className="uppercase tracking-[0.35em] text-xs text-[#E8D6A8]">
                    {book.subtitle}
                  </p>

                  <h2 className="mt-3 font-serif text-3xl text-[#F4E2B8]">
                    {book.title}
                  </h2>

                  <p className="mt-5 leading-8 text-gray-300">
                    {book.description}
                  </p>

                  <span className="mt-6 inline-flex items-center font-semibold text-[#E8D6A8]">
                    Explore the Novel
                    <span className="ml-2 transition-transform group-hover:translate-x-2">
                      →
                    </span>
                  </span>

                </div>

              </Link>
            ))}

          </section>

          {/* Reading Order */}

          <section className="mx-auto mt-24 max-w-5xl rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-12 text-center">

            <h2 className="font-serif text-4xl text-[#F4E2B8]">
              Reading Order
            </h2>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-5 text-xl">

              <span>① Beneath the Moss</span>

              <span className="text-[#E8D6A8]">→</span>

              <span>② Rituals of the Drowned</span>

              <span className="text-[#E8D6A8]">→</span>

              <span>③ Ashes of the Crescent</span>

            </div>

          </section>

          {/* Navigation */}

          <section className="mt-24 text-center">

            <div className="flex flex-wrap justify-center gap-6">

              <Link
                href="/stories/the-veil-chronicles"
                className="rounded-full border border-[#E8D6A8] px-8 py-4 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
              >
                📜 Explore The Veil Chronicles
              </Link>

              <Link
                href="/stories"
                className="rounded-full border border-[#E8D6A8] px-8 py-4 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
              >
                ← Back to Stories
              </Link>

            </div>

          </section>

        </div>

      </main>

      <Footer />
    </>
  );
}