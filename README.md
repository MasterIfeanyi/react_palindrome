# Getting started

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
        handleSubmit: jest.fn(),
        stop: "racecar",
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

## solving git error

This project was created from scratch and was not linked to the remote GitHub repository, so I started the process of setting a `remote-tracking` branch for my local repo. This is because I lost my `.git` sub-directory (somehow)

#### problem 1

**action** 

``git add . && git commit -m "switch branch, write unit test" &&  git push``

**error**

``fatal: The current branch main has no upstream branch.``

**solution**

```git push --set-upstream origin main```


#### problem 2

**action**

```git push --set-upstream origin main```

**error**

``fatal: failed to push some refs to github.com/**``

**solution**

``git pull --rebase origin main``


#### problem 3

**action**

``git pull``

**error**

``There is no tracking information for the current branch, If you wish to set tracking information for this branch you can do so with: ``

**solution**

``git branch --set-upstream-to=origin/main main``


#### problem 4

**error**

``fatal: refusing to merge unrelated histories``

**solution**

``git pull origin main --allow-unrelated-histories``



FINALLY

```javascript

git pull --rebase origin main

git add .

git commit -m "resolve merge conflicts"

git push

```

*Attention*

<p>When a merge conflict occurs , you can open individual file. You will get "<<<<<<< or >>>>>>>" symbols. These refer to your changes and the changes present on remote. You can manually edit the part that is requires. after that save the file and then do : git add

The merge conflicts will be resolved.</p>

**Resources**

[Dealing with non-fast-forward errors](https://docs.github.com/en/get-started/using-git/dealing-with-non-fast-forward-errors)


[How to fix ‘failed to push some refs to’ Git errors](https://komodor.com/learn/how-to-fix-failed-to-push-some-refs-to-git-errors/)


[Pulling is not possible because you have unmerged files](https://stackoverflow.com/questions/26376832/why-does-git-say-pull-is-not-possible-because-you-have-unmerged-files)



[Git refusing to merge unrelated histories on rebase](https://stackoverflow.com/questions/37937984/git-refusing-to-merge-unrelated-histories-on-rebase?page=1&tab=scoredesc#tab-top)

[Git push rejected "non-fast-forward"](https://stackoverflow.com/questions/20467179/git-push-rejected-non-fast-forward)

[What does "Git push non-fast-forward updates were rejected" mean?](https://stackoverflow.com/questions/4684352/what-does-git-push-non-fast-forward-updates-were-rejected-mean)

["refusing to merge unrelated histories" failure while pulling to recovered repository](https://stackoverflow.com/questions/39761024/refusing-to-merge-unrelated-histories-failure-while-pulling-to-recovered-repos/39783462#39783462)