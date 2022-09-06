console.log('first');
console.log('Second');
let second = 0;
const setIntervalId = setInterval(() => {

    console.log(++second);
    if (second == 10)
        clearInterval(setIntervalId);
}, 1000)
console.log('Fourth');
console.log('Fifth');