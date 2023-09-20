import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRandomGreeting = createAsyncThunk(
  'greeting/fetchRandomGreeting',
  async () => {
    const response = await fetch('http://localhost:3000/api/greetings/random');
    const data = await response.json();
    return data;
  },
);

export default fetchRandomGreeting;
