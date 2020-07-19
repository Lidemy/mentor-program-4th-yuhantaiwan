const axios = require('axios');

const method = process.argv[2];
const url = 'https://lidemy-book-store.herokuapp.com';

function listBooks() {
  axios.get(`${url}/books`, {
    params: {
      _limit: 20,
    },
  }).then((response) => {
    const getData = response.data;
    for (let i = 0; i < getData.length; i++) {
      console.log(`${getData[i].id} ${getData[i].name}`);
    }
  });
}

function getBook(id) {
  axios.get(`${url}/books/${id}`).then((response) => {
    const getData = response.data;
    console.log(`${getData.id} ${getData.name}`);
  }).catch((error) => {
    console.log(error);
  });
}

function deleteBook(id) {
  axios.delete(`${url}/books/${id}`).then(() => {
    console.log(`id 為 ${id} 的書籍刪除成功！`);
  }).catch((error) => {
    console.log(`刪除失敗！${error}`);
  });
}

switch (method) {
  case 'list':
    listBooks();
    break;
  case 'read':
    getBook(process.argv[3]);
    break;
  case 'delete':
    deleteBook(process.argv[3]);
    break;
  default:
    listBooks();
    break;
}
