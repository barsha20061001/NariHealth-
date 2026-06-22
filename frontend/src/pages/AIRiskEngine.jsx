import { Link } from "react-router-dom";

import {
  Brain,
  Activity,
  HeartPulse,
  ShieldAlert,
  CalendarHeart,
  Users,
  AlertTriangle,
  BarChart3,
} from "lucide-react";

const models = [
  {
    title: "PCOS Risk Prediction",
    route: "/pcos-predict",
    accuracy: "91%",
    icon: Brain,
  },

  {
    title: "Anemia Risk Prediction",
    route: "/anemia-predict",
    accuracy: "88%",
    icon: Activity,
  },

  {
    title: "Cervical Cancer Prediction",
    route: "/cervical-cancer-predict",
    accuracy: "93%",
    icon: ShieldAlert,
  },

  {
    title: "Uterine Cancer Prediction",
    route: "/uterus-cancer-risk",
    accuracy: "89%",
    icon: HeartPulse,
  },

  {
    title: "Period Health Analysis",
    route: "/period-risk",
    accuracy: "86%",
    icon: CalendarHeart,
  },
];

export default function AIRiskEngine() {
  return (
    <div className="min-h-screen bg-[#fff7fb] p-8">

      <h1 className="text-5xl font-black text-slate-900 mb-2">
        AI Risk Engine
      </h1>

      <p className="text-slate-600 mb-10">
        Early disease screening powered by machine learning.
      </p>

      {/* KPI Cards */}

      <div className="grid md:grid-cols-4 gap-6 mb-12">

        <div className="bg-white p-6 rounded-3xl shadow-lg">
          <Users className="text-pink-600 mb-3" />
          <h3 className="text-3xl font-black">
            12,480
          </h3>
          <p className="text-slate-500">
            Women Screened
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-lg">
          <AlertTriangle className="text-red-500 mb-3" />
          <h3 className="text-3xl font-black">
            1,237
          </h3>
          <p className="text-slate-500">
            High Risk Cases
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-lg">
          <Brain className="text-purple-600 mb-3" />
          <h3 className="text-3xl font-black">
            5
          </h3>
          <p className="text-slate-500">
            ML Models
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-lg">
          <BarChart3 className="text-green-600 mb-3" />
          <h3 className="text-3xl font-black">
            89.4%
          </h3>
          <p className="text-slate-500">
            Avg Accuracy
          </p>
        </div>

      </div>

      {/* Models */}

      <h2 className="text-3xl font-black mb-6">
        Available AI Models
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {models.map((model) => {

          const Icon = model.icon;

          return (
            <Link
              key={model.title}
              to={model.route}
            >
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-pink-200 hover:shadow-2xl transition-all">

                <Icon
                  size={42}
                  className="text-pink-600 mb-4"
                />

                <h3 className="text-xl font-black mb-2">
                  {model.title}
                </h3>

                <p className="text-slate-500 mb-4">
                  AI-assisted health screening.
                </p>

                <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold">
                  Accuracy {model.accuracy}
                </span>

              </div>
            </Link>
          );
        })}
      </div>

      {/* Recent Activity */}

      <div className="mt-16">

        <h2 className="text-3xl font-black mb-6">
          Recent Predictions
        </h2>

        <div className="bg-white rounded-3xl shadow-lg p-6">

          <table className="w-full">

            <thead>
              <tr className="text-left border-b">
                <th className="py-3">Patient</th>
                <th>Disease</th>
                <th>Risk</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="py-4">
                  Priya Sharma
                </td>
                <td>PCOS</td>
                <td className="text-red-500 font-bold">
                  High
                </td>
              </tr>

              <tr>
                <td className="py-4">
                  Anita Das
                </td>
                <td>Anemia</td>
                <td className="text-yellow-500 font-bold">
                  Medium
                </td>
              </tr>

              <tr>
                <td className="py-4">
                  Riya Sen
                </td>
                <td>Cervical Cancer</td>
                <td className="text-green-600 font-bold">
                  Low
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}