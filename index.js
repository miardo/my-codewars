import { initialElements } from './initial-elements.js';
const elementTemplate = document.querySelector('.element_template').content;
const elements = document.querySelector('.elements');
const button = document.querySelector('.footer__show-more-button')

function getCard(data) {
    const templateBox = elementTemplate.cloneNode(true);
    const templateBoxDate = templateBox.querySelector('.elements__kata');
    const templateBoxTask = templateBox.querySelector('.elements__task');
    const templateBoxCode = templateBox.querySelector('.elements__code');

    templateBoxDate.innerText = data.kata + ' kyu';
    templateBoxTask.innerText = data.task;
    templateBoxCode.innerText = data.code;

    return templateBox;
}

function renderItem(item) {
    elements.prepend(getCard(item));
    document.querySelector('.header__kata-count').innerText = 'Total Completed Kata: ' + initialElements.length;
}

function render() {
    initialElements.forEach(renderItem);
    for (let i = 0; i < 5; i++) {
        document.querySelector('.elements_hidden').classList.remove('elements_hidden');
    }
}

render();

button.addEventListener('click', function () {
    const allElements = document.querySelectorAll('.elements_hidden')
    for (let i = 0; i < 5; i++) {
        if (i !== allElements.length) {
            allElements[i].classList.remove('elements_hidden');
        } else {
            button.classList.add('footer__show-more-button_hidden');
            break
        }
    }
});