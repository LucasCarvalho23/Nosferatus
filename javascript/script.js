export default class Test {

    constructor() {
        
        this.h3News1 = document.querySelector ("#h3-news1-id")
        this.h3News2 = document.querySelector ("#h3-news2-id")
        this.h3News3 = document.querySelector ("#h3-news3-id")
        this.h3News4 = document.querySelector ("#h3-news4-id")
        this.pNews1 = document.querySelector ("#p-news1-id")
        this.pNews2 = document.querySelector ("#p-news2-id")
        this.pNews3 = document.querySelector ("#p-news3-id")
        this.pNews4 = document.querySelector ("#p-news4-id")

        //Transform the values on object
        this.insertValuesFunc()

        console.log (this.newsValues)

    }

    insertValuesFunc() {

        this.newsValues = [
            {
                title: 'Novo livro em breve', 
                description: 'O novo livro já está sendo escrito. Lucas começou a escrever por volta do início de 2022, porém ainda não tem data de lançamento. Segundo o autor, ele escreveu os primeiros cinco capítulos, todavia ainda não os terminou e não tem previsão para terminar.'
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
        
       this.h3News1.innerHTML = `${this.newsValues[0].title}`
       this.h3News2.innerHTML = `${this.newsValues[1].title}`
       this.h3News3.innerHTML = `${this.newsValues[2].title}`
       this.h3News4.innerHTML = `${this.newsValues[3].title}`
       this.pNews1.innerHTML = `${this.newsValues[0].description}`
       this.pNews2.innerHTML = `${this.newsValues[1].description}`
       this.pNews3.innerHTML = `${this.newsValues[2].description}`
       this.pNews4.innerHTML = `${this.newsValues[3].description}`

    }
 
}

const test = new Test()