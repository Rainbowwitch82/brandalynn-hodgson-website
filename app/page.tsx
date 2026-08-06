import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#06131A] text-white flex flex-col items-center justify-center">

      <h1 className="text-7xl font-serif font-bold text-amber-100">
        Brandalynn Hodgson
      </h1>

      <p className="mt-6 text-2xl text-amber-200">
        Stories Woven from the Bayou
      </p>

      <p className="mt-10 text-center max-w-2xl text-gray-300 text-lg px-8">
        Beneath the moss and moonlight, every path leads to a different story.
        Choose your journey.
      </p>

      <div className="mt-16 flex gap-8">

        <button className="rounded-full border border-yellow-400 px-8 py-4 hover:bg-yellow-400 hover:text-black transition">
          🌸 Little Bayou Veil
        </button>

        <button className="rounded-full border border-gray-400 px-8 py-4 hover:bg-white hover:text-black transition">
          🖤 Bayou Veil
        </button>

      </div>

    </main>
  );
}