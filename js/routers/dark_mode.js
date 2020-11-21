const d = document;

export function darkTheme(btn, classDark) {
  const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll('[data-global]');

  let moon = '🌙',
    sun = '☀️';

  const ligthMode = () => {
    $selectors.forEach((selector) => selector.classList.remove(classDark));
    $themeBtn.textContent = moon;
  };

  const darkMode = () => {
    $selectors.forEach((selector) => selector.classList.add(classDark));
    $themeBtn.textContent = sun;
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
}
