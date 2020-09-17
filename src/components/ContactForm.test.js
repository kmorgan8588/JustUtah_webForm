import React from 'react';
import { render, fireEvent, screen, waitForElement } from '@testing-library/react';
import ContactForm from './ContactForm';
import postEmail from '../utils/postEmail';
import alertMessage from '../utils/alertMessage';

jest.mock('../utils/postEmail');
jest.mock('../utils/alertMessage');


test('Displays success message after post', async () => {
    render(<ContactForm />);

    postEmail.mockImplementationOnce(() => (Promise.resolve({ status: 201 })))

    fireEvent.change(screen.getByPlaceholderText(/Your Name*/i), {
        target: { value: 'Full Name' },
    })


    fireEvent.change(screen.getByPlaceholderText(/Your Email*/i), {
        target: { value: 'test@test.com' },
    })

    fireEvent.change(screen.getByTestId("date-input"), {
        target: { value: '2000-01-01' },
    })

    fireEvent.click(screen.getByLabelText(/I agree to be contacted via email/i))
    await fireEvent.click(screen.getByText(/Submit/i))


    expect(postEmail).toHaveBeenCalledTimes(1);
    const success = await waitForElement(() => screen.getByTestId("success"));
    expect(success).toBeInTheDocument();

})


test('Alerts invalid date', async () => {
    render(<ContactForm />);

    alertMessage.mockImplementationOnce((event) => event.preventDefault());

    postEmail.mockImplementationOnce(() => (Promise.resolve({ status: 201 })))

    fireEvent.change(screen.getByPlaceholderText(/Your Name*/i), {
        target: { value: 'Full Name' },
    })


    fireEvent.change(screen.getByPlaceholderText(/Your Email*/i), {
        target: { value: 'test@test.com' },
    })

    fireEvent.change(screen.getByTestId("date-input"), {
        target: { value: '1899-01-01' },
    })

    fireEvent.click(screen.getByLabelText(/I agree to be contacted via email/i))
    await fireEvent.click(screen.getByText(/Submit/i))


    expect(alertMessage).toHaveBeenCalledTimes(1);
})