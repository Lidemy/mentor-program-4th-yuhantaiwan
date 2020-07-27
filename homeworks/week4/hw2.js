const axios = require('axios');

const method = process.argv[2];
const url = 'https://lidemy-book-store.herokuapp.com';

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
  case 'create':
    createBook(process.argv[3]);
    break;
  case 'update':
    updateBook(process.argv[3], process.argv[4]);
    break;
  default:
    console.log('There is no function supporting the method. Please try "list", "read", "create", "delete" and "update".');
    break;
}

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
  }).catch((error) => {
    console.log(`抓取失敗！${error}`);
  });
}

function getBook(id) {
  axios.get(`${url}/books/${id}`).then((response) => {
    const getData = response.data;
    console.log(`${getData.id} ${getData.name}`);
  }).catch((error) => {
    console.log(`抓取失敗！${error}`);
  });
}

function deleteBook(id) {
  axios.delete(`${url}/books/${id}`).then(() => {
    console.log(`刪除 id 為 ${id} 的書籍成功！`);
  }).catch((error) => {
    console.log(`刪除失敗！${error}`);
  });
}

function createBook(newName) {
  axios.post(`${url}/books`, {
    name: newName,
  }).then(() => {
    console.log(`新增書籍 ${newName} 成功！`);
  }).catch((error) => {
    console.log(`新增書籍 ${newName} 失敗！${error}`);
  });
}

function updateBook(id, newName) {
  axios({
    method: 'PATCH',
    url: `${url}/books/${id}`,
    data: {
      name: newName,
    },
  }).then(() => {
    console.log(`更新 id 為 ${id} 的書名為 ${newName}`);
  }).catch((error) => {
    console.log(`更新失敗！${error}`);
  });
}
