import Link from "next/link";

export default function RitualsOfTheDrownedPage() {
  return (
    <main className="min-h-screen bg-[#07161D] text-[#F8F4EA]">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <Link
          href="/stories/bayou-veil"
          className="mb-8 inline-block text-sm text-[#D6A84F] hover:underline"
        >
          ← Back to Bayou Veil
        </Link>

        <div className="rounded-2xl border border-[#8B6A2B]/50 bg-[#0D1D18] p-8 shadow-xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#B89A5A]">
            Bayou Veil • Book Two
          </p>

          <h1 className="mb-6 text-5xl font-serif text-[#F2D6A4]">
            Rituals of the Drowned
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-[#C8D2D0]">
            The second chapter of the Bayou Veil trilogy, where buried
            secrets rise from the water and the old magic demands a reckoning.
          </p>
        </div>
      </section>
    </main>
  );
}