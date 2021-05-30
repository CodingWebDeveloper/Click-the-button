const buttonHolder = document.querySelector('#btn');
const progressBar = document.querySelector('#progressBarFull');
const container = document.querySelector('.container');
const modal = document.querySelector('.modal');
const buttonStartAgain = document.querySelector('#btn-start-again');
const transparentbg = document.querySelector('.transparent-bg');
let currentProgress = 0;
let decreaseProgress = 8;
let time = 0;

startGame = () =>{
    currentProgress = 0;
    modal.style.visibility = `hidden`;
        progressBar.style.width = `${currentProgress}%`;
        progressBar.style.transition = `width 1350ms`;
    defaultStyle();
}


buttonHolder.addEventListener('click', e=>{
    currentProgress += 10;
    progressBar.style.width = `${currentProgress}%`;
    progressBar.style.transition = `width 350ms`;

    if(currentProgress == 100)
    {
        modal.style.visibility = `visible`;
        transparentbg.style.opacity = `0.2`;
    }

    buttonStartAgain.addEventListener('click', e=>{
        startGame();
        
    })
    
})

   

defaultStyle = () => {
    progressBar.style.transition = `width 450ms`;
    transparentbg.style.opacity = `1`;
}
