"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";

const stories = [
  {
    title: "The Moss Bride",
    tagline: "Available Now",
    description:
      "When a grieving woman discovers a single white flower blooming high within an ancient cypress, she is drawn into a haunting legend where love, loss, and the bayou blur the line between memory and myth.",
    image: "/images/stories/the-moss-bride.png",
    href: "/stories/short-stories/the-moss-bride",
  },
  {
    title: "Coming Soon",
    tagline: "More Legends",
    description:
      "More haunting tales from the Bayou Universe are waiting beneath the moss. New legends will be added as they awaken.",
    image: "/images/stories/short-stories.png",
    href: "#",
  },
];

export default function ShortStoriesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#07161D] pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-[#E8D6A8]">
              Bayou Universe
            </p>

            <h1 className="mt-6 font-serif text-6xl text-[#F8F4EA]">
              Short Stories
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
              Not every legend becomes a novel. Some are whispered beneath
              ancient cypress trees, carried through the fog, and remembered
              only by those willing to listen. Explore standalone stories that
              expand the mysteries of the Bayou Universe.
            </p>
          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-2">
            {stories.map((story) => (
              <BookCard key={story.title} {...story} />
            ))}
          </div>

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