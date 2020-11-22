import { showComments } from './routers/app.js';
import { darkTheme } from './routers/dark_mode.js';
import { scrollTopBtn } from './routers/scroll_btn.js';
import { searchFilter } from './routers/search_filter.js';

const d = document;

d.addEventListener('DOMContentLoaded', () => {
  showComments('comments');
  scrollTopBtn('.scroll-top-btn');
  searchFilter('.comment-filter', '.comment h3');
});

darkTheme('.dark-theme-btn', 'dark-mode');
