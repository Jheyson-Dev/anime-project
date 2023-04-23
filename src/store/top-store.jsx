import { create } from 'zustand';
import axios from '../utils/AxiosConfig';

export const useTop = create(set => ({
  tops: [],
  sliceTops: [],
  error: '',
  loading: true,
  getTopAnime: async url => {
    try {
      const response = await axios.get(url);
      set(state => ({
        ...state,
        tops: response.data.data,
        sliceTops: response.data.data.slice(0, 4),
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
