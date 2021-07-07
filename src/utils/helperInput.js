const addCommas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const removeNonNumeric = (num) => num.toString().replace(/[^0-9]/g, '');

export const formatNumberWithCommas = (value) => {
  return addCommas(value);
};

export const preventEnterNonNumber = (e) => {
  return ['e', 'E', '+', '-', '.'].includes(e.key) && e.preventDefault();
  // const regex = /[^0-9]/g;
  // return regex.test(e.key) && e.preventDefault();
};
