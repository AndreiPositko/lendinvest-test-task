export const formatCurrencyToString = (value) => {
   return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatCurrencyToNumber = (value) => {
   return Number(value.replace(/,/g, ''));
};
