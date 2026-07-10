export default function AIInsights({ traffic }) {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-cyan-500/20">

      <h2 className="text-xl font-semibold text-cyan-400">
        🤖 AI Traffic Insights
      </h2>

      <div className="space-y-5 mt-6">

        <div className="flex justify-between">
          <span>Congestion Risk</span>
          <span className="text-red-400 font-bold">
            {traffic.risk}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Traffic Density</span>
          <span className="text-cyan-400 font-bold">
            {traffic.density}%
          </span>
        </div>

        <div className="flex justify-between">
          <span>Best Route</span>
          <span className="text-green-400 font-bold">
            {traffic.route}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Carbon Reduction</span>
          <span className="text-green-400 font-bold">
            -{traffic.carbon}%
          </span>
        </div>

      </div>

    </div>
  );
}