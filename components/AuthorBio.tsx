"use client";

import Image from "next/image";
import Link from "next/link";

export default function AuthorBio() {
  return (
    <section className="bg-[#08110d] py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-8 lg:grid-cols-2">

        {/* Author Photo */}
        <div className="relative mx-auto h-[600px] w-full max-w-md overflow-hidden rounded-3xl border border-[#E8D6A8]/20 shadow-2xl">
          <Image
            src="/images/author/author-picture.png"
            alt="Brandalynn Hodgson"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Author Content */}
        <div>

          <p className="text-sm uppercase tracking-[0.4em] text-[#E8D6A8]">
            Meet the Author
          </p>

          <h2 className="mt-4 font-heading text-5xl text-[#F4E2B8] md:text-6xl">
            Brandalynn Hodgson
          </h2>

          <p className="mt-3 uppercase tracking-[0.3em] text-sm text-[#E8D6A8]">
            Southern Gothic Fantasy Author
          </p>

          <p className="mt-8 text-xl leading-8 text-gray-300">
            Welcome to the Bayou Universe.
          </p>

          <p className="mt-6 leading-8 text-gray-400">
            I write Southern Gothic fantasy inspired by Louisiana folklore,
            forgotten legends, family history, and the quiet magic hidden
            beneath the moss. Every series explores a different chapter of one
            connected universe where generations are bound together through
            promises, sacrifice, love, and the unseen world.
          </p>

          <p className="mt-6 leading-8 text-gray-400">
            Whether you're following Milo through enchanting childhood
            adventures, sailing beside Lena across the Atlantic in
            <span className="text-[#F4E2B8]"> The Veil Chronicles</span>,
            walking alongside Seraphina in
            <span className="text-[#F4E2B8]"> Bayou Veil</span>, or
            discovering Freya's destiny in
            <span className="text-[#F4E2B8]"> Bayou Heir</span>, every story
            shares the same living history beneath the Spanish moss.
          </p>

          <blockquote className="mt-10 border-l-4 border-[#E8D6A8] pl-6 text-xl italic text-[#E8D6A8]">
            "Some promises outlive generations."
          </blockquote>

          {/* Signature */}
          <div className="mt-8">
            <Image
              src="/images/author/signature.png"
              alt="Brandalynn Hodgson Signature"
              width={260}
              height={90}
              className="opacity-90"
            />
          </div>

          {/* Author Details */}
          <div className="mt-10 rounded-2xl border border-[#E8D6A8]/20 bg-[#0E1B18] p-6 space-y-6">

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#E8D6A8]">
                Currently Writing
              </p>

              <p className="mt-2 text-lg text-[#F4E2B8]">
                Bayou Veil: Beneath the Moss
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#E8D6A8]">
                Chief Feline Editor
              </p>

              <p className="mt-2 text-gray-300">
                🐈‍⬛ Milo the Maine Coon
              </p>
            </div>

          </div>

          <Link
            href="/about"
            className="mt-10 inline-flex rounded-full bg-[#E8D6A8] px-8 py-4 font-semibold text-[#07161D] transition duration-300 hover:scale-105 hover:bg-[#F4E2B8]"
          >
            Learn More About Me →
          </Link>

        </div>
      </div>
    </section>
  );
}