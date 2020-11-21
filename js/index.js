import { showComments } from './routers/app.js';
import { darkTheme } from './routers/dark_mode.js';

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
  showComments('comments');

  darkTheme('.dark-theme-btn', 'dark-mode', 'dark-mode-card');
});
