import Link from "next/link";

export default function FolklorePage() {
  return (
    <main className="min-h-screen bg-[#07161D] text-[#F8F4EA]">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.3em] text-[#C7A84F]">
          The Archive
        </p>

        <h1 className="mt-2 text-5xl font-bold">
          Bayou Folklore
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#D8D3C8]">
          Every whispered legend carries a fragment of truth. Here you'll find
          the myths, spirits, traditions, and supernatural stories that shaped
          the world of <em>The Veil Chronicles</em>.
        </p>

        <Link
          href="/stories/the-veil-chronicles/the-archive"
          className="mt-10 inline-block rounded-full border border-[#C7A84F] px-6 py-3 hover:bg-[#C7A84F] hover:text-[#07161D]"
        >
          ← Back to Archive
        </Link>
      </section>
    </main>
  );
}