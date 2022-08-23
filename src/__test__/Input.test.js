import {fireEvent, waitFor, screen, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Input from "../components/Input"

import { useState } from 'react';

jest.mock('react', () => ({
...jest.requireActual('react'),
useState: jest.fn()
}));

const useStateMock = useState ;

test("inputElement should be in the document", async () => {

    const props = {
        setWord: jest.fn(),
        handleSubmit: jest.fn()
    }

    render(<Input {...props} />);


    const inputEl = await screen.findByPlaceholderText(/enter word/i);

    await waitFor(() => {
        expect(inputEl).toBeInTheDocument();    
    })
})

test("inputElement should be working", async () => {

    const props = {
        setWord: jest.fn((value) => {}),
        handleSubmit: jest.fn((value) => {})
    }


    render(<Input {...props} />);

    const inputEl = await screen.findByPlaceholderText(/enter word/i);

    userEvent.type(inputEl, "racecar");


    await waitFor(() => {
        expect(inputEl.value).toBe("racecar");
    })
})


// button should show loading when form is submitted
test("loading should render when button is clicked", () => {
    const props = {
        setWord: jest.fn(),
        handleSubmit: jest.fn()
    }

    render(<Input {...props} />);
    
    const submitBtn = screen.getByRole("button");

    fireEvent.click(submitBtn)

    expect(submitBtn).toBeInTheDocument();
})    




test("it is a palindrome", async () => {
    

    // const setWord = jest.fn();
  
    // useStateMock.mockImplementation(() => ['racecar', setWord]);

    const props = {
        setWord: jest.fn(),
        handleSubmit: jest.fn(),
        stop: "racecar"
    }

    render(<Input {...props} />);

    const inputEl = await screen.findByPlaceholderText(/enter word/i);

    // const buttonEl = await screen.findByRole("button", {name: /Check Word/i});
    const buttonEl = await screen.findByTestId("submitBtn");

    fireEvent.change(inputEl, {
        target: {
            value: "racecar"
        }
    });

    await waitFor(() => {
        expect(inputEl.value).toBe("racecar")
    })

    fireEvent.submit(buttonEl);


    const isPalindrome = await screen.findByTestId("palindrome");

    await waitFor(() => {
        expect(isPalindrome.textContent).toBe("racecar");
    });
})

