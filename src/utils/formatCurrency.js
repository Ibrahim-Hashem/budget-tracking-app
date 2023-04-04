export default function formatCurrency(value) {
  const formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP'
  });
  return formatter.format(value);
}
