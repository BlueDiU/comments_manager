const d = document,
  ls = localStorage;

export function darkTheme(btn, classDark) {
  const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll('[data-global]');

  let moon = '🌙',
    sun = '☀️';

  const ligthMode = () => {
    $selectors.forEach((selector) => selector.classList.remove(classDark));
    $themeBtn.textContent = moon;
    ls.setItem('theme', 'light');
  };

  const darkMode = () => {
    $selectors.forEach((selector) => selector.classList.add(classDark));
    $themeBtn.textContent = sun;
    ls.setItem('theme', 'dark');
  };

  d.addEventListener('click', (e) => {
    if (e.target === $themeBtn) {
      if ($themeBtn.textContent === moon) {
        darkMode();
      } else {
        ligthMode();
      }
    }
  });

  d.addEventListener('DOMContentLoaded', () => {
    if (ls.getItem('theme' === null)) ls.setItem('theme', 'light');

    if (ls.getItem('theme') === 'light') ligthMode();

    if (ls.getItem('theme') === 'dark') darkMode();
  });
}
