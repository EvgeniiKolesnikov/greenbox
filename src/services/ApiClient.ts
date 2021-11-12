export class ApiClient {
  apiUrl: string;

  constructor(baseUrl: string) {
    this.apiUrl = baseUrl;
  }

  async get(resource: string) {
    const url = `${this.apiUrl}${resource}`;
    try {
      const response = await fetch(url, { mode: 'cors' });
      if (response.ok) {
        return await response.json();
      }
      // Do something with error
      console.error(`Request ${url} failed with ${response.status}`);
    } catch (error) {
      console.error(`Request ${url} failed with error`, error);
    }
  }
}
