import { buttonTop } from './refs';

const options = {
    root: null,
    rootMargin: '400px',
    threshold: 1.0
}

export const observer = new IntersectionObserver(onScrollBtn, options);

function onScrollBtn(entries, observer) {
    // console.log(entries);
    entries.forEach((entry) => {
        if (entry.isIntersecting === false) {
            buttonTop.style.display = 'block';
        } else {
             buttonTop.style.display = 'none';
        }
    })
}

buttonTop.addEventListener('click', onBtnTop);
function onBtnTop() {
    buttonTop.style.display = 'none';
}