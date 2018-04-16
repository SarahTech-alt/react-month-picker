# Code Challenge 6

Before you get started make sure to look through the code that has been provided. Server side code to retrieve data (`GET`) has been provided for you. For this code challenge, you should only modfiy files in the `src` folder.

### Setup

Start the server.

```
npm install
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```

## BASE MODE

- Use `axios` to retrieve (`GET`) data from `/calendar` and store it in `App.js`. `/calendar` returns an array of calendar months.
- Create a new **component**'s for `MonthList` and `MonthItem.js`.
- When a month is clicked on, display that month in the **header** at the top of the page.

### Mockup

![Base Mode Mockup](wireframes/code-challenge-6-video.gif)

## STRETCH GOALS

- Move the header into it's own component.