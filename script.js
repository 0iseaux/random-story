'use strict';

const FLICKR_API_KEY = '17e98942500864136e138674ba25f8b0';

const colours = [
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

const creatures = [
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

const verbs_aux_w_ing = [
    'loves',
    'likes',
    'dislikes',
    'hates',
    'enjoys',
    'feels like',
    'does not feel like',
    'dreams of',
];

const verbs_aux_w_inf = [
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

const verbs_intr_inf = [
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
];

const verbs_tr_inf = [
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
];

const verbs_intr_ing = [
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
];
const verbs_tr_ing = [
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

const verbs_intr = [
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
];
const verbs_tr = [
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

const food_drinks = [
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
];

const objs = [
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
    'truths',
    'realities',
    'tote bags',
    'carpets',
    'sofas',
    'scarves',
    'challenges',
    'troubles',
];

const places = [
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
];

const adjs = [
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
];

const advs = ['well', 'better', 'soon', 'often', 'less often', 'fast', 'faster', 'happily'];

const gender_pronouns = [
    ['He', 'he', 'His', 'his'],
    ['She', 'she', 'Her', 'her'],
];

function gen_name_part() {
    let name_part_length = Math.floor(Math.random() * (4 - 2) + 2);
    let name_part = '-'.repeat(name_part_length);
    name_part = name_part.split('');
    for (let i = 0; i < name_part_length; i++) {
        name_part[i] = String.fromCharCode(Math.floor(Math.random() * (123 - 97)) + 97);
    }
    while (
        !name_part.includes('a') &&
        !name_part.includes('e') &&
        !name_part.includes('i') &&
        !name_part.includes('o') &&
        !name_part.includes('u')
    ) {
        name_part[Math.floor(Math.random() * name_part.length - 1)] = String.fromCharCode(
            Math.floor(Math.random() * (123 - 97)) + 97,
        );
    }
    name_part = name_part.join('');
    return name_part;
}

function gen_name() {
    let name_parts = [];
    for (let i = 0; i < Math.floor(Math.random() * (4 - 2) + 2); i++) {
        name_parts.push(gen_name_part());
    }
    let name = name_parts.join('');
    name = name.split('');
    name[0] = name[0].toUpperCase();
    name = name.join('');
    return name;
}

function gen_gender() {
    let ran_num = Math.floor(Math.random() * 2);
    return gender_pronouns[ran_num];
}

function gen_general(word_list) {
    return word_list[Math.floor(Math.random() * word_list.length)];
}

function gen_story() {
    let name = gen_name();
    let pronouns = gen_gender();
    let colour = gen_general(colours);
    let creature = gen_general(creatures);
    let line1 = `Far, far away lives a ${colour} ${creature}. ${pronouns[2]} name is ${name}.`;

    let verb = gen_general(verbs_tr);
    let obj = gen_general(objs);
    let line2 = `Every day ${pronouns[1]} ${verb} ${obj}.`;

    let adj1 = gen_general(adjs);
    let adj2 = gen_general(adjs);
    while (adj1 === adj2) {
        adj2 = gen_general(adjs);
    }
    let line3 = `${pronouns[2]} friends are neither ${adj1} nor ${adj2}.`;

    let verb1 = gen_general(verbs_aux_w_ing);
    let verb2 = gen_general(verbs_tr_ing);
    obj = gen_general(food_drinks);
    let verb3 = gen_general(verbs_aux_w_inf);
    let verb4 = gen_general(verbs_intr_inf);
    let adv = gen_general(advs);
    let line4 = `${pronouns[0]} ${verb1} ${verb2} ${obj} very much and ${verb3} ${verb4} ${adv}.`;

    verb1 = gen_general(verbs_aux_w_inf);
    verb2 = gen_general(verbs_tr_inf);
    obj = gen_general(objs);
    let place = gen_general(places);
    let line5 = `${pronouns[0]} ${verb1} always ${verb2} ${obj} ${place}.`;

    let obj1 = gen_general(objs);
    obj1 = obj1.split('');
    obj1[0] = obj1[0].toUpperCase();
    obj1 = obj1.join('');
    let obj2 = gen_general(food_drinks);
    verb = gen_general(verbs_tr_inf);
    let line6 = `${pronouns[2]} motto is\: \'${obj1} are just like ${obj2}. Just ${verb} them.\'`;

    adj1 = gen_general(adjs);
    adj2 = gen_general(adjs);
    while (adj1 === adj2) {
        adj2 = gen_general(adjs);
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
