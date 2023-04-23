import { create } from 'zustand';
import axios from '../utils/AxiosConfig';

export const useSeason = create(set => ({
  seasons: [],
  sliceSeasons: [],
  error: '',
  loading: true,
  getSeasonAnime: async url => {
    try {
      const response = await axios.get(url);
      set(state => ({
        ...state,
        seasons: response.data.data,
        sliceSeasons: response.data.data.slice(0, 4),
        error: '',
      }));
    } catch (err) {
      set(state => ({
        ...state,
        error: err.response.data.message,
      }));
    } finally {
      set(state => ({
        ...state,
        loading: false,
      }));
    }
  },
}));
