type Props = {
  darkMode: boolean;
};

const WHATSAPP_NUMBER = "27789033610";

export function Hero({ darkMode }: Props) {
  const sectionBgClass = darkMode ? "bg-black" : "bg-white";

  return (
    <section
      className={`flex flex-col items-center justify-center px-6 py-20 text-center ${sectionBgClass}`}
    >
      <h2
        className={
          darkMode
            ? "mb-4 text-5xl font-bold text-yellow-400"
            : "mb-4 text-5xl font-bold text-yellow-500"
        }
      >
        Signature Scents
      </h2>

      <p
        className={
          darkMode
            ? "mb-8 max-w-2xl text-lg text-gray-300"
            : "mb-8 max-w-2xl text-lg text-gray-700"
        }
      >
        Explore luxury perfumes crafted to match your style and personality.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="#shop"
          className="rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black shadow-lg transition-colors hover:bg-yellow-400"
        >
          Shop Now
        </a>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noreferrer"
          className={
            darkMode
              ? "rounded-full border border-yellow-500 px-8 py-4 font-semibold text-yellow-300 transition-colors hover:bg-yellow-500 hover:text-black"
              : "rounded-full border border-yellow-500 px-8 py-4 font-semibold text-yellow-700 transition-colors hover:bg-yellow-500 hover:text-black"
          }
        >
          Contact on WhatsApp
        </a>
      </div>
    </section>
  );
}

