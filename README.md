# React Month Picker

Before you get started make sure to look through the code that has been provided. Server side code to retrieve data (`GET`) has been provided for you. For this code challenge, you should only modify or add files in the `src` folder.

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

This app will display a list of months on the page. When a month is clicked, it will show an alert of the month name to the user.

### Details

- Use `axios` to retrieve (`GET`) data from `/calendar` and store it in `App.js`. `/calendar` returns an array of calendar month names and ids.
- Create a new component called `MonthItem`. `MonthItem` should be the Month to display.
- Create a new component for the list of months called `MonthList`. `MonthList` should be handling the making of each `MonthItem` (creating a `MonthItem` for each month).
- When a month is clicked, it should alert the month name to the user.


### Base Mode Mockup

![Base Mode Mockup](wireframes/base-solution.gif)

---

### Tasks
- [x] Create a variable monthArray and set state to an empty array
- [x] Create a GET route on app.js and push the results to monthArray
- [x] Test rendering data to the DOM with stringify on the app.js
- [ ] Check dependencies and source if necessary 'use state' and 'use effect' from react
- [ ] Create a component 'MonthList' which takes in the monthArray via props, import it on app.js
- [ ] Create a component 'MonthItem' which takes in the mapped array from MonthList via props
- [ ] Create a variable isSelected and set state to false
- [ ] Using conditional rendering when a month is clicked set its state to true and display an alert
        to the user with the month selected
- [ ] Set attribute back to false after alert? 


## STRETCH FEATURE

- Move the header into it's own component, `Header`, as a child of App. `Header` should display the month that was just clicked. Keep the data in App.js. You will have to get the data from the `MonthItem` "up" to `App` and then into `Header`.

### Stretch Mode Mockup

![Stretch Mode Mockup](wireframes/stretch-solution.gif)
