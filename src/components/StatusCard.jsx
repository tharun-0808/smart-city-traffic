export default function StatusCard({ title, children }) {
  return (
    <div className="
      bg-slate-900
      rounded-2xl
      border border-cyan-500/20
      p-6
      shadow-lg
      transition-all
      duration-300
      hover:scale-[1.02]
      hover:border-cyan-400
      hover:shadow-cyan-500/30
      hover:shadow-2xl
    ">
      <h2 className="text-xl font-bold text-cyan-400 mb-6">
        {title}
      </h2>

      {children}
    </div>
  );
}