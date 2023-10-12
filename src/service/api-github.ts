import axios from "axios"

export const ax = () => {
    return axios.get("https://api.github.com/users/mendozalz/repos?per_page=9&sort=created&direction=des")
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error fetching launches:", error);
        return [];
      });
  }

