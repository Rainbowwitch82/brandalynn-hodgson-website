"use client";

export default function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-[#0B1F29] py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#123443]/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl px-8 text-center">
        <p className="uppercase tracking-[0.45em] text-[#E8D6A8] text-sm">
          Join the Journey
        </p>

        <h2 className="mt-6 font-heading text-5xl md:text-6xl text-[#F4E2B8]">
          Become Part of the Bayou Universe
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
          Be the first to discover new books, exclusive artwork, behind-the-scenes
          writing updates, character reveals, cover reveals, and magical surprises
          from every corner of the Bayou Universe.
        </p>

        <div className="mt-14 mx-auto flex max-w-2xl flex-col gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email address..."
            className="flex-1 rounded-full border border-[#E8D6A8]/30 bg-[#07161D] px-6 py-4 text-white placeholder:text-gray-400 outline-none transition focus:border-[#E8D6A8]"
          />

          <button className="rounded-full bg-[#E8D6A8] px-8 py-4 font-semibold text-[#07161D] transition hover:scale-105 hover:bg-[#F4E2B8]">
            Join the Bayou
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          No spam. Just stories, magic, and occasional whispers beneath the moss.
        </p>
      </div>
    </section>
  );
}