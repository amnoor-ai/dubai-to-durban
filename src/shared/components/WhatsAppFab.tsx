type Props = {
  whatsappNumber: string;
};

export function WhatsAppFab({ whatsappNumber }: Props) {
  // Keep contact behavior local to the FAB.
  const openWhatsAppContact = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <button
      onClick={openWhatsAppContact}
      className="fixed bottom-6 right-6 z-40 rounded-full bg-green-500 p-4 text-white shadow-2xl transition-transform hover:scale-110 hover:bg-green-600"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-6 w-6 fill-current"
      >
        <path d="M19.11 17.21c-.27-.13-1.58-.78-1.82-.87-.24-.09-.42-.13-.6.13s-.69.87-.84 1.05c-.16.18-.31.2-.58.07-.27-.13-1.12-.41-2.14-1.3-.79-.7-1.33-1.56-1.49-1.82-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.6-1.45-.82-1.98-.22-.53-.44-.46-.6-.46h-.51c-.18 0-.47.07-.71.34s-.94.92-.94 2.24.96 2.6 1.09 2.78c.13.18 1.89 2.89 4.58 4.05.64.28 1.15.45 1.55.58.65.21 1.24.18 1.71.11.52-.08 1.58-.65 1.8-1.29.22-.64.22-1.18.16-1.29-.07-.11-.24-.18-.51-.31z" />
        <path d="M16 3C8.82 3 3 8.82 3 16c0 2.54.73 4.99 2.12 7.11L3.64 28.5l5.55-1.46A12.93 12.93 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.64c-2.15 0-4.25-.58-6.08-1.69l-.44-.26-3.29.86.88-3.21-.29-.47A10.57 10.57 0 0 1 5.36 16C5.36 10.14 10.14 5.36 16 5.36S26.64 10.14 26.64 16 21.86 26.64 16 26.64z" />
      </svg>
    </button>
  );
}

