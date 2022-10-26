class PokedexAPI {

    constructor() {
        this.url = "https://pokeapi.co/api/v2/pokemon/"

        this.inputSearch = document.querySelector ("#name-id")
        this.buttonSearch = document.querySelector (".buttonSend-class")
        this.form = document.querySelector ("form")
        this.screen = document.querySelector (".screen-class")
        this.containerResponses = document.querySelector (".container-responses")

        this.form.addEventListener("submit", (e) => {
            e.preventDefault()
            this.searchResult()
        })

    }

    async searchResult() {
        this.url = this.url + this.inputSearch.value

        this.response = await fetch (this.url)
        this.data = await this.response.json()

        this.inputName = 'Name: ' + this.data.name + '<br>' + 'Type: ' + this.data.types[0].type.name + '<br>'  + 'Abilitie: ' + this.data.abilities[0].ability.name 

        console.log (this.data)
        
        this.containerResponses.innerHTML = this.inputName

        this.valueFront = this.data.sprites.front_default
        this.valueBack = this.data.sprites.back_default

        this.form.innerHTML = "<img src = '" + this.valueFront + "'> <img src = '" + this.valueBack + "'> "
    }

}

const pokedexAPI = new PokedexAPI()