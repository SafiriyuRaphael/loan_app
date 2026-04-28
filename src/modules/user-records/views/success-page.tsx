export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow text-center space-y-4">
        <h2 className="text-2xl font-bold text-green-600">
          Account Created 🎉
        </h2>
        <p className="text-gray-600">
          Your account has been successfully created.
        </p>

        <button className="bg-green-600 text-white px-6 py-2 rounded-lg">
          Continue
        </button>
      </div>
    </div>
  );
}
