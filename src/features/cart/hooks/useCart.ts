import { useCallback, useEffect, useMemo, useState } from "react";
import type { CartItem, Perfume } from "@/shared/types/perfume";
import { formatCurrency } from "@/src/shared/utils/format";

const STORAGE_KEY = "cart";

export function useCart({
  isClient,
  whatsappNumber,
}: {
  isClient: boolean;
  whatsappNumber: string;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    if (!isClient) return;

    const savedCart = localStorage.getItem(STORAGE_KEY);
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart, isClient]);

  const addToCart = useCallback((perfume: Perfume) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === perfume.id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === perfume.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...perfume, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((idToRemove: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === idToRemove
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const increaseQuantity = useCallback((idToIncrease: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === idToIncrease
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }, []);

  const totalCartItems = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  const handleCheckout = useCallback(() => {
    if (!isClient) return;

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const orderItems = cart
      .map(
        (item, index) =>
          `${index + 1}. ${item.name} x${item.quantity} - ${formatCurrency(
            item.price * item.quantity
          )}`
      )
      .join("\n");

    const message = `Hello, I want to place an order:

${orderItems}

Total: ${formatCurrency(totalPrice)}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  }, [cart, isClient, totalPrice, whatsappNumber]);

  return {
    cart,
    setCart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    totalCartItems,
    totalPrice,
    handleCheckout,
  };
}

