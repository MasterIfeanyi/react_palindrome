# Getting started

<<<<<<< HEAD

=======
Chima Ifeanyi ThankGod
>>>>>>> 38b3b3c9cf4dc7807156122b7913f55918bf77ac
## Description

This is a simple project that allows a user to check if a word is a palindrome.

## React

This project was bootstrapped with typescript and create-react-app. `npx create-react-app .`

## Project Set-up

The dependencies required are all included in the `package.json` file. They will all be installed by running the `npm install` command.

To start the project run `npm start`.

## Check out the web app

click the link below

Open [Ifeanyi-palindrome-app](https://ifeanyi-palindrome.netlify.app/) to view it in the browser.


<<<<<<< HEAD
## unit tests

### toBeInTheDocument()

Every time I use expect("anything").toBeInTheDocument() on test file, when running the test I get:

```
TypeError: expect(...).toBeInTheDocument is not a function
```

**solution**

1. install jest-dom `npm i --save-dev @testing-library/jest-dom`
2. create a `setupTests.js` file in `<rootDir>/src` and put `import '@testing-library/jest-dom';` in your file

**source**

[stackoverflow question #1 - react-testing-library why is toBeInTheDocument() not a function](https://stackoverflow.com/questions/56547215/react-testing-library-why-is-tobeinthedocument-not-a-function)

[stackoverflow question #2 - Got TypeError: expect(...).toBeInTheDocument is not a function even after proper setup](https://stackoverflow.com/questions/62951078/got-typeerror-expect-tobeinthedocument-is-not-a-function-even-after-proper)

### prop drilling

When I tried to render the component `Input.jsx` while running the test I get: 

```
expect(received).toBe(expected) // Object.is equality

    Expected: "racecar"
    Received: ""
```
**solution**

The component recieves props and I had to pass in those props as well while testing

```javascript
const props = {
        setWord: jest.fn(),
        handleSubmit: jest.fn()
    }

    render(<Input {...props} />);
```

**source**

[stackoverflow question #1 - Test input Search box with React testing library](https://stackoverflow.com/questions/64342544/test-input-search-box-with-react-testing-library)


## userEvent

I wanted to trigger user input, so I chose to use `@testing-library/user-event`

```javascript
userEvent.type(inputEl, "racecar");


    await waitFor(() => {
        expect(inputEl.value).toBe("racecar");
    })
```

**source** 

[how to use userEvent](https://javascript.plainenglish.io/simulate-browser-interactions-with-testing-librarys-userevent-cf8480d2606)
=======

>>>>>>> 38b3b3c9cf4dc7807156122b7913f55918bf77ac
