import Image from "next/image";
import { ReactNode } from "react";

type HeroBackgroundProps = {
  children: ReactNode;
};

export default function HeroBackground({
  children,
}: HeroBackgroundProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Hero Background */}
      <Image
        src="/images/hero/bayou-hero.png"
        alt="Moonlit Louisiana Bayou"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        {children}
      </div>

    </div>
  );
}