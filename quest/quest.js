import { findById } from '../utils.js';
import quests from '../data.js';
import { updateUserGivenChoice, getUser } from '../local-storage-utils.js';

const section = document.querySelector('section');
const params = new URLSearchParams(window.location.search);

const questId = params.get('id');
const quest = findById(quests, questId);

const image = document.createElement('img');
const h2 = document.createElement('h2');

const questDescription = document.createElement('div');
questDescription.textContent = quest.description;


image.src = `../assets/${quest.image}`;

h2.textContent = quest.title;

console.log(quest.choices);

const form = document.createElement('form');

for (let choice of quest.choices) {
    const label = document.createElement('label');
    const radio = document.createElement('input');

    radio.type = 'radio';
    radio.name = 'choice';
    console.log(choice.id);
    radio.value = choice.id;
    label.append(choice.description, radio);

    form.append(label);
}

const button = document.createElement('button');
button.textContent = 'Submit';


form.append(button);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const resultDiv = document.createElement('div');


    const formData = new FormData(form);
    const choiceId = formData.get('choice');

    const choice = findById(quest.choices, choiceId);

    resultDiv.textContent = choice.result;

    updateUserGivenChoice(quest.id, choice);
    section.append(resultDiv);
    //alert(JSON.stringify(getUser(), true, 2));
    setTimeout(() => {
        window.location = '../map';
    }, 5000);



});

section.append(h2, image, questDescription, form);


