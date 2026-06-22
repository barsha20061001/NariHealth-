import { Link } from "react-router-dom";
import { ShieldAlert } from "lucide-react";

export default function CervicalCancerRisk() {
  return (
    <div className="min-h-screen bg-[#fff7fb] p-8">
      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <ShieldAlert
            size={48}
            className="text-pink-600 mb-4"
          />

          <h1 className="text-5xl font-black mb-4">
            Cervical Cancer Risk Assessment
          </h1>

          <p className="text-slate-600 text-lg">
            Early screening can significantly improve outcomes.
            Use our AI-powered assessment to evaluate risk factors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">
              Risk Prediction
            </h2>

            <p className="text-slate-600 mb-6">
              Enter patient information and generate a risk score.
            </p>

            <Link
              to="/cervical-predict"
              className="bg-pink-600 text-white px-6 py-3 rounded-xl"
            >
              Start Prediction
            </Link>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">
              About Cervical Cancer
            </h2>

            <ul className="space-y-3 text-slate-600">
              <li>• Persistent HPV infection</li>
              <li>• Abnormal bleeding</li>
              <li>• Pelvic pain</li>
              <li>• Pain during intercourse</li>
              <li>• Regular screening is important</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}