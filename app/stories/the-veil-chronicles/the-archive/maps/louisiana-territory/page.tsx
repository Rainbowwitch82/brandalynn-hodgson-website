import Link from "next/link";

export default function LouisianaTerritoryPage() {
  return (
    <main className="min-h-screen bg-[#07161D] text-[#F8F4EA]">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.3em] text-[#C7A84F]">
          Historical Maps
        </p>

        <h1 className="mt-2 text-5xl font-bold">
          Louisiana Territory
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#D8D3C8]">
          Discover the early settlements, rivers, swamps, and frontier towns
          that became the backdrop for generations of the Schexnaydre family's
          history.
        </p>

        <Link
          href="/stories/the-veil-chronicles/the-archive/maps"
          className="mt-10 inline-block rounded-full border border-[#C7A84F] px-6 py-3 hover:bg-[#C7A84F] hover:text-[#07161D]"
        >
          ← Back to Maps
        </Link>
      </section>
    </main>
  );
}