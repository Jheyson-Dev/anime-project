import axios from '../../utils/AxiosConfig';
import { create } from 'zustand';

export const useAll = create(set => ({
  all: [],
  error: '',
  loading: true,
  getAll: async url => {
    try {
      const response = await axios.get(url);
      console.log(response.data.data);
      set(state => ({
        ...state,
        all: response.data.data,
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
