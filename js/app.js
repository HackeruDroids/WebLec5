var cards = ["bulbasaur", "charmander", "egg", "greatball", "masterball", "meowth", "pikachu", "pokeball", "premierball", "snorlax", "squirtle", "wigglypuff"]



function render() {
    var out = document.getElementById("out")
    for (var i = 0; i < cards.length; i++) {
        out.innerHTML += `<img height="200" class="col-3 card"
                          id="${i}" onclick="flip(${i})"
                           src="pokemon/back.png">`
    }
}

function flip(i) {
    document.getElementById(i).src = `pokemon/${cards[i]}.png`
}


var randCards = []

function randomize() {
    randCards = []
    const numOfPairs = 6
    var mSet = new Set()
    while (mSet.size < numOfPairs) {
        mSet.add(Math.floor(Math.random() * cards.length)) //TODO function
    }

    mSet.forEach(e => { //es6
        randCards.push(e)
        randCards.push(e)
    })

    //the most efficient: Fisher-Yates
    for(var i = 0; i < randCards.length; i++){
        var rand = Math.floor(Math.random() * randCards.length)

        var c = randCards.splice(rand, 1)[0];
        randCards.push(c);
    }
}


function removeItemSplice(){
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    //we want to remove the "Orange"
    //orange index is 1 -> start from 1
    var o = fruits.splice(1/*start*/, 1/*deleteCount*/)
  
    document.getElementById("out").innerHTML = o;
    document.getElementById("out").innerHTML += "<br>" +  fruits;
}

function addItemSplice(){
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    //we want to remove the "Orange"
    //orange index is 1 -> start from 1
     fruits.splice(4/*start*/, 10/*deleteCount*/, "Kiwi") //add the kiwi to the end
 
    document.getElementById("out").innerHTML += "<br>" +  fruits;
}