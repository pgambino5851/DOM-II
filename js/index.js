// Your code goes here

//Nav Links Event Listeners
let navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function(element){
    element.addEventListener('mouseenter', function(e){
        this.style.color = 'white';
        this.style.backgroundColor = 'black';
        
    })
    element.addEventListener('click', function(e){
        e.preventDefault();
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

mainContentImgArr[0].addEventListener('dblclick', function(e){
    let temp = mainContentImgArr[0].src;
    mainContentImgArr[0].setAttribute('src', mainContentImgArr[1].src);
    mainContentImgArr[1].setAttribute('src', temp);
    e.stopPropagation();
})

mainContentImgArr[1].addEventListener('dblclick', function(){
    let temp = mainContentImgArr[1].src;
    mainContentImgArr[1].setAttribute('src', mainContentImgArr[0].src);
    mainContentImgArr[0].setAttribute('src', temp);
    e.stopPropagation();
})

//Main Content Text Event Listeners
let mainContentTextArr = document.querySelectorAll('.text-content')
console.log(mainContentTextArr);
mainContentTextArr.forEach(function(element){
    element.addEventListener('dblclick', function(e){
        element.style.color = 'white';
        element.style.backgroundColor = 'black';
        element.style.borderRadius = '.5rem';
        e.stopPropagation();
    })
    
})
// mainContentTextArr.forEach(function(element){
//     console.log(element);
// })

//Fun Bus Event Listener
let funBus = document.querySelector('.fun-bus-img')
console.log(funBus[0]);
// funBus.addEventListener('drag', function(e){
//     alert("This bus ain't moving!");
window.addEventListener('keyup', function(e){
    console.log(e.key);
    if(e.key === "q"){
        console.log(funBus.style);
        funBus.style.display = 'none'
    }

    if(e.key === 'r'){
        funBus.style.display = 'inline-block';
    }
})   
// })