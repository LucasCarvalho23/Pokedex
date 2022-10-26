class PokedexAPI {

    constructor() {
        this.url = "https://pokeapi.co/api/v2/pokemon/"

        this.inputSearch = document.querySelector ("#name-id")
        this.buttonSearch = document.querySelector (".buttonSend-class")
        this.form = document.querySelector ("form")
        this.screen = document.querySelector (".screen-class")
        this.containerResponses = document.querySelector (".container-responses")
        this.ButtonResetSearch = document.querySelector (".button-blue-class")

        this.inputSearch.focus()

        this.form.addEventListener("submit", (e) => {
            e.preventDefault()
            this.searchResult()
        })

        this.ButtonResetSearch.addEventListener("click", () => this.resetSearch())

    }

    async searchResult() {
        this.url = this.url + this.inputSearch.value
        this.url = this.url.toLowerCase()

        this.response = await fetch (this.url)
        this.data = await this.response.json()


        // SEARCH

        this.inputName = 'Name: ' + this.changeInitial(this.data.name) + '<br>' + 'Type: ' + this.changeInitial(this.data.types[0].type.name) + '<br>'  + 'Abilitie: ' + this.changeInitial(this.data.abilities[0].ability.name) 
        
        this.containerResponses.innerHTML = this.inputName


        // IMG

        this.valueFront = this.data.sprites.front_default
        this.valueBack = this.data.sprites.back_default

        this.screen.innerHTML = "<img src = '" + this.valueFront + "'> <img src = '" + this.valueBack + "'> "
    }

    changeInitial(value) {
        this.initial = value.charAt(0).toUpperCase()
        this.final = value.slice(1)
        return this.initial + this.final

    }

    resetSearch() {
        location.reload()
    }

}

const pokedexAPI = new PokedexAPI()