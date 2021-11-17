export class ReadListService {
    static #setReadList(readList) {
        localStorage.setItem('readList', JSON.stringify(readList))
    }

    static get readList() {
        const json = localStorage.getItem('readList')
        return json ? JSON.parse(json) : []
    }

    static addBook(book) {
        const newReadList = [...ReadListService.readList, book]
        ReadListService.#setReadList(newReadList)
        return newReadList
    }

    static markBook(bookId) {}

    static deleteBook(bookId) {}
}
