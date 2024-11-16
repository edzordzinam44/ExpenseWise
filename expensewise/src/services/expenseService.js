import axiosInstance from '../axiosInstance';

export const fetchExpenses = async () => {
  try {
    const response = await axiosInstance.get('/expenses');
    return response.data;
  } catch (error) {
    console.error('Error fetching expenses:', error);
    throw error;
  }
};

export const addExpense = async (expenseData) => {
  try {
    const response = await axiosInstance.post('/expenses', expenseData);
    return response.data;
  } catch (error) {
    console.error('Error adding expense:', error);
    throw error;
  }
};