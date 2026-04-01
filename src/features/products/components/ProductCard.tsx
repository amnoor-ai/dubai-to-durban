import { memo } from "react";
import { PLACEHOLDER_IMAGE } from "@/shared/types/perfume";
import type { Perfume } from "@/shared/types/perfume";

type Props = { product: Perfume; onAdd: (p: Perfume) => void; darkMode: boolean };

export const ProductCard = memo(function ProductCard({
  product,
  onAdd,
  darkMode,
}: Props) {
  const cardBaseClass = darkMode
    ? "rounded-2xl bg-gray-900 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
    : "rounded-2xl bg-gray-100 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl";

  const cardTextClass = darkMode ? "text-gray-300" : "text-gray-700";

  return (
    <div className={cardBaseClass}>
      <div className={`mb-4 flex items-center justify-center rounded-xl p-4 ${darkMode ? "bg-black" : "bg-white"}`}>
        <img src={product.image} alt={product.name} className="h-64 w-full object-contain" onError={(e) => { e.currentTarget.src = PLACEHOLDER_IMAGE; }} />
      </div>
      <h4 className={`mb-2 text-xl font-semibold ${darkMode ? "text-white" : "text-black"}`}>{product.name}</h4>
      <p className={`${cardTextClass} mb-4 text-lg`}>${product.price}</p>
      <button onClick={() => onAdd(product)} className="w-full rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition-colors hover:bg-yellow-400">Add to Cart</button>
    </div>
  );
});

