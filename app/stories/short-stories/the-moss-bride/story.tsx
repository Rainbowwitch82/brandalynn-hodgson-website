export default function Story() {
  return (
    <article className="max-w-3xl mx-auto">

      {/* Story Header */}

      <div className="text-center mb-20">

        <p className="uppercase tracking-[0.4em] text-[#E8D6A8] text-sm">
          Southern Gothic Short Story
        </p>

        <h2 className="font-heading text-5xl text-[#F4E2B8] mt-6">
          The Moss Bride
        </h2>

        <p className="mt-4 text-gray-400">
          By Brandalynn Hodgson
        </p>

        <p className="mt-2 text-[#E8D6A8]">
          ⏱ 12 minute read
        </p>

        <div className="mt-10 text-4xl text-[#E8D6A8]">
          ❦
        </div>

      </div>

      {/* Story */}

      <div className="space-y-8 text-xl leading-10 text-gray-200">

        <p className="first-letter:float-left first-letter:mr-4 first-letter:text-8xl first-letter:leading-none first-letter:text-[#E8D6A8] first-letter:font-heading">
          Every child in St. Martin Parish knew the story of the oldest
          cypress.
        </p>

        <p>
          They said it had stood before the first church, before the first road,
          before anyone could remember.
        </p>

        <p>
          Every spring, the ancient tree bloomed with delicate white flowers.
          Everyone admired them.
          No one dared pick the last blossom.
        </p>

      </div>

      {/* Scene Divider */}

      <div className="my-24 text-center text-5xl text-[#E8D6A8]">
        ❦
      </div>

      <div className="space-y-8 text-xl leading-10 text-gray-200">

        <p>
          Claire Landry had heard the story her entire life...
        </p>

      </div>

      {/* End */}

      <div className="my-32 text-center">

        <div className="text-5xl text-[#E8D6A8]">
          ❦
        </div>

        <p className="mt-10 uppercase tracking-[0.4em] text-[#E8D6A8]">
          The End
        </p>

      </div>

      {/* About */}

      <section className="mt-24 rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] p-12">

        <h3 className="font-heading text-3xl text-[#F4E2B8]">
          About this Story
        </h3>

        <p className="mt-6 leading-8 text-gray-300">
          <strong>The Moss Bride</strong> is an original Southern Gothic short
          story by Brandalynn Hodgson inspired by the folklore, history,
          cypress swamps, and quiet mysteries of South Louisiana.
        </p>

      </section>

    </article>
  );
}