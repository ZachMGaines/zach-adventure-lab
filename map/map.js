import quests from '../data.js';
import { getUser } from '../local-storage-utils.js';
//import { getUser, areAllQuestsCompleted } from '../local-storage-utils';
//import { renderHeader } from '../render-utils.js';

//renderHeader();
const hp = document.getElementById('hp');
const gold = document.getElementById('gold');
const user = getUser();
hp.textContent = user.hp;
gold.textContent = user.gold;
// const user = getUser();
// const userIsDead = user.hp <= 0;

// if (userIsDead || areAllQuestsCompleted()) {
//     window.location = '../results';
// }

function questCompleter(quests) {
    const span = document.createElement('span');
    span.classList.add('quest');
    span.classList.add('completed');
    span.style.top = quests.map.top;
    span.style.left = quests.map.left;
    span.textContent = quests.title;
    return span;
}

function linkMaker(quest) {
    const link = document.createElement('a');
    link.classList.add('quest');
    link.href = `../quest/?id=${quest.id}`;
    link.style.top = quest.map.top;
    link.style.left = quest.map.left;
    link.textContent = quest.title;
    return link;
}

const section = document.querySelector('section');
const nav = document.getElementById('completerquests');

for (let quest of quests) {
    let questDisplay = null;
    const finished = user.completed[quest.id];
    if (finished) {
        questDisplay = questCompleter(quest);
    }
    else {
        questDisplay = linkMaker(quest);
    }

    // const anchorTag = document.createElement('a');
    // anchorTag.textContent = quest.title;
    //anchorTag.href = `../quest/?id=${quest.id}`;
    //} else 
    //section.append(anchorTag);
    nav.appendChild(questDisplay);
}

