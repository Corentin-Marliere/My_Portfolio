type TagProps = {
  children: React.ReactNode;
};

export default function Tag({ children }: TagProps) {
  return (
    <span className="inline-block bg-white/10 border border-white/20 px-4 py-2 rounded-[20px] text-white text-[0.9rem] font-medium backdrop-blur-[5px] transition-all duration-300 ease-in-out hover:bg-white/20 hover:-translate-y-0.5">
      {children}
    </span>
  );
}
