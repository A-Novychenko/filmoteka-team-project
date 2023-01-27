import { changeThemeBtn } from './refs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// alert('Зміна теми');

const light = Theme.LIGHT;
const dark = Theme.DARK;

let currentTheme = localStorage.getItem('theme');
cacheChange();

changeThemeBtn.addEventListener('change', onChangeTheme);

function onChangeTheme(event) {
  event.preventDefault();

  if (!event.target.checked) {
    toggleTheme(light, dark);
    localStorage.setItem('theme', light);
  }

  if (event.target.checked) {
    toggleTheme(dark, light);
    localStorage.setItem('theme', dark);
  }
}

function toggleTheme(currentTheme, nextTheme) {
  document.body.classList.remove(nextTheme);
  document.body.classList.add(currentTheme);
}

function cacheChange() {
  if (currentTheme === null) {
    return;
  }

  if (currentTheme === light) {
    document.body.classList.add(light);
    changeThemeBtn.checked = false;
  } else {
    document.body.classList.add(dark);
    changeThemeBtn.checked = true;
  }
}
