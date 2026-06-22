export default function UploadReport() {
  return (
    <div className="min-h-screen bg-[#fff7fb] p-8">
      <h1 className="text-4xl font-bold mb-6">
        Upload Medical Report
      </h1>

      <div className="bg-white p-8 rounded-3xl shadow max-w-xl">
        <input
          type="file"
          className="border p-3 rounded-xl w-full"
        />
      </div>
    </div>
  );
}