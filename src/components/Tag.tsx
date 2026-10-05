type TagProps = {
  children: React.ReactNode;
  size?: "sm" | "md";
};

export default function Tag({ children, size = "md" }: TagProps) {
  const sizeClasses =
    size === "sm"
      ? "px-2.5 py-1 text-xs rounded-full"
      : "px-4 py-2 text-[0.9rem] rounded-[20px]";

  return (
    <span
      className={`inline-block bg-white/10 border border-white/20 text-white font-medium backdrop-blur-[5px] transition-all duration-300 ease-in-out hover:bg-white/20 hover:-translate-y-0.5 ${sizeClasses}`}
    >
      {children}
    </span>
  );
}
