import client from './client';

// USERS
// Update user profile
export function putUpdateUser() {
  client
    .patch(`/users/`, false)
    .then((res) => {
      console.log('data update', res.data);
    })
    .catch((err) => {
      console.error('', err);
    });
}
