const axios = require('axios');

function getTopGames() {
  axios.get('https://api.twitch.tv/kraken/games/top', {
    headers: {
      Accept: 'application/vnd.twitchtv.v5+json',
      'Client-ID': 'n5gu5njs9jy4znhnx54e2ejtqpzirf',
    },
  }).then((res) => {
    const result = JSON.parse(JSON.stringify(res.data.top));
    console.log('Rank Viewers   Name');
    for (let i = 0; i < result.length; i++) {
      const { viewers } = result[i];
      const { name } = result[i].game;
      const str = `${i + 1}.   ${viewers}    ${name}`;
      console.log(str);
    }
  });
}

getTopGames();
