var cards = ["bulbasaur", "charmander", "egg", "greatball", "masterball", "meowth", "pikachu", "pokeball", "premierball", "snorlax", "squirtle", "wigglypuff"]

function render() {
    var out = document.getElementById("out")
    for (var i = 0; i < cards.length; i++) {
        out.innerHTML += `<img height="200" class="col-3 card"
                          id="${i}" onclick="flip(${i})"
                           src="pokemon/back.png">`
    }
}

function flip(i){
   document.getElementById(i).src = `pokemon/${cards[i]}.png`
}