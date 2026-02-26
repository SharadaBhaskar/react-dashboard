import {
  Home,
  Users,
  Calendar,
  Bell,
  MessageSquare,
  BookOpen,
  BarChart2,
} from "lucide-react";

const navItems = [
  { label: "Home", icon: <Home size={15} /> },
  { label: "Faculty", icon: <Users size={15} /> },
  { label: "Timetable", icon: <Calendar size={15} /> },
  { label: "Notifications", icon: <Bell size={15} /> },
  { label: "Messages", icon: <MessageSquare size={15} /> },
  { label: "Classes", icon: <BookOpen size={15} /> },
  { label: "Reports", icon: <BarChart2 size={15} />, active: true },
];

export default function Navbar() {
  return (
    <nav className="bg-gray-200 border-b border-gray-200 px-17 py-3 flex items-center justify-between sticky top-0 z-80 rounded-full shadow-sm w-100% mt-5 mx-5">
      <div className="flex items-center gap-20">
        {navItems.map(({ label, icon, active }) => (
          <button
            key={label}
            className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors w-35 
              ${
                active
                  ? "bg-white text-gray-900 border border-gray-300 shadow-sm"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
          >
            {icon}
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}