"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#E8D6A8]/10 bg-[#07161D]">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h3 className="font-heading text-3xl text-[#F4E2B8]">
              Bayou Universe
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              A connected universe of Southern Gothic fantasy, folklore,
              mystery, and magic spanning centuries beneath the Louisiana
              moss.
            </p>

            <p className="mt-8 italic text-[#CBB98B]">
              "Some promises outlive generations."
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-heading text-2xl text-[#F4E2B8]">
              Explore
            </h4>

            <ul className="mt-6 space-y-3 text-gray-400">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-[#E8D6A8]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/stories"
                  className="transition hover:text-[#E8D6A8]"
                >
                  Stories
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition hover:text-[#E8D6A8]"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/journal"
                  className="transition hover:text-[#E8D6A8]"
                >
                  Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Stories */}
          <div>
            <h4 className="font-heading text-2xl text-[#F4E2B8]">
              Stories
            </h4>

            <ul className="mt-6 space-y-3 text-gray-400">
              <li>
                <Link
                  href="/stories/little-bayou-veil"
                  className="transition hover:text-[#E8D6A8]"
                >
                  Little Bayou Veil
                </Link>
              </li>

              <li>
                <Link
                  href="/stories/the-veil-chronicles"
                  className="transition hover:text-[#E8D6A8]"
                >
                  The Veil Chronicles
                </Link>
              </li>

              <li>
                <Link
                  href="/stories/bayou-veil"
                  className="transition hover:text-[#E8D6A8]"
                >
                  Bayou Veil
                </Link>
              </li>

              <li>
                <Link
                  href="/stories/bayou-heir"
                  className="transition hover:text-[#E8D6A8]"
                >
                  Bayou Heir
                </Link>
              </li>

              <li>
                <Link
                  href="/stories/short-stories"
                  className="transition hover:text-[#E8D6A8]"
                >
                  Short Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading text-2xl text-[#F4E2B8]">
              Connect
            </h4>

            <ul className="mt-6 space-y-3 text-gray-400">
              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-[#E8D6A8]"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/newsletter"
                  className="transition hover:text-[#E8D6A8]"
                >
                  Newsletter
                </Link>
              </li>

              <li>
                <Link
                  href="/shop"
                  className="transition hover:text-[#E8D6A8]"
                >
                  Shop
                </Link>
              </li>

              <li>
                <Link
                  href="/faq"
                  className="transition hover:text-[#E8D6A8]"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-20 border-t border-[#E8D6A8]/10 pt-8 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Brandalynn Hodgson. All Rights Reserved.
          </p>

          <p className="mt-3 text-sm text-gray-600">
            Welcome to the Bayou Universe.
          </p>
        </div>
      </div>
    </footer>
  );
}