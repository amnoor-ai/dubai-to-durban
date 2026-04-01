const zarCurrencyFormatter = new Intl.NumberFormat("en-ZA", {
  style: "currency",
  currency: "ZAR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatCurrency(value: number) {
  return zarCurrencyFormatter.format(value).replace(/\u00A0/g, " ");
}

