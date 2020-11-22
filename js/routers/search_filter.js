const d = document;

const searchSelectors = (selectorsList) => {
  const e = event;
  d.querySelectorAll(selectorsList).forEach((el) => {
    el.textContent.toLowerCase().includes(e.target.value)
      ? el.parentElement.classList.remove('filter')
      : el.parentElement.classList.add('filter');
  });
};

export function searchFilter(input, selectors) {
  d.addEventListener('keyup', (e) => {
    if (e.target.matches(input)) {
      // invoke function that search comments
      searchSelectors(selectors);
    }
  });
}
