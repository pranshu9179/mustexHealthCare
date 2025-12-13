import { Link } from "react-router-dom";

export default function ContactFormSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
      <div className="max-w-6xl mx-auto text-center px-6">

        <h3 className="text-4xl font-bold">Need Help or Guidance?</h3>
        <p className="mt-3 text-purple-100 text-lg">
          Our healthcare support team is ready to assist you.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-6 px-10 py-3 bg-white text-purple-700 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>

      </div>
    </section>
  );
}
