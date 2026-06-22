const patients = [
  {
    name: "Priya Sharma",
    disease: "PCOS",
    risk: "High",
  },
  {
    name: "Riya Das",
    disease: "Anemia",
    risk: "Medium",
  },
  {
    name: "Anita Singh",
    disease: "Breast Cancer",
    risk: "High",
  },
];

export default function DoctorPortal() {
  return (
    <div className="min-h-screen bg-[#fff7fb] p-8">
      <h1 className="text-4xl font-bold mb-8">
        Doctor Review Portal
      </h1>

      <div className="bg-white rounded-3xl shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-pink-100">
              <th className="p-4">Patient</th>
              <th>Disease</th>
              <th>Risk</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {patients.map((p, i) => (
              <tr key={i}>
                <td className="p-4">{p.name}</td>
                <td>{p.disease}</td>
                <td>{p.risk}</td>
                <td>
                  <button className="bg-pink-600 text-white px-4 py-2 rounded-lg">
                    Review
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}