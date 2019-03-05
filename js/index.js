// Your code goes here

//Nav Links Event Listeners
let navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function(element){
    element.addEventListener('mouseenter', function(){
        this.style.color = 'white';
        this.style.backgroundColor = 'black';
        
    })
})

navLinks.forEach(function(element){
    element.addEventListener('mouseleave', function(){
        this.style.color = 'black';
        this.style.background = 'white';
    })
})

//CTA Button Event Listeners

let ctaBtns = document.querySelectorAll(".btn");

ctaBtns.forEach(function(element){
    element.addEventListener('click', function(){
        alert("You've been signed up!");
    })
})

//Window Event Listener
window.addEventListener('keydown', function(event){
    
    if(event.key === 'ArrowDown'){
        alert("We're going down!");
        window.scrollTo(0, document.body.scrollHeight);
    }
    if(event.key === 'ArrowUp'){
        alert("We're going up!");
        window.scrollTo(top);
    }
})

window.addEventListener('load', function(){
    alert("Welcome to the Fun Bus!")
})


//Strobe light Event Listener
// let body = document.getElementsByTagName('body')
// let colorArr = ['red', 'blue', 'green', 'purple', 'orange'];
// function fiveSidedDie(){
//     return Math.round(Math.random() * Math.floor(4));
// }
// console.log(fiveSidedDie);
// window.addEventListener('scroll', function(){
//     let color = fiveSidedDie();
//     body[0].style.backgroundColor = colorArr[color];
// })


//Main Content Pictures Event Listeners

let mainContentImgArr = document.querySelectorAll('.img-fluid');
console.log(mainContentImgArr);

mainContentImgArr[0].addEventListener('dblclick', function(){
    let temp = mainContentImgArr[0].src;
    mainContentImgArr[0].setAttribute('src', mainContentImgArr[1].src);
    mainContentImgArr[1].setAttribute('src', temp);
})

mainContentImgArr[1].addEventListener('dblclick', function(){
    let temp = mainContentImgArr[1].src;
    mainContentImgArr[1].setAttribute('src', mainContentImgArr[0].src);
    mainContentImgArr[0].setAttribute('src', temp);
})

//Fun Bus Event Listener
let funBus = document.querySelector(".fun-bus-img");
console.log(funBus);
funBus.addEventListener('drag', function(){
    alert("This bus ain't moving!");
})