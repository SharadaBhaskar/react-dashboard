// Navbar.jsx  →  src/components/Navbar.jsx
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
  { label: "Reports", icon: <BarChart2 size={15} /> },
];

export default function Navbar({ activeLabel = "Classes" }) {
  return (
    <nav className="bg-gray-200 rounded-full flex items-center px-3 py-3 mt-5 mx-5">
      {navItems.map(({ label, icon }) => {
        const active = label === activeLabel;
        return (
          <button
            key={label}
            className={`flex items-center gap-2 px-13 py-2.5 rounded-full text-sm font-medium transition-colors flex-1 justify-center ${
              active
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {icon}
            {label}
          </button>
        );
      })}
    </nav>
  );
}