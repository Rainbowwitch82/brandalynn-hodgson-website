import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TraditionsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#07161D] text-[#F8F4EA] py-24">
        <div className="max-w-4xl mx-auto px-6">

          <h1 className="text-5xl font-serif mb-8">
            Family Traditions
          </h1>

          <p className="text-lg text-gray-300 leading-8">
            The Schexnaydre family preserved old customs carried across the
            Atlantic and reshaped within the Louisiana bayous. Stories were
            shared beside candlelight, herbs were gathered beneath the full
            moon, and every generation passed down its own wisdom.
          </p>

        </div>
      </main>

      <Footer />
    </>
  );
}