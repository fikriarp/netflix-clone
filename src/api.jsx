import axios from "axios";

const apiKey = import.meta.env.VITE_APIKEY;
const baseUrl = import.meta.env.VITE_BASEURL;

export const getMovieList = async () => {
  try {
    const movie = await axios.get(
      `${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    );
    return movie;
  } catch (error) {
    console.error("Error fetching movie list:", error);
    throw error; // Pastikan error dilempar kembali agar dapat ditangani di tempat lain
  }
};
