import Link from "next/link";

export default function BayouVeilPage() {
  return (
    <main className="min-h-screen bg-[#07161D] text-[#F8F4EA]">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#C7A84F]">
          Book Series
        </p>

        <h1 className="mb-6 text-5xl font-bold">
          Bayou Veil
        </h1>

        <p className="mb-10 max-w-3xl text-lg leading-8 text-[#D8D3C8]">
          Enter the haunting world of Bayou Veil, where forgotten magic,
          ancient family secrets, and the whispers beneath Spanish moss shape
          every destiny.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/stories/bayou-veil/beneath-the-moss"
            className="rounded-full border border-[#C7A84F] px-6 py-3 transition hover:bg-[#C7A84F] hover:text-[#07161D]"
          >
            Read Beneath the Moss
          </Link>

          <Link
            href="/stories"
            className="rounded-full border border-white/20 px-6 py-3 transition hover:border-[#C7A84F]"
          >
            Back to Stories
          </Link>
        </div>
      </section>
    </main>
  );
}