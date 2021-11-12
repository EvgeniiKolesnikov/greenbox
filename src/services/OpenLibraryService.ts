import { ApiClient } from './ApiClient';

const apiUrlSearch = `https://openlibrary.org`;
const apiUrlImage = `https://covers.openlibrary.org`;
const imageSize = `L`;

export class OpenLibraryService {
  static apiBooks = new ApiClient(apiUrlSearch);
  static apiImages = new ApiClient(apiUrlImage);

  static async searchBooks(fullQuerry: string) {
    return OpenLibraryService.apiBooks.get(`/search.json?q=${fullQuerry}`);
  }

  static async searchBooksQuerry(querry: string, page: number) {
    return OpenLibraryService.apiBooks.get(
      `/search.json?q=${querry}&page=${page}`
    );
  }

  static async searchBookImage(bookLinks: string) {
    return OpenLibraryService.apiImages.get(
      `/b/${bookLinks}-${imageSize}.jpg?default=false`
    );
  }
}
