class NewsNavbar {

    constructor() {
        
        this.h3NewsMsg1 = document.querySelector ("#h3-news-msg1-id")
        this.pNewsMsg1 = document.querySelector ("#p-news-msg1-id")
        this.h3NewsMsg2 = document.querySelector ("#h3-news-msg2-id")
        this.pNewsMsg2 = document.querySelector ("#p-news-msg2-id")
        this.h3NewsMsg3 = document.querySelector ("#h3-news-msg3-id")
        this.pNewsMsg3 = document.querySelector ("#p-news-msg3-id")
        this.h3NewsMsg4 = document.querySelector ("#h3-news-msg4-id")
        this.pNewsMsg4 = document.querySelector ("#p-news-msg4-id")

        //Transform the values on object
        this.insertValuesFunc()

        console.log (this.newsValues)

    }

    insertValuesFunc() {

        this.newsValues = [
            {
                title: 'Novo livro em breve', 
                description: 'O novo livro já está sendo escrito. Lucas começou a escrever por volta do início de 2022, porém ainda não tem data de lançamento. '
            },
            {
                title: 'Mapa de Adlahill', 
                description: 'Mapa de Adlahill, que vem no livro Nosferatus e mostra geografia do continente.'
            },
            {
                title: 'Adlahill', 
                description: 'Conheça a geografia de Adlahill.'
            },
            {   
                title: 'Clãs dos vampiros', 
                description: 'Lucas divulgou algumas informações sobre os clãs dos vampiros e alguns personagens.'
            }
        ]
        
        this.h3NewsMsg1.innerHTML = `${this.newsValues[0].title}`
        this.h3NewsMsg2.innerHTML = `${this.newsValues[1].title}`
        this.h3NewsMsg3.innerHTML = `${this.newsValues[2].title}`
        this.h3NewsMsg4.innerHTML = `${this.newsValues[3].title}`
        this.pNewsMsg1.innerHTML = `${this.newsValues[0].description}`
        this.pNewsMsg2.innerHTML = `${this.newsValues[1].description}`
        this.pNewsMsg3.innerHTML = `${this.newsValues[2].description}`
        this.pNewsMsg4.innerHTML = `${this.newsValues[3].description}`

    }


}

let newsNavbar = new NewsNavbar()