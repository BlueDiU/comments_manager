const API = 'https://jsonplaceholder.typicode.com/comments';

// Get specific number of comments y parameter (limit=x)
//https://jsonplaceholder.typicode.com/comments?_limit=100&_page=1

// -> Get all comments
//https://jsonplaceholder.typicode.com/comments

export async function getComments() {
  try {
    const res = await fetch(API);
    const data = await res.json();

    return data;
  } catch (e) {
    console.error('UPPP!', e);
  }
}
