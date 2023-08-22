export default class Test {

    constructor() {
        
        this.h3News1 = document.querySelector ("#h3-news1-id")
        this.pNews1 = document.querySelector ("#p-news1-id")

        this.news1Values = [{},{},{},{}]

        this.news1Values['title'] = `Novo livro em breve`
        this.news1Values['description'] = `O novo livro já está sendo escrito. Lucas começou a escrever por volta do início de 2022, porém ainda não tem data de lançamento. Segundo o autor, ele escreveu os primeiros cinco capítulos, todavia ainda não os terminou e não tem previsão para terminar.`

        this.h3News1.innerHTML = this.news1Values[0]
        this.pNews1.innerHTML =  this.news1Values[1]

        console.log (this.news1Values)

    }
 
}

const test = new Test()