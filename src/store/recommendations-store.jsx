import { create } from 'zustand';
import axios from '../utils/AxiosConfig';

export const useRecommendations = create(set => ({
  recommendatios: [],
  sliceRecommendations: [],
  error: '',
  loading: true,
  getRecommendations: async url => {
    try {
      const response = await axios.get(url);
      set(state => ({
        ...state,
        recommendatios: response.data.data,
        sliceRecommendations: response.data.data.slice(0, 2),
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
