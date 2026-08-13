import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type StoryLayoutProps = {
  title: string;
  category: string;
  image: string;
  readingTime: string;
  children: ReactNode;
};

export default function StoryLayout({
  title,
  category,
  image,
  readingTime,
  children,
}: StoryLayoutProps) {
  return (
    <main className="min-h-screen bg-[#07161D] text-[#F8F4EA]">

      {/* Hero */}
      <section className="relative h-screen">

        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-8 text-center">

          <div className="max-w-4xl">

            <p className="font-body uppercase tracking-[0.45em] text-[#E8D6A8] text-sm">
              {category}
            </p>

            <h1 className="font-heading mt-8 text-6xl md:text-8xl lg:text-9xl text-[#F4E2B8] drop-shadow-lg">
              {title}
            </h1>

            <p className="mt-8 text-lg text-gray-300">
              By Brandalynn Hodgson
            </p>

            <p className="mt-3 text-[#E8D6A8]">
              ⏱ {readingTime}
            </p>

            <div className="mt-14 text-5xl text-[#E8D6A8] animate-bounce">
              ↓
            </div>

          </div>

        </div>

      </section>

      {/* Reading Area */}
      <section className="px-8 py-28">

        <div className="max-w-5xl mx-auto rounded-3xl border border-[#E8D6A8]/10 bg-[#0B1F29]/70 backdrop-blur-sm p-10 md:p-16 shadow-2xl">

          {children}

        </div>

      </section>

      {/* Navigation */}
      <section className="pb-24">

        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6">

          <Link
            href="/stories"
            className="rounded-full border border-[#E8D6A8] px-8 py-4 transition-all duration-300 hover:bg-[#E8D6A8] hover:text-[#07161D]"
          >
            ← Back to Stories
          </Link>

          <Link
            href="/"
            className="rounded-full border border-[#E8D6A8]/40 px-8 py-4 transition-all duration-300 hover:border-[#E8D6A8]"
          >
            Home
          </Link>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-[#E8D6A8]/10 py-16">

        <div className="max-w-5xl mx-auto text-center">

          <div className="text-4xl text-[#E8D6A8] mb-8">
            ❦
          </div>

          <p className="font-heading text-2xl text-[#F4E2B8]">
            Brandalynn Hodgson
          </p>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto leading-8">
            Southern Gothic fantasy, folklore, and stories woven from the
            bayou.
          </p>

          <p className="mt-10 text-sm text-gray-500">
            © {new Date().getFullYear()} Brandalynn Hodgson. All Rights Reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}