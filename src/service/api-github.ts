import axios from "axios"

const instance = axios.create({
  baseURL: 'https://api.github.com/users/mendozalz/repos',
  timeout: 1000,
  headers: {'X-Custom-Header': import.meta.env.VITE_API_KEY}
});

export const ax = () => {
    return instance.get("https://api.github.com/users/mendozalz/repos?per_page=11&sort=created&direction=des")
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error:", error);
        return [];
      });

  }


