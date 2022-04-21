const reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        img: './img/person-1.jpg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        img: './img/person-2.jpg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        img: './img/person-3.jpg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        img: './img/person-4.jpg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];

const img = document.getElementsByTagName('img')[0];
const author = document.querySelector('.author');
const job = document.querySelector('.job');
const info = document.querySelector('.info');

const btnPrev = document.querySelector('.left');
const btnNext = document.querySelector('.right');
const btnRandom = document.querySelector('.random');

let currentIndexItem = 0;
const lengthReviews = reviews.length - 1;

window.addEventListener('DOMContentLoaded', () => {
    const item = getPerson(currentIndexItem);
    showPerson(item);
});

function getPerson(currentIndexItem) {
    return reviews[currentIndexItem];
}

function showPerson(item) {
    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    info.textContent = item.text;
}

btnRandom.addEventListener('click', () => {
    currentIndexItem = Math.floor(Math.random() * lengthReviews);

    showPerson(getPerson(currentIndexItem));
});

btnNext.addEventListener('click', () => {
    currentIndexItem++;
    if (currentIndexItem > lengthReviews) currentIndexItem = 0;

    showPerson(getPerson(currentIndexItem));
});

btnPrev.addEventListener('click', () => {
    currentIndexItem--;
    if (currentIndexItem < 0) currentIndexItem = lengthReviews;

    showPerson(getPerson(currentIndexItem));
});
