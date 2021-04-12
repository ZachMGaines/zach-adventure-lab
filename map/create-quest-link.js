// function createQuestLink(quest) {
//     const link = document.createElement('a');
//     link.classList.add('quest');


//     link.href = '../quest/?id=' + quest.id;

//     link.style.top = quest.map.top;
//     link.style.left = quest.map.left;
//     link.textContent = quest.title;

//     return link;
// }

// export default createQuestLink;

// import quests from '../data.js';

// const section = document.querySelector('section');

// for (let quest of quests) {
//     const anchorTag = document.createElement('a');
//     anchorTag.textContent = quest.title;
//     anchorTag.href = `../quest/?id=${quest.id}`;
//     section.append(anchorTag);
// }