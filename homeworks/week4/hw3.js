const axios = require('axios');

searchCountry(process.argv[2]);

function searchCountry(country) {
  axios.get(`https://restcountries.eu/rest/v2/name/${country}`).then((response) => {
    const result = response.data;
    for (let i = 0; i < result.length; i++) {
      const { name, capital, callingCodes } = result[i];
      const currencies = result[i].currencies[0].code;
      const info = `==============\n國家：${name}\n首都：${capital}\n貨幣：${currencies}\n國碼：${callingCodes}`;
      console.log(info);
    }
  }).catch((error) => {
    console.log(`找不到國家資訊!${error}`);
  });
}
