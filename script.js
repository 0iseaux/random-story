'use strict';

const FLICKR_API_KEY = '17e98942500864136e138674ba25f8b0';

const COLOURS = [
    'aqua',
    'beige',
    'red',
    'blueviolet',
    'crimson',
    'green',
    'turquoise',
    'cyan',
    'darkcyan',
    'blue',
    'lilac',
    'khaki',
    'darkgreen',
    'purple',
    'pink',
    'greenyellow',
    'gray',
    'gold',
    'yellow',
    'brown',
    'black',
    'white',
    'skyblue',
    'silver',
];

const CREATURES = [
    'wombat',
    'platypus',
    'cabybara',
    'axolotl',
    'quokka',
    'octopus',
    'starfish',
    'seahorse',
    'moose',
    'deer',
    'sparrow',
    'eagle',
    'lizard',
    'humming bird',
    'antelope',
    'unicorn',
    'lion',
    'tiger',
    'python',
    'leopard',
    'whale',
    'dolphin',
    'goose',
    'duck',
    'rooster',
    'swan',
    'hedgehog',
    'boar',
    'dinosaur',
];

const VERBS_AUX_W_ING = [
    'loves',
    'likes',
    'dislikes',
    'hates',
    'enjoys',
    'feels like',
    'does not feel like',
    'dreams of',
];

const VERBS_AUX_W_INF = [
    'loves to',
    'likes to',
    'does not like to',
    'hates to',
    'wants to',
    'does not want to',
    'wishes to',
    'does not wish to',
    'hopes to',
    'plans to',
    'would like to',
    'would love to',
    'will',
    'would',
    'will not',
    'would not',
    'should',
    'dares not',
    'learns to',
    'can',
    'cannot',
    'may',
    'may not',
    'tries to',
    'tries not to',
];

const VERBS_INTR_INF = [
    'run',
    'escape',
    'wander',
    'think',
    'lie',
    'walk',
    'play',
    'code',
    'imagine',
    'argue',
    'fly',
    'travel',
    'laugh',
    'cry',
    'crawl',
    'cook',
];

const VERBS_TR_INF = [
    'eat',
    'drink',
    'have',
    'buy',
    'sell',
    'play with',
    'use',
    'waste',
    'destroy',
    'improve',
    'make',
    'impress',
    'touch',
    'cheat',
    'distort',
    'create',
    'get',
    'give',
    'send',
    'show',
    'borrow',
    'grow',
    'receive',
    'ask for',
    'fetch',
    'conquer',
    'cook',
    'turn around',
    'dance',
];

const VERBS_INTR_ING = [
    'playing',
    'running',
    'escaping',
    'wandering',
    'thinking',
    'lying',
    'walking',
    'storlling',
    'singing',
    'writing',
    'drawing',
    'coding',
    'imagining',
    'arguing',
    'flying to',
    'travelling to',
    'laughing',
    'crying',
    'crawling',
    'turning around',
    'dancing',
    'cooking',
];
const VERBS_TR_ING = [
    'eating',
    'drinking',
    'buying',
    'selling',
    'playing with',
    'flying',
    'travelling with',
    'using',
    'wasting',
    'destroying',
    'improving',
    'making',
    'impressing',
    'touching',
    'cheating',
    'distorting',
    'creating',
    'getting',
    'giving',
    'sending',
    'showing',
    'borrowing',
    'growing',
    'receiving',
    'asking for',
    'fetching',
    'conquering',
    'cooking',
];

const VERBS_INTR = [
    'runs',
    'escapes',
    'wanders',
    'thinks',
    'lies',
    'walks',
    'plays',
    'sings',
    'writes',
    'draws',
    'codes',
    'imagines',
    'argues',
    'flies',
    'travels',
    'laughs',
    'cries',
    'crawls',
    'turns around',
    'dances',
    'cooks',
];
const VERBS_TR = [
    'eats',
    'drinks',
    'buys',
    'sells',
    'plays with',
    'flies to',
    'travels with',
    'uses',
    'wastes',
    'destroys',
    'improves',
    'makes',
    'impresses',
    'touches',
    'cheats',
    'distorts',
    'creates',
    'gets',
    'gives',
    'sends',
    'shows',
    'borrows',
    'grows',
    'asks for',
    'fetches',
    'conquers',
    'cooks',
];

const FOOD_DRINKS = [
    'spinach',
    'fried eggs',
    'sausages',
    'chorizos',
    'broccolis',
    'aubergines',
    'lasagnes',
    'pizzas',
    'fried noodles',
    'apple pies',
    'sponge cakes',
    'cookies',
    'icecream',
    'fruits',
    'apples',
    'oranges',
    'pears',
    'grapes',
    'grapefruits',
    'vodka',
    'iced tea',
    'honey',
    'earl grey',
    'tonic water',
    'sparkling water',
    'tequila',
    'ramune',
    'coffee',
    'milk',
    'onions',
    'garlic',
    'curries',
    'plum tarts',
];

const OBJS = [
    'chairs',
    'desks',
    'phones',
    'bean bags',
    'cups',
    'glasses',
    'boxes',
    'bottles',
    'tables',
    'hands',
    'feet',
    'problems',
    'computers',
    'flowers',
    'the truth',
    'realities',
    'the reality',
    'happiness',
    'luck',
    'melancholy',
    'tote bags',
    'carpets',
    'sofas',
    'scarves',
    'challenges',
    'troubles',
    'fortune',
    'toys',
    'the world',
    'life',
];

const PLACES = [
    'in the sky',
    'on a bench',
    'on the moon',
    'in the sun',
    'on earth',
    'on mars',
    'on pluto',
    'under a tree',
    'in the water',
    'above a fire',
    'between the eyes',
    'in the house',
    'in the air',
    'in a forest',
    'in the sauna',
    'in another world',
];

const ADJS = [
    'happy',
    'sad',
    'clever',
    'naive',
    'smart',
    'cheerful',
    'hungry',
    'drunk',
    'optimistic',
    'pessimistic',
    'imaginative',
    'stubborn',
    'stupid',
    'thoughtful',
    'inconsiderate',
    'honest',
    'dishonest',
    'ambitious',
    'kind',
    'carefree',
    'evil',
    'creative',
    'boring',
    'brave',
    'annoying',
    'crazy',
    'mad',
    'cynical',
    'skeptical',
    'genuine',
    'cunning',
    'destructive',
    'gullible',
    'unreliable',
    'reliable',
    'confident',
    'lucky',
    'unlucky',
];

const ADVS = ['well', 'better', 'soon', 'often', 'less often', 'fast', 'faster', 'happily'];

const GENDER_PRONOUNS = [
    ['He', 'he', 'His', 'his'],
    ['She', 'she', 'Her', 'her'],
];

function generateNamePart() {
    let namePartLength = Math.floor(Math.random() * (4 - 2) + 2);
    let namePart = '-'.repeat(namePartLength);
    namePart = namePart.split('');
    for (let i = 0; i < namePartLength; i++) {
        namePart[i] = String.fromCharCode(Math.floor(Math.random() * (123 - 97)) + 97);
    }
    while (
        !namePart.includes('a') &&
        !namePart.includes('e') &&
        !namePart.includes('i') &&
        !namePart.includes('o') &&
        !namePart.includes('u')
    ) {
        namePart[Math.floor(Math.random() * namePart.length - 1)] = String.fromCharCode(
            Math.floor(Math.random() * (123 - 97)) + 97,
        );
    }
    namePart = namePart.join('');
    return namePart;
}

function compileName() {
    let nameParts = [];
    for (let i = 0; i < Math.floor(Math.random() * (4 - 2) + 2); i++) {
        nameParts.push(generateNamePart());
    }
    let name = nameParts.join('');
    name = name.split('');
    name[0] = name[0].toUpperCase();
    name = name.join('');
    return name;
}

function gen_gender() {
    let randomNum = Math.floor(Math.random() * 2);
    return GENDER_PRONOUNS[randomNum];
}

function gen_general(wordList) {
    return wordList[Math.floor(Math.random() * wordList.length)];
}

function gen_story() {
    let name = compileName();
    let pronouns = gen_gender();
    let colour = gen_general(COLOURS);
    let creature = gen_general(CREATURES);
    let line1 = `Far, far away lives a ${colour} ${creature}. ${pronouns[2]} name is ${name}.`;

    let verb = gen_general(VERBS_TR);
    let obj = gen_general(OBJS);
    let line2 = `Every day ${pronouns[1]} ${verb} ${obj}.`;

    let adj1 = gen_general(ADJS);
    let adj2 = gen_general(ADJS);
    while (adj1 === adj2) {
        adj2 = gen_general(ADJS);
    }
    let line3 = `${pronouns[2]} friends are neither ${adj1} nor ${adj2}.`;

    let verb1 = gen_general(VERBS_AUX_W_ING);
    let verb2 = gen_general(VERBS_TR_ING);
    obj = gen_general(FOOD_DRINKS);
    let verb3 = gen_general(VERBS_AUX_W_INF);
    let verb4 = gen_general(VERBS_INTR_INF);
    let adv = gen_general(ADVS);
    let line4 = `${pronouns[0]} ${verb1} ${verb2} ${obj} very much and ${verb3} ${verb4} ${adv}.`;

    verb1 = gen_general(VERBS_AUX_W_INF);
    verb2 = gen_general(VERBS_TR_INF);
    obj = gen_general(OBJS);
    let place = gen_general(PLACES);
    let line5 = `${pronouns[0]} ${verb1} always ${verb2} ${obj} ${place}.`;

    let obj1 = gen_general(OBJS);
    obj1 = obj1.split('');
    obj1[0] = obj1[0].toUpperCase();
    obj1 = obj1.join('');
    let be = 'are';
    if (obj1[obj1.length - 1] !== 's') {
        be = 'is';
    }
    let obj2 = gen_general(FOOD_DRINKS);
    let pron = 'them';
    if (obj2[obj2.length - 1] !== 's') {
        pron = 'it';
    }
    verb = gen_general(VERBS_TR_INF);
    let line6 = `${pronouns[2]} motto is\: \'${obj1} ${be} just like ${obj2}. Just ${verb} ${pron}.\'`;

    adj1 = gen_general(ADJS);
    adj2 = gen_general(ADJS);
    while (adj1 === adj2) {
        adj2 = gen_general(ADJS);
    }
    let line7 = `${name} is ${adj1} and ${adj2}.`;
    let line8 = `Be like ${name}.`;

    let allLines =
        line1 +
        '\n' +
        line2 +
        '\n' +
        line3 +
        '\n' +
        line4 +
        '\n' +
        line5 +
        '\n' +
        line6 +
        '\n' +
        line7 +
        '\n' +
        line8;
    let output = {
        name: name,
        creature: creature,
        colour: colour,
        lines: allLines,
    };
    return output;
}

async function fetchImagesData(keyword) {
    let image = await fetch(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FLICKR_API_KEY}&text=${keyword}&privacy_filter=1&sort=relevance&content-type=1&format=json&nojsoncallback=1`,
    );
    let response = image.json();
    return response;
}

const btnDiv = document.getElementById('btnDiv');
btnDiv.addEventListener('click', async () => {
    let story = gen_story();
    let imgDiv = document.getElementById('imgDiv');
    let storyDiv = document.getElementById('storyDiv');
    document.body.style.backgroundColor = story.colour;

    let imgsData = await fetchImagesData(story.creature);

    let num = Math.floor(Math.random() * 2);
    let oneImgData = imgsData.photos.photo[num];

    let imgUrl = `https://farm${oneImgData['farm']}.staticflickr.com/${oneImgData['server']}/${oneImgData['id']}_${oneImgData['secret']}.jpg`;
    imgDiv.style.backgroundImage = `url(${imgUrl})`;

    storyDiv.innerHTML = story.lines;
});
