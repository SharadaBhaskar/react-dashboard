import {
  Users,
  BookOpen,
  CalendarCheck,
  Clock,
  ClipboardList,
  AlertCircle,
} from "lucide-react";

const reportCards = [
  { label: "Faculty Reports", icon: <Users size={28} className="text-gray-700" /> },
  { label: "Academic Reports", icon: <BookOpen size={28} className="text-gray-700" /> },
  { label: "Attendance Reports", icon: <CalendarCheck size={28} className="text-gray-700" /> },
  { label: "Performance Reports", icon: <Clock size={28} className="text-gray-700" /> },
  { label: "Assessment Reports", icon: <ClipboardList size={28} className="text-gray-700" /> },
  { label: "Issue Reports", icon: <AlertCircle size={28} className="text-gray-700" /> },
];

export default function DepartmentReports() {
  return (
    <main className="p-6 min-h-screen bg-gray-50">
      {/* Section Container */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <ClipboardList size={18} className="text-gray-600" />
          <h2 className="text-base font-semibold text-gray-800">
            Department Reports
          </h2>
        </div>

        {/* Cards Grid - 3 columns */}
        <div className="grid grid-cols-3 gap-4">
          {reportCards.map(({ label, icon }) => (
            <button
              key={label}
              className="flex flex-col items-center justify-center gap-3 border border-gray-200 rounded-xl py-10 px-4 hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer bg-white"
            >
              {icon}
              <span className="text-sm font-medium text-gray-700">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}