import type { ReactNode } from "react";

type Props = {
  totalCartItems: number;
  darkMode: boolean;
  toggleTheme: () => void;
  onOpenCart: () => void;
};

function NavbarButton({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className: string;
  onClick?: () => void;
}) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export function Navbar({ totalCartItems, darkMode, toggleTheme, onOpenCart }: Props) {
  const shopClass = darkMode
    ? "text-yellow-300 transition-colors hover:text-yellow-400"
    : "text-yellow-600 transition-colors hover:text-yellow-500";

  const cartClass = darkMode
    ? "rounded-full border border-yellow-500 px-4 py-2 transition-colors hover:bg-yellow-500 hover:text-black"
    : "rounded-full border border-yellow-400 px-4 py-2 transition-colors hover:bg-yellow-300 hover:text-black";

  const themeClass = darkMode
    ? "rounded-full border border-yellow-500 px-3 py-2 text-yellow-300 transition-colors hover:bg-yellow-500 hover:text-black"
    : "rounded-full border border-yellow-400 px-3 py-2 text-yellow-600 transition-colors hover:bg-yellow-300 hover:text-black";

  return (
    <nav className={darkMode
      ? "sticky top-0 z-40 flex items-center justify-between border-b border-gray-800 bg-black/95 p-6 shadow-lg backdrop-blur"
      : "sticky top-0 z-40 flex items-center justify-between border-b border-gray-300 bg-white/95 p-6 shadow-lg backdrop-blur"}>
      <img src="/logo7.jpeg" alt="Dubai to Durban" className="h-12 rounded-md" />
      <div className="flex items-center gap-3 md:gap-4">
        <a href="#shop" className={shopClass}>
          Shop
        </a>
        <NavbarButton onClick={onOpenCart} className={cartClass}>
          Cart ({totalCartItems})
        </NavbarButton>
        <NavbarButton onClick={toggleTheme} className={themeClass}>
          {darkMode ? "Light" : "Dark"}
        </NavbarButton>
      </div>
    </nav>
  );
}

