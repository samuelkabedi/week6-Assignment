//Writing Backend Unit Tests

const request = require('supertest');
const app = require('../server');

describe('User API', () => {
    it('should create a new user', async () => {
        const res = await request(app)
            .post('/api/users')
            .send({ name: 'John', email: 'Samkabedi@example.com', password: '123456' });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('name', 'John');
    });
});

describe('Authentication API', () => {
    it('should login a user', async () => {
        const res = await request(app)
            .post('/api/auth/login')
.send({ email: 'Samkabedi@example.com', password: '123456' });
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('token');
        });
    });

    //Writing Frontend Component Tests Button.test.js
    import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button with text', () => {
    render(<Button text='Click me' />);
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toBeInTheDocument();
});

// Writing Frontend Component Tests Input.test.js
import { render, screen } from '@testing-library/react';
import Input from './Input';
test('renders input with placeholder', () => {
    render(<Input placeholder='Enter text' />);
    const inputElement = screen.getByPlaceholderText(/Enter text/i);
    expect(inputElement).toBeInTheDocument();
});

//console.log
const fetchUser = async () => {
    console.log('Fetching user data');
    const res = await fetch('/api/users');
    console.log('Response:', res);
};
fetchUser()
    .then(data => console.log('User data:', data))
    .catch(err => console.error('Error fetching user:', err));

     //Error Handling 
try {
    const user = await User.findById(id);
} catch (error) {
    console.error('Error fetching user:', error);
}
// Express Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});


