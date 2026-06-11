import { Link, useNavigate } from "react-router-dom";

export default function UterusCancerDetails() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-pink-50 px-6 pt-6 pb-10">
      {/* Navigation Buttons */}
      <div className="absolute top-4 right-10 flex gap-3">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-gray-700"
        >
          Back
        </button>

        <button
          onClick={() => navigate("/")}
          className="bg-pink-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-pink-700"
        >
          Home
        </button>
      </div>

      <div className="max-w-6xl mx-auto bg-white rounded-[2rem] shadow-xl p-10 border border-pink-200 mt-10">
        <h1 className="text-5xl font-black text-pink-600">
          Uterus Cancer Awareness
        </h1>

        <p className="mt-5 text-slate-600 text-lg">
          Uterine cancer, also known as endometrial cancer, begins in the
          tissues of the uterus. It is one of the most common gynecological
          cancers and can often be treated successfully when detected early.
        </p>

        {/* Symptoms */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-slate-800">
            Common Symptoms
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mt-5">
            <div className="bg-pink-50 p-4 rounded-xl">
              Abnormal vaginal bleeding
            </div>

            <div className="bg-pink-50 p-4 rounded-xl">
              Bleeding after menopause
            </div>

            <div className="bg-pink-50 p-4 rounded-xl">
              Pelvic pain or pressure
            </div>

            <div className="bg-pink-50 p-4 rounded-xl">
              Pain during urination
            </div>

            <div className="bg-pink-50 p-4 rounded-xl">
              Unusual vaginal discharge
            </div>

            <div className="bg-pink-50 p-4 rounded-xl">
              Unexplained weight loss
            </div>
          </div>
        </div>

        {/* Risk Factors */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-slate-800">
            Risk Factors
          </h2>

          <ul className="list-disc ml-6 mt-4 space-y-3 text-slate-700">
            <li>Age above 50 years</li>
            <li>Obesity</li>
            <li>Hormonal imbalance</li>
            <li>Family history of uterine cancer</li>
            <li>Diabetes</li>
            <li>High blood pressure</li>
            <li>Polycystic Ovary Syndrome (PCOS)</li>
          </ul>
        </div>

        {/* Prevention */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-slate-800">
            Prevention & Healthy Habits
          </h2>

          <ul className="list-disc ml-6 mt-4 space-y-3 text-slate-700">
            <li>Maintain a healthy body weight</li>
            <li>Exercise regularly</li>
            <li>Attend routine gynecological checkups</li>
            <li>Monitor abnormal bleeding symptoms</li>
            <li>Manage diabetes and blood pressure</li>
            <li>Follow a balanced diet</li>
          </ul>
        </div>

        {/* AI Section */}
        <div className="mt-12 bg-pink-50 border border-pink-200 p-8 rounded-2xl">
          <h2 className="text-3xl font-black text-pink-600">
            AI Uterus Cancer Screening
          </h2>

          <p className="mt-4 text-slate-700">
            Use our AI-powered screening tool to analyze symptoms and health
            indicators. This tool provides an early risk assessment and is not
            intended to replace professional medical diagnosis.
          </p>

          <Link to="/uterus-cancer-risk">
            <button className="mt-6 bg-pink-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-pink-700">
              Check Uterine Cancer Risk
            </button>
          </Link>
        </div>

        

        {/* Disclaimer */}
        <div className="mt-10 bg-yellow-50 border border-yellow-300 p-5 rounded-xl">
          <p className="text-yellow-800">
            <strong>Disclaimer:</strong> This AI screening system provides
            educational and informational insights only. Always consult a
            qualified healthcare professional for diagnosis and treatment.
          </p>
        </div>
      </div>
    </div>
  );
}