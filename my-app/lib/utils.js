export const currencyFormatter = (amount) => {
  const formatter = Intl.NumberFormat("em-us", {
    currency: "CAD",
    style: "currency",
  });

  // double check NumberFormat in Javascript

  return formatter.format(amount);
};
