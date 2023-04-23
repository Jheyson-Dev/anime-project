import axios from '../utils/AxiosConfig';

import { create } from 'zustand';

export const usePromos = create(set => ({
  promos: [],
  slicePromos: [],
  error: '',
  loading: true,
  getPromos: async url => {
    try {
      const response = await axios.get(url);
      set(state => ({
        ...state,
        promos: response.data.data,
        slicePromos: response.data.data.slice(0, 4),
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
