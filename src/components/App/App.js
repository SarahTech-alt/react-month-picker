import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


function App() {

  useEffect(() => {
    getMonths();
  }, []);

  const [calendarData, setCalendarData] = useState([]);

  const getMonths = () => {
    axios({
      method: 'Get',
      url: '/calendar'
    }).then(response => {
      setCalendarData(response);
    }).catch(error => {
      console.log('There was an error getting the data', error);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Select a Month</h1>
        <h3>SELECTED MONTH GOES HERE</h3>
        <br />
      </header>
      <br />
      <p>List of months goes here</p>
      {JSON.stringify(calendarData)}
    </div>
  );
}


export default App;
