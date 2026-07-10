import NotificationPanel from "../components/NotificationPanel";
import AIInsights from "../components/AIInsights";
import AICamera from "../components/AICamera";
import CityMap from "../components/CityMap";
import { useEffect, useState } from "react";
import StatusCard from "../components/StatusCard";
import TrafficChart from "../components/TrafficChart";
import {
  Car,
  TrafficCone,
  Ambulance,
  Wind,
} from "lucide-react";

export default function Dashboard() {

  const [currentTime, setCurrentTime] = useState("");

  const [trafficData, setTrafficData] = useState({
    vehicles: 0,
    signals: 0,
    emergencyVehicles: 0,
    aqi: 0,
  });

  // Live Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      setCurrentTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

    // Fetch backend traffic data
    useEffect(() => {
    const updateTraffic = async () => {
      try {

        // Step 1: Generate new data in Azure SQL
        await fetch("http://127.0.0.1:8000/simulate", {
          method: "POST",
        });

        // Step 2: Read the latest record
        const res = await fetch("http://127.0.0.1:8000/traffic");

        const data = await res.json();

        setTrafficData(data);

      } catch (err) {
        console.error("Simulation Error:", err);
      }
    };

    updateTraffic();

    const interval = setInterval(updateTraffic, 5000);

    return () => clearInterval(interval);

  }, []);

    useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      i = (i + 1) % decisions.length;
      setDecision(decisions[i]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      title: "Vehicles",
      value: trafficData.vehicles,
      icon: <Car size={28} />,
      color: "text-cyan-400",
    },
    {
      title: "Traffic Signals",
      value: trafficData.signals,
      icon: <TrafficCone size={28} />,
      color: "text-green-400",
    },
    {
      title: "Emergency Vehicles",
      value: trafficData.emergencyVehicles,
      icon: <Ambulance size={28} />,
      color: "text-red-400",
    },
    {
      title: "Air Quality Index",
      value: trafficData.aqi,
      icon: <Wind size={28} />,
      color: "text-yellow-400",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

        <div>
          <h1 className="text-5xl font-extrabold text-white tracking-wide">
            🚦 Smart City Traffic Management
           
          </h1>
           <div className="flex items-center gap-2 mt-2">
              <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-green-400 font-semibold">
                LIVE MONITORING
              </span>
            </div>
            <p className="text-cyan-400 mt-2">
              AI Powered • Azure Cloud • Real-Time Analytics
            </p>

          <p className="text-slate-400 mt-2">
            Microsoft Azure Powered Traffic Optimization System
          </p>
        </div>

        <div className="bg-slate-900 border border-cyan-500/20 rounded-xl p-5 text-right">

          <p className="text-slate-400">
            Current Time
          </p>

          <h2 className="text-3xl font-bold text-cyan-400">
            {currentTime}
          </h2>

        </div>

      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6">

        {cards.map((card) => (

          <div
            key={card.title}
            className="bg-slate-900 rounded-2xl p-6 border border-cyan-500/20 shadow-lg hover:shadow-cyan-500/20 transition"
          >

            <div className={card.color}>
              {card.icon}
            </div>

            <h2 className="text-slate-400 mt-4">
              {card.title}
            </h2>

            <h3 className="text-4xl font-extrabold text-cyan-400 transition-all duration-300 animate-pulse">
              {card.value}
            </h3>

          </div>

        ))}

      </div>

      {/* Main Grid */}
      <div className="mt-10 grid lg:grid-cols-2 gap-6">

        {/* Traffic Analytics */}

        <div className="bg-slate-900 rounded-2xl p-6 border border-cyan-500/20
        hover:scale-[1.02]
        hover:border-cyan-400
        transition-all
        duration-300">

          <h2 className="text-xl font-semibold text-cyan-400 mb-4">
            📈 Live Traffic Analytics
          </h2>

          <div className="h-64">
            <TrafficChart />
          </div>

        </div>

        {/* Junction Status */}

        <div className="bg-slate-900 rounded-2xl p-6 border border-cyan-500/20
          hover:scale-[1.02]
          hover:border-cyan-400
          transition-all
          duration-300">

          <h1 className="text-5xl font-extrabold text-cyan-400">
            🚦 Smart City Traffic Management
          </h1>

          <p className="text-slate-400 mt-2 text-lg">
            AI Powered Intelligent Traffic Optimization Platform
          </p>

          <p className="text-cyan-300 mt-1">
            Microsoft Azure | React | FastAPI | Machine Learning
          </p>

          <div className="space-y-4 mt-6">

            <div className="flex justify-between">
              <span>Junction A</span>
              <span className="text-green-400 font-semibold">
                Normal
              </span>
            </div>

            <div className="flex justify-between">
              <span>Junction B</span>
              <span className="text-red-400 font-semibold">
                Congested
              </span>
            </div>

            <div className="flex justify-between">
              <span>Junction C</span>
              <span className="text-yellow-400 font-semibold">
                Moderate
              </span>
            </div>

            <div className="flex justify-between">
              <span>Junction D</span>
              <span className="text-green-400 font-semibold">
                Normal
              </span>
            </div>

          </div>

          <div className="mt-8 bg-red-500/10 border border-red-500 rounded-xl p-4">

            <h3 className="text-red-400 font-bold">
              🚨 Emergency Alert
            </h3>

            <p className="text-slate-300 mt-2 text-sm">
              Ambulance detected near Junction B.
              Traffic signal priority activated automatically.
            </p>

          </div>

          <div className="mt-4 bg-cyan-500/10 border border-cyan-500 rounded-xl p-4">

            <h3 className="text-cyan-400 font-bold">
              🤖 AI Traffic Prediction
            </h3>

            <p className="text-slate-300 mt-2 text-sm">
              Heavy congestion is predicted between
              <span className="text-cyan-300 font-semibold">
                {" "}5:00 PM and 7:00 PM
              </span>.
              Suggested alternate routes have been generated.
            </p>

          </div>

        </div>

      </div>

      {/* Bottom Section */}

      <div className="grid lg:grid-cols-2 gap-6 mt-6">

        <StatusCard title="🚦 Live Traffic Signals">

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>Junction A</span>
              <span className="text-green-400 font-bold">🟢 GREEN</span>
            </div>

            <div className="flex justify-between">
              <span>Junction B</span>
              <span className="text-red-400 font-bold">🔴 RED</span>
            </div>

            <div className="flex justify-between">
              <span>Junction C</span>
              <span className="text-yellow-400 font-bold">🟡 YELLOW</span>
            </div>

            <div className="flex justify-between">
              <span>Junction D</span>
              <span className="text-green-400 font-bold">🟢 GREEN</span>
            </div>

          </div>

        </StatusCard>

        <StatusCard title="📡 IoT Sensor Feed">

          <div className="space-y-5">

            <div className="border border-slate-700 rounded-xl p-3">
              <h3 className="font-semibold">Sensor 01</h3>
              <p>Vehicle Count : 52</p>
              <p className="text-green-400">Active</p>
            </div>

            <div className="border border-slate-700 rounded-xl p-3">
              <h3 className="font-semibold">Sensor 02</h3>
              <p>Vehicle Count : 108</p>
              <p className="text-red-400">Congested</p>
            </div>

          </div>

        </StatusCard>

      </div>

      {/* Last Section */}

      <div className="grid lg:grid-cols-2 gap-6 mt-6">

        <StatusCard title="🌤 Weather & Air Quality">

          <div className="space-y-3">

            <div className="flex justify-between">
              <span>Temperature</span>
              <span>35°C</span>
            </div>

            <div className="flex justify-between">
              <span>Humidity</span>
              <span>62%</span>
            </div>

            <div className="flex justify-between">
              <span>AQI</span>
              <span className="text-yellow-400">74</span>
            </div>

            <div className="flex justify-between">
              <span>Wind</span>
              <span>12 km/h</span>
            </div>

          </div>

        </StatusCard>

        <StatusCard title="☁ Azure Services">

  <div className="space-y-4">

    <div className="flex justify-between">
      <span>Azure IoT Hub</span>
      <span className="text-green-400">Online</span>
    </div>

    <div className="flex justify-between">
      <span>Azure Event Hubs</span>
      <span className="text-green-400">Receiving</span>
    </div>

    <div className="flex justify-between">
      <span>Azure Functions</span>
      <span className="text-green-400">Running</span>
    </div>

    <div className="flex justify-between">
      <span>Azure SQL</span>
      <span className="text-green-400">Connected</span>
    </div>

    <div className="flex justify-between">
      <span>Azure ML</span>
      <span className="text-green-400">Predicting</span>
    </div>

  </div>

</StatusCard>

</div>

{/* Smart City Map */}
<div className="mt-6">
  <CityMap />
</div>

{/* AI Camera + AI Decision Engine */}
{/* AI Camera + AI Insights */}

<div className="grid lg:grid-cols-2 gap-6 mt-6">

  <AICamera />

  <AIInsights traffic={trafficData} />

</div>
<div className="grid lg:grid-cols-2 gap-6 mt-6">

  <NotificationPanel />

  <StatusCard title="📊 System Health">

    <div className="space-y-4">

      <div className="flex justify-between">
        <span>Backend API</span>
        <span className="text-green-400">✔ Online</span>
      </div>

      <div className="flex justify-between">
        <span>Azure Services</span>
        <span className="text-green-400">✔ Connected</span>
      </div>

      <div className="flex justify-between">
        <span>AI Engine</span>
        <span className="text-green-400">✔ Running</span>
      </div>

      <div className="flex justify-between">
        <span>IoT Sensors</span>
        <span className="text-green-400">24 Active</span>
      </div>

      <div className="flex justify-between">
        <span>Server Load</span>
        <span className="text-cyan-400">31%</span>
      </div>

    </div>

  </StatusCard>

</div>
<footer className="mt-10 border-t border-slate-800 pt-6 text-center text-slate-400">

  <h3 className="text-cyan-400 font-bold">
    Smart City Traffic Management System
  </h3>

  <p className="mt-2">
    Developed by
  </p>

  <p className="font-semibold text-white">
    Tharun HD & Ishwarya R
  </p>

  <p className="mt-2 text-cyan-400">
    Powered by Microsoft Azure
  </p>

</footer>
</div>
);
}