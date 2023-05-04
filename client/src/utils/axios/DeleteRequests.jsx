import client from './client';

// ACCOUNT
// Delete user account
export function deleteAccount() {
    client
      .delete(`/`)
      .then((res) => {
        alert(`Deleted user`);
      })
      .catch((err) => {
        console.error('', err);
      });
  }
  