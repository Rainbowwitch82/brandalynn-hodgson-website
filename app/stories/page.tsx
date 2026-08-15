"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";

const series = [
  {
    title: "Bayou Veil",
    tagline: "Enter the Veil",
    description:
      "Walk beside Seraphina as ancient magic awakens beneath the moss and forgotten promises return.",
    image: "/images/stories/bayou-veil/bayou-veil-cover.png",
    href: "/stories/bayou-veil",
  },
  {
    title: "Little Bayou Veil",
    tagline: "Follow Milo",
    description:
      "Join Milo the Maine Coon on magical adventures filled with friendship, courage, and wonder.",
    image: "/images/stories/little-bayou-veil.png",
    href: "/stories/little-bayou-veil",
  },
  {
    title: "The Veil Chronicles",
    tagline: "Travel with Lena",
    description:
      "Journey across the Atlantic as the Schexnaydre family leaves Europe carrying stories, traditions, and ancient promises.",
    image: "/images/stories/the-veil-chronicles.png",
    href: "/stories/the-veil-chronicles",
  },
  {
    title: "Bayou Heir",
    tagline: "Meet the Heir",
    description:
      "Generations later, a mysterious child awakens a legacy that could reshape the Bayou forever.",
    image: "/images/stories/the-bayou-heir.png",
    href: "/stories/bayou-heir",
  },
  {
    title: "Short Stories",
    tagline: "Discover the Legends",
    description:
      "Step into haunting tales, forgotten folklore, and whispered legends from across the Bayou Universe.",
    image: "/images/stories/short-stories.png",
    href: "/stories/short-stories",
  },
];

export default function StoriesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#07161D] pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <p className="uppercase tracking-[0.4em] text-[#E8D6A8] text-sm">
              The Bayou Universe
            </p>

            <h1 className="mt-6 font-heading text-6xl text-[#F8F4EA]">
              Explore Every Story
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
              Every tale beneath the moss is connected. From Seraphina's
              magical journey to Milo's enchanting adventures, discover each
              series that makes up the Bayou Universe.
            </p>
          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {series.map((story) => (
              <BookCard key={story.title} {...story} />
            ))}
          </div>

          <div className="mt-24 text-center">
            <Link
              href="/"
              className="inline-flex rounded-full border border-[#E8D6A8] px-8 py-4 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
            >
              ← Return Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}