import {
  Calendar,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  Clock,
} from "lucide-react";

const workingHours = [
  { day: "Monday", hours: "7:30 AM - 2:30 PM" },
  { day: "Tuesday", hours: "7:30 AM - 2:30 PM" },
  { day: "Wednesday", hours: "7:30 AM - 2:30 PM" },
  { day: "Thursday", hours: "7:30 AM - 2:30 PM" },
];

export default function Sidebar() {
  return (
    <aside className="w-56 min-h-screen bg-white border-r border-gray-200 flex flex-col px-4 py-5 fixed left-0 top-0 overflow-y-auto z-20">
      {/* Avatar */}
      <div className="flex flex-col items-center mb-4">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gray-300 overflow-hidden border-2 border-gray-200">
            <img
              src="https://i.pravatar.cc/80?img=12"
              alt="Dr. Rajesh Kumar"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></span>
        </div>
        <p className="mt-2 font-semibold text-sm text-gray-800">Dr. Rajesh Kumar</p>
        <p className="text-xs text-gray-500">Head of Department - BCA</p>
        <span className="mt-1 px-3 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-medium">
          Active
        </span>
      </div>

      {/* Personal Info */}
      <Section title="Personal Information">
        <InfoRow icon={<Calendar size={13} />} label="DOB:" value="15th March, 1975" />
        <InfoRow icon={<Mail size={13} />} label="Email:" value="rajesh.kumar@college.ed" small />
        <InfoRow icon={<Phone size={13} />} label="Phone:" value="+91 98765 43210" />
        <InfoRow icon={<MapPin size={13} />} label="Office:" value="BCA Block, Room 301" />
      </Section>

      {/* Education */}
      <Section title="Education" icon={<GraduationCap size={13} />}>
        <ul className="text-xs text-gray-600 space-y-1 mt-1">
          <li>• Ph.D. in Computer Science - IIT Delhi (2005)</li>
          <li>• M.Tech in Software Engineering - IIT Bombay (2001)</li>
          <li>• B.Tech in Computer Science - Delhi University (1998)</li>
        </ul>
      </Section>

      {/* Experience */}
      <Section title="Experience & Specialization" icon={<Briefcase size={13} />}>
        <p className="text-xs text-gray-600 mt-1">Experience: 20+ Years</p>
        <p className="text-xs text-gray-600">
          Specialization: Software Engineering, AI & ML
        </p>
      </Section>

      {/* Working Hours */}
      <Section title="Working Hours" icon={<Clock size={13} />}>
        {workingHours.map(({ day, hours }) => (
          <div key={day} className="flex justify-between text-xs mt-1">
            <span className="text-gray-700">{day}</span>
            <span className="text-green-600 font-medium">{hours}</span>
          </div>
        ))}
      </Section>
    </aside>
  );
}

function Section({ title, icon, children }) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-1 mb-1 px-10 py-1">
        {icon && <span className="text-gray-500">{icon}</span>}
        <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}

function InfoRow({ icon, label, value, small }) {
  return (
    <div className="flex items-start gap-1.5 mt-2">
      <span className="text-gray-400 mt-0.5">{icon}</span>
      <span className="text-xs text-gray-500 shrink-0">{label}</span>
      <span className={`text-xs text-gray-700 ${small ? "break-all" : ""}`}>
        {value}
      </span>
    </div>
  );
}