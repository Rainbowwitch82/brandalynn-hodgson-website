import Button from "./Button";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-28 text-center px-6 text-[#F8F4EA]">

      {/* Intro */}
      <p className="font-body text-sm uppercase tracking-[0.4em] text-[#E8D6A8] mb-10">
        Every path through the bayou leads to another story
      </p>

      {/* Author Name */}
      <h1 className="font-heading text-7xl md:text-[7rem] lg:text-[8rem] leading-none font-semibold tracking-tight text-[#F4E2B8] drop-shadow-[0_6px_24px_rgba(0,0,0,0.95)]">
        Brandalynn Hodgson
      </h1>

      {/* Tagline */}
      <h2 className="font-heading text-3xl md:text-5xl mt-8 text-[#E8D6A8]">
        Stories Woven from the Bayou
      </h2>

      {/* Description */}
      <p className="font-body max-w-3xl mt-10 text-xl md:text-2xl leading-relaxed text-gray-100">
        Step beneath the moss into a world where Southern folklore,
        mystery, and imagination intertwine.
        <br />
        <br />
        Every story begins with a single path.
      </p>

      {/* Buttons */}
      <div className="mt-14 flex flex-wrap justify-center gap-8">
        <Button>
          Bayou Veil
        </Button>

        <Button variant="outline">
          Little Bayou Veil
        </Button>
      </div>

    </section>
  );
}