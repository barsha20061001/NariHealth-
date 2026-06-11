import { useState } from "react";
import { useNavigate } from "react-router-dom";

const features = [
  "Age",
  "BMI",
  "Abnormal Bleeding",
  "Postmenopausal Bleeding",
  "Pelvic Pain",
  "Diabetes",
  "Hypertension",
  "PCOS History",
  "Family History",
  "Obesity"
];

const sampleValues = [55, 31.5, 1, 1, 1, 1, 1, 0, 1, 1];

export default function UterusCancerPredict() {
  const navigate = useNavigate();
  const [values, setValues] = useState(Array(10).fill(""));
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (index, value) => {
    const updated = [...values];
    updated[index] = value;
    setValues(updated);
  };

  const fillSample = () => {
    setValues(sampleValues);
  };

  const predict = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("http://127.0.0.1:8080/predict/uterus-cancer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          values: values.map(Number)
        })
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({
        risk: "Error",
        message: "Backend not connected. Make sure FastAPI is running."
      });
    }

    setLoading(false);
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

      <div className="max-w-6xl mx-auto bg-white rounded-[2rem] shadow-2xl p-8 border border-pink-200 mt-10">
        <h1 className="text-4xl font-black text-slate-950">
          Uterus Cancer Risk Prediction
        </h1>

        <p className="mt-3 text-slate-600">
          Enter symptom and health values to get an AI-based uterus cancer screening result.
          This is not a medical diagnosis.
        </p>

        <div className="mt-6 flex gap-4">
          <button
            onClick={fillSample}
            className="bg-purple-600 text-white px-5 py-3 rounded-xl font-bold"
          >
            Fill Sample Values
          </button>

          <button
            onClick={predict}
            className="bg-pink-600 text-white px-5 py-3 rounded-xl font-bold"
          >
            {loading ? "Predicting..." : "Predict Risk"}
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {features.map((feature, index) => (
            <div key={feature}>
              <label className="text-sm font-semibold text-slate-700">
                {feature}
              </label>

              <input
                type="number"
                step="any"
                value={values[index]}
                onChange={(e) => handleChange(index, e.target.value)}
                className="mt-2 w-full border border-pink-200 rounded-xl px-4 py-3 outline-none focus:border-pink-500"
                placeholder="Enter value"
              />
            </div>
          ))}
        </div>

        {result && (
          <div className="mt-8 rounded-2xl p-6 border bg-purple-50">
            <h2 className="text-2xl font-black">
              Result: {result.risk}
            </h2>

            <p className="mt-2">
              Prediction: <b>{result.prediction}</b>
            </p>

            <p>
              Confidence: <b>{result.confidence}%</b>
            </p>

            <p className="mt-3 text-slate-700">
              {result.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}