import {API_KEY} from "../Constant/constant"

export const wk_tmovie_url = `trending/movie/week?api_key=${API_KEY}`;
export const wk_ttv_url = `trending/tv/week?api_key=${API_KEY}`
export const orginals = `discover/tv?api_key=${API_KEY}&with_networks=213`;

export const dataByID = `?api_key=${API_KEY}&language=en-US`;

export const nowplaying = `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`