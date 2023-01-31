import ApiService from './apiService';

const apiservis = new ApiService();
export default async function getGenres() {
  try {console.log(456);
    await apiservis.fetchGenres();
  } catch (err) {
    console.log(err);
  }
}
getGenres();
