import { useState } from "react";

export default function AshaPortal() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    district: "",
    symptoms: "",
  });

  const submit = (e) => {
    e.preventDefault();

    const existing =
      JSON.parse(localStorage.getItem("asha_surveys")) || [];

    existing.push(form);

    localStorage.setItem(
      "asha_surveys",
      JSON.stringify(existing)
    );

    alert("Survey Submitted");

    setForm({
      name: "",
      age: "",
      district: "",
      symptoms: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#fff7fb] p-8">
      <h1 className="text-4xl font-bold mb-8">
        ASHA Worker Portal
      </h1>

      <form
        onSubmit={submit}
        className="bg-white p-6 rounded-3xl shadow max-w-xl"
      >
        <input
          placeholder="Name"
          className="w-full border p-3 rounded-xl mb-4"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          placeholder="Age"
          className="w-full border p-3 rounded-xl mb-4"
          value={form.age}
          onChange={(e) =>
            setForm({ ...form, age: e.target.value })
          }
        />

        <input
          placeholder="District"
          className="w-full border p-3 rounded-xl mb-4"
          value={form.district}
          onChange={(e) =>
            setForm({ ...form, district: e.target.value })
          }
        />

        <textarea
          placeholder="Symptoms"
          className="w-full border p-3 rounded-xl mb-4"
          value={form.symptoms}
          onChange={(e) =>
            setForm({ ...form, symptoms: e.target.value })
          }
        />

        <button className="bg-pink-600 text-white px-6 py-3 rounded-xl">
          Submit Survey
        </button>
      </form>
    </div>
  );
}