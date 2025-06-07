// Check if a currency is supported

const supportedCurrencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD'];
const userCurrency = 'GBP';

if (supportedCurrencies.indexOf(userCurrency) !== -1) {
  console.log(userCurrency + ' is supported.');
} else {
  console.log(userCurrency + ' is not supported.');
}
