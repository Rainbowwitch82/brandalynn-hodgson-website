export default function ContactSection() {
  return (
    <section className="min-h-screen bg-[#07161D] pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <p className="text-sm uppercase tracking-[0.4em] text-[#E8D6A8]">
          Get in Touch
        </p>

        <h1 className="mt-6 font-heading text-6xl text-[#F8F4EA]">
          Contact
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-300">
          Whether you're a reader, librarian, educator, bookseller,
          reviewer, or fellow writer, I'd love to hear from you.
          Feel free to reach out with questions, event inquiries,
          collaboration ideas, or simply to say hello.
        </p>

        {/* General Contact */}

        <div className="mt-16 rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-10">

          <h2 className="font-heading text-3xl text-[#F4E2B8]">
            General Contact
          </h2>

          <p className="mt-6 text-gray-300 leading-8">
            Questions about my books, reader mail, signing requests,
            or general inquiries are always welcome.
          </p>

          <a
            href="mailto:hello@brandalynnhodgson.com"
            className="mt-8 inline-flex rounded-full bg-[#E8D6A8] px-8 py-4 font-semibold text-[#07161D] transition hover:scale-105 hover:bg-[#F4E2B8]"
          >
            hello@brandalynnhodgson.com
          </a>

          <p className="mt-8 text-sm text-gray-500">
            I typically respond within 2–3 business days.
          </p>

        </div>

        {/* Media */}

        <div className="mt-12 rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-10">

          <h2 className="font-heading text-3xl text-[#F4E2B8]">
            Media & Events
          </h2>

          <p className="mt-6 text-gray-300 leading-8">
            Available for interviews, podcasts, book clubs,
            library events, conventions, speaking engagements,
            and other literary opportunities.
          </p>

          <a
            href="mailto:hello@brandalynnhodgson.com"
            className="mt-8 inline-flex rounded-full border border-[#E8D6A8] px-8 py-4 text-[#E8D6A8] transition hover:bg-[#E8D6A8] hover:text-[#07161D]"
          >
            Contact for Media
          </a>

        </div>

        {/* Find Me */}

        <div className="mt-12 rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-10">

          <h2 className="font-heading text-3xl text-[#F4E2B8]">
            Find Me Elsewhere
          </h2>

          <div className="mt-8 grid gap-4 text-gray-300">

            <div className="flex justify-between border-b border-white/10 pb-3">
              <span>Newsletter</span>
              <span className="text-[#E8D6A8]">Coming Soon</span>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-3">
              <span>Instagram</span>
              <span className="text-[#E8D6A8]">Coming Soon</span>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-3">
              <span>Goodreads</span>
              <span className="text-[#E8D6A8]">Coming Soon</span>
            </div>

            <div className="flex justify-between">
              <span>StoryGraph</span>
              <span className="text-[#E8D6A8]">Coming Soon</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}