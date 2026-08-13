"use client";

import Image from "next/image";
import Link from "next/link";

const series = [
  {
    title: "Bayou Veil",
    tagline: "Enter the Veil",
    description:
      "Walk beside Seraphina as ancient magic awakens beneath the moss and forgotten promises return.",
    image: "/images/stories/bayou-veil.png",
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

export default function ExploreTheBayouUniverse() {
  return (
    <section className="bg-[#0b120e] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-amber-400">
            Explore the Bayou Universe
          </p>

          <h2 className="mt-4 font-serif text-5xl text-amber-50">
            Every Story Begins Somewhere
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Follow one family across centuries, discover hidden magic beneath
            the moss, explore children's adventures with Milo, and uncover the
            legends that connect every corner of the Bayou Universe.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {series.map((story) => (
            <Link
              key={story.title}
              href={story.href}
              className="group overflow-hidden rounded-3xl border border-amber-400/20 bg-[#111b15] transition duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-500/20"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <span className="rounded-full bg-amber-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-black">
                    {story.tagline}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="font-serif text-3xl text-amber-100">
                  {story.title}
                </h3>

                <p className="mt-5 leading-7 text-gray-400">
                  {story.description}
                </p>

                <div className="mt-8 flex items-center font-semibold text-amber-400">
                  Begin the Journey
                  <span className="ml-2 transition group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}