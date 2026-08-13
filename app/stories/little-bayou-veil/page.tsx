"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";

const books = [
    {
    title: "Milo and the Moonflower",
    tagline: "Book One",
    description:
      "A mysterious glowing flower blooms beneath the moonlight, leading Milo on a magical adventure where bravery and compassion light the way.",
    image: "/images/stories/milo-and-the-moonflower.png",
    href: "/stories/little-bayou-veil/milo-and-the-moonflower",
  },
  {
    title: "Milo and the Whispering Moss",
    tagline: "Book Two",
    description:
      "When curious little Milo follows whispers drifting through the ancient moss, he discovers that kindness, courage, and friendship can awaken magic hidden in the bayou.",
    image: "/images/stories/milo-and-the-whispering-moss.png",
    href: "/stories/little-bayou-veil/milo-and-the-whispering-moss",
  },
  
];

export default function LittleBayouVeilPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#07161D] pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <p className="uppercase tracking-[0.4em] text-[#E8D6A8] text-sm">
              Little Bayou Veil
            </p>

            <h1 className="mt-6 font-heading text-6xl text-[#F8F4EA]">
              Magical Adventures Await
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
              Join Milo, an adventurous Maine Coon, as he explores enchanted
              bayous filled with talking animals, glowing flowers, ancient
              trees, and timeless lessons about friendship, courage, and
              believing in the magic all around us.
            </p>
          </div>

          <div className="mt-20 grid gap-10 lg:grid-cols-2">
            {books.map((book) => (
              <BookCard key={book.title} {...book} />
            ))}
          </div>

          <div className="mt-20 flex justify-center gap-6 flex-wrap">
            <Link
              href="/stories"
              className="rounded-full border border-[#E8D6A8] px-8 py-4 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
            >
              ← Back to Stories
            </Link>

            <Link
              href="/"
              className="rounded-full bg-[#E8D6A8] px-8 py-4 font-semibold text-[#07161D] transition hover:scale-105"
            >
              Return Home
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}