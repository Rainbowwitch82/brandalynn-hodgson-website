import Image from "next/image";
import Link from "next/link";

export default function MiloAndTheMoonflowerPage() {
  return (
    <main className="min-h-screen bg-[#07161D] text-[#F8F4EA]">
      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="/images/stories/milo-and-the-moonflower.png"
          alt="Milo and the Moonflower"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full items-center justify-center px-8 text-center">
          <div className="max-w-4xl">
            <p className="uppercase tracking-[0.45em] text-[#E8D6A8]">
              Little Bayou Veil • Book One
            </p>

            <h1 className="mt-6 font-heading text-5xl md:text-8xl text-[#F4E2B8]">
              Milo and the Moonflower
            </h1>

            <p className="mt-8 text-xl text-gray-200 leading-9 max-w-3xl mx-auto">
              A magical adventure about curiosity, friendship, kindness, and the
              wonder hidden beneath the moss.
            </p>
          </div>
        </div>
      </section>

      {/* Book Information */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

          {/* Cover */}
          <div className="relative h-[700px] rounded-3xl overflow-hidden shadow-2xl border border-[#E8D6A8]/20">
            <Image
              src="/images/stories/milo-and-the-moonflower.png"
              alt="Milo and the Moonflower Book Cover"
              fill
              sizes="600px"
              className="object-cover"
            />
          </div>

          {/* Details */}
          <div>

            <span className="inline-block rounded-full bg-green-700 px-4 py-2 text-sm">
              Available Now
            </span>

            <h2 className="font-heading text-5xl mt-8 text-[#F4E2B8]">
              About the Book
            </h2>

            <p className="mt-8 leading-9 text-gray-300">
              Deep beneath the Spanish moss lives Milo, a curious black Maine
              Coon whose adventures always begin with a single question.
            </p>

            <p className="mt-6 leading-9 text-gray-300">
              When Milo discovers a mysterious moonflower blooming where none
              should exist, he follows its gentle glow into an unforgettable
              journey filled with friendship, courage, and the quiet magic of
              the Louisiana bayou.
            </p>

            <p className="mt-6 leading-9 text-gray-300">
              Perfect for young readers who love gentle adventures, woodland
              animals, and stories that celebrate kindness and curiosity.
            </p>

            <div className="flex flex-wrap gap-4 mt-12">

              <a
                href="https://a.co/d/09teAV9T"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#E8D6A8] px-8 py-4 text-[#07161D] font-medium hover:opacity-90 transition"
              >
                Buy on Amazon
              </a>

              <Link
                href="/books/little-bayou-veil"
                className="rounded-full border border-[#E8D6A8] px-8 py-4 hover:bg-[#E8D6A8] hover:text-[#07161D] transition"
              >
                Back to Series
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* Preview */}
      <section className="pb-24 px-8">
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#0B1F29] border border-[#E8D6A8]/20 p-12">

          <p className="uppercase tracking-[0.35em] text-[#E8D6A8] text-center">
            Sneak Peek
          </p>

          <h3 className="font-heading text-4xl text-center mt-6 text-[#F4E2B8]">
            Read a Preview
          </h3>

          <p className="mt-10 text-lg leading-9 text-gray-300">
            Beneath the whispering moss, where moonlight shimmered across quiet
            waters, Milo paused. Something glowed between the ferns...
          </p>

          <p className="mt-6 text-lg leading-9 text-gray-300">
            It wasn't a firefly.
          </p>

          <p className="mt-6 text-lg leading-9 text-gray-300">
            It was the first moonflower he had ever seen.
          </p>

          <p className="mt-10 text-center text-[#E8D6A8] italic">
            Continue the adventure by reading the full book.
          </p>

        </div>
      </section>
    </main>
  );
}