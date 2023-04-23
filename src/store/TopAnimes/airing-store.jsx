import { create } from 'zustand';
import axios from '../../utils/AxiosConfig';

export const useAiring = create(set => ({
  airing: [],
  error: '',
  loading: true,
  getTopAiring: async url => {
    try {
      const response = await axios.get(url);
      set(state => ({
        ...state,
        airing: response.data.data,
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
