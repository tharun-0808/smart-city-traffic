export default function CityMap() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-cyan-500/20 h-full">

      <h2 className="text-xl font-semibold text-cyan-400 mb-8">
        🗺 Smart City Map
      </h2>

      <div className="relative h-80 flex items-center justify-center">

        {/* Roads */}

        <div className="absolute w-2 bg-slate-600 h-56 rounded"></div>

        <div className="absolute h-2 bg-slate-600 w-72 rounded"></div>

        {/* Junction A */}

        <div className="absolute top-0 flex flex-col items-center">
          <div className="w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
          <span className="mt-2">Junction A</span>
        </div>

        {/* Junction B */}

        <div className="absolute left-0 flex flex-col items-center">
          <div className="w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
          <span className="mt-2">Junction B</span>
        </div>

        {/* Junction C */}

        <div className="absolute right-0 flex flex-col items-center">
          <div className="w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
          <span className="mt-2">Junction C</span>
        </div>

        {/* Junction D */}

        <div className="absolute bottom-0 flex flex-col items-center">
          <div className="w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
          <span className="mt-2">Junction D</span>
        </div>

      </div>

      <div className="mt-6 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500">

        <p className="text-cyan-300">
          🚑 Emergency Route Active
        </p>

        <div className="mt-2 w-full h-2 bg-slate-700 rounded">

          <div className="h-2 w-2/3 bg-cyan-400 rounded animate-pulse"></div>

        </div>

      </div>

    </div>
  );
}