import { useEffect, useState } from "react";
import {
  Camera,
  Car,
  Bus,
  Bike,
  Ambulance,
  ScanLine,
} from "lucide-react";

export default function AICamera() {
  const [stats, setStats] = useState({
    cars: 54,
    buses: 8,
    bikes: 27,
    ambulance: 1,
    confidence: 98.7,
    inference: 28,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        cars: prev.cars + Math.floor(Math.random() * 3),
        buses: Math.max(5, prev.buses + Math.floor(Math.random() * 3) - 1),
        bikes: prev.bikes + Math.floor(Math.random() * 4),
        ambulance: Math.random() > 0.9 ? 1 : 0,
        confidence: +(97 + Math.random() * 2).toFixed(1),
        inference: 25 + Math.floor(Math.random() * 8),
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-cyan-500/20 shadow-xl hover:border-cyan-400 transition-all duration-300">

      {/* Header */}

      <div className="flex justify-between items-center">

        <h2 className="text-xl font-semibold text-cyan-400 flex items-center gap-2">
          <Camera size={22} />
          AI Traffic Camera
        </h2>

        <div className="flex items-center gap-2 text-green-400 font-semibold animate-pulse">
          <span className="w-3 h-3 rounded-full bg-green-400"></span>
          LIVE
        </div>

      </div>

      {/* Camera Screen */}

      <div className="relative mt-5 h-64 rounded-xl overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black border border-cyan-500/30">

        {/* Moving Scan Line */}

        <div className="absolute left-0 w-full h-1 bg-cyan-400/60 animate-pulse"></div>

        {/* AI Detection Corners */}

        <div className="absolute top-8 left-10 w-12 h-12 border-l-2 border-t-2 border-cyan-400"></div>

        <div className="absolute bottom-8 right-10 w-12 h-12 border-r-2 border-b-2 border-cyan-400"></div>

        {/* Camera Content */}

        <div className="absolute inset-0 flex flex-col items-center justify-center">

          <Car
            size={75}
            className="text-cyan-400 animate-bounce"
          />

          <p className="mt-3 text-cyan-300 font-semibold">
            AI Object Detection Active
          </p>

        </div>

        {/* Recording */}

        <div className="absolute top-4 left-4 bg-black/70 px-3 py-1 rounded-lg text-green-400 font-bold text-sm">
          ● Recording
        </div>

        {/* FPS */}

        <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded-lg text-cyan-400 font-bold text-sm">
          30 FPS
        </div>

        {/* Scan Icon */}

        <div className="absolute bottom-4 right-4 text-cyan-300 animate-pulse">
          <ScanLine size={22} />
        </div>

      </div>

      {/* Detection Statistics */}

      <div className="grid grid-cols-2 gap-4 mt-6">

        <div className="bg-slate-800 rounded-xl p-3 flex justify-between hover:bg-slate-700 transition">
          <span className="flex items-center gap-2">
            <Car size={18} />
            Cars
          </span>
          <span className="font-bold text-cyan-400">
            {stats.cars}
          </span>
        </div>

        <div className="bg-slate-800 rounded-xl p-3 flex justify-between hover:bg-slate-700 transition">
          <span className="flex items-center gap-2">
            <Bus size={18} />
            Buses
          </span>
          <span className="font-bold text-green-400">
            {stats.buses}
          </span>
        </div>

        <div className="bg-slate-800 rounded-xl p-3 flex justify-between hover:bg-slate-700 transition">
          <span className="flex items-center gap-2">
            <Bike size={18} />
            Bikes
          </span>
          <span className="font-bold text-yellow-400">
            {stats.bikes}
          </span>
        </div>

        <div className="bg-slate-800 rounded-xl p-3 flex justify-between hover:bg-slate-700 transition">
          <span className="flex items-center gap-2">
            <Ambulance size={18} />
            Ambulance
          </span>
          <span className="font-bold text-red-400">
            {stats.ambulance}
          </span>
        </div>

      </div>

      {/* AI Information */}

      <div className="mt-6 space-y-3">

        <div className="flex justify-between">
          <span>AI Confidence</span>
          <span className="text-green-400 font-bold">
            {stats.confidence}%
          </span>
        </div>

        <div className="flex justify-between">
          <span>Inference Time</span>
          <span className="text-cyan-400 font-bold">
            {stats.inference} ms
          </span>
        </div>

        <div className="flex justify-between">
          <span>Status</span>
          <span className="text-green-400 font-bold animate-pulse">
            Monitoring
          </span>
        </div>

      </div>

    </div>
  );
}