import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UterusCancerRisk() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    age: "",
    abnormalBleeding: "",
    postMenopauseBleeding: "",
    pelvicPain: "",
    obesity: "",
    diabetes: "",
    familyHistory: "",
    hypertension: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const calculateRisk = () => {
    let score = 0;

    if (Number(form.age) >= 45) score += 2;
    if (form.abnormalBleeding === "yes") score += 3;
    if (form.postMenopauseBleeding === "yes") score += 3;
    if (form.pelvicPain === "yes") score += 1;
    if (form.obesity === "yes") score += 1;
    if (form.diabetes === "yes") score += 1;
    if (form.familyHistory === "yes") score += 1;
    if (form.hypertension === "yes") score += 1;

    if (score >= 7) {
      setResult({
        risk: "High Risk",
        color: "bg-red-50 border-red-300 text-red-700",
        message: "Please consult a gynecologist for proper medical evaluation.",
      });
    } else if (score >= 4) {
      setResult({
        risk: "Moderate Risk",
        color: "bg-yellow-50 border-yellow-300 text-yellow-700",
        message: "Monitor symptoms and consider medical consultation.",
      });
    } else {
      setResult({
        risk: "Low Risk",
        color: "bg-green-50 border-green-300 text-green-700",
        message: "Risk appears low, but regular checkups are still important.",
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-pink-50 px-6 pt-6 pb-10">
      <div className="absolute top-4 right-10 flex gap-3">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-600 text-white px-4 py-2 rounded-xl font-semibold"
        >
          Back
        </button>

        <button
          onClick={() => navigate("/")}
          className="bg-pink-600 text-white px-4 py-2 rounded-xl font-semibold"
        >
          Home
        </button>
      </div>

      <div className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-xl p-8 border border-pink-200 mt-10">
        <h1 className="text-4xl font-black text-pink-600">
          Uterine Cancer Risk Assessment
        </h1>

        <p className="mt-3 text-slate-600">
          Answer a few symptom and health-based questions to get an early risk
          screening result. This is not a medical diagnosis.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mt-8">
          <div>
            <label className="font-semibold">Age</label>
            <input
              type="number"
              value={form.age}
              onChange={(e) => handleChange("age", e.target.value)}
              className="mt-2 w-full border border-pink-200 rounded-xl px-4 py-3"
              placeholder="Enter age"
            />
          </div>

          {[
            ["abnormalBleeding", "Abnormal vaginal bleeding?"],
            ["postMenopauseBleeding", "Bleeding after menopause?"],
            ["pelvicPain", "Pelvic pain or pressure?"],
            ["obesity", "Obesity or high BMI?"],
            ["diabetes", "Diabetes?"],
            ["familyHistory", "Family history of uterine cancer?"],
            ["hypertension", "High blood pressure?"],
          ].map(([field, label]) => (
            <div key={field}>
              <label className="font-semibold">{label}</label>
              <select
                value={form[field]}
                onChange={(e) => handleChange(field, e.target.value)}
                className="mt-2 w-full border border-pink-200 rounded-xl px-4 py-3"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          ))}
        </div>

        <button
          onClick={calculateRisk}
          className="mt-8 bg-pink-600 text-white px-6 py-3 rounded-xl font-bold"
        >
          Check Risk
        </button>

        {result && (
          <div className={`mt-8 rounded-2xl border p-6 ${result.color}`}>
            <h2 className="text-2xl font-black">Result: {result.risk}</h2>
            <p className="mt-3">{result.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}