import { Bell } from "lucide-react";

const notifications = [
  {
    type: "Emergency",
    message: "Ambulance priority activated at Junction B",
    color: "text-red-400",
  },
  {
    type: "Traffic",
    message: "Heavy congestion detected on Ring Road",
    color: "text-yellow-400",
  },
  {
    type: "AI",
    message: "Alternative route generated successfully",
    color: "text-cyan-400",
  },
  {
    type: "Environment",
    message: "Carbon emissions reduced by 18%",
    color: "text-green-400",
  },
];

export default function NotificationPanel() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-cyan-500/20">

      <h2 className="text-xl font-semibold text-cyan-400 flex items-center gap-2">
        <Bell size={22} />
        Live Notifications
      </h2>

      <div className="mt-5 space-y-4">

        {notifications.map((item, index) => (
          <div
            key={index}
            className="border border-slate-700 rounded-xl p-3 hover:bg-slate-800 transition"
          >
            <p className={`font-semibold ${item.color}`}>
              {item.type}
            </p>

            <p className="text-sm text-slate-300 mt-1">
              {item.message}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}