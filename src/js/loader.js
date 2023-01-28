export const showLoader = () => {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.remove('hidden');
  }
};

export const hideLoader = () => {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.add('hidden');
  }
};
