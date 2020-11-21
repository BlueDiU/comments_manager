import { showComments } from './routers/app.js';

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
  console.log('Hola');
  showComments('comments');
});
