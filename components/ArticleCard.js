// components/ArticleCard.js
import Link from "next/link";

export default function ArticleCard({ title, description, href }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-all duration-200">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        href={href}
        className="text-teal-600 font-semibold hover:underline"
      >
        Weiterlesen →
      </Link>
    </div>
  );
}
