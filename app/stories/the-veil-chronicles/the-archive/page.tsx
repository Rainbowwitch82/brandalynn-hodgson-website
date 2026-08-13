"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const archiveSections = [
  {
    title: "Heirlooms",
    description:
      "Explore the treasured objects passed through generations of the Schexnaydre family.",
    image: "/images/stories/heirlooms/hope-chest.png",
    href: "/stories/the-veil-chronicles/the-archive/heirlooms",
  },
  {
    title: "Characters",
    description:
      "Meet the people who shaped the history of the Schexnaydre family.",
    image: "/images/stories/characters/johann-schexnaydre.png",
    href: "/stories/the-veil-chronicles/characters",
  },
];

export default function ArchivePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#07161D] pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-[#E8D6A8] text-sm">
              The Veil Chronicles
            </p>

            <h1 className="mt-6 font-serif text-6xl text-[#F8F4EA]">
              The Archive
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">
              Welcome to the Schexnaydre Family Archive. Browse heirlooms,
              discover the family tree, and explore the history that connects
              The Veil Chronicles to Bayou Veil.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {archiveSections.map((section) => (
              <Link
                key={section.title}
                href={section.href}
                className="group overflow-hidden rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] transition hover:scale-[1.02]"
              >
                <div className="relative h-72">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <h2 className="font-serif text-3xl text-[#F4E2B8]">
                    {section.title}
                  </h2>

                  <p className="mt-4 text-gray-300 leading-8">
                    {section.description}
                  </p>

                  <span className="mt-6 inline-block text-[#E8D6A8] font-semibold">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}