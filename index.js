const numbers = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten"
];

const words = {
    "frog": [
    "frog",
    "frogs",
    "images/frog.png"
],
    "horse":[
        "horse",
        "horses",
        "images/horse.png"
    ],
    "fish":[
        "fish",
        "fish",
        "images/fish.png"
    ],
    "sheep" :[
        "sheep",
        "sheep",
        "images/sheep.png"
    ],
    "lizard" :[
        "lizard",
        "lizards",
        "images/lizard.png"
    ],
    snake:[
        "snake",
        "snakes",
        "images/snake.png"
    ],
    cow:[
        "cow",
        "cows",
        "images/cow.png"
    ],
    turtle:[
        "turtle",
        "turtles",
        "images/turtle.png"
    ],
    snail:[
        "snail",
        "snails",
        "images/snail.png"
    ],
    spider:[
        "spider",
        "spiders",
        "images/spider.png"
    ],
    ladyBug:[
        "ladybug",
        "ladybugs",
        "images/ladybug.png"
    ],
    worm:[
        "worm",
        "worms",
        "images/worm.png"
    ],
    duck:[
        "duck",
        "ducks",
        "images/duck.png"
    ],
    elephant:[
        "elephant",
        "elephants",
        "images/elephant.png"
    ],
    lion:[
        "lion",
        "lions",
        "images/lion.png"
    ],
    tiger:[
        "tiger",
        "tigers",
        "images/tiger.png"
    ],
    bear:[
        "bear",
        "bears",
        "images/bear.png"
    ],
    bird:[
        "bird",
        "birds",
        "images/bird.png"
    ],
    dog:[
        "dog",
        "dogs",
        "images/dog.png"
    ],
    cat:[
        "cat",
        "cats",
        "images/cat.png"
    ],
    monkey:[
        "monkey",
        "monkeys",
        "images/monkey.png"
    ],
    gorilla:[
        "gorilla",
        "gorillas",
        "images/gorilla.png"
    ],
    kangaroo:[
        "kangaroo",
        "kangaroos",
        "images/kangaroo.png"
    ],
    octopus:[
        "octopus",
        "octopuses",
        "images/octopus.png"
    ],
    pig:[
        "pig",
        "pigs",
        "images/pig.png"
    ],
    goat:[
        "goat",
        "goats",
        "images/goat.png"
    ]
};

function randomNumber(){
    let howMany = Math.floor(Math.random()*10);
  document.getElementById('number').innerHTML = numbers[howMany] + " <button id='numberButton'>Go!</button>";
    document.getElementById('numberButton').addEventListener('click', function(){
    randomWord(howMany);
        });
}

function randomWord(howMany){
    let theWord = Math.floor(Math.random()* Object.keys(words).length);
    let theObject = Object.keys(words)[theWord];
    console.log(theWord);
    console.log(theObject);
    
    let theDOMSpace = document.getElementById('word');
    if(howMany === 0){
        theDOMSpace.innerHTML = words[theObject][0] + " <button id='wordButton'>Go!</button>";
        console.log(theDOMSpace);
    } else {
        theDOMSpace.innerHTML = words[theObject][1] + " <button id='wordButton'>Go!</button>";
        console.log(theDOMSpace);
    }
    
    document.getElementById('wordButton').addEventListener('click', function(){
    showTheNumber(howMany, theObject, theWord);
    });
}

function showImage(word){
    console.log(word);
    document.querySelector('#picture img').src=words[word][2];
    document.getElementById('reset').addEventListener('click', function(){
        location.reload();
    })
}

function showTheNumber(theNumber, theObject){
    document.getElementById('numeral').innerHTML = (theNumber+1) + " <button id='numeralButton'>Go!</button>";
    document.getElementById('numeralButton').addEventListener('click', function(){
     showImage(theObject);
    });
}



randomNumber();