import { Users, AlertTriangle, Hospital, MapPinned } from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const districtData = [
  { district: "Kolkata", risk: 72 },
  { district: "Howrah", risk: 54 },
  { district: "Hooghly", risk: 48 },
  { district: "Nadia", risk: 63 },
];

const diseaseData = [
  { name: "PCOS", value: 40 },
  { name: "Anemia", value: 30 },
  { name: "Breast", value: 15 },
  { name: "Cervical", value: 15 },
];

export default function GovernmentDashboard() {
  return (
    <div className="min-h-screen bg-[#fff7fb] p-8">
      <h1 className="text-4xl font-bold mb-8">
        Government Health Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6 mb-10">
        <StatCard icon={<Users />} title="Women Screened" value="12,480" />
        <StatCard icon={<AlertTriangle />} title="High Risk" value="1,237" />
        <StatCard icon={<Hospital />} title="Doctors" value="184" />
        <StatCard icon={<MapPinned />} title="Districts" value="23" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl p-6 shadow">
          <h2 className="font-bold text-xl mb-4">
            District Risk Distribution
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={districtData}>
              <XAxis dataKey="district" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="risk" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow">
          <h2 className="font-bold text-xl mb-4">
            Disease Breakdown
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={diseaseData}
                dataKey="value"
                outerRadius={100}
                label
              >
                {diseaseData.map((_, i) => (
                  <Cell key={i} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, title, value }) {
  return (
    <div className="bg-white rounded-3xl shadow p-6">
      <div className="mb-3">{icon}</div>
      <p className="text-gray-500">{title}</p>
      <h3 className="text-3xl font-bold">{value}</h3>
    </div>
  );
}