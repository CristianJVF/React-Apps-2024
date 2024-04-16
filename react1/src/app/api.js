import axios from 'axios';

export const getData = async () => {
    const d = await axios.get(`https://pokeapi.co/api/v2/pokemon`)
    return d;
}