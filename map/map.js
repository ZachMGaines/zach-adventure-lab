import quests from '../data.js';
//import { getUser, areAllQuestsCompleted } from '../local-storage-utils';
//import { renderHeader } from '../render-utils.js';

//renderHeader();


// const user = getUser();
// const userIsDead = user.hp <= 0;

// if (userIsDead || areAllQuestsCompleted()) {
//     window.location = '../results';
// }

const section = document.querySelector('section');

for (let quest of quests) {
    const anchorTag = document.createElement('a');

    anchorTag.textContent = quest.title;

    anchorTag.href = `../quest/?id=${quest.id}`;

    section.append(anchorTag);
}
