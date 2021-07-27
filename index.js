const textEl = document.querySelector('#text');
const texts = JSON.parse(textEl.getAttribute('data-text'));

let index = 0;
let charIndex = 0;
let delta = 200;

let start = null;
let flag = false;

function type(time) {
    window.requestAnimationFrame(type);
    if (!start) {
        start = time;
    }
    let progress = time - start;

    if (progress > delta) {
        let text = texts[index];
        if (!flag) {
            textEl.innerHTML = text.slice(0, ++charIndex);
            // delta = 500 - Math.random() * 400;
            delta = 200;
        } else {
            textEl.innerHTML = text.slice(0, charIndex--);
        }

        start = time;

        if (charIndex === text.length) {
            flag = true;
            delta = 200;
            start = time + 1200;
        }
        if (charIndex < 0) {
            flag = false;
            start = time + 200;
            index = ++index % texts.length;
        }
    }
}
window.requestAnimationFrame(type);
