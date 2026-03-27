"use client";

import { useState } from "react";

type Perfume = {
  id: number;
  name: string;
  price: string;
  image: string;
};

// EDIT PRODUCTS HERE
const perfumes: Perfume[] = [
  { id: 1, name: "Ameer Al Oud", price: "$55", image: "/products/ameer_al_oud.jpeg" },
  { id: 2, name: "Angham", price: "$50", image: "/products/angham.jpeg" },
  { id: 3, name: "Asad Bourbon", price: "$58", image: "/products/asad_bourbon.jpeg" },
  { id: 4, name: "Asad Black", price: "$56", image: "/products/asad_black.jpeg" },
  { id: 5, name: "Asad Elixir", price: "$57", image: "/products/asad_elixir.jpeg" },
  { id: 6, name: "Asad Zanzibar", price: "$59", image: "/products/asad_zanzibar.jpeg" },
  { id: 7, name: "Aqua Pura", price: "$48", image: "/products/aqua_pura.jpeg" },
  { id: 8, name: "Amber Saffron", price: "$60", image: "/products/amber_saffron.jpeg" },
  { id: 9, name: "3pm Black", price: "$46", image: "/products/3pm_black.jpeg" },
  { id: 10, name: "3pm Rave", price: "$47", image: "/products/3pm_rave.jpeg" },
  { id: 11, name: "9 Am", price: "$45", image: "/products/9_am.jpeg" },
  { id: 12, name: "9pm", price: "$49", image: "/products/9pm.jpeg" },
  { id: 13, name: "9pm Elixir", price: "$52", image: "/products/9pm_elixir.jpeg" },
  { id: 14, name: "9pm Rebel", price: "$53", image: "/products/9pm_rebel.jpeg" },
  { id: 15, name: "Art of Arabia No.1", price: "$45", image: "/products/art_of_arabia_No.1.jpeg" },
  { id: 16, name: "Art of Arabia No.2", price: "$47", image: "/products/art_of_arabia_No.2.jpeg" },
  { id: 17, name: "Art of Arabia No.3", price: "$49", image: "/products/art_of_arabia_No.3.jpeg" },
  { id: 18, name: "Art of Universe", price: "$51", image: "/products/art_of_universe.jpeg" },
  { id: 19, name: "Barakat Red", price: "$53", image: "/products/barakat_red.jpeg" },
  { id: 20, name: "Barakat Satin Oud", price: "$55", image: "/products/barakat_satin_oud.jpeg" },
  { id: 21, name: "Barakat White", price: "$57", image: "/products/barakat_white.jpeg" },
  { id: 22, name: "Barakkat Rouge", price: "$59", image: "/products/barakkat_rouge.jpeg" },
  { id: 23, name: "Bavaria Man", price: "$48", image: "/products/bavaria_man.jpeg" },
  { id: 24, name: "Berries Weekend", price: "$50", image: "/products/berries_weekend.jpeg" },
  { id: 25, name: "Brown Orchid", price: "$45", image: "/products/brown_orchid.jpeg" },
  { id: 26, name: "Brown Orchid Rose", price: "$47", image: "/products/brown_orchid_rose.jpeg" },
  { id: 27, name: "Champ de Rose", price: "$49", image: "/products/champ_de_rose.jpeg" },
  { id: 28, name: "Charuto Mysterious", price: "$51", image: "/products/charuto_mysterious.jpeg" },
  { id: 29, name: "Charuto Vanilla Tobacco", price: "$53", image: "/products/charuto_vanilla_tobacco.jpeg" },
  { id: 30, name: "Club de Nuit Iconic", price: "$55", image: "/products/club_de_nuit_iconic.jpeg" },
  { id: 31, name: "Club de Nuit Intense", price: "$57", image: "/products/club_de_nuit_intense.jpeg" },
  { id: 32, name: "Club de Nuit IWomen", price: "$59", image: "/products/club_de_nuit_iwomen.jpeg" },
  { id: 33, name: "Club de Nuit Urban Man", price: "$48", image: "/products/club_de_nuit_urban_man.jpeg" },
  { id: 34, name: "Eclair", price: "$50", image: "/products/eclair.jpeg" },
  { id: 35, name: "Ely Sia Apple", price: "$45", image: "/products/ely_sia_apple.jpeg" },
  { id: 36, name: "Ely Sia Pistachio", price: "$47", image: "/products/ely_sia_pistachio.jpeg" },
  { id: 37, name: "Ely Sia Sugar", price: "$49", image: "/products/ely_sia_sugar.jpeg" },
  { id: 38, name: "Enchantment Blue", price: "$51", image: "/products/enchantment_blue.jpeg" },
  { id: 39, name: "Fakhar Gold", price: "$53", image: "/products/fakhar_gold.jpeg" },
  { id: 40, name: "Fakhar Silver", price: "$55", image: "/products/fakhar_silver.jpeg" },
  { id: 41, name: "Fakhar White", price: "$57", image: "/products/fakhar_white.jpeg" },
  { id: 42, name: "Flora by Flora", price: "$59", image: "/products/flora_by_flora.jpeg" },
  { id: 43, name: "Galactic Man", price: "$48", image: "/products/galactic_man.jpeg" },
  { id: 44, name: "Ghost Spectre", price: "$50", image: "/products/ghost_spectre.jpeg" },
  { id: 45, name: "Hamid Body Lotion", price: "$45", image: "/products/hamid_body_lotion.jpeg" },
  { id: 46, name: "Hawas Black", price: "$47", image: "/products/hawas_black.jpeg" },
  { id: 47, name: "Hawas Her", price: "$49", image: "/products/hawas_her.jpeg" },
  { id: 48, name: "Hawas Ice", price: "$51", image: "/products/hawas_ice.jpeg" },
  { id: 49, name: "Hawas Malibu", price: "$53", image: "/products/hawas_malibu.jpeg" },
  { id: 50, name: "Hayati Beau", price: "$55", image: "/products/hayati_beau.jpeg" },
  { id: 51, name: "Hayati Fragrance Black", price: "$57", image: "/products/hayati_fragrance_black.jpeg" },
  { id: 52, name: "Hayati Rose", price: "$59", image: "/products/hayati_rose.jpeg" },
  { id: 53, name: "Hayati Royale", price: "$48", image: "/products/hayati_royale.jpeg" },
  { id: 54, name: "Her Confession", price: "$50", image: "/products/her_confession.jpeg" },
];

// REPLACE IMAGES HERE - Update logo and placeholder image paths
const PLACEHOLDER_IMAGE = "https://via.placeholder.com/300x300?text=Loading...";

export default function Home() {
  // THEME TOGGLE
  const [darkMode, setDarkMode] = useState(true);
  const [cart, setCart] = useState<Perfume[]>([]);

  const addToCart = (perfume: Perfume) => {
    setCart((prev) => [...prev, perfume]);
  };

  const removeFromCart = (indexToRemove: number) => {
    setCart((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const totalPrice = cart.reduce((total, item) => {
    return total + Number(item.price.replace("$", ""));
  }, 0);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  // CHECKOUT LOGIC HERE - Replace with real payment integration later
  const handleCheckout = () => {
    alert("Checkout functionality coming soon! Total: $" + totalPrice);
  };

  const mainClass = darkMode ? "min-h-screen bg-black text-white" : "min-h-screen bg-white text-black";
  const navClass = darkMode
    ? "flex items-center justify-between border-b border-gray-800 p-6 shadow-lg bg-black"
    : "flex items-center justify-between border-b border-gray-300 p-6 shadow-lg bg-white";
  const sectionBgClass = darkMode ? "bg-black" : "bg-white";
  const cardBaseClass = darkMode
    ? "rounded-2xl bg-gray-900 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
    : "rounded-2xl bg-gray-100 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]";
  const cardTextClass = darkMode ? "text-gray-300" : "text-gray-700";
  const cartSectionClass = darkMode ? "border-t border-gray-800 px-6 py-16 bg-gray-900" : "border-t border-gray-300 px-6 py-16 bg-gray-100";

  // PREMIUM UI UPGRADE
  return (
    <main className={mainClass}>
      {/* STYLING YOU CAN CHANGE - Navigation bar */}
      <nav className={navClass}>
        <img src="/logo4.jpeg" alt="Dubai to Durban" className="h-12" />

        <div className="flex gap-4">
          <button className={darkMode ? "text-yellow-300 hover:text-yellow-400 transition-colors" : "text-yellow-600 hover:text-yellow-500 transition-colors"}>Shop</button>
          <button className={darkMode ? "rounded-full border border-yellow-500 px-4 py-2 hover:bg-yellow-500 hover:text-black transition-colors" : "rounded-full border border-yellow-400 px-4 py-2 hover:bg-yellow-300 hover:text-black transition-colors"}>
            Cart ({cart.length})
          </button>
          <button className={darkMode ? "text-yellow-300 hover:text-yellow-400 transition-colors" : "text-yellow-600 hover:text-yellow-500 transition-colors"}>Login</button>
          <button
            onClick={toggleTheme}
            className={darkMode ? "rounded-full bg-yellow-500 px-4 py-2 font-semibold text-black hover:bg-yellow-400 transition-colors" : "rounded-full bg-yellow-500 px-4 py-2 font-semibold text-black hover:bg-yellow-400 transition-colors"}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </nav>

      {/* STYLING YOU CAN CHANGE - Hero section */}
      <section className={`flex flex-col items-center justify-center px-6 py-20 text-center ${sectionBgClass}`}>
        <h2 className={darkMode ? "mb-4 text-5xl font-bold text-yellow-400" : "mb-4 text-5xl font-bold text-yellow-500"}>
          Discover Your Signature Scent
        </h2>
        <p className={darkMode ? "mb-8 max-w-2xl text-gray-300 text-lg" : "mb-8 max-w-2xl text-gray-700 text-lg"}>
          Explore luxury perfumes crafted to match your style and personality.
        </p>
        <button className="rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black hover:bg-yellow-400 transition-colors shadow-lg">
          Shop Now
        </button>
      </section>

      {/* STYLING YOU CAN CHANGE - Products section */}
      <section className="px-6 py-16">
        <h3 className={darkMode ? "mb-8 text-3xl font-semibold text-center text-white" : "mb-8 text-3xl font-semibold text-center text-black"}>Featured Perfumes</h3>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {perfumes.map((perfume) => (
            <div key={perfume.id} className={cardBaseClass}>
              {/* REPLACE IMAGES HERE - Image loading with placeholder */}
              <div className={darkMode ? "flex items-center justify-center mb-4 bg-black p-4 rounded-xl" : "flex items-center justify-center mb-4 bg-white p-4 rounded-xl"}>
                <img
                  src={perfume.image}
                  alt={perfume.name}
                  className="w-full h-64 object-contain"
                  onError={(e) => {
                    e.currentTarget.src = PLACEHOLDER_IMAGE;
                  }}
                />
              </div>
              <h4 className={darkMode ? "text-xl font-semibold mb-2 text-white" : "text-xl font-semibold mb-2 text-black"}>{perfume.name}</h4>
              <p className={cardTextClass + " text-lg mb-4"}>{perfume.price}</p>

              <button
                onClick={() => addToCart(perfume)}
                className="w-full rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-400 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* STYLING YOU CAN CHANGE - Cart section */}
      <section className={cartSectionClass}>
        <h3 className={darkMode ? "mb-8 text-3xl font-semibold text-center text-white" : "mb-8 text-3xl font-semibold text-center text-black"}>Your Cart</h3>

        {cart.length === 0 ? (
          <p className="text-gray-400 text-center text-lg">Your cart is empty.</p>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 mb-8">
              {cart.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex items-center justify-between rounded-2xl bg-gray-800 p-6 shadow-lg"
                >
                  <div className="flex items-center gap-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-24 w-24 rounded-lg object-contain bg-black p-1"
                      onError={(e) => {
                        e.currentTarget.src = PLACEHOLDER_IMAGE;
                      }}
                    />
                    <div>
                      <h4 className="text-xl font-semibold">{item.name}</h4>
                      <p className="text-gray-300">{item.price}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(index)}
                    className="rounded-full border border-red-500 px-6 py-2 text-red-400 hover:bg-red-500 hover:text-white transition-colors"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* STYLING YOU CAN CHANGE - Total and checkout */}
            <div className="rounded-2xl bg-gray-800 p-6 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-2xl font-semibold">Total</h4>
                <p className="text-2xl font-bold text-yellow-400">${totalPrice}</p>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black hover:bg-yellow-400 transition-colors shadow-lg"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Footer with social icons */}
      <footer className={darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-700"}>
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h4 className={darkMode ? "text-xl font-bold text-white" : "text-xl font-bold text-black"}>Dubai to Durban</h4>
              <p className="text-sm text-gray-400">Premium perfumes and scented experiences.</p>
            </div>

            <div className="flex items-center gap-6">
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="uppercase tracking-widest text-sm text-gray-300 transition-colors hover:text-yellow-400">
                instagram
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="uppercase tracking-widest text-sm text-gray-300 transition-colors hover:text-yellow-400">
                facebook
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="uppercase tracking-widest text-sm text-gray-300 transition-colors hover:text-yellow-400">
                twitter
              </a>
              <a href="https://wa.me/27XXXXXXXXX" className="uppercase tracking-widest text-sm text-gray-300 transition-colors hover:text-yellow-400">
                WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Dubai to Durban. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}