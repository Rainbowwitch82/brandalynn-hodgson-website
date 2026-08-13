import Link from "next/link";
import Image from "next/image";

export default function MiloAndTheWhisperingMossPage() {
  return (
    <main className="min-h-screen bg-[#07161D] text-[#F8F4EA]">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[#C7A84F]">
              Little Bayou Veil
            </p>

            <h1 className="mb-6 text-5xl font-bold">
              Milo and the Whispering Moss
            </h1>

            <p className="mb-6 text-lg leading-8 text-[#D8D3C8]">
              Join Milo, a curious black Maine Coon kitten, as he follows the
              gentle whispers drifting through the moss-covered cypress trees.
              Along the way he discovers friendship, courage, and the quiet
              magic hidden deep within the bayou.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/stories/little-bayou-veil"
                className="rounded-full border border-[#C7A84F] px-6 py-3 transition hover:bg-[#C7A84F] hover:text-[#07161D]"
              >
                ← Back to Series
              </Link>

              <Link
                href="/books"
                className="rounded-full border border-white/20 px-6 py-3 transition hover:border-[#C7A84F]"
              >
                View Books
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/stories/milo-and-the-whispering-moss.png"
              alt="Milo and the Whispering Moss"
              width={500}
              height={700}
              className="rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}