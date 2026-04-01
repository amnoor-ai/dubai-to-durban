type Props = {
  darkMode: boolean;
  whatsappNumber: string;
  facebookUrl: string;
  instagramUrl: string;
  emailAddress: string;
};

export function Footer({
  darkMode,
  whatsappNumber,
  facebookUrl,
  instagramUrl,
  emailAddress,
}: Props) {
  // Theme styles are scoped here so `page.tsx` stays composition-only.
  const footerClass = darkMode
    ? "border-t border-gray-800 bg-gray-900 text-gray-300"
    : "border-t border-gray-300 bg-gray-100 text-gray-700";

  const iconLinkClass = darkMode
    ? "flex items-center gap-2 text-sm uppercase tracking-widest text-gray-300 transition-colors hover:text-yellow-400"
    : "flex items-center gap-2 text-sm uppercase tracking-widest text-gray-700 transition-colors hover:text-yellow-500";

  return (
    <footer className={footerClass}>
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <h4 className={darkMode ? "text-xl font-bold text-white" : "text-xl font-bold text-black"}>
              Dubai to Durban
            </h4>
            <p className="mt-1 text-sm text-gray-400">
              Premium perfumes and scented experiences.
            </p>
            <p className="mt-3 text-sm text-gray-400">Durban, South Africa</p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a href={instagramUrl} target="_blank" rel="noreferrer" className={iconLinkClass}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.88 1.12a1.13 1.13 0 1 1 0 2.26 1.13 1.13 0 0 1 0-2.26zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5z" />
              </svg>
              Instagram
            </a>

            <a href={facebookUrl} target="_blank" rel="noreferrer" className={iconLinkClass}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M13.5 21v-7h2.35l.35-2.73H13.5V9.53c0-.79.22-1.33 1.36-1.33h1.45V5.76c-.25-.03-1.12-.1-2.12-.1-2.1 0-3.54 1.28-3.54 3.63v1.98H8.27V14h2.38v7h2.85z" />
              </svg>
              Facebook
            </a>

            <a href={`mailto:${emailAddress}`} className={iconLinkClass}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm0 2v.51l9 5.63 9-5.63V7H3zm18 2.86-8.47 5.29a1 1 0 0 1-1.06 0L3 9.86V17h18V9.86z" />
              </svg>
              Email
            </a>

            <a href={`https://wa.me/${whatsappNumber}`} className={iconLinkClass}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-5 w-5 fill-current">
                <path d="M19.11 17.21c-.27-.13-1.58-.78-1.82-.87-.24-.09-.42-.13-.6.13s-.69.87-.84 1.05c-.16.18-.31.2-.58.07-.27-.13-1.12-.41-2.14-1.3-.79-.7-1.33-1.56-1.49-1.82-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.6-1.45-.82-1.98-.22-.53-.44-.46-.6-.46h-.51c-.18 0-.47.07-.71.34s-.94.92-.94 2.24.96 2.6 1.09 2.78c.13.18 1.89 2.89 4.58 4.05.64.28 1.15.45 1.55.58.65.21 1.24.18 1.71.11.52-.08 1.58-.65 1.8-1.29.22-.64.22-1.18.16-1.29-.07-.11-.24-.18-.51-.31z" />
                <path d="M16 3C8.82 3 3 8.82 3 16c0 2.54.73 4.99 2.12 7.11L3.64 28.5l5.55-1.46A12.93 12.93 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.64c-2.15 0-4.25-.58-6.08-1.69l-.44-.26-3.29.86.88-3.21-.29-.47A10.57 10.57 0 0 1 5.36 16C5.36 10.14 10.14 5.36 16 5.36S26.64 10.14 26.64 16 21.86 26.64 16 26.64z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Dubai to Durban. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

