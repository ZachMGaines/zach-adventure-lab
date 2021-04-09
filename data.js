const nightCity = {
    id: 'nightcity',
    title: 'Night City',
    map: {
        top: '89%',
        left: '44%'
    },
    image: '../assets/night city.png',
    description: `You enter Night City.  A shady but powerful man in a suit offers you a large sum of money to hack a data mainframe and retrieve information.  What do you do?`,
    choices: [{
        id: 'agree',
        description: 'Agree to take the deal',
        result: `You agree and take the deal.  You are lead to a neurohack device and successfully breach the mainframe.  After a blurry night you wake up in a hotel room with the mans daughter. Your first thought is to pack up and vanish. -5 hp for hangover and 500 gold as payment.`,
        hp: -5,
        gold: 500
    }, {
        id: 'negotiate',
        description: 'Negotiate with him',
        result: `Knowing he has money, you ask for triple the amount offered.  He agrees and you successfully hack the mainframe.  He crosses you and you are left with a broken arm and no payment. -45 hp and -5 gold for medical bills.`,
        hp: -45,
        gold: -5
    }, {
        id: 'decline',
        description: 'Decline the offer',
        result: `You politely decline the mans offer.  He asks you, "Why?" You reply with "I've got bigger plans. +20 hp for sticking to your purpose."`,
        hp: 20,
        gold: 0
    }]
};

const spaceCity = {
    id: 'spacecity',
    title: 'Space City',
    map: {
        top: '17%',
        left: '37%'
    },
    image: '../assets/space city.jpeg',
    description: `You've come to Space City looking for a man named Venos. Apparently he carries a computer virus that can erase the internet.  An old ordinary-looking janitor walks up to you. It is Venos.  He tells you he has the computer virus! What do you do?`,
    choices: [{
        id: 'pay',
        description: 'Pay him large sum of money for the goods.',
        result: `You pay him a large sum of money for the virus.  He gives it to you and tells you to use it wisely and goodluck. +25hp for getting closer to your purpose.  -500 gold as payment`,
        hp: 25,
        gold: -500
    }, {
        id: 'trade',
        description: 'trade for the virus',
        result: `You trade him your most valuable possession.  An army of microscopic nanobots that you keep hidden inside your bloodstream.  You are no longer immune to Covid. -70hp for giving your best defense against the pandemic.`,
        hp: -70,
        gold: 0
    }, {
        id: 'steal',
        description: 'Steal the virus!',
        result: `You steal the virus from him. In order to get out of Space City you had to steal a flying vehicle.  The cops and the mafia are now after you! You took some damage trying to get away. -55hp.`,
        hp: -55,
        gold: 0
    }]
};

const riverCity = {
    id: 'rivercity',
    title: 'River City',
    map: {
        top: '31%',
        left: '5%',
    },
    prerequisites: ['dragon', 'monsters'],
    image: '../assets/river.jpg',
    description: `As you return home to your base in River City you are presented with the dilemma of using Venos's virus program.  You know it will completely change the world if you use it. In your mind you have three choices. What do you do?`,

    choices: [{
        id: 'use',
        description: 'Delete the internet!',
        result: `You've chosen to implant the virus into the internet and break everything we know. You are the man! +500 hp for fulfilling your purpose.`,
        hp: +500,
        gold: 0
    }, {
        id: 'sell',
        description: 'Sell the virus to the highest bidder!',
        result: `You got greedy and put the computer virus up on the blackmarket and sold it to the highest bidder. +1000 gold for selling the program.`,
        hp: 0,
        gold: 1000
    }, {
        id: 'destroy',
        description: 'Destroy the program so no one can use it!',
        result: `You destroyed the program and now know one has the power.You have fulfilled your purpose. You are the man! +500 hp for fulfilling your purpose!`,
        hp: 500,
        gold: 0
    }]
};

const quests = [
    nightCity,
    spaceCity,
    riverCity
];

export default quests;