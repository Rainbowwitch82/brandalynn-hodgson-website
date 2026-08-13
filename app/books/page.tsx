import Image from "next/image";
import Link from "next/link";

export default function LittleBayouVeilPage() {
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

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex h-full items-center justify-center px-8 text-center">
          <div className="max-w-4xl">

            <p className="uppercase tracking-[0.45em] text-[#E8D6A8]">
              Children's Book Series
            </p>

            <h1 className="mt-6 font-heading text-6xl md:text-8xl text-[#F4E2B8]">
              Little Bayou Veil
            </h1>

            <p className="mt-8 max-w-2xl mx-auto text-xl text-gray-200 leading-9">
              Follow Milo, a curious black Maine Coon, as he discovers
              hidden magic, unforgettable friendships, and woodland
              adventures beneath the whispering moss of Louisiana.
            </p>

          </div>
        </div>

      </section>

      {/* Books */}
      <section className="py-24 px-8">

        <div className="max-w-6xl mx-auto">

          <h2 className="font-heading text-5xl text-center text-[#F4E2B8]">
            Books in the Series
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 mt-20">

            {/* Book 1 */}
            <article className="rounded-3xl overflow-hidden bg-[#0B1F29] border border-[#E8D6A8]/20">

              <div className="relative h-[500px]">

                <Image
                  src="/images/stories/milo-and-the-moonflower.png"
                  alt="Milo and the Moonflower"
                  fill
                  sizes="600px"
                  className="object-cover"
                />

              </div>

              <div className="p-10">

                <span className="inline-block rounded-full bg-green-600 px-4 py-2 text-sm">
                  Available Now
                </span>

                <h3 className="font-heading text-4xl mt-6 text-[#F4E2B8]">
                  Milo and the Moonflower
                </h3>

                <p className="mt-6 leading-8 text-gray-300">
                  Milo's first adventure begins when he discovers a mysterious
                  moonflower blooming deep within the bayou, leading him into
                  a magical world where kindness and courage light the way.
                </p>

                <div className="flex flex-wrap gap-4 mt-10">

                  <Link
                    href="/books/little-bayou-veil/milo-and-the-moonflower"
                    className="rounded-full border border-[#E8D6A8] px-6 py-3 hover:bg-[#E8D6A8] hover:text-[#07161D]"
                  >
                    Learn More
                  </Link>

                  <a
                    href="https://a.co/d/09teAV9T"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#E8D6A8] text-[#07161D] px-6 py-3 hover:opacity-90"
                  >
                    Buy on Amazon
                  </a>

                </div>

              </div>

            </article>

            {/* Coming Soon */}
            <article className="rounded-3xl border border-dashed border-[#E8D6A8]/20 flex flex-col items-center justify-center p-16">

              <h3 className="font-heading text-4xl text-[#F4E2B8] text-center">
                Milo and the Whispering Moss
              </h3>

              <p className="mt-6 max-w-md text-center text-gray-300 leading-8">
                Milo's next magical adventure is already growing beneath the moss...
              </p>

              <span className="mt-10 rounded-full border border-[#E8D6A8] px-6 py-3">
                Coming Soon
              </span>

            </article>

          </div>

        </div>

      </section>

    </main>
  );
}