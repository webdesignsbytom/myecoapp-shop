import client from './client';

export async function getUserDesignsFromDB() {
  client
    .get(`/`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) =>
      console.error('', err)
    );
}

