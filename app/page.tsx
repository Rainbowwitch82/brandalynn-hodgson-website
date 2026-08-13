import Navbar from "@/components/Navbar";
import HeroBackground from "@/components/HeroBackground";
import Hero from "@/components/Hero";
import UniverseQuote from "@/components/UniverseQuote";
import ExploreTheBayouUniverse from "@/components/ExploreTheBayouUniverse";
import Timeline from "@/components/Timeline";
import FeaturedBooks from "@/components/FeaturedBooks";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroBackground>
        <Hero />
      </HeroBackground>

      <UniverseQuote />

      <ExploreTheBayouUniverse />

      <Timeline />

      <FeaturedBooks />

      <Newsletter />

      <Footer />
    </>
  );
}