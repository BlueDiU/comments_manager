const d = document,
  w = window;

export function scrollTopBtn(btn) {
  const $scrollBtn = d.querySelector(btn);

  w.addEventListener('scroll', () => {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

    if (scrollTop > 700) $scrollBtn.classList.remove('hidden');
    else $scrollBtn.classList.add('hidden');
  });

  d.addEventListener('click', (e) => {
    if (e.target === $scrollBtn) {
      w.scrollTo({
        behavior: 'smooth',
        top: 0,
      });
    }
  });
}
