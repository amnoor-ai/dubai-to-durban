import { memo } from "react";
import { PLACEHOLDER_IMAGE } from "@/shared/types/perfume";
import type { CartItem } from "@/shared/types/perfume";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  totalItems: number;
  totalPrice: number;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
  onCheckout: () => void;
  darkMode: boolean;
};

const CartDrawerItem = memo(function CartDrawerItem({
  item,
  darkMode,
  onIncrease,
  onDecrease,
  onRemove,
}: {
  item: CartItem;
  darkMode: boolean;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
}) {
  const itemClass = darkMode
    ? "rounded-xl bg-gray-800 p-4"
    : "rounded-xl bg-gray-100 p-4";

  return (
    <div className={itemClass}>
      <div className="flex items-start gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="h-16 w-16 rounded-lg bg-black p-1 object-contain"
          onError={(e) => {
            e.currentTarget.src = PLACEHOLDER_IMAGE;
          }}
        />

        <div className="flex-1">
          <div className="flex items-start justify-between gap-3">
            <h4 className="font-semibold">{item.name}</h4>
            <button
              onClick={() => onRemove(item.id)}
              className="rounded-full border border-gray-500 px-3 py-1 text-xs text-gray-300 transition-colors hover:bg-gray-700"
              aria-label={`Remove ${item.name}`}
              title="Remove item"
            >
              Remove
            </button>
          </div>

          <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
            ${item.price} each
          </p>
          <p className="text-sm text-yellow-400">
            Subtotal: ${item.price * item.quantity}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onDecrease(item.id)}
            className="rounded-full border border-red-500 px-3 py-1 text-sm text-red-400 transition-colors hover:bg-red-500 hover:text-white"
          >
            -
          </button>

          <span className="min-w-[24px] text-center font-semibold">
            {item.quantity}
          </span>

          <button
            onClick={() => onIncrease(item.id)}
            className="rounded-full border border-yellow-500 px-3 py-1 text-sm text-yellow-400 transition-colors hover:bg-yellow-500 hover:text-black"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
});

function CartDrawerHeader({
  darkMode,
  totalItems,
  onClose,
}: {
  darkMode: boolean;
  totalItems: number;
  onClose: () => void;
}) {
  return (
    <div
      className={`flex items-center justify-between border-b p-6 ${
        darkMode ? "border-gray-800" : "border-gray-300"
      }`}
    >
      <div>
        <h3 className="text-2xl font-semibold">Your Cart</h3>
        <p className={darkMode ? "text-sm text-gray-400" : "text-sm text-gray-600"}>
          {totalItems} item{totalItems === 1 ? "" : "s"}
        </p>
      </div>

      <button
        onClick={onClose}
        className="rounded-full border border-gray-500 px-3 py-1 text-sm"
      >
        Close
      </button>
    </div>
  );
}

function EmptyCartState({ onClose, darkMode }: { onClose: () => void; darkMode: boolean }) {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <p className={darkMode ? "text-gray-400" : "text-gray-600"}>Your cart is empty.</p>
      <button
        onClick={onClose}
        className="mt-4 rounded-full bg-yellow-500 px-5 py-2 font-semibold text-black transition-colors hover:bg-yellow-400"
      >
        Continue Shopping
      </button>
    </div>
  );
}

function CartDrawerFooter({
  darkMode,
  totalPrice,
  disabled,
  onCheckout,
}: {
  darkMode: boolean;
  totalPrice: number;
  disabled: boolean;
  onCheckout: () => void;
}) {
  return (
    <div className={`border-t p-6 ${darkMode ? "border-gray-800" : "border-gray-300"}`}>
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-lg font-semibold">Total</h4>
        <p className="text-lg font-bold text-yellow-400">${totalPrice}</p>
      </div>
      <button
        onClick={onCheckout}
        className="w-full rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition-colors hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={disabled}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export function CartDrawer({
  isOpen,
  onClose,
  cart,
  totalItems,
  totalPrice,
  onIncrease,
  onDecrease,
  onRemove,
  onCheckout,
  darkMode,
}: Props) {
  const drawerClass = darkMode ? "bg-gray-950 text-white" : "bg-white text-black";

  return (
    <div className={`fixed inset-0 z-50 transition ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
      />

      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ${drawerClass}`}
      >
        <CartDrawerHeader darkMode={darkMode} totalItems={totalItems} onClose={onClose} />

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <EmptyCartState onClose={onClose} darkMode={darkMode} />
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <CartDrawerItem
                  key={item.id}
                  item={item}
                  darkMode={darkMode}
                  onIncrease={onIncrease}
                  onDecrease={onDecrease}
                  onRemove={onRemove}
                />
              ))}
            </div>
          )}
        </div>

        <CartDrawerFooter
          darkMode={darkMode}
          totalPrice={totalPrice}
          disabled={cart.length === 0}
          onCheckout={onCheckout}
        />
      </aside>
    </div>
  );
}

