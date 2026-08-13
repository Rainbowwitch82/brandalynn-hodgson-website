"use client";

export default function UniverseQuote() {
  return (
    <section className="relative overflow-hidden bg-[#08110d] py-24">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent" />

      {/* Decorative blur */}
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/5 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <p className="mb-6 text-sm uppercase tracking-[0.5em] text-amber-400">
          The Bayou Universe
        </p>

        <h2 className="max-w-4xl font-heading text-4xl leading-tight text-amber-50 md:text-6xl">
          “Some promises outlive generations.”
        </h2>

        <div className="mt-10 h-px w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

        <p className="mt-10 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
          Every family carries a story. Every promise echoes through time.
          Every path beneath the moss leads somewhere unexpected.
        </p>

        <p className="mt-8 max-w-2xl text-base italic text-gray-500">
          From children discovering wonder in the bayou to witches walking the
          Veil between worlds, every series is part of one living universe.
        </p>
      </div>
    </section>
  );
}