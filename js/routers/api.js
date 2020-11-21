const API = 'https://jsonplaceholder.typicode.com/comments';

export async function getComments() {
  try {
    const res = await fetch(API);
    const data = res.json();

    return data;
  } catch (e) {
    console.error('UPPP!', e);
  }
}
