import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import ContactForm from './ContactForm';
import postEmail from '../utils/postEmail';

jest.mock('../utils/postEmail');

test('Displays success message after post', async () => {
    render(<ContactForm />);

    postEmail.mockImplementationOnce(() => (Promise.resolve({ status: 201 })))

    fireEvent.change(screen.getByPlaceholderText(/Your Name*/i), {
        target: { value: 'Full Name' },
    })
    fireEvent.change(screen.getByPlaceholderText(/Your Email*/i), {
        target: { value: 'test@test.com' },
    })
    fireEvent.change(screen.getByLabelText(/Birth date/i), {
        target: { value: '2000-01-01' },
    })

    fireEvent.click(screen.getByLabelText(/I agree to be contacted via email/i))
    act(() => fireEvent.click(screen.getByText(/Submit/i)));

    expect(postEmail).toHaveBeenCalledTimes(1);
    const success = await screen.getByText(/Thanks for your submission/i);
    expect(success).toBeInTheDocument();

})