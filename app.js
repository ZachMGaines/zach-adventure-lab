import { setUser } from './local-storage-utils.js';
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);

    const name = data.get('name');
    const userClass = data.get('race');

    const user = {
        hp: 100,
        gold: 20,
        name: name,
        character: userClass,
        completed: {}
    };
    setUser(user);

    window.location = '../map/index.html';
});