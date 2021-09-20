import React from 'react';
import axios from 'axios';
import './App.css';
import MonthList from '../MonthList/MonthList';
import { useEffect, useState } from 'react';


function App() {

useEffect(() => {
  getMonth();
}, []);


const [monthList, setMonthList] = useState([])

const getMonth = () => {
  axios({
    method: 'GET',
    url: '/calendar'
  }).then(response => {
    console.log('successfully got calendar items', response);
    console.log(response.data);
    setMonthList(response.data)
  }).catch(error => {
    console.log('there was an error getting calendar', error);
  })
}


return (
  <div className="App">
      <header className="App-header">
        <h1 className="App-title">Select a Month</h1>
        <h3>MAKE A SELECTION</h3>
        <br />
    </header>
    {/* {JSON.stringify(monthList)}> */}
    {/* Passing month list array to MonthList component */}
    <MonthList monthList={monthList}
       />
  </div>
);
}

export default App;