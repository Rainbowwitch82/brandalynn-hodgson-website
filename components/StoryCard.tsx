import Image from "next/image";
import Link from "next/link";

type StoryCardProps = {
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
  buttonText: string;
};

export default function StoryCard({
  title,
  category,
  description,
  image,
  href,
  buttonText,
}: StoryCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-[#E8D6A8]/20 bg-[#0B1F29] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#E8D6A8]/50">

      {/* Story Image */}
      <div className="relative h-80 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* Story Content */}
      <div className="p-10">

        <p className="font-body uppercase tracking-[0.3em] text-sm text-[#E8D6A8]">
          {category}
        </p>

        <h3 className="font-heading mt-4 text-5xl text-[#F4E2B8]">
          {title}
        </h3>

        <p className="font-body mt-6 text-lg leading-relaxed text-gray-300">
          {description}
        </p>

        <Link
          href={href}
          className="inline-flex items-center mt-10 rounded-full border border-[#E8D6A8] px-8 py-4 font-body text-[#E8D6A8] transition-all duration-300 hover:bg-[#E8D6A8] hover:text-[#07161D]"
        >
          {buttonText}
        </Link>

      </div>

    </article>
  );
}