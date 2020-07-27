const axios = require('axios');

axios.get('https://lidemy-book-store.herokuapp.com/books', {
  params: {
    _limit: 10,
  },
}).then((response) => {
  const getData = response.data;
  for (let i = 0; i < getData.length; i++) {
    console.log(`${getData[i].id} ${getData[i].name}`);
  }
});
