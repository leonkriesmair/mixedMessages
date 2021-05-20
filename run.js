const senBegin = ['Your favorite weed is: ', 'You love to draw a ', 'You'];
const weedType = ['-haze', '-kush'];
const senMid = ['love', 'hate'];
const senMid2 = ['making', 'eating'];
const foods = ['pasta', 'ratatouille', 'steak', 'ice cream', 'cake', 'soup'];
const words = ['sun', 'desert', 'football', 'woman', 'book', 'dragon', 'rose', 'tulip', 'railgun', 'massacre', 'dildo'];

let iBeg = Math.floor(Math.random() * senBegin.length);
let iFoods = Math.floor(Math.random() * foods.length);
let iWords = Math.floor(Math.random() * words.length);
let i = Math.floor(Math.random()*2);

function mixedMessage () {
    if (iBeg === 0) {
        return `${senBegin[iBeg]}${words[iWords]}${weedType[i]}`;
    };
    if (iBeg === 2) {
        return `${senBegin[iBeg]} ${senMid[i]} ${senMid2[i]} ${foods[iFoods]}`;
    }
    if (iBeg === 1) {
        return `${senBegin[iBeg]}${words[iWords]}`;
    };
}

console.log(mixedMessage());