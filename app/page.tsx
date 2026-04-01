"use client";

import { useCallback, useState } from "react";
import { useTheme } from "@/src/hooks/useTheme";
import { useBodyScrollLock } from "@/src/hooks/useBodyScrollLock";
import { useKeydown } from "@/src/hooks/useKeydown";
import { useCart } from "@/src/features/cart/hooks/useCart";
import { useProducts } from "@/src/features/products/hooks/useProducts";
import type { Perfume } from "@/shared/types/perfume";
import { ProductCard } from "@/src/features/products/components/ProductCard";
import { Navbar } from "@/src/shared/components/Navbar";
import { CartDrawer } from "@/src/features/cart/components/CartDrawer";
import { Hero } from "@/src/features/products/components/Hero";
import { Footer } from "@/src/shared/components/Footer";
import { WhatsAppFab } from "@/src/shared/components/WhatsAppFab";
import { Toast } from "@/src/shared/components/Toast";

export default function Home() {
  const { darkMode, toggleTheme, isClient } = useTheme();
  // `trigger` lets the same toast message show repeatedly (e.g. add same item twice).
  const [toastMessage, setToastMessage] = useState("");
  const [toastTrigger, setToastTrigger] = useState(0);

  // =========================
  // CART
  // Uses quantity instead of duplicates
  // =========================
  const whatsappNumber = "27789033610";
  const {
    cart,
    setCart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    totalCartItems,
    totalPrice,
    handleCheckout,
  } = useCart({ isClient, whatsappNumber });

  const { perfumes, loading, error } = useProducts();

  const [cartOpen, setCartOpen] = useState(false);

  // =========================
  // CHANGE THESE LATER
  // =========================
  const instagramUrl = "https://www.instagram.com";
  const facebookUrl = "https://www.facebook.com";
  const emailAddress = "dubaitodurbanscents@gmail.com";

  // Keep page-level side effects declarative and reusable.
  useBodyScrollLock(cartOpen, isClient);
  const closeCart = useCallback(() => setCartOpen(false), []);
  useKeydown("Escape", closeCart, isClient);

  const handleAddToCart = (perfume: Perfume) => {
    addToCart(perfume);
    setCartOpen(true);
    // Toast state is centralized here; visual/timer logic lives in `Toast`.
    setToastMessage(`${perfume.name} added to cart`);
    setToastTrigger((prev) => prev + 1);
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // =========================
  // THEME CLASSES
  // =========================
  const mainClass = darkMode
    ? "min-h-screen bg-black text-white"
    : "min-h-screen bg-white text-black";

  if (!isClient) {
    return null;
  }

  return (
    <main className={mainClass}>
      <Navbar
        totalCartItems={totalCartItems}
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        onOpenCart={() => setCartOpen(true)}
      />

      <Hero darkMode={darkMode} />

      {/* =========================
          PRODUCTS SECTION
          Shop button scrolls here
          ========================= */}
      <section id="shop" className="px-6 py-16">
        <h3
          className={
            darkMode
              ? "mb-8 text-center text-3xl font-semibold text-white"
              : "mb-8 text-center text-3xl font-semibold text-black"
          }
        >
          Featured Perfumes
        </h3>

        {error ? (
          <div className="mx-auto max-w-2xl rounded-2xl border border-red-500/40 bg-red-500/10 p-6 text-center text-sm text-red-200">
            {error}
          </div>
        ) : loading ? (
          <div className="mx-auto max-w-2xl rounded-2xl border border-gray-800 bg-gray-900 p-6 text-center text-sm text-gray-300">
            Loading products…
          </div>
        ) : (
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            {perfumes.map((perfume) => (
              <ProductCard
                key={perfume.id}
                product={perfume}
                onAdd={handleAddToCart}
                darkMode={darkMode}
              />
            ))}
          </div>
        )}
      </section>

      {/* =========================
          CART DRAWER
          Best fit for this site
          ========================= */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={closeCart}
        cart={cart}
        totalItems={totalCartItems}
        totalPrice={totalPrice}
        onIncrease={increaseQuantity}
        onDecrease={removeFromCart}
        onRemove={removeItem}
        onCheckout={handleCheckout}
        darkMode={darkMode}
      />
      <Toast
        message={toastMessage}
        darkMode={darkMode}
        trigger={toastTrigger}
        onDone={() => setToastMessage("")}
      />
      <WhatsAppFab whatsappNumber={whatsappNumber} />
      <Footer
        darkMode={darkMode}
        whatsappNumber={whatsappNumber}
        facebookUrl={facebookUrl}
        instagramUrl={instagramUrl}
        emailAddress={emailAddress}
      />
    </main>
  );
}