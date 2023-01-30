const countBtn = document.getElementById('startCountdown')
const countNum = document.getElementById('count')
const randBtn = document.getElementById('randomGame')
const finalNum = document.getElementById('finalNum')
const finalCountDown = document.getElementById('finalCountDown')

countBtn.addEventListener('click', countdown)
randBtn.addEventListener('click', randomGame)

function countdown(e) {
    e.preventDefault();
    finalCountDown.innerHTML = '';
    let num = countNum.value;
    if(!isNaN(parseInt(num))) {
        let id = setInterval(function() {
            if (num > 1) {
                num = num - 1;
                finalCountDown.append(` ${num} `)
                console.log(num)
            }
            else {
                console.log('DONE!')
                finalCountDown.append('Done!')
                clearInterval(id);
            }
        }, 1000)
    }   
    else {
        alert('Not a number')
    }
    countNum.value = ''
}


function randomGame() {
    let rand;
    let counter = 0;
    let id = setInterval(function() {
        rand = Math.random();
        counter = counter + 1;
        if(rand > .75) {
            console.log(counter);
            finalNum.innerHTML = `This round took ${counter} seconds to find a random number between 0 and 1 that was >.75`;
            clearInterval(id);
        }
    },1000)
}