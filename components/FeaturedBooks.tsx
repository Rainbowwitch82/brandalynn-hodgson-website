"use client";

import BookCard from "./BookCard";

const featuredBooks = [
  {
    title: "Milo and the Moonflower",
    tagline: "Available Now",
    description:
      "Milo's first magical adventure begins when a mysterious moonflower blooms beneath the whispering moss, leading him on a journey of friendship, courage, and wonder.",
    image: "/images/stories/milo-and-the-moonflower.png",
    href: "/books/little-bayou-veil/milo-and-the-moonflower",
  },
  {
    title: "Beneath the Black Water",
    tagline: "Coming Soon",
    description:
      "The first novel in The Veil Chronicles follows eleven-year-old Lena Schexnaydre as her family leaves Germany for Louisiana, carrying ancient traditions and promises that refuse to fade.",
    image: "/images/stories/beneath-the-black-water.png",
    href: "/books/the-veil-chronicles/beneath-the-black-water",
  },
  {
    title: "Bayou Veil: Beneath the Moss",
    tagline: "In Development",
    description:
      "Seraphina's journey begins as hidden family secrets and ancient bayou magic awaken beneath the moss, forever changing her understanding of her family's past.",
    image: "/images/stories/bayou-veil/beneath-the-moss.png",
    href: "/books/bayou-veil/beneath-the-moss",
  },
];

export default function FeaturedBooks() {
  return (
    <section className="bg-[#07161D] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="uppercase tracking-[0.4em] text-[#E8D6A8] text-sm">
            Featured Books
          </p>

          <h2 className="mt-4 font-heading text-5xl text-[#F4E2B8]">
            Start Your Adventure
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Whether you're discovering the Bayou Universe for the first time or
            continuing your journey, these stories are the perfect place to
            begin.
          </p>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {featuredBooks.map((book) => (
            <BookCard
              key={book.title}
              title={book.title}
              tagline={book.tagline}
              description={book.description}
              image={book.image}
              href={book.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}