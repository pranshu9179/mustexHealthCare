export default function Card({ title, text }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow hover:shadow-md transition">
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-700">{text}</p>
    </div>
  );
}
