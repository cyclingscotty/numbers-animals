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
    duck:[
        "duck",
        "ducks",
        "images/duck.png"
    ],
    pig:[
        "pig",
        "pigs",
        "images/pig.png"
    ],
     cow:[
        "cow",
        "cows",
        "images/cow.png"
    ],
    frog: [
    "frog",
    "frogs",
    "images/frog.png"
],
    horse:[
        "horse",
        "horses",
        "images/horse.png"
    ],
    fish:[
        "fish",
        "fish",
        "images/fish.png"
    ],
    bird:[
        "bird",
        "birds",
        "images/bird.png"
    ],
    
  //10  
    
    
    zebra:[
        "zebra",
        "zebras",
        "images/zebra.png"
    ],
    deer:[
        "deer",
        "deer",
        "images/deer.png"
    ],
    hippo:[
        "hippo",
        "hippos",
        "images/hippo.png"
    ],
    spider:[
        "spider",
        "spiders",
        "images/spider.png"
    ],
    "sheep" :[
        "sheep",
        "sheep",
        "images/sheep.png"
    ],
    
    snake:[
        "snake",
        "snakes",
        "images/snake.png"
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
    elephant:[
        "elephant",
        "elephants",
        "images/elephant.png"
    ],
    tiger:[
        "tiger",
        "tigers",
        "images/tiger.png"
    ],
    
    //20
    
    
    lion:[
        "lion",
        "lions",
        "images/lion.png"
    ],
    bear:[
        "bear",
        "bears",
        "images/bear.png"
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
    goat:[
        "goat",
        "goats",
        "images/goat.png"
    ],
    koala:[
        "koala",
        "koalas",
        "images/koala.png"
    ],
    panda:[
        "panda",
        "pandas",
        "images/panda.png"
    ],
    giraffe:[
        "giraffe",
        "giraffes",
        "images/giraffe.png"
    ],
    
    chicken:[
        "chicken",
        "chickens",
        "images/chicken.png"
    ],
    penguin:[
        "penguin",
        "penguins",
        "images/penguin.png"
    ],
    
    /*//30
    
    
    
    camel:[
        "camel",
        "camels",
        "images/camel.png"
    ],
    crocodile:[
        "crocodile",
        "crocodiles",
        "images/crocodile.png"
    ],
    worm:[
        "worm",
        "worms",
        "images/worm.png"
    ],
    ladyBug:[
        "ladybug",
        "ladybugs",
        "images/ladybug.png"
    ],
    octopus:[
        "octopus",
        "octopuses",
        "images/octopus.png"
    ],
    lizard :[
        "lizard",
        "lizards",
        "images/lizard.png"
    ],
    rhino :[
        "rhino",
        "rhinos",
        "images/rhino.png"
    ],
    whale :[
        "whale",
        "whales",
        "images/whale.png"
    ],
    flamingo :[
        "flamingo",
        "flamingoes",
        "images/flamingo.png"
    ]
   */ 
};




function randomNumber(){    
    document.getElementById('reset').style.backgroundColor = 'none';
    let howMany = Math.floor(Math.random()*10);
  document.getElementById('number').innerHTML = numbers[howMany]; // + " <button id='numberButton'>Go!</button>";
  //document.getElementById('numberButton').addEventListener('click', function(){
   randomWord(howMany);
   //    });
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
    document.getElementById('wordButton').style.backgroundColor = 'orange';
    document.getElementById('wordButton').addEventListener('click', function(){
    showTheNumber(howMany, theObject, theWord);
    });
}

function showImage(word){
    console.log(word);
    document.querySelector('#picture img').src=words[word][2];
    document.getElementById('reset').style.backgroundColor = 'orange';
    document.getElementById('numeralButton').style.display = 'none';
    document.getElementById('reset').addEventListener('click', function(){
        location.reload();
    })
}

function showTheNumber(theNumber, theObject){
    document.getElementById('numeral').innerHTML = (theNumber+1) + " <button id='numeralButton'>Go!</button>";
    document.getElementById('wordButton').style.display = 'none';
    document.getElementById('numeralButton').style.backgroundColor = 'orange';
    document.getElementById('numeralButton').addEventListener('click', function(){
     showImage(theObject);
    });
}



randomNumber();