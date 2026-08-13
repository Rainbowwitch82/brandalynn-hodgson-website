type ButtonProps = {
  children: React.ReactNode;
  variant?: "gold" | "outline";
};

export default function Button({
  children,
  variant = "gold",
}: ButtonProps) {
  return (
    <button
      className={`rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 ${
        variant === "gold"
          ? "bg-[#E8D6A8] text-[#07161D] hover:scale-105 hover:shadow-lg"
          : "border border-[#E8D6A8] text-[#E8D6A8] hover:bg-[#E8D6A8] hover:text-[#07161D]"
      }`}
    >
      {children}
    </button>
  );
}