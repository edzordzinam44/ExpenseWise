// setupTests.js
jest.mock('./authService', () => ({
    isAuthenticated: () => true,
    getUser: () => ({
        id: 1,
        name: 'Test User',
        email: 'test@example.com'
    })
}));

export { isAuthenticated, getUser };