export const listFormat = new Intl.ListFormat().format // FIXME Errror in Hero component
export const currencyFormat = new Intl.NumberFormat('en-US', {
  currency: 'USD',
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
  style: 'currency',
}).format
