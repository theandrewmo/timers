function countdown(num) {
    let id = setInterval(function() {
        if (num > 1) {
            num = num - 1;
            console.log(num)
        }
        else {
            console.log('DONE!')
            clearInterval(id);
        }
    }, 1000)
}


function randomGame() {
    let rand;
    let counter = 0;
    let id = setInterval(function() {
        rand = Math.random();
        counter = counter + 1;
        if(rand > .75) {
            console.log(counter);
            clearInterval(id);
        }
    },1000)
}