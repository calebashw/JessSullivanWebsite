import { create } from 'zustand';

const useStore = create((set) => ({
  name: '',
  email: '',
  message: '',
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setMessage: (message) => set({ message }),
  resetForm: () => set({ name: '', email: '', message: '' }),
}));

export default useStore;
